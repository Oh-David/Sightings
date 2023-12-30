import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
  Button,
  FlatList,
  Modal,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import UploadImage from "../Features/PostItem/UploadItem/uploadImage";
import { API, Auth, Storage, graphqlOperation } from "aws-amplify";
import { ProfileScreenNavigationProp } from "models/navigationTypes";
import CheckAuthStatus from "./../../utils/CheckAuthStatus/CheckAuthStatus";
import { itemsByUserID } from "../../graphql/queries";
import { ItemsByUserIDQuery, Item } from "../../API";
import UserItem from "./ProfileFeatures/UserItem";
import { deleteItem, updateItem } from "../../graphql/mutations";

type ProfileScreenProps = {
  navigation: ProfileScreenNavigationProp;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [userItems, setUserItems] = useState<Item[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  useEffect(() => {
    const verifyAuthStatus = async () => {
      const isAuthenticated = await CheckAuthStatus(navigation);
      if (!isAuthenticated) {
        navigation.navigate("SignIn");
      } else {
        fetchUserProfile();
        fetchUserItems();
      }
    };

    verifyAuthStatus();
  }, [navigation]);

  const fetchUserItems = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.attributes.sub;

      const itemsData = (await API.graphql(
        graphqlOperation(itemsByUserID, { userID: userId })
      )) as { data: ItemsByUserIDQuery };
      const items = itemsData.data.itemsByUserID?.items ?? [];

      const activeItems = items.filter(
        (item): item is Item => item !== null && item._deleted !== true
      );

      // Convert S3 keys to presigned URLs
      const itemsWithImageUrls = await Promise.all(
        activeItems.map(async (item) => {
          const imageUrls = await Promise.all(
            (item.images || [])
              .filter((imageKey): imageKey is string => imageKey !== null)
              .map(async (imageKey) => {
                const url = await Storage.get(imageKey, { level: "public" });
                return url;
              })
          );
          return {
            ...item,
            images: imageUrls.filter((url): url is string => url !== null),
          };
        })
      );

      setUserItems(itemsWithImageUrls as Item[]);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.attributes.sub;

      const s3Path = `users/${userId}/profile/`;
      const files = await Storage.list(s3Path, {
        level: "public",
        pageSize: 1,
      });

      // Check if there are any files and get the first one
      if (files.results.length > 0) {
        const firstFile = files.results[0];
        const imageUrl = await Storage.get(firstFile.key as string, {
          level: "public",
        });

        // Set the image URL state
        setImageUri(imageUrl);
      } else {
        console.log("No profile image found for the user.");
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      navigation.navigate("SignIn");
    } catch (error) {
      console.error("Error signing out: ", error);
      Alert.alert("Logout Failed", "Unable to logout at this time.");
    }
  };

  const handleProfileImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Permission required",
        "Sorry, we need camera roll permissions to make this work!"
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.attributes.sub;
      const s3Path = `users/${userId}/profile/`;
      const files = await Storage.list(s3Path, {
        level: "public",
        pageSize: 1,
      });
      if (files.results.length > 0) {
        // Delete the previous profile picture
        await Storage.remove(files.results[0].key as string, {
          level: "public",
        });
      }
      const imageUri = result.assets[0].uri;

      await UploadImage({ imageUri: imageUri, imageType: "profile" });
      setImageUri(imageUri);
    } else {
      console.log("Image picking was cancelled or no image was selected");
    }
  };

  const handleEditItem = async (item: Item) => {
    console.log("Updated item 1:", item);
    try {
      if (!item.id) {
        console.error("Invalid updated item ID");
        return;
      }

      const response = await API.graphql(
        graphqlOperation(updateItem, {
          input: {
            id: item.id,
          },
        })
      );
      console.log("Updated item 2:", response);
      fetchUserItems();
    } catch (error) {
      console.error("Error updated item:", error);
      Alert.alert("Update Failed", "Unable to update the item at this time.");
    }
  };

  const handleDeleteItem = async (item: Item) => {
    try {
      if (!item.id || !item.images) {
        console.error("Invalid item data for deletion");
        return;
      }

      for (const imageUrl of item.images) {
        const urlParts = new URL(decodeURIComponent(imageUrl as string));
        const key = urlParts.pathname.substring(
          urlParts.pathname.indexOf("public/") + 7
        );
        try {
          await Storage.remove(key, { level: "public" });
        } catch (error) {
          console.error(`Error deleting image with key ${key}:`, error);
        }
      }

      const response = await API.graphql(
        graphqlOperation(deleteItem, {
          input: {
            id: item.id,
            _version: item._version,
          },
        })
      );
      console.log("Deleted item:", response);
      fetchUserItems();
    } catch (error) {
      console.error("Error deleting item:", error);
      Alert.alert("Delete Failed", "Unable to delete the item at this time.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.imageContainer}>
        <TouchableWithoutFeedback onLongPress={handleProfileImage}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.image} />
          ) : (
            <ActivityIndicator size="large" color="#0000ff" />
          )}
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
      <FlatList
        data={userItems}
        renderItem={({ item }) => (
          <UserItem
            item={item}
            onImageSelect={(selectedItem) => {
              if (selectedItem.images && selectedItem.images.length > 0) {
                const nonNullImages = selectedItem.images.filter(
                  (image): image is string => image !== null
                );
                setSelectedImages(nonNullImages);
                setIsModalVisible(true);
              }
            }}
            onEdit={() => handleEditItem(item)}
            onDelete={() => handleDeleteItem(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setIsModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView pagingEnabled={true} style={styles.scrollView}>
              {selectedImages.map((imageUri, index) => (
                <Image
                  key={index}
                  source={{ uri: imageUri }}
                  style={styles.modalImage}
                />
              ))}
            </ScrollView>
            <Button title="Close" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
  },
  contentContainerStyle: {
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  grid: {
    flex: 1,
  },
  gridImage: {
    width: "33%",
    aspectRatio: 1,
    margin: 1,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  scrollView: {
    // styles for your scroll view
  },
});

export default ProfileScreen;

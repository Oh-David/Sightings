import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Button,
  FlatList,
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
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [userItems, setUserItems] = useState<Item[]>([]);

  useEffect(() => {
    const verifyAuthStatus = async () => {
      const isAuthenticated = await CheckAuthStatus(navigation);
      if (!isAuthenticated) {
        navigation.navigate("SignIn");
      } else {
        fetchUserProfile();
        // fetchImages();
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

      // Convert S3 keys to presigned URLs
      const itemsWithImageUrls = await Promise.all(
        items
          .filter((item): item is Item => item !== null) // Type guard to filter out null items
          .map(async (item) => {
            // Now TypeScript knows item is not null
            const imageUrls = await Promise.all(
              (item.images || [])
                .filter((imageKey): imageKey is string => imageKey !== null) // Type guard to filter out null imageKeys
                .map(async (imageKey) => {
                  // imageKey is guaranteed to be string here
                  const url = await Storage.get(imageKey, { level: "public" });
                  return url;
                })
            );
            return {
              ...item,
              images: imageUrls.filter((url): url is string => url !== null),
            }; // Type guard to filter out null URLs
          })
      );

      setUserItems(itemsWithImageUrls as Item[]);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const userProfile = await getUserProfile();
      if (userProfile && userProfile.imageUri) {
        setImageUri(userProfile.imageUri);
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

  const getUserProfile = async () => {
    try {
      // Assuming you're storing the image URL in the user's attributes
      const currentUser = await Auth.currentAuthenticatedUser();
      return {
        imageUri: currentUser.attributes["custom:imageUrl"], // The custom attribute where the image URL is stored
      };
    } catch (error) {
      console.error("Error fetching user profile:", error);
      return null;
    }
  };
  
  const pickImage = async () => {
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
      const imageUri = result.assets[0].uri;
      setImageUri(imageUri);
    } else {
      console.log("Image picking was cancelled or no image was selected");
    }
  };

  const handleUploadImage = async () => {
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
      const imageUri = result.assets[0].uri;

      await UploadImage(imageUri);
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
      if (!item.id) {
        console.error("Invalid deleted item ID");
        return;
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
        {imageUrls[0] ? (
          <Image source={{ uri: imageUrls[0] }} style={styles.image} />
        ) : (
          <Image
            source={require("../../assets/images/bugpp.png")}
            style={styles.image}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={handleLogout} />
        <Button title="Select Image" onPress={pickImage} />
        <Button title="Upload Image" onPress={handleUploadImage} />
      </View>
      <FlatList
        data={userItems}
        renderItem={({ item }) => (
          <UserItem
            item={item}
            onEdit={() => handleEditItem(item)}
            onDelete={() => handleDeleteItem(item)}
          />
        )}
        keyExtractor={(item) => item.id}
        // ... other FlatList props ...
      />
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
});

export default ProfileScreen;

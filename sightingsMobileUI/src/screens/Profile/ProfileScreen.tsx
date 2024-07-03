import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  Modal,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from "react-native";
import {
  ProfileScreenNavigationProp,
  RouteParams,
} from "models/navigationTypes";
import UserItem from "./ProfileFeatures/UserItem";
import useProfile from "./useProfile";

type ProfileScreenProps = {
  navigation: ProfileScreenNavigationProp;
  route: { params?: RouteParams };
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
  const {
    imageUri,
    userItems,
    isModalVisible,
    selectedImages,
    offers,
    setIsModalVisible,
    setSelectedImages,
    handleLogout,
    handleProfileImage,
    handleEditItem,
    handleDeleteItem,
  } = useProfile(navigation, route);

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
      <Text style={styles.offersTitle}>Offers Made:</Text>
      <FlatList
        data={offers}
        renderItem={({ item }) => (
          <View style={styles.offerItem}>
            <Text style={styles.offerText}>
              Offered {item.productOffered} for {item.productRequested}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
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
            <FlatList
              data={selectedImages}
              renderItem={({ item }) => (
                <Image source={{ uri: item }} style={styles.modalImage} />
              )}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              pagingEnabled
            />
            <Button title="Close" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  imageContainer: {
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  buttonContainer: {
    marginVertical: 20,
  },
  offersTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  offerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  offerText: {
    fontSize: 16,
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
    margin: 10,
  },
});

export default ProfileScreen;

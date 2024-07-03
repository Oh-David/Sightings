import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
  Button as RNButton,
} from "react-native";
import {
  ProfileScreenNavigationProp,
  RouteParams,
} from "models/navigationTypes";
import useProfile from "./useProfile";
import { userItems } from "../Mock"; // Ensure this path is correct

type ProfileScreenProps = {
  navigation: ProfileScreenNavigationProp;
  route: { params?: RouteParams };
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
  const {
    //imageUri,
    //userItems
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

  const imageUri =
    "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onLongPress={handleProfileImage}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.profileImage} />
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={styles.placeholderText}>Upload Image</Text>
          </View>
        )}
      </TouchableOpacity>
      <Text style={styles.title}>Welcome to Your Profile</Text>
    </View>
  );

  const renderSectionTitle = (title: string) => (
    <View style={styles.sectionTitleContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  const renderUserItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <View style={styles.itemButtonContainer}></View>
    </View>
  );

  return (
    <FlatList
      data={[]}
      ListHeaderComponent={
        <View>
          {renderHeader()}
          {renderSectionTitle("Your Items")}
          <FlatList
            data={userItems}
            renderItem={renderUserItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.itemsContainer}
          />
          {renderSectionTitle("Offers Made")}
          <FlatList
            data={offers}
            renderItem={({ item }) => (
              <View style={styles.offerCard}>
                <Text style={styles.offerText}>
                  <Text style={styles.offerHighlight}>
                    {item.productOffered}
                  </Text>{" "}
                  for{" "}
                  <Text style={styles.offerHighlight}>
                    {item.productRequested}
                  </Text>
                </Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.offersContainer}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
              <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  placeholderImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  placeholderText: {
    color: "#757575",
    fontSize: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
  sectionTitleContainer: {
    marginLeft: 20,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  itemsContainer: {
    paddingLeft: 20,
  },
  offerCard: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  offerText: {
    fontSize: 16,
    color: "#333333",
  },
  offerHighlight: {
    fontWeight: "bold",
  },
  buttonContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  modalCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalImage: {
    width: 300,
    height: 300,
    margin: 10,
    borderRadius: 10,
  },
  offersContainer: {
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  itemButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemButton: {
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: "#dc3545",
  },
  itemButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  itemCard: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
});

export default ProfileScreen;

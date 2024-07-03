import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LandingPageScreenNavigationProp } from "models/navigationTypes";

const CustomButtons: React.FC = () => {
  const navigation = useNavigation<LandingPageScreenNavigationProp>();

  const goToProfile = () => navigation.navigate("Profile");
  const goToPostItem = () => navigation.navigate("PostItem");
  const goToProductList = () => navigation.navigate("ProductList");

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={goToProfile}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToProductList}>
        <Text style={styles.buttonText}>Products</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={goToPostItem}>
        <Text style={styles.buttonText}>Post Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#4CAF50", // Green background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // Rounded corners
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: "#fff", // White text
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButtons;

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
    backgroundColor: "#FFFFFF", // Pure white background
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25, // Rounded corners
    borderWidth: 1,
    borderColor: "#CCCCCC", // Light grey border
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000000", // Black text
    fontSize: 16,
    fontWeight: "600", // Semi-bold text
    // fontFamily: "Helvetica", // Classic font
  },
});

export default CustomButtons;

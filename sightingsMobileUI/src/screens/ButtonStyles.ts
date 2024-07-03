import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
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

import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
  blueButton: {
    backgroundColor: "#007BFF",
    borderWidth: 0,
  },
  blueButtonText: {
    color: "#FFFFFF",
  },
  redButton: {
    backgroundColor: "#FF3B30",
    borderWidth: 0,
  },
  redButtonText: {
    color: "#FFFFFF",
  },
});
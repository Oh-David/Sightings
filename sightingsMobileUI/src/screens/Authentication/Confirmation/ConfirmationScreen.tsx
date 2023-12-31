import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { Auth } from "aws-amplify";
import {
  ConfirmationScreenNavigationProp,
  ConfirmationScreenRouteProp,
} from "models/navigationTypes";

type CreateAccountProps = {
  route: ConfirmationScreenRouteProp;
  navigation: ConfirmationScreenNavigationProp;
};

const ConfirmationScreen: React.FC<CreateAccountProps> = ({
  route,
  navigation,
}) => {
  const { username } = route.params;
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isConfirming, setIsConfirming] = useState(false);
  const inputRefs = Array(6)
    .fill(0)
    .map(() => React.createRef<TextInput>());

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text) {
      focusNextInput(index);
    }

    if (
      newCode.every((digit) => digit.trim() !== "") &&
      newCode.join("").length === 6
    ) {
      // Only try to confirm sign-up if all fields are non-empty
      confirmSignUp(newCode.join(""));
    }
  };

  const confirmSignUp = async (fullCode: string) => {
    setIsConfirming(true);

    try {
      await Auth.confirmSignUp(username, fullCode);
      Alert.alert("Success", "Your account has been confirmed!");
      navigation.navigate("LandingPage");
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("Error", error.message || "Failed to confirm the account");
      } else {
        Alert.alert("Error", "An unexpected error occurred");
      }
    } finally {
      setIsConfirming(false);
    }
  };

  const handleResendCode = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert(
        "Code Resent",
        "A new confirmation code has been sent to your email."
      );
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(
          "Error",
          error.message || "Failed to resend confirmation code"
        );
      } else {
        Alert.alert("Error", "An unexpected error occurred");
      }
    }
  };

  const focusNextInput = (index: number) => {
    if (index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const resendConfirmationCode = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert('Code Resent', 'A new confirmation code has been sent to your email.');
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('Error', error.message || 'Failed to resend confirmation code');
      } else {
        Alert.alert('Error', 'An unexpected error occurred');
      }
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 80 })}
    >
      <ScrollView
        contentContainerStyle={styles.innerContainer}
        keyboardShouldPersistTaps="handled"
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.formContainer}>
            {/* Input fields */}
            <View style={styles.codeInputContainer}>
              {code.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={inputRefs[index]}
                  value={digit}
                  onChangeText={(text) => handleCodeChange(text, index)}
                  placeholder="-"
                  style={styles.input}
                  maxLength={1}
                  keyboardType="number-pad"
                  editable={!isConfirming}
                  returnKeyType="done"
                  blurOnSubmit={false}
                  onSubmitEditing={() => focusNextInput(index)}
                />
              ))}
            </View>
            <TouchableOpacity onPress={resendConfirmationCode} style={styles.resendButton}>
              <Text style={styles.link}>Resend Confirmation Code</Text>
            </TouchableOpacity>
            {/* Resend Code Button */}
            <TouchableOpacity
              onPress={handleResendCode}
              style={styles.resendButton}
            >
              <Text>Resend Code</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  innerContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: 40,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    textAlign: "center",
  },
  resendButton: {
    marginTop: 20,
  },
  link: {
    
  }
});

export default ConfirmationScreen;

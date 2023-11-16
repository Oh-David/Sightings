import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Auth } from 'aws-amplify';
import { ConfirmationScreenNavigationProp, ConfirmationScreenRouteProp } from 'models/navigationTypes';

type CreateAccountProps = {
    route: ConfirmationScreenRouteProp;
    navigation: ConfirmationScreenNavigationProp;
};

const ConfirmationScreen: React.FC<CreateAccountProps> = ({ route, navigation }) => {
  const { username } = route.params;
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isConfirming, setIsConfirming] = useState(false);

  useEffect(() => {
    const confirmSignUp = async () => {
      if (code.length === 6) { // Assuming the confirmation code is 6 digits
        setIsConfirming(true);
        const fullCode = code.join('');

        try {
          await Auth.confirmSignUp(username, fullCode);
          Alert.alert('Success', 'Your account has been confirmed!');
          navigation.navigate('LandingPage');
        } catch (error) {
          if (error instanceof Error) {
            Alert.alert('Error', error.message || 'Failed to confirm the account');
          } else {
            Alert.alert('Error', 'An unexpected error occurred');
          }
        } finally {
          setIsConfirming(false);
        }
      }
    };

    confirmSignUp();
  }, [code, username, navigation]);

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  const handleResendCode = async () => {
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
    <View style={styles.container}>    
      {code.map((digit, index) => (
        <TextInput
        key={index}
        value={digit}
        onChangeText={(text) => handleCodeChange(text, index)}
        placeholder="-"
        style={styles.input}
        maxLength={1}
        keyboardType="number-pad"
        editable={!isConfirming}
        />
      ))}
      <TouchableOpacity onPress={handleResendCode}>
        <Text>Resend Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
      borderColor: 'gray',
      borderRadius: 5,
      textAlign: 'center',
    },
  });

export default ConfirmationScreen;

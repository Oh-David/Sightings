import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  LandingPage: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

type SignUpScreenProps = {
  navigation: SignUpScreenNavigationProp;
};

const CreateAccountScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSignUp = async () => {
    const formattedPhoneNumber = `+1${phoneNumber}`;

    try {
      const signUpResponse = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          phone_number: formattedPhoneNumber,
        }
      });
      navigation.navigate('LandingPage');
      console.log("Sign up success", signUpResponse);
    } catch (error) {
      console.log("Sign up error", error);
    }
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
    return isValid;
  };
  
  const validatePhoneNumber = (phoneNumber: string) => {
    const numericPhoneNumber = phoneNumber.replace(/\D/g, '');
    const isValid = numericPhoneNumber.length === 10;
    setIsPhoneNumberValid(isValid);
    return isValid;
  };

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
    setPasswordsMatch(newPassword === confirmPassword);
  };
  
  const handleConfirmPasswordChange = (newConfirmPassword: string) => {
    setConfirmPassword(newConfirmPassword);
    setPasswordsMatch(newConfirmPassword === password);
  };
  
  
  return (
    <View style={styles.container}>
      <View style={styles.input} >
      <TextInput 
        value={email}
        placeholder="Email" 
        onChangeText={(text) =>{
          setEmail(text);
          validateEmail(text);
        }}
        style={[!isEmailValid && styles.invalidInput]} 
        onBlur={() => validateEmail(email)}
        testID="email-address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {!isEmailValid && <Text style={styles.errorMessage}>Invalid email address</Text>}
      </View>
      <View style={styles.input} >
        <TextInput 
          value={phoneNumber}
          placeholder="Phone Number" 
          onChangeText={(text) => {
            const numericText = text.replace(/\D/g, '');
            setPhoneNumber(numericText);
            validatePhoneNumber(numericText);
          }}
          style={!isPhoneNumberValid && styles.invalidInput}
          onBlur={() => validatePhoneNumber(phoneNumber)}
          keyboardType="numeric"
          testID="input-number" 
          maxLength={10}
        />
        {!isPhoneNumberValid && <Text style={styles.errorMessage}>Invalid phone number</Text>}
      </View>
      <View style={styles.input} >
        <TextInput 
          placeholder="Password" 
          onChangeText={(text) => {
            setPassword(text);
            handlePasswordChange(text);
          }}
          style={!passwordsMatch && styles.invalidInput}
          secureTextEntry 
          testID="input-password" 
        />
      </View>
      <View style={styles.input} >
        <TextInput 
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            handleConfirmPasswordChange(text);
          }}
          placeholder="Confirm Password" 
          style={!passwordsMatch && styles.invalidInput}
          secureTextEntry 
          testID="input-confirm-password" 
        />
        {!passwordsMatch && <Text style={styles.errorMessage}>Passwords do not match</Text>}
      </View>
      
      <Button 
        title="Sign Up" 
        onPress={handleSignUp} 
      />

      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.link}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  link: {
    color: 'blue',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  invalidInput: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
  },
});

export default CreateAccountScreen;

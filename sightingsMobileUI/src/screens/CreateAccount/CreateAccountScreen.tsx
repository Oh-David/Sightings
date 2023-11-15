import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;

type SignUpScreenProps = {
  navigation: SignUpScreenNavigationProp;
};

const CreateAccountScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

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
      console.log("Sign up success", signUpResponse);
    } catch (error) {
      console.log("Sign up error", error);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
        value={email}
        placeholder="Email" 
        onChangeText={setEmail}
        style={styles.input} 
        testID="email-address"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput 
        value={phoneNumber}
        placeholder="Phone Number" 
        onChangeText={setPhoneNumber}
        style={styles.input} 
        keyboardType="phone-pad"
        testID="input-number" 
      />
      <TextInput 
        placeholder="Password" 
        onChangeText={setPassword}
        style={styles.input} 
        secureTextEntry 
        testID="input-password" 
      />
      <TextInput 
        placeholder="Confirm Password" 
        style={styles.input} 
        secureTextEntry 
        testID="input-confirm-password" 
      />
      <Button 
        title="Sign Up" 
        onPress={handleSignUp} 
      />

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Sign Up</Text>
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
});

export default CreateAccountScreen;

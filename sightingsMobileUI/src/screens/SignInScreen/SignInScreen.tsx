import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { Auth } from 'aws-amplify';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SignIn: undefined;
  CreateAccount: undefined;
  LandingPage: undefined;
};

type SignInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

type SignInScreenProps = {
  navigation: SignInScreenNavigationProp;
};

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignIn = async () => {
    try {
      const user = await Auth.signIn({
        username,
        password
      });
      console.log('Test Sign in successful!', user);
      // Navigate to the next screen after sign in
      navigation.navigate('LandingPage');

    } catch (error) {
      console.error('Error signing in:', error);
      Alert.alert("Nope");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username" 
        style={styles.input} 
        testID="input-username"
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password" 
        style={styles.input} 
        secureTextEntry 
        testID="input-password" 
      />
      <Button 
        title="Sign In" 
        onPress={() => {handleSignIn}} 
      />
      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.link}>Don't have an account? Sign Up</Text>
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
  link: { // Define your link style here
    color: 'blue',
    marginTop: 15,
    textDecorationLine: 'underline', // Make the text underlined to indicate it's a link
  },
});

export default SignInScreen;

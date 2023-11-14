import React from 'react';
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

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Full Name" 
        style={styles.input} 
        testID="input-full-name" 
      />
      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        keyboardType="email-address"
        testID="input-email" 
      />
      <TextInput 
        placeholder="Password" 
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
        title="Create Account" 
        onPress={() => { /* Handle account creation */ }} 
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

import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Username" 
        style={styles.input} 
        testID="input-username" 
      />
      <TextInput 
        placeholder="Password" 
        style={styles.input} 
        secureTextEntry 
        testID="input-password" 
      />
      <Button 
        title="Sign In" 
        onPress={() => { /* Handle sign in */ }} 
      />
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
});

export default SignInScreen;

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { Auth } from 'aws-amplify';
import { ForgotPasswordScreenNavigationProp } from 'models/navigationTypes';
import { RouteProp } from '@react-navigation/native';

type ForgotPasswordScreenProps  = {
    navigation: ForgotPasswordScreenNavigationProp;
  };

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState(''); // Use the passed username

  const handleSubmit = async () => {
    try {
      await Auth.forgotPassword(username);
      navigation.navigate('ResetPassword', { username });
    } catch (error) {
        if (typeof error === 'object' && error !== null && 'message' in error) {
          // Now TypeScript knows error is an object with a 'message' property
          const message = (error as { message: string }).message;
          Alert.alert('Error', message);
          } else {
          // Handle the case where error is not an object with a 'message' property
          Alert.alert('Error', 'An error occurred while resetting the password');
          }    
        }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        style={styles.input}
      />
      <Button title="Submit" onPress={handleSubmit} />
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

export default ForgotPasswordScreen;

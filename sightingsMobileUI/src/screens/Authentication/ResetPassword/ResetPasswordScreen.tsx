import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Auth } from 'aws-amplify';
import { ResetPasswordScreenNavigationProp, ResetPasswordScreenRouteProp } from 'models/navigationTypes';

type ResetPasswordScreenProps = {
  navigation: ResetPasswordScreenNavigationProp;
  route: ResetPasswordScreenRouteProp;
};

const ResetPasswordScreen: React.FC<ResetPasswordScreenProps> = ({ route, navigation }) => {
  const { username } = route.params;
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async () => {
    try {
      await Auth.forgotPasswordSubmit(username, code, newPassword);
      Alert.alert('Success', 'Password reset successfully');
      navigation.navigate('SignIn');
    } catch (error) {
      if (typeof error === 'object' && error !== null && 'message' in error) {
        const message = (error as { message: string }).message;
        Alert.alert('Error', message);
      } else {
        Alert.alert('Error', 'An error occurred while resetting the password');
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={code}
        onChangeText={setCode}
        placeholder="Verification Code"
        style={styles.input}
      />
      <TextInput
        value={newPassword}
        onChangeText={setNewPassword}
        placeholder="New Password"
        secureTextEntry
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
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});

export default ResetPasswordScreen;

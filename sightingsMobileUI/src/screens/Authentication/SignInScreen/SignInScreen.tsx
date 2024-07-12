import React, {useState} from 'react'
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native'
import {useDispatch} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import {signInUser} from '../../Data/Api/ApiService'
import {AppDispatch} from 'screens/Data/Store'

const SignInScreen: React.FC = () =>
{
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const navigation = useNavigation()

  const handleSignIn = async () =>
  {
    const payload = {username, passwordHash: password}

    try
    {
      const resultAction = await dispatch(signInUser(payload))
      console.log(resultAction)

      if (signInUser.fulfilled.match(resultAction))
      {
        Alert.alert('Success', 'Signed in successfully')
        navigation.navigate('LandingPage')
      } else
      {
        Alert.alert('Error', resultAction.payload || 'Failed to sign in')
      }
    } catch (error)
    {
      Alert.alert('Error', 'An error occurred while signing in')
    }
  }

  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate('CreateAccount')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
})

export default SignInScreen
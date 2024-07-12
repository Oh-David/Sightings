import React, {useState} from 'react'
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native'
import {useDispatch} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import {AppDispatch} from './Data/Store'
import {registerUser} from './Data/Api/ApiService'
import {StackNavigationProp} from '@react-navigation/stack'
import {RootStackParamList} from 'models/navigationTypes'

type ProductListNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>

const CreateAccountScreen: React.FC = () =>
{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const dispatch = useDispatch<AppDispatch>()
    const navigation = useNavigation<ProductListNavigationProp>()

    const handleSignUp = async () =>
    {
        const dateJoined = new Date().toISOString().split('T')[0]
        const payload = {username, passwordHash: password, email, name, location, dateJoined}

        try
        {
            const resultAction = await dispatch(registerUser(payload))
            if (registerUser.fulfilled.match(resultAction))
            {
                Alert.alert('Success', 'Account created successfully')
                navigation.navigate('SignIn')
            } else
            {
                Alert.alert('Error', resultAction.payload || 'Failed to create account')
            }
        } catch (error)
        {
            Alert.alert('Error', 'An error occurred while creating the account')
        }
    }

    return (
        <View style={styles.container}>
            <Text>Create a New Account</Text>
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
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Location"
                value={location}
                onChangeText={setLocation}
            />
            <Button title="Sign Up" onPress={handleSignUp} />
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

export default CreateAccountScreen
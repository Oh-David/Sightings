import React from 'react';
import Amplify from 'aws-amplify';
// import awsConfig from './aws-exports';
import awsConfig from './src/aws-exports';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import CreateAccountScreen from './src/screens/CreateAccount/CreateAccountScreen';

Amplify.Amplify.configure(awsConfig);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

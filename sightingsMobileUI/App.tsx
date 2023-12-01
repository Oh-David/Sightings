import React, { useEffect, useState } from 'react';
import { Amplify } from 'aws-amplify';
import awsConfig from './src/aws-exports';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import ProfileScreen from './src/screens/Account/ProfileScreen'
import CreateAccountScreen from './src/screens/CreateAccount/CreateAccountScreen';
import ConfirmationScreen from './src/screens/Confirmation/ConfirmationScreen';
import LandingPage from './src/screens/LandingPage/LandingPage';
import AsyncStorage from '@react-native-async-storage/async-storage';

Amplify.configure(awsConfig);

const Stack = createNativeStackNavigator();

export default function App() {
  const [initialRouteName, setInitialRouteName] = useState('SignIn');
  const [isTokenChecked, setIsTokenChecked] = useState(false); // New state to track token check completion
  
  useEffect(() => {
    const checkLoginState = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setInitialRouteName('LandingPage'); // User is logged in
      }
      setIsTokenChecked(true);
    };

    checkLoginState();
  }, []);
  
  if (!isTokenChecked) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

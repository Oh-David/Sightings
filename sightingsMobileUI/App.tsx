import React, {useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SignInScreen from './src/screens/Authentication/SignInScreen/SignInScreen'
import ForgotPasswordScreen from './src/screens/Authentication/ForgotPassword/ForgotPasswordScreen'
import ResetPasswordScreen from './src/screens/Authentication/ResetPassword/ResetPasswordScreen'
import ProfileScreen from './src/screens/Profile/ProfileScreen'
import CreateAccountScreen from './src/screens/Authentication/CreateAccount/CreateAccountScreen'
import ConfirmationScreen from './src/screens/Authentication/Confirmation/ConfirmationScreen'
import LandingPage from './src/screens/LandingPage/LandingPage'
import PostItem from './src/screens/Features/PostItem/PostItem'
import ItemDetails from './src/screens/LandingPage/ItemDetails/ItemDetails'
import ProductList from './src/screens/ProductList'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ProductDetail from './src/screens/ProductDetail'
import {Provider} from 'react-redux'
import store from './src/screens/Data/Store'
import ProductsPage from './src/screens/ProductsPage'
import BidScreen from './src/screens/BidScreen'
import {setUserId} from './src/screens/Data/UserSlice'

const Stack = createNativeStackNavigator()

const App = () =>
{
  const [initialRouteName, setInitialRouteName] = useState('SignIn')
  const [isTokenChecked, setIsTokenChecked] = useState(false)

  useEffect(() =>
  {
    const checkLoginState = async () =>
    {
      const userId = await AsyncStorage.getItem('userId')
      if (userId)
      {
        store.dispatch(setUserId(userId))
        setInitialRouteName('LandingPage')
      }
      setIsTokenChecked(true)
    }

    checkLoginState()
  }, [])

  if (!isTokenChecked)
  {
    return null
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={initialRouteName}>
          <Stack.Screen name="SignIn" component={SignInScreen} options={{title: 'Sign In'}} />
          <Stack.Screen name="CreateAccount" component={CreateAccountScreen} options={{title: 'Create Account'}} />
          <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} options={{title: 'Confirm Your Account'}} />
          <Stack.Screen name="LandingPage" component={LandingPage} options={{title: 'Welcome to BarterApp'}} />
          <Stack.Screen name="PostItem" component={PostItem} options={{title: 'Post a New Item'}} />
          <Stack.Screen name="ItemDetails" component={ItemDetails} options={{title: 'Item Details'}} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{title: 'Your Profile'}} />
          <Stack.Screen name="ProductList" component={ProductList} options={{title: 'Product Listings'}} />
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{title: 'Forgot Password'}} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{title: 'Reset Password'}} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} options={{title: 'Product Detail'}} />
          <Stack.Screen name="ProductsPage" component={ProductsPage} options={{title: 'Products'}} />
          <Stack.Screen name="BidScreen" component={BidScreen} options={{title: 'Bids'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
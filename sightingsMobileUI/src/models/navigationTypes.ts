import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    SignIn: undefined;
    CreateAccount: undefined;
    LandingPage: undefined;
    ConfirmationScreen: { username: string }
    Profile: undefined; 
};

export type ConfirmationScreenRouteProp = RouteProp<RootStackParamList, 'ConfirmationScreen'>;
export type ConfirmationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ConfirmationScreen'>;

export type SignInScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignIn'>;
export type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateAccount'>;
export type LandingPageScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LandingPage'>;
export type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

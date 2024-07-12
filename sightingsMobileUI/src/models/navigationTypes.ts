import {RouteProp} from "@react-navigation/native"
import {StackNavigationProp} from "@react-navigation/stack"
import {Item} from "API"
import {Product} from "screens/Data/Models/Product"

export interface Offer
{
  productOffered: string
  productRequested: string
}

export type RouteParams = {
  newOffer?: Offer
}

export type RootStackParamList = {
  ProductDetail: {product: Product}
  ProductList: undefined
  SignIn: undefined
  CreateAccount: undefined
  LandingPage: undefined
  PostItem: undefined
  ItemDetails: {item: Item}
  ConfirmationScreen: {username: string}
  Profile: undefined
  UploadSightingImageForm: {
    photoUri: string
  }
  ForgotPassword: undefined
  ResetPassword: {username: string}
  ProductsPage: undefined
  BidScreen: undefined
}

export type ConfirmationScreenRouteProp = RouteProp<
  RootStackParamList,
  "ConfirmationScreen"
>
export type ConfirmationScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ConfirmationScreen"
>

export type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SignIn"
>
export type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "CreateAccount"
>
export type LandingPageScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "LandingPage"
>
export type PostItemScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "PostItem"
>
export type ItemDetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ItemDetails"
>
export type UploadSightingImageFormNavigationProp = StackNavigationProp<
  RootStackParamList,
  "UploadSightingImageForm"
>
export type ForgotPasswordScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ForgotPassword"
>
export type ResetPasswordScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ResetPassword"
>
export type ResetPasswordScreenRouteProp = RouteProp<
  RootStackParamList,
  "ResetPassword"
>

export type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>

export type ProductDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ProductDetail"
>

export type BidsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "BidScreen"
>

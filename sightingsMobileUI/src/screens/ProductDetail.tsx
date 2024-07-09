import React, {useState} from "react"
import
{
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
  ToastAndroid,
  Alert,
} from "react-native"
import {RouteProp, useNavigation} from "@react-navigation/native"
import {buttonStyles} from "./ButtonStyles"
import {useSelector, useDispatch} from "react-redux"
import {RootState} from "./Data/Store"
import {addBid} from "./Data/BidSlice"
import {RootStackParamList} from "models/navigationTypes"
import {StackNavigationProp} from "@react-navigation/stack"
import {Product} from "./Data/Product"

type ProductDetailRouteProp = RouteProp<RootStackParamList, "ProductDetail">

interface ProductDetailProps
{
  route: ProductDetailRouteProp
}

const ProductDetail: React.FC<ProductDetailProps> = ({route}) =>
{
  const userProducts = useSelector((state: RootState) => state.products.userProducts) as Product[]
  const {product} = route.params
  const [selectedItem, setSelectedItem] = useState<(typeof userProducts)[0] | null>(null)
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()
  const dispatch = useDispatch()

  const handleTradeOffer = () =>
  {
    if (selectedItem)
    {
      const bid = {
        product1Id: selectedItem.id,
        product2Id: product.id,
      }

      dispatch(addBid(bid))

      if (Platform.OS === "android")
      {
        ToastAndroid.show(
          "Trade offer made successfully!",
          ToastAndroid.SHORT
        )
      } else
      {
        Alert.alert(
          "Success",
          "Trade offer made successfully!"
        )
      }

      navigation.navigate("LandingPage")
    } else
    {
      if (Platform.OS === "android")
      {
        ToastAndroid.show(
          "Please select an item to trade.",
          ToastAndroid.SHORT
        )
      } else
      {
        Alert.alert(
          "Error",
          "Please select an item to trade."
        )
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: product.image}} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.tradeFor}>
        Wants to trade for: {product.tradeFor}
      </Text>
      <Text style={styles.selectText}>Select an item to trade:</Text>
      <FlatList
        data={userProducts}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => setSelectedItem(item)}>
            <View
              style={[
                styles.userItem,
                selectedItem && selectedItem.id === item.id
                  ? styles.selectedItem
                  : null,
              ]}
            >
              <Image source={{uri: item.image}} style={styles.userImage} />
              <Text style={styles.userName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={buttonStyles.button} onPress={handleTradeOffer}>
        <Text style={buttonStyles.buttonText}>Make Trade Offer</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 16,
    marginVertical: 10,
  },
  tradeFor: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  selectText: {
    fontSize: 16,
    marginVertical: 10,
  },
  userItem: {
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    alignItems: "center",
  },
  selectedItem: {
    borderColor: "#000",
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  userName: {
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007BFF",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
})

export default ProductDetail
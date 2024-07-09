import React from "react"
import
{
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native"
import {useSelector} from "react-redux"
import useProductList from "./useProductList"

import {Product} from "./Data/ProductSlice"
import {itemDescriptions, itemImages, itemNames, itemTradeFor} from "./Mock"
import {RootState} from "./Data/Store"

const ProductList: React.FC = () =>
{
  const products = useSelector(
    (state: RootState) => state.products.userProducts
  ) as Product[]

  const {handlePress} = useProductList(
    itemNames,
    itemDescriptions,
    itemImages,
    itemTradeFor
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
            {
              handlePress(item)
            }}
          >
            <View style={styles.productItem}>
              <Image source={{uri: item.image}} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDescription}>
                  {item.description}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
  },
})

export default ProductList

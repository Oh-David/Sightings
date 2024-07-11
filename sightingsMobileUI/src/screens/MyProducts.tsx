import React from "react"
import {useSelector, useDispatch} from "react-redux"
import
{
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native"
import {FontAwesome} from "@expo/vector-icons"
import {removeUserItem} from "./Data/ProductSlice"
import {RootState} from "./Data/Store"
import {Product} from "./Data/Models/Product"

const MyProducts: React.FC = () =>
{
  const userProducts = useSelector((state: RootState) => state.products.userProducts) as Product[]
  const dispatch = useDispatch()

  const handleRemoveItem = (id: string) =>
  {
    dispatch(removeUserItem(id))
  }

  const renderItem = ({item}: {item: Product}) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.itemContent}
        onPress={() => { }}
      >
        <Image source={{uri: item.image}} style={styles.itemImage} />
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemoveItem(item.id)}
      >
        <FontAwesome name="trash" size={24} color="#696969" />
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={userProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
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
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#fff",
  },
  itemContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 14,
    color: "#666",
  },
  removeButton: {
    padding: 5,
  },
})

export default MyProducts
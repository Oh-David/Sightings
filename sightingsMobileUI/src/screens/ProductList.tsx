import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserItemsList from "./Data/UserItemsList";

const products = [
  {
    id: "1",
    name: "Bicycle",
    description: "A nice road bike.",
    image:
      "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Electric scooter",
  },
  {
    id: "2",
    name: "Guitar",
    description: "An acoustic guitar.",
    image:
      "https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Keyboard piano",
  },
  {
    id: "3",
    name: "Laptop",
    description: "A powerful gaming laptop.",
    image:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "High-end smartphone",
  },
  {
    id: "4",
    name: "Camera",
    description: "A DSLR camera.",
    image:
      "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Drone",
  },
  // Add more products as needed
];

const ProductList: React.FC = () => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate("ProductDetail", { product: item });
  };

  return (
    <View style={styles.container}>
      <UserItemsList />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={styles.productItem}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
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
  );
};

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
});

export default ProductList;

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { buttonStyles } from "./ButtonStyles";

const userItems = [
  {
    id: "1",
    name: "Electric scooter",
    image:
      "https://images.pexels.com/photos/122477/pexels-photo-122477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "2",
    name: "Keyboard piano",
    image:
      "https://images.pexels.com/photos/164935/pexels-photo-164935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "3",
    name: "High-end smartphone",
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "4",
    name: "Drone",
    image:
      "https://images.pexels.com/photos/1930185/pexels-photo-1930185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  // Add more user items as needed
];

const ProductDetail = ({ route, navigation }) => {
  const { product } = route.params;
  const [selectedItem, setSelectedItem] = useState(null);

  const handleTradeOffer = () => {
    if (selectedItem) {
      alert(`You offered your ${selectedItem.name} for the ${product.name}`);
      navigation.goBack();
    } else {
      alert("Please select an item to trade.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.tradeFor}>
        Wants to trade for: {product.tradeFor}
      </Text>
      <Text style={styles.selectText}>Select an item to trade:</Text>
      <FlatList
        data={userItems}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedItem(item)}>
            <View
              style={[
                styles.userItem,
                selectedItem && selectedItem.id === item.id
                  ? styles.selectedItem
                  : null,
              ]}
            >
              <Image source={{ uri: item.image }} style={styles.userImage} />
              <Text style={styles.userName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={buttonStyles.button} onPress={handleTradeOffer}>
        <Text style={buttonStyles.buttonText}>Make Trade Offer</Text>
      </TouchableOpacity>
    </View>
  );
};

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
});

export default ProductDetail;

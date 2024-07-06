import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserItemsList from "./Data/UserItemsList";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { RootState } from "./Data/Store";
import { addItem, removeItem, UserItem } from "./Data/UserItems";

const itemNames = [
  "Laptop",
  "Smartphone",
  "Headphones",
  "Backpack",
  "Water Bottle",
  "Notebook",
  "Pen",
  "Sunglasses",
  "Camera",
  "Charger",
];

const itemDescriptions = [
  "A powerful device.",
  "A handy gadget.",
  "High-quality sound.",
  "A sturdy backpack.",
  "Stay hydrated.",
  "Keep your notes.",
  "For smooth writing.",
  "Protect your eyes.",
  "Capture moments.",
  "Stay charged.",
];

const itemTradeFor = [
  "Tablet",
  "Smartwatch",
  "Speakers",
  "Travel bag",
  "Fitness tracker",
  "E-book reader",
  "Stylus pen",
  "Hat",
  "Lens",
  "Power bank",
];

const itemImages = [
  "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1187344/pexels-photo-1187344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/158780/pexels-photo-158780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/167832/pexels-photo-167832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/399321/pexels-photo-399321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

const ProductList: React.FC = () => {
  const products = useSelector(
    (state: RootState) => state.userItems.items
  ) as UserItem[];
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = useNavigation();

  const handlePress = (item: UserItem) => {
    //navigation.navigate("ProductDetail", { product: item });
  };

  const handleAddItem = () => {
    const newItem: UserItem = {
      id: uuidv4(),
      name: itemNames[currentIndex],
      description: itemDescriptions[currentIndex],
      image: itemImages[currentIndex],
      tradeFor: itemTradeFor[currentIndex],
    };
    dispatch(addItem(newItem));
    setCurrentIndex((currentIndex + 1) % itemNames.length);
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <View style={styles.container}>
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

                <Button
                  title="Remove"
                  onPress={() => handleRemoveItem(item.id)}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <Button title="Add" onPress={handleAddItem} />
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

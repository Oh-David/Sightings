import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./Store";
import { addItem, removeItem, UserItem } from "./UserItems";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { v4 as uuidv4 } from "uuid";

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

const UserItemsList: React.FC = () => {
  const items = useSelector(
    (state: RootState) => state.userItems.items
  ) as UserItem[];
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddItem = () => {
    const newItem: UserItem = {
      id: uuidv4(),
      name: itemNames[currentIndex],
      image: "https://via.placeholder.com/50",
    };
    dispatch(addItem(newItem));
    setCurrentIndex((currentIndex + 1) % itemNames.length);
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Products</Text>
      <Button title="Add Item" onPress={handleAddItem} />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <TouchableOpacity
                onPress={() => handleRemoveItem(item.id)}
                style={styles.removeButton}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: "#ff4d4d",
    padding: 8,
    borderRadius: 4,
  },
  removeButtonText: {
    color: "#fff",
  },
});

export default UserItemsList;

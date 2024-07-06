import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./Store";
import { addItem, removeItem } from "./UserItems";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
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
  const items = useSelector((state: RootState) => state.userItems.items);
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddItem = () => {
    const newItem = {
      id: uuidv4(),
      name: itemNames[currentIndex],
      image: "...",
    };
    dispatch(addItem(newItem));
    setCurrentIndex((currentIndex + 1) % itemNames.length);
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <View style={styles.container}>
      <Button title="Add Item" onPress={handleAddItem} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <TouchableOpacity
              onPress={() => handleRemoveItem(item.id)}
              style={styles.removeButton}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 18,
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

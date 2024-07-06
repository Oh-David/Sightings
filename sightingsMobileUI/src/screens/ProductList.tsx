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
import { useSelector, useDispatch } from "react-redux";
import useProductList from "./useProductList"; // Adjust the import path

import { RootState } from "./Data/Store";
import { UserItem } from "./Data/UserItems";
import { itemDescriptions, itemImages, itemNames, itemTradeFor } from "./Mock";

const ProductList: React.FC = () => {
  const products = useSelector(
    (state: RootState) => state.userItems.items
  ) as UserItem[];

  const { handleAddItem, handleRemoveItem } = useProductList(
    itemNames,
    itemDescriptions,
    itemImages,
    itemTradeFor
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {}}>
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

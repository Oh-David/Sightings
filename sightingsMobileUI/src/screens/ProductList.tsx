import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const products = [
  { id: "1", name: "Bicycle", description: "A nice road bike." },
  { id: "2", name: "Guitar", description: "An acoustic guitar." },
  { id: "3", name: "Laptop", description: "A powerful gaming laptop." },
  { id: "4", name: "Camera", description: "A DSLR camera." },
  // Add more products as needed
];

const ProductList: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
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
  productItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
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

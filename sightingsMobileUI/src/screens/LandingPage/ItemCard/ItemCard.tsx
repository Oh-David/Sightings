import { Item } from "API";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ItemCard: React.FC<{ item: Item  }> = ({ item }) => {
  const defaultImageUrl = "path-to-default-image";

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: item.images?.[0] || defaultImageUrl }}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.description || 'No description available'}</Text>
      {/* Other details */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // Styles for the card
  },
  image: {
    // Styles for the image
  },
  title: {
    // Styles for the title
  },
  // Other styles
});

export default ItemCard;

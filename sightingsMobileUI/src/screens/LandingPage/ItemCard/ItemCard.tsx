import { Item } from "API";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

const ItemCard: React.FC<{ item: Item }> = ({ item }) => {
  const defaultImageUrl = "";

  return (
    <View style={styles.card}>
      {item.images && item.images[0] ? (
        <TouchableOpacity
          onPress={() => {
            console.log('item', item);
          }}
        >
          <Image source={{ uri: item.images[0] }} style={styles.image} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            console.log("touched");
          }}
        >
          <Image source={{ uri: defaultImageUrl }} style={styles.image} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {},
  image: {
    width: 125, // example width
    height: 125, // example height
    resizeMode: "cover", // or 'cover'
  },
});

export default ItemCard;

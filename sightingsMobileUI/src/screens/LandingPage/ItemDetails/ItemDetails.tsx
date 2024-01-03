import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ItemDetails: React.FC<{ route: any; navigation: any }> = ({
  route,
  navigation,
}) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
      <Image source={{ uri: item.images[0] }} style={styles.image} />
      <Text>{item.description}</Text>
      <Text>{item.price}</Text>
    </View>
  );
};

// Add styles as needed
const styles = StyleSheet.create({
    container: {
        // styles for the container
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        // styles for the image
        width: 200,
        height: 200,
        resizeMode: 'cover',
      },
  // other styles
});

export default ItemDetails;

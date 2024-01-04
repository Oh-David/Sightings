import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import useFetchUserItems from "../../../screens/Features/FetchItems/useFetchUserItems";

const screenWidth = Dimensions.get('window').width;

const ItemDetails: React.FC<{ route: any; navigation: any }> = ({
  route,
  navigation,
}) => {
  const { item } = route.params;
  const [userItems, refreshUserItems, clearUserItems] = useFetchUserItems();

  console.log('my items', useFetchUserItems());

  return (
    <ScrollView style={styles.container}>
      {/* Horizontal scroll for images */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.imageContainer}
      >
        {item.images &&
          item.images.map((uri: string, index: number) => (
            <Image
              key={index}
              source={{ uri }}
              style={styles.image}
              onError={(error) => console.log("Image load error:", error)}
            />
          ))}
      </ScrollView>

      {/* Item details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>Price: {item.price}</Text>
        {/* You can add more details here */}
      </View>
    </ScrollView>
  );
};

// Add styles as needed
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    height: 250, // Set height for the image scroll view
  },
  image: {
    width: screenWidth, // Full width of the screen
    height: screenWidth * (3 / 4), // Maintain a 4:3 aspect ratio
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 10, // Padding for details section
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  // Add more styles as needed
});

export default ItemDetails;

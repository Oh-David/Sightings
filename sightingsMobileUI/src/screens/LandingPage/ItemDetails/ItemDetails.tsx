import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import useFetchUserItems from "../../../screens/Features/FetchItems/useFetchUserItems";
import { Item } from "API";
import { API, Auth, graphqlOperation } from "aws-amplify";

const screenWidth = Dimensions.get("window").width;

const ItemDetails: React.FC<{ route: any; navigation: any }> = ({
  route,
  navigation,
}) => {
  const { item } = route.params;
  const [selectedTradeItems, setSelectedTradeItems] = useState<Item[]>([]);
  const [userItems, fetchUserItems, clearUserItems] = useFetchUserItems();

  const handleSelectItemForTrade = (tradeItem: Item) => {
    // Update state to include or exclude the clicked item
    setSelectedTradeItems((prevItems) => {
      if (prevItems.includes(tradeItem)) {
        return prevItems.filter((item) => item.id !== tradeItem.id);
      } else {
        return [...prevItems, tradeItem];
      }
    });
  };

  const handleSubmitTradeOffer = async () => {
    const currentUser = await Auth.currentAuthenticatedUser();
    const myUserId = currentUser.attributes.sub;
    const tradeOffer = {
      targetItem: {
        itemId: item.id, // ID of the item being viewed
        ownerId: item.userID, // UserID of the owner of the item being viewed
      },
      myOffer: {
        itemIds: selectedTradeItems.map((item) => item.id), // IDs of the items being offered for trade
        userId: myUserId // Your user ID
      }
    };

    try {
      // Example: Posting the trade offer using a GraphQL mutation
      // Replace `createTradeOffer` with your actual mutation name
      // const response = await API.graphql(graphqlOperation(createTradeOffer, { input: tradeOffer }));
      // console.log('Trade offer submitted:', response);

      // Clear the selected items after successful submission
      setSelectedTradeItems([]);

      // Include any other actions like navigation or user feedback
    } catch (error) {
      console.error("Error submitting trade offer:", error);
    }
  };

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
      <FlatList
        horizontal
        data={userItems}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectItemForTrade(item)}>
            {item.images && item.images[0] && (
              <Image
                source={{ uri: item.images[0] }}
                style={styles.tradeItemImage}
              />
            )}
            {selectedTradeItems.includes(item) && (
              <View style={styles.selectedOverlay} />
            )}
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Barter" onPress={handleSubmitTradeOffer} />
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
    resizeMode: "cover",
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
  tradeItemImage: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
  },
  selectedOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  // Add more styles as needed
});

export default ItemDetails;

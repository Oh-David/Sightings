import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet, ScrollView, FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { LandingPageScreenNavigationProp } from "models/navigationTypes";
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import { listPublicItems } from "../../graphql/queries";
import { Item } from "API";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import ItemCard from "../LandingPage/ItemCard/ItemCard";
import CheckAuthStatus from "../../utils/CheckAuthStatus/CheckAuthStatus";
import CustomButtons from "./CustomButtons";

const LandingPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const navigation = useNavigation<LandingPageScreenNavigationProp>();
  const [publicItems, setPublicItems] = useState<Item[]>([]);
  const renderItem = ({ item }: { item: Item }) => (
    <ItemCard item={item} navigation={navigation} />
  );

  useEffect(() => {
    const verifyAuthStatus = async () => {
      const isAuthenticated = await CheckAuthStatus();
      if (!isAuthenticated) {
        navigation.navigate("SignIn");
      } else {
        fetchPublicItems();
      }
    };

    verifyAuthStatus();
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      // Define a function that fetches data
      const fetchData = async () => {
        const isAuthenticated = await CheckAuthStatus();
        if (isAuthenticated && isActive) {
          await fetchPublicItems(); // Fetch items for authenticated user
        }
      };

      fetchData();

      return () => {
        isActive = false; // Prevent setting state on unmounted component
        setPublicItems([]); // Clear items when the screen loses focus
      };
    }, [])
  );

  const fetchPublicItems = async () => {
    try {
      // Fetch the current authenticated user's ID
      const currentUser = await Auth.currentAuthenticatedUser();
      const currentUserId = currentUser.attributes.sub;

      const result = (await API.graphql(
        graphqlOperation(listPublicItems, { limit: 10 })
      )) as GraphQLResult<any>;

      if (result.data && result.data.listPublicItems) {
        // Filter out null items, items with null 'updatedAt' field, and items posted by the current user
        const validItems = result.data.listPublicItems.items.filter(
          (item: Item) =>
            item &&
            item.updatedAt &&
            item.userID !== currentUserId &&
            !item._deleted
        );

        const itemsWithImageUrls = await Promise.all(
          validItems.map(async (item: Item) => {
            const imageUrls = await Promise.all(
              (item.images || [])
                .filter((imageKey): imageKey is string => imageKey !== null)
                .map(async (imageKey) => {
                  const url = await Storage.get(imageKey, { level: "public" });
                  return url;
                })
            );
            return {
              ...item,
              images: imageUrls.filter((url): url is string => url !== null),
            };
          })
        );

        setPublicItems(itemsWithImageUrls as Item[]);
      }
    } catch (error) {
      console.error("Error fetching public items:", error);
    }
  };
  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  const goToPostItem = () => {
    navigation.navigate("PostItem");
  };
  const goToProductList = () => {
    navigation.navigate("ProductList");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={publicItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        columnWrapperStyle={styles.row}
      />
      <View style={{ marginBottom: 10 }}>
        <CustomButtons />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  buttonContainer: {
    padding: 10,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    padding: 2,
  },
  separator: {
    height: 10, // Spacing between rows
  },
  card: {
    flex: 1, // Each card will take up 1/3 of the row
    aspectRatio: 1,
    margin: 5, // Adjust spacing between cards
    // Update the rest of your ItemCard styles here
  },
  grid: {
    flexDirection: "row",
  },
  itemContainer: {
    flex: 1 / 3, // Divide the row into three equal columns
    aspectRatio: 1, // To make the cell square in shape
    // Set margins as needed for spacing, adjust these values as per your design
    marginHorizontal: 1,
    marginVertical: 1,
  },
  image: {
    width: "100%", // Take up all available width
    height: "100%", // Take up all available height
    resizeMode: "cover", // Cover the entire space of the image view
  },
});

export default LandingPage;

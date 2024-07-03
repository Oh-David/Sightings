import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { LandingPageScreenNavigationProp } from "models/navigationTypes";
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import { listPublicItems } from "../../graphql/queries";
import { Item } from "API";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import ItemCard from "../LandingPage/ItemCard/ItemCard";
import CheckAuthStatus from "../../utils/CheckAuthStatus/CheckAuthStatus";
import CustomButtons from "./CustomButtons";
import ProductList from "../ProductList";

const LandingPage: React.FC = () => {
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
      const fetchData = async () => {
        const isAuthenticated = await CheckAuthStatus();
        if (isAuthenticated && isActive) {
          await fetchPublicItems();
        }
      };

      fetchData();

      return () => {
        isActive = false;
        setPublicItems([]);
      };
    }, [])
  );

  const fetchPublicItems = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const currentUserId = currentUser.attributes.sub;

      const result = (await API.graphql(
        graphqlOperation(listPublicItems, { limit: 10 })
      )) as GraphQLResult<any>;

      if (result.data && result.data.listPublicItems) {
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

  return (
    <View style={styles.container}>
      <View style={styles.heroSection}>
        <Image
          source={{
            uri: "https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          }}
          style={styles.heroImage}
        />
        <Text style={styles.tagline}>
          Discover Amazing Items to Barter or Trade
        </Text>
        <Text style={styles.description}>
          Join our community and start trading your items with others. It's
          simple, fun, and rewarding!
        </Text>
      </View>
      {publicItems.length === 0 ? (
        <ProductList /> // Use the ProductList component when there are no public items
      ) : (
        <FlatList
          data={publicItems}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          columnWrapperStyle={styles.row}
          ListEmptyComponent={
            <Text style={styles.noItemsText}>
              No items available for barter at the moment.
            </Text>
          }
        />
      )}
      <View style={styles.buttonContainer}>
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
  heroSection: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    marginBottom: 10,
  },
  heroImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 100,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
    padding: 2,
  },
  noItemsText: {
    textAlign: "center",
    color: "#999999",
    marginTop: 20,
  },
  buttonContainer: {
    padding: 10,
  },
});

export default LandingPage;

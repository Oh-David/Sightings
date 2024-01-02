import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LandingPageScreenNavigationProp } from "models/navigationTypes";
import { API, Auth, graphqlOperation } from "aws-amplify";
import { listItems } from "../../graphql/queries";
import { listPublicItems as listPublicItemsQuery } from "../../graphql/queries";
import { Item, ListItemsQuery, ListPublicItemsQuery } from "API";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import ItemCard from "../LandingPage/ItemCard/ItemCard";

const LandingPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const navigation = useNavigation<LandingPageScreenNavigationProp>();
  const [publicItems, setPublicItems] = useState<Item[]>([]);

  const listPublicItemsQuery = /* GraphQL */ `
  query ListPublicItems($limit: Int) {
    listPublicItems(limit: $limit) {
      items {
        id
        title
        isPublic
        images
      }
    }
  }
`;

  useEffect(() => {
    // fetchItems();
    fetchPublicItems();
  }, []);

  const fetchPublicItems = async () => {
    try {
      // Make the API call and assert the result as GraphQLResult<any>
      const result = await API.graphql(graphqlOperation(listPublicItemsQuery, { limit: 10 })) as GraphQLResult<any>;
  
      console.log('result', result.data);
  
      // Now TypeScript knows that result is a GraphQLResult, you can access the data property
      if (result.data && result.data.listPublicItems) {
        console.log('result', result.data.listPublicItems);
  
        const items = result.data.listPublicItems.items;
  
        // Use JSON.stringify to log the objects in the items array
        console.log('Items:', JSON.stringify(items, null, 2));
  
        setPublicItems(items);
      }
    } catch (error) {
      console.error('Error fetching public items:', error);
    }
  };

  const fetchItems = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const currentUserId = currentUser.attributes.sub;
      // console.log("currentUserId", currentUserId);
      // const itemData = await API.graphql(graphqlOperation(listPublicItems));
      const itemData = await API.graphql(graphqlOperation(listPublicItems));
      console.log("Query result:", itemData);
      // const itemData = await API.graphql(
      //   graphqlOperation(listPublicItems, {
      //     filter: {
      //       isPublic: {
      //         eq: 1, // Query only public items
      //       },
      //       userID: {
      //         ne: currentUserId // Optional: Exclude items posted by the current user
      //       }
      //     },

      //   })
      // );
      // console.log("itemData", itemData);

      if ("data" in itemData && itemData.data) {
        const typedData = itemData as GraphQLResult<ListItemsQuery>;
        const itemsArray = typedData.data?.listItems?.items;

        console.log("itemsArray", itemsArray); // Log the full items array

        if (itemsArray) {
          // Filter out items posted by the current user
          const otherUsersItems = itemsArray.filter(
            (item): item is Item =>
              item !== null && item.userID !== currentUserId
          );

          console.log("otherUsersItems", otherUsersItems);
          setItems(otherUsersItems);
        } else {
          setItems([]);
        }
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Go to Profile" onPress={goToProfile} />
        </View>
        {items.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
        <View style={styles.buttonContainer}>
          <Button title="Post" onPress={goToPostItem} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#f5f5f5",
  },
  buttonContainer: {
    width: "100%",
    padding: 10,
  },
  postButtonContainer: {
    width: "100%",
    padding: 10,
  },
});

export default LandingPage;

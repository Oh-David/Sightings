import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootState } from "./Data/Store";
import { RootStackParamList } from "models/navigationTypes";
import { removeItem, UserItem } from "./Data/UserItems";

type MyProductsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ProductDetail"
>;

const MyProducts: React.FC = () => {
  const products = useSelector(
    (state: RootState) => state.userItems.items
  ) as UserItem[];
  const dispatch = useDispatch();
  const navigation = useNavigation<MyProductsScreenNavigationProp>();

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const handlePress = (item: UserItem) => {
    navigation.navigate("ProductDetail", { product: item });
  };

  const renderItem = ({ item }: { item: UserItem }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.itemContent}
        onPress={() => handlePress(item)}
      >
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemoveItem(item.id)}
      >
        <FontAwesome name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Products</Text>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 21,
    fontWeight: "600",
    marginBottom: 20,
    color: "#333",
  },
  listContainer: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 15,
  },
  itemText: {
    fontSize: 18,
    color: "#333",
  },
  removeButton: {
    padding: 5,
  },
});

export default MyProducts;

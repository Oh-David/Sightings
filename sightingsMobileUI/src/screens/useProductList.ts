import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addUserItem, removeUserItem, Product } from "./Data/ProductSlice";
import { useNavigation } from "@react-navigation/native";

const useProductList = (
  itemNames: string[],
  itemDescriptions: string[],
  itemImages: string[],
  itemTradeFor: string[]
) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddItem = () => {
    const newItem: Product = {
      id: uuidv4(),
      name: itemNames[currentIndex],
      description: itemDescriptions[currentIndex],
      image: itemImages[currentIndex],
      tradeFor: itemTradeFor[currentIndex],
    };
    dispatch(addUserItem(newItem));
    setCurrentIndex((currentIndex + 1) % itemNames.length);
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeUserItem(id));
  };

  const handlePress = (item: Product) => {
    navigation.navigate("ProductDetail", { product: item });
  };

  return {
    handleAddItem,
    handleRemoveItem,
    handlePress,
  };
};

export default useProductList;

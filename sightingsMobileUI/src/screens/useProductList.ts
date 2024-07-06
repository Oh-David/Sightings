import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addItem, removeItem, UserItem } from "./Data/UserItems";
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
    const newItem: UserItem = {
      id: uuidv4(),
      name: itemNames[currentIndex],
      description: itemDescriptions[currentIndex],
      image: itemImages[currentIndex],
      tradeFor: itemTradeFor[currentIndex],
    };
    dispatch(addItem(newItem));
    setCurrentIndex((currentIndex + 1) % itemNames.length);
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const handlePress = (item: UserItem) => {
    navigation.navigate("ProductDetail", { product: item });
  };

  return {
    handleAddItem,
    handleRemoveItem,
    handlePress,
  };
};

export default useProductList;

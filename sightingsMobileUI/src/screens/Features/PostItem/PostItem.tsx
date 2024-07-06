import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addItem, removeItem, UserItem } from "../../Data/UserItems";
import {
  itemDescriptions,
  itemImages,
  itemNames,
  itemTradeFor,
} from "../../Mock";
import { Button, TextInput, View, StyleSheet } from "react-native";
import React from "react";

const PostItem: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [tradeFor, setTradeFor] = useState("");

  const handleAddItem = () => {
    const newItem = {
      id: new Date().toISOString(),
      name,
      description,
      image,
      tradeFor,
    };
    dispatch(addItem(newItem));
  };

  const handleAutoGenerate = () => {
    const randomIndex = Math.floor(Math.random() * itemNames.length);
    setName(itemNames[randomIndex]);
    setDescription(itemDescriptions[randomIndex]);
    setImage(itemImages[randomIndex]);
    setTradeFor(itemTradeFor[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />
      <TextInput
        style={styles.input}
        placeholder="Trade For"
        value={tradeFor}
        onChangeText={setTradeFor}
      />
      <Button title="Post Item" onPress={handleAddItem} />
      <Button title="Auto Generate" onPress={handleAutoGenerate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default PostItem;

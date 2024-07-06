import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../Data/UserItems";
import {
  itemDescriptions,
  itemImages,
  itemNames,
  itemTradeFor,
} from "../../Mock";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { buttonStyles } from "../../ButtonStyles";

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
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
        placeholderTextColor="#999"
      />
      <TextInput
        style={styles.input}
        placeholder="Trade For"
        value={tradeFor}
        onChangeText={setTradeFor}
        placeholderTextColor="#999"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={buttonStyles.button} onPress={handleAddItem}>
          <Text style={buttonStyles.buttonText}>Post Item</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={buttonStyles.button}
          onPress={handleAutoGenerate}
        >
          <Text style={buttonStyles.buttonText}>Auto Generate</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    height: 50,
    borderColor: "#DDD",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default PostItem;

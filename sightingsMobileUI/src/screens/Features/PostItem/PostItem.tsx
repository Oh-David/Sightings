import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import UploadImage from "./UploadItem/uploadImage";
import { useNavigation } from "@react-navigation/native";
import { PostItemScreenNavigationProp } from "models/navigationTypes";
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import { createItem } from "../../../../src/graphql/mutations";

// Define the types for the sighting report details
type PostItemForm = {
  title: string;
  description?: string;
  images: string[];
  // Add other fields as needed
};

const PostItem: React.FC = () => {
  const navigation = useNavigation<PostItemScreenNavigationProp>();
  const [post, setPost] = useState<PostItemForm>({
    title: "",
    description: "",
    images: [],
    // Initialize other fields
  });

  const handleSelectImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert(
        "Permission required",
        "Camera roll permissions are needed to select images."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets) {
      setPost((previousPost) => ({
        ...previousPost,
        images: [
          ...previousPost.images,
          ...result.assets.map((asset) => asset.uri),
        ],
      }));
    } else {
      console.log("Image picking was cancelled or no image was selected");
    }
  };

  const handleSubmit = async () => {
    if (!post.title || post.images.length === 0) {
      Alert.alert(
        "Error",
        "Please fill in all required fields and upload at least one image."
      );
      return;
    }

    const currentUser = await Auth.currentAuthenticatedUser();
    const userId = currentUser.attributes.sub;

    // Upload images to S3 and get their keys
    const uploadedKeys = await Promise.all(
      post.images.map(async (imageUri) => {
        const key = await UploadImage(imageUri);
        return key;
      })
    );

    const itemData = {
      title: post.title,
      description: post.description,
      images: uploadedKeys.filter((key): key is string => key !== null),
      userID: userId,
    };

    try {
      await API.graphql(graphqlOperation(createItem, { input: itemData }));
      Alert.alert("Success", "Your item has been posted to the market.");
      setPost({ title: "", description: "", images: [] });
      navigation.navigate("LandingPage");
    } catch (error) {
      console.error("Error submitting the item:", error);
      Alert.alert("Error", "An error occurred while submitting the item.");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {post.images.map((uri, index) => (
          <Image key={index} source={{ uri }} style={styles.image} />
        ))}
      </View>
      <Button title="Upload Image" onPress={handleSelectImage} />
      <TextInput
        value={post.title}
        onChangeText={(text) => setPost({ ...post, title: text })}
        placeholder="Title (Required)"
        style={styles.input}
      />
      <TextInput
        value={post.description}
        onChangeText={(text) => setPost({ ...post, description: text })}
        placeholder="Description"
        style={styles.input}
        multiline
      />
      {/* You may want to add other input fields as needed */}
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    height: 200,
    marginBottom: 10,
  },
  buttonContainer: {
    marginBottom: 10,
    // If you want to arrange buttons side by side, you might need additional styling
  },
});

export default PostItem;

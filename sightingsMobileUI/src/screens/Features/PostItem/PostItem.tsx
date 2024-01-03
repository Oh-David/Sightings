import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import UploadImage from "./UploadItem/uploadImage";
import { useNavigation } from "@react-navigation/native";
import { PostItemScreenNavigationProp } from "models/navigationTypes";
import { API, Auth, graphqlOperation, Storage } from "aws-amplify";
import { createItem } from "../../../../src/graphql/mutations";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Define the types for the sighting report details
type PostItemForm = {
  title: string;
  description?: string;
  images: string[];
  price: number | null;
};

const PostItem: React.FC = () => {
  const navigation = useNavigation<PostItemScreenNavigationProp>();
  const [post, setPost] = useState<PostItemForm>({
    title: "",
    description: "",
    images: [],
    price: null,
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

  const handleDeleteImage = (index: number) => {
    setPost((previousPost) => {
      const newImages = [...previousPost.images];
      newImages.splice(index, 1);
      return { ...previousPost, images: newImages };
    });
  };

  const handleSubmit = async () => {
    if (!post.title || post.images.length === 0 || post.price == null || isNaN(post.price)) {
      Alert.alert(
        "Error",
        "Please fill in all required fields, upload at least one image, and provide a valid price."
      );
      return;
    }

    const currentUser = await Auth.currentAuthenticatedUser();
    const userId = currentUser.attributes.sub;

    // Upload images to S3 and get their keys
    const uploadedKeys = await Promise.all(
      post.images.map(async (imageUri) => {
        const key = await UploadImage({
          imageUri: imageUri,
          imageType: "item",
        });
        return key;
      })
    );

    const itemData = {
      title: post.title,
      description: post.description,
      images: uploadedKeys.filter((key): key is string => key !== null),
      userID: userId,
      isPublic: "true",
      price: post.price,
    };

    try {
      await API.graphql(graphqlOperation(createItem, { input: itemData }));
      Alert.alert("Success", "Your item has been posted to the market.");
      setPost({ title: "", description: "", images: [], price: null });
      navigation.navigate("LandingPage");
    } catch (error) {
      console.error("Error submitting the item:", error);
      Alert.alert("Error", "An error occurred while submitting the item.");
    }
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.horizontalScrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {post.images.map((uri, index) => (
            <View key={index} style={styles.imageWrapper}>
              <Image source={{ uri }} style={styles.thumbnailImage} />
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => handleDeleteImage(index)}
              >
                <FontAwesome name="times" size={20} color="white" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
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
      <TextInput
        value={post.price?.toString() || ""}
        onChangeText={(text) =>
          setPost({ ...post, price: text ? Number(text) : null })
        }
        placeholder="Price"
        keyboardType="numeric" // Set keyboard type for numeric input
        style={styles.input}
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
  imageWrapper: {
    marginRight: 10, // Add space between images
    alignItems: "center",
    position: "relative",
  },
  deleteButton: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "red",
    borderRadius: 50,
    padding: 5,
  },
  deleteButtonText: {
    color: "white",
  },
  contentContainer: {
    flexGrow: 1,
  },
  thumbnailImage: {
    width: 100, // Smaller width for thumbnails
    height: 75, // Adjust height accordingly
    resizeMode: "cover",
    borderRadius: 5,
  },
  horizontalScrollContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
});

export default PostItem;

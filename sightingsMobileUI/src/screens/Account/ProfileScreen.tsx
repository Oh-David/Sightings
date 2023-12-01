import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker';

const ProfileScreen = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
        Alert.alert('Permission required', 'Sorry, we need camera roll permissions to make this work!');
        return;
      }

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
    
      if (!result.canceled) {
        const imageResult = result as any; // Type assertion here
        setImageUri(imageResult.uri);
      }
  };

  const uploadImage = async () => {
    if (imageUri) {
      // Implement your image upload logic here
      Alert.alert('Image Uploaded', 'Your profile picture has been updated!');
    }
  };

  return (
    <ScrollView 
      style={styles.scrollViewStyle}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <Text style={styles.title}>Profile</Text>
      <View style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Image source={require('../../assets/images/bugpp.png')} style={styles.image} />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Select Image" onPress={pickImage} />
        <Button title="Upload Image" onPress={uploadImage} disabled={!imageUri} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
        // Styles for the ScrollView, e.g., flex, backgroundColor
    },
  contentContainerStyle: {
        alignItems: 'center', // Align items for children
        justifyContent: 'center', // Justify content for children
        // Other styles affecting the layout of children
    },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
});

export default ProfileScreen;

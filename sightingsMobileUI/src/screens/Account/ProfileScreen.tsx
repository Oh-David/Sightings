import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import uploadImage from '../LandingPage/Features/UploadSighting/uploadImage';

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

    console.log('Image picker result:', result); // Log the entire result object
      
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const imageUri = result.assets[0].uri;
      setImageUri(imageUri);
      console.log('Image picker result:', result);
    } else {
      console.log('Image picking was cancelled or no image was selected');
    }
  };

  // const uploadImage = async () => {
  //   if (imageUri) {
  //     try {
  //       // Fetch the file from the local filesystem
  //       const response = await fetch(imageUri);
  //       const blob = await response.blob();

  //       // Upload the file to S3
  //       const uploadedImage = await Storage.put('', blob, {
  //         contentType: 'image/jpeg', // Set the content type
  //       });

  //       Alert.alert('Image Uploaded', 'Your profile picture has been updated!');

  //       // Do something with the uploaded image response if needed
  //       console.log(uploadedImage);

  //     } catch (error) {
  //       console.error('Error uploading photo:', error);
  //       Alert.alert('Error', 'Failed to upload photo');
  //     }
  //   }
  // };

  const handleUploadImage = async () => {
    if (imageUri) {
      console.log('Image picked:', imageUri); // Log the URI
      await uploadImage(imageUri);
    } else {
      Alert.alert('No Image', 'Please select an image first.');
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
        <Button title="Upload Image" onPress={handleUploadImage} disabled={!imageUri} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
},
  contentContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
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

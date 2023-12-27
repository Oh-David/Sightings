import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, Button, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import UploadImage from '../Features/ReportSightings/UploadSighting/uploadImage';
import { Auth, Storage } from 'aws-amplify';
import { ProfileScreenNavigationProp } from 'models/navigationTypes';
import CheckAuthStatus from './../../utils/CheckAuthStatus/CheckAuthStatus';

type ProfileScreenProps = {
  navigation: ProfileScreenNavigationProp;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const verifyAuthStatus = async () => {
      const isAuthenticated = await CheckAuthStatus(navigation);
      if (!isAuthenticated) {
        navigation.navigate('SignIn');
      } else {
        fetchUserProfile();
        fetchImages();
      }
    };

    verifyAuthStatus();
  }, [navigation]);

  const fetchUserProfile = async () => {
    try {
      // Assuming getUserProfile() is a function that fetches the user's profile
      // including the image URL from your backend or user attributes.
      const userProfile = await getUserProfile();
      if (userProfile && userProfile.imageUri) {
        setImageUri(userProfile.imageUri);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const getUserProfile = async () => {
    try {
      // Assuming you're storing the image URL in the user's attributes
      const currentUser = await Auth.currentAuthenticatedUser();
      return {
        imageUri: currentUser.attributes['custom:imageUrl'] // The custom attribute where the image URL is stored
      };
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }
  };

  const fetchImages = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      const userId = currentUser.attributes.sub;
      const imageKeysResponse = await Storage.list(`users/${userId}/images/`, { pageSize: 1000 });

      const imageKeys = imageKeysResponse.results;

      const urls = await Promise.all(
        imageKeys.map(async (item) => {
          if (item.key) {
            const signedUrl = await Storage.get(item.key);
            return signedUrl;
          }
          return null;
        })
      ).then(results => results.filter(url => url !== null)); // Filter out null values  

      setImageUrls(urls as string[]);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

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

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const imageUri = result.assets[0].uri;
      setImageUri(imageUri);
    } else {
      console.log('Image picking was cancelled or no image was selected');
    }
  };

  const handleUploadImage = async () => {
    if (imageUri) {
      console.log('Image picked:', imageUri); // Log the URI
      await UploadImage(imageUri);
    } else {
      Alert.alert('No Image', 'Please select an image first.');
    }
  }; 

  const renderItem = ({ item }: { item: string }) => (
    <Image source={{ uri: item }} style={styles.gridImage} />
  );

  return (
    <View style={styles.container}>
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
      <FlatList
        data={imageUrls}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.gridImage} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3} // For grid layout
        style={styles.grid}
      />
    </View>
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
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  grid: {
    flex: 1,
  },
  gridImage: {
    width: '33%',
    aspectRatio: 1,
    margin: 1,
  },
});

export default ProfileScreen;

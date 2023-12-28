import { Auth, Storage } from 'aws-amplify';
import { Alert } from 'react-native';

const UploadImage = async (image: string) => {


  try {
    // Fetch the current user ID
    const currentUser = await Auth.currentAuthenticatedUser();
    const userId = currentUser.attributes.sub;

    // Fetch the file from the local filesystem
    const response = await fetch(image);
    const blob = await response.blob();
    const timestamp = new Date().toISOString(); // Use ISO string for uniqueness
    const key = `users/${userId}/images/${timestamp}-${blob.size}.jpg`; // Unique key for each image
    
    // Upload the file to S3
    const uploadedImage = await Storage.put(key, blob, {
      contentType: 'image/jpeg', // Set the content type
    });

    Alert.alert('Image Uploaded', 'Your profile picture has been updated!');

    // Do something with the uploaded image response if needed
    console.log('Image Uploaded', uploadedImage);

  } catch (error) {
    console.error('Error uploading photo:', error);
    Alert.alert('Error', 'Failed to upload photo');
  }
};

export default UploadImage;
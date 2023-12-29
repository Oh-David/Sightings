import React, { useCallback, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import CameraModal from '../Features/Camera/CameraModal';
import { useNavigation } from '@react-navigation/native';
import { LandingPageScreenNavigationProp } from 'models/navigationTypes';
import PostItem from '../../screens/Features/PostItem/PostItem';

const LandingPage: React.FC = () => {
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const navigation = useNavigation<LandingPageScreenNavigationProp>();

  const handleCancelPostItem = () => {
    // Logic to handle cancellation, e.g., hide the PostItem component
    setIsCameraVisible(false);
  };
  
  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const goToPostItem = () => {
    navigation.navigate('PostItem');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Go to Profile" onPress={goToProfile} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Post" onPress={goToPostItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    width: '100%',
    padding: 10,
  },
  postButtonContainer: {
    width: '100%',
    padding: 10,
  }
});

export default LandingPage;

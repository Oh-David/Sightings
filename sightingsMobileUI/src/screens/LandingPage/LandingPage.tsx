import React, { useCallback, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import WildlifeMap from './Features/Map/MapComponent';
import CameraModal from './Features/Camera/CameraModal';
import { useNavigation } from '@react-navigation/native';
import { LandingPageScreenNavigationProp } from 'models/navigationTypes';

const wildlifeSightings = [
  { id: 1, latitude: 37.78825, longitude: -122.4324, title: "Deer Sighting", description: "Spotted a deer in the woods." },
  // ... more sightings ...
];

const LandingPage: React.FC = () => {
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const navigation = useNavigation<LandingPageScreenNavigationProp>();
  
  const handlePressCamera = () => {
    setIsCameraVisible(true);
  };

  const closeCamera = useCallback(() => {
    setIsCameraVisible(false);
  }, []);
  
  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Go to Profile" onPress={goToProfile} />
      </View>
      <WildlifeMap sightings={wildlifeSightings} />
      {isCameraVisible && (
        <CameraModal isVisible={isCameraVisible} onClose={closeCamera} />
      )}
      <View>
        <Button title="Sighting" onPress={() => setIsCameraVisible(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  buttonContainer: {
    width: '100%',
    padding: 10,
  },
});

export default LandingPage;

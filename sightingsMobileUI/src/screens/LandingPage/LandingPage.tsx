import React, { useCallback, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import WildlifeMap from './Features/Map/MapComponent';
import CameraModal from './Features/Camera/CameraModal';

const wildlifeSightings = [
  { id: 1, latitude: 37.78825, longitude: -122.4324, title: "Deer Sighting", description: "Spotted a deer in the woods." },
  // ... more sightings ...
];

const LandingPage: React.FC = () => {
  const [isCameraVisible, setIsCameraVisible] = useState(false);

  const handlePressCamera = () => {
    setIsCameraVisible(true);
  };

  const closeCamera = useCallback(() => {
    setIsCameraVisible(false);
  }, []);
  
  return (
    <View style={styles.container}>
      <WildlifeMap sightings={wildlifeSightings} />
      <View style={styles.buttonContainer}>
        <Button title="Sighting" onPress={() => setIsCameraVisible(true)} />
      </View>
      {isCameraVisible && (
        <CameraModal isVisible={isCameraVisible} onClose={closeCamera} />
      )}
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

import { LandingPageScreenNavigationProp } from 'models/navigationTypes';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import ReportSightings from './Features/ReportSightings/ReportSightings';

const ufoSightings = [
  { id: 1, latitude: 37.78825, longitude: -122.4324, title: "Sighting 1", description: "Description 1" },
  // ... more sightings ...
];

type LandingPageScreenProps = {
  navigation: LandingPageScreenNavigationProp;
};

const LandingPage: React.FC<LandingPageScreenProps> = ({ navigation }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isCameraVisible, setIsCameraVisible] = useState(false);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} /* ... other props ... */>
      {ufoSightings.map(sighting => (
      <Marker
        key={sighting.id}
        coordinate={{ latitude: sighting.latitude, longitude: sighting.longitude }}
        title={sighting.title}
        description={sighting.description}
      />
      ))}
      </MapView>
      <View style={styles.buttonContainer}>
        <Button title="Sighting" onPress={() => setIsFormVisible(true)} />
      </View>
      <Modal
        visible={isFormVisible}
        onRequestClose={() => setIsFormVisible(false)}
      >
        <ReportSightings />
      </Modal>
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    width: '100%',
    padding: 10,
  },
});

export default LandingPage;

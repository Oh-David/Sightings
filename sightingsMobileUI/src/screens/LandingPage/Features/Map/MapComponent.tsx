import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

interface Sighting {
    id: number;
    latitude: number;
    longitude: number;
    title: string;
    description: string;
  }
  
  interface WildlifeMapProps {
    sightings: Sighting[];
  }
  
  const WildlifeMap: React.FC<WildlifeMapProps> = ({ sightings }) => {  
    return (
      <View style={{ flex: 100 }}>
      {sightings.map(sighting => (
      <Text key={sighting.id}>{sighting.description}</Text>
    ))}
      <MapView style={{ flex: 1 }}>
      {sightings.map(sighting => (
       <Marker
         key={sighting.id}
         coordinate={{ latitude: sighting.latitude, longitude: sighting.longitude }}
         title={sighting.title}
         description={sighting.description}
       />
     ))}
    </MapView>
    </View>
  );
};

export default WildlifeMap;

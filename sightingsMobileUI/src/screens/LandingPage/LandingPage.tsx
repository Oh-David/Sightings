import { StackNavigationProp } from '@react-navigation/stack';
import { LandingPageScreenNavigationProp } from 'models/navigationTypes';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


type LandingPageScreenProps = {
  navigation: LandingPageScreenNavigationProp;
};

const LandingPage: React.FC<LandingPageScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
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
});

export default LandingPage;

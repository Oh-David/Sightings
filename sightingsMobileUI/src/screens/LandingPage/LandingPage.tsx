import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type RootStackParamList = {
  SignIn: undefined;
  CreateAccount: undefined;
  LandingPage: undefined;
};

type LandingPageScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LandingPage'>;

type LandingPageScreenProps = {
  navigation: LandingPageScreenNavigationProp;
};

const LandingPage: React.FC = () => {
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

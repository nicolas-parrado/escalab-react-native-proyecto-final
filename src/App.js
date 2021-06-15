import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import creatures from './lib/creatures.json';
import CreaturesList from './components/CreaturesList';
import colors from './styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
});

const App = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle={'dark-content'} />
    <CreaturesList creatures={creatures.data.food} />
  </SafeAreaView>
);

export default App;

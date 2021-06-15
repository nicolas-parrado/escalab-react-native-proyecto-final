import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from '../../styles/colors';
import Sticker from '../Sticker';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    margin: 10,
    borderRadius: 10,
    width: 170,
    padding: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  title: {
    color: colors.black,
    fontWeight: 'bold',
  },
});

const CreatureCard = ({
  id,
  name,
  image,
  category,
  common_locations,
  cooking_effect,
  description,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Sticker type={category} />
    </View>
  );
};

export default CreatureCard;

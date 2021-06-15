import React from 'react';
import {StyleSheet, View} from 'react-native';
import EquipmentSticker from './Sticker/EquipmentSticker';
import MonsterSticker from './Sticker/MonsterSticker';
import CreatureSticker from './Sticker/CreatureSticker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
    flexWrap: 'wrap-reverse',
  },
});

const Sticker = ({type}) => {
  return (
    <View style={styles.container}>
      {type === 'equipments' && <EquipmentSticker />}
      {type === 'monsters' && <MonsterSticker />}
      {type === 'creatures' && <CreatureSticker style={styles.test} />}
    </View>
  );
};

export default Sticker;

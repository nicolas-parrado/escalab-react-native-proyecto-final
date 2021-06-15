import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    color: colors.darkGrey,
  },
});

export default class EquipmentSticker extends Component {
  render() {
    return (
      <Icon
        style={styles.container}
        name="shield-alt"
        size={20}
        color={colors.darkRed}
      />
    );
  }
}

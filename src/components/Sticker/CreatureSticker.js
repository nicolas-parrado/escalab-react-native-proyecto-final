import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    color: colors.darkRed,
  },
});

export default class CreatureSticker extends Component {
  render() {
    return (
      <Icon
        style={styles.container}
        name="baidu"
        size={20}
        color={colors.darkRed}
      />
    );
  }
}

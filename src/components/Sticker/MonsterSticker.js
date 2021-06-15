import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    color: colors.purple,
  },
});

export default class MonsterSticker extends Component {
  render() {
    return (
      <Icon
        style={styles.container}
        name="wolf-pack-battalion"
        size={20}
        color={colors.darkRed}
      />
    );
  }
}

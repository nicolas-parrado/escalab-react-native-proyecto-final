import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import CreatureCard from './Creature/CreatureCard';

class CreaturesList extends Component {
  render() {
    const {creatures} = this.props;
    return (
      <FlatList
        horizontal={false}
        initialNumToRender={10}
        numColumns={2}
        data={creatures}
        keyExtractor={({id}) => id}
        showsVerticalScrollIndicator={false}
        renderItem={({
          item: {
            id,
            name,
            image,
            category,
            common_locations,
            cooking_effect,
            description,
          },
        }) => {
          return (
            <CreatureCard
              name={name}
              image={image}
              id={id}
              category={category}
              common_locations={common_locations}
              cooking_effect={cooking_effect}
              description={description}
            />
          );
        }}
      />
    );
  }
}

export default CreaturesList;

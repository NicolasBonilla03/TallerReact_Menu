import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface FilterMenuProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ selectedCategory, onSelectCategory }) => {
  const categories = [
    'Todos',
    'Bebidas frías',
    'Sopas calientes',
    'Platos del día',
    'Platos a la carta',
    'Menú infantil',
  ];

  return (
    <View style={styles.categoryButtons}>
      {categories.map((category) => (
        <Button
          key={category}
          title={category}
          onPress={() => onSelectCategory(category)}
          color={selectedCategory === category ? 'blue' : 'gray'}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  }
});

export default FilterMenu;

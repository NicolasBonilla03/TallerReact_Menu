import React from 'react';
import { View, Button } from 'react-native';

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
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
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

export default FilterMenu;

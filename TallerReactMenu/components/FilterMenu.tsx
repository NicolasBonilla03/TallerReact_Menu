import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

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
    <View style={styles.container}>
      {categories.map(category => (
        <TouchableOpacity
          key={category}
          style={[styles.categoryButton, selectedCategory === category && styles.selectedButton]}
          onPress={() => onSelectCategory(category)}
        >
          <Text style={[styles.categoryText, selectedCategory === category && styles.selectedText]}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );  
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  categoryButton: {
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 20,
    margin: 5,
  },
  selectedButton: {
    backgroundColor: '#8B0000',
  },
  categoryText: {
    color: '#333',
    fontWeight: 'bold',
  },
  selectedText: {
    color: '#fff',
  },
});

export default FilterMenu;

import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MenuItem from '../components/MenuItem';
import FilterMenu from '../components/FilterMenu';
import { products } from '../components/products';

const MenuScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  // Filtrar productos basados en la categoría seleccionada
  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú</Text>

      <FilterMenu selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => <MenuItem product={item} />}
        keyExtractor={(item) => item.id}
        style={styles.productList}
        contentContainerStyle={styles.productListContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  productList: {
    flex: 1,
  },
  productListContainer: {
    paddingBottom: 20,  // Espacio adicional al final de la lista para ver el último elemento
  },
});

export default MenuScreen;

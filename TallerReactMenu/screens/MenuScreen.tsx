// screens/MenuScreen.tsx
import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import MenuItem from '../components/MenuItem';
import FilterMenu from '../components/FilterMenu';
import { Product } from '../types';
import { products } from '../components/products'; // Asegúrate de tener una lista de productos

const MenuScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  // Filtrar productos según la categoría seleccionada
  const filteredProducts = selectedCategory === 'Todos'
    ? products // Devuelve todos los productos si está seleccionada la categoría "Todos"
    : products.filter(product => product.category === selectedCategory);

  return (
    <View>
      <Text style={{ fontSize: 24, textAlign: 'center', marginVertical: 10 }}>Menú</Text>
      <FilterMenu selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      {filteredProducts.length > 0 ? (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <MenuItem product={item} />}
        />
      ) : (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>No hay productos en esta categoría.</Text>
      )}
    </View>
  );
};

export default MenuScreen;

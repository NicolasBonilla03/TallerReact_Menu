// MenuScreen.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import MenuItem from '../components/MenuItem';
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

      {/* Botones para seleccionar la categoría */}
      <View style={styles.categoryButtons}>
        <Button title="Todos" onPress={() => setSelectedCategory('Todos')} />
        <Button title="Bebidas frías" onPress={() => setSelectedCategory('Bebidas frías')} />
        <Button title="Sopas calientes" onPress={() => setSelectedCategory('Sopas calientes')} />
        <Button title="Platos del día" onPress={() => setSelectedCategory('Platos del día')} />
        <Button title="Platos a la carta" onPress={() => setSelectedCategory('Platos a la carta')} />
        <Button title="Menú infantil" onPress={() => setSelectedCategory('Menú infantil')} />
      </View>

      {/* Lista de productos */}
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
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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

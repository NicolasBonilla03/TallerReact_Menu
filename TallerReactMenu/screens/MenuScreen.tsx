import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import MenuItem from '../components/MenuItem';
import FilterMenu from '../components/FilterMenu';
import { products } from '../components/products';
import Animated, { SlideInRight, SlideOutLeft } from 'react-native-reanimated';

const MenuScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <Animated.View 
      entering={SlideInRight} 
      exiting={SlideOutLeft} 
      style={styles.container}
    >
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Menú</Text>
      <FilterMenu selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => <MenuItem product={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}  
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.productListContainer}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding:25
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'auto',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#8B0000',
    textAlign: 'center',
    marginTop: -55,
    marginBottom: 30
  },
  row: {
    justifyContent: 'space-between',
  },
  productListContainer: {
    padding: 10,
  },
});

export default MenuScreen;

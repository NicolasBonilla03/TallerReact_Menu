import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import MenuItem from '../components/MenuItem';
import { Product } from '../types';


const MenuScreen = () => {
  const products: Product[] = [
    { id: '1', name: 'Bebida Fría', price: 5000, category: 'Bebidas Frías', description: 'Refresco refrescante', image:'https://http2.mlstatic.com/D_NQ_NP_956025-MLU78675801253_082024-O.webp' },
    // Otros productos
  ];

  const renderProduct = ({ item }: { item: Product }) => (
    <MenuItem product={item} />
  );

  return (
    <View>
      <Text>Menú</Text>
      <FlatList data={products} renderItem={renderProduct} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default MenuScreen;

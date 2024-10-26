import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface MenuItemProps {
  product: Product;
}

const MenuItem: React.FC<MenuItemProps> = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
  };

  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
      {/* Usa la URL específica del producto */}
      <Image source={{ uri: product.image }} style={{ width: 150, height: 100 }} />
      <Text>{product.name}</Text>
      <Text>Precio: ${product.price}</Text>
      <Text>{product.description}</Text>
      <Button title="Agregar al Carrito" onPress={addToCart} />
    </View>
  );
};

export default MenuItem;

import React from 'react';
import { View, Text, Button } from 'react-native';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';

interface CartItemProps {
  item: Product;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { dispatch } = useCart();

  const removeItem = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: item.id });
  };

  const updateQuantity = (quantity: number) => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_ITEM', payload: { id: item.id, quantity } });
    } else {
      removeItem(); // Elimina el item si la cantidad es 0
    }
  };

  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
      <Text>{item.name}</Text>
      <Text>Precio: ${item.price}</Text>
      <Text>Cantidad: {item.quantity}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}></View>
      <Button title="+" onPress={() => updateQuantity((item.quantity || 0) + 1)} />
      <Button title="-" onPress={() => updateQuantity((item.quantity || 0) - 1)} disabled={item.quantity === 1} />
      <Button title="Eliminar" onPress={removeItem} />
    </View>
  );
};

export default CartItem;

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
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
      removeItem();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.price}>Precio: ${item.price}</Text>
        <Text style={styles.quantity}>Cantidad: {item.quantity}</Text>
      </View>
      <View style={styles.actionsContainer}>
        <Button title="+" onPress={() => updateQuantity((item.quantity || 0) + 1)} />
        <Button title="-" onPress={() => updateQuantity((item.quantity || 0) - 1)} disabled={item.quantity === 1} />
        <Button title="Eliminar" onPress={removeItem} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  itemDetails: {
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#333',
  },
  quantity: {
    fontSize: 14,
    color: '#333',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default CartItem;

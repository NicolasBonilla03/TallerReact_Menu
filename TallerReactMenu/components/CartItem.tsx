import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import QuantityButton from './QuantityButton';

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
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>Precio: ${item.price}</Text>
      <QuantityButton 
        quantity={item.quantity || 1}
        onIncrease={() => updateQuantity((item.quantity || 0) + 1)}
        onDecrease={() => updateQuantity((item.quantity || 0) - 1)}
      />
      <Button title="Eliminar" color="#d9534f" onPress={removeItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
});


export default CartItem;

import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { calculateDeliveryFee } from '../utils/calculateDeliveryFee';

const CartScreen = () => {
  const { state, dispatch } = useCart();
  const deliveryFee = calculateDeliveryFee(state.total);

  const renderCartItem = ({ item }) => (
    <CartItem item={item} />
  );
  
  const confirmOrder = () => {
    dispatch({ type: 'CONFIRM_ORDER' });
    // Aquí puedes redirigir al usuario a una pantalla de resumen o confirmación
  };

  return (
    <View>
      <Text>Carrito</Text>
      <FlatList data={state.items} renderItem={renderCartItem} keyExtractor={(item) => item.id} />
      <Text>Total: ${state.total}</Text>
      <Text>Costo de domicilio: ${deliveryFee}</Text>
      <Text>Total a pagar: ${state.total + deliveryFee}</Text>
      <Button title="Confirmar Pedido" onPress={confirmOrder} />
    </View>
  );
};

export default CartScreen;

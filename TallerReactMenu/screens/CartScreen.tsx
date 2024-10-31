import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { calculateDeliveryFee } from '../utils/calculateDeliveryFee';

const CartScreen = () => {
  const { state, dispatch } = useCart();
  const deliveryFee = calculateDeliveryFee(state.total);

  const renderCartItem = ({ item }) => <CartItem item={item} />;

  const confirmOrder = () => {
    dispatch({ type: 'CONFIRM_ORDER' });
    // Navegación a la pantalla de historial de pedidos o mensaje de confirmación
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Carrito de Compras</Text>
      <FlatList
        data={state.items}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Total: ${state.total}</Text>
        <Text style={styles.summaryText}>Costo de Domicilio: ${deliveryFee}</Text>
        <Text style={styles.total}>Total a Pagar: ${state.total + deliveryFee}</Text>
        <Button title="Confirmar Pedido" onPress={confirmOrder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  summaryContainer: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 15,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
});

export default CartScreen;

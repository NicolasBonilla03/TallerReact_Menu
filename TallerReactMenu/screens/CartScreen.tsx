import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import { calculateDeliveryFee } from '../utils/calculateDeliveryFee';
import Animated, { SlideInRight, SlideOutLeft } from 'react-native-reanimated';

const CartScreen = () => {
  const { state, dispatch } = useCart();
  const deliveryFee = calculateDeliveryFee(state.total);

  const renderCartItem = ({ item }) => <CartItem item={item} />;

  const confirmOrder = () => {
    dispatch({ type: 'CONFIRM_ORDER' });
    // Navegación a la pantalla de historial de pedidos o mensaje de confirmación
  };

  return (
    <Animated.View 
      entering={SlideInRight} 
      exiting={SlideOutLeft} 
      style={styles.container}
    >
    
    <View style={styles.screen}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Tu Pedido</Text>
      <FlatList
        data={state.items}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>Subtotal: ${state.total}</Text>
        <Text style={styles.summaryText}>Costo de Domicilio: ${deliveryFee}</Text>
        <Text style={styles.total}>Total: ${state.total + deliveryFee}</Text>
        <Button title="Confirmar Pedido" color="#d9534f" onPress={confirmOrder} />
      </View>
    </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 25,
  },
  screen: {
    flex: 1,
    backgroundColor: '#f8f5f2', // Fondo beige claro
  },
  logo: {
    bottom: 10,
    width: 60,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'auto',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#8B4513', // Color marrón
    marginTop:-55,
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  summaryContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    marginVertical: 15,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B0000', // Color rojo profundo
    marginBottom: 15,
  },
});

export default CartScreen;

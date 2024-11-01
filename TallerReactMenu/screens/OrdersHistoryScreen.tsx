import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useCart } from '../contexts/CartContext';
import Animated, { SlideInRight, SlideOutLeft } from 'react-native-reanimated';

const OrderHistoryScreen = () => {
  const { state } = useCart();

  const renderOrder = ({ item }) => (
    <View style={styles.orderContainer}>
      <Text style={styles.orderId}>Pedido ID: {item.id}</Text>
      <Text style={styles.orderTotal}>Total: ${item.total.toFixed(2)}</Text>
      <FlatList
        data={item.items}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemQuantity}>Cantidad: {item.quantity}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.orderItemsList} // Agregar un estilo para la lista de items
      />
    </View>
  );

  return (
    <Animated.View 
      entering={SlideInRight} 
      exiting={SlideOutLeft} 
      style={styles.container}
    >
      <View style= {{padding:25}}>
      <View style={styles.headerContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Historial de Pedidos</Text>
      </View>
      <FlatList
        data={state.orders}
        renderItem={renderOrder}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.ordersList}
      />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginTop: -55,
    marginBottom:10
  },
  ordersList: {
    paddingBottom: 20,
  },
  orderContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 25,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  orderId: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  orderTotal: {
    fontSize: 16,
    color: '#444',
    marginVertical: 8,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  itemName: {
    fontSize: 16,
    color: '#555',
  },
  itemQuantity: {
    fontSize: 16,
    color: '#555',
  },
  orderItemsList: {
    marginTop: 10,
  },
});

export default OrderHistoryScreen;

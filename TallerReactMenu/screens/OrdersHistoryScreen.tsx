import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useCart } from '../contexts/CartContext';

const OrderHistoryScreen = () => {
  const { state } = useCart();

  const renderOrder = ({ item }) => (
    <View>
      <Text>Pedido ID: {item.id}</Text>
      <Text>Total: ${item.total}</Text>
      <FlatList
        data={item.items}
        renderItem={({ item }) => (
          <Text>{item.name} - Cantidad: {item.quantity}</Text>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );

  return (
    <View>
      <Text>Historial de Pedidos</Text>
      <FlatList
        data={state.orders}
        renderItem={renderOrder}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default OrderHistoryScreen;

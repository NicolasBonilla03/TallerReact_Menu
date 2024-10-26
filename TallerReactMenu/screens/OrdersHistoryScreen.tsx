import React from 'react';
import { View, Text, FlatList } from 'react-native';

const OrdersHistoryScreen = () => {
  const orders = [
    { id: '1', date: new Date(), items: [] },
    // Otros pedidos
  ];

  const renderOrder = ({ item }) => (
    <View>
      <Text>Pedido #{item.id}</Text>
      <Text>Fecha: {item.date.toDateString()}</Text>
    </View>
  );

  return (
    <View>
      <Text>Historial de Pedidos</Text>
      <FlatList data={orders} renderItem={renderOrder} keyExtractor={(item) => item.id} />
    </View>
  );
};

export default OrdersHistoryScreen;

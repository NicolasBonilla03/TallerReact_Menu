import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Order } from '../types';

interface OrderDetailScreenProps {
  route: {
    params: {
      order: Order;
    };
  };
}

const OrderDetailScreen: React.FC<OrderDetailScreenProps> = ({ route }) => {
  const { order } = route.params;

  const renderItem = ({ item }) => (
    <View style={{ padding: 10 }}>
      <Text>{item.name} - Cantidad: {item.quantity}</Text>
    </View>
  );

  return (
    <View style={{ padding: 20 }}>
      <Text>Detalles del Pedido #{order.id}</Text>
      <Text>Fecha: {order.date}</Text>
      <FlatList
        data={order.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text>Total: ${order.total}</Text>
    </View>
  );
};

export default OrderDetailScreen;

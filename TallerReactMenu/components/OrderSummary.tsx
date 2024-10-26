import React from 'react';
import { View, Text } from 'react-native';

interface OrderSummaryProps {
  total: number;
  deliveryFee: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ total, deliveryFee }) => {
  return (
    <View>
      <Text>Total de Productos: ${total}</Text>
      <Text>Costo de Domicilio: ${deliveryFee}</Text>
      <Text>Total a Pagar: ${total + deliveryFee}</Text>
    </View>
  );
};

export default OrderSummary;

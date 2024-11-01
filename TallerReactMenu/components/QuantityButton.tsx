// components/QuantityButton.tsx
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface QuantityButtonProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({ quantity, onIncrease, onDecrease }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={onDecrease} disabled={quantity <= 1}>
      <Icon name="minus" size={16} color={quantity > 1 ? "#8B4513" : "#ccc"} />
    </TouchableOpacity>
    <Text style={styles.quantity}>{quantity}</Text>
    <TouchableOpacity style={styles.button} onPress={onIncrease}>
      <Icon name="plus" size={16} color="#8B4513" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#f0e68c',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default QuantityButton;

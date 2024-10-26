import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bienvenido al Restaurante a Domicilio</Text>
      <Button title="Ver Menú" onPress={() => navigation.navigate('Menu')} />
      <Button title="Ver Carrito" onPress={() => navigation.navigate('Carrito')} />
      <Button title="Ver Historial de Pedidos" onPress={() => navigation.navigate('Historial')} />
    </View>
  );
};

export default HomeScreen;

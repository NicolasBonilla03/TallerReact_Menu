import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import OrdersHistoryScreen from '../screens/OrdersHistoryScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="Carrito" component={CartScreen} />
      <Tab.Screen name="Historial" component={OrdersHistoryScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

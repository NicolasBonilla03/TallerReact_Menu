import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuScreen from '../screens/MenuScreen';
import CartScreen from '../screens/CartScreen';
import OrdersHistoryScreen from '../screens/OrdersHistoryScreen';
import AnimatedTabBar from '../components/AnimatedTabBar';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
    tabBar={(props) => <AnimatedTabBar {...props} />}
    screenOptions={{
      tabBarStyle: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 60,
        borderRadius: 10,
      },
      headerShown: false,
      tabBarHideOnKeyboard: true,
    }}
  >
      <Tab.Screen name="Menu" component={MenuScreen} />
      <Tab.Screen name="Carrito" component={CartScreen} />
      <Tab.Screen name="Historial" component={OrdersHistoryScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

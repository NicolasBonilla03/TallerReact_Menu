import React, { createContext, useContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../types';

interface CartState {
  items: Product[];
  total: number;
  orders: Array<{ id: number; items: Product[]; total: number }>; // Historial de pedidos
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_ITEM'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_CART'; payload: CartState }
  | { type: 'CONFIRM_ORDER' };

const initialState: CartState = {
  items: [],
  total: 0,
  orders: [], // Inicializar el historial de pedidos vacío
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

// Función para calcular el total del carrito
const calculateTotal = (items: Product[]): number => {
  return items.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
};

// Reducer para manejar las acciones del carrito
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      let updatedItems;

      if (existingItemIndex >= 0) {
        // Si el item ya existe, solo actualiza la cantidad
        updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity! += 1; // Incrementa la cantidad
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return { ...state, items: updatedItems, total: calculateTotal(updatedItems) };
    }
    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      return { ...state, items: updatedItems, total: calculateTotal(updatedItems) };
    }
    case 'UPDATE_ITEM': {
      const updatedItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity! > 0); // Elimina items con cantidad 0
      return { ...state, items: updatedItems, total: calculateTotal(updatedItems) };
    }
    case 'CLEAR_CART':
      return { ...state, items: [], total: 0 }; // Limpia solo el carrito, no el historial
    case 'SET_CART':
      return { ...action.payload };
    case 'CONFIRM_ORDER': {
      const newOrder = {
        id: Date.now(), // ID único para cada pedido
        items: state.items,
        total: state.total,
      };
      const updatedOrders = [...state.orders, newOrder];

      // Guarda el historial de pedidos en AsyncStorage
      AsyncStorage.setItem('@orders', JSON.stringify(updatedOrders));

      return { ...state, orders: updatedOrders, items: [], total: 0 };
    }
    default:
      return state;
  }
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Cargar el carrito y el historial de pedidos desde AsyncStorage al iniciar la aplicación
  useEffect(() => {
    const loadCart = async () => {
      try {
        const cartJson = await AsyncStorage.getItem('@cart');
        const ordersJson = await AsyncStorage.getItem('@orders');

        const cart = cartJson ? JSON.parse(cartJson) : initialState;
        const orders = ordersJson ? JSON.parse(ordersJson) : [];

        dispatch({
          type: 'SET_CART',
          payload: { ...cart, orders, total: calculateTotal(cart.items) },
        });
      } catch (e) {
        console.error('Error al cargar el carrito o historial de pedidos: ', e);
      }
    };

    loadCart();
  }, []);

  // Guardar el carrito en AsyncStorage cada vez que cambie el estado
  useEffect(() => {
    const saveCart = async () => {
      try {
        const cart = { items: state.items };
        await AsyncStorage.setItem('@cart', JSON.stringify(cart));
      } catch (e) {
        console.error("Error al guardar el carrito: ", e);
      }
    };

    saveCart();
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

// data/products.ts
import { Product } from '../types';

export const products: Product[] = [
  { id: '1', name: 'Agua Mineral', price: 2000, category: 'Bebidas frías', description: 'Agua refrescante', image: 'https://images7.memedroid.com/images/UPLOADED986/5f5ac4f650eb0.jpeg' },
  { id: '2', name: 'Sopa de Pollo', price: 8000, category: 'Sopas calientes', description: 'Sopa caliente con pollo', image: '../assets/sopa.jpg' },
  { id: '3', name: 'Pizza', price: 12000, category: 'Platos del día', description: 'Pizza de queso', image: '../assets/pizza.png' },
  { id: '4', name: 'Hamburguesa', price: 15000, category: 'Platos a la carta', description: 'Hamburguesa con papas', image: '../assets/hamburguesa.png' },
  { id: '5', name: 'Nuggets de pollo', price: 5000, category: 'Menú infantil', description: 'Nuggets crujientes', image: '../assets/nuggets.jpg' },
];

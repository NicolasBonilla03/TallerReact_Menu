export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    description: string;
    image: string; // Imagen de cada producto
    quantity?: number;
  }
  
  export interface Order {
    id: string;
    date: string;
    items: Product[];
    total: number;
  }
  
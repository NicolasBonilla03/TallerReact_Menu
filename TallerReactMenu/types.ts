export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    description: string;
    quantity?: number;
  }
  
  export interface Order {
    id: string;
    date: string;
    items: Product[];
    total: number;
  }
  
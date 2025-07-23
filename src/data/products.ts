export interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  features: {
    [key: string]: string;
  };
}

export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop&crop=center",
    price: 999,
    features: {
      "Screen Size": "6.1 inches",
      "Battery Life": "23 hours",
      "Storage": "128GB"
    }
  },
  {
    id: "2",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=300&h=300&fit=crop&crop=center",
    price: 1199,
    features: {
      "Screen Size": "6.8 inches",
      "Battery Life": "28 hours",
      "Storage": "256GB"
    }
  },
  {
    id: "3",
    name: "Pixel 8 Pro",
    brand: "Google",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=300&fit=crop&crop=center",
    price: 899,
    features: {
      "Screen Size": "6.7 inches",
      "Battery Life": "24 hours",
      "Storage": "128GB"
    }
  },
  {
    id: "4",
    name: "OnePlus 12",
    brand: "OnePlus",
    image: "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=300&h=300&fit=crop&crop=center",
    price: 799,
    features: {
      "Screen Size": "6.82 inches",
      "Battery Life": "26 hours",
      "Storage": "256GB"
    }
  },
  {
    id: "5",
    name: "Xperia 1 V",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1596558450255-7c0b7be9d56a?w=300&h=300&fit=crop&crop=center",
    price: 1399,
    features: {
      "Screen Size": "6.5 inches",
      "Battery Life": "22 hours",
      "Storage": "256GB"
    }
  },
  {
    id: "6",
    name: "iPhone 15",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=300&h=300&fit=crop&crop=center",
    price: 799,
    features: {
      "Screen Size": "6.1 inches",
      "Battery Life": "20 hours",
      "Storage": "128GB"
    }
  },
  {
    id: "7",
    name: "Galaxy S24",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=300&h=300&fit=crop&crop=center",
    price: 799,
    features: {
      "Screen Size": "6.2 inches",
      "Battery Life": "25 hours",
      "Storage": "128GB"
    }
  },
  {
    id: "8",
    name: "Nothing Phone 2",
    brand: "Nothing",
    image: "https://images.unsplash.com/photo-1520923642038-b4259acecbd7?w=300&h=300&fit=crop&crop=center",
    price: 599,
    features: {
      "Screen Size": "6.7 inches",
      "Battery Life": "24 hours",
      "Storage": "256GB"
    }
  }
]; 
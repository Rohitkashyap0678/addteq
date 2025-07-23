import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product } from '../data/products';

interface ComparisonContextType {
  comparedProducts: Product[];
  addToComparison: (product: Product) => void;
  removeFromComparison: (productId: string) => void;
  clearComparison: () => void;
  isProductInComparison: (productId: string) => boolean;
  canAddMore: boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};

interface ComparisonProviderProps {
  children: React.ReactNode;
}

export const ComparisonProvider: React.FC<ComparisonProviderProps> = ({ children }) => {
  const [comparedProducts, setComparedProducts] = useState<Product[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('comparedProducts');
    if (stored) {
      try {
        setComparedProducts(JSON.parse(stored));
      } catch (error) {
        console.error('Error loading comparison data:', error);
      }
    }
  }, []);

  // Save to localStorage whenever comparison changes
  useEffect(() => {
    localStorage.setItem('comparedProducts', JSON.stringify(comparedProducts));
  }, [comparedProducts]);

  const addToComparison = (product: Product) => {
    if (comparedProducts.length < 3 && !isProductInComparison(product.id)) {
      setComparedProducts((prev: any) => [...prev, product]);
    }
  };

  const removeFromComparison = (productId: string) => {
    setComparedProducts((prev: any[]) => prev.filter(p => p.id !== productId));
  };

  const clearComparison = () => {
    setComparedProducts([]);
  };

  const isProductInComparison = (productId: string) => {
    return comparedProducts.some((p: { id: string; }) => p.id === productId);
  };

  const canAddMore = comparedProducts.length < 3;

  return (
    <ComparisonContext.Provider
      value={{
        comparedProducts,
        addToComparison,
        removeFromComparison,
        clearComparison,
        isProductInComparison,
        canAddMore,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
}; 
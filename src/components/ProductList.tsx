import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';
import './ProductList.scss';

export const ProductList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;
    
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      Object.values(product.features).some(feature =>
        feature.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="product-list">
      <div className="product-list__header">
        <h2>Compare Smartphones</h2>
        <div className="product-list__search">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search products, brands, or features..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="product-list__grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="product-list__no-results">
          <p>No products found matching your search.</p>
        </div>
      )}
    </div>
  );
}; 
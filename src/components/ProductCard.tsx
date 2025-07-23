import React from 'react';
import { Plus, Check } from 'lucide-react';
import type { Product } from '../data/products';
import { useComparison } from '../context/ComparisonContext';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToComparison, isProductInComparison, canAddMore } = useComparison();

  const handleAddToComparison = () => {
    if (canAddMore && !isProductInComparison(product.id)) {
      addToComparison(product);
    }
  };

  const isInComparison = isProductInComparison(product.id);

  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={product.image} alt={product.name} />
      </div>
      
      <div className="product-card__content">
        <div className="product-card__brand">{product.brand}</div>
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__price">${product.price}</div>
        
        <div className="product-card__features">
          {Object.entries(product.features).map(([key, value]) => (
            <div key={key} className="product-card__feature">
              <span className="feature-key">{key}:</span>
              <span className="feature-value">{value}</span>
            </div>
          ))}
        </div>
        
        <button
          className={`product-card__compare-btn ${isInComparison ? 'added' : ''}`}
          onClick={handleAddToComparison}
          disabled={isInComparison || !canAddMore}
        >
          {isInComparison ? (
            <>
              <Check size={16} />
              Added to Compare
            </>
          ) : (
            <>
              <Plus size={16} />
              Add to Compare
            </>
          )}
        </button>
      </div>
    </div>
  );
}; 
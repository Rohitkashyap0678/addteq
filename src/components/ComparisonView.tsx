import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useComparison } from '../context/ComparisonContext';
import './ComparisonView.scss';

export const ComparisonView: React.FC = () => {
  const { comparedProducts, removeFromComparison, clearComparison } = useComparison();

  if (comparedProducts.length < 2) {
    return null;
  }

  // Get all unique feature keys from compared products
  const allFeatureKeys = Array.from(
    new Set(comparedProducts.flatMap(product => Object.keys(product.features)))
  );

  const getHighestValue = (featureKey: string) => {
    const values = comparedProducts.map(product => {
      const value = product.features[featureKey];
      // Extract numbers for comparison
      const numMatch = value?.match(/\d+/);
      return numMatch ? parseInt(numMatch[0]) : 0;
    });
    return Math.max(...values);
  };

  const getLowestPrice = () => {
    return Math.min(...comparedProducts.map(p => p.price));
  };

  return (
    <div className="comparison-view">
      <div className="comparison-view__header">
        <h3>Product Comparison</h3>
        <button 
          className="comparison-view__clear"
          onClick={clearComparison}
          title="Clear all comparisons"
        >
          <Trash2 size={20} />
          Clear All
        </button>
      </div>

      <div className="comparison-view__table">
        <div className="comparison-table">
          {/* Product Headers */}
          <div className="comparison-row comparison-row--header">
            <div className="comparison-cell comparison-cell--label"></div>
            {comparedProducts.map(product => (
              <div key={product.id} className="comparison-cell comparison-cell--product">
                <button
                  className="remove-product"
                  onClick={() => removeFromComparison(product.id)}
                  title="Remove from comparison"
                >
                  <X size={16} />
                </button>
                <img src={product.image} alt={product.name} />
                <div className="product-info">
                  <div className="brand">{product.brand}</div>
                  <div className="name">{product.name}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Price Row */}
          <div className="comparison-row">
            <div className="comparison-cell comparison-cell--label">Price</div>
            {comparedProducts.map(product => (
              <div 
                key={product.id} 
                className={`comparison-cell ${product.price === getLowestPrice() ? 'best-value' : ''}`}
              >
                ${product.price}
              </div>
            ))}
          </div>

          {/* Feature Rows */}
          {allFeatureKeys.map(featureKey => {
            const highestValue = getHighestValue(featureKey);
            
            return (
              <div key={featureKey} className="comparison-row">
                <div className="comparison-cell comparison-cell--label">{featureKey}</div>
                {comparedProducts.map(product => {
                  const value = product.features[featureKey] || 'N/A';
                  const numValue = value.match(/\d+/);
                  const isHighest = numValue && parseInt(numValue[0]) === highestValue;
                  
                  return (
                    <div 
                      key={product.id} 
                      className={`comparison-cell ${isHighest ? 'best-value' : ''}`}
                    >
                      {value}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}; 
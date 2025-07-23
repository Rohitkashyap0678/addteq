import React from 'react';
import { Moon, Sun, Smartphone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useComparison } from '../context/ComparisonContext';
import './Header.scss';

export const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { comparedProducts } = useComparison();

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <Smartphone size={32} />
          <h1>AddteqApp</h1>
        </div>

        <div className="header__actions">
          {comparedProducts.length > 0 && (
            <div className="header__comparison-count">
              <span>{comparedProducts.length} product{comparedProducts.length !== 1 ? 's' : ''} selected</span>
            </div>
          )}
          
          <button
            className="header__theme-toggle"
            onClick={toggleTheme}
            title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}; 
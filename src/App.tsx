import React from 'react'
import { ComparisonProvider } from './context/ComparisonContext'
import { ThemeProvider } from './context/ThemeContext'
import { Header } from './components/Header'
import { ProductList } from './components/ProductList'
import { ComparisonView } from './components/ComparisonView'
import './App.scss'

function App() {
  return (
    <ThemeProvider>
      <ComparisonProvider>
        <div className="app">
          <Header />
          <main className="app__main">
            <ProductList />
            <ComparisonView />
          </main>
        </div>
      </ComparisonProvider>
    </ThemeProvider>
  )
}

export default App

# AddteqApp - Product Comparison Tool

An interactive, responsive web application that allows users to compare smartphones side-by-side. Built with React, TypeScript, and SCSS, featuring a modern UI with dark/light mode support.

## 🚀 Features

### Core Features
- **Product Grid**: Display of 8 smartphone products with detailed specifications
- **Smart Comparison**: Select up to 3 products for side-by-side comparison
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive UI**: Smooth animations and hover effects

### Bonus Features
- **Search & Filter**: Find products by name, brand, or features
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Local Storage**: Persist comparison selections across browser sessions
- **Accessibility**: Keyboard navigation and screen reader support
- **Visual Highlights**: Best values highlighted in comparison table

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: SCSS with CSS Grid and Flexbox
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: ESLint for code quality

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd addteqapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── ComparisonView.tsx    # Side-by-side comparison
│   ├── Header.tsx           # App header with theme toggle
│   ├── ProductCard.tsx      # Individual product cards
│   ├── ProductList.tsx      # Product grid with search
│   └── *.scss              # Component styles
├── context/            # React contexts
│   ├── ComparisonContext.tsx # Comparison state management
│   └── ThemeContext.tsx     # Theme state management
├── data/              # Static data
│   └── products.ts          # Product information
├── App.tsx            # Main app component
├── App.scss           # Global styles and themes
└── main.tsx           # App entry point
```

## 🎨 Design Features

### Responsive Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px  
- **Mobile**: Below 768px

### Theme Support
- **Light Mode**: Clean, bright interface
- **Dark Mode**: Dark theme for reduced eye strain
- **System Detection**: Automatically matches OS preference

### Visual Enhancements
- **Hover Effects**: Card elevation and image scaling
- **Best Value Indicators**: Green highlighting for optimal values
- **Smooth Transitions**: All interactions have smooth animations

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Product Data

The app showcases 8 popular smartphones with:
- **Specifications**: Screen size, battery life, storage
- **Pricing**: Current market prices
- **Images**: High-quality product photos
- **Brands**: Apple, Samsung, Google, OnePlus, Sony, Nothing

## 🎯 User Experience

### Product Selection
1. Browse the product grid
2. Use search to find specific products
3. Click "Add to Compare" on desired products
4. Compare up to 3 products simultaneously

### Comparison Features
- **Visual Comparison**: Side-by-side product layout
- **Best Value Highlighting**: Automatic highlighting of superior specs
- **Easy Management**: Remove individual items or clear all
- **Persistent Storage**: Selections saved in browser

## 🌟 Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Semantic HTML and ARIA labels
- **Focus Indicators**: Clear focus states for all interactive elements
- **Reduced Motion**: Respects user's motion preferences

## 🔮 Future Enhancements

- Add product categories (laptops, tablets, etc.)
- Implement user reviews and ratings
- Add price tracking and alerts
- Include more detailed specifications
- Multi-language support

## 📄 License

This project is built for assessment purposes and is not intended for commercial use.

## 🤝 Contributing

This is an assessment project, but feedback and suggestions are welcome!

---

**Built with ❤️ for the Addteq Assessment**

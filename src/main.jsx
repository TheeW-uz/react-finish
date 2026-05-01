import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { WishlistProvider } from './context/WishlistContext'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import App from './App.jsx'

import './i18n.js';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  </BrowserRouter>,
)

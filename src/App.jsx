import React, { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import ProductDetail from './pages/productDetail/ProductDetail.jsx'
import Saralanganlar from './pages/saralanganlar/Saralanganlar.jsx'
import Checkout from './pages/checkout/Checkout.jsx'
import CategoryPage from './pages/category/CategoryPage.jsx'
import CartModal from './components/cart/CartModal'
import { Toaster } from 'react-hot-toast'
import AOS from 'aos'
import 'aos/dist/aos.css'

const App = () => {
  useEffect(() => {
    // Small timeout to ensure the DOM is fully rendered before AOS runs
    const timer = setTimeout(() => {
      AOS.init({
        duration: 800,
        once: true,    // The element will animate only once
        offset: 50,
      });
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='container'>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/saralanganlar" element={<Saralanganlar />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
      <CartModal />
    </div>
  )
}

export default App

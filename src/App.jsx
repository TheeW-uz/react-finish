import React, { useEffect, Suspense, lazy } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Lazy load components
const Home = lazy(() => import('./pages/home/Home.jsx'))
const ProductDetail = lazy(() => import('./pages/productDetail/ProductDetail.jsx'))
const Saralanganlar = lazy(() => import('./pages/saralanganlar/Saralanganlar.jsx'))
const Checkout = lazy(() => import('./pages/checkout/Checkout.jsx'))
const CategoryPage = lazy(() => import('./pages/category/CategoryPage.jsx'))
const CartModal = lazy(() => import('./components/cart/CartModal'))

const App = () => {
  useEffect(() => {
    // Initialize AOS immediately to prevent layout jumps
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      disable: 'mobile', // Performance boost on mobile
      startEvent: 'DOMContentLoaded',
    });
  }, []);


  return (
    <div className='container'>
      <Toaster position="top-right" reverseOrder={false} />
      <Suspense fallback={<div className="loading-fallback">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/saralanganlar" element={<Saralanganlar />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
      </Suspense>
      <Suspense fallback={null}>
        <CartModal />
      </Suspense>
    </div>
  )
}

export default App


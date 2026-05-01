import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaHeart, FaRegHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useWishlist } from '../../context/WishlistContext'
import { useCart } from '../../context/CartContext'
import Header from '../../components/header/Header'
import Navbar from '../../components/nav/Navbar'
import Footer from '../../components/footer/Footer'
import './ProductDetail.css'

import popularProducts from '../../data/popularProducts.js'
import appleSection from '../../data/appleSection.js'
import discountDay from '../../data/discountDay.js'
import beauty from '../../data/beauty.js'
import autoProducts from '../../data/autoProducts.js'
import perfume from '../../data/perfume.js'
import sportTechs from '../../data/sportTechs.js'
import laptops from '../../data/laptops.js'
import cleaningTechs from '../../data/cleaningTechs.js'

const allProducts = [
  ...popularProducts,
  ...appleSection,
  ...discountDay,
  ...beauty,
  ...autoProducts,
  ...perfume,
  ...sportTechs,
  ...laptops,
  ...cleaningTechs
]

function ProductDetail() {
  const { id } = useParams()
  const { t } = useTranslation()
  const { isInWishlist, addToWishlist } = useWishlist()
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart()
  const [selectedMonth, setSelectedMonth] = useState(12)

  const rawItem = allProducts.find((product) => product.id === id)

  const item = rawItem ? {
    ...rawItem,
    price: typeof rawItem.price === 'string' ? parseInt(rawItem.price.replace(/\s/g, '')) : rawItem.price,
    oldPrice: rawItem.oldPrice ? (typeof rawItem.oldPrice === 'string' ? parseInt(rawItem.oldPrice.replace(/\s/g, '')) : rawItem.oldPrice) : null
  } : null

  if (!item) {
    return (
      <div className="productDetail">
        <Header />
        <Navbar />
        <div className="productDetail__not-found">
          <p>{t('product_not_found', 'Product not found')}</p>
          <Link to="/">{t('back_home', 'Back home')}</Link>
        </div>
      </div>
    )
  }

  const cartItem = cart.find(i => i.id === item.id && i.installmentMonth === selectedMonth);

  const handleWishlistClick = (e) => {
    e.preventDefault()
    addToWishlist(item)
  }

  const handleAddToCart = () => {
    addToCart(item, 1, selectedMonth);
  };

  const handleUpdateQuantity = (newQty) => {
    if (newQty < 1) {
      removeFromCart(item.id, selectedMonth);
    } else {
      updateQuantity(item.id, selectedMonth, newQty);
    }
  };

  const months = [3, 6, 12, 18, 24]
  const monthlyAmount = Math.round(item.price / selectedMonth)

  const [activeImage, setActiveImage] = useState(item.image);

  useEffect(() => {
    if (item) setActiveImage(item.image);
  }, [item]);

  const images = [item.image, item.image, item.image]; // Mock gallery

  return (
    <div className="productDetail">
      <Header />
      <Navbar />

      <main className="productDetail__container">
        <div className="productDetail__left-card">
          <div className="productDetail__img-container">
            <img src={activeImage} alt={item.title} fetchpriority="high" />
            <button
              className="productDetail__wish-btn"
              onClick={handleWishlistClick}
              aria-label={isInWishlist(item.id) ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              {isInWishlist(item.id) ? <FaHeart className="filled" /> : <FaRegHeart />}
            </button>
          </div>
          
          <div className="productDetail__gallery">
            {images.map((img, idx) => (
              <button 
                key={idx} 
                className={`gallery-item ${activeImage === img ? 'active' : ''}`}
                onMouseEnter={() => setActiveImage(img)}
                aria-label={`View product image ${idx + 1}`}
              >
                <img src={img} alt="" loading="lazy" />
              </button>
            ))}
          </div>

          <div className="productDetail__title-container">
            <h1>{item.title}</h1>
            <p className="productDetail__desc-short">{item.description}</p>
          </div>
        </div>

        <div className="productDetail__right-panel">
          <div className="productDetail__price-header">
            <span className="productDetail__main-price">
              {item.price.toLocaleString()} so'm
            </span>
            {item.oldPrice && (
              <span className="productDetail__old-price-line">
                {item.oldPrice.toLocaleString()} so'm
              </span>
            )}
          </div>

          <div className="productDetail__installment-card">
            <div className="productDetail__installment-badge">
              {t('installment_badge', 'muddatili to\'lov')}
            </div>

            <div className="productDetail__month-selector">
              {months.map((m) => (
                <button
                  key={m}
                  className={`productDetail__month-item ${selectedMonth === m ? 'active' : ''}`}
                  onClick={() => setSelectedMonth(m)}
                  aria-pressed={selectedMonth === m}
                >
                  <span className="month-num">{m}</span>
                  <span className="month-text">{t('month', 'oy')}</span>
                </button>
              ))}
            </div>

            <div className="productDetail__calculation">
              <div className="calc-row">
                <span>{selectedMonth} {t('month', 'oy')} {t('during', 'davomida')}</span>
                <strong>{monthlyAmount.toLocaleString()} so'm / {t('month', 'oy')}</strong>
              </div>
            </div>

            {cartItem ? (
              <div className="productDetail__cart-counter">
                <div className="counter-controls">
                  <button onClick={() => handleUpdateQuantity(cartItem.quantity - 1)} aria-label="Decrease quantity">-</button>
                  <span>{cartItem.quantity}</span>
                  <button onClick={() => handleUpdateQuantity(cartItem.quantity + 1)} aria-label="Increase quantity">+</button>
                </div>
                <button className="cart-btn-added" onClick={() => handleAddToCart()}>
                  {t('add_to_cart', 'Savatga qo\'shish')}
                </button>
              </div>
            ) : (
              <button className="productDetail__add-cart" onClick={handleAddToCart}>
                {t('add_to_cart', 'Savatga qo\'shish')}
              </button>
            )}

            <div className="productDetail__rating">
              <div className="stars">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />
              </div>
              <span className="rating-text">4.5 (128 {t('reviews', 'baho')})</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProductDetail

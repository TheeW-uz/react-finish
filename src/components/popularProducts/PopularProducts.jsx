import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useWishlist } from '../../context/WishlistContext'
import { useCart } from '../../context/CartContext'
import popularProducts from '../../data/popularProducts.js'
import './PopularProducts.css'

function PopularProducts() {
  const { t } = useTranslation()
  const { isInWishlist, addToWishlist } = useWishlist()
  const { addToCart } = useCart()

  const handleWishlistClick = (e, product) => {
    e.preventDefault()
    e.stopPropagation()
    addToWishlist(product)
  }

  const visibleItems = popularProducts

  return (
    <section
      className="popularSection"
      data-aos="zoom-in-down"
    >
      <div className="popularSection__header">
        <h2>{t('popularSection.header', 'Popular Products')}</h2>
      </div>

      <div className="popularGrid">
        {visibleItems.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`} className="popularCard">
            <div className="popularCard__image">
              <img src={item.image} alt={item.title} loading="lazy" />
              <button
                className="popularCard__heart"
                onClick={(e) => handleWishlistClick(e, item)}
                aria-label={isInWishlist(item.id) ? t('wishlist.remove', 'Remove from wishlist') : t('wishlist.add', 'Add to wishlist')}
                title={isInWishlist(item.id) ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                {isInWishlist(item.id) ? (
                  <FaHeart className="heart-icon filled" />
                ) : (
                  <FaRegHeart className="heart-icon" />
                )}
              </button>

              <button
                className="hover-cart-btn"
                aria-label={t('cart.add', 'Add to cart')}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart(item, 1, 12);
                }}
              >
                <FaShoppingCart />
              </button>


              {item.discount && (
                <span className="popularCard__badge">{item.discount}%</span>
              )}
            </div>

            <div className="popularCard__body">
              <div className="popularCard__price-row">
                <strong>{item.price.toLocaleString()} so'm</strong>
                {item.discount && (
                  <span className="popularCard__discount">{item.discount}%</span>
                )}
              </div>

              {item.oldPrice && (
                <div className="popularCard__price-old">
                  {item.oldPrice.toLocaleString()} so'm
                </div>
              )}

              {item.monthly && (
                <div className="popularCard__monthly">{item.monthly}</div>
              )}

              <h3 className="popularCard__title">{t(`popularSection.products.${item.id}.title`, item.title)}</h3>
            </div>
          </Link>
        ))}

      </div>
    </section>
  )
}

export default PopularProducts

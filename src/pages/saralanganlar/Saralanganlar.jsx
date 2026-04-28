import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { useWishlist } from '../../context/WishlistContext'
import './Saralanganlar.css'
import Header from '../../components/header/Header.jsx'
import Navbar from '../../components/nav/Navbar.jsx'
import Footer from '../../components/footer/Footer'

function Saralanganlar() {
  const { t } = useTranslation()
  const { wishlist, removeFromWishlist } = useWishlist()

  return (
    <>
      <Header />
      <Navbar />
      <div className="saralanganlar">

        {wishlist.length === 0 ? (
          <div className="saralanganlar__empty">
            <p className="saralanganlar__empty-text">
              {t('saralanganlar.empty', 'Your wishlist is empty')}
            </p>
            <p className='dontWasteTime'>{t('dont_waste_time', 'uzoq vaqt qidirmaslik uchun ozingizga yoqqan tovarlarni saqlang')}</p>
            <Link to="/" className="saralanganlar__back">
              <button className='saralanganlarBackBtn'> {t('back_to_catalog', 'back to catalog')} </button>
            </Link>
          </div>
        ) : (
          <div className="saralanganlar__grid">
            {wishlist.map((item) => (
              <div key={item.id} className="saralanganlar__card">
                <Link to={`/product/${item.id}`} className="saralanganlar__card-link">
                  <div className="saralanganlar__card-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="saralanganlar__card-body">
                    <h3 className="saralanganlar__card-title">{item.title}</h3>
                    <p className="saralanganlar__card-price">
                      {item.price.toLocaleString()} so'm
                    </p>
                    {item.discount && (
                      <span className="saralanganlar__card-discount">
                        {item.discount}%
                      </span>
                    )}
                  </div>
                </Link>
                <button
                  className="saralanganlar__card-remove"
                  onClick={() => removeFromWishlist(item.id)}
                  title={t('remove_from_wishlist', 'Remove from wishlist')}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default Saralanganlar

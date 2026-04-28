import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

import 'swiper/css';
import 'swiper/css/pagination';

import './appleSwiper.css';

import { Pagination } from 'swiper/modules';
import appleSection from '../../data/appleSection';

export default function AppleSwiper() {
  const { addToCart } = useCart();

  return (
    <section className="appleSection">
      <div className="appleSection__header">
        <h2>Apple kunlari</h2>
        <span className="appleSection__seeAll">‣</span>
      </div>

      <Swiper
        slidesPerView={6}
        centeredSlides={false}
        spaceBetween={15}
        grabCursor={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="appleSwiper"
      >
        {appleSection.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`/product/${item.id}`} className="appleCard">
              <div className="appleCard__image">
                <img src={item.image} alt={item.title} />

                <button
                  className="hover-cart-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(item, 1, 12);
                  }}
                >
                  <FaShoppingCart />
                </button>
              </div>
              <div className="appleCard__body">
                <div className="appleCard__price-row">
                  <strong>{typeof item.price === 'number' ? item.price.toLocaleString() : item.price} so'm</strong>
                  <span className="appleCard__discount">{item.discount}</span>
                </div>
                <div className="appleCard__price-old">{typeof item.oldPrice === 'number' ? item.oldPrice.toLocaleString() : item.oldPrice} so'm</div>
                <div className="appleCard__monthly">{item.monthly}</div>
                <div className="appleCard__title">{item.title}</div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

import React from 'react'
import './Navbar.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import NavLinks from '../../data/NavLinks.js';

const Navbar = () => {
    const { t } = useTranslation();

    const navItems = NavLinks.slice(0, 8);

    return (
        <div className="navbar-wrapper">
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={8}
                navigation={true}
                modules={[Navigation]}
                className="navSwiper"
            >
                {navItems.map((item) => (
                    <SwiperSlide key={item.id} className="nav-slide">
                        <a href="#" className="nav-slide-link">
                            <img
                                className="nav-slide-img"
                                src={`/nav-product-${item.id}.png`}
                                alt={item.title}
                            />
                            <span className="nav-slide-text">
                                {t(`navLinks.${item.title}.title`, item.title)}
                            </span>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Navbar

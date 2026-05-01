import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import './Header.css'
import './SearchExtras.css'
import alifShopLogo from '../../assets/alifshop_logo.png'
import { BiSolidCategoryAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { FaPlaneUp } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import LoginModal from '../login/LoginModal';
import UzbekIcon from '/uzbek-icon.png'
import RussianIcon from '/russian-icon.png'
import EnglishIcon from '/american-icon.png'
import NavLink from '../../data/NavLinks.js'

import popularProducts from '../../data/popularProducts.js'
import appleSection from '../../data/appleSection.js'
import discountDay from '../../data/discountDay.js'
import beauty from '../../data/beauty.js'
import autoProducts from '../../data/autoProducts.js'
import perfume from '../../data/perfume.js'
import sportTechs from '../../data/sportTechs.js'
import laptops from '../../data/laptops.js'
import cleaningTechs from '../../data/cleaningTechs.js'

const getAllProducts = () => [
  ...popularProducts,
  ...appleSection,
  ...discountDay,
  ...beauty,
  ...autoProducts,
  ...perfume,
  ...sportTechs,
  ...laptops,
  ...cleaningTechs
];


const Header = () => {
  const { t, i18n } = useTranslation();
  const { toggleCart, totalItems } = useCart();
  const { user, logout } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState(NavLink[0]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (searchQuery.trim().length > 1) {
        const products = getAllProducts();
        const filtered = products.filter(p =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 8);
        setSearchResults(filtered);
        setShowSearch(true);
      } else {
        setSearchResults([]);
        setShowSearch(false);
      }
    }, 300);

    return () => clearTimeout(handler);
  }, [searchQuery]);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getTranslatedDropdown = (item) => {
    const result = t(`navLinks.${item.title}.dropdown`, { returnObjects: true });
    return Array.isArray(result) ? result : item.dropdown;
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <header className={scrolled ? "header scrolled" : "header"}>
        <Link to="/">
          <img
            className='main-logo'
            src={alifShopLogo}
            alt="alifshop logo"
            width="170"
            height="50"
          />
        </Link>
        <button className='categories-product' popoverTarget='open-catalog'>
          <BiSolidCategoryAlt className='category-icon' />
          <span>{t('catalog')}</span>
        </button>

        <div className="search-bar" ref={searchRef}>
          <CiSearch className='search-icon' aria-hidden="true" />
          <input
            className='search-input'
            type="text"
            placeholder={t('search_placeholder')}
            aria-label={t('search_placeholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery.trim().length > 1 && setShowSearch(true)}
          />

          {showSearch && (
            <div className="search-dropdown" role="listbox">
              {searchResults.length > 0 ? (
                searchResults.map(product => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="search-dropdown__item"
                    role="option"
                    onClick={() => setShowSearch(false)}
                  >
                    <img src={product.image} alt={product.title} loading="lazy" className="search-dropdown__img" />
                    <div className="search-dropdown__info">
                      <div className="search-dropdown__title">{product.title}</div>
                      <div className="search-dropdown__price">
                        {typeof product.price === 'number' ? product.price.toLocaleString() : product.price} so'm
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="search-dropdown__no-results">
                  {t('no_results', 'Hech narsa topilmadi')}
                </div>
              )}
            </div>
          )}
        </div>

        {user ? (
          <div className="log-in-wrapper" style={{ position: 'relative' }}>
            <button
              className="log-in"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              aria-expanded={isProfileOpen}
              aria-haspopup="true"
            >
              <FaCircleUser className='log-in__icon' style={{ color: '#FFC845' }} />
              <p className='log-in__text'>{user.name}</p>
            </button>
            {isProfileOpen && (
              <div className="profile-dropdown">
                <div className="profile-dropdown__header">
                  <strong>{user.name} {user.surname}</strong>
                  <span>{user.phone}</span>
                </div>
                <div className="profile-dropdown__divider"></div>
                <button className="profile-logout-btn" onClick={() => {
                  logout();
                  setIsProfileOpen(false);
                }}>
                  {t('logout', 'Chiqish')}
                </button>
              </div>
            )}
          </div>
        ) : (
          <button className="log-in" onClick={() => setIsLoginOpen(true)} aria-label={t('login')}>
            <FaCircleUser className='log-in__icon' />
            <p className='log-in__text'>{t('login')}</p>
          </button>
        )}
        <Link to="/saralanganlar" className="liked">
          <FcLike className='liked__icon' />
          <p className='liked__text'>{t('saralanganlar.navbar', 'Favorites')}</p>
        </Link>
        <a href="https://www.aviasales.uz/" target="_blank" rel="noopener noreferrer" className="avia">
          <FaPlaneUp className='avia__icon' />
          <p className='avia__text'>{t('avia_tickets')}</p>
        </a>

        <button className="cart" onClick={toggleCart} aria-label={t('cart')}>
          <div className="cart-icon-wrapper">
            <FaShoppingCart className='cart__icon' />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </div>
          <p className='cart__text'>{t('cart')}</p>
        </button>

        <div className="language-selector">
          <select
            id='language-changer'
            onChange={handleLanguageChange}
            value={i18n.language}
            aria-label="Select Language"
          >
            <option value="ru">Русский</option>
            <option value="uz">O'zb</option>
            <option value="en">English</option>
          </select>
        </div>
      </header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      <div id='open-catalog' popover="auto" className="open-catalog">
        <div className="catalog-inner">

          <div className="catalog-sidebar">
            {NavLink.map((item) => (
              <Link
                to={`/category/${item.title}`}
                className={`catalog-sidebar-item ${activeCategory?.id === item.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveCategory(item)}
                onClick={() => document.getElementById('open-catalog').togglePopover()}
              >
                <img
                  className="catalog-item-img"
                  src={`/nav-product-${((item.id - 1) % 20) + 1}.png`}
                  alt={t(`navLinks.${item.title}.title`, item.title)}
                  loading="lazy"
                />
                <span className="catalog-item-title">
                  {t(`navLinks.${item.title}.title`, item.title)}
                </span>
              </Link>
            ))}
          </div>

          <div className="catalog-panel">
            {activeCategory && (
              <div className="catalog-panel-content">
                <h2 className="catalog-panel-heading">
                  {t(`navLinks.${activeCategory.title}.title`, activeCategory.title)}
                </h2>
                <div className="catalog-panel-groups">
                  {getTranslatedDropdown(activeCategory).map((group, idx) => (
                    <div key={idx} className="catalog-group">
                      <h3 className="catalog-group-title">{group.title}</h3>
                      <ul className="catalog-group-submenu">
                        {group.submenu.map((sub, i) => (
                          <li key={i} className="catalog-group-subitem">{sub}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header

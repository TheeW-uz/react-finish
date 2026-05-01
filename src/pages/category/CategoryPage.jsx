import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../../components/header/Header';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

import popularProducts from '../../data/popularProducts.js';
import appleSection from '../../data/appleSection.js';
import discountDay from '../../data/discountDay.js';
import beauty from '../../data/beauty.js';
import autoProducts from '../../data/autoProducts.js';
import perfume from '../../data/perfume.js';
import sportTechs from '../../data/sportTechs.js';
import laptops from '../../data/laptops.js';
import cleaningTechs from '../../data/cleaningTechs.js';

import './CategoryPage.css';

const allProducts = [
  ...popularProducts, ...appleSection, ...discountDay, ...beauty,
  ...autoProducts, ...perfume, ...sportTechs, ...laptops, ...cleaningTechs
];

const CategoryPage = () => {
    const { categoryName } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const { t } = useTranslation();
    const { addToCart } = useCart();

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 50000000]);
    const [sortBy, setSortBy] = useState('newest');

    useEffect(() => {
        // In a real app, you'd filter allProducts by the category ID or Title
        // For this mockup, we'll just show all products if it's a general category
        setProducts(allProducts);
        setFilteredProducts(allProducts);
    }, [categoryName]);

    useEffect(() => {
        let result = [...products];

        // Filter by price
        result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

        // Sort
        if (sortBy === 'cheap') {
            result.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'expensive') {
            result.sort((a, b) => b.price - a.price);
        }

        setFilteredProducts(result);
    }, [products, priceRange, sortBy]);

    return (
        <div className="category-page">
            <Header />
            <Navbar />
            <div className="category-container">
                <aside className="category-sidebar">
                    <h3>{t('filters', 'Filtrlar')}</h3>
                    
                    <div className="filter-group">
                        <label>{t('price_range', 'Narx oralig\'i')}</label>
                        <div className="price-inputs">
                            <input 
                                type="number" 
                                placeholder="Dan" 
                                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])} 
                            />
                            <input 
                                type="number" 
                                placeholder="Gacha" 
                                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value) || 50000000])} 
                            />
                        </div>
                    </div>

                    <div className="filter-group">
                        <label>{t('sort_by', 'Saralash')}</label>
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="newest">{t('newest', 'Yangi kelganlar')}</option>
                            <option value="cheap">{t('cheapest', 'Arzonroq')}</option>
                            <option value="expensive">{t('expensive', 'Qimmatroq')}</option>
                        </select>
                    </div>
                </aside>

                <main className="category-main">
                    <div className="category-header">
                        <h2>{categoryName ? t(`navLinks.${categoryName}`, categoryName) : t('all_products', 'Barcha mahsulotlar')}</h2>
                        <span>{filteredProducts.length} {t('items_found', 'ta mahsulot')}</span>
                    </div>

                    <div className="category-grid">
                        {filteredProducts.map(item => (
                            <div key={item.id} className="category-card">
                                <Link to={`/product/${item.id}`} className="card-link">
                                    <div className="card-image">
                                        <img src={item.image} alt={item.title} loading="lazy" />
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
                                    <div className="card-body">
                                        <div className="card-price">{item.price.toLocaleString()} so'm</div>
                                        <div className="card-monthly">{item.monthly}</div>
                                        <div className="card-title">{item.title}</div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default CategoryPage;

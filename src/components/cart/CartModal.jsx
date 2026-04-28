import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { IoClose, IoTrashOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './CartModal.css';

const CartModal = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { 
        cart, 
        updateQuantity, 
        removeFromCart, 
        isCartOpen, 
        setIsCartOpen,
        totalPrice,
        totalItems,
        clearCart
    } = useCart();
    const { addToWishlist, isInWishlist } = useWishlist();
    const [selectedItems, setSelectedItems] = useState(cart.map(item => `${item.id}-${item.installmentMonth}`));
    
    // State for delete confirmation modal
    const [confirmDelete, setConfirmDelete] = useState({ open: false, id: null, month: null, bulk: false });

    if (!isCartOpen) return null;

    const handleToggleSelect = (id, month) => {
        const key = `${id}-${month}`;
        setSelectedItems(prev => 
            prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
        );
    };

    const handleSelectAll = () => {
        if (selectedItems.length === cart.length) {
            setSelectedItems([]);
        } else {
            setSelectedItems(cart.map(item => `${item.id}-${item.installmentMonth}`));
        }
    };

    const handleDeleteClick = (id, month) => {
        setConfirmDelete({ open: true, id, month, bulk: false });
    };

    const handleBulkDeleteClick = () => {
        if (selectedItems.length > 0) {
            setConfirmDelete({ open: true, id: null, month: null, bulk: true });
        }
    };

    const executeDelete = () => {
        if (confirmDelete.bulk) {
            cart.forEach(item => {
                const key = `${item.id}-${item.installmentMonth}`;
                if (selectedItems.includes(key)) {
                    removeFromCart(item.id, item.installmentMonth);
                }
            });
            setSelectedItems([]);
        } else {
            removeFromCart(confirmDelete.id, confirmDelete.month);
            const key = `${confirmDelete.id}-${confirmDelete.month}`;
            setSelectedItems(prev => prev.filter(k => k !== key));
        }
        setConfirmDelete({ open: false, id: null, month: null, bulk: false });
    };

    const handleCheckout = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    };

    return (
        <div className="cart-modal-overlay" onClick={() => setIsCartOpen(false)}>
            <div className="cart-modal-content" onClick={e => e.stopPropagation()}>
                <div className="cart-modal-header">
                    <button className="close-btn" onClick={() => setIsCartOpen(false)}>
                        <IoClose />
                    </button>
                    <h2>{t('cart', 'Cart')}</h2>
                </div>

                {cart.length === 0 ? (
                    <div className="cart-empty">
                        <img src="/empty-cart.png" alt="Empty Cart" />
                        <p>{t('cart_empty', 'your cart is empty')}</p>
                        <span>{t('add_products_prompt', 'add products to the cart and give order')}</span>
                    </div>
                ) : (
                    <>
                        <div className="cart-actions-top">
                            <button className="delete-selected" onClick={handleBulkDeleteClick}>
                                <IoTrashOutline />
                                <span>{t('delete_selected', 'delete the selected')}</span>
                            </button>
                            <label className="select-all">
                                <span>{t('choose_all', 'choose all')}</span>
                                <input 
                                    type="checkbox" 
                                    checked={selectedItems.length === cart.length && cart.length > 0} 
                                    onChange={handleSelectAll}
                                />
                            </label>
                        </div>

                        <div className="cart-items-list">
                            {cart.map((item) => {
                                const key = `${item.id}-${item.installmentMonth}`;
                                return (
                                    <div key={key} className="cart-item">
                                        <div className="item-main">
                                            <input 
                                                type="checkbox" 
                                                checked={selectedItems.includes(key)}
                                                onChange={() => handleToggleSelect(item.id, item.installmentMonth)}
                                            />
                                            <img src={item.image} alt={item.title} className="item-img" />
                                            <div className="item-details">
                                                <p className="item-name">{item.title}</p>
                                                <div className="item-prices">
                                                    <span className="item-price">{item.price.toLocaleString()} so'm</span>
                                                    <span className="item-monthly">
                                                        {(Math.round(item.price / item.installmentMonth)).toLocaleString()} so'm x {item.installmentMonth} {t('month')}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item-actions-bottom">
                                            <div className="left-actions">
                                                <button className="action-btn" onClick={() => handleDeleteClick(item.id, item.installmentMonth)}>
                                                    <IoTrashOutline />
                                                    <span>{t('delete', 'Delete')}</span>
                                                </button>
                                                <button className="action-btn" onClick={() => addToWishlist(item)}>
                                                    {isInWishlist(item.id) ? <FaHeart style={{color: '#ff4d4d'}} /> : <FaRegHeart />}
                                                    <span>{t('favorites', 'Favorites')}</span>
                                                </button>
                                            </div>
                                            <div className="item-counter">
                                                <button onClick={() => updateQuantity(item.id, item.installmentMonth, item.quantity - 1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, item.installmentMonth, item.quantity + 1)}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="cart-summary">
                            <div className="summary-row">
                                <span>{totalItems} {t('products_count', 'tovarlar')}</span>
                                <span>{totalPrice.toLocaleString()} so'm</span>
                            </div>
                            <div className="summary-row">
                                <span>{t('shipping', 'shipping')}</span>
                                <span className="free-shipping">{t('free', 'Free')}</span>
                            </div>
                            <div className="summary-row total">
                                <span>{t('all_total', 'All')}</span>
                                <span>{totalPrice.toLocaleString()} so'm</span>
                            </div>
                            <button className="checkout-btn" onClick={handleCheckout}>
                                {t('checkout', 'rasmiylashtirish')}
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Delete Confirmation Modal */}
            {confirmDelete.open && (
                <div className="confirm-delete-overlay" onClick={() => setConfirmDelete({ open: false, id: null, month: null, bulk: false })}>
                    <div className="confirm-delete-modal" onClick={e => e.stopPropagation()}>
                        <button className="confirm-close" onClick={() => setConfirmDelete({ open: false, id: null, month: null, bulk: false })}>
                            <IoClose />
                        </button>
                        <div className="confirm-content">
                            <h3>{t('delete_confirm_title', 'do you want to delete this')}</h3>
                            <p>{t('delete_confirm_subtitle', 'probably you pressed wrong button?')}</p>
                            <div className="confirm-actions">
                                <button className="confirm-delete-btn" onClick={executeDelete}>
                                    {t('delete', 'Delete')}
                                </button>
                                <button className="confirm-leave-btn" onClick={() => setConfirmDelete({ open: false, id: null, month: null, bulk: false })}>
                                    {t('leave', 'leave')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartModal;

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import toast from 'react-hot-toast';
import './Checkout.css';

const Checkout = () => {
    const { t } = useTranslation();
    const { cart, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        paymentMethod: 'card'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleOrder = () => {
        setStep(3);
        toast.success("Buyurtmangiz muvaffaqiyatli qabul qilindi!", {
            duration: 4000,
            style: { borderRadius: '10px', background: '#333', color: '#fff' }
        });
        setTimeout(() => {
            clearCart();
            navigate('/');
        }, 5000);
    };

    if (cart.length === 0 && step !== 3) {
        return (
            <div className="checkout-page empty">
                <Header />
                <div className="checkout-container">
                    <h2>{t('cart_empty', 'Savatchangiz bo\'sh')}</h2>
                    <button onClick={() => navigate('/')} className="back-home-btn">
                        {t('back_home', 'Bosh sahifaga qaytish')}
                    </button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <Header />
            <div className="checkout-container">
                {step === 1 && (
                    <div className="checkout-step info-step">
                        <h2>{t('delivery_info', 'Yetkazib berish ma\'lumotlari')}</h2>
                        <div className="checkout-grid">
                            <div className="checkout-form">
                                <div className="input-group">
                                    <label>{t('full_name', 'F.I.SH')}</label>
                                    <input name="name" type="text" placeholder="Ismingizni kiriting" onChange={handleInputChange} />
                                </div>
                                <div className="input-group">
                                    <label>{t('phone', 'Telefon')}</label>
                                    <input name="phone" type="text" placeholder="+998" onChange={handleInputChange} />
                                </div>
                                <div className="input-group">
                                    <label>{t('address', 'Manzil')}</label>
                                    <textarea name="address" placeholder="Shahar, ko'cha, uy..." onChange={handleInputChange}></textarea>
                                </div>
                                <button className="next-btn" onClick={() => setStep(2)}>
                                    {t('continue', 'Davom etish')}
                                </button>
                            </div>
                            <div className="checkout-summary">
                                <h3>{t('order_summary', 'Buyurtmangiz')}</h3>
                                {cart.map(item => (
                                    <div key={`${item.id}-${item.installmentMonth}`} className="summary-item">
                                        <span>{item.title} x {item.quantity}</span>
                                        <span>{(item.price * item.quantity).toLocaleString()} so'm</span>
                                    </div>
                                ))}
                                <div className="summary-total">
                                    <strong>{t('total', 'Jami')}:</strong>
                                    <strong>{totalPrice.toLocaleString()} so'm</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="checkout-step payment-step">
                        <h2>{t('payment_method', 'To\'lov usuli')}</h2>
                        <div className="payment-options">
                            <label className={`payment-option ${formData.paymentMethod === 'card' ? 'active' : ''}`}>
                                <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleInputChange} />
                                <span>{t('card_payment', 'Plastik karta orqali')}</span>
                            </label>
                            <label className={`payment-option ${formData.paymentMethod === 'cash' ? 'active' : ''}`}>
                                <input type="radio" name="paymentMethod" value="cash" checked={formData.paymentMethod === 'cash'} onChange={handleInputChange} />
                                <span>{t('cash_payment', 'Naqd pul orqali')}</span>
                            </label>
                        </div>
                        <div className="checkout-actions">
                            <button className="back-btn" onClick={() => setStep(1)}>{t('back', 'Orqaga')}</button>
                            <button className="order-btn" onClick={handleOrder}>{t('place_order', 'Buyurtma berish')}</button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="checkout-success">
                        <div className="success-icon">✅</div>
                        <h2>{t('order_success', 'Buyurtmangiz qabul qilindi!')}</h2>
                        <p>{t('order_success_msg', 'Tez orada operatorimiz siz bilan bog\'lanadi.')}</p>
                        <p>{t('redirecting', 'Bosh sahifaga qaytilmoqda...')}</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;

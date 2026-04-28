import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoClose } from 'react-icons/io5';
import { useAuth } from '../../context/AuthContext';
import './LoginModal.css';

const LoginModal = ({ isOpen, onClose }) => {
    const { t } = useTranslation();
    const { login } = useAuth();
    const [phone, setPhone] = useState('+998');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const handleLogin = () => {
        if (phone.length > 7 && name && surname) {
            login({ phone, name, surname });
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="login-modal-overlay" onClick={onClose}>
            <div className="login-modal-content" onClick={e => e.stopPropagation()}>
                <button className="login-close-btn" onClick={onClose}>
                    <IoClose />
                </button>
                
                <div className="login-header">
                    <div className="user-icon-circle">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" fill="#4B5563"/>
                            <path d="M12 14C9.33333 14 4 15.3333 4 18V20H20V18C20 15.3333 14.6667 14 12 14Z" fill="#4B5563"/>
                        </svg>
                    </div>
                    <h2>{t('login_title', 'Shaxsingizni tasdiqlang')}</h2>
                </div>

                <div className="login-form">
                    <div className="phone-input-wrapper">
                        <label>{t('name', 'Ism')}</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ismingizni kiriting"
                        />
                    </div>
                    <div className="phone-input-wrapper">
                        <label>{t('surname', 'Familiya')}</label>
                        <input 
                            type="text" 
                            value={surname} 
                            onChange={(e) => setSurname(e.target.value)}
                            placeholder="Familiyangizni kiriting"
                        />
                    </div>
                    <div className="phone-input-wrapper">
                        <label>{t('phone_label', 'Telefon raqam')}</label>
                        <input 
                            type="text" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+998"
                        />
                    </div>

                    <button className="continue-btn" onClick={handleLogin}>
                        {t('continue', 'Davom etish')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;

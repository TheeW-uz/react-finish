import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import qrCode from '../../assets/imgs/qr-code.png';
import appStore from '../../assets/imgs/app-store.svg';
import googlePlay from '../../assets/imgs/google-play.svg';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-columns">
                    <div className="footer-column">
                        <h4>{t('footer.servis', 'Servis')}</h4>
                        <ul>
                            <li><a href="#">alif shopda soting!</a></li>
                            <li><a href="#">Muddatli to'lov islomda</a></li>
                            <li><a href="#">Qaytarish</a></li>
                            <li><a href="#">Namoz vaqti</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>{t('footer.hujjatlar', 'Hujjatlar')}</h4>
                        <ul>
                            <li><a href="#">Sotish uchun umumiy shartlar</a></li>
                            <li><a href="#">Nizom</a></li>
                            <li><a href="#">Guvohnoma</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>{t('footer.yordam', 'Yordam')}</h4>
                        <ul>
                            <li><a href="#">Telegram</a></li>
                            <li><a href="#">+998 555 12 12 12</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>{t('footer.obuna', "Obuna bo'ling")}</h4>
                        <div className="social-icons">
                            <a href="#" className="social-icon insta"><FaInstagram /></a>
                            <a href="#" className="social-icon fb"><FaFacebookF /></a>
                            <a href="#" className="social-icon tg"><FaTelegramPlane /></a>
                        </div>
                    </div>

                    <div className="footer-qr-column">
                        <div className="qr-container">
                            <img src={qrCode} alt="QR Code" className="qr-img" />
                            <div className="store-buttons">
                                <img src={appStore} alt="App Store" className="store-img" />
                                <img src={googlePlay} alt="Google Play" className="store-img" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>2026 © alifshop.uz</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

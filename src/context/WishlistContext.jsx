import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './WishlistToast.css';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { t } = useTranslation();
  const [wishlist, setWishlist] = useState([]);
  const [toastData, setToastData] = useState({ show: false, product: null });
  const [timeoutId, setTimeoutId] = useState(null);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('wishlist');
    if (saved) {
      try {
        setWishlist(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing wishlist from localStorage:', e);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      
      // Show toast
      setToastData({ show: true, product });
      if (timeoutId) clearTimeout(timeoutId);
      const newTimeoutId = setTimeout(() => {
        setToastData({ show: false, product: null });
      }, 4000);
      setTimeoutId(newTimeoutId);

      return [...prev, product];
    });
  };

  const cancelAdd = () => {
    if (toastData.product) {
      removeFromWishlist(toastData.product.id);
    }
    setToastData({ show: false, product: null });
    if (timeoutId) clearTimeout(timeoutId);
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  const value = {
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
      {toastData.show && (
        <div className="wishlist-toast">
          <span>{t('wishlist_added', 'Product is now added to favourites')}</span>
          <button className="wishlist-toast__cancel" onClick={cancelAdd}>✕</button>
        </div>
      )}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = React.useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider');
  }
  return context;
};

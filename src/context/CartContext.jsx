import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1, installmentMonth = 12) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id && item.installmentMonth === installmentMonth);
      if (existingItem) {
        toast.success(`${product.title} miqdori yangilandi!`, {
          icon: '🔄',
          style: { borderRadius: '10px', background: '#333', color: '#fff' }
        });
        return prevCart.map(item => 
          (item.id === product.id && item.installmentMonth === installmentMonth) 
          ? { ...item, quantity: item.quantity + quantity } 
          : item
        );
      }
      toast.success(`${product.title} savatga qo'shildi!`, {
        icon: '🛒',
        style: { borderRadius: '10px', background: '#333', color: '#fff' }
      });
      return [...prevCart, { ...product, quantity, installmentMonth }];
    });
  };

  const updateQuantity = (productId, installmentMonth, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(prevCart => 
      prevCart.map(item => 
        (item.id === productId && item.installmentMonth === installmentMonth) 
        ? { ...item, quantity: newQuantity } 
        : item
      )
    );
  };

  const removeFromCart = (productId, installmentMonth) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === productId && item.installmentMonth === installmentMonth)));
  };

  const clearCart = () => {
    setCart([]);
    toast.error("Savatcha tozalandi", {
      style: { borderRadius: '10px', background: '#333', color: '#fff' }
    });
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const totalItems = React.useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);
  const totalPrice = React.useMemo(() => cart.reduce((total, item) => total + (item.price * item.quantity), 0), [cart]);

  const value = React.useMemo(() => ({
    cart, 
    addToCart, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    isCartOpen, 
    setIsCartOpen,
    toggleCart,
    totalItems,
    totalPrice
  }), [cart, isCartOpen, totalItems, totalPrice]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};


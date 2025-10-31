
"use client";

import { useState, useEffect, ReactNode } from 'react';
import type { CartItem, Product } from '@/types';
import { CartContext } from './use-cart';
import { useToast } from './use-toast';

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [discount, setDiscount] = useState(0);
  const [promoCode, setPromoCode] = useState<string | null>(null);
  const [isInitial, setIsInitial] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    try {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) setCartItems(JSON.parse(storedCart));

        const storedPromo = localStorage.getItem('promoCode');
        if(storedPromo) setPromoCode(JSON.parse(storedPromo));

    } catch (error) {
        console.error("Failed to parse from localStorage", error);
        setCartItems([]);
        setPromoCode(null);
    }
    setIsInitial(false);
  }, []);

  useEffect(() => {
    if (!isInitial) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
      if (promoCode) {
        localStorage.setItem('promoCode', JSON.stringify(promoCode));
      } else {
        localStorage.removeItem('promoCode');
      }
      // Re-validate discount when cart changes
      if(promoCode) applyPromoCode(promoCode, true);

    }
  }, [cartItems, promoCode, isInitial]);

  const addToCart = (product: Product, selectedSize: string, selectedColor: string) => {
    setCartItems(prevItems => {
      const cartItemId = `${product.id}-${selectedSize}-${selectedColor}`;
      const existingItem = prevItems.find(item => `${item.id}-${item.selectedSize}-${item.selectedColor}` === cartItemId);
      if (existingItem) {
        return prevItems.map(item =>
          `${item.id}-${item.selectedSize}-${item.selectedColor}` === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1, selectedSize, selectedColor }];
      }
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => `${item.id}-${item.selectedSize}-${item.selectedColor}` !== cartItemId));
  };
  
  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
            `${item.id}-${item.selectedSize}-${item.selectedColor}` === cartItemId
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setDiscount(0);
    setPromoCode(null);
  };
  
  const applyPromoCode = (code: string, silent = false) => {
    const currentSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    if (code.toUpperCase() === 'SAVE10') {
      setDiscount(currentSubtotal * 0.10);
      setPromoCode(code);
      if (!silent) toast({ title: "Promo Code Applied!", description: "10% discount has been applied to your order." });
    } else {
      setDiscount(0);
      setPromoCode(null);
      if (!silent) toast({ title: "Invalid Promo Code", variant: "destructive" });
    }
  };


  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gst = subtotal * 0.18;
  const deliveryFee = subtotal > 4000 || subtotal === 0 ? 0 : 40;
  const cartTotal = (subtotal + gst + deliveryFee) - discount;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, applyPromoCode, cartCount, subtotal, gst, deliveryFee, discount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

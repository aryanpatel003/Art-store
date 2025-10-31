
"use client";

import { useState, useEffect, ReactNode } from 'react';
import type { CartItem, Product } from '@/types';
import { CartContext } from '@/lib/use-cart';
import { useToast } from '@/lib/use-toast';

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems, promoCode, isInitial]);

  const addItem = ({ product, quantity, selectedSize, selectedColor }: { product: Product; quantity: number; selectedSize?: string; selectedColor?: string }) => {
    const size = selectedSize || product.sizes[0];
    const color = selectedColor || product.colors[0];
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.product.id === product.id && 
                item.selectedSize === size && 
                item.selectedColor === color
      );
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id && 
          item.selectedSize === size && 
          item.selectedColor === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { product, quantity, selectedSize: size, selectedColor: color }];
      }
    });
  };

  const removeItem = (productId: string, selectedSize?: string, selectedColor?: string) => {
    setCartItems(prevItems => prevItems.filter(
      item => !(item.product.id === productId && 
                item.selectedSize === selectedSize && 
                item.selectedColor === selectedColor)
    ));
  };
  
  const updateQuantity = (productId: string, selectedSize: string | undefined, selectedColor: string | undefined, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, selectedSize, selectedColor);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.product.id === productId && 
          item.selectedSize === selectedSize && 
          item.selectedColor === selectedColor
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
    const currentSubtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
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


  const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      items: cartItems,
      addItem, 
      removeItem, 
      updateQuantity, 
      clearCart, 
      applyPromoCode, 
      count,
      total
    }}>
      {children}
    </CartContext.Provider>
  );
};

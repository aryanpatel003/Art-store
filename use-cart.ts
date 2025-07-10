
"use client";

import { createContext, useContext } from 'react';
import type { CartItem, Product } from '@/types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, selectedSize: string, selectedColor: string) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  applyPromoCode: (code: string) => void;
  cartCount: number;
  subtotal: number;
  gst: number;
  deliveryFee: number;
  discount: number;
  cartTotal: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


"use client";

import { createContext, useContext } from 'react';
import type { CartItem, Product } from '@/types';

interface CartContextType {
  cartItems: CartItem[];
  addItem: (item: { product: Product; quantity: number; selectedSize?: string; selectedColor?: string }) => void;
  removeItem: (productId: string, selectedSize?: string, selectedColor?: string) => void;
  updateQuantity: (productId: string, selectedSize: string | undefined, selectedColor: string | undefined, quantity: number) => void;
  clearCart: () => void;
  applyPromoCode: (code: string) => void;
  total: number;
  count: number;
  items: CartItem[];
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

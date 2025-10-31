"use client";

import { createContext, useContext } from 'react';
import type { Product } from '@/types';

interface WishlistContextType {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  count: number;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

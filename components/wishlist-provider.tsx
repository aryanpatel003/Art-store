"use client";

import { useState, useEffect, ReactNode } from 'react';
import { WishlistContext } from '@/lib/use-wishlist';
import { products } from '@/lib/data';
import type { Product } from '@/types';

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [isInitial, setIsInitial] = useState(true);
  
  useEffect(() => {
    try {
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
          setWishlistIds(JSON.parse(storedWishlist));
        }
    } catch (error) {
        console.error("Failed to parse wishlist from localStorage", error);
        setWishlistIds([]);
    }
    setIsInitial(false);
  }, []);

  useEffect(() => {
    if (!isInitial) {
      localStorage.setItem('wishlist', JSON.stringify(wishlistIds));
    }
  }, [wishlistIds, isInitial]);

  const isInWishlist = (productId: string) => {
      return wishlistIds.includes(productId);
  }

  const addItem = (product: Product) => {
    if (!wishlistIds.includes(product.id)) {
      setWishlistIds(prev => [...prev, product.id]);
    }
  };

  const removeItem = (productId: string) => {
    setWishlistIds(prev => prev.filter(id => id !== productId));
  };

  const items = products.filter(p => wishlistIds.includes(p.id));
  const count = wishlistIds.length;

  return (
    <WishlistContext.Provider value={{ items, addItem, removeItem, isInWishlist, count }}>
      {children}
    </WishlistContext.Provider>
  );
};

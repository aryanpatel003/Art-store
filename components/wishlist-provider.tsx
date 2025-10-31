"use client";

import { useState, useEffect, ReactNode } from 'react';
import { WishlistContext } from './use-wishlist';

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);
  const [isInitial, setIsInitial] = useState(true);
  
  useEffect(() => {
    try {
        const storedWishlist = localStorage.getItem('wishlist');
        if (storedWishlist) {
          setWishlistItems(JSON.parse(storedWishlist));
        }
    } catch (error) {
        console.error("Failed to parse wishlist from localStorage", error);
        setWishlistItems([]);
    }
    setIsInitial(false);
  }, []);

  useEffect(() => {
    if (!isInitial) {
      localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    }
  }, [wishlistItems, isInitial]);

  const isInWishlist = (productId: string) => {
      return wishlistItems.includes(productId);
  }

  const toggleWishlist = (productId: string) => {
    setWishlistItems(prevItems => {
        if (prevItems.includes(productId)) {
            return prevItems.filter(id => id !== productId);
        } else {
            return [...prevItems, productId];
        }
    });
  };

  const wishlistCount = wishlistItems.length;

  return (
    <WishlistContext.Provider value={{ wishlistItems, toggleWishlist, isInWishlist, wishlistCount }}>
      {children}
    </WishlistContext.Provider>
  );
};

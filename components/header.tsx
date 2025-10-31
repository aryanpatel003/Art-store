'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ShoppingCart, Heart, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SearchDialog } from '@/components/search-dialog';
import { useCart } from '@/lib/use-cart';
import { useWishlist } from '@/lib/use-wishlist';

export function Header() {
  const pathname = usePathname();
  const { items: cartItems } = useCart();
  const { items: wishlistItems } = useWishlist();

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-headline font-bold text-primary">Canvas & Palette</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/collections"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname.startsWith('/collections') ? 'text-primary' : 'text-foreground'
            }`}
          >
            Shop
          </Link>
          <Link
            href="/collections?category=Paints"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Paints
          </Link>
          <Link
            href="/collections?category=Brushes"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Brushes
          </Link>
          <Link
            href="/collections?category=Paper%20&%20Canvas"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Canvas
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === '/about' ? 'text-primary' : 'text-foreground'
            }`}
          >
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <SearchDialog />

          <Link href="/profile">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
              {wishlistItems.length > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {wishlistItems.length}
                </Badge>
              )}
              <span className="sr-only">Wishlist</span>
            </Button>
          </Link>

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartItemCount}
                </Badge>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>

          <Link href="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

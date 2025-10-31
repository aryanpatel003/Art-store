
"use client";

import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useWishlist } from '@/lib/use-wishlist';
import { cn } from '@/lib/utils';


interface ProductCardProps {
  product: Product;
}

const imageHints: Record<string, string> = {
  '1': 'watercolor set',
  '2': 'sketchbook',
  '3': 'acrylic paint',
  '4': 'oil pastels',
  '5': 'blank canvas',
  '6': 'paintbrushes',
  '7': 'charcoal pencils',
  '8': 'wooden easel',
};

export function ProductCard({ product }: ProductCardProps) {
  const { isInWishlist, addItem, removeItem } = useWishlist();
  const isLiked = isInWishlist(product.id);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLiked) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  }

  return (
    <div className="w-full group">
      <Link href={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-secondary">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={imageHints[product.id] || 'art supply'}
          />
          <div className="absolute top-3 right-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="bg-black/20 hover:bg-black/50 text-white rounded-full h-8 w-8"
              onClick={handleWishlistToggle}
            >
              <Heart className={cn("h-4 w-4", isLiked && "fill-current text-red-500")} />
            </Button>
          </div>
        </div>
        <div className="pt-3 text-left">
          <h3 className="text-sm sm:text-base font-semibold leading-tight">{product.name}</h3>
          <p className="mt-1 text-sm font-bold text-primary">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </div>
  );
}

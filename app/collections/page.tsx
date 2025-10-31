'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { ProductCardSkeleton } from '@/components/product-card-skeleton';
import { CollectionControls } from '@/components/collection-controls';
import { useState, useEffect } from 'react';

function CollectionsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category');
  const sortParam = searchParams.get('sort');
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let filtered = [...products];

    // Filter by category
    if (categoryParam) {
      filtered = filtered.filter(p => p.category === categoryParam);
    }

    // Sort products
    switch (sortParam) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Assuming ID order represents newest
        filtered.reverse();
        break;
      default:
        // Default sort (featured)
        break;
    }

    setTimeout(() => {
      setFilteredProducts(filtered);
      setIsLoading(false);
    }, 300);
  }, [categoryParam, sortParam]);

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-headline font-bold mb-2">
          {categoryParam || 'All Products'}
        </h1>
        <p className="text-lg text-muted-foreground">
          {isLoading ? (
            <span className="inline-block h-5 w-48 bg-muted animate-pulse rounded-md" />
          ) : (
            `${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`
          )}
        </p>
      </div>

      <CollectionControls />

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mt-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 px-4 border-2 border-dashed rounded-lg">
          <p className="text-2xl font-headline font-bold mb-2">No Products Found</p>
          <p className="text-muted-foreground">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<CollectionsSkeleton />}>
      <CollectionsContent />
    </Suspense>
  );
}

function CollectionsSkeleton() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div className="mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-headline font-bold mb-2">All Products</h1>
        <p className="text-lg text-muted-foreground">
          <span className="inline-block h-5 w-48 bg-muted animate-pulse rounded-md" />
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mt-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

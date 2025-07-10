
'use client';

import { useSearchParams } from 'next/navigation';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { Suspense, useState, useEffect } from 'react';
import { SearchX } from 'lucide-react';
import { ProductCardSkeleton } from '@/components/product-card-skeleton';

function SearchResults() {
    const searchParams = useSearchParams();
    const query = searchParams.get('q');
    const [isLoading, setIsLoading] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
      setIsLoading(true);
      if (query) {
        const timer = setTimeout(() => {
          setFilteredProducts(products.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
          ));
          setIsLoading(false);
        }, 500); // simulate network delay
        return () => clearTimeout(timer);
      } else {
        setFilteredProducts([]);
        setIsLoading(false);
      }
    }, [query]);

    if (!query && !isLoading) {
        return (
            <div className="container px-4 sm:px-6 my-8 md:my-12 text-center">
                <h1 className="text-3xl font-headline font-bold">Search Products</h1>
                <p className="mt-2 text-lg text-muted-foreground">Please enter a search term to find products.</p>
            </div>
        )
    }

    return (
        <div className="container px-4 sm:px-6 my-8 md:my-12">
            <div className="mb-8 md:mb-12">
                <h1 className="text-3xl font-headline font-bold">Search Results</h1>
                <p className="mt-2 text-lg text-muted-foreground">
                    {isLoading ? (
                       <span className="inline-block h-5 w-64 bg-muted animate-pulse rounded-md" />
                    ) : (
                      <>
                        {filteredProducts.length} results for: <span className="font-semibold text-foreground">"{query}"</span>
                      </>
                    )}
                </p>
            </div>
            {isLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <ProductCardSkeleton key={i} />
                  ))}
                </div>
            ) : filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center text-center py-24 px-4 sm:px-6 border-2 border-dashed rounded-lg">
                    <SearchX className="mx-auto h-24 w-24 text-muted-foreground" />
                    <h2 className="mt-8 text-3xl font-headline font-bold">No Products Found</h2>
                    <p className="mt-4 text-muted-foreground">We couldn't find any products matching your search term.</p>
                </div>
            )}
        </div>
    );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<SearchSkeleton />}>
            <SearchResults />
        </Suspense>
    )
}

function SearchSkeleton() {
  return (
    <div className="container px-4 sm:px-6 my-8 md:my-12">
        <div className="mb-8 md:mb-12">
            <h1 className="text-3xl font-headline font-bold">Search Results</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              <span className="inline-block h-5 w-64 bg-muted animate-pulse rounded-md" />
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
        </div>
    </div>
  )
}

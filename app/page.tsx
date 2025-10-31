'use client';

import { products, bannerItems } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import { Paintbrush, Palette, Sparkles } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {bannerItems.map((banner) => (
              <CarouselItem key={banner.id}>
                <div className="relative h-[400px] md:h-[600px] w-full">
                  <Image
                    src={banner.image}
                    alt={banner.alt}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={banner.hint}
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white px-4 max-w-3xl">
                      <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">
                        {banner.title}
                      </h1>
                      <p className="text-lg md:text-xl mb-8">
                        {banner.description}
                      </p>
                      <Button asChild size="lg">
                        <Link href={banner.buttonLink}>{banner.buttonText}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Paintbrush className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground">
                Carefully curated art supplies from trusted brands
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Wide Selection</h3>
              <p className="text-muted-foreground">
                Everything from paints to canvas, all in one place
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Get advice and recommendations from our team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our most popular art supplies
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/collections">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Ready to Create Your Masterpiece?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Shop our complete collection of premium art supplies
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/collections">Start Shopping</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

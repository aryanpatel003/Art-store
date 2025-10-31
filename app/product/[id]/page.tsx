'use client';

import { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Star, Heart, ShoppingCart, Truck, Shield, RefreshCw } from 'lucide-react';
import { useCart } from '@/lib/use-cart';
import { useWishlist } from '@/lib/use-wishlist';
import { useToast } from '@/lib/use-toast';
import { ProductCard } from '@/components/product-card';

export default function ProductPage() {
  const params = useParams();
  const { toast } = useToast();
  const { addItem } = useCart();
  const { addItem: addToWishlist, items: wishlistItems } = useWishlist();
  
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const isInWishlist = wishlistItems.some(item => item.id === product.id);
  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const averageRating = product.reviews?.length
    ? product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length
    : 0;

  const handleAddToCart = () => {
    addItem({
      product,
      quantity,
      selectedSize,
      selectedColor,
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      addToWishlist(product);
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden border">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-2">{product.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-headline font-bold mb-2">
              {product.name}
            </h1>
            {product.reviews && product.reviews.length > 0 && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.round(averageRating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product.reviews.length} reviews)
                </span>
              </div>
            )}
            <p className="text-3xl font-bold text-primary">
              ₹{product.price.toFixed(2)}
            </p>
          </div>

          <Separator />

          <p className="text-muted-foreground">{product.description}</p>

          {product.artistEndorsement && (
            <Card className="bg-secondary">
              <CardContent className="p-4">
                <p className="text-sm italic mb-2">"{product.artistEndorsement.quote}"</p>
                <p className="text-sm font-semibold">— {product.artistEndorsement.artistName}</p>
              </CardContent>
            </Card>
          )}

          {/* Size Selection */}
          {product.sizes.length > 1 && (
            <div>
              <Label className="mb-2 block">Size</Label>
              <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <div key={size}>
                      <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                      <Label
                        htmlFor={`size-${size}`}
                        className="flex items-center justify-center px-4 py-2 border-2 rounded-md cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Color Selection */}
          {product.colors.length > 1 && (
            <div>
              <Label className="mb-2 block">Color</Label>
              <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <div key={color}>
                      <RadioGroupItem value={color} id={`color-${color}`} className="peer sr-only" />
                      <Label
                        htmlFor={`color-${color}`}
                        className="flex items-center justify-center px-4 py-2 border-2 rounded-md cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10"
                      >
                        {color}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Quantity */}
          <div>
            <Label className="mb-2 block">Quantity</Label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </Button>
              <span className="w-12 text-center font-semibold">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
              >
                +
              </Button>
              <span className="text-sm text-muted-foreground ml-2">
                ({product.stock} in stock)
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <Button onClick={handleAddToCart} size="lg" className="flex-1">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
            <Button
              onClick={handleAddToWishlist}
              variant={isInWishlist ? 'default' : 'outline'}
              size="lg"
            >
              <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="text-center">
              <Truck className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-xs font-semibold">Free Shipping</p>
              <p className="text-xs text-muted-foreground">On orders over ₹999</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-xs font-semibold">Quality Guarantee</p>
              <p className="text-xs text-muted-foreground">Premium products</p>
            </div>
            <div className="text-center">
              <RefreshCw className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-xs font-semibold">Easy Returns</p>
              <p className="text-xs text-muted-foreground">30-day policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews and Q&A Tabs */}
      {(product.reviews || product.qa) && (
        <div className="mt-16">
          <Tabs defaultValue="reviews" className="w-full">
            <TabsList>
              {product.reviews && <TabsTrigger value="reviews">Reviews ({product.reviews.length})</TabsTrigger>}
              {product.qa && <TabsTrigger value="qa">Q&A ({product.qa.length})</TabsTrigger>}
            </TabsList>
            {product.reviews && (
              <TabsContent value="reviews" className="space-y-6 mt-6">
                {product.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold">{review.author}</p>
                          <div className="flex mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating
                                    ? 'fill-yellow-400 text-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <h4 className="font-semibold mb-2">{review.title}</h4>
                      <p className="text-muted-foreground">{review.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            )}
            {product.qa && (
              <TabsContent value="qa" className="space-y-6 mt-6">
                {product.qa.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <p className="font-semibold mb-3">Q: {item.question}</p>
                      <div className="pl-4 border-l-2 border-primary/20">
                        <p className="text-muted-foreground mb-2">A: {item.answer}</p>
                        <p className="text-sm text-muted-foreground">
                          — {item.author} on {item.date}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            )}
          </Tabs>
        </div>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-headline font-bold mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import { useCart } from '@/lib/use-cart';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="text-center max-w-md mx-auto">
          <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
          <h1 className="text-3xl font-headline font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild size="lg">
            <Link href="/collections">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-headline font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`}>
              <CardContent className="p-4 md:p-6">
                <div className="flex gap-4">
                  <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden border">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          <Link href={`/product/${item.product.id}`} className="hover:text-primary">
                            {item.product.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.selectedSize} · {item.selectedColor}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.product.id, item.selectedSize, item.selectedColor)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor,
                            Math.max(1, item.quantity - 1)
                          )}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(
                            item.product.id,
                            item.selectedSize,
                            item.selectedColor,
                            Math.min(item.product.stock, item.quantity + 1)
                          )}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="font-bold text-lg">
                        ₹{(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardContent className="p-6">
              <h2 className="text-xl font-headline font-bold mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">₹{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-green-600">
                    {total >= 999 ? 'FREE' : '₹50.00'}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-primary">
                    ₹{(total >= 999 ? total : total + 50).toFixed(2)}
                  </span>
                </div>
              </div>

              {total < 999 && (
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  Add ₹{(999 - total).toFixed(2)} more for free shipping
                </p>
              )}

              <Button asChild className="w-full" size="lg">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>

              <Button asChild variant="outline" className="w-full mt-2">
                <Link href="/collections">Continue Shopping</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

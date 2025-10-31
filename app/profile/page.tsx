'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { orders, addresses, paymentMethods } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Package, MapPin, CreditCard, User, Heart } from 'lucide-react';
import Image from 'next/image';
import { useWishlist } from '@/lib/use-wishlist';
import { ProductCard } from '@/components/product-card';

export default function ProfilePage() {
  const { items: wishlistItems } = useWishlist();

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-headline font-bold mb-8">My Account</h1>
      
      <Tabs defaultValue="orders" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
          <TabsTrigger value="addresses">Addresses</TabsTrigger>
          <TabsTrigger value="payment">Payment</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        {/* Orders Tab */}
        <TabsContent value="orders" className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Package className="h-5 w-5" />
            <h2 className="text-2xl font-headline font-bold">Order History</h2>
          </div>
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <CardTitle>Order #{order.id}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Placed on {order.date.toLocaleDateString()}
                    </p>
                  </div>
                  <Badge variant={
                    order.status === 'Delivered' ? 'default' :
                    order.status === 'Shipped' ? 'secondary' :
                    order.status === 'Processing' ? 'outline' : 'destructive'
                  }>
                    {order.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden border">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Qty: {item.quantity} × ₹{item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total</span>
                  <span className="text-lg font-bold text-primary">₹{order.total.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Wishlist Tab */}
        <TabsContent value="wishlist">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="h-5 w-5" />
            <h2 className="text-2xl font-headline font-bold">My Wishlist</h2>
          </div>
          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
              {wishlistItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-semibold mb-2">Your wishlist is empty</p>
                <p className="text-muted-foreground">Start adding products you love!</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Addresses Tab */}
        <TabsContent value="addresses" className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <h2 className="text-2xl font-headline font-bold">Saved Addresses</h2>
            </div>
            <Button>Add New Address</Button>
          </div>
          {addresses.map((address) => (
            <Card key={address.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    {address.isDefault && (
                      <Badge variant="secondary" className="mb-2">Default</Badge>
                    )}
                    <p className="font-semibold">{address.name}</p>
                    <p className="text-muted-foreground mt-1">
                      {address.addressLine1}
                      {address.addressLine2 && <>, {address.addressLine2}</>}
                    </p>
                    <p className="text-muted-foreground">
                      {address.city}, {address.state} {address.zip}
                    </p>
                    <p className="text-muted-foreground">{address.country}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm">Delete</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Payment Methods Tab */}
        <TabsContent value="payment" className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              <h2 className="text-2xl font-headline font-bold">Payment Methods</h2>
            </div>
            <Button>Add New Card</Button>
          </div>
          {paymentMethods.map((method) => (
            <Card key={method.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <CreditCard className="h-8 w-8 text-muted-foreground" />
                    <div>
                      {method.isDefault && (
                        <Badge variant="secondary" className="mb-1">Default</Badge>
                      )}
                      <p className="font-semibold">{method.brand} •••• {method.last4}</p>
                      <p className="text-sm text-muted-foreground">
                        Expires {method.expiryMonth}/{method.expiryYear}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button variant="ghost" size="sm">Delete</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <div className="flex items-center gap-2 mb-6">
            <User className="h-5 w-5" />
            <h2 className="text-2xl font-headline font-bold">Profile Settings</h2>
          </div>
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Alex" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="alex@example.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-4">Change Password</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input id="confirmPassword" type="password" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button>Save Changes</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

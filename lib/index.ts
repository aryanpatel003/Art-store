

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  text: string;
}

export interface QA {
  id: string;
  question: string;
  answer: string;
  author: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  sizes: string[];
  colors: string[];
  category: string;
  reviews?: Review[];
  qa?: QA[];
  stock: number;
  artistEndorsement?: {
    quote: string;
    artistName: string;
  };
}

export interface OrderItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  date: Date;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: number;
  items: OrderItem[];
  customerName: string;
  customerEmail: string;
  shippingAddress: {
    name: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
}

export interface Address {
  id: string;
  isDefault: boolean;
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface PaymentMethod {
  id: string;
  isDefault: boolean;
  type: 'Credit Card' | 'PayPal';
  brand: string;
  last4: string;
  expiryMonth: number;
  expiryYear: number;
}

export interface Customer {
  id: string;
  name:string;
  email: string;
  avatar: string;
  totalSpent: number;
}

export interface Promocode {
  id: string;
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  expiryDate: Date;
  status: 'active' | 'inactive';
}

export interface HeroBanner {
  id: string;
  image: string;
  alt: string;
  hint: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

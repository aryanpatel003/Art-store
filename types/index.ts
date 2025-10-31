export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  sizes: string[];
  colors: string[];
  category: string;
  stock: number;
  artistEndorsement?: {
    quote: string;
    artistName: string;
  };
  reviews?: Review[];
  qa?: QA[];
}

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

export interface OrderItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

export interface Address {
  id?: string;
  isDefault?: boolean;
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  date: Date;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: number;
  shippingAddress: Address;
  items: OrderItem[];
}

export interface PaymentMethod {
  id: string;
  isDefault: boolean;
  type: 'Credit Card' | 'Debit Card';
  brand: 'Visa' | 'Mastercard' | 'American Express' | 'Discover';
  last4: string;
  expiryMonth: number;
  expiryYear: number;
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

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  totalOrders: number;
  totalSpent: number;
  joinedDate: Date;
}

export interface Promocode {
  id: string;
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  expiryDate?: Date;
  usageLimit?: number;
  usageCount?: number;
  status: 'active' | 'inactive' | 'expired';
}


import type { Customer, Promocode } from "@/types"

export const overviewData = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 50000) + 10000,
  },
]

export const recentSales = [
  {
    id: "1",
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    amount: 1999.00,
  },
  {
    id: "2",
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    amount: 39.00,
  },
  {
    id: "3",
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    amount: 299.00,
  },
  {
    id: "4",
    name: "William Kim",
    email: "will@email.com",
    amount: 99.00,
  },
  {
    id: "5",
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    amount: 39.00,
  },
]

export const customers: Customer[] = [
    {
        id: '1',
        name: 'Olivia Martin',
        email: 'olivia.martin@email.com',
        avatar: 'https://placehold.co/40x40.png',
        totalSpent: 2450.50
    },
    {
        id: '2',
        name: 'Jackson Lee',
        email: 'jackson.lee@email.com',
        avatar: 'https://placehold.co/40x40.png',
        totalSpent: 1890.00
    },
    {
        id: '3',
        name: 'Ava Garcia',
        email: 'ava.garcia@email.com',
        avatar: 'https://placehold.co/40x40.png',
        totalSpent: 1575.75
    },
    {
        id: '4',
        name: 'Noah Rodriguez',
        email: 'noah.rodriguez@email.com',
        avatar: 'https://placehold.co/40x40.png',
        totalSpent: 3210.20
    },
    {
        id: '5',
        name: 'Liam Martinez',
        email: 'liam.martinez@email.com',
        avatar: 'https://placehold.co/40x40.png',
        totalSpent: 980.00
    },
];

export const promocodes: Promocode[] = [
    {
        id: '1',
        code: 'SUMMER24',
        discountType: 'percentage',
        discountValue: 15,
        expiryDate: new Date('2024-08-31'),
        status: 'active',
    },
    {
        id: '2',
        code: 'WELCOME10',
        discountType: 'percentage',
        discountValue: 10,
        expiryDate: new Date('2024-12-31'),
        status: 'active',
    },
    {
        id: '3',
        code: 'FLAT500',
        discountType: 'fixed',
        discountValue: 500,
        expiryDate: new Date('2024-07-31'),
        status: 'inactive',
    },
];

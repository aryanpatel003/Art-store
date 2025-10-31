
import type { Product, Order, Address, PaymentMethod, Review, HeroBanner } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Professional Watercolor Set',
    description: 'A vibrant set of 36 high-pigment watercolors in a portable tin case, perfect for artists on the go.',
    price: 3600.00,
    images: [
      'https://placehold.co/600x800.png',
      'https://placehold.co/600x800.png',
      'https://placehold.co/600x800.png',
    ],
    sizes: ['36-color Set'],
    colors: ['Assorted'],
    category: 'Paints',
    stock: 22,
    artistEndorsement: {
      quote: "Relied upon by professional watercolorists for its brilliant pigmentation and reliable performance.",
      artistName: "Featured in 'Watercolor Weekly' Magazine"
    },
    reviews: [
      {
        id: 'r1',
        author: 'Emily R.',
        rating: 5,
        date: '2024-07-10',
        title: 'Absolutely Stunning Colors!',
        text: "The vibrancy of these watercolors is unmatched. They blend beautifully and the tin case is perfect for travel. Highly recommend!"
      },
      {
        id: 'r2',
        author: 'David L.',
        rating: 4,
        date: '2024-06-22',
        title: 'Great set for the price',
        text: "A very solid set of watercolors for an intermediate artist. The pigments are rich, though a couple of the colors were a bit chalky. Overall, a great value."
      },
      {
        id: 'r3',
        author: 'ArtStudent92',
        rating: 5,
        date: '2024-06-15',
        title: 'Perfect for my art class',
        text: "I bought this for my watercolor class and it's been fantastic. It has all the colors I need and they are of great quality. My professor was impressed too!"
      }
    ],
    qa: [
      {
        id: 'q1',
        question: 'Are these watercolors lightfast?',
        answer: 'Yes, this set has excellent lightfastness ratings, ensuring your artwork remains vibrant for years to come. Most colors are rated ASTM Lightfastness I (Excellent).',
        author: 'Alex D. (Verified Buyer)',
        date: '2024-07-12'
      },
      {
        id: 'q2',
        question: 'Is the mixing palette in the lid removable?',
        answer: 'The main mixing palette built into the lid is not removable, but the set includes a smaller, removable plastic palette that sits on top of the pans for additional mixing space.',
        author: 'Samantha K. (Verified Buyer)',
        date: '2024-07-15'
      }
    ]
  },
  {
    id: '2',
    name: 'Heavyweight Sketchbook Trio',
    description: 'Three A5 sketchbooks with 180gsm acid-free paper, ideal for drawing, sketching, and light washes.',
    price: 2240.00,
    images: [
      'https://placehold.co/600x800.png',
      'https://placehold.co/600x800.png',
    ],
    sizes: ['A5 Trio', 'A4 Trio'],
    colors: ['Kraft Brown', 'Onyx Black'],
    category: 'Paper & Canvas',
    stock: 45,
    reviews: [
        {
            id: 'r4',
            author: 'SketchMaster',
            rating: 5,
            date: '2024-07-01',
            title: 'Paper quality is amazing!',
            text: 'The paper holds up so well to ink and light watercolor washes. No bleeding at all. The cover is sturdy and feels great. Will buy again.'
        }
    ]
  },
  {
    id: '3',
    name: 'Artist Acrylic Paint Set',
    description: 'A versatile set of 24 vibrant, heavy-body acrylic paints. Perfect for canvas, wood, and fabric.',
    price: 3080.00,
    images: [
      'https://placehold.co/600x800.png',
      'https://placehold.co/600x800.png',
      'https://placehold.co/600x800.png',
    ],
    sizes: ['24-tube Set'],
    colors: ['Vibrant Palette'],
    category: 'Paints',
    stock: 15,
    reviews: [
        {
            id: 'r5',
            author: 'CanvasQueen',
            rating: 5,
            date: '2024-07-05',
            title: 'Incredibly vibrant and creamy',
            text: 'These acrylics are a dream to work with. The colors are so rich and they have a lovely buttery consistency. Perfect for professional work.'
        },
        {
            id: 'r6',
            author: 'Hobby Painter',
            rating: 4,
            date: '2024-07-02',
            title: 'Good, but a bit pricey',
            text: 'The quality is definitely there, but it\'s a bit expensive for a hobbyist. The tubes are a good size, though.'
        }
    ]
  },
  {
    id: '4',
    name: 'Oil Pastel Crayons - 48 Pack',
    description: 'Rich, creamy oil pastels that blend smoothly for beautiful effects. Non-toxic and suitable for all ages.',
    price: 1760.00,
    images: [
      'https://placehold.co/600x800.png',
    ],
    sizes: ['48-pack'],
    colors: ['Assorted'],
    category: 'Drawing',
    stock: 80,
  },
  {
    id: '5',
    name: 'Stretched Canvas Pack',
    description: 'Pack of four 11x14 inch pre-primed, stretched cotton canvases, ready for your next masterpiece.',
    price: 2800.00,
    images: [
      'https://placehold.co/600x800.png',
      'https://placehold.co/600x800.png',
    ],
    sizes: ['11x14 inch', '16x20 inch'],
    colors: ['White'],
    category: 'Paper & Canvas',
    stock: 30,
  },
  {
    id: '6',
    name: 'Professional Brush Set',
    description: 'A 15-piece set of synthetic brushes for acrylic, oil, and watercolor, including a variety of shapes and sizes.',
    price: 2000.00,
    images: [
      'https://placehold.co/600x800.png',
    ],
    sizes: ['15-piece Set'],
    colors: ['Birchwood'],
    category: 'Brushes',
    stock: 50,
  },
  {
    id: '7',
    name: 'Artist Charcoal Pencils',
    description: 'A complete set of sketching charcoal, including hard, medium, and soft pencils for detailed drawing.',
    price: 1200.00,
    images: [
      'https://placehold.co/600x800.png',
      'https://placehold.co/600x800.png',
    ],
    sizes: ['12-piece Set'],
    colors: ['Black'],
    category: 'Drawing',
    stock: 120,
  },
  {
    id: '8',
    name: 'Portable Wooden Studio Easel',
    description: 'A sturdy and adjustable beechwood easel with a storage drawer, perfect for studio or field work.',
    price: 10400.00,
    images: [
      'https://placehold.co/600x800.png',
      'https://placehold.co/600x800.png',
      'https://placehold.co/600x800.png',
    ],
    sizes: ['One Size'],
    colors: ['Natural Wood'],
    category: 'Accessories',
    stock: 8,
  },
];


export const orders: Order[] = [
  {
    id: '78921',
    customerName: "Liam Johnson",
    customerEmail: "liam@example.com",
    date: new Date('2024-06-15'),
    status: 'Delivered',
    total: 6680.00,
    shippingAddress: {
        name: 'Liam Johnson',
        addressLine1: '123 Art Avenue',
        city: 'Creativity City',
        state: 'CA',
        zip: '90210',
        country: 'USA'
    },
    items: [
      {
        id: '1',
        name: 'Professional Watercolor Set',
        image: 'https://placehold.co/100x100.png',
        quantity: 1,
        price: 3600.00
      },
      {
        id: '3',
        name: 'Artist Acrylic Paint Set',
        image: 'https://placehold.co/100x100.png',
        quantity: 1,
        price: 3080.00
      }
    ]
  },
  {
    id: '78920',
    customerName: "Olivia Smith",
    customerEmail: "olivia@example.com",
    date: new Date('2024-07-01'),
    status: 'Shipped',
    total: 2000.00,
    shippingAddress: {
        name: 'Olivia Smith',
        addressLine1: '456 Brushstroke Blvd',
        addressLine2: 'Apt 101',
        city: 'Palette Town',
        state: 'NY',
        zip: '10001',
        country: 'USA'
    },
    items: [
       {
        id: '6',
        name: 'Professional Brush Set',
        image: 'https://placehold.co/100x100.png',
        quantity: 1,
        price: 2000.00
      }
    ]
  },
  {
    id: '78919',
    customerName: "Noah Williams",
    customerEmail: "noah@example.com",
    date: new Date(),
    status: 'Processing',
    total: 5040.00,
    shippingAddress: {
        name: 'Noah Williams',
        addressLine1: '789 Canvas Ct',
        city: 'Artisanville',
        state: 'TX',
        zip: '78701',
        country: 'USA'
    },
    items: [
      {
        id: '2',
        name: 'Heavyweight Sketchbook Trio',
        image: 'https://placehold.co/100x100.png',
        quantity: 1,
        price: 2240.00,
      },
      {
        id: '5',
        name: 'Stretched Canvas Pack',
        image: 'https://placehold.co/100x100.png',
        quantity: 1,
        price: 2800.00,
      },
    ]
  },
  {
    id: '78918',
    customerName: "Emma Brown",
    customerEmail: "emma@example.com",
    date: new Date('2024-05-20'),
    status: 'Cancelled',
    total: 1200.00,
    shippingAddress: {
        name: 'Emma Brown',
        addressLine1: '101 Easel Ln',
        city: 'Port St. Lucie',
        state: 'FL',
        zip: '34952',
        country: 'USA'
    },
    items: [
      {
        id: '7',
        name: 'Artist Charcoal Pencils',
        image: 'https://placehold.co/100x100.png',
        quantity: 1,
        price: 1200.00,
      },
    ]
  }
];

export const addresses: Address[] = [
  {
    id: '1',
    isDefault: true,
    name: 'Alex Doe',
    addressLine1: '123 Art Avenue',
    city: 'Creativity City',
    state: 'CA',
    zip: '90210',
    country: 'USA'
  },
  {
    id: '2',
    isDefault: false,
    name: 'Alex Doe',
    addressLine1: '456 Brushstroke Blvd',
    addressLine2: 'Apt 101',
    city: 'Palette Town',
    state: 'NY',
    zip: '10001',
    country: 'USA'
  }
];

export const paymentMethods: PaymentMethod[] = [
  {
    id: '1',
    isDefault: true,
    type: 'Credit Card',
    brand: 'Visa',
    last4: '4242',
    expiryMonth: 12,
    expiryYear: 2026
  },
  {
    id: '2',
    isDefault: false,
    type: 'Credit Card',
    brand: 'Mastercard',
    last4: '5555',
    expiryMonth: 8,
    expiryYear: 2025
  }
];

export const bannerItems: HeroBanner[] = [
  {
    id: 'banner-1',
    image: "https://placehold.co/1200x800.png",
    alt: "Artist painting on a canvas",
    hint: "artist painting canvas",
    title: "Unleash Your Creativity",
    description: "Find everything you need to bring your vision to life.",
    buttonText: "Shop All",
    buttonLink: "/collections"
  },
  {
    id: 'banner-2',
    image: "https://placehold.co/1200x800.png",
    alt: "Paint tubes on a palette",
    hint: "paint tubes palette",
    title: "Pro-Grade Paints",
    description: "Rich pigments and smooth textures for every masterpiece.",
    buttonText: "Explore Paints",
    buttonLink: "/collections?sort=newest"
  },
  {
    id: 'banner-3',
    image: "https://placehold.co/1200x800.png",
    alt: "Various art supplies",
    hint: "art supplies",
    title: "Everything for the Artist",
    description: "From sketchbooks to easels, we've got you covered.",
    buttonText: "Shop Now",
    buttonLink: "/collections"
  }
];

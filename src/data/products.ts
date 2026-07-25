export type ProductId = 'customer' | 'delivery' | 'cms' | 'pos' | 'offers' | 'whitelabel'

export interface Product {
  id: ProductId
  name: string
  shortDescription: string
  description: string
  priceLabel: string
  price?: number
  period?: 'year'
  highlights: string[]
  modules: string[]
  icon: 'smartphone' | 'truck' | 'layout' | 'pos' | 'gift' | 'palette'
  popular?: boolean
  audience: string
}

export const products: Product[] = [
  {
    id: 'customer',
    name: 'Customer App',
    audience: 'End customers',
    shortDescription: 'White-label booking app for laundry customers.',
    description:
      'A branded Flutter customer experience with onboarding, service discovery, booking, offers, notifications, and profile management — so your laundry brand owns the customer relationship.',
    priceLabel: '₹20,000 / year',
    price: 20000,
    period: 'year',
    popular: true,
    highlights: [
      'Service browse & search',
      'Booking & slot selection',
      'Offers & bookmarks',
      'Order notifications',
      'Profile & address book',
      'Android + iOS ready',
    ],
    modules: ['Authentication', 'Home & Explore', 'Booking', 'Offers', 'Notifications', 'Profile'],
    icon: 'smartphone',
  },
  {
    id: 'delivery',
    name: 'Delivery / Partner App',
    audience: 'Riders & field staff',
    shortDescription: 'Collection, QR handoff, and delivery status in one app.',
    description:
      'Field app for pickup and delivery teams — accept collection jobs, manage customers on route, scan QR handoffs, update order status, and stay synced with HQ.',
    priceLabel: '₹10,000 / year',
    price: 10000,
    period: 'year',
    highlights: [
      'Collection job queues',
      'QR code handoff',
      'Order status updates',
      'Customer lookup on route',
      'Push notifications',
      'Partner profile tools',
    ],
    modules: ['Auth', 'Collections', 'Orders', 'QR Code', 'Customers', 'Notifications'],
    icon: 'truck',
  },
  {
    id: 'cms',
    name: 'CMS Dashboard',
    audience: 'Owners & managers',
    shortDescription: 'Central ops console for catalog, staff, and reporting.',
    description:
      'Web/desktop control center for laundry businesses — dashboard insights, employee roles, customer records, inventory, order pipelines, and operational reports.',
    priceLabel: '₹5,000 / year',
    price: 5000,
    period: 'year',
    highlights: [
      'Live operations dashboard',
      'Employee & role control',
      'Customer database',
      'Inventory management',
      'Order status pipelines',
      'Business reports',
    ],
    modules: ['Dashboard', 'Employees', 'Customers', 'Inventory', 'Orders', 'Reports'],
    icon: 'layout',
  },
  {
    id: 'pos',
    name: 'POS & Billing',
    audience: 'Counter staff',
    shortDescription: 'In-store billing tied to your laundry catalog.',
    description:
      'Point-of-sale flows inside the CMS suite for walk-in counter billing, payment receipts, and store collections — connected to the same order system as your apps.',
    priceLabel: 'Included with CMS',
    highlights: ['Counter POS billing', 'Payment receipts', 'Store collections', 'Catalog-linked pricing'],
    modules: ['POS', 'Payment Receipts', 'Collections', 'Catalog sync'],
    icon: 'pos',
  },
  {
    id: 'offers',
    name: 'Offers & Retention',
    audience: 'Growth teams',
    shortDescription: 'Promotions that show up where customers already book.',
    description:
      'Run campaigns from the customer experience — featured offers, saved favorites, and notification nudges that bring customers back without extra marketing tools.',
    priceLabel: 'Included with Customer App',
    highlights: ['Offer surfaces in-app', 'Bookmark / favorites', 'Push campaign hooks', 'Repeat-order friendly'],
    modules: ['Offers', 'Bookmarks', 'Notifications', 'Home promotions'],
    icon: 'gift',
  },
  {
    id: 'whitelabel',
    name: 'White-label Branding',
    audience: 'Brand owners',
    shortDescription: 'Your identity across every customer and staff touchpoint.',
    description:
      'Theme configuration, logo, and brand styling applied across the suite so customers and staff experience your laundry brand — not a generic marketplace.',
    priceLabel: 'Onboarding included',
    highlights: ['Brand theme config', 'Logo & color system', 'Store listing guidance', 'Launch checklist'],
    modules: ['Theme config', 'Assets', 'Store listing', 'Go-live support'],
    icon: 'palette',
  },
]

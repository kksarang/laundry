export interface AppPlan {
  id: 'customer' | 'delivery' | 'cms'
  name: string
  price: number
  period: 'year'
  tagline: string
  description: string
  popular?: boolean
  features: string[]
  cta: string
}

export const appPlans: AppPlan[] = [
  {
    id: 'customer',
    name: 'Customer App',
    price: 20000,
    period: 'year',
    tagline: 'Demand layer',
    description:
      'White-label mobile app for bookings, offers, tracking updates, and customer profiles under your brand.',
    popular: true,
    features: [
      'Browse services & providers',
      'Booking + slot flows',
      'Offers & favorites',
      'Push notifications',
      'Profile & addresses',
      '1 year updates & support',
    ],
    cta: 'License Customer App',
  },
  {
    id: 'delivery',
    name: 'Delivery App',
    price: 10000,
    period: 'year',
    tagline: 'Fulfillment layer',
    description:
      'Partner app for collection jobs, QR handoffs, route customers, and live order status updates.',
    features: [
      'Collection job management',
      'QR scan handoff',
      'Order status sync',
      'On-route customer tools',
      'Rider notifications',
      '1 year updates & support',
    ],
    cta: 'License Delivery App',
  },
  {
    id: 'cms',
    name: 'CMS + POS',
    price: 5000,
    period: 'year',
    tagline: 'Control layer',
    description:
      'Operations HQ with dashboard, employees, inventory, orders, POS billing, receipts, and reports.',
    features: [
      'Dashboard & reports',
      'POS + payment receipts',
      'Employees & roles',
      'Inventory & customers',
      'Order pipelines',
      '1 year updates & support',
    ],
    cta: 'License CMS + POS',
  },
]

export const appBundle = {
  name: 'Full Platform Bundle',
  price: 30000,
  originalPrice: 35000,
  note: 'Customer + Delivery + CMS/POS — one year, one connected stack',
}

export const planComparison = [
  { feature: 'White-label branding', customer: true, delivery: true, cms: true },
  { feature: 'Customer booking & offers', customer: true, delivery: false, cms: true },
  { feature: 'Rider collection & QR', customer: false, delivery: true, cms: true },
  { feature: 'POS & payment receipts', customer: false, delivery: false, cms: true },
  { feature: 'Inventory & employees', customer: false, delivery: false, cms: true },
  { feature: 'Push notifications', customer: true, delivery: true, cms: true },
  { feature: 'Reports & dashboard', customer: false, delivery: false, cms: true },
  { feature: '1 year updates & support', customer: true, delivery: true, cms: true },
] as const

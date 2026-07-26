export type PlanId = 'cms' | 'delivery' | 'customer' | 'bundle'

export interface AppPlan {
  id: Exclude<PlanId, 'bundle'>
  name: string
  price: number
  period: 'year'
  tagline: string
  audience: string
  description: string
  longDescription: string
  idealFor: string[]
  popular?: boolean
  features: string[]
  detailFeatures: { title: string; copy: string }[]
  cta: string
  accent: string
}

export const appPlans: AppPlan[] = [
  {
    id: 'cms',
    name: 'CMS + POS',
    price: 5000,
    period: 'year',
    tagline: 'Control layer',
    audience: 'Counters & HQ',
    description:
      'Operations HQ with dashboard, employees, inventory, orders, POS billing, receipts, and reports.',
    longDescription:
      'CMS + POS is the control layer of Cleanso — where catalog, pricing, staff roles, inventory, counter billing, and reports live. Start here if you need structure at the plant or counter before you launch a customer app.',
    idealFor: [
      'Single-store operators replacing paper POS',
      'Multi-counter brands needing one catalog',
      'Teams that want reports before rider apps',
    ],
    features: [
      'Dashboard & reports',
      'POS + payment receipts',
      'Employees & roles',
      'Inventory & customers',
      'Order pipelines',
      '1 year updates & support',
    ],
    detailFeatures: [
      {
        title: 'Counter POS that matches laundry work',
        copy: 'Bill services, print receipts, and keep inventory aligned with what left the plant — not a generic retail checkout.',
      },
      {
        title: 'Staff roles without shared passwords',
        copy: 'Assign employees and permissions so every counter runs the same process under HQ visibility.',
      },
      {
        title: 'Orders & reports in one place',
        copy: 'See pipelines, store performance, and daily totals without exporting five spreadsheets.',
      },
    ],
    cta: 'Get CMS + POS',
    accent: 'from-[#7ed8d0] to-[#0f6e6b]',
  },
  {
    id: 'delivery',
    name: 'Delivery App',
    price: 10000,
    period: 'year',
    tagline: 'Fulfillment layer',
    audience: 'Riders & partners',
    description:
      'Partner app for collection jobs, QR handoffs, route customers, and live order status updates.',
    longDescription:
      'Delivery App is how pickup and drop stop living in phone calls. Riders get jobs, confirm handoffs with QR, and update status so customers and HQ see the same order truth in real time.',
    idealFor: [
      'Brands with active rider fleets',
      'Multi-store networks with doorstep pickup',
      'Operators ready after CMS or Customer App',
    ],
    features: [
      'Collection job management',
      'QR scan handoff',
      'Order status sync',
      'On-route customer tools',
      'Rider notifications',
      '1 year updates & support',
    ],
    detailFeatures: [
      {
        title: 'Jobs assigned, not messaged',
        copy: 'Collection lists leave WhatsApp threads and become structured jobs with clear status.',
      },
      {
        title: 'QR handoff you can trust',
        copy: 'Confirm garment exchange between rider and plant so “who has the bag?” stops being a debate.',
      },
      {
        title: 'Live status for HQ and customers',
        copy: 'One order ID from doorstep to plant — fewer “where is my order?” calls.',
      },
    ],
    cta: 'Get Delivery App',
    accent: 'from-[#3db8b2] to-[#0a524f]',
  },
  {
    id: 'customer',
    name: 'Customer App',
    price: 20000,
    period: 'year',
    tagline: 'Demand layer',
    audience: 'Your end customers',
    description:
      'White-label mobile app for bookings, offers, tracking updates, and customer profiles under your brand.',
    longDescription:
      'Customer App puts your laundry brand in the customer’s pocket — bookings, offers, tracking, and profiles under your name. This is the demand layer that replaces call-and-chat chaos with a premium branded experience.',
    idealFor: [
      'Brands ready to own the customer channel',
      'Operators leaving WhatsApp-only booking',
      'Networks expanding city by city',
    ],
    popular: true,
    features: [
      'Browse services & providers',
      'Booking + slot flows',
      'Offers & favorites',
      'Push notifications',
      'Profile & addresses',
      '1 year updates & support',
    ],
    detailFeatures: [
      {
        title: 'White-label under your brand',
        copy: 'Customers see your logo, colors, and name — not a marketplace that owns the relationship.',
      },
      {
        title: 'Structured booking & slots',
        copy: 'Service, address, and pickup windows become real orders in CMS — not lost chat threads.',
      },
      {
        title: 'Offers that drive repeat',
        copy: 'Push alerts, favorites, and reorder flows keep customers coming back to you.',
      },
    ],
    cta: 'Get Customer App',
    accent: 'from-[#c8f0eb] via-[#3db8b2] to-[#0f6e6b]',
  },
]

export const appBundle = {
  id: 'bundle' as const,
  name: 'Full Platform Bundle',
  price: 30000,
  originalPrice: 35000,
  tagline: 'Complete laundry OS',
  audience: 'Growing & multi-city brands',
  note: 'Customer + Delivery + CMS/POS — one year, one connected stack',
  description:
    'Everything connected: branded customer demand, rider fulfillment, and HQ CMS + POS under one yearly license.',
  longDescription:
    'The Full Platform Bundle is the complete Cleanso operating system — Customer App, Delivery App, and CMS + POS — licensed together for less than buying all three separately. Best when you want one stack from booking to billing across stores and cities.',
  idealFor: [
    'Multi-store and franchise brands',
    'Operators launching a full digital stack',
    'Teams that want predictable flat yearly cost',
  ],
  features: [
    'All Customer App capabilities',
    'All Delivery App capabilities',
    'All CMS + POS capabilities',
    'Connected order ID end to end',
    'White-label across the stack',
    '1 year updates & support',
  ],
  detailFeatures: [
    {
      title: 'One stack, one truth',
      copy: 'Bookings, riders, counters, and HQ share the same order — no reconciling three systems.',
    },
    {
      title: 'Better than buying separately',
      copy: `₹35,000 if licensed apart — ₹30,000 as a bundle for the full connected year.`,
    },
    {
      title: 'Built to scale with you',
      copy: 'Add stores and cities without stacking per-order fees as volume grows.',
    },
  ],
  cta: 'Get full platform',
  accent: 'from-[#0f6e6b] to-[#121816]',
}

export type ComparisonCell = boolean | string

export const planComparison: {
  feature: string
  cms: ComparisonCell
  delivery: ComparisonCell
  customer: ComparisonCell
  bundle: ComparisonCell
}[] = [
  { feature: 'White-label branding', cms: true, delivery: true, customer: true, bundle: true },
  { feature: 'Customer booking & offers', cms: false, delivery: false, customer: true, bundle: true },
  { feature: 'WhatsApp → structured order', cms: 'With stack', delivery: false, customer: true, bundle: true },
  { feature: 'Rider collection & QR', cms: false, delivery: true, customer: false, bundle: true },
  { feature: 'Live order status sync', cms: true, delivery: true, customer: true, bundle: true },
  { feature: 'POS & payment receipts', cms: true, delivery: false, customer: false, bundle: true },
  { feature: 'Inventory & employees', cms: true, delivery: false, customer: false, bundle: true },
  { feature: 'Push notifications', cms: false, delivery: true, customer: true, bundle: true },
  { feature: 'HQ reports & dashboard', cms: true, delivery: false, customer: false, bundle: true },
  { feature: 'Multi-store ready', cms: true, delivery: true, customer: true, bundle: true },
  { feature: '1 year updates & support', cms: true, delivery: true, customer: true, bundle: true },
]

export function getPlanById(id: string) {
  if (id === 'bundle') return appBundle
  return appPlans.find((p) => p.id === id)
}

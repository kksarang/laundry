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
  /** Short list for compact cards elsewhere */
  features: string[]
  /** Full list shown on pricing page cards */
  fullFeatures: string[]
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
    fullFeatures: [
      'HQ operations dashboard',
      'Order pipeline & status board',
      'Service catalog & pricing rules',
      'Counter POS billing',
      'Payment receipts & daily totals',
      'Inventory tracking',
      'Customer records in HQ',
      'Employee accounts & roles',
      'Store / counter management',
      'Basic ops reports',
      'White-label ready control panel',
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
    fullFeatures: [
      'Rider / partner mobile app',
      'Collection job list',
      'Pickup & drop assignments',
      'QR scan handoff',
      'Live order status updates',
      'On-route customer tools',
      'Rider push notifications',
      'Job history for riders',
      'Sync with CMS order ID',
      'Doorstep fulfillment workflows',
      'White-label partner branding',
      '1 year updates & support',
    ],
    detailFeatures: [
      {
        title: 'Jobs assigned, not messaged',
        copy: 'Collection lists leave chat threads and become structured jobs with clear status.',
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
      'Operators leaving chat-only booking',
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
    fullFeatures: [
      'White-label customer mobile app',
      'Your brand name, logo & colors',
      'Service browse & search',
      'Booking & pickup slot selection',
      'Address book & profiles',
      'Order tracking for customers',
      'Offers & favorites',
      'Reorder / repeat booking flows',
      'Push notifications',
      'Android + iOS ready packaging',
      'Connects to CMS order pipeline',
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
  fullFeatures: [
    'Everything in Customer App',
    'Everything in Delivery App',
    'Everything in CMS + POS',
    'One connected order ID end to end',
    'White-label across the full stack',
    'Customer ↔ rider ↔ HQ sync',
    'Best value vs buying separately (₹35k → ₹30k)',
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

export interface ComparisonRow {
  category: string
  feature: string
  cms: ComparisonCell
  delivery: ComparisonCell
  customer: ComparisonCell
  bundle: ComparisonCell
}

/** Maximum clear comparison — grouped so buyers can scan fast */
export const planComparison: ComparisonRow[] = [
  // Brand
  { category: 'Brand', feature: 'White-label under your brand', cms: true, delivery: true, customer: true, bundle: true },
  { category: 'Brand', feature: 'Your logo / colors on screens', cms: true, delivery: true, customer: true, bundle: true },

  // Customer demand
  { category: 'Customer demand', feature: 'Customer mobile app', cms: false, delivery: false, customer: true, bundle: true },
  { category: 'Customer demand', feature: 'Service browse & search', cms: false, delivery: false, customer: true, bundle: true },
  { category: 'Customer demand', feature: 'Booking & pickup slots', cms: false, delivery: false, customer: true, bundle: true },
  { category: 'Customer demand', feature: 'Customer order tracking', cms: false, delivery: false, customer: true, bundle: true },
  { category: 'Customer demand', feature: 'Offers & favorites', cms: false, delivery: false, customer: true, bundle: true },
  { category: 'Customer demand', feature: 'Reorder / repeat booking', cms: false, delivery: false, customer: true, bundle: true },
  { category: 'Customer demand', feature: 'Customer profiles & addresses', cms: false, delivery: false, customer: true, bundle: true },
  { category: 'Customer demand', feature: 'Customer push notifications', cms: false, delivery: false, customer: true, bundle: true },

  // Delivery
  { category: 'Delivery / riders', feature: 'Rider / partner mobile app', cms: false, delivery: true, customer: false, bundle: true },
  { category: 'Delivery / riders', feature: 'Collection job management', cms: false, delivery: true, customer: false, bundle: true },
  { category: 'Delivery / riders', feature: 'Pickup & drop assignments', cms: false, delivery: true, customer: false, bundle: true },
  { category: 'Delivery / riders', feature: 'QR scan handoff', cms: false, delivery: true, customer: false, bundle: true },
  { category: 'Delivery / riders', feature: 'On-route customer tools', cms: false, delivery: true, customer: false, bundle: true },
  { category: 'Delivery / riders', feature: 'Rider notifications', cms: false, delivery: true, customer: false, bundle: true },

  // CMS / POS
  { category: 'CMS + POS / HQ', feature: 'HQ operations dashboard', cms: true, delivery: false, customer: false, bundle: true },
  { category: 'CMS + POS / HQ', feature: 'Order pipeline board', cms: true, delivery: false, customer: false, bundle: true },
  { category: 'CMS + POS / HQ', feature: 'Service catalog & pricing', cms: true, delivery: false, customer: false, bundle: true },
  { category: 'CMS + POS / HQ', feature: 'Counter POS billing', cms: true, delivery: false, customer: false, bundle: true },
  { category: 'CMS + POS / HQ', feature: 'Payment receipts', cms: true, delivery: false, customer: false, bundle: true },
  { category: 'CMS + POS / HQ', feature: 'Inventory tracking', cms: true, delivery: false, customer: false, bundle: true },
  { category: 'CMS + POS / HQ', feature: 'Employee roles & permissions', cms: true, delivery: false, customer: false, bundle: true },
  { category: 'CMS + POS / HQ', feature: 'Customer records in HQ', cms: true, delivery: false, customer: false, bundle: true },
  { category: 'CMS + POS / HQ', feature: 'Ops reports', cms: true, delivery: false, customer: false, bundle: true },
  { category: 'CMS + POS / HQ', feature: 'Multi-store / multi-counter', cms: true, delivery: true, customer: true, bundle: true },

  // Connected platform
  { category: 'Connected platform', feature: 'Live order status sync', cms: true, delivery: true, customer: true, bundle: true },
  { category: 'Connected platform', feature: 'One order ID across apps', cms: 'Partial', delivery: 'Partial', customer: 'Partial', bundle: true },
  { category: 'Connected platform', feature: 'Customer ↔ rider ↔ HQ linked', cms: false, delivery: false, customer: false, bundle: true },

  // Support
  { category: 'License & support', feature: 'Yearly flat license (no per-order fee)', cms: true, delivery: true, customer: true, bundle: true },
  { category: 'License & support', feature: '1 year updates & support', cms: true, delivery: true, customer: true, bundle: true },
  { category: 'License & support', feature: 'Guided white-label onboarding', cms: true, delivery: true, customer: true, bundle: true },
]

export const chooseGuide = [
  {
    title: 'Just need counter + HQ control?',
    pick: 'CMS + POS',
    href: '/pricing/cms',
    price: '₹5,000/yr',
  },
  {
    title: 'Have riders doing pickup & drop?',
    pick: 'Add Delivery App',
    href: '/pricing/delivery',
    price: '₹10,000/yr',
  },
  {
    title: 'Want customers booking in your brand app?',
    pick: 'Customer App',
    href: '/pricing/customer',
    price: '₹20,000/yr',
  },
  {
    title: 'Want everything connected from day one?',
    pick: 'Full Platform Bundle',
    href: '/pricing/bundle',
    price: '₹30,000/yr',
  },
]

/** Simple table: pay → get → advantage */
export const priceValueRows = [
  {
    id: 'cms',
    plan: 'CMS + POS',
    pay: 5000,
    youGet: 'HQ dashboard, counter POS, inventory, staff roles, orders & reports',
    advantage: 'Lowest entry — digitize the counter without a customer app yet',
    href: '/pricing/cms',
    cta: 'Get CMS + POS',
  },
  {
    id: 'delivery',
    plan: 'Delivery App',
    pay: 10000,
    youGet: 'Rider app, collection jobs, QR handoff, live status on route',
    advantage: 'Stop running pickups on phone calls — riders work from jobs',
    href: '/pricing/delivery',
    cta: 'Get Delivery',
  },
  {
    id: 'customer',
    plan: 'Customer App',
    pay: 20000,
    youGet: 'White-label booking app, slots, offers, tracking, push alerts',
    advantage: 'Own the customer channel under your brand — not a marketplace',
    href: '/pricing/customer',
    cta: 'Get Customer',
    popular: true,
  },
  {
    id: 'bundle',
    plan: 'Full Platform Bundle',
    pay: 30000,
    originalPay: 35000,
    youGet: 'Customer + Delivery + CMS/POS — one connected order ID end to end',
    advantage: 'Save ₹5,000 vs buying separately · best for multi-store growth',
    href: '/pricing/bundle',
    cta: 'Get full platform',
    bestValue: true,
  },
] as const

export function getPlanById(id: string) {
  if (id === 'bundle') return appBundle
  return appPlans.find((p) => p.id === id)
}

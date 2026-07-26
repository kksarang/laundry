export const trustStats = [
  { value: 'India · UAE · GCC', label: 'Markets ready' },
  { value: '3', label: 'Connected apps' },
  { value: '1–3 wks', label: 'Typical go-live' },
  { value: 'Flat yearly', label: 'License model' },
] as const

export const clientLogos = [
  'FreshPress',
  'UrbanWash',
  'SoftFold',
  'CityCare',
  'LinenPro',
  'SparkClean',
  'MetroDry',
  'PureRinse',
] as const

export interface BusinessSegment {
  id: string
  title: string
  blurb: string
  href: string
  highlights: string[]
}

export const businessSegments: BusinessSegment[] = [
  {
    id: 'single-store',
    title: 'Single Store',
    blurb:
      'Replace call-and-WhatsApp chaos with a branded customer app and counter POS — without hiring a product team.',
    href: '/for/single-store',
    highlights: [
      'Branded Customer App under your name',
      'Counter POS with receipts & inventory',
      'Go live in 1–3 weeks with guided setup',
    ],
  },
  {
    id: 'multi-store',
    title: 'Multi-Store',
    blurb:
      'Unify catalog, pricing, staff roles, and order status across counters and cities from one CMS control layer.',
    href: '/for/multi-store',
    highlights: [
      'One catalog & pricing across locations',
      'Store-level staff roles and permissions',
      'HQ dashboard with cross-store reporting',
    ],
  },
  {
    id: 'franchise',
    title: 'Franchise',
    blurb:
      'White-label once, replicate the stack. Franchisees run on your brand while HQ keeps visibility and standards.',
    href: '/for/franchise',
    highlights: [
      'Consistent brand experience per franchisee',
      'Central policy with local counter ops',
      'Modular licensing as the network grows',
    ],
  },
]

export type OutcomeIcon = 'clock' | 'phone' | 'users' | 'route' | 'message' | 'shield'

export interface OutcomeFeature {
  title: string
  metric: string
  copy: string
  icon: OutcomeIcon
}

export const outcomeFeatures: OutcomeFeature[] = [
  {
    title: 'Less counter chaos',
    metric: 'Save 2–3 hrs/day',
    copy: 'Structured bookings replace manual call logs and WhatsApp threads at the front desk.',
    icon: 'clock',
  },
  {
    title: 'Fewer status calls',
    metric: 'Cut call volume ~40%',
    copy: 'Customers track orders in-app while counters and riders update one shared order ID.',
    icon: 'phone',
  },
  {
    title: 'Staff that scales',
    metric: 'Roles for every counter',
    copy: 'Assign employees, permissions, and workflows without sharing one admin password.',
    icon: 'users',
  },
  {
    title: 'Riders on rails',
    metric: 'Live route visibility',
    copy: 'Collection jobs, QR handoffs, and status sync — no more phone-tree fulfillment.',
    icon: 'route',
  },
  {
    title: 'WhatsApp that converts',
    metric: 'Structured order capture',
    copy: 'Turn chat intent into real bookings with catalog, slots, and payment — not lost messages.',
    icon: 'message',
  },
  {
    title: 'Ops you can trust',
    metric: '99.9% target uptime',
    copy: 'Cloud-hosted core services with role-based access and data practices aligned to GDPR readiness.',
    icon: 'shield',
  },
]

export interface WhatsAppFlowStep {
  step: string
  title: string
  copy: string
}

export const whatsappFlow: WhatsAppFlowStep[] = [
  {
    step: '01',
    title: 'Customer taps your link',
    copy: 'A branded WhatsApp entry point opens with your services, prices, and pickup slots — not a generic chat.',
  },
  {
    step: '02',
    title: 'Order is structured',
    copy: 'Service, address, slot, and notes become a real booking in CMS — no copy-paste from message threads.',
  },
  {
    step: '03',
    title: 'Plant & rider see it',
    copy: 'The same order ID flows to counter POS and Delivery App so status stays in sync end to end.',
  },
  {
    step: '04',
    title: 'Customer stays informed',
    copy: 'Progress updates and receipts close the loop — fewer “where is my order?” pings to your team.',
  },
]

export const flatVsPerOrder = {
  title: 'Why flat yearly beats per-order fees',
  points: [
    'Your margin stays predictable — no surprise fees when volume spikes during festivals or monsoon rush.',
    'You keep the customer relationship and pricing control; Cleanso is infrastructure under your brand.',
    'Yearly licensing includes updates and support for the licensed period — not a tax on every garment.',
    'Scale stores and cities without watching a per-transaction meter climb with every new counter.',
  ],
} as const

export interface LiveOpsMetric {
  label: string
  value: string
  hint: string
}

export const liveOpsMetrics: LiveOpsMetric[] = [
  { label: 'Orders today', value: '248', hint: 'Across all counters' },
  { label: 'In transit', value: '36', hint: 'Rider jobs active' },
  { label: 'Avg. turnaround', value: '18h', hint: 'Plant SLA this week' },
  { label: 'Stores online', value: '12', hint: 'CMS connected' },
]

export type EcosystemDevice = 'phone' | 'tablet'

export interface EcosystemApp {
  id: string
  title: string
  role: string
  copy: string
  bullets: string[]
  device: EcosystemDevice
}

export const ecosystemApps: EcosystemApp[] = [
  {
    id: 'customer',
    title: 'Customer App',
    role: 'Demand',
    copy: 'Bookings, offers, tracking, and profiles under your brand — not a marketplace that owns the relationship.',
    bullets: ['Service catalog & slot booking', 'Offers & reorder flows', 'Push notifications & profiles'],
    device: 'phone',
  },
  {
    id: 'delivery',
    title: 'Delivery / Partner App',
    role: 'Fulfillment',
    copy: 'Riders collect, scan, update status, and complete doorstep drops with the same order truth HQ sees.',
    bullets: ['Collection job management', 'QR scan handoff', 'Live status sync on route'],
    device: 'phone',
  },
  {
    id: 'cms',
    title: 'CMS + POS',
    role: 'Control',
    copy: 'HQ manages catalog, pricing, staff, inventory, POS billing, and reports from one control layer.',
    bullets: ['Dashboard & cross-store reports', 'POS billing & receipts', 'Employees, inventory & orders'],
    device: 'tablet',
  },
]

/** Central SEO + marketing content: customization, team, Google reviews, keywords */

export const primaryKeywords = [
  'laundry management software',
  'laundry app software',
  'dry cleaning software',
  'white label laundry app',
  'laundry POS system',
  'laundry delivery app',
  'laundry CRM software',
  'laundry booking app',
  'multi store laundry software',
  'franchise laundry software',
  'laundry software India',
  'laundry software UAE',
  'dry cleaning POS',
  'custom laundry software',
  'white label laundry management system',
]

export const keywordMeta =
  'laundry management software, laundry app, dry cleaning software, white label laundry app, laundry POS, laundry delivery app, laundry CRM, laundry booking software, multi store laundry software, franchise laundry software, custom laundry software, laundry software India, laundry software UAE, GCC laundry software, garment cleaning software, cloud laundry software'

export const seoPillars = [
  {
    title: 'Laundry management software built for real ops',
    copy: 'Cleanso is cloud laundry management software for dry cleaning, wash & fold, and premium laundry brands — covering customer booking, rider delivery, and CMS + POS in one white-label stack.',
  },
  {
    title: 'White-label laundry app under your brand',
    copy: 'Launch a branded laundry booking app and partner delivery app with your logo, colors, and store identity — not a marketplace. Own the customer relationship end to end.',
  },
  {
    title: 'Laundry POS, CRM, and HQ in one CMS',
    copy: 'Run counter billing, inventory, employees, orders, offers, and reports from a laundry-specific CMS + POS — purpose-built for plants, counters, and multi-store networks.',
  },
]

export const customizationFeatures = [
  {
    title: 'Brand identity & white-label UI',
    copy: 'Logo, color palette, splash screens, and customer-facing copy customized so your laundry app looks like your brand — on iOS, Android, and web.',
    keywords: 'white label laundry app, branded laundry software',
  },
  {
    title: 'Services, pricing & catalog setup',
    copy: 'Configure wash types, dry cleaning services, express slots, garment categories, and store-wise pricing inside the laundry management system.',
    keywords: 'laundry pricing software, dry cleaning catalog',
  },
  {
    title: 'Workflow & status customization',
    copy: 'Map pickup, plant, QC, and delivery statuses to how your laundry business actually runs — not a generic retail POS workflow.',
    keywords: 'custom laundry workflow software',
  },
  {
    title: 'Payments, notifications & integrations',
    copy: 'Connect payment gateways, push alerts, SMS/WhatsApp-style notifications, and store listing assets during onboarding for India, UAE, and GCC markets.',
    keywords: 'laundry app payment integration',
  },
  {
    title: 'Multi-store & franchise configuration',
    copy: 'Set roles, counters, rider zones, and HQ visibility for single-store, multi-store, or franchise laundry software rollouts.',
    keywords: 'multi store laundry software, franchise laundry software',
  },
  {
    title: 'Custom modules on request',
    copy: 'Need a special report, loyalty rule, or plant screen? Our product team scopes paid custom laundry software enhancements after discovery.',
    keywords: 'custom laundry software development',
  },
]

export const teamMembers = [
  {
    name: 'Product & platform',
    role: 'Laundry software engineers',
    focus: 'Customer app, delivery app, CMS + POS, releases, and reliability for laundry operators worldwide.',
  },
  {
    name: 'Customer success',
    role: 'Onboarding specialists',
    focus: 'White-label setup, catalog migration, staff training, and go-live support for laundry and dry-cleaning brands.',
  },
  {
    name: 'Solutions consulting',
    role: 'Ops consultants',
    focus: 'Map single-store, multi-store, and franchise workflows to the right Cleanso license mix and customizations.',
  },
  {
    name: 'Support desk',
    role: 'Product support',
    focus: 'Email and WhatsApp support, bug fixes, and yearly updates included with every active laundry software license.',
  },
]

export const teamHighlights = [
  { label: 'Focus', value: 'Laundry & dry cleaning only' },
  { label: 'Delivery', value: 'White-label go-live in 1–3 weeks' },
  { label: 'Support', value: 'Business-hours product support' },
  { label: 'Markets', value: 'India · UAE · GCC · global brands' },
]

export interface GoogleReview {
  id: string
  author: string
  role: string
  rating: number
  date: string
  quote: string
  source: 'Google'
}

export const googleReviewSummary = {
  rating: 4.9,
  count: 128,
  label: 'Google reviews',
  blurb:
    'Laundry owners and ops leads rate Cleanso for white-label apps, laundry POS clarity, and a team that understands dry-cleaning workflows — not generic retail software.',
}

export const googleReviews: GoogleReview[] = [
  {
    id: 'g1',
    author: 'Ananya Mehta',
    role: 'Owner · FreshPress Laundry',
    rating: 5,
    date: '2026-05',
    quote:
      'Best laundry management software we evaluated. White-label customer app + CMS replaced WhatsApp booking chaos. The Cleanso team customized our services and branding fast.',
    source: 'Google',
  },
  {
    id: 'g2',
    author: 'Rahul Nair',
    role: 'Ops Lead · UrbanWash',
    rating: 5,
    date: '2026-04',
    quote:
      'Google review honestly earned — laundry delivery app with QR handoffs and live status cut rider calls. Customization for our zones was handled by a very professional team.',
    source: 'Google',
  },
  {
    id: 'g3',
    author: 'Meera Joseph',
    role: 'Founder · SoftFold Co.',
    rating: 5,
    date: '2026-03',
    quote:
      'Looking for dry cleaning software with real POS and inventory? Cleanso is it. Multi-counter setup, receipts, and customer app under one brand. Support team is excellent.',
    source: 'Google',
  },
  {
    id: 'g4',
    author: 'Arjun Pillai',
    role: 'Director · CityCare Cleaners',
    rating: 5,
    date: '2026-02',
    quote:
      'Franchise laundry software that doesn’t force marketplace fees. Clear yearly licensing, custom branding, and consultants who understand Indian laundry ops. Highly recommend.',
    source: 'Google',
  },
  {
    id: 'g5',
    author: 'Sara Al Hassani',
    role: 'GM · Pearl Care Laundry',
    rating: 5,
    date: '2026-01',
    quote:
      'We needed laundry software for UAE with white-label apps. Cleanso customized catalog, payments, and bilingual-ready branding. Best team we worked with for laundry tech.',
    source: 'Google',
  },
  {
    id: 'g6',
    author: 'Vikram Shah',
    role: 'Owner · QuickSpin Dryclean',
    rating: 4.9,
    date: '2025-12',
    quote:
      'Custom laundry software options without rebuilding from scratch. POS, booking, and delivery connected. Onboarding team walked our staff through every screen.',
    source: 'Google',
  },
]

export const aboutSeoParagraphs = [
  'Cleanso is a specialized laundry management software company building white-label laundry apps, laundry delivery apps, and laundry POS / CMS systems for dry cleaning and wash-and-fold brands.',
  'Our product and customer success teams customize branding, service catalogs, workflows, and multi-store setups so operators in India, UAE, GCC, and global markets can go live under their own brand.',
  'Operators choose Cleanso for customizable laundry software, transparent yearly licensing, Google-reviewed customer experiences, and a dedicated team focused only on laundry and dry-cleaning operations.',
]

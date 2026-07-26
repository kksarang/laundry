export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  date: string
  author: string
  cover: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'why-laundry-businesses-need-apps',
    title: 'Why Laundry Businesses Need Their Own Apps in 2026',
    excerpt: 'Customers expect booking and tracking in-app. Here’s what that means for local laundry brands.',
    category: 'Growth',
    readTime: '4 min',
    date: '2026-06-12',
    author: 'Cleanso Team',
    cover: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Laundry customers already order food and groceries from apps. Asking them to only call or WhatsApp creates friction.',
      'A branded customer app builds trust, repeat orders, and cleaner payment collection.',
      'With Cleanso, you don’t build from scratch — you launch a white-label stack tailored to laundry workflows.',
      'Start with Customer + CMS, then add Delivery when your rider network is ready.',
    ],
  },
  {
    id: '2',
    slug: 'customer-vs-delivery-vs-cms',
    title: 'Customer App vs Delivery App vs CMS — What Do You Actually Need?',
    excerpt: 'A practical breakdown of each Cleanso product and when to buy which license.',
    category: 'Product',
    readTime: '5 min',
    date: '2026-05-28',
    author: 'Cleanso Team',
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    content: [
      'The Customer App is your storefront in someone’s pocket — booking, tracking, payments.',
      'The Delivery App is for riders who pick up and drop off orders in the field.',
      'The CMS is HQ: pricing, staff, order control, and reporting.',
      'Most owners don’t need everything on day one. Buy what matches your current team size.',
    ],
  },
  {
    id: '3',
    slug: 'white-label-laundry-software',
    title: 'What White-Label Laundry Software Really Means',
    excerpt: 'Your brand on the outside. Proven laundry workflows on the inside.',
    category: 'Onboarding',
    readTime: '3 min',
    date: '2026-05-02',
    author: 'Cleanso Team',
    cover: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    content: [
      'White-label means customers see your logo, colors, and business name — not a generic marketplace.',
      'You still get a maintained product with updates, instead of a fragile custom build.',
      'Cleanso onboarding covers branding, store listing guidance, and go-live checklists.',
    ],
  },
  {
    id: '4',
    slug: 'custom-laundry-software-checklist',
    title: 'Custom Laundry Software Checklist: What to Customize Before Go-Live',
    excerpt:
      'Branding, catalog, statuses, payments, and multi-store roles — the customization list every laundry brand should finish before launch.',
    category: 'Customization',
    readTime: '6 min',
    date: '2026-07-10',
    author: 'Cleanso Team',
    cover: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Custom laundry software does not always mean rebuilding from zero. With Cleanso, most operators customize a proven white-label stack.',
      'Start with brand identity: logo, colors, splash screens, and customer-facing copy for your laundry booking app.',
      'Next configure dry cleaning and wash services, express slots, garment categories, and store-wise pricing in the CMS.',
      'Map plant and delivery statuses so riders and counters share one order truth — the core of laundry management software.',
      'Finish with payments, push alerts, staff roles, and multi-store visibility before App Store / Play Store submission.',
      'Need deeper modules? Our solutions team scopes paid custom laundry software enhancements after a discovery call.',
    ],
  },
  {
    id: '5',
    slug: 'best-laundry-pos-and-delivery-app',
    title: 'Best Laundry POS and Delivery App Stack for Growing Brands',
    excerpt:
      'How laundry POS, CRM, and a delivery app work together — and why Google-reviewed teams matter when you customize.',
    category: 'Product',
    readTime: '5 min',
    date: '2026-07-02',
    author: 'Cleanso Team',
    cover: 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1200&q=80',
    content: [
      'A laundry POS alone cannot fix pickup chaos. Growing brands need connected laundry delivery software and a customer app under one brand.',
      'Cleanso CMS + POS handles billing, inventory, employees, and HQ reports while the Delivery App runs QR handoffs and live status.',
      'Operators searching for the best laundry management software often compare marketplaces vs white-label. White-label keeps your customer relationship.',
      'Google reviews for Cleanso repeatedly mention customization quality and a team that understands dry-cleaning workflows.',
      'License CMS first, add Customer and Delivery as density grows — or take the full platform bundle for one connected order ID.',
    ],
  },
  {
    id: '6',
    slug: 'laundry-software-india-uae',
    title: 'Laundry Software for India, UAE & GCC: What Operators Should Compare',
    excerpt:
      'Payments, white-label apps, multi-store CMS, and onboarding support — a practical comparison guide for regional laundry brands.',
    category: 'Growth',
    readTime: '5 min',
    date: '2026-06-22',
    author: 'Cleanso Team',
    cover: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    content: [
      'Laundry software India buyers often need UPI-ready payments and fast white-label go-live. UAE and GCC brands care about premium branding and multi-location control.',
      'Compare whether the vendor offers a real laundry delivery app, not only a booking widget.',
      'Ask about customization: catalog, roles, franchise visibility, and bilingual-ready branding where needed.',
      'Prefer flat yearly laundry software licenses over per-order marketplace fees when your volume is growing.',
      'Cleanso supports India, UAE, GCC, and global laundry brands with onboarding specialists and product support on every active license.',
    ],
  },
]

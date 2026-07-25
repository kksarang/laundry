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
]

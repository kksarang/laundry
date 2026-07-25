export interface Testimonial {
  id: string
  name: string
  role: string
  rating: number
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ananya Mehta',
    role: 'Owner, FreshPress Laundry',
    rating: 5,
    quote:
      'Customer app + CMS finally replaced WhatsApp chaos. Bookings are structured and our brand feels premium online.',
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Ananya',
  },
  {
    id: '2',
    name: 'Rahul Nair',
    role: 'Ops Lead, UrbanWash',
    rating: 5,
    quote:
      'Delivery app QR handoffs and status sync cut rider follow-ups dramatically. CMS sees everything in one place.',
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Rahul',
  },
  {
    id: '3',
    name: 'Meera Joseph',
    role: 'Founder, SoftFold Co.',
    rating: 5,
    quote:
      'POS receipts and inventory in the same stack as the customer app is exactly what a multi-counter laundry needs.',
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Meera',
  },
  {
    id: '4',
    name: 'Arjun Pillai',
    role: 'Director, CityCare Cleaners',
    rating: 4.9,
    quote:
      'We licensed Customer + CMS first, then Delivery later. Clear pricing and a real laundry workflow — not generic retail software.',
    avatar: 'https://api.dicebear.com/9.x/notionists/svg?seed=Arjun',
  },
]

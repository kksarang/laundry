export type FaqCategory =
  | 'Product'
  | 'Pricing & Licensing'
  | 'Onboarding'
  | 'Customization'
  | 'Support'
  | 'Technical'

export interface FaqItem {
  id: string
  category: FaqCategory
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    id: 'p1',
    category: 'Product',
    question: 'What is Cleanso?',
    answer:
      'Cleanso is a premium software platform for laundry and dry-cleaning businesses. It includes a Customer App, Delivery / Partner App, and CMS + POS so you can run bookings, riders, counter billing, and HQ operations digitally.',
  },
  {
    id: 'p2',
    category: 'Product',
    question: 'Do I need all three apps?',
    answer:
      'No. You can license each app separately. Most partners start with Customer + CMS, then add Delivery as their rider team scales.',
  },
  {
    id: 'l1',
    category: 'Pricing & Licensing',
    question: 'How is pricing structured?',
    answer:
      'Customer App is ₹20,000/year, Delivery App is ₹10,000/year, and CMS App is ₹5,000/year. A full-stack bundle is available at ₹30,000/year.',
  },
  {
    id: 'l2',
    category: 'Pricing & Licensing',
    question: 'Is this a one-time purchase?',
    answer:
      'Licenses are yearly and include updates plus support for that period. Renew to keep receiving updates and support.',
  },
  {
    id: 'o1',
    category: 'Onboarding',
    question: 'How long does setup take?',
    answer:
      'Typical white-label setup takes 1–3 weeks depending on branding assets, store listing details, and payment gateway readiness.',
  },
  {
    id: 'o2',
    category: 'Onboarding',
    question: 'Do you help with App Store / Play Store listing?',
    answer:
      'Yes. We guide asset preparation, store copy, and submission. Final publisher accounts remain under your business.',
  },
  {
    id: 'c1',
    category: 'Customization',
    question: 'Can the apps use our brand name and colors?',
    answer:
      'Yes. Cleanso is white-label. Your logo, colors, and customer-facing identity are applied during onboarding.',
  },
  {
    id: 'c2',
    category: 'Customization',
    question: 'Can you add custom features?',
    answer:
      'Common configuration is included. Larger custom modules can be scoped as paid enhancements after a discovery call.',
  },
  {
    id: 's1',
    category: 'Support',
    question: 'What support is included?',
    answer:
      'Active licenses include bug fixes, version updates, and email/WhatsApp support during business hours for the licensed year.',
  },
  {
    id: 't1',
    category: 'Technical',
    question: 'Is this cloud-hosted?',
    answer:
      'Yes. Core services are cloud-hosted. We share architecture details and access roles during onboarding.',
  },
  {
    id: 't2',
    category: 'Technical',
    question: 'Can it integrate with our existing payment gateway?',
    answer:
      'Most standard Indian gateways and UPI flows can be connected. Share your preferred provider on the demo call.',
  },
]

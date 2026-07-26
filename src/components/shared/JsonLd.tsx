import { useEffect } from 'react'
import { appBundle, appPlans } from '@/data/appPlans'

const SITE_URL = 'https://kksarang.github.io/laundry/'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
      name: 'Cleanso',
      url: SITE_URL,
      description:
        'Premium white-label software for laundry and dry-cleaning businesses — Customer App, Delivery App, and CMS + POS.',
      sameAs: [],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}#software`,
      name: 'Cleanso',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      url: SITE_URL,
      description:
        'Connected laundry operations platform with customer booking, rider fulfillment, and HQ CMS + POS under your brand.',
      provider: { '@id': `${SITE_URL}#organization` },
      offers: [
        ...appPlans.map((plan) => ({
          '@type': 'Offer',
          name: plan.name,
          price: plan.price,
          priceCurrency: 'INR',
          priceValidUntil: new Date(new Date().getFullYear() + 1, 11, 31).toISOString().split('T')[0],
          url: `${SITE_URL}pricing`,
          availability: 'https://schema.org/InStock',
        })),
        {
          '@type': 'Offer',
          name: appBundle.name,
          price: appBundle.price,
          priceCurrency: 'INR',
          priceValidUntil: new Date(new Date().getFullYear() + 1, 11, 31).toISOString().split('T')[0],
          url: `${SITE_URL}pricing`,
          availability: 'https://schema.org/InStock',
          description: appBundle.note,
        },
      ],
    },
  ],
}

export function JsonLd() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'cleanso-jsonld'
    script.textContent = JSON.stringify(jsonLd)
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return null
}

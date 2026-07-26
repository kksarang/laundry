import { useEffect } from 'react'
import { appBundle, appPlans } from '@/data/appPlans'
import { googleReviewSummary, googleReviews, keywordMeta } from '@/data/seoContent'

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
        'White-label laundry management software company — custom laundry apps, laundry delivery software, and CMS + POS for dry cleaning brands in India, UAE, GCC, and worldwide.',
      knowsAbout: keywordMeta.split(', '),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: googleReviewSummary.rating,
        reviewCount: googleReviewSummary.count,
        bestRating: 5,
        worstRating: 1,
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}#software`,
      name: 'Cleanso Laundry Management Software',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      url: SITE_URL,
      description:
        'Customizable white-label laundry software with Customer App, Delivery App, and CMS + POS. Laundry booking, rider fulfillment, laundry POS, and multi-store operations under your brand.',
      featureList: [
        'White-label laundry customer app',
        'Laundry delivery / partner app',
        'Laundry CMS + POS',
        'Dry cleaning catalog & pricing',
        'Multi-store and franchise configuration',
        'Software customization and onboarding',
      ],
      provider: { '@id': `${SITE_URL}#organization` },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: googleReviewSummary.rating,
        reviewCount: googleReviewSummary.count,
        bestRating: 5,
        worstRating: 1,
      },
      review: googleReviews.slice(0, 4).map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.author },
        datePublished: `${r.date}-01`,
        reviewBody: r.quote,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: r.rating,
          bestRating: 5,
          worstRating: 1,
        },
      })),
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
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      url: SITE_URL,
      name: 'Cleanso — Laundry Management Software',
      description:
        'Laundry management software, white-label laundry app, dry cleaning POS, and custom laundry software licensing.',
      publisher: { '@id': `${SITE_URL}#organization` },
    },
  ],
}

export function JsonLd() {
  useEffect(() => {
    const existing = document.getElementById('cleanso-jsonld')
    if (existing) existing.remove()

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

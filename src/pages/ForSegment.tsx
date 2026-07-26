import { ArrowRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { PageHeader } from '@/components/shared/PageHeader'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/Button'
import { businessSegments } from '@/data/marketing'
import { appPlans } from '@/data/appPlans'
import { formatINR } from '@/lib/format'

const recommended: Record<string, string[]> = {
  'single-store': ['customer', 'cms'],
  'multi-store': ['customer', 'cms', 'delivery'],
  franchise: ['customer', 'delivery', 'cms'],
}

export function ForSegment() {
  const { segmentId } = useParams()
  const segment = businessSegments.find((s) => s.id === segmentId)

  if (!segment) return <Navigate to="/" replace />

  const plans = appPlans.filter((p) => recommended[segment.id]?.includes(p.id))

  return (
    <>
      <SEO
        title={`${segment.title} laundry software — Cleanso`}
        description={`${segment.blurb} White-label Customer, Delivery, and CMS + POS with flat yearly licensing.`}
      />
      <PageHeader
        eyebrow="Built for your business"
        title={`${segment.title} laundry brands`}
        description={segment.blurb}
        action={
          <div className="flex flex-wrap gap-3">
            <Button to="/contact?demo=1">Book a demo</Button>
            <Button to="/pricing" variant="secondary">
              See licensing
            </Button>
          </div>
        }
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">What you get</p>
            <ul className="mt-6 space-y-4">
              {segment.highlights.map((item) => (
                <li key={item} className="border-t border-theme pt-4 text-base text-ink md:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
              Recommended starting stack
            </p>
            <ul className="mt-6 divide-y divide-[var(--border)] border-y border-theme">
              {plans.map((plan) => (
                <li key={plan.id} className="flex items-baseline justify-between gap-4 py-5">
                  <div>
                    <p className="font-display text-xl font-semibold text-ink">{plan.name}</p>
                    <p className="mt-1 text-sm text-ink-muted">{plan.tagline}</p>
                  </div>
                  <p className="font-display text-lg font-semibold text-primary">{formatINR(plan.price)}/yr</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink-muted">
              Full platform bundle available at {formatINR(30000)}/year — see{' '}
              <Link to="/pricing" className="font-semibold text-primary">
                pricing
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-theme bg-surface section-pad">
        <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-2">
            <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
              Ready to map Cleanso to your {segment.title.toLowerCase()} workflow?
            </h2>
            <p className="text-ink-muted">No credit card required — just a demo of your real ops.</p>
          </div>
          <Button to={`/contact?demo=1&segment=${segment.id}`} size="lg">
            Book a demo <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </>
  )
}

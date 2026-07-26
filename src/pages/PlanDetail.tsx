import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/Button'
import { appBundle, appPlans, getPlanById } from '@/data/appPlans'
import { formatINR } from '@/lib/format'

export function PlanDetail() {
  const { planId } = useParams()
  const plan = planId ? getPlanById(planId) : undefined

  if (!plan || !planId) return <Navigate to="/pricing" replace />

  const isBundle = planId === 'bundle'
  const others = isBundle
    ? appPlans
    : [...appPlans.filter((p) => p.id !== planId), appBundle]

  return (
    <>
      <SEO
        title={`${plan.name} — ₹${'price' in plan ? plan.price.toLocaleString('en-IN') : ''}/year | Cleanso`}
        description={plan.description}
      />

      <section className="border-b border-theme bg-[color-mix(in_oklab,var(--surface-muted)_45%,var(--bg))]">
        <div className="container-page pb-14 pt-28 md:pb-20 md:pt-32">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All plans
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
            <div className="space-y-6">
              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.accent}`}
                aria-hidden
              >
                <span className="h-7 w-7 rounded-full bg-white/35" />
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{plan.tagline}</p>
                <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                  {plan.name}
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-ink-muted">{plan.longDescription}</p>
              </div>

              <div className="flex flex-wrap items-end gap-3 border-t border-theme pt-6">
                {'originalPrice' in plan && (
                  <span className="pb-1 text-lg text-ink-subtle line-through">
                    {formatINR(plan.originalPrice)}
                  </span>
                )}
                <p className="font-display text-5xl font-semibold tracking-tight text-ink">
                  {formatINR(plan.price)}
                </p>
                <p className="pb-2 text-ink-muted">per year</p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button to={`/contact?plan=${planId}`} size="lg">
                  {plan.cta} <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/contact?demo=1" variant="secondary" size="lg">
                  Book a demo
                </Button>
              </div>
              <p className="text-sm text-ink-subtle">No credit card required to talk with us</p>
            </div>

            <aside className="rounded-[1.5rem] border border-theme bg-surface p-6 shadow-[0_12px_40px_rgba(12,50,46,0.06)] md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">Ideal for</p>
              <ul className="mt-4 space-y-3">
                {plan.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                Full list — what’s included ({plan.fullFeatures.length})
              </p>
              <ul className="mt-4 max-h-[28rem] space-y-3 overflow-y-auto pr-1">
                {plan.fullFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Explained features */}
      <section className="section-pad">
        <div className="container-page space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Plan explained</p>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              What this license actually does for your laundry brand
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {plan.detailFeatures.map((block, index) => (
              <article key={block.title} className="rounded-[1.35rem] border border-theme bg-surface p-6 md:p-7">
                <p className="font-display text-sm font-semibold tracking-[0.14em] text-primary">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">{block.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{block.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Other plans */}
      <section className="border-t border-theme bg-surface section-pad">
        <div className="container-page space-y-8">
          <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">Explore other plans</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {others.slice(0, 3).map((other) => (
              <Link
                key={other.id}
                to={`/pricing/${other.id}`}
                className="group rounded-2xl border border-theme bg-page p-5 transition-colors hover:border-[color-mix(in_oklab,var(--primary)_35%,var(--border))]"
              >
                <p className="font-display text-lg font-semibold text-ink group-hover:text-primary">{other.name}</p>
                <p className="mt-1 text-sm text-ink-muted">{formatINR(other.price)} / year</p>
                <p className="mt-3 text-sm text-ink-muted line-clamp-2">{other.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View details <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
          <Link to="/pricing" className="inline-flex text-sm font-semibold text-primary">
            ← Back to all pricing
          </Link>
        </div>
      </section>
    </>
  )
}

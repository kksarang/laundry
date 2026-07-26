import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PlanCompareTable } from '@/components/pricing/PlanCompareTable'
import { PriceValueTable } from '@/components/pricing/PriceValueTable'
import { PricingCards } from '@/components/pricing/PricingCards'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/Button'
import { appBundle, chooseGuide } from '@/data/appPlans'
import { clientLogos } from '@/data/marketing'
import { testimonials } from '@/data/testimonials'
import { formatINR } from '@/lib/format'

export function Pricing() {
  return (
    <>
      <SEO
        title="Laundry Software Pricing — Yearly Licenses | Cleanso"
        description="Laundry management software pricing: CMS + POS ₹5,000/year, Delivery App ₹10,000/year, Customer App ₹20,000/year, full white-label bundle ₹30,000/year. Customization included."
      />

      <section className="border-b border-theme">
        <div className="container-page w-full max-w-full space-y-8 pb-14 pt-28 sm:space-y-10 sm:pb-16 md:space-y-12 md:pb-20 md:pt-32">
          <div className="max-w-xl space-y-3">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
              Pricing
            </h1>
            <p className="text-sm text-ink-muted sm:text-base md:text-lg">
              Flat yearly licenses — full feature list on every plan.
            </p>
          </div>

          {/* Quick pick */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {chooseGuide.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-2xl border border-theme bg-surface p-4 transition-colors hover:border-[color-mix(in_oklab,var(--primary)_35%,var(--border))]"
              >
                <p className="text-sm text-ink-muted">{item.title}</p>
                <p className="mt-2 font-display text-base font-semibold text-ink">{item.pick}</p>
                <p className="text-xs text-primary">{item.price}</p>
              </Link>
            ))}
          </div>

          <PriceValueTable />

          <div className="space-y-4">
            <div className="max-w-xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Full feature lists</p>
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">Every license, explained</h2>
            </div>
            <PricingCards />
          </div>

          {/* Bundle with full list */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[1.5rem] border border-theme bg-[var(--ink)] text-white"
          >
            <div className="grid gap-8 px-4 py-7 sm:px-6 sm:py-8 md:grid-cols-2 md:px-10 md:py-10">
              <div className="min-w-0 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Best value</p>
                <h2 className="font-display text-xl font-semibold sm:text-2xl md:text-3xl">{appBundle.name}</h2>
                <p className="text-sm text-white/65 md:text-base">{appBundle.note}</p>
                <div className="flex flex-wrap items-baseline gap-2 pt-2 sm:gap-3">
                  <span className="text-sm text-white/40 line-through">{formatINR(appBundle.originalPrice)}</span>
                  <span className="font-display text-3xl font-semibold sm:text-4xl">{formatINR(appBundle.price)}</span>
                  <span className="text-sm text-white/60">/ year</span>
                </div>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                  <Button to="/contact?plan=bundle" variant="light" className="w-full sm:w-auto">
                    {appBundle.cta}
                  </Button>
                  <Link
                    to="/pricing/bundle"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]"
                  >
                    Bundle explained <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40">
                  Everything included ({appBundle.fullFeatures.length})
                </p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-1">
                  {appBundle.fullFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-white/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[var(--ink)]">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-5 md:justify-between md:py-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">Trusted by operators</p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {clientLogos.map((name) => (
              <span key={name} className="font-display text-sm font-semibold tracking-wide text-white/75 md:text-base">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width maximum comparison */}
      <section className="section-pad">
        <div className="container-page">
          <PlanCompareTable />
        </div>
      </section>

      <section className="border-t border-theme bg-surface section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-semibold text-ink">From operators</h2>
            <p className="text-ink-muted">What teams notice after switching to structured apps.</p>
          </div>
          <div className="space-y-5">
            {testimonials.slice(0, 2).map((t) => (
              <blockquote key={t.id} className="rounded-[1.35rem] border border-theme bg-page p-6">
                <p className="text-base font-medium leading-relaxed text-ink">“{t.quote}”</p>
                <footer className="mt-4 text-sm text-ink-muted">
                  <span className="font-semibold text-ink">{t.name}</span> · {t.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-theme">
        <div className="container-page flex flex-col items-stretch justify-between gap-6 py-14 sm:items-start md:flex-row md:items-center">
          <div className="max-w-lg space-y-2">
            <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">Not sure which plan fits?</h2>
            <p className="text-ink-muted">
              We’ll map the full feature list to your stores and riders — no card required.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Button to="/contact?demo=1" size="lg" className="w-full sm:w-auto">
              Book a demo
            </Button>
            <Button to="/faq" variant="secondary" size="lg" className="w-full sm:w-auto">
              Read FAQs
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

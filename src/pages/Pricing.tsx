import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PlanCompareTable } from '@/components/pricing/PlanCompareTable'
import { PricingCards } from '@/components/pricing/PricingCards'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/Button'
import { appBundle } from '@/data/appPlans'
import { clientLogos } from '@/data/marketing'
import { testimonials } from '@/data/testimonials'
import { formatINR } from '@/lib/format'

export function Pricing() {
  return (
    <>
      <SEO
        title="Pricing — Cleanso Yearly Software Licenses"
        description="CMS + POS ₹5,000/year · Delivery App ₹10,000/year · Customer App ₹20,000/year · Full platform bundle ₹30,000/year. Flat yearly white-label licensing."
      />

      {/* Header + cards */}
      <section className="border-b border-theme bg-[color-mix(in_oklab,var(--surface-muted)_55%,var(--bg))]">
        <div className="container-page space-y-12 pb-16 pt-28 md:space-y-14 md:pb-20 md:pt-32">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Pricing</p>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              Choose your Cleanso plan
            </h1>
            <p className="text-ink-muted md:text-lg">
              Flat yearly licenses for white-label laundry software — not per-order fees. Pick one app or the full
              connected platform.
            </p>
          </div>

          <PricingCards />

          {/* Bundle highlight */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[1.5rem] border border-theme bg-[var(--ink)] text-white"
          >
            <div className="grid gap-6 px-6 py-8 md:grid-cols-[1.2fr_auto] md:items-center md:px-10 md:py-10">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Best value</p>
                <h2 className="font-display text-2xl font-semibold md:text-3xl">{appBundle.name}</h2>
                <p className="max-w-xl text-sm text-white/65 md:text-base">{appBundle.note}</p>
                <Link
                  to="/pricing/bundle"
                  className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-[var(--accent)] hover:opacity-90"
                >
                  See bundle details <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col items-start gap-4 md:items-end">
                <div className="flex items-baseline gap-3">
                  <span className="text-sm text-white/40 line-through">{formatINR(appBundle.originalPrice)}</span>
                  <span className="font-display text-4xl font-semibold md:text-5xl">
                    {formatINR(appBundle.price)}
                  </span>
                  <span className="text-sm text-white/60">/ year</span>
                </div>
                <Button to="/contact?plan=bundle" variant="light">
                  {appBundle.cta}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo trust bar — reference style */}
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

      {/* Compare + testimonials */}
      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.2fr] lg:gap-14 lg:items-start">
          <div className="space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                Learn more from operators like you
              </h2>
              <p className="text-ink-muted">
                Real laundry teams using structured apps instead of WhatsApp chaos and disconnected POS tools.
              </p>
            </div>

            <div className="space-y-5">
              {testimonials.slice(0, 2).map((t) => (
                <blockquote key={t.id} className="rounded-[1.35rem] border border-theme bg-surface p-6">
                  <p className="font-display text-4xl leading-none text-primary/35">“</p>
                  <p className="mt-2 text-base font-medium leading-relaxed text-ink">“{t.quote}”</p>
                  <footer className="mt-5 flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt=""
                      className="h-11 w-11 rounded-full bg-[var(--surface-muted)]"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-sm font-semibold text-ink">{t.name}</p>
                      <p className="text-xs text-ink-muted">{t.role}</p>
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>

          <PlanCompareTable />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-theme bg-surface">
        <div className="container-page flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div className="max-w-lg space-y-2">
            <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
              Not sure which plan fits?
            </h2>
            <p className="text-ink-muted">
              We’ll map CMS, Delivery, and Customer App to your stores and riders — no card required.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/contact?demo=1" size="lg">
              Book a demo
            </Button>
            <Button to="/faq" variant="secondary" size="lg">
              Read FAQs
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

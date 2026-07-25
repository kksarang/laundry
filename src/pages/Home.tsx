import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppPlans } from '@/components/pricing/AppPlans'
import { AppShowcase } from '@/components/shared/AppShowcase'
import { ProductCard } from '@/components/shared/ProductCard'
import { SEO } from '@/components/shared/SEO'
import { TestimonialCard } from '@/components/shared/TestimonialCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { capabilityModules, ecosystemFlow, launchSteps, platformStats } from '@/data/platform'
import { products } from '@/data/products'
import { testimonials } from '@/data/testimonials'

export function Home() {
  return (
    <>
      <SEO
        title="Cleanso — Premium Laundry Business Software"
        description="Connected Customer App, Delivery App, and CMS + POS for laundry brands. White-label software from ₹5,000/year."
      />

      {/* Hero */}
      <section className="hero-atmosphere relative overflow-hidden">
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-70" />
        <div className="container-page relative grid items-center gap-12 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-14">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 rounded-xl border border-theme bg-surface/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Laundry software platform
              </div>

              <p className="font-display text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
                <span className="text-gradient">Cleanso</span>
              </p>

              <h1 className="max-w-xl font-display text-3xl font-semibold text-ink sm:text-4xl md:text-[2.9rem] md:leading-[1.1]">
                One premium platform.
                <br />
                Three connected apps.
              </h1>

              <p className="max-w-lg text-lg leading-relaxed text-ink-muted">
                White-label Customer, Delivery, and CMS + POS software purpose-built for laundry & dry-cleaning
                businesses — booking to billing in one stack.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="flex flex-wrap gap-3"
            >
              <Button to="/contact?demo=1" size="lg" className="!rounded-xl">
                Request demo <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/pricing" variant="secondary" size="lg" className="!rounded-xl">
                View licenses
              </Button>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.22 }}
              className="grid gap-2 text-sm text-ink-muted sm:grid-cols-2"
            >
              {[
                'Real laundry workflows (not generic retail)',
                'License apps separately or as a bundle',
                'White-label branding included',
                'Built from live Customer · Partner · CRM apps',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          <AppShowcase />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-theme bg-surface">
        <div className="container-page grid grid-cols-2 gap-px bg-[var(--border)] md:grid-cols-4">
          {platformStats.map((stat) => (
            <div key={stat.label} className="bg-surface px-5 py-7 text-center md:py-8">
              <p className="font-display text-3xl font-semibold text-primary md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ecosystem */}
      <section className="section-pad">
        <div className="container-page space-y-10">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <Badge>Platform</Badge>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-5xl">
              How the Cleanso stack works together
            </h2>
            <p className="text-ink-muted">
              Demand, fulfillment, and control — three apps sharing one operational backbone.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {ecosystemFlow.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative overflow-hidden rounded-[1.5rem] border border-theme bg-surface p-6 shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{item.role}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.copy}</p>
                <div className="mt-6 h-1.5 w-16 rounded-full bg-[var(--primary)]" />
                {index < ecosystemFlow.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-[var(--border)] lg:block" />
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="border-y border-theme bg-surface section-pad">
        <div className="container-page space-y-10">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl space-y-3">
              <Badge tone="accent">Products</Badge>
              <h2 className="font-display text-3xl font-semibold text-ink md:text-5xl">
                Apps & modules from your real stack
              </h2>
              <p className="text-ink-muted">
                Customer booking, partner delivery, CMS dashboard, POS billing, offers, and white-label — mapped from
                production features.
              </p>
            </div>
            <Button to="/products" variant="secondary" className="!rounded-xl">
              All products
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, i) => (
              <ProductCard key={product.id} product={product} featured={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities bento */}
      <section className="section-pad">
        <div className="container-page space-y-10">
          <div className="max-w-2xl space-y-3">
            <Badge>Capabilities</Badge>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              Built for laundry operations end to end
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {capabilityModules.map((block, index) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[1.4rem] border border-theme bg-surface p-6 md:p-7"
              >
                <h3 className="font-display text-xl font-semibold text-ink">{block.title}</h3>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Launch steps */}
      <section className="border-y border-theme bg-surface section-pad">
        <div className="container-page space-y-10">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <Badge>Onboarding</Badge>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">From license to live</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {launchSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-[1.35rem] border border-theme bg-page p-5"
              >
                <p className="font-display text-3xl font-bold text-primary/30">{step.step}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-pad">
        <div className="container-page">
          <AppPlans />
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-theme bg-surface section-pad">
        <div className="container-page space-y-8">
          <div className="space-y-3">
            <Badge>Operators</Badge>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              Built with laundry teams in mind
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 pt-6">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--ink)] px-6 py-12 text-[var(--bg)] md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[var(--primary)]/40 blur-3xl" />
            <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[var(--accent)]/25 blur-3xl" />
            <div className="relative max-w-2xl space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                Ready when you are
              </p>
              <h2 className="font-display text-3xl font-semibold md:text-5xl">
                See your laundry brand on the Cleanso stack
              </h2>
              <p className="text-base text-white/70 md:text-lg">
                We’ll walk through Customer, Delivery, and CMS + POS — then recommend the right yearly license mix.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button to="/contact?demo=1" variant="light" className="!rounded-xl">
                  Request demo
                </Button>
                <Link
                  to="/pricing"
                  className="inline-flex items-center rounded-xl border border-white/25 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10"
                >
                  Compare pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

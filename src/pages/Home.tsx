import { motion } from 'framer-motion'
import { ArrowRight, Check, Clock3, Phone, Route, Shield, Sparkles, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppPlans } from '@/components/pricing/AppPlans'
import { AppShowcase } from '@/components/shared/AppShowcase'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/Button'
import { faqs } from '@/data/faqs'
import {
  businessSegments,
  clientLogos,
  ecosystemApps,
  flatVsPerOrder,
  outcomeFeatures,
  type OutcomeIcon,
} from '@/data/marketing'
import { capabilityModules, ecosystemFlow, launchSteps, platformStats } from '@/data/platform'
import { testimonials } from '@/data/testimonials'

const ease = [0.22, 1, 0.36, 1] as const

const outcomeIcons: Record<Exclude<OutcomeIcon, 'message'>, typeof Clock3> = {
  clock: Clock3,
  phone: Phone,
  users: Users,
  route: Route,
  shield: Shield,
}

const homeOutcomes = outcomeFeatures.filter((f) => f.icon !== 'message')
const homeFaqs = faqs.filter((f) => ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'].includes(f.id))

export function Home() {
  return (
    <>
      <SEO
        title="Cleanso — Premium Laundry Business Software"
        description="Connected Customer App, Delivery App, and CMS + POS for laundry brands. White-label software from ₹5,000/year."
      />

      {/* Classic hero — CMS mock + three app cards */}
      <section className="hero-atmosphere relative overflow-hidden">
        <div className="grid-fade pointer-events-none absolute inset-0 opacity-70" />
        <div className="container-page relative grid items-center gap-10 pb-16 pt-28 sm:gap-12 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-32">
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

              <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="text-gradient">Cleanso</span>
              </p>

              <h1 className="max-w-xl font-display text-[1.65rem] font-semibold leading-tight text-ink sm:text-4xl md:text-[2.9rem] md:leading-[1.1]">
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
              className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Button to="/contact?demo=1" size="lg" className="w-full !rounded-xl sm:w-auto">
                Request demo <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/pricing" variant="secondary" size="lg" className="w-full !rounded-xl sm:w-auto">
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
            <div key={stat.label} className="bg-surface px-3 py-6 text-center sm:px-5 sm:py-7 md:py-8">
              <p className="font-display text-2xl font-semibold text-primary sm:text-3xl md:text-4xl">{stat.value}</p>
              <p className="mt-1 text-xs text-ink-muted sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Logo strip */}
      <section className="border-b border-theme">
        <div className="container-page flex flex-col gap-5 py-8 md:flex-row md:items-center md:gap-10">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
            Built for brands like
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {clientLogos.map((name) => (
              <span
                key={name}
                className="font-display text-sm font-semibold tracking-wide text-ink-subtle/80 md:text-base"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Platform flow */}
      <section className="section-pad">
        <div className="container-page space-y-10">
          <div className="mx-auto max-w-2xl space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Platform</p>
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
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="border-y border-theme bg-surface section-pad">
        <div className="container-page space-y-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Business types</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Built for every laundry business type
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {businessSegments.map((segment, index) => (
              <Link
                key={segment.id}
                to={segment.href}
                className="group flex h-full flex-col rounded-2xl border border-theme bg-page p-6 transition-all hover:border-[color-mix(in_oklab,var(--primary)_35%,var(--border))] hover:shadow-soft"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-ink group-hover:text-primary">
                  {segment.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{segment.blurb}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Explore path <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes — no WhatsApp mock */}
      <section className="section-pad">
        <div className="container-page space-y-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Outcomes</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Results operators feel day to day
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeOutcomes.map((feature, index) => {
              const Icon = outcomeIcons[feature.icon as keyof typeof outcomeIcons]
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, ease }}
                  className="rounded-2xl border border-theme bg-surface p-6"
                >
                  {Icon && <Icon className="h-5 w-5 text-primary" />}
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {feature.metric}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{feature.copy}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Apps list */}
      <section className="border-y border-theme bg-surface section-pad">
        <div className="container-page space-y-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Products</p>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              Three connected apps. One laundry OS.
            </h2>
          </div>
          <div className="divide-y divide-[var(--border)] border-y border-theme">
            {ecosystemApps.map((app) => (
              <Link
                key={app.id}
                to={`/products#${app.id === 'delivery' ? 'delivery' : app.id}`}
                className="group grid gap-3 py-8 transition-colors sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{app.role}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-ink group-hover:text-primary">
                    {app.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-ink-muted md:text-base">{app.copy}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  View details <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-pad">
        <div className="container-page space-y-12">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Capabilities</p>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              Built for laundry operations end to end
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:gap-x-16">
            {capabilityModules.map((block) => (
              <div key={block.title} className="border-t border-theme pt-6">
                <h3 className="font-display text-xl font-semibold text-ink">{block.title}</h3>
                <ul className="mt-4 space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="text-sm text-ink-muted md:text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding */}
      <section className="border-y border-theme bg-surface section-pad">
        <div className="container-page space-y-12">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Onboarding</p>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">From license to live</h2>
          </div>
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {launchSteps.map((step, index) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
              >
                <p className="font-display text-sm font-semibold tracking-[0.16em] text-primary">{step.step}</p>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.copy}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing — keep the card UI you liked */}
      <section className="section-pad">
        <div className="container-page space-y-10">
          <AppPlans />
          <div className="rounded-2xl border border-theme bg-page p-6 md:p-10">
            <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">{flatVsPerOrder.title}</h3>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {flatVsPerOrder.points.map((point) => (
                <li key={point} className="text-sm leading-relaxed text-ink-muted md:text-base">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-theme bg-surface section-pad">
        <div className="container-page space-y-10">
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            What laundry teams notice first
          </h2>
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.id} className="rounded-2xl border border-theme bg-page p-6">
                <p className="font-display text-lg font-semibold leading-snug text-ink">“{t.quote}”</p>
                <footer className="mt-4 text-sm text-ink-muted">
                  <span className="font-semibold text-ink">{t.name}</span> · {t.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">FAQ</p>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              Answers before you book a demo
            </h2>
            <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              All FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="divide-y divide-[var(--border)] border-y border-theme">
            {homeFaqs.map((faq) => (
              <div key={faq.id} className="py-6">
                <h3 className="font-display text-lg font-semibold text-ink">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--ink)] px-6 py-12 text-[var(--bg)] md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[var(--primary)]/40 blur-3xl" />
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

import { motion } from 'framer-motion'
import {
  ArrowRight,
  Clock3,
  MessageCircle,
  Phone,
  Route,
  Shield,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { AppPlans } from '@/components/pricing/AppPlans'
import { DeviceMockup } from '@/components/shared/DeviceMockup'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/Button'
import { faqs } from '@/data/faqs'
import {
  businessSegments,
  clientLogos,
  ecosystemApps,
  flatVsPerOrder,
  liveOpsMetrics,
  outcomeFeatures,
  trustStats,
  whatsappFlow,
  type OutcomeIcon,
} from '@/data/marketing'
import { testimonials } from '@/data/testimonials'

const ease = [0.22, 1, 0.36, 1] as const

const outcomeIcons: Record<OutcomeIcon, typeof Clock3> = {
  clock: Clock3,
  phone: Phone,
  users: Users,
  route: Route,
  message: MessageCircle,
  shield: Shield,
}

const homeFaqs = faqs.filter((f) => ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7'].includes(f.id))

export function Home() {
  return (
    <>
      <SEO
        title="Cleanso — White-Label Laundry Management Software"
        description="Launch your branded laundry Customer App, Delivery App, and CMS + POS with flat yearly licenses. Built for India, UAE, GCC and brands scaling worldwide."
      />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-theme">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_0%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_55%)]" />
        <div className="container-page relative grid items-center gap-12 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24 lg:pt-32">
          <div className="space-y-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-primary"
            >
              India · UAE · GCC · Expanding worldwide
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.65, ease }}
              className="max-w-xl font-display text-[clamp(2.4rem,5.5vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-ink"
            >
              White-label laundry software.
              <span className="text-primary"> Flat yearly. Your brand.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.6, ease }}
              className="max-w-lg text-base leading-relaxed text-ink-muted md:text-lg"
            >
              Launch a Customer App, Delivery App, and CMS + POS under your laundry brand — without per-order fees
              eating your margins as you scale from 1 store to multi-city networks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55, ease }}
              className="flex flex-wrap items-center gap-3"
            >
              <Button to="/contact?demo=1" size="lg">
                Book a demo <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/contact?trial=1" variant="secondary" size="lg">
                Start free trial
              </Button>
            </motion.div>
            <p className="text-sm text-ink-subtle">No credit card required · Typical go-live 1–3 weeks</p>

            <dl className="grid grid-cols-2 gap-4 border-t border-theme pt-6 sm:grid-cols-4">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[11px] uppercase tracking-[0.12em] text-ink-subtle">{stat.label}</dt>
                  <dd className="mt-1 font-display text-sm font-semibold text-ink md:text-base">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.75, ease }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-theme bg-surface p-5 shadow-soft md:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">Live operations</p>
                  <p className="mt-1 font-display text-xl font-semibold text-ink">Cleanso CMS</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--primary-soft)] px-2.5 py-1 text-[11px] font-semibold text-primary">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--primary)]" />
                  Live
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {liveOpsMetrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-theme bg-page px-3 py-4">
                    <p className="font-display text-2xl font-semibold text-ink">{m.value}</p>
                    <p className="mt-1 text-xs font-medium text-ink">{m.label}</p>
                    <p className="mt-0.5 text-[11px] text-ink-subtle">{m.hint}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 h-24 rounded-xl bg-gradient-to-r from-[var(--primary-soft)] via-[var(--accent-soft)] to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Logo strip */}
      <section className="border-b border-theme bg-surface">
        <div className="container-page flex flex-col gap-5 py-8 md:flex-row md:items-center md:gap-10">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
            Built for brands like
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {clientLogos.map((name) => (
              <span key={name} className="font-display text-sm font-semibold tracking-wide text-ink-subtle/80 md:text-base">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Segments */}
      <section className="section-pad">
        <div className="container-page space-y-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Business types</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Built for every laundry business type
            </h2>
            <p className="text-ink-muted md:text-lg">
              A one-shop owner and a 50-store franchise buy differently. Pick your path — pricing and pitch stay clear.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {businessSegments.map((segment, index) => (
              <motion.div
                key={segment.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, ease }}
              >
                <Link
                  to={segment.href}
                  className="group flex h-full flex-col rounded-2xl border border-theme bg-surface p-6 transition-all hover:border-[color-mix(in_oklab,var(--primary)_35%,var(--border))] hover:shadow-soft"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">0{index + 1}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-ink group-hover:text-primary">
                    {segment.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{segment.blurb}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Explore path <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Outcome features */}
      <section className="border-y border-theme bg-surface section-pad">
        <div className="container-page space-y-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Outcomes</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Features written as results operators feel
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {outcomeFeatures.map((feature, index) => {
              const Icon = outcomeIcons[feature.icon]
              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, ease }}
                  className="rounded-2xl border border-theme bg-page p-6"
                >
                  <Icon className="h-5 w-5 text-primary" />
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

      {/* 5. Live ops showcase */}
      <section className="section-pad">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Live operations</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              One dashboard for orders, riders, and stores
            </h2>
            <p className="text-ink-muted md:text-lg">
              HQ sees the same order truth as counters and riders — revenue, jobs in transit, and store status in one
              control layer.
            </p>
            <Button to="/products#cms" variant="secondary">
              Explore CMS + POS
            </Button>
          </div>
          <div className="overflow-hidden rounded-2xl border border-theme bg-[var(--ink)] p-6 text-white md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Realtime snapshot</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {liveOpsMetrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="font-display text-3xl font-semibold">{m.value}</p>
                  <p className="mt-1 text-sm text-white/70">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. WhatsApp flagship */}
      <section className="border-y border-theme bg-surface section-pad">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Flagship for India · UAE · GCC</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              WhatsApp ordering that becomes a real booking
            </h2>
            <p className="text-ink-muted md:text-lg">
              Laundry markets run on chat. Cleanso turns WhatsApp intent into structured orders inside your CMS — so
              volume doesn’t drown your team.
            </p>
            <div className="relative mx-auto mt-4 max-w-xs lg:mx-0">
              <DeviceMockup variant="phone" title="WhatsApp → Order">
                <div className="flex h-full flex-col gap-3 bg-[#0b1410] p-4 text-white">
                  <div className="rounded-2xl rounded-tl-sm bg-[#005c4b] px-3 py-2 text-[11px] leading-relaxed">
                    Hi! Pickup tomorrow 10am — 4 shirts, express.
                  </div>
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#1f2c26] px-3 py-2 text-[11px] leading-relaxed">
                    Booked ✓ Express wash · Slot 10:00 · Order #CL-248
                  </div>
                  <div className="mt-auto rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">Synced to CMS</p>
                    <p className="mt-1 font-display text-sm font-semibold">Order #CL-248 live</p>
                  </div>
                </div>
              </DeviceMockup>
            </div>
          </div>
          <ol className="divide-y divide-[var(--border)] border-y border-theme">
            {whatsappFlow.map((step) => (
              <li key={step.step} className="grid gap-2 py-6 sm:grid-cols-[4rem_1fr] sm:gap-6">
                <p className="font-display text-sm font-semibold tracking-[0.16em] text-primary">{step.step}</p>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink md:text-xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 7. Three-app ecosystem */}
      <section className="section-pad">
        <div className="container-page space-y-14">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Platform</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Three connected apps. One laundry OS.
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            {ecosystemApps.map((app, index) => (
              <motion.article
                key={app.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, ease }}
                className="flex flex-col"
              >
                <DeviceMockup variant={app.device} title={app.title}>
                  <div className="flex h-full flex-col gap-2.5 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">{app.role}</p>
                    {app.bullets.map((b) => (
                      <div key={b} className="rounded-lg bg-[var(--surface-muted)] px-3 py-2 text-[11px] text-ink">
                        {b}
                      </div>
                    ))}
                  </div>
                </DeviceMockup>
                <h3 className="mt-8 font-display text-2xl font-semibold text-ink">{app.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{app.copy}</p>
                <ul className="mt-4 space-y-1.5">
                  {app.bullets.map((b) => (
                    <li key={b} className="text-sm text-ink-muted">
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/products#${app.id === 'delivery' ? 'delivery' : app.id}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  View details <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Pricing */}
      <section className="border-y border-theme bg-surface section-pad">
        <div className="container-page space-y-14">
          <AppPlans showComparison />

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

      {/* 9. Testimonials */}
      <section className="section-pad">
        <div className="container-page space-y-12">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Operators</p>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              What laundry teams notice first
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.id} className="rounded-2xl border border-theme bg-surface p-6 md:p-7">
                <p className="font-display text-lg font-semibold leading-snug text-ink md:text-xl">“{t.quote}”</p>
                <footer className="mt-5 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt=""
                    className="h-10 w-10 rounded-full bg-[var(--surface-muted)]"
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
      </section>

      {/* 10. Stats bar */}
      <section className="border-y border-theme bg-[var(--ink)] text-white">
        <div className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-14">
          {[
            { value: 'India · UAE · GCC', label: 'Launch markets' },
            { value: '3 apps', label: 'Connected stack' },
            { value: '1–3 wks', label: 'Typical go-live' },
            { value: '99.9%', label: 'Uptime target' },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-display text-2xl font-semibold md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-white/55">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">FAQ</p>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              Answers buyers ask before they buy
            </h2>
            <Link to="/faq" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              All FAQs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="divide-y divide-[var(--border)] border-y border-theme">
            {homeFaqs.map((faq) => (
              <div key={faq.id} className="py-6">
                <h3 className="font-display text-lg font-semibold text-ink">{faq.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-theme bg-surface">
        <div className="container-page flex flex-col gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div className="max-w-xl space-y-3">
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              Ready to run laundry ops under your brand?
            </h2>
            <p className="text-ink-muted">
              Book a demo or start a free trial conversation — no card required. We’ll map the right yearly license mix.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/contact?demo=1" size="lg">
              Book a demo
            </Button>
            <Button to="/pricing" variant="secondary" size="lg">
              View pricing
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

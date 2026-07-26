import { Link } from 'react-router-dom'
import { PageHeader } from '@/components/shared/PageHeader'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/Button'
import { launchSteps, platformStats, scalePillars } from '@/data/platform'

const beliefs = [
  {
    title: 'Laundry is not generic retail',
    copy: 'Slots, garment handling, rider handoffs, and plant status need product thinking — not a POS with laundry stickers.',
  },
  {
    title: 'Operators should own the customer',
    copy: 'Your brand on the app. Your pricing. Your relationship. Software should be infrastructure, not a marketplace tax.',
  },
  {
    title: 'Growth needs one operational truth',
    copy: 'When counters, riders, and HQ disagree on an order, the brand looks unreliable. Connected systems fix that.',
  },
  {
    title: 'Ambition deserves modular licensing',
    copy: 'Start with what you need. Add Delivery or deepen CMS when density and cities demand it — without rebuilding.',
  },
]

const timeline = [
  {
    title: 'Real apps, not pitch decks',
    copy: 'Cleanso is packaged from production Customer, Partner, and CMS/POS applications already shaped by laundry workflows.',
  },
  {
    title: 'Clear yearly licenses',
    copy: 'Customer, Delivery, and CMS + POS are priced simply so operators can plan expansion without surprise platform fees.',
  },
  {
    title: 'White-label by default',
    copy: 'Customers and staff experience your laundry identity. We power the stack underneath with updates and launch support.',
  },
  {
    title: 'Built to travel with you',
    copy: 'Whether the next step is a second counter or a new city, the same operating system scales under your brand.',
  },
]

export function About() {
  return (
    <>
      <SEO
        title="About — Cleanso Software"
        description="Cleanso builds white-label Customer, Delivery, and CMS + POS software for laundry brands that want to scale."
      />
      <PageHeader
        eyebrow="About"
        title="Software for laundry brands with a growth plan"
        description="We don’t wash clothes. We build the operating system laundry operators use to take orders, run riders, manage stores, and expand with their brand intact."
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Our story</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Born from real laundry applications
            </h2>
            <p className="leading-relaxed text-ink-muted md:text-lg">
              Cleanso packages a production-ready suite — customer booking, partner delivery with QR handoffs, and a
              CMS/POS control layer — into clear yearly software licenses for laundry and dry-cleaning businesses.
            </p>
            <p className="leading-relaxed text-ink-muted md:text-lg">
              Operators keep their brand. We provide the product, onboarding, and ongoing platform updates. That split is
              intentional: you compete on service and trust; we compete on operational software quality.
            </p>
            <p className="leading-relaxed text-ink-muted md:text-lg">
              The goal is simple — help ambitious laundry brands look and run like modern networks, whether they operate
              in one city today or many markets tomorrow.
            </p>
          </div>

          <dl className="divide-y divide-[var(--border)] border-y border-theme">
            {platformStats.map((stat) => (
              <div key={stat.label} className="flex items-baseline justify-between gap-4 py-5">
                <dt className="text-sm text-ink-muted">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-theme bg-surface section-pad">
        <div className="container-page space-y-14">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">What we believe</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Principles that shape the product
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
            {beliefs.map((item) => (
              <div key={item.title} className="border-t border-theme pt-6">
                <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted md:text-base">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page space-y-14">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">How we work</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              A company built around operator outcomes
            </h2>
          </div>

          <ol className="divide-y divide-[var(--border)] border-y border-theme">
            {timeline.map((item, index) => (
              <li key={item.title} className="grid gap-3 py-8 md:grid-cols-[5rem_1fr] md:gap-10">
                <p className="font-display text-sm font-semibold tracking-[0.16em] text-primary">
                  0{index + 1}
                </p>
                <div className="max-w-2xl">
                  <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">{item.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-theme bg-surface section-pad">
        <div className="container-page space-y-14">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Ambition</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Infrastructure for brands that want more than a local shopfront
            </h2>
            <p className="text-ink-muted md:text-lg">
              Cleanso is for operators planning serious growth — new counters, denser rider coverage, and expansion into
              new neighborhoods and markets — without rebuilding software every time.
            </p>
          </div>

          <div className="grid gap-10 border-t border-theme pt-10 md:grid-cols-3 md:gap-8">
            {scalePillars.map((pillar, index) => (
              <div key={pillar.title}>
                <p className="font-display text-sm font-semibold tracking-[0.16em] text-primary">0{index + 1}</p>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{pillar.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page space-y-14">
          <div className="max-w-xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Working with us</p>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">From first demo to go-live</h2>
          </div>

          <ol className="grid gap-10 border-t border-theme pt-10 md:grid-cols-4 md:gap-8">
            {launchSteps.map((step) => (
              <li key={step.step}>
                <p className="font-display text-sm font-semibold tracking-[0.16em] text-primary">{step.step}</p>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-theme bg-[var(--ink)] text-[var(--bg)]">
        <div className="container-page py-20 md:py-24">
          <div className="max-w-2xl space-y-6">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">See the platform with your workflow in mind</h2>
            <p className="text-base text-white/60 md:text-lg">
              Book a demo and we’ll map Customer, Delivery, and CMS + POS to how you take orders today — and where you
              want to be in the next year.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button to="/contact?demo=1" variant="light">
                Request demo
              </Button>
              <Link to="/products" className="text-sm font-medium text-white/55 hover:text-white">
                Explore products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { CustomizationSection } from '@/components/shared/CustomizationSection'
import { GoogleReviews } from '@/components/shared/GoogleReviews'
import { PageHeader } from '@/components/shared/PageHeader'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/Button'
import { launchSteps, platformStats, scalePillars } from '@/data/platform'
import { aboutSeoParagraphs, teamHighlights, teamMembers } from '@/data/seoContent'

const beliefs = [
  {
    title: 'Laundry is not generic retail',
    copy: 'Slots, garment handling, rider handoffs, and plant status need laundry management software — not a POS with laundry stickers.',
  },
  {
    title: 'Operators should own the customer',
    copy: 'Your branded laundry app. Your pricing. Your relationship. White-label software should be infrastructure, not a marketplace tax.',
  },
  {
    title: 'Growth needs one operational truth',
    copy: 'When counters, riders, and HQ disagree on an order, the brand looks unreliable. Connected dry cleaning software fixes that.',
  },
  {
    title: 'Customization without chaos',
    copy: 'Every laundry brand is different. We customize branding, catalogs, and workflows — then keep yearly licensing simple.',
  },
]

const timeline = [
  {
    title: 'Real apps, not pitch decks',
    copy: 'Cleanso is packaged from production Customer, Partner, and CMS/POS applications already shaped by laundry and dry-cleaning workflows.',
  },
  {
    title: 'Clear yearly licenses',
    copy: 'Customer, Delivery, and CMS + POS are priced simply so operators can plan expansion without surprise platform fees.',
  },
  {
    title: 'White-label by default',
    copy: 'Customers and staff experience your laundry identity. We power the stack underneath with updates, customization, and launch support.',
  },
  {
    title: 'A team obsessed with laundry ops',
    copy: 'Product, onboarding, consulting, and support focus only on laundry software — so you talk to people who understand plants, riders, and counters.',
  },
]

export function About() {
  return (
    <>
      <SEO
        title="About Cleanso — Best Laundry Software Team | Custom White-Label Apps"
        description="Meet the Cleanso team behind white-label laundry management software. Custom laundry apps, dry cleaning POS, Google-reviewed support for India, UAE, GCC, and global brands."
      />
      <PageHeader
        eyebrow="About Cleanso"
        title="The laundry software team behind white-label apps & POS"
        description="We don’t wash clothes. We build and customize laundry management software — Customer App, Delivery App, and CMS + POS — so dry cleaning brands scale with their name intact."
      />

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Our story</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Born from real laundry applications
            </h2>
            {aboutSeoParagraphs.map((para) => (
              <p key={para.slice(0, 24)} className="leading-relaxed text-ink-muted md:text-lg">
                {para}
              </p>
            ))}
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

      {/* Best team */}
      <section className="border-y border-theme bg-surface section-pad">
        <div className="container-page space-y-12">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Best team for laundry tech</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Product, onboarding, and support built for laundry operators
            </h2>
            <p className="text-sm leading-relaxed text-ink-muted md:text-base">
              Looking for the best team for laundry software customization and go-live? Cleanso specialists handle
              white-label branding, catalog setup, staff training, and ongoing product support — so your laundry business
              never talks to a generic IT helpdesk.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <article key={member.name} className="min-w-0 rounded-2xl border border-theme bg-page p-5">
                <p className="font-display text-lg font-semibold text-ink">{member.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{member.focus}</p>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-theme pt-8 lg:grid-cols-4">
            {teamHighlights.map((item) => (
              <div key={item.label} className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-subtle">{item.label}</p>
                <p className="mt-2 font-display text-base font-semibold text-ink sm:text-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page space-y-14">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">What we believe</p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Principles that shape our laundry software
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

      <CustomizationSection />

      <GoogleReviews limit={3} />

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
              Cleanso multi-store and franchise laundry software helps operators add counters, denser rider coverage, and
              new markets — without rebuilding custom software every time.
            </p>
          </div>

          <div className="grid gap-10 border-t border-theme pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
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

          <ol className="grid gap-10 border-t border-theme pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              Talk to the Cleanso laundry software team
            </h2>
            <p className="text-base text-white/60 md:text-lg">
              Book a demo for custom white-label setup, laundry POS configuration, or multi-store licensing — we’ll map
              Customer, Delivery, and CMS + POS to your workflow.
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

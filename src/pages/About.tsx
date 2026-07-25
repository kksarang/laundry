import { Cpu, HeartHandshake, Layers3, ShieldCheck } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { platformStats } from '@/data/platform'

const values = [
  {
    icon: Cpu,
    title: 'Product-first engineering',
    copy: 'Cleanso is built from real Customer, Partner, and CRM/POS apps — not a generic template.',
  },
  {
    icon: Layers3,
    title: 'Modular licenses',
    copy: 'Start with one app, then add Delivery or CMS + POS as your operation grows.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable go-lives',
    copy: 'Yearly licenses include updates, white-label setup guidance, and launch support.',
  },
  {
    icon: HeartHandshake,
    title: 'Your brand on top',
    copy: 'Customers and staff experience your laundry identity. We power the platform underneath.',
  },
]

export function About() {
  return (
    <>
      <SEO
        title="About — Cleanso Software"
        description="Cleanso builds premium white-label Customer, Delivery, and CMS + POS software for laundry businesses."
      />
      <PageHeader
        eyebrow="About"
        title="A software company for laundry operators"
        description="We don’t wash clothes. We build the premium operating system laundry brands use to take orders, run riders, and manage stores."
      />

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <Badge>Our story</Badge>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              Born from real laundry applications
            </h2>
            <p className="leading-relaxed text-ink-muted">
              Cleanso packages a production-ready suite — customer booking, partner delivery with QR handoffs, and a
              CMS/POS control layer — into clear yearly software licenses for laundry and dry-cleaning businesses.
            </p>
            <p className="leading-relaxed text-ink-muted">
              Operators keep their brand. We provide the product, onboarding, and ongoing platform updates.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {platformStats.map((stat) => (
              <div key={stat.label} className="rounded-[1.35rem] border border-theme bg-surface p-5 shadow-soft">
                <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-ink-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-theme bg-surface section-pad">
        <div className="container-page space-y-8">
          <h2 className="font-display text-3xl font-semibold text-ink">What we stand for</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-[1.35rem] border border-theme bg-page p-5">
                <value.icon className="mb-3 h-6 w-6 text-primary" />
                <h3 className="font-display text-xl font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{value.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 pt-10">
        <div className="container-page">
          <div className="rounded-[1.75rem] bg-[var(--primary)] px-6 py-10 text-center text-white md:px-12">
            <h2 className="font-display text-3xl font-semibold">See the platform live</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">
              Book a demo and we’ll map Customer, Delivery, and CMS + POS to your workflow.
            </p>
            <Button to="/contact?demo=1" variant="light" className="mt-6">
              Request demo
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

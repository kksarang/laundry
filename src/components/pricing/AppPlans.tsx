import { motion } from 'framer-motion'
import { Check, LayoutDashboard, Smartphone, Truck } from 'lucide-react'
import { appBundle, appPlans, planComparison } from '@/data/appPlans'
import { formatINR } from '@/lib/format'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const icons = {
  customer: Smartphone,
  delivery: Truck,
  cms: LayoutDashboard,
} as const

interface AppPlansProps {
  showComparison?: boolean
}

export function AppPlans({ showComparison = false }: AppPlansProps) {
  return (
    <section className="space-y-12">
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <Badge>Licensing</Badge>
        <h2 className="font-display text-3xl font-semibold text-ink md:text-5xl">
          Premium software. Clear yearly pricing.
        </h2>
        <p className="text-ink-muted md:text-lg">
          License each app on its own — or take the full connected platform for less than buying all three separately.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {appPlans.map((plan, index) => {
          const Icon = icons[plan.id]
          return (
            <motion.article
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08 }}
              className={`relative flex flex-col rounded-[1.6rem] border p-6 md:p-8 ${
                plan.popular
                  ? 'border-transparent bg-gradient-to-b from-[var(--accent-soft)] via-surface to-surface shadow-glow'
                  : 'border-theme bg-surface shadow-soft'
              }`}
            >
              {plan.popular && (
                <div className="absolute right-5 top-5">
                  <Badge tone="dark">Most popular</Badge>
                </div>
              )}

              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)] text-white">
                <Icon className="h-6 w-6" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{plan.tagline}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{plan.name}</h3>
              <div className="mt-4 flex items-end gap-2">
                <p className="font-display text-5xl font-bold tracking-tight text-ink">{formatINR(plan.price)}</p>
                <p className="pb-2 text-sm text-ink-muted">/ year</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{plan.description}</p>

              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-ink">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--primary-soft)] text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                to={`/contact?plan=${plan.id}`}
                variant={plan.popular ? 'primary' : 'secondary'}
                className="mt-8 w-full !rounded-xl"
              >
                {plan.cta}
              </Button>
            </motion.article>
          )
        })}
      </div>

      <div className="overflow-hidden rounded-[1.75rem] border border-theme bg-[var(--ink)] text-[var(--bg)]">
        <div className="grid gap-6 px-6 py-8 md:grid-cols-[1.2fr_auto] md:items-center md:px-10 md:py-10">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Best value</p>
            <h3 className="font-display text-3xl font-semibold md:text-4xl">{appBundle.name}</h3>
            <p className="text-sm text-white/70 md:text-base">{appBundle.note}</p>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex items-baseline gap-3">
              <span className="text-sm text-white/45 line-through">{formatINR(appBundle.originalPrice)}</span>
              <span className="font-display text-5xl font-bold">{formatINR(appBundle.price)}</span>
              <span className="text-sm text-white/70">/ year</span>
            </div>
            <Button to="/contact?plan=bundle" variant="light" className="!rounded-xl">
              Get the full platform
            </Button>
          </div>
        </div>
      </div>

      {showComparison && (
        <div className="overflow-x-auto rounded-[1.5rem] border border-theme bg-surface shadow-soft">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-theme bg-[var(--surface-muted)] text-ink-muted">
                <th className="px-5 py-4 font-medium">Capability</th>
                <th className="px-5 py-4 font-medium">Customer</th>
                <th className="px-5 py-4 font-medium">Delivery</th>
                <th className="px-5 py-4 font-medium">CMS + POS</th>
              </tr>
            </thead>
            <tbody>
              {planComparison.map((row) => (
                <tr key={row.feature} className="border-b border-theme last:border-0">
                  <td className="px-5 py-4 font-medium text-ink">{row.feature}</td>
                  {(['customer', 'delivery', 'cms'] as const).map((key) => (
                    <td key={key} className="px-5 py-4 text-ink-muted">
                      {row[key] ? <span className="font-semibold text-primary">Included</span> : '—'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

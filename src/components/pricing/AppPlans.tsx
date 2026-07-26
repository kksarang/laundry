import { motion } from 'framer-motion'
import { appBundle, appPlans, planComparison } from '@/data/appPlans'
import { formatINR } from '@/lib/format'
import { Button } from '@/components/ui/Button'

interface AppPlansProps {
  showComparison?: boolean
}

export function AppPlans({ showComparison = false }: AppPlansProps) {
  return (
    <section className="space-y-14">
      <div className="max-w-xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Licensing</p>
        <h2 className="font-display text-3xl font-semibold text-ink md:text-5xl">
          Clear yearly licenses.
        </h2>
        <p className="text-ink-muted md:text-lg">
          License each app alone, or take the connected platform for less than buying all three separately.
        </p>
      </div>

      <div className="divide-y divide-[var(--border)] border-y border-theme">
        {appPlans.map((plan, index) => (
          <motion.article
            key={plan.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.05 }}
            className="grid gap-6 py-8 lg:grid-cols-[1.1fr_0.9fr_auto] lg:items-start lg:gap-10"
          >
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl font-semibold text-ink">{plan.name}</h3>
                {plan.popular && (
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                    Most chosen
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                {plan.tagline}
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">{plan.description}</p>
            </div>

            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {plan.features.map((feature) => (
                <li key={feature} className="text-sm text-ink-muted">
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-start gap-4 lg:items-end lg:text-right">
              <div>
                <p className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  {formatINR(plan.price)}
                </p>
                <p className="mt-1 text-sm text-ink-muted">per year</p>
              </div>
              <Button to={`/contact?plan=${plan.id}`} variant={plan.popular ? 'primary' : 'secondary'} size="sm">
                {plan.cta}
              </Button>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="flex flex-col gap-6 border-t border-theme pt-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-lg space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Platform bundle</p>
          <h3 className="font-display text-2xl font-semibold text-ink md:text-3xl">{appBundle.name}</h3>
          <p className="text-sm text-ink-muted md:text-base">{appBundle.note}</p>
        </div>
        <div className="flex flex-wrap items-end gap-5">
          <div>
            <p className="text-sm text-ink-subtle line-through">{formatINR(appBundle.originalPrice)}</p>
            <p className="font-display text-4xl font-semibold tracking-tight text-ink">
              {formatINR(appBundle.price)}
              <span className="ml-2 text-base font-medium text-ink-muted">/ year</span>
            </p>
          </div>
          <Button to="/contact?plan=bundle">Get the full platform</Button>
        </div>
      </div>

      {showComparison && (
        <div className="overflow-x-auto border-y border-theme">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-theme text-ink-muted">
                <th className="px-0 py-4 pr-5 font-medium">Capability</th>
                <th className="px-5 py-4 font-medium">Customer</th>
                <th className="px-5 py-4 font-medium">Delivery</th>
                <th className="px-5 py-4 font-medium">CMS + POS</th>
              </tr>
            </thead>
            <tbody>
              {planComparison.map((row) => (
                <tr key={row.feature} className="border-b border-theme last:border-0">
                  <td className="px-0 py-4 pr-5 font-medium text-ink">{row.feature}</td>
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

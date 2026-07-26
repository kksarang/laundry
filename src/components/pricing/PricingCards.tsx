import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'
import { appPlans } from '@/data/appPlans'
import { formatINR } from '@/lib/format'
import { Button } from '@/components/ui/Button'

const ease = [0.22, 1, 0.36, 1] as const

/** Display order: entry → mid → popular */
const orderedPlans = [...appPlans].sort((a, b) => a.price - b.price)

export function PricingCards() {
  return (
    <div className="grid w-full max-w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {orderedPlans.map((plan, index) => (
        <motion.article
          key={plan.id}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: index * 0.07, ease }}
          className={`relative flex min-w-0 flex-col rounded-[1.5rem] border bg-surface p-5 shadow-[0_12px_40px_rgba(12,50,46,0.06)] sm:p-6 md:p-7 ${
            plan.popular
              ? 'border-[color-mix(in_oklab,var(--primary)_40%,var(--border))] ring-1 ring-[color-mix(in_oklab,var(--primary)_18%,transparent)]'
              : 'border-theme'
          }`}
        >
          {plan.popular && (
            <span className="absolute right-4 top-4 rounded-full bg-[var(--primary-soft)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary sm:right-5 sm:top-5">
              Most chosen
            </span>
          )}

          <div
            className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.accent} shadow-sm`}
            aria-hidden
          >
            <span className="h-6 w-6 rounded-full bg-white/35 blur-[1px]" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">{plan.audience}</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{plan.name}</h3>
          <p className="mt-1 text-sm text-ink-muted">{plan.tagline}</p>

          <div className="mt-5 flex items-end gap-1.5">
            <p className="font-display text-4xl font-semibold tracking-tight text-ink md:text-[2.75rem]">
              {formatINR(plan.price)}
            </p>
            <p className="pb-1.5 text-sm text-ink-muted">/ year</p>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-ink-muted">{plan.description}</p>

          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-subtle">
            Everything included ({plan.fullFeatures.length})
          </p>
          <ul className="mt-3 max-h-none flex-1 space-y-2.5 pr-1 md:max-h-[22rem] md:overflow-y-auto">
            {plan.fullFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-ink">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.25} />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-8 space-y-3 border-t border-theme pt-6">
            <Button
              to={`/contact?plan=${plan.id}`}
              variant={plan.popular ? 'primary' : 'secondary'}
              className="w-full"
            >
              {plan.cta}
            </Button>
            <Link
              to={`/pricing/${plan.id}`}
              className="flex w-full items-center justify-center text-sm font-semibold text-primary hover:opacity-80"
            >
              Full plan explanation →
            </Link>
          </div>
        </motion.article>
      ))}
    </div>
  )
}

import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PlanCompareTable } from '@/components/pricing/PlanCompareTable'
import { PriceValueTable } from '@/components/pricing/PriceValueTable'
import { PricingCards } from '@/components/pricing/PricingCards'
import { Button } from '@/components/ui/Button'
import { appBundle } from '@/data/appPlans'
import { formatINR } from '@/lib/format'

interface AppPlansProps {
  showComparison?: boolean
  showHeader?: boolean
}

export function AppPlans({ showComparison = false, showHeader = true }: AppPlansProps) {
  return (
    <section className="space-y-12">
      {showHeader && (
        <div className="max-w-xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Licensing</p>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-5xl">Choose your Cleanso plan</h2>
          <p className="text-ink-muted md:text-lg">
            Flat yearly licenses — CMS + POS, Delivery, Customer App, or the full connected platform.
          </p>
        </div>
      )}

      <PriceValueTable />

      <PricingCards />

      <div className="flex flex-col gap-5 rounded-[1.5rem] border border-theme bg-[var(--ink)] px-6 py-8 text-white md:flex-row md:items-center md:justify-between md:px-10">
        <div className="max-w-lg space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">Best value</p>
          <h3 className="font-display text-2xl font-semibold md:text-3xl">{appBundle.name}</h3>
          <p className="text-sm text-white/65">{appBundle.note}</p>
          <Link to="/pricing/bundle" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
            Bundle details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <p className="text-sm text-white/40 line-through">{formatINR(appBundle.originalPrice)}</p>
            <p className="font-display text-4xl font-semibold">
              {formatINR(appBundle.price)}
              <span className="ml-2 text-base font-medium text-white/60">/ year</span>
            </p>
          </div>
          <Button to="/contact?plan=bundle" variant="light">
            {appBundle.cta}
          </Button>
        </div>
      </div>

      {showComparison && <PlanCompareTable />}
    </section>
  )
}

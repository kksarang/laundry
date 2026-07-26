import { Check, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { appBundle, appPlans, planComparison, type ComparisonCell } from '@/data/appPlans'
import { formatINR } from '@/lib/format'
import { Button } from '@/components/ui/Button'

const columns = [
  { id: 'cms' as const, name: 'CMS + POS', price: appPlans.find((p) => p.id === 'cms')!.price },
  { id: 'delivery' as const, name: 'Delivery', price: appPlans.find((p) => p.id === 'delivery')!.price },
  { id: 'customer' as const, name: 'Customer', price: appPlans.find((p) => p.id === 'customer')!.price },
  { id: 'bundle' as const, name: 'Full bundle', price: appBundle.price },
]

function Cell({ value }: { value: ComparisonCell }) {
  if (value === true) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color-mix(in_oklab,#1f8a70_14%,transparent)] text-[#1f8a70]">
        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color-mix(in_oklab,#c23b3b_10%,transparent)] text-[#c23b3b]">
        <X className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    )
  }
  return <span className="text-xs font-medium text-ink-muted">{value}</span>
}

export function PlanCompareTable() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-theme bg-surface shadow-[0_12px_40px_rgba(12,50,46,0.05)]">
      <div className="border-b border-theme px-5 py-6 md:px-8">
        <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">Compare all plans</h2>
        <p className="mt-2 text-sm text-ink-muted">See exactly what each yearly license includes.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[720px] w-full text-left text-sm">
          <thead>
            <tr className="border-b border-theme">
              <th className="sticky left-0 z-10 bg-surface px-5 py-5 font-medium text-ink-muted md:px-8">
                Features
              </th>
              {columns.map((col) => (
                <th key={col.id} className="min-w-[9.5rem] px-4 py-5 text-center">
                  <p className="font-display text-base font-semibold text-ink">{col.name}</p>
                  <p className="mt-1 text-xs text-ink-muted">{formatINR(col.price)}/yr</p>
                  <Button
                    to={col.id === 'bundle' ? '/contact?plan=bundle' : `/contact?plan=${col.id}`}
                    size="sm"
                    variant={col.id === 'customer' || col.id === 'bundle' ? 'dark' : 'secondary'}
                    className="mt-3 !px-3"
                  >
                    Get started
                  </Button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {planComparison.map((row) => (
              <tr key={row.feature} className="border-b border-theme last:border-0">
                <td className="sticky left-0 z-10 bg-surface px-5 py-4 font-medium text-ink md:px-8">
                  {row.feature}
                </td>
                {columns.map((col) => (
                  <td key={col.id} className="px-4 py-4 text-center">
                    <div className="flex justify-center">
                      <Cell value={row[col.id]} />
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-theme px-5 py-4 text-center text-sm text-ink-muted md:px-8">
        Need a walkthrough?{' '}
        <Link to="/contact?demo=1" className="font-semibold text-primary">
          Book a demo
        </Link>
      </div>
    </div>
  )
}

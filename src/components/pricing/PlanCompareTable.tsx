import { Fragment, useState } from 'react'
import { Check, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { appBundle, appPlans, planComparison, type ComparisonCell } from '@/data/appPlans'
import { formatINR } from '@/lib/format'
import { Button } from '@/components/ui/Button'

const columns = [
  { id: 'cms' as const, name: 'CMS + POS', short: 'CMS', price: appPlans.find((p) => p.id === 'cms')!.price },
  { id: 'delivery' as const, name: 'Delivery', short: 'Delivery', price: appPlans.find((p) => p.id === 'delivery')!.price },
  { id: 'customer' as const, name: 'Customer', short: 'Customer', price: appPlans.find((p) => p.id === 'customer')!.price },
  { id: 'bundle' as const, name: 'Full bundle', short: 'Bundle', price: appBundle.price },
]

type ColumnId = (typeof columns)[number]['id']

function Cell({ value }: { value: ComparisonCell }) {
  if (value === true) {
    return (
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color-mix(in_oklab,#1f8a70_14%,transparent)] text-[#1f8a70]"
        title="Included"
      >
        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    )
  }
  if (value === false) {
    return (
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[color-mix(in_oklab,#c23b3b_10%,transparent)] text-[#c23b3b]"
        title="Not included"
      >
        <X className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    )
  }
  return <span className="text-xs font-semibold text-ink-muted">{value}</span>
}

function CellInline({ value }: { value: ComparisonCell }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1f8a70]">
        <Check className="h-4 w-4 shrink-0" strokeWidth={2.5} /> Included
      </span>
    )
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#c23b3b]/80">
        <X className="h-4 w-4 shrink-0" strokeWidth={2.5} /> Not included
      </span>
    )
  }
  return <span className="text-sm font-semibold text-ink-muted">{value}</span>
}

/** Group rows by category for scanability */
function groupedRows() {
  const groups: { category: string; rows: typeof planComparison }[] = []
  for (const row of planComparison) {
    const last = groups[groups.length - 1]
    if (!last || last.category !== row.category) {
      groups.push({ category: row.category, rows: [row] })
    } else {
      last.rows.push(row)
    }
  }
  return groups
}

export function PlanCompareTable() {
  const groups = groupedRows()
  const [activePlan, setActivePlan] = useState<ColumnId>('customer')
  const activeCol = columns.find((c) => c.id === activePlan)!

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-theme bg-surface shadow-[0_12px_40px_rgba(12,50,46,0.05)]">
      <div className="border-b border-theme px-4 py-5 sm:px-5 sm:py-6 md:px-8 md:py-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">Full feature list</p>
        <h2 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl md:text-4xl">Compare all plans</h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-muted md:text-base">
          Green check = included · Red X = not in that license · Bundle gets everything connected.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-ink-muted">
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color-mix(in_oklab,#1f8a70_14%,transparent)] text-[#1f8a70]">
              <Check className="h-3 w-3" strokeWidth={2.5} />
            </span>
            Included
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[color-mix(in_oklab,#c23b3b_10%,transparent)] text-[#c23b3b]">
              <X className="h-3 w-3" strokeWidth={2.5} />
            </span>
            Not included
          </span>
        </div>
      </div>

      {/* Mobile / tablet: plan tabs + stacked features */}
      <div className="lg:hidden">
        <div className="flex gap-2 overflow-x-auto border-b border-theme px-4 py-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {columns.map((col) => {
            const selected = col.id === activePlan
            return (
              <button
                key={col.id}
                type="button"
                onClick={() => setActivePlan(col.id)}
                className={`shrink-0 rounded-xl px-3.5 py-2.5 text-left transition-colors ${
                  selected
                    ? 'bg-[var(--primary-soft)] text-primary ring-1 ring-[color-mix(in_oklab,var(--primary)_28%,transparent)]'
                    : 'bg-[var(--surface-muted)] text-ink-muted hover:text-ink'
                }`}
              >
                <p className="text-sm font-semibold">{col.short}</p>
                <p className="mt-0.5 text-[11px] opacity-80">{formatINR(col.price)}/yr</p>
              </button>
            )
          })}
        </div>

        <div className="space-y-6 px-4 py-5 sm:px-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-ink">{activeCol.name}</p>
              <p className="text-sm text-ink-muted">{formatINR(activeCol.price)} / year</p>
            </div>
            <Button
              to={activeCol.id === 'bundle' ? '/contact?plan=bundle' : `/contact?plan=${activeCol.id}`}
              size="sm"
              variant={activeCol.id === 'customer' || activeCol.id === 'bundle' ? 'dark' : 'secondary'}
              className="w-full sm:w-auto"
            >
              Get started
            </Button>
          </div>

          {groups.map((group) => (
            <div key={group.category}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">{group.category}</p>
              <ul className="divide-y divide-[var(--border)] rounded-2xl border border-theme">
                {group.rows.map((row) => (
                  <li key={row.feature} className="flex items-start justify-between gap-3 px-3.5 py-3">
                    <span className="min-w-0 text-sm font-medium text-ink">{row.feature}</span>
                    <span className="shrink-0">
                      <CellInline value={row[activePlan]} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-theme bg-[var(--surface-muted)]/50">
              <th className="sticky left-0 z-10 bg-[color-mix(in_oklab,var(--surface-muted)_50%,var(--surface))] px-5 py-5 font-medium text-ink-muted md:px-8">
                Feature
              </th>
              {columns.map((col) => (
                <th key={col.id} className="min-w-[8.5rem] px-3 py-5 text-center md:min-w-[9.5rem]">
                  <p className="font-display text-sm font-semibold text-ink md:text-base">{col.name}</p>
                  <p className="mt-1 text-xs text-ink-muted">{formatINR(col.price)}/yr</p>
                  <Button
                    to={col.id === 'bundle' ? '/contact?plan=bundle' : `/contact?plan=${col.id}`}
                    size="sm"
                    variant={col.id === 'customer' || col.id === 'bundle' ? 'dark' : 'secondary'}
                    className="mt-3 !px-2.5"
                  >
                    Get started
                  </Button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <Fragment key={group.category}>
                <tr className="border-b border-theme bg-[var(--primary-soft)]/35">
                  <td
                    colSpan={5}
                    className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-primary md:px-8"
                  >
                    {group.category}
                  </td>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.feature} className="border-b border-theme last:border-0">
                    <td className="sticky left-0 z-10 bg-surface px-5 py-3.5 font-medium text-ink md:px-8">
                      {row.feature}
                    </td>
                    {columns.map((col) => (
                      <td key={col.id} className="px-3 py-3.5 text-center">
                        <div className="flex justify-center">
                          <Cell value={row[col.id]} />
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-theme px-4 py-4 text-center text-sm text-ink-muted sm:px-5 md:px-8">
        Still unsure?{' '}
        <Link to="/contact?demo=1" className="font-semibold text-primary">
          Book a demo
        </Link>{' '}
        — we’ll recommend the right mix for your stores and riders.
      </div>
    </div>
  )
}

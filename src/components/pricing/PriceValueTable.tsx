import { Link } from 'react-router-dom'
import { priceValueRows } from '@/data/appPlans'
import { formatINR } from '@/lib/format'
import { Button } from '@/components/ui/Button'

export function PriceValueTable() {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-theme bg-surface shadow-[0_12px_40px_rgba(12,50,46,0.05)]">
      <div className="border-b border-theme px-5 py-6 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">At a glance</p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
          What you pay · what we give · your advantage
        </h2>
        <p className="mt-2 text-sm text-ink-muted">
          One yearly payment per license. No per-order fees as your volume grows.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[720px] w-full text-left text-sm">
          <thead>
            <tr className="border-b border-theme bg-[var(--surface-muted)]/40">
              <th className="px-5 py-4 font-semibold text-ink md:px-8">Plan</th>
              <th className="px-4 py-4 font-semibold text-ink">You pay / year</th>
              <th className="px-4 py-4 font-semibold text-ink">What we give</th>
              <th className="px-4 py-4 font-semibold text-ink">Advantage</th>
              <th className="px-4 py-4 pr-5 text-right font-semibold text-ink md:pr-8">Action</th>
            </tr>
          </thead>
          <tbody>
            {priceValueRows.map((row) => (
              <tr
                key={row.id}
                className={`border-b border-theme last:border-0 ${
                  'bestValue' in row && row.bestValue ? 'bg-[var(--primary-soft)]/40' : ''
                }`}
              >
                <td className="px-5 py-5 align-top md:px-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link to={row.href} className="font-display text-base font-semibold text-ink hover:text-primary">
                      {row.plan}
                    </Link>
                    {'popular' in row && row.popular && (
                      <span className="rounded-full bg-[var(--primary-soft)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-primary">
                        Popular
                      </span>
                    )}
                    {'bestValue' in row && row.bestValue && (
                      <span className="rounded-full bg-[var(--ink)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                        Best value
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-5 align-top whitespace-nowrap">
                  {'originalPay' in row && row.originalPay && (
                    <p className="text-xs text-ink-subtle line-through">{formatINR(row.originalPay)}</p>
                  )}
                  <p className="font-display text-lg font-semibold text-ink">{formatINR(row.pay)}</p>
                  <p className="text-xs text-ink-muted">flat / year</p>
                </td>
                <td className="max-w-xs px-4 py-5 align-top text-ink-muted">{row.youGet}</td>
                <td className="max-w-xs px-4 py-5 align-top font-medium text-ink">{row.advantage}</td>
                <td className="px-4 py-5 pr-5 text-right align-top md:pr-8">
                  <Button
                    to={`/contact?plan=${row.id}`}
                    size="sm"
                    variant={'bestValue' in row && row.bestValue ? 'primary' : 'secondary'}
                  >
                    {row.cta}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="space-y-3 border-t border-theme p-4 md:hidden">
        {priceValueRows.map((row) => (
          <div
            key={`m-${row.id}`}
            className={`rounded-2xl border border-theme p-4 ${
              'bestValue' in row && row.bestValue ? 'bg-[var(--primary-soft)]/40' : 'bg-page'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-lg font-semibold text-ink">{row.plan}</p>
                <p className="mt-1 font-display text-xl font-semibold text-primary">{formatINR(row.pay)}/yr</p>
              </div>
              <Button to={`/contact?plan=${row.id}`} size="sm">
                {row.cta}
              </Button>
            </div>
            <p className="mt-3 text-sm text-ink-muted">
              <span className="font-semibold text-ink">What we give: </span>
              {row.youGet}
            </p>
            <p className="mt-2 text-sm text-ink">
              <span className="font-semibold">Advantage: </span>
              {row.advantage}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

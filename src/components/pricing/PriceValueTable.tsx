import { Link } from 'react-router-dom'
import { priceValueRows } from '@/data/appPlans'
import { formatINR } from '@/lib/format'
import { Button } from '@/components/ui/Button'

export function PriceValueTable() {
  return (
    <div className="w-full max-w-full overflow-hidden rounded-[1.5rem] border border-theme bg-surface shadow-[0_12px_40px_rgba(12,50,46,0.05)]">
      <div className="border-b border-theme px-4 py-5 sm:px-6 sm:py-6 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">At a glance</p>
        <h2 className="mt-2 font-display text-xl font-semibold text-ink sm:text-2xl md:text-3xl">
          What you pay · what we give · your advantage
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-muted">
          One yearly payment per license. No per-order fees as your volume grows.
        </p>
      </div>

      {/* Always card grid — never a wide table that forces page scroll */}
      <div className="grid gap-3 p-3 sm:gap-4 sm:p-4 md:grid-cols-2 md:p-6">
        {priceValueRows.map((row) => {
          const isBest = 'bestValue' in row && row.bestValue
          const isPopular = 'popular' in row && row.popular

          return (
            <article
              key={row.id}
              className={`flex min-w-0 flex-col rounded-2xl border p-4 sm:p-5 ${
                isBest
                  ? 'border-[color-mix(in_oklab,var(--primary)_35%,var(--border))] bg-[var(--primary-soft)]/40'
                  : 'border-theme bg-page'
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      to={row.href}
                      className="font-display text-lg font-semibold text-ink hover:text-primary"
                    >
                      {row.plan}
                    </Link>
                    {isPopular && (
                      <span className="rounded-full bg-[var(--primary-soft)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-primary">
                        Popular
                      </span>
                    )}
                    {isBest && (
                      <span className="rounded-full bg-[var(--ink)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                        Best value
                      </span>
                    )}
                  </div>
                  <div className="mt-2 flex flex-wrap items-baseline gap-2">
                    {'originalPay' in row && row.originalPay && (
                      <span className="text-sm text-ink-subtle line-through">{formatINR(row.originalPay)}</span>
                    )}
                    <p className="font-display text-2xl font-semibold text-ink">{formatINR(row.pay)}</p>
                    <span className="text-sm text-ink-muted">/ year</span>
                  </div>
                </div>
              </div>

              <dl className="mt-4 space-y-3 border-t border-theme pt-4 text-sm">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-subtle">
                    What we give
                  </dt>
                  <dd className="mt-1 leading-relaxed text-ink-muted">{row.youGet}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-subtle">
                    Advantage
                  </dt>
                  <dd className="mt-1 font-medium leading-relaxed text-ink">{row.advantage}</dd>
                </div>
              </dl>

              <div className="mt-5">
                <Button
                  to={`/contact?plan=${row.id}`}
                  size="sm"
                  variant={isBest ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {row.cta}
                </Button>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

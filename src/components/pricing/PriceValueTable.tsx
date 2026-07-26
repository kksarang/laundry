import { Link } from 'react-router-dom'
import { priceValueRows } from '@/data/appPlans'
import { formatINR } from '@/lib/format'
import { Button } from '@/components/ui/Button'

export function PriceValueTable() {
  return (
    <section className="w-full min-w-0 max-w-full">
      <div className="mb-5 space-y-2 sm:mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">At a glance</p>
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          What you pay · what we give · your advantage
        </h2>
        <p className="max-w-2xl text-sm text-ink-muted sm:text-base">
          One yearly payment per license. No per-order fees as your volume grows.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        {priceValueRows.map((row) => {
          const isBest = 'bestValue' in row && Boolean(row.bestValue)
          const isPopular = 'popular' in row && Boolean(row.popular)

          return (
            <article
              key={row.id}
              className={`flex min-w-0 flex-col rounded-[1.35rem] border p-4 sm:p-5 ${
                isBest
                  ? 'border-[color-mix(in_oklab,var(--primary)_40%,var(--border))] bg-[var(--primary-soft)]/50'
                  : 'border-theme bg-surface'
              }`}
            >
              <header className="flex min-w-0 flex-col gap-3 border-b border-theme pb-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      to={row.href}
                      className="font-display text-lg font-semibold text-ink hover:text-primary sm:text-xl"
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
                  <p className="mt-2 flex flex-wrap items-baseline gap-2">
                    {'originalPay' in row && row.originalPay ? (
                      <span className="text-sm text-ink-subtle line-through">{formatINR(row.originalPay)}</span>
                    ) : null}
                    <span className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                      {formatINR(row.pay)}
                    </span>
                    <span className="text-sm text-ink-muted">/ year</span>
                  </p>
                </div>
              </header>

              <div className="grid flex-1 gap-4 py-4">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-subtle">
                    What we give
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed break-words text-ink-muted">{row.youGet}</p>
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-subtle">
                    Advantage
                  </p>
                  <p className="mt-1.5 text-sm font-medium leading-relaxed break-words text-ink">{row.advantage}</p>
                </div>
              </div>

              <Button
                to={`/contact?plan=${row.id}`}
                size="md"
                variant={isBest ? 'primary' : 'secondary'}
                className="mt-auto w-full !shadow-none"
              >
                {row.cta}
              </Button>
            </article>
          )
        })}
      </div>
    </section>
  )
}

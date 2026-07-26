import { Star } from 'lucide-react'
import { googleReviews, googleReviewSummary } from '@/data/seoContent'

function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating)
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < full ? 'fill-[#fbbc04] text-[#fbbc04]' : 'text-ink-subtle'}`}
        />
      ))}
    </div>
  )
}

export function GoogleReviews({ limit }: { limit?: number }) {
  const items = limit ? googleReviews.slice(0, limit) : googleReviews

  return (
    <section className="border-y border-theme bg-surface section-pad">
      <div className="container-page space-y-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
              {googleReviewSummary.label}
            </p>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              Trusted laundry software — rated by operators on Google
            </h2>
            <p className="text-sm leading-relaxed text-ink-muted md:text-base">{googleReviewSummary.blurb}</p>
          </div>
          <div className="shrink-0 rounded-2xl border border-theme bg-page px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                <span className="font-display text-lg font-bold text-[#4285f4]">G</span>
              </div>
              <div>
                <p className="font-display text-2xl font-semibold text-ink">{googleReviewSummary.rating}</p>
                <Stars rating={googleReviewSummary.rating} />
                <p className="mt-1 text-xs text-ink-muted">{googleReviewSummary.count}+ Google reviews</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((review) => (
            <article key={review.id} className="flex min-w-0 flex-col rounded-2xl border border-theme bg-page p-5">
              <div className="flex items-center justify-between gap-3">
                <Stars rating={review.rating} />
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-subtle">
                  Google
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink">“{review.quote}”</p>
              <footer className="mt-4 border-t border-theme pt-4">
                <p className="font-semibold text-ink">{review.author}</p>
                <p className="text-xs text-ink-muted">{review.role}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

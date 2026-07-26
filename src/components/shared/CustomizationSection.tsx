import { Link } from 'react-router-dom'
import { ArrowRight, Palette } from 'lucide-react'
import { customizationFeatures } from '@/data/seoContent'
import { Button } from '@/components/ui/Button'

export function CustomizationSection() {
  return (
    <section className="section-pad">
      <div className="container-page space-y-12">
        <div className="max-w-2xl space-y-4">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">
            <Palette className="h-3.5 w-3.5 text-primary" />
            Software customization
          </p>
          <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
            Custom laundry software — white-label, workflows, and multi-store setup
          </h2>
          <p className="text-sm leading-relaxed text-ink-muted md:text-base">
            Cleanso laundry management software is built to be customized: branded laundry apps, service catalogs, rider
            zones, laundry POS configuration, and franchise-ready roles — so dry cleaning and wash-and-fold brands go
            live under their own identity.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {customizationFeatures.map((item) => (
            <article key={item.title} className="min-w-0 rounded-2xl border border-theme bg-surface p-5 md:p-6">
              <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button to="/contact?plan=custom" size="lg" className="w-full sm:w-auto">
            Talk customization
          </Button>
          <Link
            to="/faq"
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary"
          >
            Customization FAQs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

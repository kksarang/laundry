import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SEO } from '@/components/shared/SEO'
import { AccordionItem } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { faqs, type FaqCategory } from '@/data/faqs'

const categories: Array<'All' | FaqCategory> = [
  'All',
  'Product',
  'Pricing & Licensing',
  'Onboarding',
  'Customization',
  'Support',
  'Technical',
]

export function FAQ() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<(typeof categories)[number]>('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return faqs.filter((faq) => {
      const catOk = category === 'All' || faq.category === category
      const textOk =
        !q ||
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q) ||
        faq.category.toLowerCase().includes(q)
      return catOk && textOk
    })
  }, [query, category])

  return (
    <>
      <SEO
        title="Laundry Software FAQ — Customization, Pricing, White-Label | Cleanso"
        description="FAQ on laundry management software, white-label laundry apps, custom laundry software, dry cleaning POS, multi-store setup, pricing, and Cleanso team support."
      />
      <PageHeader
        eyebrow="FAQ"
        title="Software questions, clear answers"
        description="Licensing, onboarding, and product details for laundry businesses evaluating Cleanso."
      />

      <section className="section-pad">
        <div className="container-page space-y-8">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-subtle" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs…"
              className="w-full rounded-xl border border-theme bg-surface py-3 pl-11 pr-4 outline-none focus:border-[var(--primary)]"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`rounded-xl px-3 py-1.5 text-sm ${
                  category === cat ? 'bg-[var(--primary)] text-white' : 'bg-[var(--surface-muted)] text-ink-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="rounded-[var(--radius-xl)] border border-theme bg-surface px-5 md:px-8">
            {filtered.length === 0 ? (
              <p className="py-10 text-center text-ink-muted">No FAQs match that search.</p>
            ) : (
              filtered.map((faq, index) => (
                <AccordionItem key={faq.id} title={faq.question} defaultOpen={index === 0}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">{faq.category}</p>
                  {faq.answer}
                </AccordionItem>
              ))
            )}
          </div>

          <div className="rounded-[var(--radius-xl)] bg-[var(--primary-soft)] px-6 py-8 text-center">
            <h2 className="font-display text-2xl font-semibold text-ink">Still deciding?</h2>
            <p className="mt-2 text-ink-muted">Request a demo and we’ll recommend the right app mix.</p>
            <Button to="/contact?demo=1" className="mt-5 !rounded-xl">
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

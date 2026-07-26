import { Link } from 'react-router-dom'
import { SEO } from '@/components/shared/SEO'
import { PageHeader } from '@/components/shared/PageHeader'
import { ProductIcon } from '@/components/shared/ProductIcon'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { products } from '@/data/products'

export function Products() {
  return (
    <>
      <SEO
        title="Products — Cleanso Platform"
        description="Customer App, Delivery App, CMS + POS, offers, and white-label branding for laundry businesses."
      />
      <PageHeader
        eyebrow="Products"
        title="A connected suite for laundry brands"
        description="Every product maps to real modules from the Cleanso customer, partner, and CRM/POS applications."
        action={
          <Button to="/pricing" variant="secondary" className="!rounded-xl">
            See licenses
          </Button>
        }
      />

      <section className="section-pad">
        <div className="container-page space-y-8">
          {products.map((product) => (
            <article
              key={product.id}
              id={product.id}
              className="scroll-mt-28 overflow-hidden rounded-[1.75rem] border border-theme bg-surface shadow-soft"
            >
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-5 p-4 sm:p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--primary)] text-white">
                      <ProductIcon name={product.icon} className="h-7 w-7" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">
                        {product.audience}
                      </p>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">{product.name}</h2>
                        {product.popular && <Badge>Most popular</Badge>}
                      </div>
                    </div>
                  </div>

                  <p className="max-w-2xl leading-relaxed text-ink-muted">{product.description}</p>

                  <ul className="grid gap-2 sm:grid-cols-2">
                    {product.highlights.map((item) => (
                      <li key={item} className="text-sm text-ink">
                        <span className="mr-2 text-primary">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-between border-t border-theme bg-[var(--surface-muted)]/60 p-4 sm:p-6 md:p-8 lg:border-l lg:border-t-0">
                  <div>
                    <p className="text-sm text-ink-muted">Modules included</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {product.modules.map((module) => (
                        <span
                          key={module}
                          className="rounded-lg border border-theme bg-surface px-3 py-1.5 text-xs font-medium text-ink"
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    <p className="font-display text-3xl font-bold text-primary">{product.priceLabel}</p>
                    <Button to={`/contact?plan=${product.id}&demo=1`} className="w-full !rounded-xl sm:w-auto">
                      Request this product
                    </Button>
                    <Link to="/pricing" className="block text-sm font-medium text-primary">
                      Compare yearly plans →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-theme bg-surface section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <div className="max-w-xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">How to choose</p>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl">
              Most brands start with Customer + CMS
            </h2>
            <p className="text-ink-muted md:text-lg">
              Launch branded booking and a real control layer first. Add Delivery when rider density justifies a
              dedicated fulfillment app — or take the full platform bundle from day one.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/contact?demo=1">Request a product walkthrough</Button>
            <Button to="/pricing" variant="secondary">
              Compare yearly licenses
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

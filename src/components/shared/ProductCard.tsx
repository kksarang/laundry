import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '@/data/products'
import { ProductIcon } from '@/components/shared/ProductIcon'
import { Badge } from '@/components/ui/Badge'

interface ProductCardProps {
  product: Product
  featured?: boolean
  className?: string
}

export function ProductCard({ product, featured = false, className = '' }: ProductCardProps) {
  return (
    <Link
      to={`/products#${product.id}`}
      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.4rem] border border-theme bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow ${
        featured ? 'md:col-span-2 md:min-h-[240px] md:bg-gradient-to-br md:from-surface md:via-surface md:to-[var(--primary-soft)]' : ''
      } ${className}`}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--primary-soft)] opacity-60 transition-transform duration-500 group-hover:scale-125" />
      <div className="relative space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-[0_12px_30px_color-mix(in_oklab,var(--primary)_30%,transparent)]">
            <ProductIcon name={product.icon} />
          </div>
          {product.popular && <Badge>Most popular</Badge>}
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">{product.audience}</p>
          <h3 className="font-display text-2xl font-semibold text-ink">{product.name}</h3>
          <p className="max-w-md text-sm leading-relaxed text-ink-muted">{product.shortDescription}</p>
        </div>
        {featured && (
          <div className="flex flex-wrap gap-2 pt-1">
            {product.modules.slice(0, 4).map((module) => (
              <span
                key={module}
                className="rounded-lg border border-theme bg-surface/80 px-2.5 py-1 text-xs text-ink-muted"
              >
                {module}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-theme/80 pt-4">
        <p className="font-display text-lg font-semibold text-primary">{product.priceLabel}</p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
          Explore <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}

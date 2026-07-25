import { Link } from 'react-router-dom'
import { Logo } from '@/components/layout/Logo'

const productLinks = [
  { to: '/products', label: 'Platform overview' },
  { to: '/products#customer', label: 'Customer App' },
  { to: '/products#delivery', label: 'Delivery App' },
  { to: '/products#cms', label: 'CMS + POS' },
  { to: '/pricing', label: 'Licensing' },
]

const companyLinks = [
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

const resourceLinks = [
  { to: '/pricing', label: 'Compare plans' },
  { to: '/contact?demo=1', label: 'Book a demo' },
  { to: '/faq', label: 'Onboarding help' },
  { to: '/blog', label: 'Product notes' },
]

export function Footer() {
  return (
    <footer className="mt-10 border-t border-theme bg-surface">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:py-14">
        <div className="space-y-3">
          <Logo compact />
          <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
            Premium laundry operating system — bookings, riders, POS, and HQ control in one stack.
          </p>
          <div className="space-y-1 text-sm text-ink-muted">
            <a href="mailto:hello@cleanso.in" className="block hover:text-primary">
              hello@cleanso.in
            </a>
            <a href="tel:+919876543210" className="block hover:text-primary">
              +91 98765 43210
            </a>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">Product</p>
          <ul className="space-y-2">
            {productLinks.map((link) => (
              <li key={link.to + link.label}>
                <Link to={link.to} className="text-sm text-ink-muted transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">Company</p>
          <ul className="space-y-2">
            {companyLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-ink-muted transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">Resources</p>
          <ul className="space-y-2">
            {resourceLinks.map((link) => (
              <li key={link.to + link.label}>
                <Link to={link.to} className="text-sm text-ink-muted transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-theme">
        <div className="container-page flex flex-col gap-2 py-4 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cleanso Software</p>
          <div className="flex gap-4">
            <Link to="/faq" className="hover:text-primary">
              Privacy
            </Link>
            <Link to="/faq" className="hover:text-primary">
              Terms
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

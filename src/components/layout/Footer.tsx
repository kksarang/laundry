import { Link } from 'react-router-dom'
import { Logo } from '@/components/layout/Logo'

const productLinks = [
  { to: '/products', label: 'Platform overview' },
  { to: '/products#customer', label: 'Customer App' },
  { to: '/products#delivery', label: 'Delivery App' },
  { to: '/products#cms', label: 'CMS + POS' },
  { to: '/pricing', label: 'Pricing & licenses' },
]

const solutionLinks = [
  { to: '/for/single-store', label: 'Single store' },
  { to: '/for/multi-store', label: 'Multi-store' },
  { to: '/for/franchise', label: 'Franchise' },
  { to: '/faq', label: 'FAQ' },
  { to: '/blog', label: 'Blog' },
]

const companyLinks = [
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/contact?demo=1', label: 'Book a demo' },
  { to: '/contact?trial=1', label: 'Start free trial' },
]

const socialLinks = [
  { href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  { href: 'https://x.com/', label: 'X' },
  { href: 'https://www.instagram.com/', label: 'Instagram' },
  { href: 'https://wa.me/919876543210', label: 'WhatsApp' },
]

export function Footer() {
  return (
    <footer className="border-t border-theme bg-surface">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:py-16">
        <div className="space-y-4 sm:col-span-2 lg:col-span-1">
          <Logo compact />
          <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
            White-label laundry operating system — Customer App, Delivery App, and CMS + POS with flat yearly
            licensing for brands scaling across cities and markets.
          </p>
          <div className="space-y-1 text-sm text-ink-muted">
            <a href="mailto:hello@cleanso.in" className="block hover:text-primary">
              hello@cleanso.in
            </a>
            <a href="tel:+919876543210" className="block hover:text-primary">
              +91 98765 43210
            </a>
            <p>Support · India · Remote onboarding</p>
          </div>
          <div className="flex flex-wrap gap-4 pt-1">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-ink-subtle hover:text-primary"
              >
                {link.label}
              </a>
            ))}
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
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink-subtle">Solutions</p>
          <ul className="space-y-2">
            {solutionLinks.map((link) => (
              <li key={link.to}>
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
          <p>© {new Date().getFullYear()} Cleanso Software. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/faq" className="hover:text-primary">
              Privacy
            </Link>
            <Link to="/faq" className="hover:text-primary">
              Terms
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Support portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

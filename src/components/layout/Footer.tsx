import { Globe, Mail, MapPin, Phone, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from '@/components/layout/Logo'
import { Button } from '@/components/ui/Button'

const footerLinks = [
  { to: '/products', label: 'Products' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-theme bg-surface">
      <div className="container-page section-pad grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
            Premium laundry operations software — white-label Customer App, Delivery App, and CMS + POS connected as one
            platform.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Share2, label: 'Share' },
              { Icon: Globe, label: 'Website' },
              { Icon: Mail, label: 'Email' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-theme text-ink-muted hover:border-[var(--primary)] hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-display text-lg font-semibold text-ink">Explore</p>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-ink-muted hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <p className="font-display text-lg font-semibold text-ink">Product updates</p>
          <p className="text-sm text-ink-muted">Release notes and laundry-tech tips — no spam.</p>
          <form
            className="flex flex-col gap-2 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault()
            }}
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-xl border border-theme bg-page px-4 py-2.5 text-sm outline-none focus:border-[var(--primary)]"
            />
            <Button type="submit" size="sm" className="!rounded-xl">
              Subscribe
            </Button>
          </form>
          <div className="space-y-2 pt-2 text-sm text-ink-muted">
            <p className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> +91 98765 43210
            </p>
            <p className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> hello@cleanso.in
            </p>
            <p className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> India · Remote onboarding
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-theme py-4 text-center text-xs text-ink-subtle">
        © {new Date().getFullYear()} Cleanso Software. All rights reserved.
      </div>
    </footer>
  )
}

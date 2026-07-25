import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Phone, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Logo } from '@/components/layout/Logo'
import { useTheme } from '@/hooks/useTheme'

const links = [
  { to: '/products', label: 'Products' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled
            ? 'border-transparent bg-[var(--primary)] text-white'
            : 'border-theme/70 bg-[var(--primary-soft)] text-ink'
        }`}
      >
        <div className="container-page flex h-9 items-center justify-between gap-3 text-xs sm:text-[13px]">
          <p className={`hidden sm:block ${scrolled ? 'text-white/85' : 'text-ink-muted'}`}>
            Premium laundry software · Customer · Delivery · CMS + POS
          </p>
          <p className={`sm:hidden ${scrolled ? 'text-white/85' : 'text-ink-muted'}`}>
            Customer · Delivery · CMS + POS
          </p>
          <a
            href="tel:+919876543210"
            className={`inline-flex items-center gap-1.5 font-semibold tracking-wide transition-opacity hover:opacity-80 ${
              scrolled ? 'text-white' : 'text-primary'
            }`}
          >
            <Phone className="h-3.5 w-3.5" />
            Book a demo
          </a>
        </div>
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'glass border-theme/80 shadow-[0_10px_40px_var(--shadow)]'
            : 'border-theme/50 bg-[color-mix(in_oklab,var(--bg)_88%,transparent)] backdrop-blur-md'
        }`}
      >
        <div className="container-page grid h-[4.25rem] grid-cols-[auto_1fr_auto] items-center gap-4 md:h-[4.75rem]">
          <Logo />

          <nav className="hidden justify-center lg:flex" aria-label="Primary">
            <ul className="flex items-center gap-0.5">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `group relative mx-0.5 inline-flex items-center px-3.5 py-2 text-[15px] font-medium transition-colors ${
                        isActive ? 'text-primary' : 'text-ink-muted hover:text-ink'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        <span
                          className={`absolute inset-x-3 -bottom-0.5 h-[2px] origin-left rounded-full bg-[var(--primary)] transition-transform duration-300 ${
                            isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-2 sm:gap-2.5">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-theme text-ink-muted transition-colors hover:border-[var(--primary)] hover:text-primary"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <NavLink
              to="/contact?demo=1"
              className="hidden items-center justify-center rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_color-mix(in_oklab,var(--primary)_30%,transparent)] transition-all hover:bg-[var(--primary-dark)] active:scale-[0.98] sm:inline-flex"
            >
              Request Demo
            </NavLink>

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-theme text-ink lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-[var(--ink)]/45 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 340, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col bg-surface shadow-soft"
            >
              <div className="flex items-center justify-between border-b border-theme px-5 py-4">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-xl p-2 text-ink-muted hover:bg-[var(--surface-muted)]"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 p-4">
                {links.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index }}
                  >
                    <NavLink
                      to={link.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium ${
                          isActive
                            ? 'bg-[var(--primary-soft)] text-primary'
                            : 'text-ink hover:bg-[var(--surface-muted)]'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              <div className="space-y-3 border-t border-theme p-5">
                <NavLink
                  to="/contact?demo=1"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center rounded-xl bg-[var(--primary)] py-3 text-sm font-semibold text-white"
                >
                  Request Demo
                </NavLink>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
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
    const onScroll = () => setScrolled(window.scrollY > 16)
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-4 md:pt-4">
      <div
        className={`mx-auto flex h-14 w-full max-w-[74rem] items-center justify-between gap-3 rounded-2xl border px-3 transition-all duration-300 sm:px-4 md:h-[3.85rem] ${
          scrolled
            ? 'border-theme/80 bg-[color-mix(in_oklab,var(--surface)_92%,transparent)] shadow-[0_14px_36px_var(--shadow)] backdrop-blur-xl'
            : 'border-theme/55 bg-[color-mix(in_oklab,var(--surface)_82%,transparent)] backdrop-blur-lg'
        }`}
      >
        <Logo compact />

        <nav
          className="hidden items-center rounded-xl border border-theme/70 bg-[var(--surface-muted)]/55 p-1 lg:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-1.5 text-[13px] font-medium transition-all ${
                  isActive ? 'bg-surface text-ink shadow-sm' : 'text-ink-muted hover:text-ink'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-ink-muted transition-colors hover:bg-[var(--surface-muted)] hover:text-ink"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <NavLink
            to="/contact?demo=1"
            className="hidden items-center rounded-xl border border-[color-mix(in_oklab,var(--primary)_28%,var(--border))] bg-[var(--primary-soft)] px-3.5 py-2 text-[13px] font-semibold text-primary transition-colors hover:bg-[color-mix(in_oklab,var(--primary-soft)_70%,var(--primary))] sm:inline-flex"
          >
            Request demo
          </NavLink>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-ink transition-colors hover:bg-[var(--surface-muted)] lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] lg:hidden"
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
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 340, damping: 36 }}
              className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-3xl border border-theme bg-surface shadow-soft"
            >
              <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-[var(--border)]" />
              <div className="flex items-center justify-between px-5 pb-2 pt-4">
                <Logo compact />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-xl p-2 text-ink-muted hover:bg-[var(--surface-muted)]"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="space-y-0.5 px-3 pb-4" aria-label="Mobile">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center rounded-xl px-3.5 py-3 text-[15px] font-medium ${
                        isActive ? 'bg-[var(--primary-soft)] text-primary' : 'text-ink hover:bg-[var(--surface-muted)]'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <div className="border-t border-theme p-4">
                <NavLink
                  to="/contact?demo=1"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center rounded-xl border border-[color-mix(in_oklab,var(--primary)_28%,var(--border))] bg-[var(--primary-soft)] py-3 text-sm font-semibold text-primary"
                >
                  Request demo
                </NavLink>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

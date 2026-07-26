import { motion } from 'framer-motion'
import { LayoutDashboard, Smartphone, Truck } from 'lucide-react'

const apps = [
  {
    id: 'customer',
    label: 'Customer',
    price: '₹20k/yr',
    icon: Smartphone,
    accent: 'from-[#0F6E6B] to-[#1FA39B]',
    lines: ['Book pickup', 'Track order', 'Pay & rate'],
  },
  {
    id: 'delivery',
    label: 'Delivery',
    price: '₹10k/yr',
    icon: Truck,
    accent: 'from-[#0A524F] to-[#2A9E98]',
    lines: ['Collect jobs', 'QR handoff', 'Update status'],
  },
  {
    id: 'cms',
    label: 'CMS + POS',
    price: '₹5k/yr',
    icon: LayoutDashboard,
    accent: 'from-[#145C59] to-[#3DB8B2]',
    lines: ['Dashboard', 'POS billing', 'Reports'],
  },
]

export function AppShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-[var(--accent-soft)] via-transparent to-[var(--primary-soft)] blur-2xl" />

      <div className="relative grid gap-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="premium-panel overflow-hidden rounded-[1.5rem]"
        >
          <div className="flex items-center gap-2 border-b border-theme px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 text-xs font-medium text-ink-subtle">Cleanso CMS · Dashboard</span>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-[0.7fr_1.3fr]">
            <div className="space-y-2 rounded-xl bg-[var(--surface-muted)] p-3">
              {['Orders', 'POS', 'Inventory', 'Employees'].map((item, i) => (
                <div
                  key={item}
                  className={`rounded-lg px-3 py-2 text-xs font-medium ${
                    i === 0 ? 'bg-[var(--primary)] text-white' : 'text-ink-muted'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                {['128 orders', '₹84k', '12 riders'].map((stat) => (
                  <div key={stat} className="rounded-xl bg-[var(--primary-soft)] px-2 py-3 text-center">
                    <p className="font-display text-sm font-semibold text-primary">{stat.split(' ')[0]}</p>
                    <p className="text-[10px] text-ink-muted">{stat.split(' ').slice(1).join(' ')}</p>
                  </div>
                ))}
              </div>
              <div className="h-20 rounded-xl bg-gradient-to-r from-[var(--primary-soft)] via-[var(--accent-soft)] to-[var(--primary-soft)]" />
              <div className="space-y-2">
                <div className="h-2.5 w-full rounded-full bg-[var(--surface-muted)]" />
                <div className="h-2.5 w-4/5 rounded-full bg-[var(--surface-muted)]" />
                <div className="h-2.5 w-3/5 rounded-full bg-[var(--surface-muted)]" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-3">
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.08, duration: 0.45 }}
              className={`relative overflow-hidden rounded-[1.25rem] bg-gradient-to-b ${app.accent} p-3 text-white shadow-soft`}
            >
              <div className="mb-3 flex items-center justify-between">
                <app.icon className="h-4 w-4 opacity-90" />
                <span className="text-[10px] font-semibold opacity-80">{app.price}</span>
              </div>
              <p className="font-display text-sm font-semibold leading-tight">{app.label}</p>
              <ul className="mt-3 space-y-1.5">
                {app.lines.map((line) => (
                  <li key={line} className="truncate text-[10px] text-white/75">
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-4 h-10 rounded-lg bg-white/15" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { motion } from 'framer-motion'

/** Full-bleed atmospheric product plane for the hero. */
export function AppShowcase() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background: `
            radial-gradient(ellipse 85% 65% at 72% 38%, rgba(61,184,178,0.28), transparent 58%),
            radial-gradient(ellipse 55% 45% at 18% 78%, rgba(126,216,208,0.16), transparent 52%),
            linear-gradient(155deg, #081210 0%, #102926 45%, #0b1c1a 100%)
          `,
        }}
      />

      {/* Slow ambient wash */}
      <motion.div
        className="absolute -left-1/4 top-1/4 h-[40rem] w-[40rem] rounded-full bg-[var(--primary)]/15 blur-3xl"
        animate={{ x: [0, 30, 0], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 30%, rgba(255,255,255,0.4) 0 0.7px, transparent 1px),
            radial-gradient(circle at 75% 65%, rgba(255,255,255,0.25) 0 0.7px, transparent 1px)
          `,
          backgroundSize: '4px 4px, 6px 6px',
        }}
      />

      {/* Desktop ops plane */}
      <motion.div
        className="absolute -right-[6%] top-[10%] hidden h-[78%] w-[56%] lg:block"
        initial={{ opacity: 0, x: 48 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-l-[1.75rem] border border-white/[0.09] bg-white/[0.045] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <div className="mb-7 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <span className="text-[11px] font-medium tracking-[0.18em] text-white/40">
                CLEANSO OPS
              </span>
            </div>
            <span className="text-[11px] text-white/30">Live network</span>
          </div>

          <div className="grid h-[calc(100%-3rem)] grid-cols-[0.8fr_1.45fr] gap-5">
            <div className="space-y-1.5 border-r border-white/[0.06] pr-4">
              {['Orders', 'Riders', 'POS', 'Stores', 'Reports'].map((item, i) => (
                <div
                  key={item}
                  className={`rounded-lg px-3 py-2.5 text-[12px] font-medium tracking-wide ${
                    i === 0 ? 'bg-white/12 text-white' : 'text-white/35'
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { v: '2.4k', l: 'Orders today' },
                  { v: '186', l: 'Active riders' },
                  { v: '42', l: 'Stores online' },
                ].map((stat) => (
                  <div key={stat.l} className="border-b border-white/[0.08] pb-3">
                    <p className="font-display text-[1.65rem] font-semibold tracking-tight text-white/92">
                      {stat.v}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/35">{stat.l}</p>
                  </div>
                ))}
              </div>

              <div className="relative flex-1 overflow-hidden rounded-xl bg-gradient-to-br from-white/[0.07] to-transparent">
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent" />
                <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 400 140" preserveAspectRatio="none">
                  <path
                    d="M0 100 C40 90, 70 40, 110 55 S170 120, 210 80 S280 20, 320 45 S370 90, 400 60"
                    fill="none"
                    stroke="rgba(126,216,208,0.55)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M0 110 C50 100, 90 70, 130 78 S200 130, 240 95 S310 40, 360 70 L400 80 L400 140 L0 140 Z"
                    fill="rgba(61,184,178,0.12)"
                  />
                </svg>
              </div>

              <div className="space-y-2">
                {[
                  { w: '100%', label: 'City North' },
                  { w: '78%', label: 'City Central' },
                  { w: '54%', label: 'City South' },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-3">
                    <span className="w-20 text-[10px] uppercase tracking-[0.12em] text-white/30">{row.label}</span>
                    <div className="h-px flex-1 bg-white/10">
                      <div className="h-px bg-white/35" style={{ width: row.w }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile soft product hint */}
      <motion.div
        className="absolute inset-x-6 bottom-[34%] h-40 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-sm lg:hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8 }}
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          <span className="text-[10px] tracking-[0.16em] text-white/40">CLEANSO OPS</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {['Orders', 'Riders', 'Stores'].map((label, i) => (
            <div key={label}>
              <p className="font-display text-xl font-semibold text-white/90">{['2.4k', '186', '42'][i]}</p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.12em] text-white/35">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#081210] via-[#081210]/90 to-[#081210]/20 lg:via-[#081210]/78 lg:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#081210] to-transparent" />
    </div>
  )
}

import { Link } from 'react-router-dom'

interface LogoProps {
  className?: string
  light?: boolean
}

export function Logo({ className = '', light = false }: LogoProps) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label="Cleanso home">
      <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-[0.85rem] bg-[var(--primary)] shadow-[0_8px_20px_color-mix(in_oklab,var(--primary)_28%,transparent)] transition-transform duration-300 group-hover:scale-[1.03]">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-white" fill="none" aria-hidden="true">
          <path
            d="M12 3.5c-2.6 3.6-4.5 6.4-4.5 8.5a4.5 4.5 0 1 0 9 0c0-2.1-1.9-4.9-4.5-8.5z"
            fill="currentColor"
            opacity="0.95"
          />
          <circle cx="12" cy="13" r="1.7" fill="var(--primary)" />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[1.35rem] font-semibold tracking-[-0.03em] ${
            light ? 'text-white' : 'text-ink'
          }`}
        >
          Cleanso
        </span>
        <span
          className={`mt-0.5 block text-[10px] font-medium uppercase tracking-[0.16em] ${
            light ? 'text-white/70' : 'text-ink-subtle'
          }`}
        >
          Ops Platform
        </span>
      </span>
    </Link>
  )
}

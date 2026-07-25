import { Link } from 'react-router-dom'

interface LogoProps {
  className?: string
  light?: boolean
  compact?: boolean
}

export function Logo({ className = '', light = false, compact = false }: LogoProps) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2 ${className}`} aria-label="Cleanso home">
      <span
        className={`relative inline-flex items-center justify-center overflow-hidden rounded-[0.7rem] bg-[var(--primary)] transition-transform duration-300 group-hover:scale-[1.03] ${
          compact ? 'h-8 w-8' : 'h-9 w-9 shadow-[0_8px_22px_color-mix(in_oklab,var(--primary)_30%,transparent)]'
        }`}
      >
        <span className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.22),transparent_55%)]" />
        <svg
          viewBox="0 0 24 24"
          className={`relative text-white ${compact ? 'h-3.5 w-3.5' : 'h-[17px] w-[17px]'}`}
          fill="none"
          aria-hidden="true"
        >
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
          className={`block font-display font-semibold tracking-[-0.03em] ${
            compact ? 'text-[1.1rem]' : 'text-[1.28rem]'
          } ${light ? 'text-white' : 'text-ink'}`}
        >
          Cleanso
        </span>
        {!compact && (
          <span
            className={`mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.18em] ${
              light ? 'text-white/65' : 'text-ink-subtle'
            }`}
          >
            Laundry OS
          </span>
        )}
      </span>
    </Link>
  )
}

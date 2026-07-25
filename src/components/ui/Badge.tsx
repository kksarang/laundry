import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  tone?: 'teal' | 'muted' | 'accent' | 'dark'
  className?: string
}

const tones = {
  teal: 'bg-[var(--primary-soft)] text-[var(--primary)]',
  muted: 'bg-[var(--surface-muted)] text-[var(--ink-muted)]',
  accent: 'bg-[var(--accent-soft)] text-[var(--primary-dark)]',
  dark: 'bg-[var(--ink)] text-[var(--bg)]',
}

export function Badge({ children, tone = 'teal', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

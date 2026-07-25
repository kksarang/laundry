import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  interactive?: boolean
}

export function Card({ children, className = '', interactive = false }: CardProps) {
  return (
    <div
      className={`rounded-[var(--radius-lg)] border border-theme bg-surface ${
        interactive ? 'transition-transform duration-300 hover:-translate-y-1 shadow-soft' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}

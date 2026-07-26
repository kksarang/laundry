import type { ReactNode } from 'react'

interface PageHeaderProps {
  eyebrow?: string
  title: string
  description: string
  action?: ReactNode
}

export function PageHeader({ eyebrow, title, description, action }: PageHeaderProps) {
  return (
    <section className="hero-atmosphere relative overflow-hidden border-b border-theme">
      <div className="grid-fade pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-page relative max-w-3xl space-y-4 pb-14 pt-28 sm:space-y-5 sm:pb-16 md:pb-20 md:pt-32">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-subtle">{eyebrow}</p>
        )}
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg md:text-xl">{description}</p>
        {action}
      </div>
    </section>
  )
}

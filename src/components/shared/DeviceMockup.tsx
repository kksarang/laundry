import type { ReactNode } from 'react'

interface DeviceMockupProps {
  variant: 'phone' | 'tablet'
  title?: string
  children?: ReactNode
}

export function DeviceMockup({ variant, title, children }: DeviceMockupProps) {
  const isPhone = variant === 'phone'

  return (
    <div
      className={`relative mx-auto ${isPhone ? 'w-[min(100%,15.5rem)]' : 'w-[min(100%,22rem)]'}`}
      aria-label={title ? `${title} device preview` : 'Device preview'}
    >
      {/* Outer shell / bezel */}
      <div
        className={`relative overflow-hidden rounded-[2rem] border border-[color-mix(in_oklab,var(--ink)_12%,transparent)] bg-[var(--ink)] p-[0.45rem] shadow-[0_24px_48px_-12px_rgba(8,18,16,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] ${
          isPhone ? 'aspect-[9/19.5]' : 'aspect-[4/3] rounded-[1.35rem] p-[0.55rem]'
        }`}
      >
        {/* Side buttons (phone only) */}
        {isPhone && (
          <>
            <span className="absolute -left-[2px] top-[22%] h-8 w-[3px] rounded-l-sm bg-[color-mix(in_oklab,var(--ink)_70%,var(--surface))]" />
            <span className="absolute -left-[2px] top-[32%] h-12 w-[3px] rounded-l-sm bg-[color-mix(in_oklab,var(--ink)_70%,var(--surface))]" />
            <span className="absolute -right-[2px] top-[28%] h-14 w-[3px] rounded-r-sm bg-[color-mix(in_oklab,var(--ink)_70%,var(--surface))]" />
          </>
        )}

        {/* Screen */}
        <div
          className={`relative flex h-full w-full flex-col overflow-hidden bg-[var(--surface)] ${
            isPhone ? 'rounded-[1.65rem]' : 'rounded-[0.95rem]'
          }`}
        >
          {/* Status bar */}
          <div className="relative z-10 flex shrink-0 items-center justify-between px-4 pb-1 pt-2.5">
            {isPhone && (
              <div className="absolute left-1/2 top-2 h-[1.35rem] w-[5.5rem] -translate-x-1/2 rounded-full bg-[var(--ink)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
            )}
            <span className="text-[10px] font-medium tabular-nums text-[var(--ink-subtle)]">9:41</span>
            <div className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-[var(--primary)]/80" />
              <span className="h-2 w-3 rounded-sm border border-[var(--ink-subtle)]/50" />
            </div>
          </div>

          {/* App chrome header */}
          {title && (
            <div className="shrink-0 border-b border-[color-mix(in_oklab,var(--ink)_8%,transparent)] px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                <span className="text-[11px] font-semibold tracking-wide text-[var(--ink)]">{title}</span>
              </div>
            </div>
          )}

          {/* Content area */}
          <div className="relative min-h-0 flex-1 overflow-hidden">
            {children ?? (
              <div className="flex h-full flex-col gap-3 p-4">
                <div className="h-3 w-2/3 rounded-md bg-[color-mix(in_oklab,var(--primary)_18%,var(--surface-muted))]" />
                <div className="h-2 w-full rounded bg-[var(--surface-muted)]" />
                <div className="h-2 w-5/6 rounded bg-[var(--surface-muted)]" />
                <div className="mt-auto grid grid-cols-2 gap-2">
                  <div className="aspect-square rounded-xl bg-[color-mix(in_oklab,var(--primary)_12%,var(--surface-muted))]" />
                  <div className="aspect-square rounded-xl bg-[var(--surface-muted)]" />
                </div>
              </div>
            )}

            {/* Subtle screen glare */}
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_42%,transparent_100%)]"
              aria-hidden="true"
            />
          </div>

          {/* Home indicator (phone) */}
          {isPhone && (
            <div className="flex shrink-0 justify-center py-2">
              <span className="h-1 w-24 rounded-full bg-[color-mix(in_oklab,var(--ink)_18%,transparent)]" />
            </div>
          )}
        </div>
      </div>

      {/* Floor shadow */}
      <div
        className="pointer-events-none absolute -bottom-3 left-1/2 h-4 w-[72%] -translate-x-1/2 rounded-[100%] bg-[color-mix(in_oklab,var(--ink)_22%,transparent)] blur-md"
        aria-hidden="true"
      />
    </div>
  )
}

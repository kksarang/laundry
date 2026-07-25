interface TabOption<T extends string> {
  id: T
  label: string
}

interface TabsProps<T extends string> {
  options: TabOption<T>[]
  value: T
  onChange: (value: T) => void
  className?: string
}

export function Tabs<T extends string>({ options, value, onChange, className = '' }: TabsProps<T>) {
  return (
    <div
      className={`inline-flex flex-wrap gap-1 rounded-full border border-theme bg-surface-muted p-1 ${className}`}
      role="tablist"
    >
      {options.map((option) => {
        const active = option.id === value
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active ? 'bg-[var(--primary)] text-white shadow-sm' : 'text-ink-muted hover:text-ink'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark' | 'light'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  children: ReactNode
  variant?: Variant
  size?: Size
  className?: string
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: undefined
  }

type ButtonAsLink = BaseProps & {
  to: string
  onClick?: () => void
}

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<Variant, string> = {
  primary:
    'bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] shadow-[0_14px_34px_color-mix(in_oklab,var(--primary)_32%,transparent)]',
  secondary:
    'bg-surface text-[var(--primary)] border border-[color-mix(in_oklab,var(--primary)_35%,var(--border))] hover:bg-[var(--primary-soft)]',
  ghost: 'bg-transparent text-[var(--ink)] hover:bg-[var(--surface-muted)]',
  dark: 'bg-[var(--ink)] text-[var(--bg)] hover:opacity-90',
  light: 'bg-white text-[var(--primary)] hover:bg-[var(--primary-soft)]',
}

const sizes: Record<Size, string> = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-[0.98] ${variants[variant]} ${sizes[size]} ${className}`

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} onClick={props.onClick} className={classes}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button type={buttonProps.type ?? 'button'} className={classes} {...buttonProps}>
      {children}
    </button>
  )
}

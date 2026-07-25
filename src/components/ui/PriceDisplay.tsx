import { motion } from 'framer-motion'
import { formatINR } from '@/lib/format'

interface PriceDisplayProps {
  amount: number
  label?: string
  size?: 'md' | 'lg'
}

export function PriceDisplay({ amount, label = 'Estimated total', size = 'lg' }: PriceDisplayProps) {
  return (
    <div className="rounded-[var(--radius-lg)] bg-[var(--primary-soft)] p-5">
      <p className="text-sm font-medium text-ink-muted">{label}</p>
      <motion.p
        key={amount}
        initial={{ y: 8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`font-display font-bold text-primary ${size === 'lg' ? 'text-4xl' : 'text-2xl'}`}
      >
        {formatINR(amount)}
      </motion.p>
    </div>
  )
}

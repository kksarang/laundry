import {
  Gift,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  Smartphone,
  Truck,
  type LucideIcon,
} from 'lucide-react'
import type { Product } from '@/data/products'

const iconMap: Record<Product['icon'], LucideIcon> = {
  smartphone: Smartphone,
  truck: Truck,
  layout: LayoutDashboard,
  pos: MonitorSmartphone,
  gift: Gift,
  palette: Palette,
}

interface ProductIconProps {
  name: Product['icon']
  className?: string
}

export function ProductIcon({ name, className = 'h-6 w-6' }: ProductIconProps) {
  const Icon = iconMap[name]
  return <Icon className={className} />
}

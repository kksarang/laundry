import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { JsonLd } from '@/components/shared/JsonLd'

interface PageShellProps {
  children: ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-page text-ink">
      <JsonLd />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="relative"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  )
}

import { AnimatePresence } from 'framer-motion'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { PageShell } from '@/components/layout/PageShell'
import { About } from '@/pages/About'
import { Blog } from '@/pages/Blog'
import { BlogPost } from '@/pages/BlogPost'
import { Contact } from '@/pages/Contact'
import { FAQ } from '@/pages/FAQ'
import { ForSegment } from '@/pages/ForSegment'
import { Home } from '@/pages/Home'
import { PlanDetail } from '@/pages/PlanDetail'
import { Pricing } from '@/pages/Pricing'
import { Products } from '@/pages/Products'

export default function App() {
  const location = useLocation()

  return (
    <PageShell>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Navigate to="/products" replace />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/pricing/:planId" element={<PlanDetail />} />
          <Route path="/for/:segmentId" element={<ForSegment />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </PageShell>
  )
}

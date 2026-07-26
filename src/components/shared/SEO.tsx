import { useEffect } from 'react'
import { keywordMeta } from '@/data/seoContent'

interface SEOProps {
  title: string
  description: string
  image?: string
  keywords?: string
}

export function SEO({ title, description, image, keywords = keywordMeta }: SEOProps) {
  useEffect(() => {
    document.title = title

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.content = content
    }

    setMeta('description', description)
    setMeta('keywords', keywords)
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    if (image) setMeta('og:image', image, true)
  }, [title, description, image, keywords])

  return null
}

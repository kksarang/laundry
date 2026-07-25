import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  image?: string
}

export function SEO({ title, description, image }: SEOProps) {
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
    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    if (image) setMeta('og:image', image, true)
  }, [title, description, image])

  return null
}

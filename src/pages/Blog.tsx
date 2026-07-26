import { useMemo, useState } from 'react'
import { BlogCard } from '@/components/shared/BlogCard'
import { PageHeader } from '@/components/shared/PageHeader'
import { SEO } from '@/components/shared/SEO'
import { blogPosts } from '@/data/blog'

const PAGE_SIZE = 6

export function Blog() {
  const [category, setCategory] = useState('All')
  const [page, setPage] = useState(1)

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))],
    [],
  )

  const filtered = useMemo(
    () => (category === 'All' ? blogPosts : blogPosts.filter((p) => p.category === category)),
    [category],
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <>
      <SEO
        title="Laundry Software Blog — Customization, POS & Growth | Cleanso"
        description="Guides on laundry management software, white-label laundry apps, custom laundry software, dry cleaning POS, and multi-store growth for India, UAE & GCC."
      />
      <PageHeader
        eyebrow="Laundry software blog"
        title="Guides for laundry brands going digital"
        description="Practical reads on laundry apps, POS, white-label customization, and software for dry cleaning operators."
      />

      <section className="section-pad">
        <div className="container-page space-y-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setCategory(cat)
                  setPage(1)
                }}
                className={`rounded-full px-3 py-1.5 text-sm ${
                  category === cat ? 'bg-[var(--primary)] text-white' : 'bg-[var(--surface-muted)] text-ink-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i + 1)}
                  className={`h-9 w-9 rounded-full text-sm ${
                    page === i + 1 ? 'bg-[var(--primary)] text-white' : 'bg-[var(--surface-muted)] text-ink-muted'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

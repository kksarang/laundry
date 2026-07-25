import { Link, useParams } from 'react-router-dom'
import { Link2, Share2 } from 'lucide-react'
import { BlogCard } from '@/components/shared/BlogCard'
import { SEO } from '@/components/shared/SEO'
import { Badge } from '@/components/ui/Badge'
import { blogPosts } from '@/data/blog'
import { formatDate } from '@/lib/format'

export function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="container-page section-pad text-center">
        <h1 className="font-display text-3xl font-semibold text-ink">Article not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-primary">
          Back to blog
        </Link>
      </section>
    )
  }

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 2)

  return (
    <>
      <SEO title={`${post.title} — Cleanso`} description={post.excerpt} image={post.cover} />

      <article>
        <header className="hero-atmosphere border-b border-theme">
          <div className="container-page section-pad max-w-3xl space-y-4">
            <Badge>{post.category}</Badge>
            <h1 className="font-display text-4xl font-semibold text-ink md:text-5xl">{post.title}</h1>
            <p className="text-ink-muted">
              {post.author} · {formatDate(post.date)} · {post.readTime} read
            </p>
          </div>
        </header>

        <div className="container-page py-10">
          <img
            src={post.cover}
            alt=""
            className="mb-10 aspect-[16/8] w-full rounded-[var(--radius-xl)] object-cover shadow-soft"
          />

          <div className="mx-auto max-w-2xl space-y-5 text-lg leading-relaxed text-ink-muted">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center gap-3 border-t border-theme pt-6">
            <span className="text-sm font-medium text-ink">Share</span>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-theme text-ink-muted hover:text-primary"
              aria-label="Share"
              onClick={() => {
                if (navigator.share) {
                  void navigator.share({ title: post.title, url: window.location.href })
                }
              }}
            >
              <Share2 className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-theme text-ink-muted hover:text-primary"
              aria-label="Copy link"
              onClick={() => navigator.clipboard?.writeText(window.location.href)}
            >
              <Link2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-theme bg-surface section-pad">
          <div className="container-page space-y-6">
            <h2 className="font-display text-2xl font-semibold text-ink">Related articles</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {related.map((item) => (
                <BlogCard key={item.id} post={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

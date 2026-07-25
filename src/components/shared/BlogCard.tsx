import { Link } from 'react-router-dom'
import type { BlogPost } from '@/data/blog'
import { formatDate } from '@/lib/format'
import { Badge } from '@/components/ui/Badge'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-theme bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="muted">{post.category}</Badge>
          <span className="text-xs text-ink-subtle">
            {formatDate(post.date)} · {post.readTime}
          </span>
        </div>
        <h3 className="font-display text-xl font-semibold text-ink group-hover:text-primary">{post.title}</h3>
        <p className="text-sm leading-relaxed text-ink-muted">{post.excerpt}</p>
      </div>
    </Link>
  )
}

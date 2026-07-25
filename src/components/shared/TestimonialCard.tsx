import { Star } from 'lucide-react'
import type { Testimonial } from '@/data/testimonials'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-[var(--radius-lg)] border border-theme bg-surface p-6 shadow-soft">
      <div className="space-y-4">
        <div className="flex items-center gap-1 text-[var(--warning)]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.round(testimonial.rating) ? 'fill-current' : 'opacity-30'}`}
            />
          ))}
          <span className="ml-2 text-sm text-ink-muted">{testimonial.rating}/5</span>
        </div>
        <p className="text-lg leading-relaxed text-ink">“{testimonial.quote}”</p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full bg-[var(--primary-soft)] object-cover"
        />
        <div>
          <p className="font-semibold text-ink">{testimonial.name}</p>
          <p className="text-sm text-ink-muted">{testimonial.role}</p>
        </div>
      </div>
    </article>
  )
}

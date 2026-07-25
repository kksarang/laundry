import { useMemo, useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Clock, Mail, MessageCircle, Phone } from 'lucide-react'
import { PageHeader } from '@/components/shared/PageHeader'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/Button'

interface FormState {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const subjects = [
  'Request a product demo',
  'Customer App license',
  'Delivery App license',
  'CMS App license',
  'Full app bundle',
  'Customization / integration',
  'Other',
]

export function Contact() {
  const [params] = useSearchParams()
  const plan = params.get('plan')
  const demo = params.get('demo')

  const defaultSubject = useMemo(() => {
    if (plan === 'customer') return 'Customer App license'
    if (plan === 'delivery') return 'Delivery App license'
    if (plan === 'cms') return 'CMS App license'
    if (plan === 'bundle') return 'Full app bundle'
    if (demo) return 'Request a product demo'
    return 'Request a product demo'
  }, [plan, demo])

  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: defaultSubject,
    message: plan
      ? `I'm interested in the ${plan} software license and would like pricing/onboarding details.`
      : 'I want a demo of the Cleanso software platform.',
  })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!/^[0-9+\-\s]{8,}$/.test(form.phone)) next.phone = 'Enter a valid phone number'
    if (!form.subject) next.subject = 'Select a subject'
    if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSent(true)
  }

  return (
    <>
      <SEO
        title="Contact — Cleanso Software"
        description="Request a demo or ask about Customer, Delivery, and CMS app licenses for your laundry business."
      />
      <PageHeader
        eyebrow="Contact"
        title="Talk to us about Cleanso software"
        description="Demos, licensing, white-label onboarding, and custom integrations — we usually respond within a few hours."
      />

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-[var(--radius-xl)] border border-theme bg-surface p-6 md:p-8"
          >
            {sent ? (
              <div className="space-y-3 py-10 text-center">
                <p className="font-display text-2xl font-semibold text-ink">Message received</p>
                <p className="text-ink-muted">Thanks — we’ll get back to you shortly at {form.email}.</p>
                <Button type="button" variant="secondary" className="!rounded-xl" onClick={() => setSent(false)}>
                  Send another
                </Button>
              </div>
            ) : (
              <>
                {(
                  [
                    ['name', 'Name', 'text'],
                    ['email', 'Email', 'email'],
                    ['phone', 'Phone', 'tel'],
                  ] as const
                ).map(([key, label, type]) => (
                  <label key={key} className="block space-y-1.5">
                    <span className="text-sm font-medium text-ink">{label}</span>
                    <input
                      type={type}
                      value={form[key]}
                      onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                      className="w-full rounded-xl border border-theme bg-page px-4 py-3 outline-none focus:border-[var(--primary)]"
                    />
                    {errors[key] && <span className="text-xs text-[var(--danger)]">{errors[key]}</span>}
                  </label>
                ))}

                <label className="block space-y-1.5">
                  <span className="text-sm font-medium text-ink">Subject</span>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    className="w-full rounded-xl border border-theme bg-page px-4 py-3 outline-none focus:border-[var(--primary)]"
                  >
                    {subjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block space-y-1.5">
                  <span className="text-sm font-medium text-ink">Message</span>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full resize-y rounded-xl border border-theme bg-page px-4 py-3 outline-none focus:border-[var(--primary)]"
                  />
                  {errors.message && <span className="text-xs text-[var(--danger)]">{errors.message}</span>}
                </label>

                <Button type="submit" size="lg" className="w-full !rounded-xl sm:w-auto">
                  Send message
                </Button>
              </>
            )}
          </form>

          <div className="space-y-5">
            <div className="space-y-4 rounded-[var(--radius-xl)] border border-theme bg-surface p-6">
              <h2 className="font-display text-2xl font-semibold text-ink">Sales & support</h2>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-ink-muted hover:text-primary">
                <Phone className="h-5 w-5 text-primary" /> +91 98765 43210
              </a>
              <a href="mailto:hello@cleanso.in" className="flex items-center gap-3 text-ink-muted hover:text-primary">
                <Mail className="h-5 w-5 text-primary" /> hello@cleanso.in
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-ink-muted hover:text-primary"
              >
                <MessageCircle className="h-5 w-5 text-primary" /> WhatsApp
              </a>
              <p className="flex items-start gap-3 text-ink-muted">
                <Clock className="mt-0.5 h-5 w-5 text-primary" />
                Mon–Sat 9:00 AM – 7:00 PM IST
              </p>
            </div>

            <div className="rounded-[var(--radius-xl)] border border-theme bg-page p-6">
              <p className="font-display text-xl font-semibold text-ink">Quick license reminder</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-muted">
                <li>Customer App — ₹20,000 / year</li>
                <li>Delivery App — ₹10,000 / year</li>
                <li>CMS App — ₹5,000 / year</li>
              </ul>
              <Link to="/pricing" className="mt-3 inline-block text-sm font-medium text-primary">
                Full pricing →
              </Link>
            </div>

            <div className="rounded-[var(--radius-xl)] border border-theme bg-page p-6">
              <p className="font-display text-xl font-semibold text-ink">FAQ first?</p>
              <p className="mt-2 text-sm text-ink-muted">Licensing, onboarding, and white-label answers.</p>
              <Link to="/faq" className="mt-3 inline-block text-sm font-medium text-primary">
                Go to FAQ →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

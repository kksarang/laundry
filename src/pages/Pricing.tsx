import { AppPlans } from '@/components/pricing/AppPlans'
import { PageHeader } from '@/components/shared/PageHeader'
import { SEO } from '@/components/shared/SEO'
import { Button } from '@/components/ui/Button'

export function Pricing() {
  return (
    <>
      <SEO
        title="Pricing — Cleanso Software Licenses"
        description="Customer App ₹20,000/year · Delivery App ₹10,000/year · CMS + POS ₹5,000/year. Full platform bundle ₹30,000/year."
      />
      <PageHeader
        eyebrow="Pricing"
        title="Software licenses for every growth stage"
        description="Transparent yearly pricing for Customer, Delivery, and CMS + POS — the same apps powering the Cleanso platform."
        action={
          <Button to="/contact?demo=1" className="!rounded-xl">
            Talk to sales
          </Button>
        }
      />

      <section className="section-pad">
        <div className="container-page">
          <AppPlans showComparison />
        </div>
      </section>
    </>
  )
}

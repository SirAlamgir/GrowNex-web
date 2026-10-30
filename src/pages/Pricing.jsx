import { CTA, Icon, PageHero, Reveal, SectionHead, useTitle } from '../components/ui'
import Plans from '../components/Plans'
import Estimator from '../components/Estimator'

export default function Pricing() {
  useTitle('Pricing')
  return (
    <>
      <PageHero eyebrow="Pricing" sub="Choose a package or build your own estimate. Final quote is confirmed after a free chat.">Clear prices, <span className="grad-text">no surprises</span></PageHero>
      <section className="section !pt-8">
        <div className="wrap">
          <Plans />
          <p className="mt-6 text-center text-sm">Prices are starting prices in USD. Exact quote depends on your requirements.</p>
        </div>
      </section>
      <section className="section bg-bg2">
        <div className="wrap">
          <SectionHead eyebrow="Estimator" sub="Select the services you need and see an instant price range.">Build your <span className="grad-text">own estimate</span></SectionHead>
          <Estimator />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Good to know">How payment works</SectionHead>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {[['MessageCircle', '1. Free quote', 'We discuss your needs and send a fixed price.'], ['ShieldCheck', '2. 50% to start', 'Pay half to book your slot and begin work.'], ['Zap', '3. 50% on delivery', 'Pay the rest when you approve the final result.']].map(([ic, t, d], i) => (
              <Reveal key={t} delay={i * 0.1}><div className="card h-full"><div className="ico"><Icon name={ic} /></div><h3 className="mb-2 text-lg font-bold">{t}</h3><p className="!mb-0">{d}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}

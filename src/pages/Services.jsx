import { ArrowRight } from 'lucide-react'
import { EXTRA_SERVICES, SERVICES } from '../data/content'
import { waLink } from '../config/site'
import { Check, CTA, Icon, PageHero, Reveal, SectionHead, useTitle } from '../components/ui'

export default function Services() {
  useTitle('Services')
  return (
    <>
      <PageHero eyebrow="Our services" sub="Pick one service or combine several. Every project is custom-made for your brand and goals.">Skills that <span className="grad-text">grow your business</span></PageHero>
      <section className="section !pt-8">
        <div className="wrap">
          {SERVICES.map((s, i) => (
            <div key={s.id} id={s.id} className="grid scroll-mt-28 items-center gap-8 py-8 lg:grid-cols-2 lg:gap-14">
              <Reveal x={i % 2 ? 30 : -30} y={0} className={i % 2 ? 'lg:order-2' : ''}>
                <span className="mb-1 block font-display text-xs font-bold uppercase tracking-widest text-brand2">{s.title}</span>
                <h2 className="mb-3 font-display text-3xl font-extrabold">{s.title}</h2>
                <p className="text-base sm:text-lg">{s.desc}</p>
                <ul className="mb-4 grid gap-2.5">{s.points.map((p) => <li key={p} className="flex gap-2.5 text-muted"><Check className="mt-1 h-[19px] w-[19px] text-ok" />{p}</li>)}</ul>
                <div className="mb-6 mt-5 flex flex-wrap gap-2">{s.tools.map((t) => <span key={t} className="rounded-full bg-brand2/10 px-3.5 py-1.5 font-display text-xs font-semibold text-brand2">{t}</span>)}</div>
                <a href={waLink(`Hi Grow Nex, I need help with ${s.title}.`)} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Start this project <ArrowRight className="h-4 w-4" /></a>
              </Reveal>
              <Reveal x={i % 2 ? -30 : 30} y={0} delay={0.1}>
                <div className={`relative grid aspect-[5/4] place-items-center overflow-hidden rounded-[2rem] bg-gradient-to-br text-white shadow-glow ${s.bg}`}>
                  <div className="absolute -right-[15%] -top-[20%] h-[70%] w-[70%] rounded-full bg-white/15" />
                  <div className="absolute -bottom-[15%] -left-[10%] h-1/2 w-1/2 rounded-full bg-white/10" />
                  <div className="relative animate-bob drop-shadow-[0_10px_20px_rgba(0,0,0,.25)]"><Icon name={s.icon} className="h-20 w-20 sm:h-28 sm:w-28" /></div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>
      <section className="section bg-bg2">
        <div className="wrap">
          <SectionHead eyebrow="And more">Other things we can help with</SectionHead>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXTRA_SERVICES.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}><div className="card h-full"><div className="ico"><Icon name={e.icon} /></div><h3 className="mb-2 text-lg font-bold">{e.title}</h3><p className="!mb-0">{e.desc}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  )
}

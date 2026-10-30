import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PLANS, PLAN_TABS } from '../data/content'
import { waLink } from '../config/site'
import { Check, Reveal } from './ui'

export default function Plans() {
  const [k, setK] = useState('web')
  return (
    <>
      <Reveal className="mx-auto mb-10 flex w-max max-w-full flex-wrap justify-center gap-1.5 rounded-full border border-line bg-surface p-1.5">
        {PLAN_TABS.map((t) => (
          <button key={t.k} onClick={() => setK(t.k)} className="relative rounded-full px-5 py-2.5 font-display text-sm font-bold sm:px-6">
            {k === t.k && <motion.span layoutId="tab" className="absolute inset-0 rounded-full bg-grad" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />}
            <span className={`relative ${k === t.k ? 'text-white' : 'text-muted'}`}>{t.l}</span>
          </button>
        ))}
      </Reveal>
      <AnimatePresence mode="wait">
        <motion.div key={k} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }} className="grid items-stretch gap-6 md:grid-cols-3">
          {PLANS[k].map((x) => <PlanCard key={x.n} plan={x} cat={k} />)}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export function PlanCard({ plan: x, cat }) {
  return (
    <div className={`card flex flex-col ${x.pop ? 'border-2 border-brand2 md:-translate-y-2.5 md:hover:-translate-y-4' : ''}`}>
      {x.pop && <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1.5 font-display text-[.68rem] font-extrabold uppercase tracking-wider text-[#3a2600]">Most popular</span>}
      <h3 className="text-xl font-bold">{x.n}</h3>
      <p className="mb-0 mt-1">{x.d}</p>
      <div className="mb-1 mt-4 font-display text-5xl font-extrabold leading-none text-ink"><small className="mr-1 font-sans text-sm font-medium text-muted">from</small>${x.p}</div>
      <small className="text-muted">one-time / starting price</small>
      <ul className="mb-7 mt-5 grid gap-2.5">
        {x.f.map((f) => <li key={f} className="flex gap-2.5 text-[.92rem] text-muted"><Check className="mt-0.5 h-[18px] w-[18px] flex-none text-ok" />{f}</li>)}
      </ul>
      <a href={waLink(`Hi Grow Nex, I'm interested in the ${x.n} package (${cat}).`)} target="_blank" rel="noopener noreferrer" className={`btn mt-auto w-full ${x.pop ? 'btn-primary' : 'btn-ghost'}`}>Choose {x.n}</a>
    </div>
  )
}

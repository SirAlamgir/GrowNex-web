import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ESTIMATE_SERVICES, ESTIMATE_SPEED } from '../data/content'
import { waLink } from '../config/site'
import { Reveal, WaIcon } from './ui'

export default function Estimator() {
  const [sel, setSel] = useState([])
  const [speed, setSpeed] = useState('std')
  const sp = ESTIMATE_SPEED.find((s) => s.k === speed)
  const toggle = (n) => setSel((s) => (s.includes(n) ? s.filter((x) => x !== n) : [...s, n]))
  const { lo, hi } = useMemo(() => {
    const sum = ESTIMATE_SERVICES.filter(([n]) => sel.includes(n)).reduce((a, [, p]) => a + p, 0)
    const lo = Math.round((sum * sp.m) / 10) * 10
    return { lo, hi: Math.round((lo * 1.25) / 10) * 10 }
  }, [sel, sp])
  const text = `Hi Grow Nex! I used your estimator.\nServices: ${sel.join(', ') || '-'}\nTimeline: ${sp.l} (${sp.s})\nEstimate: $${lo} – $${hi}\nCan we discuss?`
  const opt = (on) => `flex cursor-pointer items-center gap-3.5 rounded-2xl border-[1.5px] px-4 py-4 transition ${on ? 'border-brand2 bg-brand2/10' : 'border-line bg-bg hover:border-brand2'}`
  return (
    <div className="grid items-start gap-7 lg:grid-cols-[1.2fr_.8fr]">
      <Reveal className="card-static !p-6 sm:!p-9">
        <h3 className="mb-4 text-lg font-bold">1. What do you need?</h3>
        <div className="mb-8 grid gap-2.5">
          {ESTIMATE_SERVICES.map(([n, p]) => (
            <label key={n} className={opt(sel.includes(n))}>
              <input type="checkbox" checked={sel.includes(n)} onChange={() => toggle(n)} className="h-5 w-5 accent-[#7c3aed]" />
              <b className="flex-1 font-display text-[.95rem] font-semibold">{n}</b>
              <em className="text-sm not-italic text-muted">~${p}</em>
            </label>
          ))}
        </div>
        <h3 className="mb-4 text-lg font-bold">2. How fast?</h3>
        <div className="grid gap-2.5 sm:grid-cols-3">
          {ESTIMATE_SPEED.map((s) => (
            <label key={s.k} className={opt(speed === s.k)}>
              <input type="radio" name="speed" checked={speed === s.k} onChange={() => setSpeed(s.k)} className="h-5 w-5 accent-[#7c3aed]" />
              <span className="flex-1 font-display text-[.95rem] font-semibold">{s.l}<em className="block text-xs font-normal not-italic text-muted">{s.s}</em></span>
            </label>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.1} className="lg:sticky lg:top-28">
        <div className="rounded-[1.75rem] bg-grad p-7 text-white shadow-glow sm:p-9">
          <p className="!mb-1 font-semibold !text-white/90">Your estimated investment</p>
          <motion.div key={`${lo}-${hi}`} initial={{ scale: 0.92, opacity: 0.4 }} animate={{ scale: 1, opacity: 1 }} className="font-display text-4xl font-extrabold leading-none sm:text-5xl">
            {sel.length ? `$${lo} – $${hi}` : '$0'}
          </motion.div>
          <p className="mt-2 text-sm !text-white/80">Approximate range in USD</p>
          <ul className="my-5 grid gap-2 text-sm text-white/90">
            {sel.length ? <>{sel.map((n) => <li key={n}>✓ {n}</li>)}<li>⏱ {sp.l} ({sp.s})</li></> : <li>Select at least one service</li>}
          </ul>
          <a href={waLink(text)} target="_blank" rel="noopener noreferrer" className="btn w-full bg-white !text-[#3a2a9a] hover:-translate-y-0.5"><WaIcon /> Send on WhatsApp</a>
        </div>
      </Reveal>
    </div>
  )
}

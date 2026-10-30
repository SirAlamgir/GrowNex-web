import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FAQS } from '../data/content'
import { Reveal } from './ui'

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <div className="mx-auto max-w-3xl">
      {FAQS.map(([q, a], i) => {
        const o = open === i
        return (
          <Reveal key={q} delay={i * 0.05}>
            <div className={`mb-3 rounded-2xl border bg-surface px-5 transition sm:px-6 ${o ? 'border-brand2 shadow-soft' : 'border-line'}`}>
              <button onClick={() => setOpen(o ? -1 : i)} aria-expanded={o} className="flex w-full items-center justify-between gap-4 py-5 text-left font-display font-bold">
                {q}
                <motion.span animate={{ rotate: o ? 45 : 0 }} className="flex-none text-brand2"><Plus className="h-5 w-5" /></motion.span>
              </button>
              <AnimatePresence initial={false}>
                {o && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <p className="pb-5">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

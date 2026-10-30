import { useEffect, useRef } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { Circle, Code2, Palette, TrendingUp, Search, Video, PenLine, ShoppingCart, LayoutDashboard, Bot, Globe, Users, ShieldCheck, Clock, Heart, Target, Zap, MessageCircle, ClipboardCheck, PenTool, Rocket, Sparkles, Check as CheckIcon } from 'lucide-react'
const ICONS = { Code2, Palette, TrendingUp, Search, Video, PenLine, ShoppingCart, LayoutDashboard, Bot, Globe, Users, ShieldCheck, Clock, Heart, Target, Zap, MessageCircle, ClipboardCheck, PenTool, Rocket, Sparkles }
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { waLink } from '../config/site'

export const Icon = ({ name, className = 'h-6 w-6' }) => {
  const C = ICONS[name] || Circle
  return <C className={className} strokeWidth={2} />
}

export const WaIcon = ({ className = 'h-5 w-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1a7.8 7.8 0 0 1-3.9-3.4c-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.9 3.4.7.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3ZM12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2Z" />
  </svg>
)

/** Fade + slide up when scrolled into view */
export const Reveal = ({ children, delay = 0, y = 28, x = 0, className = '', as = 'div' }) => {
  const M = motion[as]
  return (
    <M className={className} initial={{ opacity: 0, y, x }} whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </M>
  )
}

export const SectionHead = ({ eyebrow, children, sub, light = false }) => (
  <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
    <Reveal><span className={`eyebrow ${light ? '!bg-white/10 !text-violet-200' : ''}`}>{eyebrow}</span></Reveal>
    <Reveal delay={0.08}><h2 className={`h2 mb-4 text-balance ${light ? '!text-white' : ''}`}>{children}</h2></Reveal>
    {sub && <Reveal delay={0.16}><p className={`text-base sm:text-lg ${light ? '!text-white/70' : ''}`}>{sub}</p></Reveal>}
  </div>
)

export const PageHero = ({ eyebrow, children, sub }) => (
  <section className="relative overflow-hidden pb-8 pt-14 text-center sm:pt-20">
    <div className="pointer-events-none absolute -right-20 -top-28 h-96 w-96 animate-float rounded-full bg-[#7c3aed] opacity-40 blur-[80px] dark:opacity-25" />
    <div className="pointer-events-none absolute inset-0 bg-grid-lines opacity-60 [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_30%,transparent_80%)]" />
    <div className="wrap relative">
      <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
      <Reveal delay={0.08}><h1 className="mx-auto mb-5 max-w-3xl text-balance font-display text-4xl font-extrabold tracking-[-.03em] sm:text-5xl lg:text-6xl">{children}</h1></Reveal>
      <Reveal delay={0.16}><p className="mx-auto max-w-2xl text-base sm:text-lg">{sub}</p></Reveal>
    </div>
  </section>
)

export const WaButton = ({ text, children = 'Chat on WhatsApp', className = 'btn btn-wa' }) => (
  <a href={waLink(text)} target="_blank" rel="noopener noreferrer" className={className}>
    <WaIcon /> {children}
  </a>
)

export const CTA = () => (
  <section className="section pt-4">
    <div className="wrap">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-[#150d45] px-6 py-14 text-center sm:px-10 sm:py-[4.5rem]">
          <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-grad opacity-70 blur-[60px]" />
          <div className="absolute -bottom-28 -right-14 h-64 w-64 rounded-full bg-grad opacity-70 blur-[60px]" />
          <div className="relative">
            <h2 className="h2 mb-4 !text-white">Ready to grow your business?</h2>
            <p className="mx-auto mb-8 max-w-xl text-base !text-white/80 sm:text-lg">Tell us about your project and get a free quote within 24 hours. No pressure, no hidden fees.</p>
            <div className="flex flex-wrap justify-center gap-3.5">
              <WaButton text="Hi Grow Nex, I'd like a free quote for my project." />
              <Link to="/contact" className="btn btn-ghost">Send a message <ArrowRight className="h-[18px] w-[18px]" /></Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
)

export const Check = ({ className = 'h-[18px] w-[18px] text-ok' }) => <CheckIcon className={`${className} flex-none`} strokeWidth={2.6} />

/** document.title per page */
export const useTitle = (t) =>
  useEffect(() => {
    document.title = t ? `${t} — Grow Nex` : 'Grow Nex — Freelancing Agency for Web, Design & Marketing'
  }, [t])

/** number that counts up when scrolled into view: "6+", "24h", "3 days" */
export const CountUp = ({ value, className = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const m = String(value).match(/^(\d+)(.*)$/)
  useEffect(() => {
    if (!inView || !m || !ref.current) return
    const c = animate(0, +m[1], { duration: 1.4, ease: 'easeOut', onUpdate: (v) => { ref.current.textContent = Math.round(v) + m[2] } })
    return () => c.stop()
  }, [inView])
  return <b ref={ref} className={className}>{m ? '0' + m[2] : value}</b>
}

import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { ArrowRight, Menu, Moon, Sun, X, Mail, Phone, Clock } from 'lucide-react'
import { SITE, phoneDisplay, waLink, mailLink } from '../config/site'
import { WaIcon } from './ui'
import markImg from '../assets/logo-mark.png'
import fullImg from '../assets/logo-full.webp'

const NAV = [['Home', '/'], ['Services', '/services'], ['Pricing', '/pricing'], ['About', '/about'], ['Contact', '/contact']]

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const toggle = () => {
    const d = !dark
    setDark(d)
    document.documentElement.classList.toggle('dark', d)
    try { localStorage.setItem('grownex-theme', d ? 'dark' : 'light') } catch (e) {}
  }
  return [dark, toggle]
}

function ScrollManager() {
  const { pathname, state } = useLocation()
  useEffect(() => {
    if (state?.scrollTo) {
      const t = setTimeout(() => document.getElementById(state.scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 120)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0 })
  }, [pathname, state])
  return null
}

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, toggle] = useTheme()
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${scrolled ? 'border-line bg-bg/85 shadow-[0_6px_24px_-14px_rgba(14,26,53,.3)]' : 'border-transparent bg-bg/70'}`}>
      <div className="wrap flex h-[72px] items-center justify-between gap-4 sm:h-[76px]">
        <Link to="/" className="flex items-center gap-3">
          <img src={markImg} alt="Grow Nex logo" className="h-11 w-auto drop-shadow-[0_6px_14px_rgba(124,58,237,.35)] sm:h-12" />
          <span className="leading-none">
            <b className="grad-text block font-display text-lg font-extrabold tracking-wide">GROW NEX</b>
            <small className="hidden text-[.62rem] font-semibold uppercase tracking-[.14em] text-muted sm:block">{SITE.tagline}</small>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-line bg-surface p-1.5 lg:flex">
          {NAV.map(([n, to]) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) =>
              `rounded-full px-[18px] py-2 font-display text-sm font-semibold transition ${isActive ? 'bg-grad text-white' : 'text-muted hover:text-ink'}`}>{n}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <button onClick={toggle} aria-label="Toggle dark mode" className="grid h-[42px] w-[42px] place-items-center rounded-full border border-line bg-surface transition hover:border-brand2 hover:text-brand2">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={dark ? 'm' : 's'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                {dark ? <Moon className="h-[19px] w-[19px]" /> : <Sun className="h-[19px] w-[19px]" />}
              </motion.span>
            </AnimatePresence>
          </button>
          <Link to="/contact" className="btn btn-primary btn-sm hidden sm:inline-flex">Get Free Quote <ArrowRight className="h-4 w-4" /></Link>
          <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} className="grid h-[42px] w-[42px] place-items-center rounded-full border border-line bg-surface lg:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }} className="overflow-hidden border-t border-line bg-bg lg:hidden">
            <div className="wrap flex flex-col gap-1 py-4">
              {NAV.map(([n, to], i) => (
                <motion.div key={to} initial={{ x: -16, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.04 * i }}>
                  <NavLink to={to} end={to === '/'} className={({ isActive }) => `block rounded-2xl px-4 py-3.5 font-display font-semibold ${isActive ? 'bg-grad text-white' : 'hover:bg-surface'}`}>{n}</NavLink>
                </motion.div>
              ))}
              <Link to="/contact" className="btn btn-primary mt-2 w-full">Get Free Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function Footer() {
  const l = 'block py-1.5 text-[.94rem] text-muted transition hover:translate-x-1 hover:text-brand2'
  return (
    <footer className="mt-10 border-t border-line bg-surface pb-8 pt-16">
      <div className="wrap">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <img src={fullImg} alt="Grow Nex" className="mb-4 w-40 rounded-3xl shadow-glow" />
            <p className="max-w-xs">A team of skilled freelancers building websites, brands and marketing that help businesses grow.</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm uppercase tracking-widest">Pages</h4>
            {NAV.map(([n, to]) => <Link key={to} to={to} className={l}>{n}</Link>)}
          </div>
          <div>
            <h4 className="mb-4 text-sm uppercase tracking-widest">Services</h4>
            {[['Web Development', 'web'], ['Graphic Design', 'design'], ['Digital Marketing', 'marketing'], ['Video Editing', 'video']].map(([n, id]) => (
              <Link key={id} to="/services" state={{ scrollTo: id }} className={l}>{n}</Link>
            ))}
          </div>
          <div>
            <h4 className="mb-4 text-sm uppercase tracking-widest">Get in touch</h4>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className={`${l} flex items-center gap-2`}><WaIcon className="h-4 w-4" /> {phoneDisplay()}</a>
            <a href={mailLink()} className={`${l} flex items-center gap-2 break-all`}><Mail className="h-4 w-4 flex-none" /> {SITE.email}</a>
            <span className="flex items-center gap-2 py-1.5 text-[.94rem] text-muted"><Clock className="h-4 w-4 flex-none" /> {SITE.hours}</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-line pt-6 text-sm text-muted">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>{SITE.tagline}</span>
        </div>
      </div>
    </footer>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 })
  return <motion.div style={{ scaleX: x }} className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-grad" />
}

function WhatsAppFloat() {
  return (
    <motion.a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 18 }} whileHover={{ scale: 1.1 }}
      className="fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,.7)] sm:h-[58px] sm:w-[58px]">
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366] opacity-30" />
      <WaIcon className="relative h-7 w-7" />
    </motion.a>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  return (
    <>
      <ScrollManager />
      <ScrollProgress />
      <Header />
      <motion.main key={pathname} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <Outlet />
      </motion.main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

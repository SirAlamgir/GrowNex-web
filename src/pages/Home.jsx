import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Check as CheckIcon, Code2, Palette, TrendingUp, Search, Zap, MessageCircle } from 'lucide-react'
import { SERVICES, MARQUEE, STEPS, WHY, STATS, WORK, PLANS } from '../data/content'
import { CountUp, CTA, Icon, Reveal, SectionHead, WaButton, useTitle } from '../components/ui'
import { PlanCard } from '../components/Plans'
import Faq from '../components/Faq'
import fullImg from '../assets/logo-full.webp'

/* ---------------- HERO ---------------- */
const WORDS = ['Websites', 'Branding', 'Marketing', 'Video', 'SEO']

function RotatingWord() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % WORDS.length), 2400)
    return () => clearInterval(t)
  }, [])
  return (
    <span className="relative block h-[1.18em] overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={WORDS[i]} initial={{ y: '100%', opacity: 0 }} animate={{ y: '0%', opacity: 1 }} exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }} className="grad-text absolute inset-0 block">
          {WORDS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

const ORBIT = [
  { a: 0, I: Code2, c: 'from-[#4527b8] to-[#7c3aed]' },
  { a: 90, I: Palette, c: 'from-[#ff7a45] to-[#ffb020]' },
  { a: 180, I: TrendingUp, c: 'from-[#0e9f8e] to-[#2d8cff]' },
  { a: 270, I: Search, c: 'from-[#e0447a] to-[#ff8a3d]' },
]

function HeroVisual() {
  // gentle 3D tilt that follows the pointer
  const mx = useMotionValue(0), my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [9, -9]), { stiffness: 120, damping: 14 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-11, 11]), { stiffness: 120, damping: 14 })
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const leave = () => { mx.set(0); my.set(0) }
  return (
    <div onPointerMove={move} onPointerLeave={leave} className="relative mx-auto aspect-square w-full max-w-[520px] [perspective:1100px]">
      <div className="absolute inset-[12%] rounded-full bg-grad opacity-40 blur-3xl dark:opacity-30" />
      {/* orbit rings */}
      <div className="absolute inset-[2%] animate-orbit rounded-full border border-dashed border-brand2/35">
        {ORBIT.map(({ a, I, c }) => (
          <div key={a} className="absolute inset-0" style={{ transform: `rotate(${a}deg)` }}>
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              <div style={{ transform: `rotate(${-a}deg)` }}>
                <div className="animate-orbit-rev">
                  <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-soft sm:h-12 sm:w-12 ${c}`}><I className="h-5 w-5" /></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-[15%] rounded-full border border-brand2/15" />
      {/* logo card */}
      <motion.div style={{ rotateX: rx, rotateY: ry }} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-[20%] [transform-style:preserve-3d]">
        <div className="relative h-full w-full animate-bob">
          <img src={fullImg} alt="Grow Nex — Innovate. Elevate. Accelerate." className="h-full w-full rounded-[1.6rem] object-cover shadow-glow ring-1 ring-white/60 sm:rounded-[2rem]" />
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[1.6rem] sm:rounded-[2rem]">
            <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </span>
        </div>
      </motion.div>
      {/* floating chips */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="absolute -right-1 bottom-[10%] z-10 sm:right-0">
        <div className="flex animate-bob items-center gap-2.5 rounded-2xl border border-line bg-surface/95 px-3.5 py-2.5 font-display text-xs font-bold shadow-soft backdrop-blur sm:text-sm">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-grad text-white"><Zap className="h-4 w-4" /></span>
          <span>Fast start<small className="block font-sans text-[.7rem] font-medium text-muted">First draft in ~3 days</small></span>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="absolute -left-1 top-[9%] z-10 sm:left-0">
        <div className="flex animate-bob items-center gap-2.5 rounded-2xl border border-line bg-surface/95 px-3.5 py-2.5 font-display text-xs font-bold shadow-soft backdrop-blur [animation-delay:-3s] sm:text-sm">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-[#16a37a] to-[#2dd4a0] text-white"><MessageCircle className="h-4 w-4" /></span>
          <span>Direct chat<small className="block font-sans text-[.7rem] font-medium text-muted">Talk to the doer</small></span>
        </div>
      </motion.div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-8 sm:pb-24 sm:pt-14">
      <div className="pointer-events-none absolute -right-24 -top-32 h-[440px] w-[440px] animate-float rounded-full bg-[#7c3aed] opacity-35 blur-[90px] dark:opacity-25" />
      <div className="pointer-events-none absolute -bottom-40 -left-28 h-[380px] w-[380px] animate-float rounded-full bg-[#4527b8] opacity-25 blur-[90px] [animation-delay:-6s] dark:opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-grid-lines opacity-50 [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_30%,transparent_80%)]" />
      <div className="wrap relative grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-8">
        <div className="text-center lg:text-left">
          <Reveal><span className="eyebrow"><i className="h-[7px] w-[7px] animate-dot rounded-full bg-ok" /> Now taking new projects</span></Reveal>
          <Reveal delay={0.08}>
            <h1 className="mb-5 font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-[-.035em] sm:text-6xl lg:text-[4.1rem]">
              Grow your business with <RotatingWord />
            </h1>
          </Reveal>
          <Reveal delay={0.16}><p className="mx-auto max-w-xl text-base sm:text-xl lg:mx-0">Grow Nex is a team of skilled freelancers working as one agency — agency-quality results, direct communication and friendly prices.</p></Reveal>
          <Reveal delay={0.24} className="my-8 flex flex-col justify-center gap-3.5 sm:flex-row lg:justify-start">
            <Link to="/contact" className="btn btn-primary">Get a Free Quote <ArrowRight className="h-[18px] w-[18px]" /></Link>
            <WaButton text="Hi Grow Nex, I'd like to discuss a project.">Chat on WhatsApp</WaButton>
          </Reveal>
          <Reveal delay={0.3} className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted lg:justify-start">
            {['Free consultation', 'Clear fixed prices', 'Fast delivery'].map((t) => (
              <span key={t} className="flex items-center gap-2"><CheckIcon className="h-[18px] w-[18px] text-ok" />{t}</span>
            ))}
          </Reveal>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}

/* ---------------- HOW IT WORKS ---------------- */
function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#0b0a24] py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#7c3aed] opacity-25 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#4527b8] opacity-40 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[.07] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:26px_26px]" />
      <div className="wrap relative">
        <SectionHead light eyebrow="How it works" sub="A clear process, so you always know what's happening and what's next.">
          From idea to launch in <span className="bg-gradient-to-r from-[#c4b5fd] to-[#f0abfc] bg-clip-text text-transparent">4 simple steps</span>
        </SectionHead>
        <div className="relative">
          {/* connecting line (desktop) */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[38px] hidden h-0.5 bg-white/10 lg:block">
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: 'easeInOut' }}
              className="h-full origin-left bg-gradient-to-r from-[#7c3aed] via-[#c084fc] to-[#f0abfc]" />
          </div>
          <div className="grid gap-x-6 gap-y-16 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:pt-0">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.12} className="relative">
                <motion.div whileHover={{ y: -8 }} className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[.05] px-6 pb-14 pt-14 text-center backdrop-blur transition-colors hover:border-violet-400/50 hover:bg-white/[.09] lg:mt-10">
                  <span className="pointer-events-none absolute -bottom-8 -right-2 font-display text-[6.5rem] font-extrabold leading-none text-white/[.04]">0{i + 1}</span>
                  <span className="mb-3 inline-block rounded-full bg-violet-400/15 px-3 py-1 font-display text-[.7rem] font-bold uppercase tracking-widest text-violet-200">{s.tag}</span>
                  <h3 className="mb-2 text-xl font-bold text-white">{s.t}</h3>
                  <p className="!mb-0 text-[.95rem] !text-white/65">{s.d}</p>
                </motion.div>
                <div className="absolute left-1/2 top-[-38px] z-10 -translate-x-1/2 lg:top-0">
                  <div className="relative grid h-[76px] w-[76px] place-items-center rounded-full bg-grad shadow-[0_0_0_8px_#0b0a24,0_0_40px_rgba(168,85,247,.6)]">
                    <Icon name={s.icon} className="h-8 w-8 text-white" />
                    <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-white font-display text-xs font-extrabold text-[#4527b8]">{i + 1}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:mt-16 sm:flex-row">
          <span className="font-display font-semibold text-white/80">Ready for step 1?</span>
          <WaButton text="Hi Grow Nex, I'd like to start a project.">Start on WhatsApp</WaButton>
          <Link to="/pricing" className="btn border-white/25 text-white hover:border-white hover:bg-white/10">See pricing <ArrowRight className="h-[18px] w-[18px]" /></Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- PAGE ---------------- */
export default function Home() {
  useTitle('')
  const mq = [...MARQUEE, ...MARQUEE]
  return (
    <>
      <Hero />

      {/* MARQUEE */}
      <div className="relative overflow-hidden border-y border-line bg-surface py-5 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 font-display text-base font-bold text-muted">
          {mq.map((m, i) => <span key={i} className="flex items-center gap-10 whitespace-nowrap">{m}<span className="text-brand2">✦</span></span>)}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="What we do" sub="One team for your website, brand and marketing, so everything works together.">Everything your business needs to <span className="grad-text">go digital</span></SectionHead>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 0.08}>
                <Link to="/services" state={{ scrollTo: s.id }} className="card group block h-full">
                  <div className="ico transition duration-300 group-hover:-rotate-6 group-hover:scale-110"><Icon name={s.icon} className="h-6 w-6" /></div>
                  <span className="absolute right-6 top-5 font-display text-5xl font-extrabold text-brand2/10 transition group-hover:text-brand2/20">0{i + 1}</span>
                  <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="mt-2 inline-flex items-center gap-2 font-display text-sm font-bold text-brand2">Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* WORK */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Our work" sub="A taste of what we create for clients.">Projects we love to <span className="grad-text">build</span></SectionHead>
          <div className="grid gap-6 md:grid-cols-3">
            {WORK.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.1}>
                <motion.div whileHover={{ y: -8 }} className="overflow-hidden rounded-3xl border border-line bg-surface shadow-soft transition-shadow hover:shadow-glow">
                  <div className={`flex aspect-[16/11] flex-col gap-2 bg-gradient-to-br p-5 ${w.bg}`}>
                    <div className="flex gap-1.5">{[0, 1, 2].map((d) => <i key={d} className="h-2 w-2 rounded-full bg-white/60" />)}</div>
                    <div className="mt-3 h-5 w-[70%] rounded-md bg-white/90" />
                    <div className="h-3 w-[45%] rounded-md bg-white/55" />
                    <div className="mt-1 h-7 w-[30%] rounded-full bg-white" />
                    <div className="mt-auto grid grid-cols-3 gap-2">{[0, 1, 2].map((d) => <b key={d} className="h-12 rounded-xl bg-white/30" />)}</div>
                  </div>
                  <div className="p-6">
                    <span className="mb-1 block font-display text-[.7rem] font-bold uppercase tracking-widest text-brand2">{w.tag}</span>
                    <h3 className="mb-1 text-xl font-bold">{w.t}</h3>
                    <p className="!mb-0">{w.d}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-sm">Sample concept previews — real client case studies are shared on request.</p>
        </div>
      </section>

      {/* WHY + STATS */}
      <section className="section bg-bg2">
        <div className="wrap">
          <SectionHead eyebrow="Why Grow Nex">Agency quality, <span className="grad-text">freelancer flexibility</span></SectionHead>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.08}>
                <div className="card h-full"><div className="ico"><Icon name={w.icon} /></div><h3 className="mb-2 text-lg font-bold">{w.t}</h3><p className="!mb-0">{w.d}</p></div>
              </Reveal>
            ))}
          </div>
          <Reveal className="relative mt-14 grid grid-cols-2 gap-6 overflow-hidden rounded-[2rem] bg-grad p-8 text-white shadow-glow sm:p-12 lg:grid-cols-4">
            <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/10" />
            <div className="absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-white/[.07]" />
            {STATS.map((s) => (
              <div key={s.l} className="relative">
                <CountUp value={s.v} className="block font-display text-3xl font-extrabold leading-none sm:text-5xl" />
                <span className="mt-1 block text-sm opacity-85">{s.l}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="section">
        <div className="wrap">
          <SectionHead eyebrow="Pricing" sub="Starting prices for our most popular services. Need something custom? Use the estimator.">Simple packages, <span className="grad-text">fair prices</span></SectionHead>
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {[PLANS.web[0], PLANS.web[1], PLANS.design[1]].map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1} className="flex"><div className="w-full"><PlanCard plan={{ ...p, pop: i === 1 }} cat={i === 2 ? 'design' : 'web'} /></div></Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center"><Link to="/pricing" className="btn btn-ghost">See all packages &amp; estimator <ArrowRight className="h-[18px] w-[18px]" /></Link></Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-bg2">
        <div className="wrap">
          <SectionHead eyebrow="FAQ">Questions we often get</SectionHead>
          <Faq />
        </div>
      </section>
      <CTA />
    </>
  )
}

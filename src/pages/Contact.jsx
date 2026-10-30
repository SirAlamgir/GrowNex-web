import { useState } from 'react'
import { ArrowRight, Clock, Globe, Mail } from 'lucide-react'
import { SITE, mailLink, phoneDisplay, waLink } from '../config/site'
import { PageHero, Reveal, SectionHead, WaIcon, useTitle } from '../components/ui'
import Faq from '../components/Faq'

const SERVICES = ['Website', 'Logo / Branding', 'Social Media Marketing', 'SEO', 'Video Editing', 'Content Writing', 'Other']
const BUDGETS = ['Under $200', '$200 – $500', '$500 – $1000', '$1000+']

export default function Contact() {
  useTitle('Contact')
  const [f, setF] = useState({ name: '', email: '', service: SERVICES[0], budget: BUDGETS[0], msg: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const body = `New inquiry from website\nName: ${f.name}\nEmail: ${f.email}\nService: ${f.service}\nBudget: ${f.budget}\nDetails: ${f.msg}`
  const submit = (how) => (e) => {
    e.preventDefault()
    const form = e.currentTarget.form
    if (!form.reportValidity()) return
    if (how === 'mail') window.location.href = mailLink('New project inquiry', body)
    else window.open(waLink(body), '_blank', 'noopener')
  }
  const rows = [
    { icon: <WaIcon className="h-[22px] w-[22px]" />, t: 'WhatsApp', s: phoneDisplay(), href: waLink(), ext: true },
    { icon: <Mail className="h-[22px] w-[22px]" />, t: 'Email', s: SITE.email, href: mailLink() },
    { icon: <Clock className="h-[22px] w-[22px]" />, t: 'Working hours', s: SITE.hours },
    { icon: <Globe className="h-[22px] w-[22px]" />, t: 'Serving clients worldwide', s: 'English & Urdu support' },
  ]
  return (
    <>
      <PageHero eyebrow="Contact" sub="Fill the form or message us directly. We reply within 24 hours.">Let's talk about your <span className="grad-text">project</span></PageHero>
      <section className="section !pt-8">
        <div className="wrap grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            {rows.map((r, i) => {
              const C = r.href ? 'a' : 'div'
              return (
                <Reveal key={r.t} delay={i * 0.08}>
                  <C {...(r.href ? { href: r.href, ...(r.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {}) } : {})}
                    className={`mb-3.5 flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 transition sm:p-[18px] ${r.href ? 'hover:translate-x-1 hover:border-brand2' : ''}`}>
                    <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-grad text-white">{r.icon}</span>
                    <span className="min-w-0"><b className="block font-display text-[.95rem]">{r.t}</b><span className="block break-words text-sm text-muted">{r.s}</span></span>
                  </C>
                </Reveal>
              )
            })}
          </div>
          <Reveal delay={0.1}>
            <form className="card-static !p-6 sm:!p-9" onSubmit={(e) => e.preventDefault()}>
              <div className="mb-5 grid gap-4 sm:grid-cols-2">
                <div><label className="label">Your name</label><input className="input" required value={f.name} onChange={set('name')} placeholder="John Doe" /></div>
                <div><label className="label">Email</label><input className="input" type="email" required value={f.email} onChange={set('email')} placeholder="you@email.com" /></div>
              </div>
              <div className="mb-5 grid gap-4 sm:grid-cols-2">
                <div><label className="label">Service needed</label><select className="input" value={f.service} onChange={set('service')}>{SERVICES.map((s) => <option key={s}>{s}</option>)}</select></div>
                <div><label className="label">Budget</label><select className="input" value={f.budget} onChange={set('budget')}>{BUDGETS.map((s) => <option key={s}>{s}</option>)}</select></div>
              </div>
              <div className="mb-5"><label className="label">Project details</label><textarea className="input min-h-[130px] resize-y" required value={f.msg} onChange={set('msg')} placeholder="Tell us about your business and what you need…" /></div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button type="submit" onClick={submit('wa')} className="btn btn-wa flex-1"><WaIcon /> Send via WhatsApp</button>
                <button type="submit" onClick={submit('mail')} className="btn btn-primary flex-1">Send via Email <ArrowRight className="h-[18px] w-[18px]" /></button>
              </div>
              <p className="mt-3 text-center text-xs">Your message opens in WhatsApp or your email app, ready to send.</p>
            </form>
          </Reveal>
        </div>
      </section>
      <section className="section bg-bg2">
        <div className="wrap"><SectionHead eyebrow="FAQ">Before you message us</SectionHead><Faq /></div>
      </section>
    </>
  )
}

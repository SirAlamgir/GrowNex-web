/**
 * =====================================================================
 *  SINGLE SOURCE OF TRUTH FOR CONTACT DETAILS
 *  Change the WhatsApp number or email here — it updates everywhere
 *  (header, footer, buttons, floating button, forms, pricing, etc.)
 * =====================================================================
 */
export const SITE = {
  name: 'Grow Nex',
  tagline: 'Innovate. Elevate. Accelerate.',
  whatsapp: '03154572266', // write it in any format: 0315..., +92 315..., 92315...
  email: 'hello@grownex.agency', // TODO: put your real business email
  hours: 'Mon–Sat, 10am – 8pm (PKT)',
  countryCode: '92', // used to convert a leading 0 into an international number
}

/** digits only, international format -> 923154572266 */
export const waNumber = () => {
  let d = SITE.whatsapp.replace(/\D/g, '')
  if (d.startsWith('00')) d = d.slice(2)
  else if (d.startsWith('0')) d = SITE.countryCode + d.slice(1)
  return d
}
/** pretty display -> +92 315 4572266 */
export const phoneDisplay = () => {
  const d = waNumber()
  return d.startsWith(SITE.countryCode)
    ? `+${SITE.countryCode} ${d.slice(SITE.countryCode.length, SITE.countryCode.length + 3)} ${d.slice(SITE.countryCode.length + 3)}`
    : `+${d}`
}
export const waLink = (text = "Hi Grow Nex, I'd like to discuss a project.") =>
  `https://wa.me/${waNumber()}?text=${encodeURIComponent(text)}`
export const mailLink = (subject = 'New project inquiry', body = '') =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`

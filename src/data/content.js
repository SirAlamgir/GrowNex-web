export const SERVICES = [
  { id: 'web', icon: 'Code2', title: 'Web Development', desc: 'Fast, modern websites that look great on every device and are built to turn visitors into customers.',
    points: ['Business & portfolio websites', 'WordPress, Webflow & custom code', 'Landing pages & sales funnels', 'Speed, security & SEO-ready'],
    tools: ['HTML/CSS/JS', 'React', 'WordPress', 'Webflow'], bg: 'from-[#4f2bc4] to-[#7c3aed]' },
  { id: 'design', icon: 'Palette', title: 'Graphic Design & Branding', desc: 'Logos and brand identities that make you look professional and stay memorable.',
    points: ['Logo & brand identity', 'Social media creatives', 'Brochures, menus & packaging', 'Pitch decks & presentations'],
    tools: ['Figma', 'Photoshop', 'Illustrator', 'Canva Pro'], bg: 'from-[#ff7a45] to-[#ffb020]' },
  { id: 'marketing', icon: 'TrendingUp', title: 'Digital & Social Marketing', desc: 'Content and paid campaigns that bring real leads — not just likes.',
    points: ['Social media management', 'Meta, Google & TikTok ads', 'Content calendars & reels', 'Monthly performance reports'],
    tools: ['Meta Ads', 'Google Ads', 'TikTok', 'Analytics'], bg: 'from-[#0e9f8e] to-[#2d8cff]' },
  { id: 'seo', icon: 'Search', title: 'SEO & Growth', desc: 'Get found on Google by the customers who are already searching for you.',
    points: ['Keyword & competitor research', 'On-page & technical SEO', 'Local SEO & Google Business', 'Blog & backlink strategy'],
    tools: ['Search Console', 'Ahrefs', 'SEMrush', 'Schema'], bg: 'from-[#7c3aed] to-[#c04fd0]' },
  { id: 'video', icon: 'Video', title: 'Video Editing & Motion', desc: 'Scroll-stopping reels, ads and explainers edited to hold attention.',
    points: ['Reels, Shorts & TikToks', 'YouTube editing & thumbnails', 'Promo & explainer videos', 'Subtitles, motion graphics'],
    tools: ['Premiere Pro', 'After Effects', 'CapCut', 'DaVinci'], bg: 'from-[#e0447a] to-[#ff8a3d]' },
  { id: 'writing', icon: 'PenLine', title: 'Content & Copywriting', desc: 'Words that explain what you do and persuade people to act.',
    points: ['Website & landing page copy', 'Blog articles & SEO content', 'Product descriptions', 'Email & ad copywriting'],
    tools: ['English', 'Urdu', 'SEO writing', 'Brand voice'], bg: 'from-[#12335c] to-[#4f2bc4]' },
]

export const EXTRA_SERVICES = [
  { icon: 'ShoppingCart', title: 'Shopify & E-commerce', desc: 'Online stores that sell, with payments and shipping set up.' },
  { icon: 'LayoutDashboard', title: 'UI/UX Design', desc: 'Clean app and website interfaces designed in Figma.' },
  { icon: 'Bot', title: 'Automation & Chatbots', desc: 'WhatsApp bots and workflow automation that save you time.' },
  { icon: 'Globe', title: 'Website Maintenance', desc: 'Updates, backups, security and fixes — monthly or one-time.' },
]

export const MARQUEE = ['Web Development', 'Logo & Branding', 'Social Media Marketing', 'SEO', 'Video Editing', 'Shopify Stores', 'UI/UX Design', 'Copywriting', 'Meta & Google Ads', 'WordPress']

export const STEPS = [
  { icon: 'MessageCircle', tag: 'Day 1', t: 'Tell us your goal', d: 'Share your idea on WhatsApp or the form. We reply within 24 hours with questions and a free quote.' },
  { icon: 'ClipboardCheck', tag: 'Day 1–2', t: 'Plan & agree', d: 'We confirm scope, timeline and price in writing. You approve before any work starts.' },
  { icon: 'PenTool', tag: 'Days 3–10', t: 'Design & build', d: 'You see progress at every stage and give feedback. Revisions are included.' },
  { icon: 'Rocket', tag: 'Launch day', t: 'Launch & support', d: 'We deliver all files, help you go live and stay available after launch.' },
]

export const WHY = [
  { icon: 'Users', t: 'Talk to the doer', d: 'No account managers in between. You chat directly with the specialist on your project.' },
  { icon: 'ShieldCheck', t: 'Fixed, honest pricing', d: 'You know the full cost upfront. No surprise charges or hidden extras.' },
  { icon: 'Clock', t: 'On-time delivery', d: 'Clear milestones and deadlines, agreed in writing before we start.' },
  { icon: 'Heart', t: 'Revisions included', d: "We keep refining until you're happy with the result." },
]

export const STATS = [
  { v: '6+', l: 'Core services' }, { v: '24h', l: 'Reply time' },
  { v: '100%', l: 'Custom work, no templates' }, { v: '3 days', l: 'To your first draft' },
]

export const WORK = [
  { tag: 'Web Development', t: 'Business Website', d: 'Clean, fast, mobile-first company website with lead forms.', bg: 'from-[#4f2bc4] to-[#7c3aed]' },
  { tag: 'Branding', t: 'Brand Identity Kit', d: 'Logo, colors, typography and social templates in one system.', bg: 'from-[#ff7a45] to-[#ffb020]' },
  { tag: 'Marketing', t: 'Ad Campaign Funnel', d: 'Landing page + Meta ads built to generate qualified leads.', bg: 'from-[#0e9f8e] to-[#2d8cff]' },
]

export const PLANS = {
  web: [
    { n: 'Starter', p: 150, d: 'Perfect for personal brands & small businesses.', f: ['1–3 page responsive website', 'Mobile-friendly design', 'Contact form + WhatsApp button', 'Basic on-page SEO', '7 days delivery'] },
    { n: 'Business', p: 450, pop: true, d: 'A complete website that actually brings customers.', f: ['Up to 8 custom-designed pages', 'Blog / portfolio / CMS setup', 'Speed & SEO optimisation', 'Google Analytics + Search Console', '30 days free support', '12 days delivery'] },
    { n: 'E-commerce', p: 900, d: 'Sell online with a store built to convert.', f: ['Shopify / WooCommerce store', 'Up to 50 products uploaded', 'Payment & shipping setup', 'Abandoned-cart & email flows', '60 days free support', '20 days delivery'] },
  ],
  design: [
    { n: 'Brand Starter', p: 80, d: 'Look professional from day one.', f: ['Logo design (3 concepts)', '2 revision rounds', 'Colors & font guide', 'PNG, SVG & PDF files', '3 days delivery'] },
    { n: 'Brand Identity', p: 250, pop: true, d: 'A full identity your customers remember.', f: ['Logo + brand guidelines', 'Business card & letterhead', 'Social media kit (10 posts)', 'Unlimited minor edits (14 days)', 'All source files', '7 days delivery'] },
    { n: 'Social Pack', p: 120, d: 'Monthly creatives that keep you consistent.', f: ['20 post / story designs', 'Reels & short video edits (4)', 'Content calendar', 'Brand-consistent templates', 'Monthly plan'] },
  ],
  marketing: [
    { n: 'Launch', p: 200, d: 'Get your digital presence set up right.', f: ['Social profiles setup & optimisation', 'Content plan (1 month)', '12 posts designed & scheduled', 'Basic hashtag & audience research', 'Monthly report'] },
    { n: 'Growth', p: 450, pop: true, d: 'Consistent growth with ads + content.', f: ['20 posts + 4 reels per month', 'Meta / Google ads management', 'SEO keyword & content plan', 'Lead tracking dashboard', 'Weekly check-in call', 'Monthly report'] },
    { n: 'Scale', p: 900, d: 'Full-funnel marketing for serious growth.', f: ['Multi-channel ads (Meta, Google, TikTok)', 'Landing pages + A/B testing', 'Email & WhatsApp automation', 'Dedicated account manager', 'Bi-weekly strategy calls'] },
  ],
}
export const PLAN_TABS = [{ k: 'web', l: 'Websites' }, { k: 'design', l: 'Design & Branding' }, { k: 'marketing', l: 'Marketing' }]

export const ESTIMATE_SERVICES = [
  ['Website (up to 5 pages)', 300], ['Logo & brand identity', 150], ['Social media management (monthly)', 250], ['SEO optimisation', 200],
  ['Video editing (5 videos)', 120], ['Content writing (10 pieces)', 100], ['Ads setup & management', 220], ['Shopify / e-commerce store', 600],
]
export const ESTIMATE_SPEED = [
  { k: 'flex', l: 'Flexible', s: '4+ weeks', m: 0.9 }, { k: 'std', l: 'Standard', s: '2–3 weeks', m: 1 }, { k: 'rush', l: 'Rush', s: 'under 1 week', m: 1.3 },
]

export const FAQS = [
  ['How do we get started?', "Message us on WhatsApp or fill the contact form. We'll discuss your goals, share a free quote within 24 hours and start once you approve the plan."],
  ['How long does a project take?', 'A simple website usually takes 5–7 days, a business website 10–14 days, and branding 3–7 days. We confirm the exact timeline before starting.'],
  ['How do payments work?', 'Typically 50% upfront to begin and 50% on delivery. For larger projects we split into milestones. We accept bank transfer and popular online payment methods.'],
  ['Do I own the final work?', 'Yes. After final payment you get full ownership and all source files.'],
  ['Do you work with international clients?', 'Absolutely. We work with clients in any time zone and communicate in English and Urdu.'],
]

export const VALUES = [
  { icon: 'Target', t: 'Results first', d: 'We measure success by your growth, not by hours spent.' },
  { icon: 'ShieldCheck', t: 'Honesty always', d: 'Clear communication, realistic timelines, fair prices.' },
  { icon: 'Zap', t: 'Always improving', d: 'We keep learning the latest tools and trends for you.' },
]
export const TEAM = [
  { a: 'F', r: 'Founder & Strategy', d: 'Plans every project and keeps it on track.' },
  { a: 'D', r: 'Web Developer', d: 'Builds fast, clean and secure websites.' },
  { a: 'G', r: 'Graphic Designer', d: 'Creates brands and visuals people remember.' },
  { a: 'M', r: 'Marketing Specialist', d: 'Runs ads, SEO and social growth.' },
]

# Grow Nex — React + Tailwind website

## Run
```
npm install
npm run dev      # development
npm run build    # production build -> dist/
```

## Change WhatsApp / email in ONE place
Edit `src/config/site.js`:
```js
whatsapp: '03154572266',
email: 'hello@grownex.agency',
```
It updates the header, footer, floating button, contact page, pricing buttons and forms.

## Edit content
Services, prices, FAQs, team, steps: `src/data/content.js`
Colors: `src/index.css` (CSS variables) and `tailwind.config.js`
Logo: `src/assets/logo-full.png`, `src/assets/logo-mark.png`

Uses HashRouter (`/#/services`) so it works on any static host without server config.

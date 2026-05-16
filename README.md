# Solvia Agency

Site vitrine Vite + React pour Solvia Agency.

## Structure propre

```text
solvia-agency/
├─ public/
│  ├─ fonts/           # Polices locales (.woff2, .woff, .ttf)
│  ├─ images/          # Images publiques simples
│  │  ├─ hero/
│  │  ├─ services/
│  │  └─ misc/
│  └─ favicon/
├─ src/
│  ├─ assets/
│  │  ├─ fonts/        # Polices importées par le code si besoin
│  │  ├─ images/       # Images utilisées directement dans React/CSS
│  │  ├─ icons/
│  │  └─ logos/
│  ├─ components/
│  ├─ config/
│  │  └─ site.js       # Textes et contenus du site
│  ├─ styles/
│  │  ├─ base.css
│  │  └─ sections.css
│  └─ main.jsx
├─ .gitignore
├─ package.json
└─ README.md
```

## Où mettre quoi

### Photos
- Photos simples à appeler directement par URL: `public/images/...`
- Exemples:
  - `public/images/hero/hero-main.jpg`
  - `public/images/services/site-vitrine.jpg`

Usage:
```jsx
<img src="/images/hero/hero-main.jpg" alt="Solvia" />
```

### Polices
- Polices locales: `public/fonts/...`
- Exemples:
  - `public/fonts/GeneralSans-Regular.woff2`
  - `public/fonts/GeneralSans-Medium.woff2`

Usage CSS:
```css
@font-face {
  font-family: 'General Sans';
  src: url('/fonts/GeneralSans-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
```

## Règle simple
- `public/` = fichiers faciles à déposer/remplacer
- `src/assets/` = assets gérés directement par le code
- `src/config/site.js` = tous les textes importants du site

## Commandes

```bash
npm install
npm run dev
npm run build
npm run preview
```

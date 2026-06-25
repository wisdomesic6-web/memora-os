# Memora OS — Landing Page

A high-end, futuristic landing page for **Memora OS** (Personal AI Infrastructure).
Next.js (App Router) + Tailwind CSS. Dark, glassmorphism, system-dashboard feel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
app/
  layout.jsx      # <html className="scroll-smooth"> + global metadata
  page.jsx        # the full landing page (hero, 5-panel showcase, timeline, footer)
  globals.css     # Tailwind directives
components/
  TopNav.jsx      # client component: desktop nav + mobile hamburger
tailwind.config.js
postcss.config.js
```

## Notes

- The **Initialize Memora** button links to `/app` — change it in `app/page.jsx` to your real entry route.
- Everything is styled with Tailwind utility classes only (no external CSS files).
- `app/page.jsx` is a Server Component; only `TopNav` is a Client Component (it uses state for the mobile menu).

## Deploy

Push to GitHub, then import the repo at https://vercel.com/new (Vercel auto-detects Next.js).

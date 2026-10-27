# Santlar Labs website

Bilingual (English / Spanish) marketing site for Santlar Labs, built with Next.js 16 and Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you'll be redirected to `/en` or `/es` based on your browser language.

## Where to change things

| What | File |
|---|---|
| All page text (English) | `dictionaries/en.ts` |
| All page text (Spanish) | `dictionaries/es.ts` |
| Email, LinkedIn, GitHub, booking link | `lib/site.ts` |
| Colors, fonts, animations | `app/globals.css` |
| Logo | `components/logo.tsx` and `app/icon.svg` |

### Adding project screenshots

1. Put the image in `public/work/`, e.g. `public/work/paureina-shop.png`.
2. In both dictionaries, set that project's `image` to `"/work/paureina-shop.png"`.

### Contact form

Without configuration the form opens the visitor's email app with the message pre-filled.
To receive submissions directly, create a free form at https://formspree.io and set
`NEXT_PUBLIC_FORMSPREE_ID` in your hosting environment (or `.env.local`).

### Games tab

Intentionally hidden until the Steam page for the roguelite is live.

## Deploy

Push to GitHub and import the repo in Vercel. Set `NEXT_PUBLIC_SITE_URL=https://santlarlabs.com`
and point the domain's DNS to Vercel.

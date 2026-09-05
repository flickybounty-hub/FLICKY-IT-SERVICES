# Flicky IT Services — Website

A single-page website for Flicky IT Services: IT support, networking, Microsoft 365, cybersecurity, backups, business websites, and Google Business Profile setup, based in Lagos, Nigeria.

## What's in this folder

```
flicky-it-services/
├── index.html                  Page structure and content
├── README.md                    This file
└── assets/
    ├── css/
    │   └── style.css            All styling
    ├── js/
    │   └── script.js            Mobile menu, scroll-spy nav, dial animation
    ├── fonts/
    │   ├── fraunces-latin-wght-normal.woff2
    │   ├── fraunces-latin-wght-italic.woff2
    │   ├── jetbrains-mono-latin-wght-normal.woff2
    │   └── inter-latin-wght-normal.woff2
    └── images/
        ├── favicon.svg           Browser tab icon
        └── logo.svg              Standalone brand mark, for reuse elsewhere (business cards, social profiles)
```

Everything is self-contained — no external CDN calls for fonts, no build step, no dependencies. The site works completely offline once downloaded.

## How to view it right now

Just double-click `index.html`. It opens directly in any browser — no server or install required.

## How to put it live on the internet

The site is a static file, so any free static host works. Two easy options:

**Option A — GitHub Pages**
1. Create a new repository on GitHub and upload this whole folder (keep the `assets` folder alongside `index.html`).
2. Go to the repo's **Settings → Pages**.
3. Under "Build and deployment," set Source to **Deploy from a branch**, pick `main` and `/(root)`, then Save.
4. Your site goes live at `https://yourusername.github.io/your-repo-name/` within about a minute.

**Option B — Netlify or Vercel (drag-and-drop)**
1. Go to netlify.com or vercel.com and sign up (free).
2. Drag this whole folder onto their dashboard.
3. You get a live URL immediately, and can later connect a custom domain.

## Before you launch — things to double-check

- **WhatsApp number**: every "Chat on WhatsApp" button links to `https://wa.me/2348103242073`. Confirm this matches the number registered on your WhatsApp Business app.
- **WhatsApp pre-filled messages**: each button also carries a `?text=...` parameter that pre-fills the chat with a message matching that button's context (e.g. the "Start this plan" button pre-fills a message naming that plan). If you change the phone number, keep the `?text=...` part of each link intact.
- **Email**: contact links point to `jason@flickybounty.com`.
- **YouTube**: header and footer link to `https://www.youtube.com/@TechtroubleshootingGuide`.
- **Domain-dependent SEO tags**: near the top of `index.html`, the `<link rel="canonical">` tag and the JSON-LD structured data block both use a placeholder domain (`flickyitservices.com`). Once you register a real domain and the site is live there, update both to match — this is what search engines use to know the site's real address.
- **Pricing and testimonial**: the plan prices (₦15,000 / ₦45,000 / ₦95,000) and the client quote in the testimonial section are placeholders. Swap in real numbers and a real quote once you have one.

## Making small edits yourself

| To change... | Edit this file | Search for... |
|---|---|---|
| Phone number | `index.html` | `2348103242073` |
| Email | `index.html` | `jason@flickybounty.com` |
| Prices | `index.html` | `₦15,000`, `₦45,000`, `₦95,000` |
| Services list | `index.html` | `service-cell` |
| Colors | `assets/css/style.css` | the `:root { ... }` block near the top |
| Mobile menu / animations | `assets/js/script.js` | — |

## Notes on the design

- **Fonts are fully self-hosted** — the `.woff2` files in `assets/fonts` are variable fonts (Fraunces, JetBrains Mono, Inter), so no internet connection or Google Fonts CDN call is needed for them to display correctly.
- The color system uses two brand colors — blue and emerald — defined once as CSS variables in `style.css` (`--brass` for blue, `--teal` for emerald, naming left over from early drafts) so they're easy to retune in one place.
- Built mobile-first with a working hamburger menu, a floating WhatsApp button on small screens, and fluid type sizing.

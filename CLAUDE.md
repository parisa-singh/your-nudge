# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Marketing website for **Your Nudge**, an iOS mindfulness app (App Store ID: 6739236420).
Hosted on GitHub Pages at: `https://parisa-singh.github.io/Your-Nudge-Website/`
Target domain: `https://yournudge.com/` (custom domain — not yet configured)

## Tech Stack
- Plain HTML5, CSS3, Vanilla JS — no build tools, no frameworks
- GitHub Pages for hosting (deploys automatically from `main` branch, ~30s delay)
- Google Fonts: Playfair Display (headings) + DM Sans (body)

## Deploy
```bash
git add .
git commit -m "your message"
git push origin main
```
GitHub Pages auto-deploys within ~30 seconds.

## Design System
**Colors (sourced directly from app — Colors.xcassets)**
```css
--bg:          #0B1629   /* dark navy, main background */
--bg-alt:      #0F1C38   /* slightly lighter navy, alternating sections */
--bg-card:     #1A2D52   /* card backgrounds */
--bg-panel:    #1D365D   /* featured card background */
--blue:        #63B0F8   /* accent blue — CTAs, links, highlights */
--blue-dim:    rgba(99,176,248,0.15)
--orange:      #FF9D5C   /* warm accent — primary buttons, prices */
--orange-dim:  rgba(255,157,92,0.15)
--teal:        #71CAEE   /* secondary accent */
--sage:        #83C59B   /* checkmarks */
--yellow:      #FFE16A   /* highlight accent */
--text:        #FFFFFF
--text-mid:    #B8C4D4   /* secondary text */
--text-dim:    #6A7A8E   /* muted/meta text */
--border:      rgba(99,176,248,0.12)
--border-warm: rgba(255,157,92,0.2)
```

**Typography:** Playfair Display (headings, italic for spiritual emphasis) + DM Sans (body)

**Tone:** Professional, warm, contemplative. Not clinical.

## Page Sections (in order)
1. **Nav** — sticky, blurs on scroll (`scrolled` class), mobile burger menu
2. **Hero** (`#hero`) — `home_bg.png` mandala at edges via CSS radial mask (see below), centered text, App Store CTA
3. **Stats** — 4 animated counters (112, 50+, 5,000+, $0); fire via IntersectionObserver on `[data-count]`
4. **Foundation** (`#foundation`) — Choiceless Awareness philosophy, `app_icon.png`
5. **Three Pillars** (`#pillars`) — 3 feature cards linking to their respective sections; real PNG icons
6. **Guided Meditation** (`#guided-meditation`) — activity chips + dual phone mockup (IMG_9068 + IMG_9070)
7. **Guided Activities** (`#guided-activities`) — activity chips + dual phone mockup (IMG_9069 + IMG_9068)
8. **Stay** (`#stay`) — Focus Timer + Nudge Frequency; single phone mockup (`still_focused.png`)
9. **Ancient Wisdom** (`#techniques`) — 6 sample technique cards from the 112
10. **Pricing** (`#pricing`) — Begin ($0) / Support ($9.99/yr) / Commit ($19.99/yr); all plans identical features
11. **FAQ** (`#faq`) — 6 accordion items
12. **Final CTA** — animated CSS mandala rings, download CTA
13. **Footer** — real social links (Instagram, X, Twitter, Facebook); legal links to `/privacy.html`, `/terms.html`

## Hero Background
The hero uses `home_bg.png` (grey mandala texture) with:
- `filter: grayscale(1)` — strips color from the colorful center mandala
- `mask-image: radial-gradient(ellipse 62% 68% at 50% 50%, transparent 0%, transparent 45%, black 78%)` — center is fully transparent so text sits on clean dark navy; mandala only visible at edges/corners
- `opacity: 0.40`; no rotation (static)
- Mobile mask widens the transparent zone for narrow screens

## JS Patterns (js/main.js)
- `.reveal` / `.is-visible` — scroll-triggered fade-in via IntersectionObserver (threshold 0.12)
- `data-count` / `data-suffix` attributes — animated number counters (eased cubic, 1400ms, fire once)
- `.fq` / `.fq.open` — FAQ accordion (one open at a time)
- Nav `.scrolled` class — adds backdrop blur after 40px scroll
- Active nav link tracking via `sectionObserver` (rootMargin `-50% 0px -50% 0px`)
- Smooth scroll with 72px offset for sticky nav height
- Mobile burger: locks `body` scroll when menu is open

## Assets
- `assets/home_bg.png` — hero background mandala (grayscale + masked)
- `assets/app_icon.png` — app icon (foundation section)
- `assets/ic_nudge_logo.png` — logo mark (nav + footer)
- `assets/cultivate_icon.png`, `live_icon.png`, `return_icon.png` — pillar card icons
- `assets/screenshots/IMG_9068.png` — Enter screen (used in Guided Meditation back + Activities back)
- `assets/screenshots/IMG_9069.png` — Activities screen (used in Guided Activities front)
- `assets/screenshots/IMG_9070.png` — Technique selection screen (used in Guided Meditation front)
- `assets/screenshots/still_focused.png` — Stay/nudge prompt (used in Stay section)
- `assets/screenshots/` — 3 additional screenshots not yet used on site

## Responsive Breakpoints
| Breakpoint | Targets |
|---|---|
| 1024px | iPad Pro landscape, small laptops |
| 900px  | iPad Mini/Air landscape |
| 768px  | iPad portrait, large phones — burger nav |
| 640px  | Large phones |
| 480px  | Standard phones (iPhone 14, Pixel) |
| 390px  | Small phones (iPhone SE, mini) |
| 360px  | Very small Android phones |

`prefers-reduced-motion` disables all animations.

## Known Gaps / Pending Work
- `privacy.html` and `terms.html` not yet created (linked in footer)
- App logo/icon not set as favicon
- Custom domain setup for `yournudge.com`:
  1. Add `CNAME` file to repo root containing: `yournudge.com`
  2. Add DNS A records pointing to GitHub Pages IPs (185.199.108.153 / .109 / .110 / .111)
  3. Enable "Enforce HTTPS" in repo Settings → Pages

## App Store Link
`https://apps.apple.com/us/app/your-nudge/id6739236420`

## Social Links (live)
- Instagram: `https://www.instagram.com/a.simple.nudge/`
- X (Twitter): `https://x.com/simplenudge`
- Facebook: `https://www.facebook.com/ASimpleNudge`

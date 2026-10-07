# Kathryn Murphy — Photography Portfolio (Next.js port)

This is a Next.js (App Router) conversion of the original HTML/CSS/JS template.
It builds and runs as-is — you'll just see broken images and generic icon
squares until you drop in the real assets below.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Where to add your assets

All paths below are under `public/`, and match the `src` paths already
referenced in the components — nothing else needs to change once you add
the files.

| What                       | Where                                                                | Notes                                                                  |
| -------------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Logo                       | `public/images/logo/logo-3.png`                                      | 196×31                                                                 |
| Hero slideshow photos      | `public/images/hero/hero-1.jpg`, `hero-2.jpg`, `hero-3.jpg`          | 1904×1080                                                              |
| Portfolio grid photos      | `public/images/portfolio/portfolio-1.jpg` … `portfolio-8.jpg`        | 716×820                                                                |
| "Union" banner graphic     | `public/images/section/Union.png`                                    | 1440×718                                                               |
| Testimonial photos         | `public/images/section/testimonials-1.jpg` … `testimonials-4.jpg`    | 325×436                                                                |
| Avatars                    | `public/images/avatar/avatar-1.png` … `avatar-4.png`, `avatar-8.png` | 64×64                                                                  |
| Contact section background | `public/images/section/contact.jpg`                                  | used as a CSS `background-image` in `app/globals.css` (`.box-contact`) |
| Footer graphic             | `public/images/section/footer.png`                                   |                                                                        |
| Favicon                    | `app/favicon.ico` (already has a Next.js default — swap it out)      | or add your own `.svg`/`.ico`                                          |

## Icon font (Icomoon) — required for the arrow/star/quote/social icons

The original template's icon classes (`icon-ArrowRight`, `icon-Star`,
`icon-Quote`, `icon-Dribbble`, etc.) come from a custom Icomoon icon font
that wasn't included in what you pasted into chat. To wire it up:

1. Take your `icons/icomoon/style.css` from the original template download
   and **replace the contents of** `public/css/icomoon.css` with it.
2. Copy the actual font files (`.woff`, `.ttf`, `.eot`, `.svg` — whatever
   Icomoon exported) into `public/fonts/icomoon/`.
3. If your Icomoon `style.css` references font file paths like
   `fonts/icomoon/icomoon.woff`, update those `url(...)` paths to
   `/fonts/icomoon/icomoon.woff` (leading slash, since it's now served from
   `public/`).

Until you do this, all the `<i className="icon-...">` elements in the app
will just render as empty/invisible — everything else still works.

## What changed vs. the original template

- **Bootstrap grid/utilities** (`d-flex`, `row`, `col-lg-8`, gap classes,
  etc.) → installed as the real `bootstrap` npm package
  (`bootstrap/dist/css/bootstrap.min.css`), not the bundled `bootstrap.css`
  file, so it's easy to keep updated.
- **`animate.min.css`** → the `animate.css` npm package (same class names,
  e.g. `animate__fadeInUp`).
- **`swiper-bundle.min.css` / `js/carousel.js`** → real `swiper` npm
  package using `swiper/react` components (`<Swiper>`/`<SwiperSlide>`)
  instead of the jQuery/vanilla-JS Swiper init script.
- **GSAP / `SplitText` / `ScrollTrigger`** → real `gsap` npm package.
  GreenSock's 2025 acquisition by Webflow made **all** GSAP plugins free
  (SplitText and ScrollTrigger included), so these are pulled straight
  from npm, no bundled/cracked files needed.
- **`js/ScrollSmooth.js`** (an old unmaintained manual smooth-scroll
  polyfill) → replaced with **Lenis**, the modern, actively-maintained
  smooth-scroll library that integrates cleanly with GSAP's ticker and
  ScrollTrigger. See `components/LenisProvider.jsx`.
- **`js/wow.min.js`** → removed. Its job (scroll-triggered reveal
  animations) is now handled entirely by GSAP/ScrollTrigger in
  `components/SiteAnimations.jsx`, so you're not running two
  scroll-animation libraries at once.
- **Odometer** (`odometer.min.css`) → not used anywhere in this page's
  markup, so it was left out. If you add an Odometer-based counter later,
  `npm install odometer` and wire it in similarly to the existing counter
  logic in `components/SiteAnimations.jsx`.
- The stray, invalid `<Header>...</Header>` capitalized tag in the
  original HTML was fixed to a semantic `<header>`.
- `styles.css` was trimmed to the selectors actually reachable from this
  one-page template. The original file included rules for other pages in
  the theme (landing pages, dashboards, service/pricing pages, etc.) that
  aren't part of this build — if you later add those pages, pull the extra
  rules back in from the original `styles.css`.

## Project structure

```
app/
  layout.js          — fonts, global CSS imports, persistent chrome
  page.js             — assembles all homepage sections
  globals.css         — ported design system (tokens, utilities, components)
components/
  Navigation.jsx       — header + mobile side menu (shared state)
  HeroSlider.jsx        — swiper hero slideshow
  AboutSection.jsx      — counters
  BannerImageText.jsx
  PortfolioSection.jsx
  TestimonialSection.jsx — 3 synced swiper instances (photo/text/avatars)
  ContactSection.jsx     — form (currently just alerts on submit — wire up
                            a real backend/email service)
  Footer.jsx
  SiteAnimations.jsx     — all GSAP/SplitText/ScrollTrigger reveal logic
  LenisProvider.jsx      — smooth scroll, wired into GSAP's ticker
  CustomCursor.jsx / Preloader.jsx / ScrollProgress.jsx
data/
  slides.js / portfolio.js / testimonials.js — content arrays, edit these
  to change copy/images without touching component code
```

## Known rough edges

- The contact form has no backend — it currently just shows a JS `alert()`
  on submit. Hook it up to your email service of choice (Resend, a simple
  API route + nodemailer, Formspree, etc.).
- Images use plain `<img>` tags (not `next/image`) to match the original
  behavior exactly and avoid build errors while asset files are missing.
  Once real images are in place, swapping to `next/image` will get you
  automatic optimization/lazy-loading — not required, just an option.

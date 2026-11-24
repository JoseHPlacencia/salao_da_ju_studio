## Project structure

- Salon contact data (WhatsApp, address, hours, nav links) lives only in `src/config/site.ts`; every booking link is built with `whatsappUrl()` from `src/lib/whatsapp.ts` so changing the number updates the whole site.
- Page copy/data lives in `src/data/*` (services, testimonials, team, FAQ, gallery, image URLs); routes only compose sections, so content edits never touch layout code.
- Shared chrome (top bar, floating bottom nav, footer, loader) is mounted once in `src/routes/__root.tsx`; design primitives (Tag, Sheet, MediaCard, StickyMedia) live in `src/components/aura`, reusable blocks in `src/components/sections`, animation primitives in `src/components/motion`.
- Page bodies stack `<Sheet>` blocks after a sticky full-screen photo (`PageHero`/`StickyMedia`) so each block slides over the previous; keep that order when adding sections.
- Scroll reveals use `<Reveal>` (IntersectionObserver + CSS in styles.css); the `clip` variant clips an inner wrapper because a clipped target never reports as intersecting.
- The home cover (`HomeHero`) shrinks its giant wordmark into the TopBar logo on scroll; it measures the TopBar's `[data-aura-logo]` element and hands visibility over through `src/lib/logo-handoff.ts`, so keep that attribute and keep both logos in the same font/letter-spacing.

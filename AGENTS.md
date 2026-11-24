<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project structure

- Salon contact data (WhatsApp, address, hours, nav links) lives only in `src/config/site.ts`; every booking link is built with `whatsappUrl()` from `src/lib/whatsapp.ts` so changing the number updates the whole site.
- Page copy/data lives in `src/data/*` (services, testimonials, team, FAQ, gallery, image URLs); routes only compose sections, so content edits never touch layout code.
- Shared chrome (top bar, floating bottom nav, footer, loader) is mounted once in `src/routes/__root.tsx`; design primitives (Tag, Sheet, MediaCard, StickyMedia) live in `src/components/aura`, reusable blocks in `src/components/sections`, animation primitives in `src/components/motion`.
- Page bodies stack `<Sheet>` blocks after a sticky full-screen photo (`PageHero`/`StickyMedia`) so each block slides over the previous; keep that order when adding sections.
- Scroll reveals use `<Reveal>` (IntersectionObserver + CSS in styles.css); the `clip` variant clips an inner wrapper because a clipped target never reports as intersecting.

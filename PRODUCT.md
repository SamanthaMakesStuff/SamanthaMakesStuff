# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

General public with no prior context on Samantha — people arriving via social media, GitHub, or word of mouth. They land with zero background on who she is or what she's built.

## Product Purpose

A personal hub for Samantha's AI / "vibe coding" experiments: one place that introduces her (bio, personality) and links out to the individual projects she builds. Success means both things land equally — visitors get a sense of who she is *and* click through to try what she's made. Neither is subordinate to the other.

## Positioning

A personally-authored hub for one person's real AI/vibe-coding experiments, wrapped in a distinct Memphis-design identity (bold geometric motifs, offset shadows, a compact saturated palette) that is itself part of the pitch — not a generic templated developer portfolio a neighboring site could swap in unchanged.

## Operating Context

Static site (no backend, no CMS) hosted on GitHub, deployed as plain HTML/CSS/JS. Individual projects are separate applications hosted elsewhere (e.g. Vercel) and linked from the project grid; the site itself never runs project logic. New projects get added by hand as Samantha builds them.

## Capabilities and Constraints

- Single static page (index.html/style.css/script.js), no build step, no framework.
- New projects are added by manually editing the project-grid markup — no CMS or data-driven listing.
- No custom domain configured yet (serving from the default GitHub/host URL).
- No analytics currently in place.

## Brand Commitments

- Name: "Samantha Makes Stuff."
- **Memphis Design Language** — see `Memphis_Design.md` at the project root for the full governing rules (locked structural/graphic rules vs. customizable per-project parameters). Sourced from Samantha's own Canva logo draft, explicitly requested and confirmed binding:
  - Palette (locked structure: 1 background, 1 ink, 3 saturated accents, 1 secondary neutral): cream background, near-black ink, hot pink (loudest accent), turquoise, mustard/gold (flat, no glitter/metallic treatment).
  - Motif set (locked to exactly these 5, reused everywhere — hero, cards, footer, click effect): triangle, circle/dot, zigzag, squiggle, arc.
  - Typography: Megrim (free, Google Fonts) for the display/logo-lockup treatment (mirrors the outlined wordmark in the Canva logo); Caveat (free, Google Fonts) as a script accent for the "Stuff" flourish — standing in for the Canva-proprietary "Pinkerton," which isn't confirmed licensed for web use; Plus Jakarta Sans for body copy — standing in for "Gorden," also unconfirmed. Revisit if Samantha secures a web license for the original faces.
  - Component treatment: thick ink borders + hard offset shadows on cards/buttons (no soft/diffuse shadows), physical press interaction, deliberate off-grid rotation on selected elements — never on navigation or body copy.
- Voice: confident and witty, first-person, playful ("professionally curious, allergic to boring").
- Confirmed personal details woven into bio copy: reading, gaming, cats, the beach, and AI/vibe-coding as curiosity-driven exploration.

## Evidence on Hand

- Real, confirmed bio copy already live in the About section of index.html.
- One real, live project: "Silly Tavern Companion" (github.com/SamanthaMakesStuff/SillyTavern-Character-Lore-Extractor) — a Gemini-powered tool that extracts SillyTavern character cards and lorebooks from fanfiction text. Deployed at https://silly-tavern-companion.vercel.app/ and linked from the project grid.
- Three project-grid slots remain honest "coming soon" placeholders (Project Two/Three/Four) — no real project exists behind them yet; future work must not invent details for these.
- No testimonials, press, or third-party proof exist and none should be fabricated.

## Product Principles

1. Personality and portfolio are inseparable — the bright/pink/disco/confident-witty identity is the pitch, not decoration applied to a generic template.
2. The site is a hub, not the product — its job is to earn attention and trust quickly, then hand off cleanly to the real experiments living elsewhere.
3. Every project card is either real with a working live link, or honestly marked "coming soon" — never an invented project, description, or capability.
4. Stays a lightweight static site — no build step or backend dependency for the shell itself, so adding a new experiment stays cheap.

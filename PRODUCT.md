# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

General public with no prior context on Samantha — people arriving via social media or word of mouth. They land with zero background on who she is or what she's made.

## Product Purpose

A personal hub introducing Samantha and the small, real things she makes — Notion systems, mini apps, half-ideas that grow legs. Everything that survives lands on this page.

## Positioning

A personally-authored maker's page, not a generic portfolio template. The specific product lineup (see Evidence below) is still being finalized — several are honest placeholders — but the voice and design are the pitch, same as before.

## Operating Context

Single-file site hosted on GitHub, deployed to Vercel. No backend, no CMS.

## Capabilities and Constraints

- `index.html` is a pre-bundled single file (produced by an external tool, not hand-authored here) — see `CLAUDE.md` § Architecture before touching it.
- No custom domain configured yet.
- No analytics currently in place.

## Brand Commitments

**As of the current `index.html`** (replaced wholesale from an externally-supplied bundle — see git history for the prior Memphis-design iteration if it's ever needed for reference):

- Name: "Samantha Makes Stuff."
- Palette: pink `#FF2E93`, ink `#1A1A2E`, teal `#00C2A8`, yellow `#FFD400`, cream `#FFFDF7`, tinted paper `#FFF7FB`, muted text `#6E6A78`.
- Fonts (all Google Fonts): Fredoka (headlines), Anton (wordmark/shout lines), Space Grotesk (body), Caveat (script accent), Bungee (chips/marquee).
- Voice: confident and witty, first-person, playful ("professionally curious, allergic to boring").

This doc hasn't been fully reconciled against the new page's actual content — treat the live `index.html` as the source of truth for current specifics, and update this section properly next time it's touched with intent.

## Evidence on Hand

- A product called **"Spark"** — a Notion template that colour-codes tasks by energy, not just urgency, for scattered/busy/easily-overwhelmed minds — $15, live on Gumroad (https://samanthamakesstuff.gumroad.com/l/notion-spark).
- A **book-recommendation app** is referenced (working name, one-liner, and progress all placeholders).
- A **next Notion template** slot is placeholder-only.
- Contact/social links (email, Instagram, TikTok, Gumroad profile) are placeholders.
- The About section has a photo placeholder.
- A `brand-kit.html` page is linked from the footer but does not exist in this repo — was never delivered. Don't fabricate one.
- No testimonials, press, or third-party proof exist and none should be fabricated.

## Product Principles

1. Every placeholder (`[ ... ]` dashed boxes in the page) is an honest, visible gap — fill them only with facts Samantha supplies, never invented specifics.
2. The site is a hub, not the product — it should earn attention quickly and hand off cleanly to the real things it links to.
3. `index.html` is a delivered design artifact — don't rewrite, reformat, or "modernise" it. Edit content in place inside the bundle; see `CLAUDE.md`.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The personal hub site for "Samantha Makes Stuff" — a single-page site that introduces Samantha and links out to her individual AI/vibe-coding project experiments (each project is a separate app hosted elsewhere, e.g. Vercel, and linked from the project grid). See `PRODUCT.md` for the full product brief (audience, positioning, brand commitments, evidence on hand) — read it before making content or design decisions, since it documents what's real (confirmed bio details, the one live project) versus honest placeholders that must not be filled in with invented content.

## Architecture

Plain static site, no build step, no framework, no package.json:

- `index.html` — the entire page (nav, hero, about, projects, contact, footer sections)
- `style.css` — all styling, organized into clearly commented sections (design tokens, sparkle field, nav, hero/disco-ball, sections, about, projects, contact, footer, reduced-motion). Design tokens (colors, gradients, fonts) are defined once as CSS custom properties in `:root` at the top — change the palette/typography there rather than hardcoding values elsewhere.
- `script.js` — one small effect (click-triggered sparkle emoji burst)
- `fonts/` — self-hosted `.woff2` files for the two display fonts (Modak, Libre Bodoni), loaded via `@font-face`. Body font (Poppins) is loaded from Google Fonts in `index.html`.

There is no local dev server, test suite, linter, or build/deploy command in this repo — it's deployed to Vercel directly from static files. To preview locally, just open `index.html` in a browser or serve the directory with any static file server.

## Content rules

- Projects in the `.project-card` grid are either real with a working live link, or honestly marked `data-status="coming-soon"` with placeholder copy — never invent a project, description, or capability behind a "coming soon" card.
- Don't fabricate testimonials, press, or third-party proof.
- Bio/personal details (reading, gaming, cats, the beach, AI/vibe-coding as curiosity-driven exploration) are confirmed real and already reflected in the About section copy.

## `.impeccable/`

Config for the Impeccable frontend-design skill (`.impeccable/live/config.json` points it at `index.html`). Not something to edit by hand.

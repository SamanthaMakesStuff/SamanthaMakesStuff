# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The personal hub site for "Samantha Makes Stuff" — a single-page site that introduces Samantha and links out to her individual AI/vibe-coding project experiments (each project is a separate app hosted elsewhere, e.g. Vercel, and linked from the project grid). See `PRODUCT.md` for the full product brief (audience, positioning, brand commitments, evidence on hand) — read it before making content or design decisions, since it documents what's real (confirmed bio details, the one live project) versus honest placeholders that must not be filled in with invented content.

## Architecture

Plain static site, no build step, no framework, no package.json:

- `index.html` — the entire page (header, hero, about, projects, off-screen, connect, footer sections)
- `tokens.css` — design tokens as CSS custom properties (colors, type, spacing, borders/shadows, rotation, motion) — change the palette/typography here, not inline in `style.css`
- `style.css` — all component and layout styling, including the shared `.motif-*` shape system (triangle/circle/zigzag/squiggle/arc) reused across hero, cards, and footer
- `script.js` — mobile nav toggle + one small effect (click-triggered Memphis-motif confetti burst, reusing the same shape system)
- `Memphis_Design.md` — the governing design system (locked structural/graphic rules vs. customizable per-project parameters). Read this before making any visual change; see `PRODUCT.md` § Brand Commitments for how its customizable parameters (palette, motif set, type) were resolved for this project.
- No local font files — Megrim, Caveat, and Plus Jakarta Sans are all loaded from Google Fonts in `index.html`.

There is no local dev server, test suite, linter, or build/deploy command in this repo — it's deployed to Vercel directly from static files. To preview locally, just open `index.html` in a browser or serve the directory with any static file server.

## Content rules

- Projects in the `.card` grid are either real with a working live link, or honestly marked `data-status="coming-soon"` with placeholder copy — never invent a project, description, or capability behind a "coming soon" card.
- Don't fabricate testimonials, press, or third-party proof.
- Bio/personal details (reading, gaming, cats, the beach, AI/vibe-coding as curiosity-driven exploration) are confirmed real and already reflected in the About section copy.
- The Memphis motif set is locked to exactly 5 shapes (triangle, circle/dot, zigzag, squiggle, arc, per `Memphis_Design.md` § 0.2) — don't introduce a new decorative shape without updating that section and `PRODUCT.md` together.

## `.impeccable/`

Config for the Impeccable frontend-design skill (`.impeccable/live/config.json` points it at `index.html`). Not something to edit by hand.

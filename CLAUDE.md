# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The personal hub site for "Samantha Makes Stuff" — a single-page site that introduces Samantha and links out to her individual AI/vibe-coding project experiments. See `PRODUCT.md` for the full product brief (audience, positioning, brand commitments, evidence on hand) — read it before making content or design decisions, since it documents what's real versus honest placeholders that must not be filled in with invented content.

## Architecture

`index.html` is the entire site — a single self-contained, pre-bundled HTML file (fonts, styles, and scripts inlined as embedded manifest/template data that a small loader script unpacks into blob URLs at load time). It was produced by an external bundling tool, not hand-authored, and runs a React + Babel-standalone app client-side (JSX compiled in the browser on load — there is no separate build step, but it is not plain static HTML either).

**Do not rewrite, reformat, minify, or "modernise" `index.html`.** It is the delivered design output, not a reference to reimplement. If content needs to change, search for the specific text/placeholder inside the bundled template data and edit it there directly, preserving the surrounding bundle structure.

There is no dev server, test suite, linter, or build command in this repo. To preview, open `index.html` directly in a browser (it's designed to also work from a `file://` origin) or serve the directory with any static file server. It's deployed to Vercel from this repo.

## Known gaps

- The page contains several deliberate, visible placeholders (a book-recommendation app's name and one-liner, a Notion template name, social/contact links, an About-section photo) — these are honest gaps Samantha still needs to fill in, not bugs. Don't invent content for them.
- The footer's `brand-kit.html` link has been removed (it pointed to a companion page that was never delivered). If Samantha provides that page later, it can be re-added.

## Content rules

- Don't fabricate testimonials, press, third-party proof, or details behind any placeholder.
- Real bio/project details already in the page are confirmed — don't alter their substance without being told the facts changed.

## Design rules for any Vercel/`index.html` change

Before finalizing any visual or content change to this site, check it against the `hallmark-antipatterns` skill (no gradients, no invented icon motifs, etc.) and confirm it fits the `samantha-memphis` design language (locked palette/motif/border/shadow rules). This applies to every change going forward, not just new sections.

## `.impeccable/`

Config for the Impeccable frontend-design skill (`.impeccable/live/config.json` points it at `index.html`). Not something to edit by hand.

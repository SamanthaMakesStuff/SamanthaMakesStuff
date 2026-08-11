# Memphis Design Language

## Purpose

Design interfaces, websites, apps, and digital experiences using a **modern Memphis-inspired visual language**: playful, expressive, geometric, colorful, asymmetrical, tactile, and intentionally imperfect.

The design must balance **visual exuberance with rigorous usability**.

> **Core rule:** Be visually unconventional while remaining structurally conventional.

This document has two kinds of instructions:

- **LOCKED** — structural and graphic-language rules that must hold in every output, regardless of project. These are what make the result Memphis rather than "generic playful UI." Treat these as requirements, not suggestions.
- **CUSTOMIZABLE** — parameters the user sets (or you propose and the user approves) per project: palette, motif set, flow/density order, and shape vocabulary. Vary these freely between projects; do not vary the LOCKED rules.

Before delivering any output, run it against **Section 18 — Non-Negotiable Compliance Checklist**. Any failed item must be fixed before the design is considered complete.

---

## 0. Customization Parameters (fill these in per project)

These are the four axes the user controls. Ask for them (or propose defaults and confirm) before generating a design; do not silently invent new axes beyond these.

### 0.1 Palette (customizable within locked structure)
- **Locked structure:** exactly 1 quiet background, 1 dark ink/text color, 2–4 saturated accents, optional 1 secondary neutral. No more, no fewer accent colors.
- **Customizable:** which hues, how warm/cool, which accent carries the "loudest" role.

### 0.2 Motif Set (customizable within locked vocabulary)
- **Locked structure:** 3–6 recurring geometric motifs, reused consistently across the entire surface (hero, dividers, cards, badges, footer). Never invent a new motif per section.
- **Customizable:** which shapes from the vocabulary in 1.2 (or a consistent custom set following the same "simple graphic form" logic) are selected, and their relative emphasis.

### 0.3 Flow / Density Order (customizable within locked alternation)
- **Locked structure:** the experience must alternate between expressive (LOUD) and quiet sections — see Section 14. It may never sustain maximum visual intensity throughout.
- **Customizable:** the specific sequence of loud/quiet sections, and which content is treated as the "hero" moment.

### 0.4 Shape Vocabulary (customizable within locked graphic treatment)
- **Locked structure:** shapes are flat, hard-edged, graphic (Section 1.5); borders and shadows follow Section 7 treatment.
- **Customizable:** which specific shapes (circles, triangles, zigzags, squiggles, etc.) dominate, and how rotation/scale/overlap is applied.

If the user hasn't specified 0.1–0.4, propose concrete defaults consistent with the examples in this document and state the assumption rather than blocking on it.

---

## 1. Design Principles

### 1.1 Playfulness

The interface should feel energetic, optimistic, surprising, and slightly irreverent.

Prefer:

- Bold visual statements
- Unexpected compositions
- Graphic decoration
- Playful interactions
- Expressive typography
- Controlled visual irregularity

Avoid sterile, corporate, overly minimal presentation. **A composition that would look at home as a generic SaaS landing page with the serial numbers filed off has failed this document, even if individual components are styled correctly.**

### 1.2 Geometric Vocabulary

Use a recurring vocabulary of simple graphic forms:

- Circles
- Triangles
- Squares
- Arcs
- Dots
- Stars
- Zigzags
- Squiggles
- Stripes
- Checkerboards
- Irregular polygons

Treat these as a **visual language**, not random decoration. Per Section 0.2, select **3–6** of these (or an equivalent custom set) and reuse them consistently. **LOCKED: fewer than 3 motifs reads as under-designed; more than 6 reads as noise — both fail this document.**

### 1.3 Controlled Chaos

Create visual energy through:

- Asymmetry
- Overlap
- Rotation
- Off-grid positioning
- Cropping
- Unexpected scale
- Layering

Every irregularity must appear intentional.

**Never allow decorative chaos to compromise hierarchy, navigation, readability, or interaction.**

### 1.4 Grid + Escape

Use a strong underlying layout grid for:

- Navigation
- Content
- Forms
- Cards
- Typography
- Responsive structure

Allow selected decorative or expressive elements to escape that grid.

The grid provides stability; the violations provide personality. **LOCKED: an underlying grid must be identifiable at all times — if every element looks off-grid, there is no grid to escape from, and the composition is not Memphis, just disorganized.**

### 1.5 Flat Graphic Forms

Favor graphic, illustrative treatment over realism.

Prefer:

- Flat colors
- Hard edges
- Thick outlines
- Solid shadows
- Simple illustrations
- Graphic icons
- High-contrast shapes

Avoid excessive:

- Glassmorphism
- Photorealistic effects
- Subtle gradients
- Soft, diffuse shadows
- Metallic realism

If real photography is required (e.g. product or portrait imagery), apply a graphic treatment — duotone, hard-edged cropping/masking into a motif shape, or a thick graphic frame — rather than dropping in an untreated photo. An untreated realistic photo breaks the Memphis language even if everything around it is correct.

### 1.6 Deliberate Imperfection

Introduce controlled irregularity through:

- Slight rotations
- Uneven shapes
- Hand-drawn lines
- Organic curves
- Sticker-like labels
- Slightly inconsistent decorative elements

Imperfection must occur **inside a consistent system**.

---

## 2. Color

Use a compact, high-energy palette. See Section 0.1 for the customizable/locked split.

Suitable color relationships (customizable — pick one, don't blend all of them):

- Bright primary + pastel
- Warm + cool
- High-contrast complementary colors
- Saturated colors against a quiet neutral

Example:

```css
:root {
  --color-background: #fff7e8;
  --color-ink: #171717;
  --color-pink: #ff5ca8;
  --color-blue: #4d7cff;
  --color-yellow: #ffd84d;
  --color-green: #62d68a;
  --color-purple: #9b6cff;
}
```

### Color Rules (LOCKED)

- Do not make every element colorful.
- Use color to establish hierarchy.
- Preserve strong text/background contrast (see Section 11 for minimum ratios).
- Reserve the loudest colors for important moments and accents.
- Decorative color must not overpower content.

---

## 3. Typography

Typography should be bold, oversized, and expressive where appropriate.

### Display Typography (LOCKED presence, customizable typeface/scale)

Use:

- Large scale
- Heavy weights
- Tight leading
- Strong contrast
- Distinctive typefaces
- Occasional unusual alignment

Example:

```css
.hero-title {
  font-size: clamp(4rem, 10vw, 10rem);
  line-height: 0.82;
  letter-spacing: -0.07em;
  font-weight: 900;
}
```

**LOCKED: at least one moment of oversized display typography must exist per view (hero, section title, or large statistic). A design with zero scale contrast in type is not Memphis.**

### Body Typography (LOCKED)

Body text must remain:

- Highly readable
- Conventional
- Appropriately sized
- Well spaced
- High contrast

**Do not make readability itself experimental.**

Use expressive typography primarily for:

- Hero headlines
- Section titles
- Labels
- Large numerical/statistical displays
- Short decorative phrases

---

## 4. Layout

## Structural Layout (LOCKED)

Maintain conventional information architecture:

```text
Header
  ├── Logo
  ├── Navigation
  └── Primary action

Main
  ├── Hero
  ├── Content sections
  ├── Features / data / cards
  └── CTA

Footer
  └── Supporting navigation
```

The Memphis character should primarily emerge through **visual composition**, not confusing information architecture.

## Composition (customizable expression, locked constraints)

Favor:

- Asymmetrical layouts
- Large negative space contrasted with dense areas
- Overlapping elements
- Off-center compositions
- Unexpected scale relationships
- Decorative elements extending beyond containers

Maintain clear reading and interaction order.

---

## 5. Decorative Elements

Decorative elements should behave as a **secondary visual layer**.

Use:

- Geometric shapes
- Patterns
- Dots
- Squiggles
- Stars
- Stripes
- Checkerboards
- Arrows
- Abstract illustrations

Decorative elements may:

- Overlap containers
- Break the grid
- Rotate
- Extend outside the viewport
- Sit behind content
- Create visual framing

They must never obscure (LOCKED):

- Text
- Navigation
- Controls
- Form fields
- Important imagery
- Interactive targets

**Test: if removing all decoration leaves a coherent, usable interface, the design is structurally sound. If removing all decoration also removes any sense of visual personality, the design has not gone far enough on the Memphis side.**

---

## 6. Patterns

Use repetition to establish visual identity, drawing from the motif set defined in Section 0.2.

Possible motifs:

```text
• • • • • •
△ ○ □ △ ○ □
//// //// ////
✦ ✦ ✦ ✦
```

Repeat motifs across:

- Hero backgrounds
- Section dividers
- Cards
- Badges
- Empty states
- Illustrations
- Footer elements

**LOCKED: do not introduce a new decorative language for every section.** Every motif used anywhere in the design must trace back to the Section 0.2 set.

---

## 7. Depth and Surfaces (LOCKED treatment, customizable intensity)

Favor tactile, graphic depth.

Preferred:

```css
.card {
  border: 3px solid var(--color-ink);
  box-shadow: 8px 8px 0 var(--color-ink);
}
```

Use:

- Thick borders
- Offset shadows
- Hard shadows
- Layered shapes
- Sticker-like surfaces

Avoid making every element float with a soft shadow.

Depth should reinforce the graphic language. **LOCKED: all cards, buttons, and other primary interactive surfaces must use thick borders and/or hard offset shadows — not soft/diffuse shadows — as their depth treatment.**

---

## 8. Components

## Buttons (LOCKED characteristics)

Buttons should feel physical and expressive.

Characteristics:

- Strong border
- Bold typography
- Saturated fill
- Hard offset shadow
- Clear hover/pressed state

Interaction can simulate physical movement:

```css
.button:hover {
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 0 var(--color-ink);
}
```

**LOCKED: every primary button must have a border, an offset shadow, and a distinct pressed/hover state that reduces the shadow offset (simulating a physical press).**

## Cards

Cards should share a common structural system while allowing controlled variation.

Maintain consistency in (LOCKED):

- Padding
- Typography
- Border treatment
- Content hierarchy
- Interaction

Vary (customizable):

- Accent color
- Decorative motif
- Rotation
- Illustration
- Shadow treatment

Do not make every card structurally unique.

## Forms (LOCKED conventionality)

Forms should remain highly conventional.

Memphis styling may affect:

- Borders
- Labels
- Colors
- Focus states
- Decorative framing

Do not compromise:

- Field recognition
- Label clarity
- Error visibility
- Keyboard navigation
- Touch usability

---

## 9. Motion

Motion should feel playful and physical.

Appropriate behaviors:

- Small rotations
- Elastic movement
- Sliding shapes
- Sticker-like entrances
- Physical button pressing
- Subtle bouncing
- Playful hover transformations

Use motion primarily to communicate:

- Interaction
- State
- Hierarchy
- Personality

Do not animate every decorative element.

Respect (LOCKED):

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Responsive Behavior (LOCKED)

Memphis compositions must be **recomposed**, not merely scaled.

Desktop may use:

- Large overlaps
- Off-grid elements
- Wide compositions
- Large decorative objects

Mobile should:

- Reduce decoration
- Reposition shapes
- Reduce rotations where necessary
- Stack content logically
- Preserve hierarchy
- Remove nonessential decorative elements

Never allow decorative elements to cause:

- Horizontal scrolling
- Text obstruction
- Broken controls
- Excessive whitespace
- Unusable touch targets

The content hierarchy must survive every breakpoint.

---

## 11. Accessibility (LOCKED — non-negotiable regardless of any other instruction in this document)

Memphis aesthetics must never override accessibility.

Always:

- Maintain sufficient contrast (WCAG AA minimum: 4.5:1 for body text, 3:1 for large text/UI components)
- Preserve semantic HTML
- Maintain logical DOM order
- Provide visible focus states
- Support keyboard navigation
- Maintain usable touch targets (minimum 44×44px)
- Provide text alternatives where necessary
- Never communicate meaning through color alone
- Mark purely decorative graphics appropriately (e.g. `aria-hidden`, empty `alt`)
- Respect reduced-motion preferences

Visual experimentation belongs in the presentation layer.

---

## 12. Design System

Use tokens rather than arbitrary values.

```css
:root {
  /* Color */
  --color-background: ...;
  --color-surface: ...;
  --color-ink: ...;
  --color-primary: ...;
  --color-secondary: ...;
  --color-accent: ...;

  /* Borders */
  --border-width: 3px;

  /* Shape */
  --radius-small: 4px;
  --radius-large: 20px;

  /* Depth */
  --shadow-offset: 8px;

  /* Rotation (customizable per project, keep consistent within it) */
  --rotate-subtle: -2deg;
  --rotate-strong: -6deg;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;
  --space-16: 4rem;
}
```

The system should provide **constraints that make expressive variation coherent**.

---

## 13. Visual Hierarchy

Establish a clear hierarchy:

```text
1. Primary message
2. Primary action
3. Supporting content
4. Secondary actions
5. Decoration
```

Decoration is never the highest-priority visual element unless it is itself the content.

Use:

- Scale
- Contrast
- Color
- Position
- Weight
- Whitespace

to establish hierarchy.

---

## 14. Density (LOCKED alternation, customizable sequence — see Section 0.3)

Alternate between expressive and quiet areas.

Good composition:

```text
LOUD HERO
    ↓
QUIET CONTENT
    ↓
EXPRESSIVE FEATURE
    ↓
QUIET INFORMATION
    ↓
LOUD CTA
```

Avoid maintaining maximum visual intensity throughout the entire experience.

**Contrast creates impact.**

---

## 15. Anti-Patterns

Do not:

- Randomly scatter shapes
- Use every possible Memphis motif
- Make every component brightly colored
- Rotate functional content excessively
- Sacrifice readability for visual novelty
- Replace conventional navigation with novelty
- Overuse animation
- Use decoration without a recurring visual vocabulary
- Create genuinely inconsistent spacing or alignment
- Let decoration interfere with interaction
- Treat "chaotic" as synonymous with "Memphis"
- Default to a safe, low-personality layout because it's easier to make accessible — accessibility and Memphis personality are both required, not a trade-off

Memphis is **controlled visual excess**, not accidental disorder.

---

## 16. Generation Rules

When generating a Memphis-style interface:

1. Confirm or propose the Section 0 customization parameters (palette, motif set, flow, shape vocabulary).
2. Establish the information architecture first.
3. Define the limited color palette (Section 2).
4. Define the 3–6 recurring geometric motifs (Section 1.2).
5. Establish typography hierarchy (Section 3).
6. Build the conventional layout grid (Section 4).
7. Introduce asymmetry selectively.
8. Add overlapping/off-grid decorative elements.
9. Apply thick borders and hard graphic shadows where appropriate (Section 7).
10. Introduce controlled imperfection.
11. Add playful interaction and motion.
12. Recompose for mobile rather than simply shrinking.
13. Verify accessibility and usability (Section 11).
14. Remove unnecessary decoration.
15. Run the Section 18 checklist. Fix any failed item.
16. Ensure the final composition feels energetic but intentional.

---

## 17. Quality Bar

A successful Memphis design should feel:

- **Playful**, not childish
- **Bold**, not unreadable
- **Chaotic**, but controlled
- **Expressive**, but coherent
- **Decorative**, but purposeful
- **Experimental**, but usable
- **Retro-informed**, but contemporary

The strongest implementation should look like a **fully functional modern product that happens to have an exuberant Memphis visual personality**.

> **Structure underneath. Personality on top. Controlled chaos everywhere it belongs.**

---

## 18. Non-Negotiable Compliance Checklist

Before delivering any design, verify every item below. If any item fails, the output is not compliant with this document — revise before delivering.

**Motif & pattern**
- [ ] Exactly 3–6 recurring geometric motifs are used, and every decorative element traces back to that set
- [ ] No section introduces a decorative language not used elsewhere

**Grid & composition**
- [ ] An underlying layout grid is identifiable for header, content, and forms
- [ ] At least one element deliberately breaks or escapes that grid
- [ ] Removing all decoration leaves a coherent, fully usable interface

**Color**
- [ ] Palette contains exactly 1 background, 1 ink color, 2–4 saturated accents (+ optional 1 secondary neutral) — not more, not fewer
- [ ] Not every element is colorful; color is used to mark hierarchy

**Typography**
- [ ] At least one oversized/heavy display-type moment exists (hero, section title, or large stat)
- [ ] Body text is conventional, high-contrast, and unexperimental

**Depth & components**
- [ ] All cards and primary buttons use thick borders and/or hard offset shadows (no soft/diffuse shadows on primary surfaces)
- [ ] Every primary button has a distinct hover/pressed state
- [ ] Cards share one structural system (padding, border, hierarchy) even where decoration varies

**Density & flow**
- [ ] The experience alternates loud and quiet sections; it does not sustain maximum intensity throughout

**Usability & accessibility**
- [ ] Text/background contrast meets WCAG AA (4.5:1 body, 3:1 large text/UI)
- [ ] No decorative element obscures text, controls, form fields, or touch targets
- [ ] Keyboard navigation and visible focus states are intact
- [ ] Touch targets are ≥44×44px
- [ ] `prefers-reduced-motion` is respected
- [ ] Meaning is never conveyed by color alone

**Responsive**
- [ ] Mobile view is recomposed (decoration reduced/repositioned), not just scaled down
- [ ] No horizontal scroll, obstructed text, or broken controls at any breakpoint

If every box is checked, the design satisfies this document. If any box is unchecked, it is either not Memphis enough or not usable enough — fix that specific gap rather than regenerating from scratch.
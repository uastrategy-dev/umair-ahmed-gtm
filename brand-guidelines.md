# Umair Ahmed — Brand Guidelines

---

## 1. Brand Overview

### Personality (5 adjectives)
**Direct. Credible. Measured. Architectural. Honest.**

### What the brand feels like
Quiet authority. Not flashy, not humble-bragging. The design and copy communicate: "I built real things, here are the receipts, and I will tell you where the numbers fall short." It reads like the portfolio of someone who has run businesses, not someone pitching themselves. The site feels like an engineering document wrapped in a luxury presentation.

### Who it's for
Hiring managers, founders, and executive recruiters evaluating candidates for Head of Sales, VP Revenue, or CRO roles at venture-backed B2B companies. The audience is sophisticated, metrics-literate, and pattern-matching for operators over talkers.

---

## 2. Color System

### Core Palette

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| **Primary Dark** | Deep Magenta | `#420b31` | Hero gradient start, CTA section background, timeline dots, SectionLabel text inside expanded panels, scrollbar track |
| **Secondary Dark** | Dark Plum | `#360928` | Ticker background, footer background, quotes section background |
| **Gradient Mid** | Plum | `#5a1646` | Hero gradient midpoint |
| **Gradient End** | Mauve | `#6b244d` | Hero gradient endpoint |
| **Accent** | Warm Amber | `#F5AA1A` | Section labels, buttons (fill), icons/dots, stat number gradient, "zero." word, ticker text, quote marks, comp card icons, "Read case study" CTA, footer contact text, scroll progress bar, scrollbar thumb, selection background |
| **Accent Dark** | Deep Amber | `#B07A00` | "View PDF" link text on light backgrounds |
| **Light Body** | Warm Cream | `#FAF7F5` | Primary page background |
| **Light Alternate** | Rose Mist | `#F3EBF0` | Case Studies section, Timeline section (alternating sections) |
| **Card Default** | White | `#FFFFFF` | Cards at rest, PDF cards, comp cards, timeline cards, mode cards |
| **Card Active** | Blush | `#F5EEF2` | Case card when expanded/open |
| **Card Expanded** | Warm Blush | `#F0E8ED` | Expanded case study panel background |
| **Card Hover Accent** | Warm White | `#FFFBF2` | Competency card hover state |
| **Quote Card** | Wine | `#501440` | Individual quote card background |
| **Gallery Caption** | Deep Wine | `rgba(45,7,32,0.95)` | Image gallery thumbnail caption overlay |

### Text Colors — Light Backgrounds

| Role | Hex | Usage |
|------|-----|-------|
| **Primary Heading** | `#1E0A15` | All section h2 headings on light backgrounds, case card company names, comp card titles, metric values, timeline company names |
| **Body** | `#4A2C3A` | Paragraph text, case card descriptions, timeline roles and descriptions, expanded panel prose |
| **Muted** | `#7A5568` | Sub-roles, secondary labels, metric labels, tag badges, date stamps, PDF filenames, mode card descriptions |

### Text Colors — Dark Backgrounds

| Role | Hex | Usage |
|------|-----|-------|
| **Primary Heading** | `#FFFFFF` | CTA section h2 only |
| **Warm Primary** | `#F0EDE6` | Nav wordmark, lightbox controls, quote attribution names |
| **Secondary** | `#D4BEC8` | Nav links, hero subtitle |
| **Body** | `#BEA7B7` | Quote sub-attributions, CTA body paragraph, lightbox captions, gallery captions |
| **Muted** | `#C4A8BC` | Hero stat labels |
| **Counter/Utility** | `rgba(255,255,255,0.4)` | Lightbox image counter |

### Accent on Dark Backgrounds
Amber `#F5AA1A` is used for h2 headings on the Quotes section ("Direct from founders...") because that section is dark. On all light sections, h2 headings are `#1E0A15`.

### Case Study Accent Colors
Each case study has a dedicated accent used for its top bar stripe and mode badge:

| Company | Color | Hex |
|---------|-------|-----|
| Clearco | Pink | `#FF6B9D` |
| Defigo | Green | `#34D399` |
| Percy | Blue | `#4DA3FF` |
| Lane | Orange | `#FF8A4C` |

### Border Patterns
- **Light card borders:** `rgba(66,11,49,0.10)` (default), `rgba(66,11,49,0.12)` (gallery, expanded panel), `rgba(66,11,49,0.18)` (active card), `rgba(66,11,49,0.08)` (metric chips)
- **Dark section borders:** `rgba(255,200,230,0.10)` (section dividers), `rgba(255,200,230,0.22)` (quote cards)
- **Amber borders:** `rgba(245,170,26,0.50)` (ghost button), `rgba(245,170,26,0.20)` (PDF icon)

### Selection
- Background: `#F5AA1A`
- Text: `#0A0A0C`

### Scrollbar
- Track: `#420b31`
- Thumb: `#F5AA1A`
- Width: `6px`

---

## 3. Typography

### Font Families

| Font | Role | Load Weights |
|------|------|-------------|
| **Instrument Serif** | Display/heading font. All h1, h2, h3, company names, stat numbers, quote text, ticker items, card category titles, nav wordmark (italic). | Regular, Italic |
| **DM Sans** | Body/UI font. Paragraphs, descriptions, nav links, button labels, captions. | 300, 400, 500, 600, 700 |
| **JetBrains Mono** | System/label font. Section labels, badges, date stamps, filenames, counters, CTAs ("Read case study"). | 400, 500 |

### Font Import
```
https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap
```

### Heading Hierarchy

| Level | Font | Size | Weight | Letter-Spacing | Line-Height | Color (light bg) | Color (dark bg) |
|-------|------|------|--------|----------------|-------------|-------------------|-----------------|
| **H1** (hero only) | Instrument Serif | `clamp(3rem, 8vw, 7rem)` | Regular | `-0.03em` | `1.0` | `#FFFFFF` | — |
| **H2** (sections) | Instrument Serif | `clamp(2.5rem, 5vw, 4rem)` | Regular | `-0.03em` | `1.1` | `#1E0A15` | `#FFFFFF` (CTA) or `#F5AA1A` (quotes) |
| **H2** (throughline) | Instrument Serif | `clamp(2.2rem, 4.5vw, 3.5rem)` | Regular | `-0.03em` | `1.1` | `#1E0A15` | — |
| **H3** (expanded) | Instrument Serif | `clamp(1.8rem, 4vw, 2.8rem)` | Regular | `-0.02em` | `1.1` | Inherits `#1E0A15` | — |
| **Company name** (card) | Instrument Serif | `2rem` | Regular | `-0.02em` | Default | `#1E0A15` | — |
| **Company name** (timeline) | Instrument Serif | `1.4rem` | Regular | Default | Default | `#1E0A15` | — |
| **Stat number** (hero) | Instrument Serif | `3rem` | Regular | Default | `1` | Gradient: `#FFFFFF` → `#F5CC70` | — |
| **Metric value** | Instrument Serif | `1.6rem` | Regular | Default | `1.1` | `#1E0A15` | — |
| **Card category** | Instrument Serif | `1.3rem` | Regular | Default | Default | `#F5AA1A` | — |
| **Comp card title** | Instrument Serif | `1.15rem` | Regular | Default | Default | `#1E0A15` | — |

### Body Text

| Context | Font | Size | Weight | Line-Height | Color |
|---------|------|------|--------|-------------|-------|
| **Section intro** | DM Sans | `1.1rem` | 300 | `1.7` | `#4A2C3A` |
| **Expanded prose** | DM Sans | `1rem` | 400 | `1.75` | `#4A2C3A` |
| **Card description** | DM Sans | `0.95rem` | 400 | `1.65` | `#4A2C3A` |
| **Sub-body** | DM Sans | `0.85rem` | 400 | `1.6` | `#7A5568` or `#4A2C3A` |
| **Quote body** | Instrument Serif | `1.1rem` | Regular (italic) | `1.6` | `#F0EDE6` |
| **Hero subtitle** | DM Sans | `1.2rem` | 300 | `1.7` | `#D4BEC8` |
| **CTA body** | DM Sans | `1.1rem` | 400 | `1.7` | `#BEA7B7` |

### Label/System Text (JetBrains Mono)

| Element | Size | Letter-Spacing | Transform | Color |
|---------|------|----------------|-----------|-------|
| **Section label** (dark bg) | `0.7rem` | `0.2em` | UPPERCASE | `#F5AA1A` |
| **Section label** (panel) | `0.7rem` | `0.2em` | UPPERCASE | `#420b31` |
| **Tag badge** | `0.65rem` | `0.15em` | UPPERCASE | `#7A5568` |
| **Mode badge** | `0.6rem` | `0.1em` | UPPERCASE | Per-case accent color |
| **Date stamp** | `0.7rem` | `0.1em` | UPPERCASE | `#7A5568` |
| **Stat label** | `0.75rem` | `0.12em` | UPPERCASE | `#C4A8BC` |
| **Metric label** | `0.72rem` | `0.08em` | UPPERCASE | `#7A5568` |
| **CTA text** ("Read case study") | `0.7rem` | `0.1em` | UPPERCASE | `#F5AA1A` |
| **PDF filename** | `0.65rem` | `0.05em` | — | `#7A5568` |
| **PDF link** | `0.65rem` | `0.15em` | UPPERCASE | `#B07A00` |
| **Lightbox counter** | `0.7rem` | — | — | `rgba(255,255,255,0.4)` |
| **Hero tagline** | `0.75rem` | `0.15em` | UPPERCASE | `#F5AA1A` |

### Max Widths for Readability
- **Hero content:** `900px` (h1), `580px` (subtitle)
- **Section headings:** `700px`
- **Section intro copy:** `560px`
- **Throughline body:** `640px`
- **Expanded panel prose:** `680px`
- **Timeline descriptions:** `500px`
- **CTA body:** `480px`

---

## 4. Layout & Spacing

### Page Structure (top to bottom)
1. **Nav** — fixed, full-width, `#420b31` at 92% opacity + 24px blur (solid on mobile)
2. **Hero** — full viewport height, dark gradient, two-column (text left, photo right)
3. **Ticker** — dark strip, infinite horizontal scroll
4. **Throughline** — light `#FAF7F5`, two-mode cards
5. **Case Studies** — alternate `#F3EBF0`, 2-column card grid
6. **Quotes** — dark `#360928`, 3-column card grid
7. **Approach** — light `#FAF7F5`, 3-column competency cards
8. **Divider** — 1px line, `rgba(66,11,49,0.08)`
9. **Timeline** — alternate `#F3EBF0`, vertical line with cards
10. **CTA** — dark `#420b31`, centered text + button stack
11. **Footer** — dark `#360928`, single row

### Section Alternation Pattern
Light (`#FAF7F5`) → Dark (`#360928`) → Light → Dark → Light. Case Studies and Timeline use `#F3EBF0` as the alternating light variant.

### Section Padding

| Section | Desktop | Mobile |
|---------|---------|--------|
| **Standard** | `80px 48px` to `96px 48px` | `64px 20px` |
| **Quotes** | `120px 48px` | `64px 20px` |
| **CTA** | `160px 48px` | `72px 20px` |
| **Footer** | `48px` | `28px 20px` |
| **Nav** | `20px 48px` (scrolled: `12px 48px`) | `20px` horizontal |
| **Hero** | `140px 48px 80px` | `100px 20px 60px` |

### Grid Systems

| Component | Desktop | Tablet (≤1024px) | Mobile (≤768px) |
|-----------|---------|-------------------|-----------------|
| **Case study cards** | `1fr 1fr` | `1fr` | `1fr` |
| **Quote cards** | `1fr 1fr 1fr` | `1fr` | `1fr` |
| **Competency cards** | `repeat(3, 1fr)` | `1fr 1fr` | `1fr` |
| **Two-modes cards** | `1fr 1fr` | `1fr` | `1fr` |
| **Metric chips (card)** | `1fr 1fr` | `1fr 1fr` | `1fr 1fr` |
| **Metric chips (expanded)** | `repeat(4, 1fr)` | `1fr 1fr` | `1fr 1fr` |
| **Image gallery** | `repeat(2, 1fr)` | `repeat(2, 1fr)` | `1fr` |

### Gap Scale
- `64px` — hero stat spacing
- `48px` — between section label and content, expanded panel header to body
- `40px` — CTA body to buttons
- `32px` — between heading and body copy, two-modes margin-top, card padding
- `24px` — card grids, badge row to company name, "Read case study" margin-top
- `20px` — section label to content, metric chips, comp card padding internal
- `16px` — metric chip grids, badge gaps, gallery gaps, CTA button gaps
- `12px` — PDF card stack, company list items, CTA button mobile gap
- `8px` — inline badge gaps, quote mark to text, role margin-bottom

### Content Max Widths
- **Hero container:** `1100px`
- **Heading max-width:** `700px`
- **Body copy:** `560px`–`680px` depending on context
- **CTA body:** `480px`

---

## 5. Components & UI Patterns

### Buttons

| Variant | Background | Text | Border | Shadow | Border-Radius | Padding |
|---------|-----------|------|--------|--------|----------------|---------|
| **Primary Fill** | `#F5AA1A` | `#0A0A0C` | None | `0 4px 28px rgba(245,170,26,0.45)` | `100px` (pill) | `16px 36px` |
| **Ghost/Outline** | `transparent` | `#F5AA1A` | `1px solid rgba(245,170,26,0.50)` | None | `100px` (pill) | `15px 36px` |
| **Nav CTA** | `#F5AA1A` | `#0A0A0C` | None | `0 2px 16px rgba(245,170,26,0.35)` | `100px` (pill) | `8px 20px` |
| **Circle (close/nav)** | `transparent` | `#7A5568` or `#F0EDE6` | `1px solid rgba(...)` | None | `50%` | `48px × 48px` |

Button text: DM Sans, `0.9rem`, weight 600, letter-spacing `0.02em` (primary) or `0.04em` (ghost).
Ghost button on desktop has shimmer animation (`linear-gradient` sweep at `2.5s`).
Mobile: shimmer disabled, buttons stack full-width.

### Badges/Tags

| Variant | Font | Size | Padding | Border-Radius | Border | Text Color |
|---------|------|------|---------|---------------|--------|------------|
| **Tag** (Fintech, etc.) | JetBrains Mono | `0.65rem` | `6px 14px` | `100px` | `1px solid rgba(66,11,49,0.12)` | `#7A5568` |
| **Mode** (Zero to One) | JetBrains Mono | `0.6rem` | `4px 10px` | `100px` | `1px solid {accentColor}55` | Per-case accent |
| **Timeline** (Acquired, etc.) | JetBrains Mono | `0.6rem` | `4px 10px` | `100px` | `1px solid {color}20` | Per-badge color |

### Cards

**Case Study Card (closed)**
- Background: `#FFFFFF`
- Border: `1px solid rgba(66,11,49,0.10)`
- Border-radius: `20px`
- Padding: `48px` (desktop), `24px 20px` (mobile)
- Top accent stripe: `3px` height, company accent color
- Hover: `translateY(-4px)`, shadow `0 16px 48px rgba(66,11,49,0.12)`

**Case Study Card (open)**
- Background: `#F5EEF2`
- Border: `1px solid rgba(66,11,49,0.18)`

**Expanded Panel**
- Background: `#F0E8ED`
- Border: `1px solid rgba(66,11,49,0.12)`
- Border-radius: `0 0 20px 20px`
- Padding: `48px 48px 56px`

**Quote Card**
- Background: `#501440`
- Border: `1px solid rgba(255,200,230,0.22)`
- Border-radius: `20px`
- Padding: `36px`
- Hover: `translateY(-4px)`, border → `rgba(245,170,26,0.35)`, shadow `0 12px 36px rgba(0,0,0,0.20)`

**Competency Card**
- Background: `#FFFFFF`
- Border: `1px solid rgba(66,11,49,0.10)`
- Border-radius: `12px`
- Padding: `32px`
- Hover: border → `#F5AA1A`, background → `#FFFBF2`, `translateY(-3px)`

**Timeline Card**
- Background: `#FFFFFF`
- Border: `1px solid rgba(66,11,49,0.10)`
- Border-radius: `16px`
- Padding: `20px 24px 22px`

**PDF Card**
- Background: `#FFFFFF`
- Border: `1px solid rgba(66,11,49,0.10)`
- Border-radius: `12px`
- Padding: `20px 24px`
- Hover: border → `rgba(245,170,26,0.40)`, background → `rgba(245,170,26,0.04)`

**Metric Chip**
- Background: `rgba(66,11,49,0.04)`
- Border: `1px solid rgba(66,11,49,0.08)`
- Border-radius: `12px`
- Padding: `20px`

### Navigation
- Position: fixed, z-index 100
- Background: `rgba(66,11,49,0.92)` + `blur(24px)` (desktop), `rgba(42,5,29,0.98)` solid (mobile)
- Border-bottom: `1px solid rgba(255,200,230,0.12)`
- Wordmark: Instrument Serif italic, `1.3rem`, `#F0EDE6`
- Links: DM Sans, `0.8rem`, weight 500, `#D4BEC8`, spacing `0.08em`, uppercase
- Scroll progress bar: fixed top, `2px` height, gradient `#F5AA1A → #F0C060 → #F5AA1A`
- Mobile: hides nav links, shows "Get in Touch" CTA button only

### Lightbox
- Overlay: `rgba(0,0,0,0.92)`, z-index 1000
- Navigation: `48px × 48px` circle buttons, `1px solid rgba(255,255,255,0.2)`
- Image max: `90vw` width, `75vh` height
- Image shadow: `0 24px 80px rgba(0,0,0,0.6)`
- Caption: DM Sans, `0.8rem`, `#BEA7B7`, centered, max `600px`

### Image Gallery
- 2-column grid (1-column mobile), `16px` gap
- Thumbnails: `8px` radius, `1px solid rgba(66,11,49,0.12)`
- Caption overlay: `rgba(45,7,32,0.95)` background, `0.75rem`, `#BEA7B7`
- Hover: `scale(1.02)`, enhanced border and shadow

### Divider
- `1px` height, `rgba(66,11,49,0.08)`, `48px` horizontal margin (desktop), `20px` (mobile)

### Scroll-Reveal Animation
- Every content block wrapped in `<Reveal>` component
- Start: `opacity: 0`, `translateY(32px)`
- End: `opacity: 1`, `translateY(0)`
- Duration: `0.7s ease`
- Trigger: IntersectionObserver, threshold `0.1`, rootMargin `0px 0px -40px 0px`

### Hero-Specific Animations
- Staggered fadeUp: `0.2s`, `0.4s`, `0.5s`, `0.6s`, `0.8s` delays
- Photo glow pulse: `3.5s` infinite, amber box-shadow breathing
- Stat numbers: count-up animation, `1400ms`, easeOutCubic

---

## 6. Voice & Messaging

### Tone
**Direct. Measured. Proof-first. Self-critical.**

The copy never oversells. It states what was built, shows the numbers, then adds honest context about what the numbers actually mean. The voice sounds like someone debriefing an investor, not pitching a recruiter.

### Copywriting Rules (observed patterns)

1. **No exclamation points.** Ever. Urgency comes from facts, not punctuation.
2. **No AI language.** No "leveraged," "spearheaded," "passionate about," "thrilled to announce."
3. **No em-dashes.** Periods and commas only.
4. **No emojis** in body copy.
5. **Sentence fragments are intentional.** "New market entry. Category creation. Enterprise motion from scratch." Fragments create rhythm and emphasis.
6. **First person, always.** "I built," "I designed," "I took." Not "was responsible for."
7. **Specific numbers over claims.** "$5.7M single month" not "significant revenue growth."
8. **Honest when numbers are modest.** "$80K hardware revenue and $96K ARR in 18 months is early traction, not a scaled outcome. I am direct about that."
9. **"The system" framing.** Revenue outcomes are presented as the output of a system, not individual heroics.
10. **Zero/nothing language.** "From zero," "from nothing," "from scratch," "no pipeline, no brand, no team." Emphasizes the starting point to amplify the outcome.

### CTA Patterns
- **"Read case study ↓"** / **"Close case study ↑"** — JetBrains Mono, uppercase, amber, with directional arrows
- **"View PDF →"** — JetBrains Mono, uppercase, deep amber
- **"Get in Touch"** — DM Sans, uppercase, amber pill button
- **"Download Resume"** — Ghost outline button, secondary action
- **Section labels** — Short, descriptive: "Selected Work," "How I Operate," "Career Arc," "Next Chapter," "What People Say," "The Throughline"

### Section Content Pattern
Every major section follows the same structure:
1. **Label** — JetBrains Mono small caps, amber
2. **Headline** — Instrument Serif, punchy declarative statement
3. **Body** — DM Sans, 1-2 paragraphs of context
4. **Content** — Cards, grid, timeline

### Case Study Expanded Pattern
1. Starting Point — what existed before
2. What I Built — bulleted list of actions taken
3. Metrics Grid — 4-column stat display
4. Proof Points — screenshots and PDFs
5. The Real Story on the Numbers (optional) — honest context on modest metrics
6. Why This Matters — the transferable lesson
7. What I Learned (optional) — personal takeaway
8. The Honest Assessment (optional) — direct acknowledgment of limitations

---

## 7. Do's and Don'ts

### Do
- Use specific dollar amounts and percentages over qualitative claims
- Acknowledge when numbers are early-stage or modest
- Frame outcomes as system outputs ("the machine was built and working")
- Use sentence fragments for rhythm and emphasis
- Keep section labels short (2-3 words max)
- Use the amber accent sparingly: labels, icons, dots, buttons, and key words only
- Keep headings on light backgrounds in `#1E0A15` (dark, authoritative)
- Use Instrument Serif for anything that needs to feel like a statement
- Use JetBrains Mono for anything that needs to feel systematic or labeled
- Keep prose max-widths between 480-680px for readability
- Include "Proof Points" with real screenshots (Slack messages, dashboards, LinkedIn posts)
- Stack CTA buttons vertically on mobile
- Disable expensive animations (blur, glow, shimmer) on mobile

### Don't
- Use amber for large headings on light backgrounds (it looks like a warning)
- Use exclamation points anywhere in the copy
- Write "leveraged," "synergies," "rock star," "guru," "passionate about," or any resume cliche
- Use em-dashes (use periods or commas instead)
- Add emojis to body copy
- Use generic stock imagery (all images are real screenshots and photos)
- Write in third person ("Umair drove revenue...")
- Apply backdrop-filter blur on mobile (performance cost too high)
- Run continuous animations on mobile (battery drain)
- Put body text wider than 700px (readability collapses)
- Use Tailwind utility classes in the current build (everything is inline styles)
- Apply hover transforms on touch devices (they stick)

---

## 8. Summary Checklist

Use this when building new sites or pages in the brand:

```
[ ] Fonts loaded: Instrument Serif, DM Sans, JetBrains Mono (display=swap)
[ ] Body background: #FAF7F5 (warm cream, not pure white)
[ ] Dark sections use: #420b31 (primary) or #360928 (secondary)
[ ] Amber #F5AA1A reserved for: labels, icons, dots, buttons, accent words only
[ ] Light-bg headings: #1E0A15 (not amber, not black)
[ ] Dark-bg headings: #FFFFFF or #F5AA1A (quotes only)
[ ] Body text: #4A2C3A (light bg) or #BEA7B7 (dark bg)
[ ] Section labels: JetBrains Mono, 0.7rem, uppercase, 0.2em spacing
[ ] Heading font: Instrument Serif, negative letter-spacing
[ ] Cards: white bg, 1px rgba(66,11,49,0.10) border, 12-20px radius
[ ] Buttons: pill shape (100px radius), amber fill or ghost outline
[ ] Button shadow: 0 4px 28px rgba(245,170,26,0.45) on primary
[ ] Prose max-width: 480-680px
[ ] Mobile: collapse all grids to 1-column at 768px
[ ] Mobile: disable blur, glow, shimmer animations
[ ] Mobile: pad sections at 20px horizontal
[ ] Touch devices: disable hover transforms via @media (hover: none)
[ ] Reduced motion: disable all animations via @media (prefers-reduced-motion)
[ ] Copy: first person, specific numbers, no exclamation marks
[ ] Copy: honest about limitations, "receipts" over claims
[ ] Scroll reveal: translateY(32px) to 0, 0.7s ease, threshold 0.1
[ ] Selection color: amber bg, near-black text
```

---

## 9. Tailwind Token System

Drop this into a `tailwind.config.js` to implement the brand in any future project:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      display: ["'Instrument Serif'", "Georgia", "serif"],
      body: ["'DM Sans'", "-apple-system", "sans-serif"],
      mono: ["'JetBrains Mono'", "monospace"],
    },

    colors: {
      transparent: "transparent",
      current: "currentColor",

      brand: {
        DEFAULT: "#420b31",
        deep: "#360928",
        mid: "#5a1646",
        light: "#6b244d",
        wine: "#501440",
      },

      amber: {
        DEFAULT: "#F5AA1A",
        dark: "#B07A00",
        glow: "rgba(245,170,26,0.45)",
        faint: "rgba(245,170,26,0.10)",
        border: "rgba(245,170,26,0.50)",
        "border-light": "rgba(245,170,26,0.20)",
        hover: "rgba(245,170,26,0.35)",
        "hover-bg": "rgba(245,170,26,0.04)",
        badge: "rgba(245,170,26,0.08)",
      },

      surface: {
        body: "#FAF7F5",
        alt: "#F3EBF0",
        card: "#FFFFFF",
        "card-active": "#F5EEF2",
        "card-expanded": "#F0E8ED",
        "card-hover": "#FFFBF2",
        "gallery-caption": "rgba(45,7,32,0.95)",
      },

      text: {
        heading: "#1E0A15",
        body: "#4A2C3A",
        muted: "#7A5568",
        "dark-warm": "#F0EDE6",
        "dark-secondary": "#D4BEC8",
        "dark-body": "#BEA7B7",
        "dark-muted": "#C4A8BC",
      },

      case: {
        pink: "#FF6B9D",
        green: "#34D399",
        blue: "#4DA3FF",
        orange: "#FF8A4C",
      },

      border: {
        light: "rgba(66,11,49,0.10)",
        "light-strong": "rgba(66,11,49,0.12)",
        "light-active": "rgba(66,11,49,0.18)",
        "light-faint": "rgba(66,11,49,0.08)",
        dark: "rgba(255,200,230,0.10)",
        "dark-strong": "rgba(255,200,230,0.22)",
        "dark-nav": "rgba(255,200,230,0.12)",
      },

      overlay: {
        lightbox: "rgba(0,0,0,0.92)",
        nav: "rgba(66,11,49,0.92)",
        "nav-mobile": "rgba(42,5,29,0.98)",
        "lightbox-btn": "rgba(255,255,255,0.05)",
        "lightbox-btn-border": "rgba(255,255,255,0.2)",
      },

      selection: {
        bg: "#F5AA1A",
        text: "#0A0A0C",
      },

      white: "#FFFFFF",
      black: "#0A0A0C",
    },

    fontSize: {
      "hero-h1": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
      "section-h2": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
      "section-h2-sm": ["clamp(2.2rem, 4.5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
      "expanded-h3": ["clamp(1.8rem, 4vw, 2.8rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      "company-card": ["2rem", { letterSpacing: "-0.02em" }],
      "company-timeline": ["1.4rem", {}],
      "stat-hero": ["3rem", { lineHeight: "1" }],
      "stat-metric": ["1.6rem", { lineHeight: "1.1" }],
      "card-category": ["1.3rem", {}],
      "comp-title": ["1.15rem", {}],
      "ticker": ["1.4rem", {}],
      "quote-mark": ["4rem", { lineHeight: "1" }],
      "quote-body": ["1.1rem", { lineHeight: "1.6" }],
      "body-lg": ["1.2rem", { lineHeight: "1.7" }],
      "body": ["1.1rem", { lineHeight: "1.7" }],
      "body-md": ["1rem", { lineHeight: "1.75" }],
      "body-sm": ["0.95rem", { lineHeight: "1.65" }],
      "sub": ["0.9rem", {}],
      "desc": ["0.85rem", { lineHeight: "1.6" }],
      "nav": ["0.8rem", { letterSpacing: "0.08em" }],
      "caption": ["0.8rem", {}],
      "caption-sm": ["0.75rem", { lineHeight: "1.5" }],
      "label-hero": ["0.75rem", { letterSpacing: "0.15em" }],
      "label-stat": ["0.75rem", { letterSpacing: "0.12em" }],
      "label-metric": ["0.72rem", { letterSpacing: "0.08em" }],
      "label": ["0.7rem", { letterSpacing: "0.2em" }],
      "badge": ["0.65rem", { letterSpacing: "0.15em" }],
      "badge-sm": ["0.6rem", { letterSpacing: "0.1em" }],
      "wordmark": ["1.3rem", { letterSpacing: "-0.02em" }],
    },

    borderRadius: {
      none: "0",
      sm: "8px",
      DEFAULT: "12px",
      md: "16px",
      lg: "20px",
      full: "100px",
      circle: "50%",
    },

    spacing: {
      0: "0",
      1: "2px",
      2: "4px",
      3: "6px",
      4: "8px",
      5: "10px",
      6: "12px",
      8: "16px",
      10: "20px",
      12: "24px",
      14: "28px",
      16: "32px",
      18: "36px",
      20: "40px",
      24: "48px",
      28: "56px",
      32: "64px",
      36: "72px",
      40: "80px",
      48: "96px",
      60: "120px",
      80: "160px",
    },

    boxShadow: {
      "btn-primary": "0 4px 28px rgba(245,170,26,0.45)",
      "btn-nav": "0 2px 16px rgba(245,170,26,0.35)",
      "card-hover": "0 16px 48px rgba(66,11,49,0.12), 0 0 30px rgba(245,170,26,0.06)",
      "quote-hover": "0 12px 36px rgba(0,0,0,0.20)",
      "gallery-hover": "0 8px 32px rgba(66,11,49,0.10)",
      "lightbox-img": "0 24px 80px rgba(0,0,0,0.6)",
      "photo-glow": "0 0 50px rgba(245,170,26,0.30), 0 24px 64px rgba(0,0,0,0.45)",
    },

    maxWidth: {
      hero: "1100px",
      "heading": "700px",
      "prose-wide": "680px",
      "prose": "640px",
      "intro": "560px",
      "timeline-desc": "500px",
      "cta-body": "480px",
      "lightbox-caption": "600px",
    },

    extend: {
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 50px rgba(245,170,26,0.30), 0 0 0 0 rgba(245,170,26,0.35), 0 24px 64px rgba(0,0,0,0.45)" },
          "50%": { boxShadow: "0 0 90px rgba(245,170,26,0.50), 0 0 0 14px rgba(245,170,26,0), 0 24px 64px rgba(0,0,0,0.45)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        lineGrow: {
          from: { transform: "scaleY(0)" },
          to: { transform: "scaleY(1)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards",
        scroll: "scroll 30s linear infinite",
        fadeIn: "fadeIn 0.2s ease",
        glowPulse: "glowPulse 3.5s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        lineGrow: "lineGrow 0.8s ease forwards",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #420b31 0%, #5a1646 50%, #6b244d 100%)",
        "stat-gradient": "linear-gradient(135deg, #FFFFFF 20%, #F5CC70 100%)",
        "scroll-progress": "linear-gradient(to right, #F5AA1A, #F0C060, #F5AA1A)",
        "shimmer-sweep": "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)",
        "amber-radial": "radial-gradient(circle, rgba(245,170,26,0.14) 0%, transparent 70%)",
        "amber-radial-faint": "radial-gradient(circle, rgba(245,170,26,0.06) 0%, transparent 60%)",
      },
    },
  },
};
```

---

*Generated from the live portfolio at umairahmed.com. Based entirely on observed patterns. No generic design advice.*

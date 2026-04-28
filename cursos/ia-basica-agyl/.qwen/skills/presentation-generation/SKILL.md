# Presentation Generation Skill

This skill captures best practices and patterns for generating polished, professional HTML slide presentations like the AGYL "Cómo hablarle bien a la IA" session.

---

## Design System

### Color Palette (AGYL Corporate)
```css
--agyl-teal: #048dad;          /* Primary brand */
--agyl-teal-dark: #078fa7;     /* Darker teal */
--agyl-teal-deep: #036078;     /* Deepest teal (dark backgrounds) */
--agyl-gold: #ccad00;          /* Accent gold */
--agyl-gold-soft: #e6c70d;     /* Soft gold */
--agyl-bg: #FFFFFF;            /* Background */
--agyl-bg-soft: #F6F5F1;       /* Warm off-white */
--agyl-ink: #0B0B0F;           /* Primary text */
--agyl-muted: #5B5F6A;         /* Secondary text */
--agyl-line: rgba(4,141,173,0.15); /* Border/line */
```

### Typography
- **Display font**: `Sofia Sans Extra Condensed` (weights 600, 700, 800) — headings, titles
- **Body font**: `DM Sans` (weights 400, 500, 600, 700) — paragraphs, bullets
- **Monospace**: `Courier New` — prompts, code snippets

### Font Sizes (Readability is key)
- Page h2: `clamp(2.8rem, 5.5vw, 4.5rem)`
- Description text: `1.5rem`
- Bullet items: `1.35rem`
- Card h3: `1.7rem`
- Card p: `1.15rem`
- Split pane h3: `clamp(2.2rem, 4vw, 3.2rem)`
- Statement h2: `clamp(3.5rem, 8vw, 7rem)`

---

## Slide Types

### 1. Cover (slide-cover)
- Full-screen, centered
- Teal chip with white h1
- Subtitle, meta info (speaker, session number, duration)
- Decorative diagonal stripes (top-right, bottom-left)
- Logo top-left
- **No watermark**

### 2. Section Divider (slide-section)
- Full teal background
- Large h2 (4-8rem)
- Small tag in gold (session block + timing)
- Description paragraph
- Logo watermark as background (opacity 0.12)

### 3. Content Page (slide-page)
- White background
- Chip title bar (teal or gold)
- h2 heading
- Content: bullets, cards, prompts, grids
- Bottom stripe (teal + gold)
- Watermark "A" (decorative, subtle)

### 4. Split Layout (slide-split)
- Two pan side by side
- Left: soft bg (off-white)
- Right: teal bg (or gold bg)
- Each pane has tag, h3, content
- Used for before/after, good/bad comparisons

### 5. Statement (slide-statement)
- Full white, centered
- Large h2 with accent colors (teal, gold)
- Tag above, supporting text below
- High-impact, one-idea slides

### 6. Contact/Closing (slide-contact)
- Split: dark left (contact info), teal right (decorative)
- Photo, name, social links
- Closing message

---

## Component Patterns

### Cards Grid
- 3-column default, responsive to 2 and 1
- White bg, subtle border, teal top border (gold variant)
- Label (uppercase, tracking, gold) + h3 + p

### Bullet Lists (agyl-bullets)
- Gold square pseudo-element (::before)
- No default list style
- Strong text for emphasis (teal-deep color)

### Prompt Boxes
- Left border accent (teal = good, red = bad, gold = example)
- Label (uppercase, small)
- Monospace text
- Background varies (bg-soft, or translucent on colored panes)

### Chat Card
- For interaction prompts
- Bordered card with icon
- Large text, hint for facilitator

### Steps/Turns
- Vertical timeline with left border
- Number column (large, display font)
- Strong title + monospace description
- Color-coded borders (teal-1, teal-2, gold-1, gold-2)

### RAFAT Letters Grid
- 5 columns
- Large letter (display font, teal)
- Name + description

### Framework Grid
- 5 columns
- Number (gold) + h4 + p

### Demo Buttons
- Pill-shaped links
- Primary (teal bg), gold (gold bg), ghost (white bg)

---

## Navigation & Interactivity

### General Navigation
- Prev/Next arrows (bottom center)
- Keyboard: arrows, space, page up/down, home, end
- Touch swipe
- Hash-based deep linking (#0, #1, etc.)
- Progress bar (top, gold)
- Slide counter (bottom-right)
- Fullscreen toggle (F key)

### Interactive Diagrams Integration
- Diagrams (like Chain of Thought, System Prompt) use **general navigation** — no separate controls
- When on a diagram slide, pressing → advances the diagram step-by-step
- Only after the last step does it move to the next slide
- Pressing ← goes back through diagram steps
- Diagrams reset when navigating to their slide
- Show progress text + instruction hint

---

## Content Patterns

### RAFAT Framework
- **R**ol — who speaks
- **A**cción — what task
- **F**ormato — how delivered
- **A**ntecedentes — context
- **T**emperatura — creativity level (express as **percentage**: 0-100%, default ~70%)

### Context Emphasis
- **Context is the most important piece** for models
- Without context → generic, average answer
- With context → specific, useful answer
- Mental model: explain to a consultant who arrives today

### Temperature as Percentage
- LLMs default to **~70% temperature** — more creative than precise
- Low (0-30%): conservative, factual
- Medium (40-60%): professional with personality
- High (70-100%): creative, risky

### Comparison Tables
- Use styled HTML tables for service/tool comparisons
- Include: service name, plan, price, best model, best for, ease, speed, key features, limitations
- Add quick-picks chips below the table

---

## Layout & Spacing

### Padding
- Content slides: `4rem 6rem` (top/bottom, left/right)
- Cover: `6rem 8rem`
- Section dividers: `6rem 8rem`
- Split panes: `4rem 3rem`

### Gaps
- slide-page: `1.5rem` between elements
- cards-grid: `1.1rem` gap
- bullets: `0.9rem` gap

### Footer Stripe
- 22px height, full width
- Teal: 1fr, Gold: 80px
- Present on all content pages

---

## Responsive Breakpoints
- 1024px: 2-col grids, smaller padding
- 768px: 1-col grids, split → column, smaller elements
- Logo corner: 32px on mobile
- Watermark: 20rem on mobile

---

## Key UX Principles

1. **Text must be readable from a distance** — use large fonts, high contrast
2. **One idea per slide** — avoid overcrowding
3. **Consistent visual hierarchy** — teal = primary, gold = accent/highlight
4. **Interactive elements should feel native** — keyboard + touch + click
5. **Progress is visible** — bar + counter
6. **Decorative elements are subtle** — watermark "A" at 5% opacity
7. **Logos positioned correctly** — corner for content slides, hidden for covers/dark backgrounds

---

## File Structure
```
sesion-X/
├── sesion-X.html          # Single-file presentation
├── images/
│   ├── logo-agyl.png      # Corporate logo
│   └── ...                 # Other images
└── materiales-demo/        # Handout materials
```

The HTML is **fully self-contained** — single file, inline CSS + JS, external fonts via Google Fonts CDN, images in local `images/` folder.

---

## Quick Checklist for New Presentations

- [ ] Color variables in `:root`
- [ ] Display + body font loaded from Google Fonts
- [ ] Progress bar, slide counter, logo corner
- [ ] Deck container with slide sections
- [ ] Each slide has correct type class (cover, page, section, split, statement, contact)
- [ ] Footer stripe on content slides
- [ ] Watermark "A" on content slides
- [ ] Navigation arrows at bottom
- [ ] JS: update(), go(), next(), prev() functions
- [ ] Keyboard + touch support
- [ ] Responsive media queries
- [ ] Hash-based deep linking

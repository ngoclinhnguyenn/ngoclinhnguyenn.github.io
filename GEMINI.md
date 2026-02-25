# Personal Portfolio Builder — Notion-Inspired

## Role

Act as a Senior Frontend Engineer specializing in clean, content-first personal portfolios. You build sites that feel like a well-organized Notion workspace — spacious, scannable, and satisfying to navigate. Every element earns its space. No decoration without purpose. The result should feel **fast, precise, readable, and authoritative** — with a refined **dark/light mode** and a soft **pastel color palette** that feels warm and inviting in both themes.

## Agent Flow — MUST FOLLOW

When the user asks to build or rebuild the portfolio (or this file is loaded into a fresh project), **do not ask questions**. All content already exists in the repository. Extract every detail from the existing `index.html`, images in `images/`, and any other files present. Then build the full site immediately. Do not over-discuss. Build.

### Content Source (extract from existing repo)

- **Name:** Linh Nguyen
- **Headline:** Project/Product Manager · IT Consultant & Business Analyst · Marketing & Event Coordinator
- **About:** Transforms data into meaningful digital experiences — business analysis meets visionary project leadership. Background in BA, project management, event coordination, and marketing. Interested in blending product strategy, data insights, and user experience.
- **Profile Image:** `images/propic.png` (primary), `images/me.jpg` (hero alternative)
- **Social Links:** [LinkedIn](https://www.linkedin.com/in/ngoclinhnguyenn/), [Facebook](https://www.facebook.com/ngoclinhnguyenn/), [Email](mailto:ngoclinhnguyenk3@gmail.com)
- **Resume:** [Google Doc](https://docs.google.com/document/d/1vZ02x0VWySrJvV_b7jdkwknSxZpkGIuWmgZ2rtwJbcs/edit?usp=sharing)

### Experience (extract from existing repo)

| # | Organization | Role | Dates | Logo |
|---|---|---|---|---|
| 1 | Northeastern University | MS in Project Management · GPA 3.9/4.0 | Graduated July 2025 | `images/cornelllogo.png` |
| 2 | Northeastern Career Development | Project Manager, Marketing Operations | Sep 2024 – Apr 2025 | `images/amazonlogo.png` |
| 3 | S3 Corp | Technical Business Analyst & Consultant | Jun 2023 – Aug 2023 | `images/mathworkslogo.jpg` |
| 4 | FPT USA Corp | Business Analyst | Feb 2022 – Apr 2023 | `images/whitefoxlogo.jpg` |
| 5 | UConn Dean's Office (CLAS) | Program Assistant | Dec 2019 – Dec 2021 | `images/inservelogo.jpg` |
| 6 | IDP (International Dairy Products) | Product Marketing Intern | May 2019 – Aug 2019 | `images/lcneuro.jpg` |

### Projects (extract from existing repo)

| # | Name | Type | Image |
|---|---|---|---|
| 1 | Big Iron App | Innovative Product Project — fitness tracker app | `images/snake.png` |
| 2 | Diversity Connected | Capstone Project — CRM implementation for DEI consulting firm | `images/LVFusebox.png` |
| 3 | Student Success Story Website | Internship Personal Project — storytelling platform for Northeastern Seattle | `images/fsaecar.png` |

### Awards (extract from existing repo)

- Northeastern University — 2024-2025 Student Employee of the Year Winner
- GSBA Non-Profit of the Year in 2025 Nominee
- College of Professional Studies Leaders and Scholars Award
- College of Professional Studies Leaders and Scholar Scholarship Recipient

---

## Design Philosophy

Inspired by **Notion** (clean structure, generous whitespace, typographic hierarchy) with a modern twist: **pastel-accented dual-theme design** that feels like opening a beautifully organized workspace — not a marketing site. The portfolio supports seamless **dark and light mode** toggling with smooth transitions between themes.

### Core Principles

1. **Content-first & Immersive.** Typography, whitespace, and dynamic parallax elements create depth. Thoughtful gradients and scroll effects modernize the feel.
2. **Dual-theme & Pastel.** Every surface, card, and interaction adapts to light and dark mode using a cohesive pastel palette. Theme transitions are smooth (`300ms`) and feel intentional.
3. **Scannable & Flexible.** A visitor should understand who Linh is quickly, with flexible content placement and creative image usage.
4. **High-performance Modern Stack.** Built with React 19 + Tailwind CSS v4 + Framer Motion. Optimized LCP, lazy-loaded images, and efficient re-renders.
5. **Interactive & Alive.** Mouse-tracking effects, magnetic buttons, parallax layers, and cursor interactions make the site feel responsive to the user's presence.
6. **Authoritative & Premium.** Clean lines, professional typography, intentional color — the design communicates competence.

---

## Design System

### Palette — "Pastel Notion" (Dual-Theme)

Theme is controlled via a `data-theme="light"` or `data-theme="dark"` attribute on `<html>`. Tailwind uses CSS custom properties for all colors so theme switching is instant.

#### Light Mode

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#FDFCFA` | Page background — warm off-white |
| `--bg-secondary` | `#F5F0EB` | Card surfaces, section alternation — soft cream |
| `--bg-tertiary` | `#EDE7DF` | Hover states, subtle emphasis — warm sand |
| `--text-primary` | `#2D2B29` | Headings, body copy — soft black |
| `--text-secondary` | `#7A7572` | Dates, metadata, captions |
| `--text-tertiary` | `#A39E9A` | Placeholder, disabled |
| `--accent` | `#A78BFA` | Primary accent — soft lavender/violet |
| `--accent-hover` | `#8B5CF6` | Accent hover — deeper violet |
| `--accent-soft` | `rgba(167, 139, 250, 0.12)` | Accent tint for backgrounds |
| `--pastel-rose` | `#FECDD3` | Tag pill backgrounds, decorative accents |
| `--pastel-sky` | `#BAE6FD` | Alternate tag color, skill pills |
| `--pastel-mint` | `#BBF7D0` | Status indicators, success states |
| `--pastel-peach` | `#FED7AA` | Warm highlight accents |
| `--pastel-lilac` | `#DDD6FE` | Card accent borders, decorative dots |
| `--border` | `#E8E3DD` | Card borders, dividers |
| `--border-hover` | `#D4CFC9` | Card hover border |
| `--shadow-color` | `220 20% 60%` | HSL base for shadows |

#### Dark Mode

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#1A1A2E` | Page background — deep navy |
| `--bg-secondary` | `#22223A` | Card surfaces — muted indigo |
| `--bg-tertiary` | `#2A2A45` | Hover states — subtle emphasis |
| `--text-primary` | `#EEEDF5` | Headings, body copy — soft white |
| `--text-secondary` | `#9B97A8` | Dates, metadata, captions |
| `--text-tertiary` | `#6B6780` | Placeholder, disabled |
| `--accent` | `#C4B5FD` | Primary accent — soft lavender |
| `--accent-hover` | `#A78BFA` | Accent hover |
| `--accent-soft` | `rgba(196, 181, 253, 0.10)` | Accent tint for backgrounds |
| `--pastel-rose` | `#4A2832` | Muted pastel rose for dark |
| `--pastel-sky` | `#1E3A4F` | Muted pastel sky for dark |
| `--pastel-mint` | `#1A3D2A` | Muted pastel mint for dark |
| `--pastel-peach` | `#3D2E1A` | Muted pastel peach for dark |
| `--pastel-lilac` | `#2D2848` | Muted pastel lilac for dark |
| `--border` | `#2F2F4A` | Card borders, dividers |
| `--border-hover` | `#3D3D5C` | Card hover border |
| `--shadow-color` | `240 30% 10%` | HSL base for shadows |

### Tailwind CSS v4 Configuration

Extend `tailwind.config.js` to reference these CSS custom properties:

```js
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: 'var(--bg)',
          secondary: 'var(--bg-secondary)',
          tertiary: 'var(--bg-tertiary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          soft: 'var(--accent-soft)',
        },
        pastel: {
          rose: 'var(--pastel-rose)',
          sky: 'var(--pastel-sky)',
          mint: 'var(--pastel-mint)',
          peach: 'var(--pastel-peach)',
          lilac: 'var(--pastel-lilac)',
        },
        border: {
          DEFAULT: 'var(--border)',
          hover: 'var(--border-hover)',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        reading: '720px',
        wide: '1080px',
      },
      borderRadius: {
        card: '12px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
};
```

### Typography

| Element | Font | Weight | Size | Tracking |
|---|---|---|---|---|
| Page title / Hero name | `Inter` | 700 | `clamp(2.5rem, 5vw, 4rem)` | `-0.03em` |
| Section headings | `Inter` | 600 | `1.5rem` | `-0.02em` |
| Card titles | `Inter` | 600 | `1.125rem` | `-0.01em` |
| Body copy | `Inter` | 400 | `1rem` / `1.65` line-height | `0` |
| Metadata / dates | `Inter` | 400 | `0.875rem` | `0.01em` |
| Monospace accents | `JetBrains Mono` | 400 | `0.8125rem` | `0` |

Load via Google Fonts: `Inter:wght@400;500;600;700` and `JetBrains+Mono:wght@400`.

### Layout Constants

- **Max content width:** `720px` (Notion-style reading column)
- **Wide breakout:** `1080px` (for card grids / experience section)
- **Section padding:** `clamp(3rem, 8vw, 6rem)` vertical
- **Card border-radius:** `12px`
- **Card shadow (rest):** `0 1px 3px hsl(var(--shadow-color) / 0.06)`
- **Card shadow (hover):** `0 8px 24px hsl(var(--shadow-color) / 0.12)`
- **Transition default:** `200ms ease`
- **Theme transition:** `background-color 300ms ease, color 300ms ease, border-color 300ms ease, box-shadow 300ms ease`

---

## Theme Toggle

### Implementation

A `ThemeToggle` component that switches between light and dark mode. Requirements:

- **Position:** Fixed in the top-right area of the navbar (before nav links on desktop, in the hamburger menu on mobile).
- **Icon:** Sun (☀️) for light mode, Moon (🌙) for dark mode. Use an animated SVG icon that morphs between sun/moon shapes. The icon rotates `180deg` on toggle with `400ms spring` animation (Framer Motion).
- **Persistence:** Save preference to `localStorage` under `theme` key. On first visit, detect `prefers-color-scheme` media query and use that as default.
- **Mechanism:** Toggles `data-theme` attribute on `<html>` element. All CSS custom properties update instantly. Add `transition: background-color 300ms ease, color 200ms ease` to `*` selector during theme switch (remove after transition to avoid interfering with other animations).
- **Hover:** The toggle button has a soft `var(--accent-soft)` background on hover, `border-radius: 50%`, `padding: 8px`.
- **Tailwind class:** Use `className="p-2 rounded-full hover:bg-accent-soft transition-colors duration-200"`.

### Theme-Aware Styles

All components must reference `var(--*)` tokens. **Never hardcode colors.** Examples:
- `bg-bg` → resolves to `var(--bg)` → `#FDFCFA` (light) / `#1A1A2E` (dark)
- `text-text-primary` → resolves to `var(--text-primary)`
- `border-border` → resolves to `var(--border)`

---

## Visual Flair, Animations & Mouse Interactions

### Scroll-Triggered Animations (Framer Motion)

Use Framer Motion's `motion` components and `useInView` hook for all entrance animations.

- **Sections:** Fade-in + slide-up (`y: 20` → `0`, `opacity: 0` → `1`). Duration: `0.5s`, ease: `[0.25, 0.1, 0.25, 1]`.
- **Card stagger:** Use `staggerChildren: 0.08` in parent `variants`. Each card animates in sequence.
- **Reduced motion:** Check `useReducedMotion()` hook. If true, disable all transform animations — only allow opacity and color transitions.

### Mouse-Tracking Interactions

These give the site a premium, alive feel — the interface subtly responds to the cursor.

1. **Cursor glow effect:** A soft radial gradient follow-cursor highlight on card surfaces. Use `onMouseMove` to track cursor position relative to the card. Apply via CSS `background: radial-gradient(circle at ${x}px ${y}px, var(--accent-soft) 0%, transparent 60%)`. Fade in on mouse enter, fade out on mouse leave. Use `requestAnimationFrame` for smooth updates.

2. **Magnetic buttons:** Social links and CTA buttons subtly pull toward the cursor when within `40px` proximity. On hover, the button translates `4–6px` toward the cursor position using `transform: translate(${dx}px, ${dy}px)`. Spring back on mouse leave with `transition: transform 400ms cubic-bezier(0.25, 0.1, 0.25, 1)`.

3. **Tilt cards:** Experience and project cards apply a subtle 3D tilt effect on hover based on cursor position. Max rotation: `3deg` on both X and Y axes. Use `transform: perspective(800px) rotateX(${ry}deg) rotateY(${rx}deg)`. Reset to `0deg` on mouse leave with spring easing.

4. **Parallax hero elements:** Decorative pastel shapes (blurred circles, dots, or abstract gradients) in the hero section move at different speeds based on cursor position. Main content stays fixed; decorative layers offset by `cursor * 0.02` to `cursor * 0.05`. Creates depth without motion sickness.

5. **Trail dots:** On the hero section only, tiny pastel dots (`4px` circles) trail the cursor with staggered delay (`50ms` between each). Trail length: 5 dots. Colors cycle through `--pastel-rose`, `--pastel-sky`, `--pastel-mint`, `--pastel-lilac`. Opacity fades from `0.6` to `0` along the trail. Use `requestAnimationFrame` and keep in a `useRef` array.

### Card Hover Micro-Interactions

- **Lift:** `translateY(-4px)` on hover. Transition: `250ms cubic-bezier(0.25, 0.1, 0.25, 1)`.
- **Shadow deepening:** Shadow transitions from rest to `0 12px 32px hsl(var(--shadow-color) / 0.12)`.
- **Border glow:** Border transitions to `var(--border-hover)`, and a faint `1px` inner glow of `var(--accent-soft)` appears.
- **Background shimmer:** Card background subtly shifts from `var(--bg-secondary)` to `var(--bg)` — a barely perceptible lighten.

### Link & Button Animations

- **Underline expand:** Text links have a bottom border that expands from center (`scaleX(0)` → `scaleX(1)`) on hover. Color: `var(--accent)`, height: `2px`. Use `::after` pseudo-element with `transform-origin: center`.
- **Button press:** CTA buttons scale to `0.97` on active (`:active`) state for a press-down feel. `transition: transform 100ms ease`.
- **Pastel tag pulse:** On first viewport entry, skill/tag pills do a single subtle pulse animation — `scale(0.95)` → `scale(1.02)` → `scale(1)` over `400ms`. Only once.

### Gradient Section Dividers

Between major sections, render a `1px`-height horizontal line:
- Light mode: `linear-gradient(90deg, transparent, var(--pastel-lilac), var(--accent-soft), var(--pastel-rose), transparent)`
- Dark mode: Same gradient but with muted dark-mode pastel values.
- Width: `60%`, centered. Adds visual rhythm without harsh rules.

### Image Effects

- **Project card images:** Scale to `1.03` on card hover. `overflow: hidden` on container. Transition: `400ms ease`. A subtle gradient overlay (`transparent` → `hsl(var(--shadow-color) / 0.04)`) appears on hover.
- **Profile image glow:** Animated ring using `box-shadow`. Rest: `0 0 0 4px var(--accent-soft)`. Hover: `0 0 0 6px rgba(167, 139, 250, 0.2)` (light) / `0 0 0 6px rgba(196, 181, 253, 0.2)` (dark). Transition: `300ms ease`.
- **About section image:** Slight parallax on scroll — image translates `translateY(-20px)` to `translateY(20px)` based on scroll position within section. Smooth, slow movement.

### Smooth Scroll

`html { scroll-behavior: smooth }` for in-page navigation. Also use Framer Motion `useScroll` for scroll-linked parallax values.

### Active Nav Indicator

Current section's nav link gets a `2px` accent-colored underline that slides to the active item using CSS `transition: left 300ms ease, width 300ms ease`. Determined via `IntersectionObserver` watching each section.

### Reduced Motion

All animations wrapped in `@media (prefers-reduced-motion: no-preference)` or gated behind Framer Motion's `useReducedMotion()`. Users who prefer reduced motion get instant rendering — no transforms, no parallax. Only color and opacity transitions remain.

---

## Component Architecture

### A. NAVBAR — "Notion Topbar"

A clean, minimal sticky bar — not a floating island.
- **Desktop:** Full-width, `max-width: 1080px` centered. Logo text ("Linh Nguyen") left-aligned, nav links right-aligned: Home, Experience, Projects, About, Resume (↗ icon). **Theme toggle button** between nav links and logo.
- **Mobile:** Hamburger → slide-down panel. Theme toggle inside the mobile menu.
- **Scroll behavior:** Transparent at top. On scroll: `bg-bg/92` with `backdrop-blur-xl`, hairline `border-b border-border`. Transition: `300ms ease`. Subtle `shadow-sm` when scrolled.
- **Theme-aware:** Background adapts — light: `rgba(253,252,250,0.92)`, dark: `rgba(26,26,46,0.92)`.
- **Styling:** Text is `text-text-secondary`, active link is `text-text-primary` with animated accent underline.
- **Hover:** Nav links shift to `text-text-primary` with `200ms` transition. Subtle `translateY(-1px)` lift.

### B. HERO — "The Introduction"

A **centered, typographic introduction** — like opening someone's Notion profile page. Enhanced with cursor-interactive decorative elements.

- **Layout:** Centered column, `max-width: 720px`. Generous top padding (`clamp(4rem, 10vw, 8rem)`).
- **Background decoration:** 3–4 blurred pastel circles (absolute positioned, `blur(60px)`, `opacity: 0.3`) that shift with cursor movement (parallax). Colors: `--pastel-lilac`, `--pastel-rose`, `--pastel-sky`, `--pastel-mint`. These create a soft aurora effect behind the content.
- **Content stack (top to bottom):**
  1. Profile image — circular, `96px`, border `2px solid var(--border)`, accent glow on hover. Use `images/propic.png`.
  2. Name — `"Linh Nguyen"` page-title style.
  3. Headline — one-line role description, `text-text-secondary`, `text-lg`.
  4. Brief tagline — 1–2 sentences. `text-text-secondary`, `text-base`.
  5. Social row — magnetic icon buttons (LinkedIn, Email) + "View Resume" text link.
- **Cursor trail:** Pastel dot trail follows cursor within hero bounds only.
- **Animation:** Staggered Framer Motion fade-in: image → name → headline → tagline → socials. `staggerChildren: 0.06`, `duration: 0.4`, `ease: [0.25, 0.1, 0.25, 1]`.

### C. EXPERIENCE — "Timeline Cards"

Vertical stacked card layout — clean, scannable, Notion-database-row energy.

- **Section header:** "Experience" section-heading style, left-aligned within `720px` column.
- **Layout:** Vertically stacked cards. Each card:
  - Left: company logo (`40px`, `rounded-lg`, `object-contain`).
  - Right: Organization (card-title), Role (body), Date range (`text-text-secondary font-mono text-sm`).
  - Bottom: pastel tag pills for skills. Colors rotate through `--pastel-rose`, `--pastel-sky`, `--pastel-mint`, `--pastel-peach`, `--pastel-lilac`.
- **Card styling:** `bg-bg-secondary`, `border border-border`, `rounded-card`, `p-6`. Cursor glow and tilt on hover.
- **Entrance:** Framer Motion stagger with `staggerChildren: 0.08`.
- **Timeline connector:** `1px` vertical line in `var(--border)` connecting logos (desktop only).

### D. PROJECTS — "Pinterest Board"

**Masonry-inspired card grid** — the visual energy section.

- **Section header:** "Projects" section-heading style.
- **Layout:** 2-column grid desktop (`max-w-wide`), single column mobile.
- **Each project card:**
  - Top: project image, full-width, `rounded-t-card`. `overflow-hidden` for zoom effect.
  - Below: project name, type label (`font-mono text-sm text-text-secondary`), description.
  - "View Details →" link in accent color.
- **Card styling:** Full cursor-glow + tilt interaction. Hover: `translateY(-4px)` lift, shadow deepens, image zooms `1.03`.
- **Entrance:** Stagger in with alternating subtle rotation (`±0.5deg`).

### E. ABOUT — "The Details Page"

Calm, text-forward section.

- **Layout:** Two-column desktop (`max-w-wide`). Left: large profile image, `rounded-2xl`, soft shadow, subtle parallax on scroll. Right: about text + awards.
- **Awards:** Bulleted with 🏆 prefix. Staggered fade-in. Hover: shift right `4px` with accent left border.
- **Content:** 2–3 about paragraphs, hobbies in `italic text-text-secondary`.
- **Mobile:** Stacks vertically.

### F. FOOTER — "Minimal Sign-off"

- Centered within `max-w-reading`.
- "Linh Nguyen · 2026" + social icons (magnetic hover effect).
- `text-text-tertiary` "Built with care" small text.
- Subtle top gradient divider matching section dividers.

---

## Technical Requirements

- **Stack:** React 19, Tailwind CSS v4, Framer Motion, Vite.
- **Theme system:** CSS custom properties on `<html data-theme>`, toggled via React context (`ThemeContext`). Persist to `localStorage`. Detect `prefers-color-scheme` on first visit.
- **Fonts:** Google Fonts — `Inter:wght@400;500;600;700` and `JetBrains+Mono:wght@400`.
- **Images:** Use existing images from `images/` directory. Copy to `src/assets/` or reference from `public/`.
- **No placeholders.** Every card, label, animation, and interaction fully implemented.
- **Responsive:** Mobile-first with Tailwind breakpoints (`sm`, `md`, `lg`).
- **Performance:** Lazy-load images, debounce mouse-tracking events, use `will-change` sparingly, clean up `requestAnimationFrame` in `useEffect` cleanup.
- **Accessibility:** `aria-label` on theme toggle, `prefers-reduced-motion` respected, keyboard navigation for all interactive elements, focus-visible rings in accent color.

---

## File Structure

```
/ (root)
├── public/
│   └── images/          ← Existing image assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx    ← Dark/light mode toggle
│   │   └── ui/
│   │       ├── Card.jsx       ← Reusable card with glow + tilt
│   │       ├── MagneticButton.jsx  ← Magnetic hover button
│   │       ├── CursorTrail.jsx     ← Pastel dot cursor trail
│   │       └── SectionDivider.jsx  ← Gradient divider
│   ├── context/
│   │   └── ThemeContext.jsx   ← Theme provider + hook
│   ├── hooks/
│   │   ├── useMousePosition.js   ← Cursor tracking hook
│   │   ├── useTilt.js            ← 3D tilt effect hook
│   │   └── useScrollReveal.js    ← Intersection observer hook
│   ├── styles/
│   │   └── theme.css          ← CSS custom properties for both themes
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css              ← Tailwind directives + global styles
├── index.html
├── tailwind.config.js
├── package.json
└── GEMINI.md
```

---

## Build Sequence

1. Read all content from existing sources.
2. Initialize React 19 project with Vite (`npm create vite@latest . -- --template react`).
3. Install dependencies: `npm install tailwindcss @tailwindcss/vite framer-motion`.
4. Configure Tailwind CSS v4 with custom theme tokens in `tailwind.config.js`.
5. Create `theme.css` with all CSS custom properties for light/dark modes.
6. Build `ThemeContext` provider with `localStorage` persistence and `prefers-color-scheme` detection.
7. Build reusable UI primitives: `Card`, `MagneticButton`, `CursorTrail`, `SectionDivider`.
8. Build custom hooks: `useMousePosition`, `useTilt`, `useScrollReveal`.
9. Build page components: Navbar (with theme toggle), Hero, Experience, Projects, About, Footer.
10. Create GitHub Actions workflow for building and deploying.
11. Test responsiveness, theme switching, animations, and accessibility.
12. Ensure premium feel across all breakpoints and both themes.

**Execution Directive:** "Build a workspace, not a spectacle. The design should disappear — leaving only the content, the career, the person. But when you move your cursor… the workspace comes alive."
# ScrapixAI — React + Tailwind CSS (JSX Format)

A fully converted React + Tailwind CSS website with all files in `.jsx` format.

## What Was Fixed

### 🐛 Gradient Text Bug (shown in screenshot)
**Problem:** When switching themes, gradient-clipped text rendered as a solid colored block instead of transparent gradient text.

**Root cause:** `background: var(--css-var)` + `WebkitBackgroundClip: text` fails to repaint when CSS variables change — the browser clips the background but doesn't re-resolve the variable.

**Fix:** A dedicated `<GradText>` component that:
1. Uses `backgroundImage: gradient` (direct string value, not a CSS variable)
2. Uses `key={gradient}` to force React to remount the DOM node when the theme changes, triggering a full browser repaint

```jsx
export function GradText({ gradient, children, tag: Tag = 'span' }) {
  return (
    <Tag
      key={gradient}  // ← forces remount → forces browser repaint
      style={{
        backgroundImage: gradient,     // ← direct value, not CSS var
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </Tag>
  );
}
```

Every heading with gradient text across all 8 pages now uses `<GradText gradient={theme.grad}>`.

## Architecture

| Layer | Tech |
|---|---|
| UI Framework | React 18 + JSX |
| Styling | Tailwind CSS 3 |
| Routing | React Router v6 |
| Animations | Framer Motion v11 |
| Theme System | CSS Variables + ThemeContext |
| Server | Express.js (contact form) |

## Install & Run

```bash
npm install
npm start           # React dev server → localhost:3000
npm run server      # Express API → localhost:5000 (for contact form)
```

## File Structure

```
src/
  App.jsx
  index.jsx
  index.css                    ← Tailwind + component classes
  context/
    ThemeContext.jsx            ← 4 themes, sets 24 CSS variables
  data/
    data.jsx                   ← All site content (edit here)
  components/
    layout/
      Navbar.jsx
      Footer.jsx
    ui/
      UIComponents.jsx         ← GradText, NeuralCanvas, Reveal, Counter, Modal...
      ThemeSwitcher.jsx
    pages/
      Home.jsx
      Services.jsx
      Portfolio.jsx
      CaseStudies.jsx
      About.jsx
      Team.jsx
      Process.jsx
      Contact.jsx
```

## Tailwind Component Classes (index.css)

- `btn-primary` — gradient CTA button
- `btn-ghost` — outlined ghost button  
- `section-h2` — responsive section heading
- `tag-pill` — badge/label pill
- `tech-tag` — stack/tool badge
- `card` — base card with hover
- `form-input` — styled input field
- `line-top` — decorative gradient top border
- `shimmer-layer` — animated shimmer overlay
- `max-container` — 1280px max-width wrapper
- `section-pad`, `section-pad-sm`, `page-pad` — section padding utilities

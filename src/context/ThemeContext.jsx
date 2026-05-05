import React, { createContext, useContext, useState, useEffect } from 'react';

// ============================================================
//  THEME CONTEXT — ScrapixAI
//  HOW TO CUSTOMIZE COLORS:
//  Each theme has these key color fields you can change:
//
//  primary   → Main brand color (buttons, highlights, borders)
//  secondary → Secondary accent color
//  accent    → Third accent color (used for variety)
//  bg        → Main page background
//  bg2       → Alternate section background (slightly different)
//  bgCard    → Card/panel background
//  textPrimary   → Headings and important text (MUST contrast with bg)
//  textSecondary → Body text and descriptions
//  textMuted     → Subdued text, placeholders
//  textFaint     → Very light text, labels, captions
//
//  RULE: Dark themes → text should be LIGHT (#f8fafc, #e2e8f0)
//        Light themes → text should be DARK (#0f172a, #1e293b)
//
//  HOW TO ADD A NEW THEME:
//  1. Copy one of the theme objects below
//  2. Give it a new id (e.g. "mytheme")
//  3. Update all color values
//  4. It will automatically appear in the ThemeSwitcher
// ============================================================

export const THEMES = {

  // ── DARK CYBER (Default) ─────────────────────────────────
  // Deep dark blue-black with purple/blue/cyan accents
  cyber: {
    id: 'cyber', name: 'Dark Cyber', emoji: '⚡', isDark: true,

    // Backgrounds (all dark)
    bg:          '#080c18',
    bg2:         '#0b0f1a',
    bg3:         '#0d1322',
    bgCard:      'rgba(255,255,255,0.04)',
    bgCardHover: 'rgba(255,255,255,0.07)',

    // Brand colors
    primary:   '#7c3aed',
    secondary: '#2563eb',
    accent:    '#06b6d4',

    // TEXT — all LIGHT for dark background
    textPrimary:   '#f8fafc',   // headings → near white
    textSecondary: '#cbd5e1',   // body text → light grey
    textMuted:     '#94a3b8',   // subdued text → medium grey
    textFaint:     '#64748b',   // captions/labels → dim grey

    // Borders
    borderColor:  'rgba(124,58,237,0.2)',
    borderHover:  'rgba(124,58,237,0.5)',
    borderSubtle: 'rgba(255,255,255,0.08)',

    // Gradients
    grad:    'linear-gradient(135deg,#7c3aed 0%,#2563eb 50%,#06b6d4 100%)',
    gradText:'linear-gradient(135deg,#a78bfa 0%,#60a5fa 50%,#67e8f9 100%)',
    gradBg:  'linear-gradient(135deg,rgba(124,58,237,0.15),rgba(37,99,235,0.10))',

    // Neural canvas node colors
    nodeRgb:  '124,58,237',
    node2Rgb: '37,99,235',

    // Nav
    navBg:       'rgba(8,12,24,0.85)',
    navBgScroll: 'rgba(8,12,24,0.97)',
    navBorder:   'rgba(124,58,237,0.25)',

    // Buttons & tags
    btnText:   '#ffffff',
    tagBg:     'rgba(124,58,237,0.15)',
    tagBorder: 'rgba(124,58,237,0.35)',
    tagText:   '#a78bfa',
  },

  // ── LIGHT PRO ────────────────────────────────────────────
  // Clean white/light-grey with indigo/teal accents
  light: {
    id: 'light', name: 'Light Pro', emoji: '☀️', isDark: false,

    // Backgrounds (all LIGHT)
    bg:          '#f8fafc',
    bg2:         '#f1f5f9',
    bg3:         '#ffffff',
    bgCard:      'rgba(255,255,255,0.85)',
    bgCardHover: 'rgba(255,255,255,0.95)',

    // Brand colors
    primary:   '#4f46e5',
    secondary: '#0891b2',
    accent:    '#7c3aed',

    // TEXT — all DARK for light background
    textPrimary:   '#0f172a',   // headings → near black
    textSecondary: '#1e293b',   // body text → dark grey
    textMuted:     '#374151',   // subdued → medium dark grey
    textFaint:     '#6b7280',   // captions → grey

    // Borders
    borderColor:  'rgba(79,70,229,0.25)',
    borderHover:  'rgba(79,70,229,0.55)',
    borderSubtle: 'rgba(0,0,0,0.10)',

    // Gradients
    grad:    'linear-gradient(135deg,#4f46e5 0%,#0891b2 50%,#7c3aed 100%)',
    gradText:'linear-gradient(135deg,#4f46e5 0%,#0891b2 50%,#7c3aed 100%)',
    gradBg:  'linear-gradient(135deg,rgba(79,70,229,0.08),rgba(8,145,178,0.06))',

    // Neural canvas node colors
    nodeRgb:  '79,70,229',
    node2Rgb: '8,145,178',

    // Nav
    navBg:       'rgba(248,250,252,0.92)',
    navBgScroll: 'rgba(248,250,252,0.99)',
    navBorder:   'rgba(79,70,229,0.2)',

    // Buttons & tags
    btnText:   '#ffffff',
    tagBg:     'rgba(79,70,229,0.10)',
    tagBorder: 'rgba(79,70,229,0.28)',
    tagText:   '#4f46e5',
  },

  // ── MULTICOLOR ───────────────────────────────────────────
  // Dark with vibrant rainbow accent gradient
  multi: {
    id: 'multi', name: 'Multicolor', emoji: '🌈', isDark: true,

    bg:          '#0a0a14',
    bg2:         '#0d0d1a',
    bg3:         '#10101f',
    bgCard:      'rgba(255,255,255,0.04)',
    bgCardHover: 'rgba(255,255,255,0.08)',

    primary:   '#f43f5e',
    secondary: '#f97316',
    accent:    '#22d3ee',

    // TEXT — all LIGHT for dark background
    textPrimary:   '#ffffff',
    textSecondary: '#e2e8f0',
    textMuted:     '#cbd5e1',
    textFaint:     '#94a3b8',

    borderColor:  'rgba(244,63,94,0.25)',
    borderHover:  'rgba(244,63,94,0.55)',
    borderSubtle: 'rgba(255,255,255,0.09)',

    grad:    'linear-gradient(135deg,#f43f5e 0%,#f97316 25%,#eab308 50%,#22c55e 75%,#22d3ee 100%)',
    gradText:'linear-gradient(135deg,#fb7185 0%,#fb923c 25%,#facc15 50%,#4ade80 75%,#67e8f9 100%)',
    gradBg:  'linear-gradient(135deg,rgba(244,63,94,0.12),rgba(249,115,22,0.08),rgba(34,211,238,0.08))',

    nodeRgb:  '244,63,94',
    node2Rgb: '249,115,22',

    navBg:       'rgba(10,10,20,0.88)',
    navBgScroll: 'rgba(10,10,20,0.98)',
    navBorder:   'rgba(244,63,94,0.3)',

    btnText:   '#ffffff',
    tagBg:     'rgba(244,63,94,0.12)',
    tagBorder: 'rgba(244,63,94,0.3)',
    tagText:   '#fb7185',
  },

  // ── AI PRO (Gold/Dark) ────────────────────────────────────
  // Premium black with gold accents
  aipro: {
    id: 'aipro', name: 'AI Pro', emoji: '🤖', isDark: true,

    bg:          '#06050e',
    bg2:         '#09080f',
    bg3:         '#0c0b15',
    bgCard:      'rgba(255,215,0,0.04)',
    bgCardHover: 'rgba(255,215,0,0.08)',

    primary:   '#d4a017',
    secondary: '#b07d12',
    accent:    '#e8c84a',

    // TEXT — LIGHT for dark gold theme
    textPrimary:   '#fef9e7',   // warm white
    textSecondary: '#fdf3c8',   // warm light
    textMuted:     '#e5c97a',   // warm muted
    textFaint:     '#a07828',   // dark gold faint

    borderColor:  'rgba(212,160,23,0.25)',
    borderHover:  'rgba(212,160,23,0.55)',
    borderSubtle: 'rgba(212,160,23,0.12)',

    grad:    'linear-gradient(135deg,#d4a017 0%,#e8c84a 50%,#fef3c7 100%)',
    gradText:'linear-gradient(135deg,#fcd34d 0%,#fde68a 50%,#fef9c3 100%)',
    gradBg:  'linear-gradient(135deg,rgba(212,160,23,0.12),rgba(232,200,74,0.06))',

    nodeRgb:  '212,160,23',
    node2Rgb: '232,200,74',

    navBg:       'rgba(6,5,14,0.90)',
    navBgScroll: 'rgba(6,5,14,0.98)',
    navBorder:   'rgba(212,160,23,0.3)',

    btnText:   '#06050e',
    tagBg:     'rgba(212,160,23,0.12)',
    tagBorder: 'rgba(212,160,23,0.3)',
    tagText:   '#fcd34d',
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    try { return localStorage.getItem('scrapix-theme') || 'cyber'; } catch { return 'cyber'; }
  });
  const theme = THEMES[themeId] || THEMES.cyber;

  useEffect(() => {
    try { localStorage.setItem('scrapix-theme', themeId); } catch {}
    const r = document.documentElement;
    // Apply all theme values as CSS variables for use in index.css
    const vars = {
      '--bg': theme.bg, '--bg2': theme.bg2, '--bg3': theme.bg3,
      '--bg-card': theme.bgCard, '--bg-card-hover': theme.bgCardHover,
      '--primary': theme.primary, '--secondary': theme.secondary, '--accent': theme.accent,
      '--text-primary': theme.textPrimary, '--text-secondary': theme.textSecondary,
      '--text-muted': theme.textMuted, '--text-faint': theme.textFaint,
      '--border-subtle': theme.borderSubtle, '--border-color': theme.borderColor,
      '--grad': theme.grad, '--grad-text': theme.gradText, '--grad-bg': theme.gradBg,
      '--nav-bg': theme.navBg, '--nav-bg-scroll': theme.navBgScroll, '--nav-border': theme.navBorder,
      '--btn-text': theme.btnText,
      '--tag-bg': theme.tagBg, '--tag-border': theme.tagBorder, '--tag-text': theme.tagText,
    };
    Object.entries(vars).forEach(([k, v]) => r.style.setProperty(k, v));
    document.body.style.background = theme.bg;
    document.body.style.color = theme.textPrimary;
  }, [themeId, theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeId, setThemeId, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be inside ThemeProvider');
  return ctx;
}

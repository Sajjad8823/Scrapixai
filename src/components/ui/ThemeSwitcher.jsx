import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, themeId, setThemeId, themes } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 500, display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      {/* Toggle tab */}
      <motion.button
        onClick={() => setOpen(v => !v)}
        whileHover={{ x: -3 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: open ? 46 : 38, height: 'clamp(80px,11vw,108px)',
          background: `linear-gradient(180deg,${theme.primary}40,${theme.secondary}22)`,
          border: `1px solid ${theme.primary}44`, borderRight: 'none',
          borderRadius: '12px 0 0 12px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6,
          cursor: 'pointer', backdropFilter: 'blur(12px)',
          transition: 'all .3s', boxShadow: `0 0 20px ${theme.primary}22`,
        }}>
        <span style={{ writingMode: 'vertical-rl', fontFamily: "'Space Grotesk',sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: '.12em', color: theme.primary, userSelect: 'none' }}>THEME</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} style={{ fontSize: 15 }}>{open ? '✕' : '🎨'}</motion.span>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 60, scale: 0.9 }}
            transition={{ duration: .28, ease: [.22, 1, .36, 1] }}
            style={{
              position: 'absolute', right: 38, top: '50%', transform: 'translateY(-50%)',
              background: theme.isDark ? 'rgba(10,10,20,0.97)' : 'rgba(248,250,252,0.97)',
              border: `1px solid ${theme.borderColor}`,
              borderRadius: 18, padding: 12,
              display: 'flex', flexDirection: 'column', gap: 7,
              backdropFilter: 'blur(24px)',
              boxShadow: `0 12px 48px rgba(0,0,0,.55), 0 0 32px ${theme.primary}18`,
              minWidth: 175, maxWidth: 'calc(100vw - 64px)',
            }}>
            {/* Header */}
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '.1em', color: theme.textFaint, textAlign: 'center', paddingBottom: 8, borderBottom: `1px solid ${theme.borderSubtle}` }}>
              CHOOSE THEME
            </div>
            {/* Theme options */}
            {Object.values(themes).map(t => {
              const active = themeId === t.id;
              return (
                <motion.button
                  key={t.id}
                  whileHover={{ x: -4, scale: 1.02 }}
                  whileTap={{ scale: .96 }}
                  onClick={() => { setThemeId(t.id); setOpen(false); }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '9px 13px', borderRadius: 11, cursor: 'pointer',
                    border: `1px solid ${active ? t.primary : 'rgba(128,128,128,.18)'}`,
                    background: active
                      ? `linear-gradient(135deg,${t.primary}22,${t.secondary}11)`
                      : 'rgba(128,128,128,.05)',
                    transition: 'all .2s',
                    boxShadow: active ? `0 0 18px ${t.primary}33` : 'none',
                  }}>
                  {/* Color dots */}
                  <div style={{ display: 'flex', gap: 3, flexShrink: 0 }}>
                    {[t.primary, t.secondary, t.accent].map((c, i) => (
                      <motion.div key={i}
                        animate={active ? { scale: [1, 1.3, 1] } : { scale: 1 }}
                        transition={{ delay: i * .1, duration: .4 }}
                        style={{ width: 9, height: 9, borderRadius: '50%', background: c, boxShadow: active ? `0 0 8px ${c}` : 'none' }} />
                    ))}
                  </div>
                  {/* Name */}
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 12, fontWeight: active ? 700 : 500, color: active ? t.primary : theme.textMuted, flex: 1 }}>
                    {t.emoji} {t.name}
                  </span>
                  {active && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ color: t.primary, fontSize: 11 }}>✓</motion.span>}
                </motion.button>
              );
            })}
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, color: theme.textFaint, textAlign: 'center', paddingTop: 6, borderTop: `1px solid ${theme.borderSubtle}` }}>
              Saved automatically
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

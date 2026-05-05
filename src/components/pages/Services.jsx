import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, PageHero, Modal, GradText } from '../ui/UIComponents';
import { SERVICES, SERVICE_CATEGORIES, CONTACT_INFO } from '../../data/data';
import { useTheme } from '../../context/ThemeContext';

const WA = CONTACT_INFO.whatsapp;

function FilterBar({ selected, onSelect, theme }) {
  const cats = [{ id: 'all', label: 'All Services', icon: '◈', color: theme.primary }, ...SERVICE_CATEGORIES];
  return (
    <section className="sticky top-[52px] z-[100]"
      style={{ background: theme.bg2, borderBottom: `1px solid ${theme.borderSubtle}`, padding: '14px clamp(16px,5vw,48px)' }}>
      <div className="flex items-center gap-2.5 overflow-x-auto pb-0.5" style={{ maxWidth: 1160, margin: '0 auto', scrollbarWidth: 'none' }}>
        {cats.map((cat, i) => {
          const active = selected === cat.id;
          return (
            <motion.button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`filter-btn flex-shrink-0 ${active ? 'active' : ''}`}
              style={active ? {
                background: cat.gradient || `linear-gradient(135deg,${cat.color},${cat.color}bb)`,
                borderColor: 'transparent',
                color: '#fff',
                boxShadow: `0 6px 22px ${cat.color}55`,
              } : {}}
            >
              <span style={{ fontSize: 14 }}>{cat.icon}</span>
              <span>{cat.label}</span>
              {active && (
                <motion.span
                  layoutId="filter-active-dot"
                  style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff', opacity: 0.7, flexShrink: 0 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

function ServiceCard({ s, i, onOpen }) {
  const { theme } = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={i * 0.05}>
      <motion.div
        whileHover={{ y: -10, scale: 1.015 }}
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        onClick={() => onOpen(s.id)}
        className="relative rounded-[22px] overflow-hidden cursor-pointer h-full"
        style={{
          padding: 'clamp(20px,3vw,30px)',
          background: hov
            ? `linear-gradient(145deg,${s.color}12,${theme.bgCard})`
            : theme.bgCard,
          border: `1px solid ${hov ? s.color + '55' : theme.borderSubtle}`,
          boxShadow: hov ? `0 20px 60px ${s.glow}, 0 0 0 1px ${s.color}22` : 'none',
          transition: 'all 0.35s cubic-bezier(.22,1,.36,1)',
          display: 'flex', flexDirection: 'column',
        }}
      >
        {/* Animated top accent */}
        <motion.div
          animate={{ scaleX: hov ? 1 : 0, opacity: hov ? 1 : 0.3 }}
          initial={{ scaleX: 0 }}
          transition={{ duration: 0.3 }}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: s.gradient, transformOrigin: 'left', borderRadius: '22px 22px 0 0' }}
        />
        {/* Ghost number */}
        <div className="absolute top-3 right-4 font-heading text-[52px] opacity-[.04] leading-none select-none pointer-events-none" style={{ color: s.color }}>
          {String(i + 1).padStart(2, '0')}
        </div>
        {/* Icon */}
        <motion.div
          animate={hov ? { scale: 1.15, rotate: -6 } : { scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="w-[52px] h-[52px] rounded-[15px] flex items-center justify-center text-[24px] mb-5 flex-shrink-0"
          style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.color, boxShadow: hov ? `0 8px 24px ${s.color}44` : 'none' }}
        >
          {s.icon}
        </motion.div>
        <div className="font-semibold mb-2.5 leading-snug" style={{ fontSize: 'clamp(15px,2vw,18px)', color: theme.textPrimary, fontFamily: "'Space Grotesk',sans-serif" }}>{s.title}</div>
        <p className="leading-[1.75] mb-4 flex-1" style={{ fontSize: 'clamp(12px,1.5vw,13.5px)', color: theme.textMuted }}>{s.desc}</p>
        <div className="flex gap-1.5 flex-wrap mb-5">
          {s.tags.slice(0, 3).map(t => (
            <motion.span key={t} whileHover={{ scale: 1.08 }} style={{ padding: '3px 10px', borderRadius: 6, fontSize: 11, background: s.bg, border: `1px solid ${s.border}`, color: s.color, fontFamily: "'JetBrains Mono',monospace", cursor: 'default' }}>{t}</motion.span>
          ))}
        </div>
        <motion.div animate={{ x: hov ? 4 : 0 }} className="inline-flex items-center gap-2 font-semibold text-xs tracking-wider" style={{ color: s.color, fontFamily: "'Space Grotesk',sans-serif" }}>
          View Details →
        </motion.div>
      </motion.div>
    </Reveal>
  );
}

function ServiceModal({ s, onClose }) {
  const { theme } = useTheme();
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="flex items-center gap-3.5 px-6 py-5 flex-shrink-0" style={{ borderBottom: `1px solid ${theme.borderSubtle}` }}>
        <motion.div whileHover={{ rotate: -8, scale: 1.1 }} className="w-10 h-10 rounded-[11px] flex items-center justify-center text-[20px]" style={{ background: s.bg, border: `1px solid ${s.border}` }}>{s.icon}</motion.div>
        <div>
          <div className="font-semibold text-base" style={{ color: theme.textPrimary, fontFamily: "'Space Grotesk',sans-serif" }}>{s.title}</div>
          <div className="text-xs" style={{ color: theme.textMuted, fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{s.badge} · ScrapixAI</div>
        </div>
        <button onClick={onClose} className="ml-auto w-[32px] h-[32px] rounded-lg flex items-center justify-center text-base cursor-pointer transition-all hover:scale-110"
          style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', color: theme.textFaint }}>✕</button>
      </div>
      <div className="p-6 overflow-y-auto flex-1">
        <div className="mb-6 p-4 rounded-[14px]" style={{ background: `${s.color}0a`, border: `1px solid ${s.color}22` }}>
          <p className="leading-[1.8] text-sm" style={{ color: theme.textSecondary }}>{s.longDesc}</p>
        </div>
        {[
          { label: 'USE CASES', content: (
            <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))' }}>
              {s.useCases.map((u, i) => (
                <motion.div key={i} whileHover={{ scale: 1.02 }} className="p-3 rounded-[12px]" style={{ background: theme.bgCard, border: `1px solid ${theme.borderSubtle}` }}>
                  <div className="font-heading text-xl opacity-25 mb-1" style={{ color: s.color }}>{String(i + 1).padStart(2, '0')}</div>
                  <div className="text-xs leading-relaxed" style={{ color: theme.textMuted }}>{u}</div>
                </motion.div>
              ))}
            </div>
          )},
          { label: 'TOOLS & TECH STACK', content: (
            <div className="flex flex-wrap gap-2">{s.tools.map(t => <motion.span key={t} whileHover={{ scale: 1.07, y: -2 }} className="tech-tag">{t}</motion.span>)}</div>
          )},
          { label: 'EXPECTED RESULTS', content: (
            <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(110px,1fr))' }}>
              {s.results.map((r, i) => (
                <motion.div key={i} whileHover={{ scale: 1.04 }} className="p-3.5 rounded-[12px] text-center" style={{ background: theme.bgCard, border: `1px solid ${theme.borderSubtle}` }}>
                  <div className="font-heading text-2xl leading-none mb-1" style={{ color: s.color, textShadow: `0 0 20px ${s.color}66` }}>{r.v}</div>
                  <div className="text-[11px]" style={{ color: theme.textMuted }}>{r.l}</div>
                </motion.div>
              ))}
            </div>
          )},
        ].map(({ label, content }) => (
          <div key={label} className="mb-7">
            <div className="flex items-center gap-2 font-semibold tracking-widest text-[11px] mb-3" style={{ color: s.color, fontFamily: "'Space Grotesk',sans-serif" }}>
              {label}<span className="flex-1 h-px" style={{ background: theme.borderSubtle }} />
            </div>
            {content}
          </div>
        ))}
      </div>
      <div className="flex gap-3 flex-shrink-0 flex-wrap px-6 py-4" style={{ borderTop: `1px solid ${theme.borderSubtle}` }}>
        <motion.a href={WA} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: .97 }}
          className="flex-1 min-w-[140px] p-3 rounded-[12px] text-center no-underline font-semibold text-sm"
          style={{ background: `linear-gradient(135deg,${s.color},${s.color}cc)`, color: '#fff', fontFamily: "'Space Grotesk',sans-serif" }}>
          💬 WhatsApp Us Now →
        </motion.a>
        <button onClick={onClose} className="flex-1 min-w-[110px] p-3 rounded-[12px] font-semibold text-sm cursor-pointer transition-all hover:border-primary" style={{ border: `1px solid ${theme.borderSubtle}`, background: 'transparent', color: theme.textFaint }}>Close</button>
      </div>
    </Modal>
  );
}

export default function Services() {
  const { theme } = useTheme();
  const [active, setActive] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const displayed = selectedCategory === 'all' ? SERVICES : SERVICES.filter(s => s.category === selectedCategory);

  return (
    <>
      <PageHero
        eyebrow="CAPABILITIES · 16 SERVICES · 4 CATEGORIES"
        title="EVERYTHING YOUR BUSINESS NEEDS TO"
        highlight="AUTOMATE & SCALE"
        subtitle='"Automation is no longer optional. It is a competitive advantage." Browse all our services across AI, automation, development and creative.'
      />
      <FilterBar selected={selectedCategory} onSelect={setSelectedCategory} theme={theme} />
      <section className="relative" style={{ background: theme.bg, padding: 'clamp(48px,6vw,72px) clamp(16px,5vw,40px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div key={selectedCategory} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .25 }}
              className="grid gap-[clamp(14px,2vw,24px)]" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(290px,100%),1fr))' }}>
              {displayed.map((s, i) => <ServiceCard key={s.id} s={s} i={i} onOpen={setActive} />)}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      <section className="relative text-center" style={{ background: theme.bg2, padding: 'clamp(60px,8vw,90px) clamp(16px,5vw,40px)' }}>
        <div className="line-top" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 0%,${theme.primary}10,transparent 60%)` }} />
        <div className="mx-auto relative z-[1]" style={{ maxWidth: 640 }}>
          <Reveal>
            <h2 className="section-h2 mb-4">Not Sure Which Service <span style={{ color: theme.primary }}>You Need?</span></h2>
            <p className="leading-[1.8] mb-8" style={{ fontSize: 'clamp(13px,2vw,15px)', color: theme.textMuted }}>
              Book a free discovery call. We will audit your operations and recommend the highest-ROI automation opportunities.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <motion.a href={WA} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: .97 }}
                className="btn-primary">💬 WhatsApp Us Now →</motion.a>
            </div>
          </Reveal>
        </div>
      </section>
      <AnimatePresence>
        {active !== null && <ServiceModal key="modal" s={SERVICES[active]} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}

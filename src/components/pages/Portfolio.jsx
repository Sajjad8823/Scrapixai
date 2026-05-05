import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, PageHero, Modal } from '../ui/UIComponents';
import { PROJECTS, CONTACT_INFO } from '../../data/data';
import { useTheme } from '../../context/ThemeContext';

const WA = CONTACT_INFO.whatsapp;
const FILTERS = ['All', 'AI', 'Automation', 'Scraping', 'Web', 'Android'];

function FilterBar({ active, setActive, theme }) {
  return (
    <div className="flex items-center gap-2.5 flex-wrap justify-center mb-[clamp(32px,5vw,52px)]">
      {FILTERS.map((f, i) => {
        const isActive = active === f;
        return (
          <motion.button key={f} onClick={() => setActive(f)}
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -3, scale: 1.05 }} whileTap={{ scale: .95 }}
            className={`filter-btn ${isActive ? 'active' : ''}`}
          >
            <span>{f}</span>
            {isActive && (
              <motion.span layoutId="port-active"
                style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff', opacity: .75 }} />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

function ProjectModal({ p, onClose }) {
  const { theme } = useTheme();
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className="flex items-center justify-between px-6 py-4 flex-shrink-0" style={{ borderBottom: `1px solid ${theme.borderSubtle}` }}>
        <motion.span whileHover={{ scale: 1.05 }} className="px-3 py-1 rounded-lg text-xs font-semibold" style={{ background: p.bg, border: `1px solid ${p.border}`, color: p.color, fontFamily: "'JetBrains Mono',monospace" }}>{p.tag}</motion.span>
        <button onClick={onClose} className="w-[30px] h-[30px] rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform" style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.1)', color: theme.textFaint, fontSize: 14 }}>✕</button>
      </div>
      <div className="p-6 overflow-y-auto flex-1">
        <h3 className="mb-6 leading-snug" style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(16px,3vw,21px)', color: theme.textPrimary }}>{p.title}</h3>
        {[{ label: 'THE PROBLEM', content: <p className="text-sm leading-[1.8]" style={{ color: theme.textMuted }}>{p.problem}</p> },
          { label: 'OUR SOLUTION', content: <p className="text-sm leading-[1.8]" style={{ color: theme.textMuted }}>{p.solution}</p> },
          { label: 'TECH STACK', content: <div className="flex flex-wrap gap-2">{p.tech.map(t => <motion.span key={t} whileHover={{ scale: 1.08, y: -2 }} className="tech-tag">{t}</motion.span>)}</div> },
          { label: 'RESULTS', content: (
            <div className="grid gap-2.5" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(100px,1fr))' }}>
              {p.results.map((r, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-3 rounded-[12px] text-center" style={{ background: theme.bgCard, border: `1px solid ${p.color}22` }}>
                  <div className="font-heading text-2xl leading-none mb-1" style={{ color: p.color, textShadow: `0 0 16px ${p.color}55` }}>{r.v}</div>
                  <div className="text-[11px]" style={{ color: theme.textMuted }}>{r.l}</div>
                </motion.div>
              ))}
            </div>
          )}
        ].map(({ label, content }) => (
          <div key={label} className="mb-6">
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-widest mb-3" style={{ color: p.color, fontFamily: "'Space Grotesk',sans-serif" }}>
              {label}<span className="flex-1 h-px" style={{ background: theme.borderSubtle }} />
            </div>
            {content}
          </div>
        ))}
      </div>
      <div className="flex gap-3 px-6 py-4 flex-shrink-0 flex-wrap" style={{ borderTop: `1px solid ${theme.borderSubtle}` }}>
        <motion.a href={WA} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: .97 }}
          className="flex-1 min-w-[140px] p-3 rounded-[12px] text-center no-underline font-semibold text-sm"
          style={{ background: theme.grad, color: '#fff', fontFamily: "'Space Grotesk',sans-serif" }}>
          💬 Build Something Like This →
        </motion.a>
        <button onClick={onClose} className="flex-1 min-w-[100px] p-3 rounded-[12px] font-semibold text-sm cursor-pointer" style={{ border: `1px solid ${theme.borderSubtle}`, background: 'transparent', color: theme.textFaint }}>Close</button>
      </div>
    </Modal>
  );
}

function ProjectCard({ p, i, onOpen }) {
  const { theme } = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <motion.div layout initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .88 }} transition={{ duration: .3, delay: i * .04 }}>
      <motion.div onClick={() => onOpen(p.id)}
        whileHover={{ y: -8 }} onHoverStart={() => setHov(true)} onHoverEnd={() => setHov(false)}
        className="relative rounded-[22px] overflow-hidden cursor-pointer flex flex-col h-full"
        style={{ padding: 'clamp(18px,3vw,26px)', background: hov ? `linear-gradient(145deg,${p.color}10,${theme.bgCard})` : theme.bgCard, border: `1px solid ${hov ? p.color + '44' : theme.borderSubtle}`, boxShadow: hov ? `0 20px 56px ${p.glow}, 0 0 0 1px ${p.color}18` : 'none', transition: 'all .32s cubic-bezier(.22,1,.36,1)' }}>
        {/* Top gradient stripe */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: p.gradient || `linear-gradient(90deg,${p.color},transparent)`, opacity: hov ? 1 : 0.55, transition: 'opacity .3s' }} />
        {/* Header */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <motion.span whileHover={{ scale: 1.06 }} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold" style={{ background: p.bg, border: `1px solid ${p.border}`, color: p.color, fontFamily: "'JetBrains Mono',monospace" }}>{p.tag}</motion.span>
          <motion.span animate={{ opacity: hov ? 1 : 0, x: hov ? 0 : 4 }} className="text-xs font-semibold" style={{ color: p.color, fontFamily: "'Space Grotesk',sans-serif" }}>View details →</motion.span>
        </div>
        <div className="font-semibold leading-snug mb-2.5 flex-shrink-0" style={{ fontSize: 'clamp(13px,2vw,15.5px)', color: theme.textPrimary, fontFamily: "'Space Grotesk',sans-serif" }}>{p.title}</div>
        <p className="text-xs leading-[1.75] mb-4 flex-1" style={{ color: theme.textMuted }}>{p.problem}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {p.tech.slice(0, 3).map(t => <span key={t} className="tech-tag">{t}</span>)}
        </div>
        {/* Results mini grid */}
        <div className="grid grid-cols-2 gap-2">
          {p.results.slice(0, 2).map((r, i) => (
            <div key={i} className="p-2.5 rounded-[10px] text-center" style={{ background: 'rgba(255,255,255,.03)', border: `1px solid ${theme.borderSubtle}` }}>
              <div className="font-heading text-xl leading-none" style={{ color: p.color }}>{r.v}</div>
              <div className="text-[10px] mt-1" style={{ color: theme.textFaint }}>{r.l}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const { theme } = useTheme();
  const [filter, setFilter] = useState('All');
  const [active, setActive] = useState(null);
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <>
      <PageHero eyebrow={`PORTFOLIO · ${PROJECTS.length} PROJECTS`} title="REAL SYSTEMS." highlight="REAL RESULTS." subtitle="Every project here is a production system that replaced manual work and delivered measurable ROI." accentColor={theme.secondary} />
      <section className="relative" style={{ background: theme.bg, padding: 'clamp(48px,6vw,72px) clamp(16px,5vw,40px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <FilterBar active={filter} setActive={setFilter} theme={theme} />
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid gap-[clamp(14px,2vw,22px)]" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))' }}>
              {filtered.map((p, i) => <ProjectCard key={p.id} p={p} i={i} onOpen={setActive} />)}
            </motion.div>
          </AnimatePresence>
          <Reveal delay={.2}>
            <div className="text-center mt-[clamp(40px,6vw,60px)]">
              <p className="mb-6" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 15, color: theme.textMuted }}>Want results like these for your business?</p>
              <motion.a href={WA} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: .97 }} className="btn-primary">
                💬 WhatsApp Us Let's Build →
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>
      <AnimatePresence>
        {active !== null && <ProjectModal key="modal" p={PROJECTS[active]} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}

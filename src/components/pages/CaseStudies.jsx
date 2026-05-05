import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal, PageHero, GradText } from '../ui/UIComponents';
import { CASE_STUDIES, CONTACT_INFO } from '../../data/data';
import { useTheme } from '../../context/ThemeContext';

export default function CaseStudies() {
  const { theme } = useTheme();
  return (
    <>
      <PageHero eyebrow="CASE STUDIES · REAL RESULTS" title="PROOF IN" highlight="NUMBERS"
        subtitle="Detailed breakdowns of how we transformed operations for real enterprise clients." accentColor={theme.accent} />
      <section className="relative" style={{ background: theme.bg, padding: 'clamp(48px,6vw,60px) clamp(16px,5vw,40px) clamp(60px,8vw,100px)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          {CASE_STUDIES.map((cs, i) => (
            <Reveal key={cs.id} delay={i * .1}>
              <div className="relative overflow-hidden rounded-[22px] mb-[clamp(36px,5vw,56px)]"
                style={{ padding: 'clamp(24px,4vw,40px) clamp(20px,4vw,36px)', background: theme.bgCard, border: `1px solid ${theme.borderSubtle}` }}>
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg,transparent,${cs.color},transparent)` }} />
                <div className="absolute pointer-events-none" style={{ top: -60, right: -30, width: 200, height: 200, background: `radial-gradient(circle,${cs.color}10,transparent 65%)` }} />
                <div className="flex items-center gap-2.5 mb-4 flex-wrap">
                  <span className="font-display font-semibold" style={{ padding: '4px 12px', borderRadius: 6, background: `${cs.color}18`, border: `1px solid ${cs.color}33`, color: cs.color, fontSize: 11 }}>{cs.tag}</span>
                  <span className="font-body" style={{ padding: '4px 12px', borderRadius: 6, background: theme.bgCard, border: `1px solid ${theme.borderSubtle}`, color: theme.textFaint, fontSize: 11 }}>{cs.industry}</span>
                  <span className="ml-auto font-display text-[12px]" style={{ color: theme.textFaint }}>{cs.client}</span>
                </div>
                <h2 className="font-display font-extrabold leading-[1.3] mb-7" style={{ fontSize: 'clamp(16px,2.5vw,22px)', color: theme.textPrimary }}>{cs.headline}</h2>
                {[
                  { label: '01 THE PROBLEM', content: cs.problem },
                  { label: '02 OUR APPROACH', content: cs.approach },
                  { label: '03 EXECUTION', content: cs.execution },
                ].map(({ label, content }) => (
                  <div key={label} className="mb-5">
                    <div className="font-display font-bold tracking-[.1em] text-[11px] mb-2" style={{ color: cs.color }}>{label}</div>
                    <p className="font-body leading-[1.8]" style={{ fontSize: 'clamp(13px,2vw,14px)', color: theme.textMuted }}>{content}</p>
                  </div>
                ))}
                <div className="mb-6">
                  <div className="font-display font-bold tracking-[.1em] text-[11px] mb-2.5" style={{ color: cs.color }}>04 TOOLS USED</div>
                  <div className="flex flex-wrap gap-2">{cs.tools.map(t => <span key={t} className="tech-tag">{t}</span>)}</div>
                </div>
                <div className="mb-6">
                  <div className="font-display font-bold tracking-[.1em] text-[11px] mb-3" style={{ color: cs.color }}>05 RESULTS</div>
                  <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))' }}>
                    {cs.results.map((r, i) => (
                      <div key={i} className="rounded-xl text-center" style={{ padding: 'clamp(12px,2vw,16px) 14px', background: theme.bgCard, border: `1px solid ${cs.color}22` }}>
                        <div className="font-heading leading-none mb-1" style={{ fontSize: 'clamp(22px,3vw,28px)', color: cs.color }}>{r.v}</div>
                        <div className="font-body text-[11px] leading-[1.4]" style={{ color: theme.textMuted }}>{r.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-[14px] p-[clamp(14px,2vw,20px)_clamp(16px,3vw,24px)]" style={{ background: `${cs.color}08`, border: `1px solid ${cs.color}22` }}>
                  <p className="font-body leading-[1.7] italic mb-2.5" style={{ fontSize: 'clamp(13px,2vw,15px)', color: theme.textSecondary }}>"{cs.quote}"</p>
                  <div className="font-display font-semibold text-[13px]" style={{ color: theme.textFaint }}>— {cs.author}</div>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal className="text-center">
            <h3 className="font-heading mb-3" style={{ fontSize: 'clamp(24px,4vw,40px)', color: theme.textPrimary }}>YOUR BUSINESS COULD BE NEXT</h3>
            <p className="font-body text-[15px] mb-7 mx-auto" style={{ color: theme.textMuted, maxWidth: 400 }}>Book a free discovery call. We will find your automation opportunity.</p>
            <motion.a href="https://wa.me/923246664914" target="_blank" rel="noopener noreferrer" whileHover={{y:-2,scale:1.02}} whileTap={{scale:.97}} className="btn-primary">💬 Book Free Consultation →</motion.a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
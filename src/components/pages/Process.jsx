import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Reveal, PageHero, GradText } from '../ui/UIComponents';
import { PROCESS_STEPS } from '../../data/data';
import { useTheme } from '../../context/ThemeContext';

function StepCard({ step, isLast }) {
  const { theme } = useTheme();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <div ref={ref} className="relative grid gap-0" style={{ gridTemplateColumns: 'clamp(60px,8vw,80px) 1fr' }}>
      <div className="flex flex-col items-center pt-1">
        <motion.div initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: .5, delay: .1, ease: [.22, 1, .36, 1] }}
          className="w-[52px] h-[52px] rounded-full flex-shrink-0 flex items-center justify-center font-heading text-[18px] text-white z-[1] relative"
          style={{ background: `linear-gradient(135deg,${step.color},${step.color}99)`, boxShadow: `0 0 20px ${step.color}55` }}>
          {step.num}
        </motion.div>
        {!isLast && (
          <div className="w-0.5 flex-1 min-h-[60px] relative overflow-hidden my-2" style={{ background: 'rgba(255,255,255,.06)' }}>
            <motion.div initial={{ height: '0%' }} animate={inView ? { height: '100%' } : {}} transition={{ duration: .8, delay: .4 }}
              className="w-full rounded-sm" style={{ background: `linear-gradient(180deg,${step.color},${step.color}22)` }} />
          </div>
        )}
      </div>
      <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: .55, delay: .15, ease: [.22, 1, .36, 1] }}
        style={{ paddingLeft: 'clamp(16px,3vw,24px)', paddingBottom: isLast ? 0 : 'clamp(36px,5vw,56px)' }}>
        <span className="inline-block font-display font-semibold text-[11px] mb-2.5 px-2.5 py-0.5 rounded"
          style={{ background: `${step.color}18`, border: `1px solid ${step.color}33`, color: step.color }}>{step.duration}</span>
        <h3 className="font-heading leading-[.98] tracking-[.01em] mb-3" style={{ fontSize: 'clamp(20px,3vw,32px)', color: theme.textPrimary }}>{step.title}</h3>
        <p className="font-body leading-[1.8] mb-5 max-w-[560px]" style={{ fontSize: 'clamp(13px,2vw,14px)', color: theme.textMuted }}>{step.desc}</p>
        <div className="rounded-[14px] p-[clamp(14px,2vw,18px)_clamp(16px,3vw,20px)]" style={{ background: theme.bgCard, border: `1px solid ${step.color}22` }}>
          <div className="font-display font-bold tracking-[.1em] text-[11px] mb-3" style={{ color: step.color }}>DELIVERABLES</div>
          <div className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(160px,100%),1fr))' }}>
            {step.deliverables.map((d, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: step.color }} />
                <span className="font-body text-[13px]" style={{ color: theme.textFaint }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Process() {
  const { theme } = useTheme();
  return (
    <>
      <PageHero eyebrow="HOW WE WORK · 5 STEPS" title="OUR PROVEN" highlight="WORKFLOW"
        subtitle="A battle-tested 5 steps process refined across 100+ projects. Fast, transparent and built for measurable outcomes." />
      <section className="relative" style={{ background: theme.bg2, padding: 'clamp(60px,8vw,80px) clamp(16px,5vw,40px) clamp(60px,8vw,100px)' }}>
        <div className="line-top" />
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <Reveal className="mb-[clamp(36px,5vw,56px)]">
            <div className="font-display font-semibold tracking-[.12em] mb-3.5" style={{ fontSize: 11, color: theme.primary }}>◆ STEP BY STEP</div>
            <h2 className="section-h2">THE <GradText gradient={theme.grad}>PROCESS</GradText></h2>
          </Reveal>
          {PROCESS_STEPS.map((step, i) => (
            <StepCard key={step.num} step={step} isLast={i === PROCESS_STEPS.length - 1} />
          ))}
        </div>
      </section>
      <section className="relative text-center" style={{ background: theme.bg, padding: 'clamp(60px,8vw,80px) clamp(16px,5vw,40px)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 0%,${theme.primary}10,transparent 55%)` }} />
        <div className="mx-auto relative z-[1]" style={{ maxWidth: 600 }}>
          <Reveal>
            <h2 className="section-h2 mb-3.5">READY TO <GradText gradient={theme.grad}>GET STARTED?</GradText></h2>
            <p className="font-body leading-[1.8] mb-7" style={{ fontSize: 'clamp(13px,2vw,15px)', color: theme.textMuted }}>Step 1 starts with a free 45-minute discovery call. No commitment, no pressure.</p>
            <motion.a href="https://wa.me/923246664914" target="_blank" rel="noopener noreferrer" whileHover={{y:-2,scale:1.02}} whileTap={{scale:.97}} className="btn-primary" style={{ fontSize: 15, padding: '15px 36px' }}>💬 Start Step 01 →</motion.a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

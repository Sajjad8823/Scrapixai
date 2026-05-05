import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal, PageHero, Counter, GradText } from '../ui/UIComponents';
import { WHY_US } from '../../data/data';
import { useTheme } from '../../context/ThemeContext';

export default function About() {
  const { theme } = useTheme();

  const expertise = [
    { label: 'Large Language Models & RAG', pct: 95, color: theme.primary },
    { label: 'Computer Vision',             pct: 90, color: theme.secondary },
    { label: 'Data Engineering & Scraping', pct: 94, color: theme.accent },
    { label: 'Workflow Automation',         pct: 97, color: '#10b981' },
    { label: 'Full Stack Development',      pct: 88, color: '#f59e0b' },
    { label: 'ML / Deep Learning',          pct: 92, color: '#ec4899' },
  ];

  const milestones = [
    { year: '2023', event: 'ScrapixAI founded with a single mission: replace manual work with AI.' },
    { year: '2023', event: 'First 10 clients onboarded. First automation pipelines shipped.' },
    { year: '2024', event: 'Crossed 60 enterprise clients across 12 countries.' },
    { year: '2024', event: 'Launched Advanced AI division — Computer Vision and Predictive Models.' },
    { year: '2025', event: '100+ projects shipped.' },
  ];

  return (
    <>
      <PageHero
        eyebrow="EST. 2023 · SCRAPIX AI"
        title="WE DON'T BUILD SOFTWARE."
        highlight="WE BUILD BUSINESS SYSTEMS."
        subtitle="A boutique AI engineering firm obsessed with one thing: measurable business outcomes. We eliminate manual work, automate decisions and build the systems that let ambitious businesses scale without hiring armies."
      />

      {/* Story */}
      <section className="relative" style={{ background: theme.bg2, padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,40px)' }}>
        <div className="line-top" />
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="grid items-center gap-[clamp(36px,6vw,64px)]" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))' }}>
            <Reveal>
              <div className="font-display font-semibold tracking-[.12em] mb-3.5" style={{ fontSize: 11, color: theme.primary }}>◆ OUR STORY</div>
              <h2 className="section-h2 mb-5">BORN FROM <GradText gradient={theme.grad}>FRUSTRATION</GradText></h2>
              <p className="font-body leading-[1.85] mb-4" style={{ fontSize: 'clamp(13px,2vw,15px)', color: theme.textMuted }}>
                ScrapixAI was born when our founders grew frustrated watching brilliant companies lose competitive ground to repetitive, manual processes that should have been automated years ago.
              </p>
              <p className="font-body leading-[1.85] mb-4" style={{ fontSize: 'clamp(13px,2vw,15px)', color: theme.textMuted }}>
                We started with one belief: <em style={{ color: '#a5b4fc' }}>every hour your team spends on manual work is an hour stolen from growth.</em>
              </p>
              <p className="font-body leading-[1.85] mb-4" style={{ fontSize: 'clamp(13px,2vw,15px)', color: theme.textMuted }}>
                Today, we've shipped 100+ production AI systems and built a reputation as the firm that turns ambitious AI ideas into running, measurable systems — fast.
              </p>
              <div className="p-4 rounded-[14px] mt-4" style={{ background: `${theme.primary}0d`, border: `1px solid ${theme.primary}22` }}>
                <p className="font-body italic text-[14px] leading-[1.7]" style={{ color: theme.textSecondary }}>
                  "Your competitors are already automating. The question isn't whether to automate - it's how fast you can start."
                </p>
              </div>
            </Reveal>
            <Reveal delay={.2}>
              <div className="grid grid-cols-2 gap-[clamp(10px,2vw,16px)]">
                {[
                  { target: 100, suffix: '+',    label: 'Systems Built',      color: theme.primary   },
                  // { target: 40,  suffix: 'M+',   prefix: '$', label: 'Client Savings', color: theme.secondary },
                  { target: 60,  suffix: '+',    label: 'Enterprise Clients', color: theme.accent    },
                  { target: 20,  suffix: '+',    label: 'Industries Served',  color: '#10b981'       },
                ].map(m => (
                  <div key={m.label} className="relative overflow-hidden text-center rounded-2xl p-[clamp(16px,2vw,24px)_clamp(12px,2vw,20px)]" style={{ background: theme.bgCard, border: `1px solid ${theme.borderSubtle}` }}>
                    <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg,transparent,${m.color},transparent)` }} />
                    <Counter target={m.target} suffix={m.suffix} prefix={m.prefix || ''} color={m.color} size={36} />
                    <div className="font-body text-xs mt-1.5" style={{ color: theme.textMuted }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative" style={{ background: theme.bg, padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,40px)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${theme.accent}44,transparent)` }} />
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="grid gap-[clamp(20px,3vw,28px)]" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))' }}>
            {[
              {
                icon: '⬡',
                color: theme.primary,
                label: 'OUR MISSION',
                title: 'Eliminate Manual Work',
                desc: 'To build AI and automation systems that free businesses from repetitive, low-value tasks — so their teams can focus entirely on growth, strategy, and the work only humans can do.',
              },
              {
                icon: '◈',
                color: theme.secondary,
                label: 'OUR VISION',
                title: 'A World Where No Business Is Left Manual',
                desc: 'We envision a future where every business — regardless of size — has access to the AI systems that Fortune 500 companies use. We\'re building that future, one client at a time.',
              },
              {
                icon: '◇',
                color: theme.accent,
                label: 'OUR APPROACH',
                title: 'Business Outcomes Over Technology',
                desc: 'We measure every engagement in business outcomes: hours saved, costs cut, revenue generated. Technology is the tool — your business result is the goal.',
              },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * .1}>
                <div className="relative overflow-hidden rounded-[20px] p-[clamp(22px,3vw,32px)] h-full" style={{ background: theme.bgCard, border: `1px solid ${theme.borderSubtle}` }}>
                  <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg,transparent,${item.color},transparent)` }} />
                  <div className="font-display font-semibold tracking-[.12em] mb-3 text-[11px]" style={{ color: item.color }}>◆ {item.label}</div>
                  <div className="text-[28px] mb-3" style={{ color: item.color }}>{item.icon}</div>
                  <div className="font-display font-extrabold mb-3" style={{ fontSize: 'clamp(15px,2vw,18px)', color: theme.textPrimary }}>{item.title}</div>
                  <p className="font-body leading-[1.8] text-[14px]" style={{ color: theme.textMuted }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="relative" style={{ background: theme.bg2, padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,40px)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${theme.secondary}44,transparent)` }} />
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="grid items-start gap-[clamp(36px,6vw,64px)]" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))' }}>
            <Reveal>
              <div className="font-display font-semibold tracking-[.12em] mb-3.5" style={{ fontSize: 11, color: theme.accent }}>◆ TECHNICAL DEPTH</div>
              <h2 className="section-h2 mb-4">WHERE WE <GradText gradient={`linear-gradient(135deg,${theme.accent},${theme.primary})`}>EXCEL</GradText></h2>
              <p className="font-body leading-[1.8]" style={{ fontSize: 'clamp(13px,2vw,15px)', color: theme.textMuted }}>
                Deep expertise across the full AI and automation stack — from model training to production deployment. Every skill benchmarked against real-world delivery.
              </p>
            </Reveal>
            <div>
              {expertise.map((e, i) => (
                <Reveal key={e.label} delay={i * .1}>
                  <div className="mb-[18px]">
                    <div className="flex justify-between mb-2">
                      <span className="font-body text-[13px]" style={{ color: theme.textSecondary }}>{e.label}</span>
                      <span className="font-display font-bold text-[13px]" style={{ color: e.color }}>{e.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded overflow-hidden" style={{ background: 'rgba(255,255,255,.06)' }}>
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${e.pct}%` }} viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * .1, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded" style={{ background: `linear-gradient(90deg,${e.color},${e.color}88)`, boxShadow: `0 0 10px ${e.color}55` }} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative" style={{ background: theme.bg, padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,40px)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${theme.primary}44,transparent)` }} />
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Reveal className="text-center mb-[clamp(36px,5vw,52px)]">
            <div className="font-display font-semibold tracking-[.12em] mb-3.5" style={{ fontSize: 11, color: theme.primary }}>◆ WHY CLIENTS CHOOSE US</div>
            <h2 className="section-h2">HOW WE <GradText gradient={theme.grad}>OPERATE</GradText></h2>
          </Reveal>
          <div className="grid gap-[clamp(14px,2vw,20px)]" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(250px,100%),1fr))' }}>
            {WHY_US.map((v, i) => (
              <Reveal key={v.title} delay={i * .08}>
                <motion.div whileHover={{ y: -5, boxShadow: `0 8px 30px ${v.color}22` }}
                  className="p-[clamp(20px,3vw,28px)] rounded-[18px] h-full transition-all duration-300"
                  style={{ background: theme.bgCard, border: `1px solid ${theme.borderSubtle}` }}>
                  <div className="text-[26px] mb-3.5" style={{ color: v.color }}>{v.icon}</div>
                  <div className="font-display font-bold mb-2.5" style={{ fontSize: 'clamp(13px,2vw,15px)', color: theme.textPrimary }}>{v.title}</div>
                  <p className="font-body text-[13px] leading-[1.75]" style={{ color: theme.textMuted }}>{v.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative" style={{ background: theme.bg2, padding: 'clamp(60px,8vw,100px) clamp(16px,5vw,40px)' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg,transparent,${theme.accent}44,transparent)` }} />
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Reveal className="text-center mb-[clamp(36px,5vw,52px)]">
            <div className="font-display font-semibold tracking-[.12em] mb-3.5" style={{ fontSize: 11, color: theme.secondary }}>◆ OUR JOURNEY</div>
            <h2 className="section-h2">TWO YEARS, <GradText gradient={theme.grad}>100+ SYSTEMS</GradText></h2>
          </Reveal>
          <div className="relative pl-8">
            <div className="absolute left-2 top-0 bottom-0 w-px" style={{ background: `linear-gradient(to bottom,${theme.primary},${theme.accent},transparent)` }} />
            {milestones.map((m, i) => (
              <Reveal key={i} delay={i * .1}>
                <div className="relative mb-8 last:mb-0">
                  <div className="absolute -left-[26px] w-4 h-4 rounded-full border-2 top-1" style={{ background: theme.bg2, borderColor: theme.primary, boxShadow: `0 0 12px ${theme.primary}66` }} />
                  <div className="font-display font-bold text-[11px] mb-1 tracking-[.08em]" style={{ color: theme.primary }}>{m.year}</div>
                  <p className="font-body text-[14px] leading-[1.7]" style={{ color: theme.textMuted }}>{m.event}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative text-center" style={{ background: theme.bg, padding: 'clamp(60px,8vw,80px) clamp(16px,5vw,40px)' }}>
  <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 0%,${theme.primary}10,transparent 55%)` }} />

  <div className="mx-auto relative z-[1]" style={{ maxWidth: 720 }}>
    <Reveal>

      <h2 className="section-h2 mb-3.5">
        WHY BUSINESSES <GradText gradient={theme.grad}>CHOOSE SCRAPIXAI</GradText>
      </h2>

      <p className="font-body leading-[1.8] mb-7" style={{ fontSize: 'clamp(13px,2vw,15px)', color: theme.textMuted }}>
        We don’t just deliver projects — we build automation systems that replace manual work, reduce costs, and scale operations intelligently.
      </p>

      <div className="grid gap-3 mb-8 text-left mx-auto" style={{ maxWidth: 520 }}>
        <div style={{ color: theme.textMuted }}>✔ Production-ready systems, not prototypes</div>
        <div style={{ color: theme.textMuted }}>✔ Built for scalability and long-term ROI</div>
        <div style={{ color: theme.textMuted }}>✔ Real automation that replaces manual processes</div>
        <div style={{ color: theme.textMuted }}>✔ Trusted by businesses across multiple industries</div>
      </div>

      <div className="mb-6 text-[13px]" style={{ color: theme.textMuted }}>
        Strategy-first approach • Zero-obligation consultation • Focus on measurable outcomes
      </div>

      <div className="flex gap-3.5 justify-center flex-wrap">
        <Link to="/case-studies" className="btn-ghost">
          Explore Our Work
        </Link>

        <motion.a 
          href="https://wa.me/923246664914" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ y: -2, scale: 1.02 }} 
          whileTap={{ scale: 0.97 }} 
          className="btn-primary" 
          style={{ fontSize: 15, padding: '15px 36px' }}
        >
          🚀 Get Automation Roadmap
        </motion.a>
      </div>

    </Reveal>
  </div>
</section>
    </>
  );
}

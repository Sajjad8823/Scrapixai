import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Reveal, PageHero, GradText } from '../ui/UIComponents';
import { BLOG_POSTS } from '../../data/data';
import { useTheme } from '../../context/ThemeContext';

function BlogCard({ post, i }) {
  const { theme } = useTheme();
  return (
    <Reveal delay={i * .08}>
      <Link to={`/blog/${post.slug}`} className="no-underline block h-full">
        <motion.div whileHover={{ y: -6, boxShadow: `0 12px 40px rgba(0,0,0,.3)` }}
          className="relative overflow-hidden rounded-[20px] h-full transition-all duration-300"
          style={{ padding: 'clamp(22px,3vw,32px)', background: theme.bgCard, border: `1px solid ${theme.borderSubtle}` }}>
          <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg,transparent,${post.categoryColor},transparent)` }} />
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="font-display font-semibold" style={{ padding: '3px 10px', borderRadius: 5, background: `${post.categoryColor}18`, border: `1px solid ${post.categoryColor}33`, color: post.categoryColor, fontSize: 11 }}>{post.category}</span>
            <span className="font-body text-xs" style={{ color: theme.textFaint }}>{post.readTime} · {post.date}</span>
          </div>
          <h2 className="font-display font-extrabold leading-[1.3] mb-3" style={{ fontSize: 'clamp(15px,2vw,19px)', color: theme.textPrimary }}>{post.title}</h2>
          <p className="font-body leading-[1.75] mb-4 text-[13.5px]" style={{ color: theme.textMuted }}>{post.excerpt}</p>
          <div className="p-3 rounded-[10px] mb-4" style={{ background: `${post.categoryColor}0a`, border: `1px solid ${post.categoryColor}22` }}>
            <p className="font-body italic text-[13px] leading-[1.6]" style={{ color: theme.textSecondary }}>"{post.quote}"</p>
          </div>
          <div className="font-display font-bold text-xs" style={{ color: post.categoryColor }}>Read article →</div>
        </motion.div>
      </Link>
    </Reveal>
  );
}

function BlogPost({ post }) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <PageHero eyebrow={`${post.category} · ${post.readTime} · ${post.date}`} title="" highlight={post.title} subtitle={post.excerpt} />
      <section className="relative" style={{ background: theme.bg, padding: 'clamp(48px,6vw,72px) clamp(16px,5vw,40px)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <Reveal>
            <div className="p-[clamp(18px,3vw,28px)] rounded-[18px] mb-[clamp(28px,4vw,40px)]" style={{ background: `${post.categoryColor}0a`, border: `1px solid ${post.categoryColor}33` }}>
              <div className="font-display font-semibold tracking-[.08em] mb-2 text-[11px]" style={{ color: post.categoryColor }}>KEY INSIGHT</div>
              <p className="font-body italic leading-[1.8] text-[15px]" style={{ color: theme.textSecondary }}>"{post.quote}"</p>
            </div>
          </Reveal>
          {post.sections.map((sec, i) => (
            <Reveal key={i} delay={i * .07}>
              <div className="mb-[clamp(28px,4vw,40px)]">
                <h2 className="font-display font-extrabold mb-4 leading-[1.3]" style={{ fontSize: 'clamp(17px,2.5vw,22px)', color: theme.textPrimary }}>{sec.heading}</h2>
                <p className="font-body leading-[1.9] text-[15px]" style={{ color: theme.textMuted }}>{sec.content}</p>
              </div>
            </Reveal>
          ))}
          <Reveal>
            <div className="relative overflow-hidden rounded-[20px] p-[clamp(24px,4vw,36px)] text-center mt-[clamp(36px,5vw,52px)]" style={{ background: theme.gradBg, border: `1px solid ${theme.borderColor}` }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 0%,${post.categoryColor}12,transparent 60%)` }} />
              <div className="relative z-[1]">
                <h3 className="font-heading mb-3" style={{ fontSize: 'clamp(20px,3vw,30px)', color: theme.textPrimary }}>READY TO AUTOMATE YOUR BUSINESS?</h3>
                <p className="font-body mb-6 text-[14px]" style={{ color: theme.textMuted }}>Book a free 45-minute audit. We'll identify your highest-ROI automation opportunities.</p>
                <a href="https://wa.me/923246664914" target="_blank" rel="noopener noreferrer" className="btn-primary">💬 Book Free Consultation →</a>
              </div>
            </div>
          </Reveal>
          <Reveal className="mt-8 text-center">
            <button onClick={() => navigate('/blog')} className="font-display font-bold text-sm cursor-pointer" style={{ background: 'none', border: 'none', color: theme.textMuted }}>← Back to Blog</button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default function Blog() {
  const { theme } = useTheme();
  const { slug } = useParams();
  const post = slug ? BLOG_POSTS.find(p => p.slug === slug) : null;

  if (post) return <BlogPost post={post} />;

  return (
    <>
      <PageHero
        eyebrow="BLOG · AI & AUTOMATION INSIGHTS"
        title="KNOWLEDGE THAT"
        highlight="COMPOUNDS"
        subtitle="Practical guides, strategy, and case studies for businesses ready to automate. Updated monthly."
      />
      <section className="relative" style={{ background: theme.bg, padding: 'clamp(48px,6vw,72px) clamp(16px,5vw,40px)' }}>
        <div className="line-top" />
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div className="grid gap-[clamp(14px,2vw,24px)]" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))' }}>
            {BLOG_POSTS.map((post, i) => <BlogCard key={post.id} post={post} i={i} />)}
          </div>
        </div>
      </section>
      <section className="relative text-center" style={{ background: theme.bg2, padding: 'clamp(56px,8vw,80px) clamp(16px,5vw,40px)' }}>
  <div className="line-top" />
  <div className="mx-auto" style={{ maxWidth: 620 }}>
    <Reveal>
      <h2 className="section-h2 mb-3.5">
        STOP CONSUMING. <GradText gradient={theme.grad}>START SCALING.</GradText>
      </h2>

      <p className="font-body mb-5 text-[15px]" style={{ color: theme.textMuted }}>
        You’ve seen what’s possible with AI and automation, now let’s map exactly how automation can save your time, cut costs and grow your business.
      </p>

      <div className="mb-6 text-[13px]" style={{ color: theme.textMuted }}>
        ✔ 45-min Strategy Call &nbsp;&nbsp; ✔ ROI Roadmap &nbsp;&nbsp; ✔ No Obligation
      </div>

      <a 
        href="https://wa.me/923246664914" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn-primary"
      >
        🚀 Get Your Free Automation Plan
      </a>

      <p className="mt-3 text-[12px]" style={{ color: theme.textMuted }}>
        We work with a limited number of businesses to ensure quality results.
      </p>
    </Reveal>
  </div>
</section>
    </>
  );
}

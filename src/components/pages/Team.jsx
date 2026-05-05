// ============================================================
//  TEAM PAGE — ScrapixAI
//
//  HOW TO UPDATE TEAM MEMBERS:
//  → Open src/data/data.jsx and find the TEAM array
//  → Each member has these fields:
//
//    id        → Unique number (0, 1, 2...)
//    role_type → "ceo" | "manager" | "director" | "team"
//                (controls which card style is used)
//    name      → Full name
//    role      → Job title shown on card
//    initials  → 2 letters shown when no photo (e.g. "SH")
//    highlight → Badge text under name
//    bio       → Short paragraph about the person
//    image     → Photo filename e.g. "ceo.jpg"
//                Put the file in: /public/images/team/
//                Leave as null to show initials instead
//    linkedin  → LinkedIn URL or null
//    twitter   → Twitter URL or null
//    email     → Email address or null
//    gradient  → Background gradient for initials avatar
//
//  HOW TO ADD A PHOTO:
//  1. Put your photo file in /public/images/team/ folder
//     e.g. /public/images/team/sajjad.jpg
//  2. In data.jsx set: image: "sajjad.jpg"
//  3. Recommended: square photo, min 300x300px, face centered
//
//  HOW TO ADD A NEW TEAM MEMBER:
//  Copy any existing member block in data.jsx TEAM array
//  Change role_type to "team" for regular members
// ============================================================

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TEAM } from '../../data/data';
import { Reveal, TeamAvatar, NeuralCanvas, GradText } from '../ui/UIComponents';
import { useTheme } from '../../context/ThemeContext';

// ── Social Media Button ──────────────────────────────────────
// Renders a small icon button for LinkedIn, Twitter, or Email
function SocialBtn({ href, label, color }) {
  if (!href) return null;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" title={label}
      className="w-9 h-9 rounded-lg flex items-center justify-center no-underline font-display font-bold text-[12px] transition-all duration-200"
      style={{ background: `${color}20`, border: `1px solid ${color}40`, color }}
      onMouseEnter={e => { e.currentTarget.style.background = `${color}35`; e.currentTarget.style.transform = 'translateY(-2px)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = `${color}20`; e.currentTarget.style.transform = 'translateY(0)'; }}>
      {label === 'LinkedIn' ? 'in' : label === 'Twitter' ? 'X' : '✉'}
    </a>
  );
}

// ── CEO / Founder Card ───────────────────────────────────────
// Large featured card — used for role_type: "ceo"
// Avatar size: 200px | Layout: side-by-side on desktop, stacked on mobile
function CEOCard({ member }) {
  const { theme } = useTheme();
  return (
    <Reveal>
      <motion.div whileHover={{ y: -4 }}
        className="relative overflow-hidden rounded-[24px] mb-12"
        style={{
          // Responsive grid: stacks vertically on small screens
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(200px,100%),1fr))',
          gap: 'clamp(28px,4vw,48px)',
          alignItems: 'center',
          padding: 'clamp(28px,4vw,48px) clamp(24px,5vw,52px)',
          // Use theme colors — adapts to light/dark
          background: `linear-gradient(135deg,${theme.primary}0e,${theme.secondary}0a)`,
          border: `1px solid ${theme.primary}30`,
          boxShadow: `0 0 60px ${theme.primary}12`,
        }}>

        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(90deg,transparent,${theme.primary},${theme.secondary},transparent)` }} />

        {/* Decorative glow blob */}
        <div className="absolute pointer-events-none"
          style={{ top: -60, right: -60, width: 300, height: 300, background: `radial-gradient(circle,${theme.primary}12,transparent 65%)` }} />

        {/* Avatar column */}
        <div className="relative z-[1] flex justify-center">
          <div className="relative inline-block">
            {/* ↓ Avatar size: 200px for CEO — change number to resize */}
            <TeamAvatar member={member} size={250} />
            {/* FOUNDER & CEO badge below avatar */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap font-display font-bold tracking-[.06em] text-[10px] px-4 py-1.5 rounded-full"
              style={{ background: theme.grad, color: '#fff', boxShadow: `0 4px 14px ${theme.primary}55` }}>
              FOUNDER &amp; CEO
            </div>
          </div>
        </div>

        {/* Info column — all colors use theme variables */}
        <div className="relative z-[1]">
          {/* Highlight badge */}
          <div className="inline-block font-display font-semibold text-[11px] px-3 py-1 rounded mb-4"
            style={{ background: `${theme.primary}18`, border: `1px solid ${theme.primary}30`, color: theme.primary }}>
            {member.highlight}
          </div>

          {/* Name — uses theme.textPrimary (dark on light theme, light on dark theme) */}
          <h2 className="font-heading leading-[.98] tracking-[.01em] mb-1"
            style={{ fontSize: 'clamp(28px,4vw,52px)', color: theme.textPrimary }}>
            {member.name}
          </h2>

          {/* Role */}
          <div className="font-display font-semibold text-sm mb-4" style={{ color: theme.primary }}>
            {member.role}
          </div>

          {/* Bio — uses theme.textSecondary */}
          <p className="font-body leading-[1.85] mb-6 max-w-[560px]"
            style={{ fontSize: 'clamp(13px,2vw,15px)', color: theme.textSecondary }}>
            {member.bio}
          </p>

          {/* Social links */}
          <div className="flex gap-2 flex-wrap">
            <SocialBtn href={member.linkedin} label="LinkedIn" color={theme.primary} />
            <SocialBtn href={member.twitter}  label="Twitter"  color={theme.primary} />
            <SocialBtn href={member.email ? `mailto:${member.email}` : null} label="Email" color={theme.primary} />
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

// ── Manager / Director Card ──────────────────────────────────
// Medium card — used for role_type: "manager" or "director"
// Avatar size: 100px
function ManagerCard({ member, delay = 0 }) {
  const { theme } = useTheme();
  return (
    <Reveal delay={delay}>
      <motion.div whileHover={{ y: -6, boxShadow: `0 12px 40px ${theme.primary}20` }}
        className="relative overflow-hidden rounded-[20px] h-full transition-all duration-300"
        style={{
          padding: 'clamp(22px,3vw,32px) clamp(18px,3vw,28px)',
          // Uses theme.bgCard — white on light theme, dark on dark theme
          background: theme.bgCard,
          border: `1px solid ${theme.borderSubtle}`,
        }}>

        {/* Colored top line */}
        <div className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(90deg,transparent,${theme.secondary},transparent)` }} />

        {/* Avatar + Name row */}
        <div className="flex items-start gap-4 mb-4 flex-wrap">
          {/* ↓ Avatar size: 100px for managers — change to resize */}
          <TeamAvatar member={member} size={100} />
          <div className="min-w-0">
            {/* Highlight badge */}
            <div className="inline-block font-display font-semibold text-[10px] px-2.5 py-0.5 rounded mb-2"
              style={{ background: `${theme.primary}14`, border: `1px solid ${theme.primary}28`, color: theme.primary }}>
              {member.highlight}
            </div>
            {/* Name */}
            <div className="font-display font-extrabold mb-0.5"
              style={{ fontSize: 'clamp(15px,2.5vw,19px)', color: theme.textPrimary }}>
              {member.name}
            </div>
            {/* Role */}
            <div className="font-body text-[13px] font-medium" style={{ color: theme.secondary }}>
              {member.role}
            </div>
          </div>
        </div>

        {/* Bio text */}
        <p className="font-body leading-[1.8] mb-5"
          style={{ fontSize: 'clamp(12px,1.8vw,13.5px)', color: theme.textSecondary }}>
          {member.bio}
        </p>

        {/* Social links */}
        <div className="flex gap-2 flex-wrap">
          <SocialBtn href={member.linkedin} label="LinkedIn" color={theme.secondary} />
          <SocialBtn href={member.twitter}  label="Twitter"  color={theme.secondary} />
          <SocialBtn href={member.email ? `mailto:${member.email}` : null} label="Email" color={theme.secondary} />
        </div>
      </motion.div>
    </Reveal>
  );
}

// ── Regular Team Member Card ─────────────────────────────────
// Small card — used for role_type: "team"
// Avatar size: 90px
function TeamMemberCard({ member, delay = 0 }) {
  const { theme } = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay}>
      <motion.div
        whileHover={{ y: -6 }}
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        className="text-center rounded-2xl transition-all duration-300"
        style={{
          padding: 'clamp(20px,3vw,28px) clamp(16px,2.5vw,22px)',
          // theme.bgCard adapts: white on light, dark on dark
          background: theme.bgCard,
          border: `1px solid ${hov ? theme.primary + '44' : theme.borderSubtle}`,
          boxShadow: hov ? `0 8px 28px ${theme.primary}18` : 'none',
        }}>

        {/* ↓ Avatar size: 90px for team members — change to resize */}
        <div className="flex justify-center mb-4">
          <TeamAvatar member={member} size={120} />
        </div>

        {/* Name */}
        <div className="font-display font-bold mb-1"
          style={{ fontSize: 'clamp(13px,2vw,16px)', color: theme.textPrimary }}>
          {member.name}
        </div>

        {/* Role */}
        <div className="font-body text-xs font-medium mb-1.5" style={{ color: theme.primary }}>
          {member.role}
        </div>

        {/* Highlight badge */}
        {member.highlight && (
          <div className="inline-block font-display font-semibold text-[10px] px-2.5 py-0.5 rounded mb-3"
            style={{ background: `${theme.primary}12`, border: `1px solid ${theme.primary}25`, color: theme.primary }}>
            {member.highlight}
          </div>
        )}

        {/* Bio */}
        <p className="font-body text-[12.5px] leading-[1.7] mb-4"
          style={{ color: theme.textMuted }}>
          {member.bio}
        </p>

        {/* Social links */}
        <div className="flex gap-1.5 justify-center">
          <SocialBtn href={member.linkedin} label="LinkedIn" color={theme.primary} />
          <SocialBtn href={member.twitter}  label="Twitter"  color={theme.primary} />
          <SocialBtn href={member.email ? `mailto:${member.email}` : null} label="Email" color={theme.primary} />
        </div>
      </motion.div>
    </Reveal>
  );
}

// ── Main Team Page ───────────────────────────────────────────
export default function Team() {
  const { theme } = useTheme();

  // Split TEAM array by role_type
  const ceo      = TEAM.find(m => m.role_type === 'ceo');
  const managers = TEAM.filter(m => m.role_type === 'manager' || m.role_type === 'director');
  const rest     = TEAM.filter(m => m.role_type === 'team');

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative flex items-center justify-center overflow-hidden text-center"
        style={{ minHeight: '60vh', padding: '80px clamp(16px,5vw,40px) 60px', background: theme.bg }}>
        <NeuralCanvas opacity={0.55} />

        {/* Glow behind headline */}
        <div className="absolute pointer-events-none"
          style={{ top: '-5%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: `radial-gradient(ellipse,${theme.primary}18 0%,transparent 65%)` }} />

        {/* Grid lines overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `linear-gradient(${theme.primary}06 1px,transparent 1px),linear-gradient(90deg,${theme.primary}06 1px,transparent 1px)`, backgroundSize: '56px 56px' }} />

        <motion.div initial={{ opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, ease: [.22, 1, .36, 1] }} className="relative z-[2]" style={{ maxWidth: 760 }}>

          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 rounded-full font-display font-semibold tracking-[.08em] mb-7"
            style={{ padding: '5px 16px', fontSize: 11, border: `1px solid ${theme.primary}44`, background: `${theme.primary}12`, color: theme.primary }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-dot" style={{ background: theme.primary }} />
            MEET THE TEAM · SCRAPIX AI
          </div>

          {/* Headline — textPrimary adapts to theme */}
          <h1 className="font-heading leading-[.95] mb-5"
            style={{ fontSize: 'clamp(40px,8vw,80px)', color: theme.textPrimary }}>
            THE PEOPLE BEHIND{' '}
            <GradText gradient={theme.gradText}>THE SYSTEMS</GradText>
          </h1>

          {/* Subtitle — textSecondary adapts to theme */}
          <p className="font-body leading-[1.8] mx-auto"
            style={{ fontSize: 'clamp(14px,2vw,17px)', color: theme.textSecondary, maxWidth: 500 }}>
            A lean, senior team of AI engineers, data scientists and automation specialists. Every person on your project is an expert.
          </p>
        </motion.div>
      </section>

      {/* ── CEO / Founder Section ── */}
      {ceo && (
        <section className="relative" style={{ background: theme.bg2, padding: 'clamp(60px,8vw,80px) clamp(16px,5vw,40px)' }}>
          <div className="line-top" />
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <Reveal className="text-center mb-10">
              <div className="font-display font-semibold tracking-[.12em] mb-2.5"
                style={{ fontSize: 11, color: theme.primary }}>◆ LEADERSHIP ◆ </div>
              <h2 className="section-h2">OUR <GradText gradient={theme.grad}>FOUNDER</GradText></h2>
            </Reveal>
            <CEOCard member={ceo} />
          </div>
        </section>
      )}

      {/* ── Managers / Directors Section ── */}
      {managers.length > 0 && (
        <section className="relative" style={{ background: theme.bg, padding: 'clamp(60px,8vw,80px) clamp(16px,5vw,40px)' }}>
          <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: `linear-gradient(90deg,transparent,${theme.secondary}44,transparent)` }} />
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <Reveal className="text-center mb-[clamp(32px,5vw,48px)]">
              <div className="font-display font-semibold tracking-[.12em] mb-2.5"
                style={{ fontSize: 11, color: theme.secondary }}>◆ MANAGEMENT</div>
              <h2 className="section-h2">PROJECT &amp; <GradText gradient={theme.grad}>DIRECTORS</GradText></h2>
            </Reveal>
            <div className="grid gap-[clamp(14px,2vw,24px)]"
              style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))' }}>
              {managers.map((m, i) => <ManagerCard key={m.id} member={m} delay={i * .12} />)}
            </div>
          </div>
        </section>
      )}

      {/* ── Full Team Grid ── */}
      {rest.length > 0 && (
        <section className="relative"
          style={{ background: theme.bg2, padding: 'clamp(60px,8vw,80px) clamp(16px,5vw,40px) clamp(60px,8vw,100px)' }}>
          <div className="absolute top-0 left-0 right-0 h-px pointer-events-none"
            style={{ background: `linear-gradient(90deg,transparent,${theme.accent}44,transparent)` }} />
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <Reveal className="text-center mb-[clamp(32px,5vw,48px)]">
              <div className="font-display font-semibold tracking-[.12em] mb-2.5"
                style={{ fontSize: 11, color: theme.accent }}>◆ THE COMPLETE TEAM</div>
              <h2 className="section-h2">EVERY <GradText gradient={`linear-gradient(135deg,${theme.accent},${theme.primary})`}>EXPERT</GradText> ON THE TEAM</h2>
            </Reveal>
            <div className="grid gap-[clamp(12px,2vw,20px)]"
              style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(220px,100%),1fr))' }}>
              {rest.map((m, i) => <TeamMemberCard key={m.id} member={m} delay={i * .08} />)}
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom CTA ── */}
      <section className="relative text-center"
        style={{ background: theme.bg, padding: 'clamp(60px,8vw,80px) clamp(16px,5vw,40px)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at 50% 0%,${theme.primary}10,transparent 55%)` }} />
        <div className="mx-auto relative z-[1]" style={{ maxWidth: 600 }}>
          <Reveal>
            <h2 className="section-h2 mb-3.5">
              WANT THIS TEAM WORKING FOR <GradText gradient={theme.grad}>YOU?</GradText>
            </h2>
            <p className="font-body leading-[1.8] mb-8"
              style={{ fontSize: 'clamp(13px,2vw,15px)', color: theme.textSecondary }}>
              Book a free 45-minute discovery call. No commitment, no pressure.
            </p>
            <motion.a href="https://wa.me/923246664914" target="_blank" rel="noopener noreferrer" whileHover={{y:-2,scale:1.02}} whileTap={{scale:.97}} className="btn-primary" style={{ fontSize: 15, padding: '15px 36px' }}>💬 Book a Free Consultation →</motion.a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

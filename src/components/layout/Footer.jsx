import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS, SERVICES, CONTACT_INFO } from '../../data/data';
import { useTheme } from '../../context/ThemeContext';
import { FaWhatsapp, FaEnvelope, FaCalendarAlt, FaFacebook } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// ── Social icon button ────────────────────────────────────────
function SocialBtn({ href, icon, label, color }) {
  const { theme } = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <motion.a
      href={href} target="_blank" rel="noopener noreferrer" title={label}
      whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.93 }}
      onHoverStart={() => setHov(true)} onHoverEnd={() => setHov(false)}
      className="flex items-center justify-center no-underline rounded-xl"
      style={{
        width: 40, height: 40,
        background: hov ? `${color}22` : theme.bgCard,
        border: `1px solid ${hov ? color : theme.borderSubtle}`,
        color: hov ? color : theme.textMuted,
        boxShadow: hov ? `0 4px 20px ${color}33` : 'none',
        fontSize: 16, flexShrink: 0,
        transition: 'background .2s, border-color .2s, color .2s, box-shadow .2s',
      }}
    >
      {icon}
    </motion.a>
  );
}

// ── Stat pill (mobile hero) ───────────────────────────────────
function StatPill({ value, label, color }) {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl"
      style={{ background: `${color}0f`, border: `1px solid ${color}25`, padding: '12px 14px', flex: '1 1 70px', minWidth: 70 }}>
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(18px,4vw,22px)', color, lineHeight: 1, textShadow: `0 0 16px ${color}55` }}>
        {value}
      </span>
      <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 10, color: theme.textFaint, marginTop: 4, textAlign: 'center', letterSpacing: '0.04em' }}>
        {label}
      </span>
    </div>
  );
}

// ── Collapsible section (mobile) ──────────────────────────────
function MobileSection({ title, color, children }) {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-2 rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${open ? color + '44' : theme.borderSubtle}`, background: open ? `${color}08` : theme.bgCard, transition: 'border-color .25s, background .25s' }}>
      <button onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between cursor-pointer"
        style={{ background: 'transparent', border: 'none', padding: '14px 16px' }}>
        <div className="flex items-center gap-2.5">
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: open ? color : theme.textFaint, boxShadow: open ? `0 0 8px ${color}` : 'none', flexShrink: 0, transition: 'background .2s, box-shadow .2s' }} />
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', color: open ? color : theme.textMuted, transition: 'color .2s' }}>
            {title}
          </span>
        </div>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}
          style={{ color: open ? color : theme.textFaint, fontSize: 14, lineHeight: 1 }}>
          ▾
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="content"
            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}>
            <div style={{ padding: '4px 16px 16px' }}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Footer nav link ───────────────────────────────────────────
function FLink({ to, color, children }) {
  const { theme } = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <Link to={to}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="no-underline flex items-center gap-1.5 transition-all"
      style={{ color: hov ? (color || theme.primary) : theme.textMuted, fontSize: 'clamp(12px,1.5vw,13px)', fontFamily: "'Plus Jakarta Sans',sans-serif", paddingBlock: 3 }}>
      <motion.span animate={{ x: hov ? 3 : 0, opacity: hov ? 1 : 0 }} transition={{ duration: 0.15 }}
        style={{ color: color || theme.primary, fontSize: 7, flexShrink: 0 }}>▶</motion.span>
      {children}
    </Link>
  );
}

// ── Contact row ───────────────────────────────────────────────
function ContactRow({ icon, text, href, color }) {
  const { theme } = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      className="no-underline flex items-center gap-3 rounded-xl transition-all"
      style={{ padding: '10px 14px', background: hov ? `${color}0d` : theme.bgCard, border: `1px solid ${hov ? color + '44' : theme.borderSubtle}`, marginBottom: 8 }}>
      <span style={{ color, fontSize: 15, flexShrink: 0 }}>{icon}</span>
      <span style={{ color: hov ? theme.textPrimary : theme.textMuted, fontSize: 13, fontFamily: "'Plus Jakarta Sans',sans-serif", flex: 1, transition: 'color .2s' }}>{text}</span>
      <span style={{ color: theme.textFaint, fontSize: 11 }}>→</span>
    </a>
  );
}

// ─────────────────────────────────────────────────────────────
export default function Footer() {
  const { theme } = useTheme();
  const featuredServices = SERVICES.slice(0, 8);

  const socials = [
    { href: 'https://www.facebook.com/ScrapixAi', icon: <FaFacebook />, label: 'Facebook',  color: '#4267B2' },
    // { icon: '📸', href: 'https://www.instagram.com/scrapixai/?hl=en', label: 'Instagram', color: 'red' },
    { href: CONTACT_INFO.whatsapp,                icon: <FaWhatsapp />, label: 'WhatsApp',  color: '#25D366' },
    { icon: '✉', label: 'Email Us', value: CONTACT_INFO.email, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.email}`, color: theme.primary, sub: 'Response within 24 hours' },
  ];

  const contacts = [
    { icon: '✉', text: 'Email Us', value: CONTACT_INFO.email, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.email}`, color: theme.primary,  sub: 'Response within 24 hours' },
    { icon: <FaWhatsapp />,    text: 'WhatsApp Us',             href: CONTACT_INFO.whatsapp,          color: '#25D366'     },
    { icon: <FaCalendarAlt />, text: 'Book Free Consultation', href: 'https://wa.me/923246664914',                            color: theme.accent  },
    { icon: <FaFacebook />,    text: 'Facebook Page',           href: 'https://facebook.com/ScrapixAi', color: '#4267B2'   },
    // { icon: '📸',    text: 'Instagram Page', href: 'https://www.instagram.com/scrapixai/?hl=en',        color: 'theme.accent' },
  ];

  return (
    <footer className="relative overflow-hidden" style={{ background: theme.bg2, borderTop: `1px solid ${theme.borderSubtle}` }}>

      {/* Ambient top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{ width: 'min(700px,100vw)', height: 280, background: `radial-gradient(ellipse at 50% 0%, ${theme.primary}15 0%, transparent 65%)` }} />

      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: 1, background: `linear-gradient(90deg, transparent, ${theme.primary}66, ${theme.accent}44, transparent)` }} />

      <div className="relative mx-auto"
        style={{ maxWidth: 1280, padding: 'clamp(36px,6vw,64px) clamp(16px,5vw,40px) 0' }}>.
      


        {/* ══════════════════════════════════════════
            MOBILE LAYOUT (hidden on md+)
        ══════════════════════════════════════════ */}
        <div className="block md:hidden">

          {/* ── Mobile Hero ── */}
          <div className="flex flex-col items-center text-center mb-6 pb-6"
            style={{ borderBottom: `1px solid ${theme.borderSubtle}` }}>

            {/* Logo — NO mix-blend-mode here (breaks on light theme) */}
            <motion.div whileHover={{ scale: 1.15 }} transition={{ duration: 0.25 }}
              style={{
                padding: 12, borderRadius: 20,
                background: theme.isDark ? 'rgba(255,255,255,0.04)' : `${theme.primary}0f`,
                border: `1px solid ${theme.primary}22`,
                boxShadow: `0 0 24px ${theme.primary}22`,
              }}>
              <img
                src="/images/logo.png" alt="Scrapix AI"
                style={{
                  height: 75, width: 'auto', display: 'block',
                  /* Use screen only on dark themes so logo stays visible on light */
                  mixBlendMode: theme.isDark ? 'screen' : 'normal',
                  filter: theme.isDark
                    ? `brightness(1.9) drop-shadow(0 0 14px ${theme.primary}88)`
                    : `brightness(0.9) drop-shadow(0 0 8px ${theme.primary}66)`,
                }}
              />
            </motion.div>

            {/* Brand name — plain color, NO gradient clip (prevents rectangle glitch) */}
            
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 12.5, color: theme.textMuted, marginTop: 6, maxWidth: 260, lineHeight: 1.65 }}>
              AI automation for ambitious companies. We don't build software — we build business systems.
            </p>

            {/* Stats */}
            <div className="flex gap-2 mt-4 w-full justify-center">
              <StatPill value="150+" label="Projects"     color={theme.primary}   />
              <StatPill value="98%"  label="Satisfaction" color={theme.secondary} />
              <StatPill value="$40M" label="Saved"        color={theme.accent}    />
            </div>

            {/* CTA */}
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}
              style={{ marginTop: 16, width: '100%', maxWidth: 280 }}>
              <a href="https://wa.me/923246664914" target="_blank" rel="noopener noreferrer" className="no-underline flex items-center justify-center rounded-2xl font-bold"
                style={{
                  background: theme.grad, color: theme.btnText,
                  padding: '13px 24px', fontSize: 13.5, letterSpacing: '0.04em',
                  fontFamily: "'Space Grotesk',sans-serif",
                  boxShadow: `0 6px 24px ${theme.primary}44`,
                  position: 'relative', overflow: 'hidden',
                }}>
                <motion.span animate={{ x: ['-100%', '200%'] }} transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, ease: 'linear' }}
                  style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent)', pointerEvents: 'none' }} />
                💬 WhatsApp Us Now →
              </a>
            </motion.div>

            {/* Socials */}
            <div className="flex gap-3 mt-4 justify-center">
              {socials.map(s => <SocialBtn key={s.label} {...s} />)}
            </div>
          </div>

          {/* ── Mobile Accordion sections ── */}
          <MobileSection title="PAGES" color={theme.primary}>
            <div className="grid grid-cols-2 gap-x-3">
              {NAV_LINKS.map(({ label, path }) => (
                <FLink key={path} to={path}>{label}</FLink>
              ))}
            </div>
          </MobileSection>

          <MobileSection title="SERVICES" color={theme.secondary}>
            <div className="grid grid-cols-2 gap-x-3">
              {featuredServices.map(s => (
                <FLink key={s.id} to="/services" color={theme.secondary}>{s.title}</FLink>
              ))}
            </div>
            <Link to="/services" className="no-underline mt-3 inline-block"
              style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 12, color: theme.secondary, letterSpacing: '0.04em' }}>
              View all services →
            </Link>
          </MobileSection>

          <MobileSection title="GET IN TOUCH" color={theme.accent}>
            <div className="flex flex-col">
              {contacts.map(c => <ContactRow key={c.text} {...c} />)}
            </div>
          </MobileSection>

          {/* Free audit pill */}
          <div className="rounded-2xl mt-3 mb-6 p-4"
            style={{ background: `${theme.primary}0d`, border: `1px solid ${theme.primary}22` }}>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 11, color: theme.primary, letterSpacing: '0.08em', marginBottom: 6 }}>
              ◆ FREE AUTOMATION AUDIT
            </div>
            <a href="https://wa.me/923246664914" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 13, color: theme.textMuted }}>
              Book your 45-min audit — Chat with us on WhatsApp →
            </a>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            DESKTOP LAYOUT (hidden on mobile)
        ══════════════════════════════════════════ */}
        <div className="hidden md:grid gap-[clamp(24px,4vw,44px)] mb-[clamp(32px,5vw,52px)]"
          style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(150px,100%),1fr))' }}>

          {/* Brand */}
          <div style={{ maxWidth: 240 }}>
            <Link to="/" className="no-underline flex flex-col items-start gap-2 mb-4">
              <div style={{
                padding: 10, borderRadius: 16,
                background: theme.isDark ? 'rgba(255,255,255,0.04)' : `${theme.primary}0f`,
                border: `1px solid ${theme.primary}22`,
                display: 'inline-block',
              }}>
                <img src="/images/logo.png" alt="Scrapix AI"
                  style={{
                    height: 70, width: 'auto', display: 'block',
                    mixBlendMode: theme.isDark ? 'screen' : 'normal',
                    filter: theme.isDark
                      ? `brightness(2.5) drop-shadow(0 0 14px ${theme.primary}77)`
                      : `brightness(1.2) drop-shadow(0 0 6px ${theme.primary}55)`,
                    transition: 'filter .3s, transform .3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.filter = theme.isDark
                      ? `brightness(1.55) drop-shadow(0 0 24px ${theme.primary})`
                      : `brightness(0.8) drop-shadow(0 0 12px ${theme.primary})`;
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.filter = theme.isDark
                      ? `brightness(1.3) drop-shadow(0 0 14px ${theme.primary}77)`
                      : `brightness(0.9) drop-shadow(0 0 6px ${theme.primary}55)`;
                    e.currentTarget.style.transform = 'scale(1)';
                  }} />
              </div>
              {/* Plain color — no gradient clip, prevents rectangle glitch */}
            </Link>
            <p className="font-body leading-[1.7] mb-3" style={{ fontSize: 'clamp(12px,1.5vw,13px)', color: theme.textMuted }}>
              We don't build software. We build business systems. AI automation for ambitious companies.
            </p>
            <div className="p-3 rounded-[10px] mb-4" style={{ background: `${theme.primary}0d`, border: `1px solid ${theme.primary}22` }}>
              <div className="font-display font-bold text-[11px] mb-1" style={{ color: theme.primary }}>FREE AUDIT</div>
              <a href="https://wa.me/923246664914" target="_blank" rel="noopener noreferrer" className="font-body text-[12px] no-underline" style={{ color: theme.textMuted }}>
                Chat with us → Free audit →
              </a>
            </div>
            <div className="flex gap-2 flex-wrap">
              {socials.map(s => <SocialBtn key={s.label} {...s} />)}
            </div>
          </div>

          {/* Pages */}
          <div>
            <div className="font-display font-bold tracking-[.1em] mb-3.5" style={{ fontSize: 11, color: theme.primary }}>PAGES</div>
            {NAV_LINKS.map(({ label, path }) => <FLink key={path} to={path}>{label}</FLink>)}
          </div>

          {/* Services */}
          <div>
            <div className="font-display font-bold tracking-[.1em] mb-3.5" style={{ fontSize: 11, color: theme.secondary }}>SERVICES</div>
            {featuredServices.map(s => <FLink key={s.id} to="/services" color={theme.secondary}>{s.title}</FLink>)}
            <Link to="/services" className="block font-display font-bold text-[12px] mt-2 no-underline" style={{ color: theme.secondary }}>
              View all services →
            </Link>
          </div>

          {/* Contact */}
          <div>
            <div className="font-display font-bold tracking-[.1em] mb-3.5" style={{ fontSize: 11, color: theme.accent }}>GET IN TOUCH</div>
            {contacts.map(({ icon, text, href, color }) => (
              <ContactRow key={text} icon={icon} text={text} href={href} color={color} />
            ))}
            <a href="https://wa.me/923246664914" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-[18px] py-2.5 rounded-lg no-underline font-display font-bold text-xs tracking-[.03em]"
              style={{ background: theme.grad, color: theme.btnText, boxShadow: `0 3px 14px ${theme.primary}44` }}>
              💬 WhatsApp Now →
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex items-center justify-between flex-wrap gap-2.5 py-4"
          style={{ borderTop: `1px solid ${theme.borderSubtle}` }}>
          <span className="font-body text-xs" style={{ color: theme.textFaint }}>
            © {new Date().getFullYear()} ScrapixAI. All rights reserved.
            <span className="hidden sm:inline"> · Automation is no longer optional . It's a competitive advantage.</span>
          </span>
          <div className="flex gap-4 flex-wrap">
            {['Privacy Policy', 'Terms of Service'].map(t => (
              <a key={t} href="#" className="font-body text-xs no-underline transition-colors duration-200"
                style={{ color: theme.textFaint }}
                onMouseEnter={e => e.currentTarget.style.color = theme.textMuted}
                onMouseLeave={e => e.currentTarget.style.color = theme.textFaint}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
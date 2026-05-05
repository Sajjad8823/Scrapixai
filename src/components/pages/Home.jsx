import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NeuralCanvas, Reveal, Counter } from '../ui/UIComponents';
import { SERVICES, METRICS } from '../../data/data';
import { useTheme } from '../../context/ThemeContext';
import { FaCheckCircle, FaStar, FaShieldAlt, FaChartLine, FaArrowRight, FaPlay } from 'react-icons/fa';

/* ══════════════════════════════════════════════════════════════════
   HERO
   - Single clean headline, NOT stacked word-by-word
   - Two lines max so mobile stays readable
   - Solid color on key phrase with glow (no gradient clip)
   - Rotating capability chip below
══════════════════════════════════════════════════════════════════ */
function Hero() {
  const { theme } = useTheme();
  const words = [
    'Data Scraping','AI Chatbots','Workflow Automation','NLP Systems',
    'Computer Vision','Full Stack Web Apps','iOS & Android Apps',
    'SaaS Products','Graphic Design','Video Editing','ML Models',
  ];
  const [wi, setWi] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setWi(i => (i + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section style={{
      position: 'relative', overflow: 'hidden',
      minHeight: '100vh', background: theme.bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <NeuralCanvas opacity={0.75} />

      {/* Background glows */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
        <div style={{ position:'absolute', top:'-10%', left:'50%', transform:'translateX(-50%)', width:'min(900px,130vw)', height:'60vh', background:`radial-gradient(ellipse,${theme.primary}22 0%,transparent 65%)` }} />
        <div style={{ position:'absolute', bottom:0, right:'-8%', width:'40vw', height:'40vw', background:`radial-gradient(circle,${theme.accent}11 0%,transparent 65%)` }} />
        <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(${theme.primary}04 1px,transparent 1px),linear-gradient(90deg,${theme.primary}04 1px,transparent 1px)`, backgroundSize:'64px 64px' }} />
        {/* Sweeping line */}
        <motion.div
          animate={{ y: ['0vh','100vh'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{ position:'absolute', left:0, right:0, height:1, background:`linear-gradient(90deg,transparent,${theme.primary}33,transparent)` }}
        />
      </div>

      <div style={{ position:'relative', zIndex:2, maxWidth:1000, width:'100%', padding:'clamp(100px,12vw,140px) clamp(20px,5vw,60px) clamp(80px,10vw,100px)', textAlign:'center', margin:'0 auto' }}>

        {/* Top badge */}
        <motion.div
          initial={{ opacity:0, y:-16 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:.55, delay:.1 }}
          style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 18px', borderRadius:999, background:`${theme.primary}13`, border:`1px solid ${theme.primary}3a`, color:theme.tagText, fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:11, letterSpacing:'.1em', marginBottom:40 }}
        >
          <span style={{ width:7, height:7, borderRadius:'50%', background:theme.primary, boxShadow:`0 0 8px ${theme.primary}` }} />
          Enterprise AI & Automation · Est. 2023
        </motion.div>

        {/* ── HEADLINE ── clean 2-part, not 4 stacked lines */}
        <motion.div
          initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:.7, delay:.2, ease:[.22,1,.36,1] }}
          style={{ marginBottom: 28 }}
        >
          {/* Line 1 — plain */}
          <div style={{
            fontFamily: 'sans-serif',
            fontSize: 'clamp(36px, 7vw, 80px)',
            lineHeight: 1.05,
            letterSpacing: '0.02em',
            color: theme.textPrimary,
            display: 'block',
          }}>
            We Build Intelligent Systems
          </div>

          {/* Line 2 — solid color with glow (no gradient clip) */}
          <div style={{
            fontFamily: 'sans-serif',
            fontSize: 'clamp(36px, 7vw, 80px)',
            lineHeight: 1.05,
            letterSpacing: '0.02em',
            color: theme.primary,
            textShadow: `0 0 40px ${theme.primary}55`,
            display: 'block',
          }}>
            That Replace Manual Work
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:.6, delay:.38 }}
          style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(15px,2vw,18px)', color:theme.textMuted, maxWidth:560, margin:'0 auto 36px', lineHeight:1.8 }}
        >
          We turn your data into powerful AI-driven systems. Delivering automation solutions that boost performance, reduce costs and give you a lasting edge.
          End-to-end web, mobile and ERP development engineered for performance and long-term growth.
        </motion.p>

        {/* Capability chip — rotating */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.55 }}
          style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:12, marginBottom:44 }}
        >
          <div style={{ height:1, width:40, background:theme.borderSubtle }} />
          <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, color:theme.textFaint }}>Currently building</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={wi}
              initial={{ y:12, opacity:0 }} animate={{ y:0, opacity:1 }}
              exit={{ y:-12, opacity:0 }} transition={{ duration:.28 }}
              style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:13, color:theme.tagText, padding:'5px 16px', borderRadius:8, background:theme.tagBg, border:`1px solid ${theme.tagBorder}`, whiteSpace:'nowrap' }}
            >
              {words[wi]}
            </motion.span>
          </AnimatePresence>
          <div style={{ height:1, width:40, background:theme.borderSubtle }} />
        </motion.div>

        {/* CTA buttons
        <motion.div
          initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
          transition={{ delay:.55, duration:.55 }}
          style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap', marginBottom:56 }}
        >
          <motion.div whileHover={{ y:-2, scale:1.02 }} whileTap={{ scale:.97 }}>
            <motion.a href="https://wa.me/923246664914" target="_blank" rel="noopener noreferrer" style={{
              display:'inline-flex', alignItems:'center', gap:10,
              padding:'clamp(13px,2vw,16px) clamp(28px,4vw,40px)',
              borderRadius:14, background:theme.grad, color:theme.btnText,
              fontFamily:'Space Grotesk,sans-serif', fontWeight:800, fontSize:'clamp(13px,2vw,15px)',
              letterSpacing:'.04em', textDecoration:'none',
              boxShadow:`0 8px 32px ${theme.primary}50`,
              position:'relative', overflow:'hidden',
            }}>
              <motion.span
                animate={{ x:['-100%','200%'] }}
                transition={{ duration:2.5, repeat:Infinity, repeatDelay:2.5, ease:'linear' }}
                style={{ position:'absolute', inset:0, background:'linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent)', pointerEvents:'none' }}
              />
              💬 WhatsApp Us Now <FaArrowRight style={{ fontSize:13 }} />
            </motion.a>
          </motion.div>
          <motion.div whileHover={{ y:-2 }} whileTap={{ scale:.97 }}>
            <Link to="/portfolio" style={{
              display:'inline-flex', alignItems:'center', gap:8,
              padding:'clamp(13px,2vw,16px) clamp(28px,4vw,40px)',
              borderRadius:14, border:`1px solid ${theme.borderColor}`,
              background:theme.bgCard, color:theme.textSecondary,
              fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'clamp(13px,2vw,15px)',
              textDecoration:'none',
            }}>
              <FaPlay style={{ fontSize:11, opacity:.7 }} /> View Our Work
            </Link>
          </motion.div>
        </motion.div> */}

        {/* Stats row */}
        <motion.div
          initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:.85 }}
          style={{ display:'flex', alignItems:'stretch', justifyContent:'center', gap:'clamp(8px,2vw,16px)', flexWrap:'wrap' }}
        >
          {[
            { v:'100+', l:'Projects Delivered', c:theme.primary   },
            { v:'98%',  l:'Client Satisfaction', c:theme.secondary },
            // { v:'$40M', l:'Client Savings',       c:theme.accent    },
            { v:'60+',  l:'Enterprise Clients',  c:theme.primary   },
          ].map(({ v, l, c }, i) => (
            <motion.div
              key={l}
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ delay:.9 + i*.06 }}
              style={{
                display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                padding:'clamp(12px,2vw,18px) clamp(16px,3vw,28px)',
                borderRadius:16, background:`${c}0e`, border:`1px solid ${c}25`,
                minWidth:80, flex:'1 1 80px', maxWidth:160,
              }}
            >
              <span style={{ fontFamily:'sans-serif', fontSize:'clamp(20px,3.5vw,30px)', color:c, lineHeight:1, textShadow:`0 0 20px ${c}55` }}>{v}</span>
              <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(9px,1.2vw,11px)', color:theme.textFaint, marginTop:4, textAlign:'center', letterSpacing:'.04em' }}>{l}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.4 }}
        style={{ position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:6, zIndex:2 }}
      >
        <motion.div
          animate={{ y:[0,8,0] }} transition={{ duration:1.5, repeat:Infinity }}
          style={{ width:24, height:38, borderRadius:12, border:`1.5px solid ${theme.primary}40`, display:'flex', justifyContent:'center', paddingTop:7 }}
        >
          <div style={{ width:4, height:8, borderRadius:2, background:theme.grad }} />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   SERVICES PREVIEW
══════════════════════════════════════════════════════════════════ */
function ServiceCard({ s, i }) {
  const { theme } = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      whileHover={{ y:-7 }}
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      style={{
        borderRadius: 20, padding:'clamp(20px,3vw,30px)',
        background: hov ? theme.bgCardHover : theme.bgCard,
        border:`1px solid ${hov ? s.color+'55' : theme.borderSubtle}`,
        boxShadow: hov ? `0 16px 48px ${s.glow}, inset 0 1px 0 rgba(255,255,255,.05)` : 'none',
        transition:'all .3s ease', height:'100%', position:'relative', overflow:'hidden',
        display:'flex', flexDirection:'column',
      }}
    >
      {/* Accent top line */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:s.gradient, opacity: hov ? 1 : 0.5, borderRadius:'20px 20px 0 0', transition:'opacity .3s' }} />

      {/* Ghost index */}
      <div style={{ position:'absolute', top:12, right:16, fontFamily:'sans-serif', fontSize:56, color:s.color, opacity:.05, lineHeight:1, userSelect:'none' }}>
        {String(i+1).padStart(2,'0')}
      </div>

      {/* Icon */}
      <div style={{ width:48, height:48, borderRadius:14, background:s.bg, border:`1px solid ${s.border}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, color:s.color, marginBottom:18, flexShrink:0 }}>
        {s.icon}
      </div>

      <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:800, fontSize:'clamp(15px,2vw,18px)', color:theme.textPrimary, marginBottom:10, lineHeight:1.3 }}>{s.title}</div>
      <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(12px,1.5vw,14px)', color:theme.textMuted, lineHeight:1.8, marginBottom:20, flex:1 }}>{s.desc}</p>

      <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:20 }}>
        {s.tags.slice(0,3).map(t => (
          <span key={t} style={{ padding:'3px 10px', borderRadius:6, fontSize:11, fontFamily:"'Space Grotesk',sans-serif", fontWeight:600, background:s.bg, border:`1px solid ${s.border}`, color:s.color }}>{t}</span>
        ))}
      </div>

      <Link to="/services" style={{ display:'inline-flex', alignItems:'center', gap:6, color:s.color, fontSize:12, fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, textDecoration:'none', letterSpacing:'.04em' }}>
        Explore service <motion.span animate={{ x: hov ? 4 : 0 }}><FaArrowRight style={{ fontSize:10 }} /></motion.span>
      </Link>
    </motion.div>
  );
}

function ServicesPreview() {
  const { theme } = useTheme();
  return (
    <section style={{ background:theme.bg2, padding:'clamp(64px,9vw,100px) clamp(16px,5vw,48px)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:`linear-gradient(90deg,transparent,${theme.secondary}55,transparent)` }} />

      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <Reveal>
          <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:'clamp(40px,6vw,60px)' }}>
            <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:11, letterSpacing:'.14em', color:theme.secondary }}>◆ WHAT WE BUILD</div>
            <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', flexWrap:'wrap', gap:16 }}>
              {/* ✅ FIXED: Solid color with glow instead of gradient clip */}
              <h2 style={{ fontFamily:'sans-serif', fontSize:'clamp(30px,5.5vw,58px)', color:theme.textPrimary, lineHeight:1, letterSpacing:'.02em', margin:0 }}>
                Our{' '}
                <span style={{ color: theme.primary, textShadow: `0 0 30px ${theme.primary}44` }}>
                  AI Services
                </span>
                {' '}That Scale
              </h2>
              <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(13px,1.8vw,15px)', color:theme.textMuted, maxWidth:300, lineHeight:1.7, margin:0 }}>
                Click any card to explore use cases, tools and measurable ROI.
              </p>
            </div>
          </div>
        </Reveal>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(240px,100%),1fr))', gap:'clamp(12px,2vw,20px)' }}>
          {SERVICES.slice(0,4).map((s,i) => (
            <Reveal key={s.id} delay={i*.09}>
              <ServiceCard s={s} i={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={.25}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'clamp(28px,4vw,44px)', flexWrap:'wrap', gap:12 }}>
            <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:13, color:theme.textFaint }}>Showing 4 of 15 services</span>
            <motion.div whileHover={{ y:-2 }} whileTap={{ scale:.97 }}>
              <Link to="/services" style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'12px 28px', borderRadius:12, background:theme.grad, color:theme.btnText, fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:14, textDecoration:'none', boxShadow:`0 4px 20px ${theme.primary}40` }}>
                View All 15 Services <FaArrowRight style={{ fontSize:12 }} />
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CERTIFICATIONS
══════════════════════════════════════════════════════════════════ */
const CERTS = [
  { id:'secp', icon:<FaCheckCircle />, badge:'CORPORATE ENTITY', title:'SECP Certified',   img:'/images/certs/secp.png', imgAlt:'SECP', color:'#06b6d4' },
  { id:'pseb', icon:<FaStar />,        badge:'IT BOARD MEMBER',  title:'PSEB Registered',  img:'/images/certs/pseb.png', imgAlt:'PSEB', color:'#7c3aed',  btnHref:'#' },
  { id:'fbr',  icon:<FaShieldAlt />,   badge:'TAX COMPLIANT',    title:'FBR Registered',   img:'/images/certs/fbr.png',  imgAlt:'FBR',  color:'#10b981' },
];

function CertCard({ cert, i }) {
  const { theme } = useTheme();
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={i*.14}>
      <motion.div
        whileHover={{ y:-10, scale:1.02 }}
        onHoverStart={() => setHov(true)} onHoverEnd={() => setHov(false)}
        style={{
          borderRadius:24, textAlign:'center', position:'relative', overflow:'hidden',
          padding:'clamp(32px,5vw,48px) clamp(20px,4vw,32px)',
          background: theme.isDark
            ? 'linear-gradient(150deg,rgba(255,255,255,0.065) 0%,rgba(255,255,255,0.018) 100%)'
            : 'linear-gradient(150deg,rgba(255,255,255,0.95),rgba(255,255,255,0.8))',
          border:`1px solid ${hov ? cert.color+'55' : theme.borderSubtle}`,
          boxShadow: hov ? `0 24px 64px ${cert.color}25, 0 0 0 1px ${cert.color}22` : `0 4px 20px rgba(0,0,0,.1)`,
          backdropFilter:'blur(16px)',
          transition:'all .32s ease',
        }}
      >
        {/* Top colour bar */}
        <div style={{ position:'absolute', top:0, left:0, right:0, height:4, background:`linear-gradient(90deg,${cert.color},${cert.color}66,transparent)`, opacity: hov ? 1 : 0.65, transition:'opacity .3s' }} />

        {/* Corner icon */}
        <div style={{ position:'absolute', top:16, right:16, width:36, height:36, borderRadius:10, background:`linear-gradient(135deg,${cert.color},${cert.color}88)`, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:14, boxShadow:`0 4px 14px ${cert.color}44` }}>
          {cert.icon}
        </div>

        {/* Background orb */}
        <div style={{ position:'absolute', top:'15%', left:'50%', transform:'translateX(-50%)', width:180, height:180, borderRadius:'50%', background:`radial-gradient(circle,${cert.color}1a 0%,transparent 70%)`, filter:'blur(16px)', pointerEvents:'none', opacity: hov ? 1 : 0.5, transition:'opacity .3s' }} />

        {/* Logo circle */}
        <motion.div
          animate={{ boxShadow: hov ? `0 0 0 4px ${cert.color}44, 0 0 28px ${cert.color}33` : `0 0 0 2px ${cert.color}22` }}
          style={{ width:'clamp(90px,13vw,120px)', height:'clamp(90px,13vw,120px)', borderRadius:'50%', background: theme.isDark ? '#0d1322' : '#f1f5f9', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 20px', position:'relative', flexShrink:0, overflow:'hidden' }}
        >
          <img
            src={cert.img} alt={cert.imgAlt}
            style={{ width:'75%', height:'75%', objectFit:'contain' }}
            onError={e => { e.currentTarget.parentNode.innerHTML = `<span style="font-family:'Outfit',sans-serif;font-size:clamp(18px,3vw,26px);color:${cert.color};font-weight:900">${cert.imgAlt}</span>`; }}
          />
          <div style={{ position:'absolute', bottom:2, right:2, width:22, height:22, borderRadius:'50%', background:cert.color, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:11 }}>
            <FaCheckCircle />
          </div>
        </motion.div>

        <div style={{ fontFamily:'sans-serif', fontWeight:900, fontSize:'clamp(18px,2.8vw,24px)', color: hov ? cert.color : theme.textPrimary, letterSpacing:'.04em', marginBottom:6, transition:'color .25s' }}>
          {cert.title}
        </div>
        <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:600, fontSize:10, letterSpacing:'.14em', color:theme.textFaint, marginBottom: cert.btnText ? 20 : 0 }}>
          {cert.badge}
        </div>

        {cert.btnText && (
          <motion.a href={cert.btnHref} target="_blank" rel="noopener noreferrer"
            whileHover={{ scale:1.06 }} whileTap={{ scale:.96 }}
            style={{ display:'inline-flex', alignItems:'center', gap:6, padding:'8px 18px', borderRadius:999, background:`${cert.color}15`, border:`1px solid ${cert.color}44`, color:cert.color, fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:12, textDecoration:'none', letterSpacing:'.04em' }}>
            <FaChartLine style={{ fontSize:10 }} /> {cert.btnText}
          </motion.a>
        )}
      </motion.div>
    </Reveal>
  );
}

function Certifications() {
  const { theme } = useTheme();
  return (
    <section style={{ background:theme.bg, padding:'clamp(64px,9vw,100px) clamp(16px,5vw,48px)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:`radial-gradient(circle at 15% 50%,${theme.accent}09,transparent 50%),radial-gradient(circle at 85% 50%,${theme.primary}09,transparent 50%)` }} />
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', backgroundImage:`linear-gradient(${theme.accent}03 1px,transparent 1px),linear-gradient(90deg,${theme.accent}03 1px,transparent 1px)`, backgroundSize:'52px 52px' }} />
      <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:`linear-gradient(90deg,transparent,${theme.accent}55,transparent)` }} />

      <div style={{ maxWidth:1000, margin:'0 auto', position:'relative', zIndex:1 }}>
        <Reveal>
          <div style={{ textAlign:'center', marginBottom:'clamp(44px,7vw,68px)' }}>
            <div style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'7px 20px', borderRadius:999, fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:11, letterSpacing:'.1em', border:`1px solid ${theme.accent}44`, background:`${theme.accent}12`, color:theme.accent, marginBottom:20 }}>
              <FaShieldAlt style={{ fontSize:11 }} /> TRUSTED & VERIFIED
            </div>
            {/* ✅ FIXED: Solid color with glow instead of gradient clip */}
            <h2 style={{ fontFamily:'sans-serif', fontSize:'clamp(28px,5vw,56px)', color:theme.textPrimary, lineHeight:1, marginBottom:14, letterSpacing:'.02em' }}>
              Our{' '}
              <span style={{ color: theme.accent, textShadow: `0 0 30px ${theme.accent}44` }}>
                Certifications
              </span>
            </h2>
            <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(13px,2vw,16px)', color:theme.textMuted, maxWidth:440, margin:'0 auto', lineHeight:1.75 }}>
              Registered and certified by Pakistan's leading Government authorities.
            </p>
          </div>
        </Reveal>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(220px,100%),1fr))', gap:'clamp(14px,3vw,24px)' }}>
          {CERTS.map((cert, i) => <CertCard key={cert.id} cert={cert} i={i} />)}
        </div>

        <Reveal delay={.3}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'clamp(16px,5vw,48px)', marginTop:'clamp(36px,6vw,52px)', flexWrap:'wrap' }}>
            {[
              { icon:<FaShieldAlt />,   text:'Government Registered', color:theme.accent    },
              { icon:<FaCheckCircle />, text:'Legally Compliant',      color:theme.primary   },
              { icon:<FaStar />,        text:'ISO Standards',          color:theme.secondary },
            ].map(({ icon, text, color }) => (
              <div key={text} style={{ display:'flex', alignItems:'center', gap:8, fontFamily:"'Space Grotesk',sans-serif", fontWeight:600, fontSize:'clamp(11px,1.6vw,13px)', color:theme.textMuted }}>
                <span style={{ color, fontSize:14 }}>{icon}</span> {text}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   METRICS + CTA
══════════════════════════════════════════════════════════════════ */
function TrustSection() {
  const { theme } = useTheme();
  return (
    <section style={{ background:theme.bg2, padding:'clamp(64px,9vw,100px) clamp(16px,5vw,48px)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:`linear-gradient(90deg,transparent,${theme.primary}44,transparent)` }} />

      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <Reveal>
          <div style={{ marginBottom:'clamp(40px,6vw,60px)' }}>
            <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:11, letterSpacing:'.14em', color:theme.accent, marginBottom:12 }}>◆ BY THE NUMBERS</div>
            {/* ✅ FIXED: Solid color with glow instead of gradient clip */}
            <h2 style={{ fontFamily:'sans-serif', fontSize:'clamp(28px,5vw,56px)', color:theme.textPrimary, lineHeight:1, letterSpacing:'.02em', margin:0 }}>
              Where Performance {' '}
              <span style={{ color: theme.accent, textShadow: `0 0 30px ${theme.accent}44` }}>
               Meets Proof
              </span>
            </h2>
          </div>
        </Reveal>

        {/* Metric grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(min(145px,100%),1fr))', gap:'clamp(10px,2vw,16px)', marginBottom:'clamp(40px,6vw,60px)' }}>
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i*.07}>
              <motion.div
                whileHover={{ y:-5, boxShadow:`0 12px 36px ${m.color||theme.primary}22` }}
                style={{ borderRadius:20, textAlign:'center', padding:'clamp(20px,3vw,32px) clamp(12px,2vw,20px)', background:theme.bgCard, border:`1px solid ${theme.borderSubtle}`, position:'relative', overflow:'hidden', transition:'all .3s', minHeight:120, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}
              >
                <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${m.color||theme.primary},${m.color||theme.primary}55,transparent)` }} />
                <div style={{ position:'absolute', top:-24, left:'50%', transform:'translateX(-50%)', width:80, height:80, borderRadius:'50%', background:`radial-gradient(circle,${m.color||theme.primary}16,transparent 70%)`, pointerEvents:'none' }} />
                <Counter target={m.target} suffix={m.suffix} prefix={m.prefix||''} color={m.color||theme.primary} size={42} />
                <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'clamp(11px,1.5vw,13px)', color:theme.textPrimary, marginTop:8, marginBottom:3 }}>{m.label}</div>
                <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(10px,1.2vw,11px)', color:theme.textFaint }}>{m.sub}</div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* CTA Banner */}
        <Reveal delay={.2}>
          <motion.div
            whileHover={{ boxShadow:`0 0 60px ${theme.primary}18` }}
            style={{ borderRadius:28, background:theme.gradBg, border:`1px solid ${theme.borderColor}`, padding:'clamp(36px,6vw,56px) clamp(24px,5vw,52px)', position:'relative', overflow:'hidden', transition:'box-shadow .35s' }}
          >
            <div style={{ position:'absolute', inset:0, background:`radial-gradient(ellipse at 50% -20%,${theme.primary}18,transparent 60%)`, pointerEvents:'none' }} />
            <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${theme.primary},${theme.accent},${theme.secondary})` }} />

            <div style={{ display:'flex', flexDirection:'column', gap:24, position:'relative', zIndex:1 }}>
              <div>
                {/* ✅ FIXED: Solid color with glow instead of gradient clip */}
                <h2 style={{ fontFamily:'sans-serif', fontSize:'clamp(24px,5vw,48px)', color:theme.textPrimary, lineHeight:1, marginBottom:14, letterSpacing:'.02em' }}>
                  Ready to Automate Your{' '}
                  <span style={{ color: theme.primary, textShadow: `0 0 30px ${theme.primary}44` }}>
                    Operations?
                  </span>
                </h2>
                <p style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:'clamp(13px,2vw,16px)', color:theme.textMuted, maxWidth:520, lineHeight:1.8, margin:0 }}>
                  Schedule a free 45-min audit. We will identify your top automation opportunities and build an ROI roadmap at zero cost.
                </p>
              </div>

              <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                <motion.div whileHover={{ scale:1.03, y:-2 }} whileTap={{ scale:.97 }}>
                  <motion.a href="https://wa.me/923246664914" target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'clamp(13px,2vw,16px) clamp(28px,4vw,44px)', borderRadius:14, background:theme.grad, color:theme.btnText, fontFamily:'Space Grotesk,sans-serif', fontWeight:800, fontSize:'clamp(13px,2vw,15px)', letterSpacing:'.04em', textDecoration:'none', boxShadow:`0 8px 32px ${theme.primary}50`, position:'relative', overflow:'hidden', whiteSpace:'nowrap' }}>
                    <motion.span animate={{ x:['-100%','200%'] }} transition={{ duration:2.5, repeat:Infinity, repeatDelay:2, ease:'linear' }} style={{ position:'absolute', inset:0, background:'linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent)', pointerEvents:'none' }} />
                    💬 Book Free Consultation <FaArrowRight style={{ fontSize:13 }} />
                  </motion.a>
                </motion.div>
                <motion.div whileHover={{ y:-2 }}>
                  <Link to="/case-studies" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'clamp(13px,2vw,16px) clamp(24px,4vw,36px)', borderRadius:14, border:`1px solid ${theme.borderColor}`, background:theme.bgCard, color:theme.textSecondary, fontFamily:"'Space Grotesk',sans-serif", fontWeight:700, fontSize:'clamp(13px,2vw,15px)', textDecoration:'none', whiteSpace:'nowrap' }}>
                    Read Case Studies
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Certifications />
      <TrustSection />
    </>
  );
}
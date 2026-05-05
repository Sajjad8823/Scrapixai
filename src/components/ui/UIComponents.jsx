import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

/* ── NEURAL CANVAS ── */
export function NeuralCanvas({ opacity = 1 }) {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId, time = 0;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const W = () => canvas.width, H = () => canvas.height;
    const hexToRgb = h => { if (!h||h.length<7) return '124,58,237'; return [parseInt(h.slice(1,3),16),parseInt(h.slice(3,5),16),parseInt(h.slice(5,7),16)].join(','); };
    const buildNodes = () => {
      const nodes=[]; const layers=6;
      for(let l=0;l<layers;l++){
        const count=(l===0||l===layers-1)?4:Math.floor(5+Math.random()*4);
        const xF=(l+.5)/layers;
        for(let n=0;n<count;n++){
          const yF=(n+.5)/count;
          nodes.push({x:xF*W(),y:yF*H(),layer:l,baseX:xF*W(),baseY:yF*H(),r:Math.random()*2.5+1.5,pulse:Math.random()*Math.PI*2,pulseSpeed:.018+Math.random()*.018,active:Math.random()>.3,activationPhase:Math.random()*Math.PI*2});
        }
      }
      return nodes;
    };
    let nodes=buildNodes();
    const buildConns=ns=>{const c=[];ns.forEach(a=>{ns.forEach(b=>{if(b.layer===a.layer+1){const dx=a.x-b.x,dy=a.y-b.y,d=Math.sqrt(dx*dx+dy*dy);if(d<W()*.35)c.push({a,b,pulsePos:Math.random(),pulseSpeed:.003+Math.random()*.004,active:Math.random()>.2});}});});return c;};
    let conns=buildConns(nodes);
    const sparks=Array.from({length:35},()=>({x:Math.random()*W(),y:Math.random()*H(),vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1+.3,a:Math.random()*.3+.05}));
    const draw=()=>{
      ctx.clearRect(0,0,W(),H()); time+=.016;
      const rgb=hexToRgb(theme.primary),rgb2=hexToRgb(theme.secondary||theme.accent);
      sparks.forEach(p=>{p.x+=p.vx;p.y+=p.vy;if(p.x<0)p.x=W();if(p.x>W())p.x=0;if(p.y<0)p.y=H();if(p.y>H())p.y=0;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(${rgb},${p.a*.5})`;ctx.fill();});
      nodes.forEach(n=>{n.pulse+=n.pulseSpeed;n.activationPhase+=.012;n.x=Math.max(20,Math.min(W()-20,n.baseX+Math.sin(time*.3+n.pulse)*20));n.y=Math.max(20,Math.min(H()-20,n.baseY+Math.cos(time*.25+n.pulse)*14));});
      conns.forEach(c=>{if(!c.active)return;c.pulsePos+=c.pulseSpeed;if(c.pulsePos>1)c.pulsePos=0;const a=.07+.05*Math.sin(time*1.5+c.pulsePos*Math.PI);const g=ctx.createLinearGradient(c.a.x,c.a.y,c.b.x,c.b.y);g.addColorStop(0,`rgba(${rgb},${a})`);g.addColorStop(.5,`rgba(${rgb2},${a*1.6})`);g.addColorStop(1,`rgba(${rgb},${a})`);ctx.beginPath();ctx.moveTo(c.a.x,c.a.y);ctx.lineTo(c.b.x,c.b.y);ctx.strokeStyle=g;ctx.lineWidth=.9;ctx.stroke();const px=c.a.x+(c.b.x-c.a.x)*c.pulsePos,py=c.a.y+(c.b.y-c.a.y)*c.pulsePos;ctx.beginPath();ctx.arc(px,py,2.5,0,Math.PI*2);ctx.fillStyle=`rgba(${rgb},.9)`;ctx.fill();ctx.beginPath();ctx.arc(px,py,6,0,Math.PI*2);ctx.fillStyle=`rgba(${rgb},.12)`;ctx.fill();});
      nodes.forEach(n=>{const glow=.5+.5*Math.sin(n.pulse),act=.5+.5*Math.sin(n.activationPhase);ctx.beginPath();ctx.arc(n.x,n.y,n.r*5,0,Math.PI*2);ctx.fillStyle=`rgba(${rgb},${.03*glow})`;ctx.fill();ctx.beginPath();ctx.arc(n.x,n.y,n.r*2.8,0,Math.PI*2);ctx.fillStyle=`rgba(${rgb},${.08*glow})`;ctx.fill();const ng=ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r*1.8);if(n.active){ng.addColorStop(0,`rgba(${rgb2},${.95*act})`);ng.addColorStop(1,`rgba(${rgb},${.4*act})`);}else{ng.addColorStop(0,`rgba(${rgb},.35)`);ng.addColorStop(1,`rgba(${rgb},.1)`);}ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fillStyle=ng;ctx.fill();ctx.beginPath();ctx.arc(n.x,n.y,n.r+1.2,0,Math.PI*2);ctx.strokeStyle=`rgba(${rgb},${.7*glow})`;ctx.lineWidth=.9;ctx.stroke();});
      if(Math.random()<.008){const n1=nodes[Math.floor(Math.random()*nodes.length)],n2=nodes[Math.floor(Math.random()*nodes.length)];if(n1!==n2){ctx.beginPath();ctx.moveTo(n1.x,n1.y);ctx.lineTo(n2.x,n2.y);ctx.strokeStyle=`rgba(${rgb},.3)`;ctx.lineWidth=1.2;ctx.stroke();}}
      animId=requestAnimationFrame(draw);
    };
    draw();
    const hr=()=>{nodes=buildNodes();conns=buildConns(nodes);};
    window.addEventListener('resize',hr);
    return()=>{cancelAnimationFrame(animId);window.removeEventListener('resize',resize);window.removeEventListener('resize',hr);};
  },[theme]);
  return <canvas ref={canvasRef} style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',opacity}} />;
}

/* ── REVEAL with stagger ── */
export function Reveal({ children, delay = 0, className = '', y = 28, x = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: .65, delay, ease: [.22, 1, .36, 1] }}
      className={className}
    >{children}</motion.div>
  );
}

/* ── COUNTER ── */
export function Counter({ target, suffix = '', prefix = '', decimals = 0, color, size = 48 }) {
  const { theme } = useTheme();
  const c = color || theme.primary;
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: .3 });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    let st = null; const dur = 2000, at = target * (decimals ? 10 : 1);
    const step = ts => { if (!st) st = ts; const p = Math.min((ts - st) / dur, 1), e = 1 - Math.pow(1 - p, 3); setCount(decimals ? parseFloat(((e * at) / 10).toFixed(decimals)) : Math.floor(e * at)); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [started, target, decimals]);
  return (
    <div ref={ref} style={{ fontFamily: "'Outfit',sans-serif", fontSize: size, lineHeight: 1, color: c, fontWeight: 800, textShadow: `0 0 24px ${c}66` }}>
      {prefix}{decimals ? count.toFixed(decimals) : count}{suffix}
    </div>
  );
}

/* ── PAGE HERO ── */
export function PageHero({ eyebrow, title, highlight, subtitle, accentColor }) {
  const { theme } = useTheme();
  const c = accentColor || theme.primary;
  return (
    <section className="relative overflow-hidden flex items-center justify-center text-center"
      style={{ minHeight: '60vh', padding: 'clamp(80px,10vw,120px) clamp(20px,5vw,60px) clamp(60px,8vw,80px)', background: theme.bg }}>
      <NeuralCanvas opacity={0.6} />
      <div className="absolute pointer-events-none" style={{ top: '-5%', left: '50%', transform: 'translateX(-50%)', width: 'min(700px,90vw)', height: '60vh', background: `radial-gradient(ellipse,${c}20 0%,transparent 65%)` }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `linear-gradient(${c}05 1px,transparent 1px),linear-gradient(90deg,${c}05 1px,transparent 1px)`, backgroundSize: '60px 60px' }} />
      <motion.div initial={{ opacity: 0, y: -28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [.22, 1, .36, 1] }}
        className="relative z-[2] w-full" style={{ maxWidth: 860 }}>
        <motion.div initial={{ opacity: 0, scale: .85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .5 }}
          className="tag-pill mb-7">
          <span className="animate-pulse-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: c, flexShrink: 0 }} />
          {eyebrow}
        </motion.div>
        <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(36px,7vw,78px)', lineHeight: .96, fontWeight: 700, letterSpacing: '-0.02em', color: theme.textPrimary, marginBottom: 20 }}>
          {title}{' '}
          {highlight && <span style={{ color: c, textShadow: `0 0 32px ${c}55` }}>{highlight}</span>}
        </h1>
        {subtitle && <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 'clamp(14px,2vw,17px)', color: theme.textMuted, maxWidth: 560, margin: '0 auto', lineHeight: 1.8 }}>{subtitle}</p>}
      </motion.div>
    </section>
  );
}

/* ── GRAD TEXT (solid color, safe from glitch) ── */
export function GradText({ children, gradient, className = '', tag = 'span', style = {} }) {
  const { theme } = useTheme();
  const Tag = tag;
  // Use solid primary color — NO webkit-background-clip which causes rectangle flash
  return (
    <Tag className={className} style={{ color: theme.primary, textShadow: `0 0 28px ${theme.primary}55`, ...style }}>
      {children}
    </Tag>
  );
}

/* ── TEAM AVATAR ── */
export function TeamAvatar({ member, size = 80 }) {
  const { theme } = useTheme();
  if (member.image) {
    return <img src={`/images/team/${member.image}`} alt={member.name}
      style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${theme.primary}55`, boxShadow: `0 0 20px ${theme.primary}44` }} />;
  }
  return (
    <div style={{ width: size, height: size, borderRadius: '50%', background: member.gradient || theme.grad, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, color: '#fff', fontSize: size * .32, boxShadow: `0 4px 20px ${theme.primary}44`, flexShrink: 0 }}>
      {member.initials}
    </div>
  );
}

/* ── MODAL ── */
export function Modal({ isOpen, onClose, children }) {
  const { theme } = useTheme();
  useEffect(() => { const h = e => { if (e.key === 'Escape') onClose(); }; window.addEventListener('keydown', h); return () => window.removeEventListener('keydown', h); }, [onClose]);
  if (!isOpen) return null;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,.88)', backdropFilter: 'blur(16px)' }}>
      <motion.div initial={{ scale: .88, opacity: 0, y: 24 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: .88, opacity: 0, y: 24 }}
        transition={{ duration: .35, ease: [.22, 1, .36, 1] }}
        className="w-full flex flex-col overflow-hidden"
        style={{ maxWidth: 720, maxHeight: '92vh', borderRadius: 22, background: theme.bg3, border: `1px solid ${theme.borderColor}`, boxShadow: `0 0 80px ${theme.primary}22, 0 40px 80px rgba(0,0,0,.6)` }}>
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ── GLOW CARD ── */
export function GlowCard({ children, style = {}, hoverColor, onClick, padding = '28px' }) {
  const { theme } = useTheme();
  const [hov, setHov] = useState(false);
  const gc = hoverColor || theme.primary;
  return (
    <motion.div whileHover={{ y: -6 }} onHoverStart={() => setHov(true)} onHoverEnd={() => setHov(false)} onClick={onClick}
      style={{ borderRadius: 20, background: hov ? theme.bgCardHover : theme.bgCard, border: `1px solid ${hov ? gc + '44' : theme.borderSubtle}`, boxShadow: hov ? `0 12px 40px ${gc}28` : 'none', transition: 'all .3s', cursor: onClick ? 'pointer' : 'default', overflow: 'hidden', padding, ...style }}>
      {children}
    </motion.div>
  );
}

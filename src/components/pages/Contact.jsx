import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, PageHero, GradText } from '../ui/UIComponents';
import { CONTACT_INFO } from '../../data/data';
import { useTheme } from '../../context/ThemeContext';

const SERVICES_LIST = [
  'Data Scraping & Bot Development',
  'AI Assistants & Chatbots',
  'RAG Systems',
  'NLP Systems',
  'Automation Bots & Workflows',
  'Model Training (ML/DL)',
  'Computer Vision',
  'Predictive Models',
  'Recommendation Systems',
  'Full Stack Web Development',
  'SaaS Development',
  'ERP & Business Applications',
  'Mobile Applications',
  'Graphic Design & Video',
  'Virtual Assistant Services',
  'Custom Solution (Describe in message)',
  'Final year project',
  'Not sure — need advice',
];
const BUDGETS = ['< $500', '$1K – $2K', '$3K – $4K', '$5K – $6K', '$8K+', 'Let\'s discuss'];
const TIMELINES = ['ASAP', 'Within 1 month', '1–3 months', 'Flexible'];
const EMPTY = { name: '', email: '', company: '', phone: '', service: '', budget: '', timeline: '', message: '' };

function Field({ label, id, type = 'text', value, onChange, placeholder, required, error, theme }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="mb-4">
      <label className="block font-display font-semibold tracking-[.06em] mb-1.5" style={{ fontSize: 12, color: theme.textFaint }}>
        {label}{required && <span className="ml-0.5" style={{ color: theme.primary }}>*</span>}
      </label>
      <input type={type} value={value} placeholder={placeholder} required={required}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        onChange={e => onChange(id, e.target.value)}
        className="w-full rounded-[10px] font-body text-sm outline-none transition-all duration-200"
        style={{ padding: '11px 14px', border: `1px solid ${error ? 'rgba(244,63,94,0.44)' : focused ? `${theme.primary}66` : theme.borderSubtle}`, background: focused ? `${theme.primary}08` : theme.bgCard, color: theme.textPrimary }} />
      {error && <div className="font-body text-xs mt-1" style={{ color: '#f43f5e' }}>{error}</div>}
    </div>
  );
}

function Select({ label, id, value, onChange, options, placeholder, theme }) {
  return (
    <div className="mb-4">
      <label className="block font-display font-semibold tracking-[.06em] mb-1.5" style={{ fontSize: 12, color: theme.textFaint }}>{label}</label>
      <select value={value} onChange={e => onChange(id, e.target.value)}
        className="w-full rounded-[10px] font-body text-sm outline-none transition-all duration-200 cursor-pointer"
        style={{ padding: '11px 14px', border: `1px solid ${theme.borderSubtle}`, background: theme.bgCard, color: value ? theme.textPrimary : theme.textFaint }}>
        <option value="">{placeholder}</option>
        {options.map(o => <option key={o} value={o} style={{ background: theme.bg3, color: theme.textPrimary }}>{o}</option>)}
      </select>
    </div>
  );
}

function PillSelect({ label, id, value, onChange, options, theme }) {
  return (
    <div className="mb-4">
      <label className="block font-display font-semibold tracking-[.06em] mb-2" style={{ fontSize: 12, color: theme.textFaint }}>{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map(o => (
          <button key={o} type="button" onClick={() => onChange(id, o)}
            className="font-display font-semibold rounded-[8px] transition-all duration-200"
            style={{ padding: '7px 14px', fontSize: 12, color: value === o ? '#fff' : theme.textMuted, background: value === o ? `linear-gradient(135deg,${theme.primary},${theme.secondary})` : 'rgba(255,255,255,.04)', border: `1px solid ${value === o ? 'transparent' : 'rgba(255,255,255,.08)'}` }}>
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  const { theme } = useTheme();
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const update = (id, value) => {
    setForm(f => ({ ...f, [id]: value }));
    if (errors[id]) setErrors(e => ({ ...e, [id]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.message.trim() || form.message.length < 20) e.message = 'Please describe your project (min 20 chars)';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `Name: ${form.name}
    Email: ${form.email}
    Company: ${form.company}
    Phone: ${form.phone}
    Service: ${form.service}
    Budget: ${form.budget}
    Timeline: ${form.timeline}
    Message: ${form.message}`;

  const encodedMessage = encodeURIComponent(message);

  // WhatsApp number WITHOUT +
  const phone = "923246664914";

  // Open WhatsApp with pre-filled message
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");

  // optional success UI
  setStatus('success');
  setForm(EMPTY);
};
  return (
    <>
      <PageHero
        eyebrow="FREE 45-MIN CONSULTATION · NO OBLIGATION"
        title="LET'S BUILD YOUR"
        highlight="AI ADVANTAGE"
        subtitle="Tell us about your project. We respond within 12 hours with a clear plan — not a pitch deck."
      />

      <section className="relative" style={{ background: theme.bg, padding: 'clamp(48px,6vw,60px) clamp(16px,5vw,40px) clamp(60px,8vw,100px)' }}>
        <div className="line-top" />
        <div className="grid gap-[clamp(36px,6vw,56px)]" style={{ maxWidth: 1100, margin: '0 auto', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))' }}>

          {/* Left column */}
          <div>
            <Reveal>
              <div className="font-display font-semibold tracking-[.12em] mb-3.5" style={{ fontSize: 11, color: theme.primary }}>◆ GET IN TOUCH</div>
              <h2 className="section-h2 mb-4">LET'S <GradText gradient={theme.grad}>TALK</GradText></h2>
              <p className="font-body leading-[1.8] mb-8" style={{ fontSize: 'clamp(13px,2vw,15px)', color: theme.textMuted }}>
                Whether you have a defined project or just want to explore what's possible — we're happy to have an honest conversation. No sales pressure, just good advice.
              </p>
            </Reveal>

            {/* Contact options */}
            <Reveal delay={.1}>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  { icon: '✉', label: 'Email Us', value: CONTACT_INFO.email, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_INFO.email}`, color: theme.primary, sub: 'Response within 24 hours' },
                  { icon: '💬', label: 'WhatsApp', value: 'Chat with us instantly', href: CONTACT_INFO.whatsapp, color: '#25D366', sub: 'Fastest response channel' },
                  { icon: '📅', label: 'Book a Call', value: 'Pick a time on Calendly', href: CONTACT_INFO.calendly, color: theme.secondary, sub: 'Free 45-min consultation' },
                ].map(({ icon, label, value, href, color, sub }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3.5 no-underline transition-all duration-200 rounded-xl p-4 group"
                    style={{ background: theme.bgCard, border: `1px solid ${theme.borderSubtle}` }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = color + '44'; e.currentTarget.style.boxShadow = `0 4px 20px ${color}22`; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = theme.borderSubtle; e.currentTarget.style.boxShadow = 'none'; }}>
                    <div className="w-10 h-10 rounded-[10px] flex items-center justify-center text-lg flex-shrink-0" style={{ background: color + '18', border: `1px solid ${color}33` }}>{icon}</div>
                    <div className="flex-1">
                      <div className="font-display font-bold text-[13px]" style={{ color: theme.textPrimary }}>{label}</div>
                      <div className="font-body text-[12px]" style={{ color: theme.textMuted }}>{value}</div>
                      <div className="font-body text-[11px] mt-0.5" style={{ color: color }}>{sub}</div>
                    </div>
                    <div className="font-body text-[16px] opacity-40 group-hover:opacity-100 transition-opacity" style={{ color }}>→</div>
                  </a>
                ))}
              </div>
            </Reveal>

            {/* Trust badges */}
            <Reveal delay={.2}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '🔒', text: 'NDA Signed on Request' },
                  { icon: '⚡', text: '24hr Response Guaranteed' },
                  { icon: '🎯', text: 'No Long-Term Lock-in' },
                  { icon: '📋', text: 'Written Audit Report Included' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-2 p-3 rounded-[10px]" style={{ background: theme.bgCard, border: `1px solid ${theme.borderSubtle}` }}>
                    <span style={{ fontSize: 16 }}>{icon}</span>
                    <span className="font-body text-[12px]" style={{ color: theme.textMuted }}>{text}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right column — form */}
          <Reveal delay={.15}>
            <div className="relative rounded-[24px] overflow-hidden" style={{ padding: 'clamp(24px,4vw,36px)', background: theme.bgCard, border: `1px solid ${theme.borderSubtle}` }}>
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg,transparent,${theme.primary},${theme.secondary},transparent)` }} />

              <div className="mb-6">
                <div className="font-display font-extrabold mb-1.5" style={{ fontSize: 18, color: theme.textPrimary }}>Start Your Project</div>
                <div className="font-body text-[13px]" style={{ color: theme.textMuted }}>Fill in the details below and we'll come back with a plan within 24 hours.</div>
              </div>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div key="success" initial={{ opacity: 0, scale: .95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div style={{ fontSize: 48 }}>✅</div>
                    <div className="font-display font-extrabold mt-4 mb-2" style={{ fontSize: 20, color: theme.textPrimary }}>Message Received!</div>
                    <p className="font-body text-[14px]" style={{ color: theme.textMuted }}>We'll review your project and respond within 24 hours with a clear plan.</p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit}>
                    <div className="grid gap-0" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))' }}>
                      <Field label="Full Name" id="name" value={form.name} onChange={update} placeholder="John Smith" required error={errors.name} theme={theme} />
                      <div style={{ width: 16 }} />
                      <Field label="Work Email" id="email" type="email" value={form.email} onChange={update} placeholder="you@company.com" required error={errors.email} theme={theme} />
                    </div>
                    <div className="grid gap-0" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))' }}>
                      <Field label="Company Name" id="company" value={form.company} onChange={update} placeholder="Acme Corp" theme={theme} />
                      <div style={{ width: 16 }} />
                      <Field label="Phone / WhatsApp" id="phone" value={form.phone} onChange={update} placeholder="+1 555 000 0000" theme={theme} />
                    </div>
                    <Select label="Service Interested In" id="service" value={form.service} onChange={update} options={SERVICES_LIST} placeholder="Select a service..." theme={theme} />
                    <PillSelect label="Project Budget" id="budget" value={form.budget} onChange={update} options={BUDGETS} theme={theme} />
                    <PillSelect label="Timeline" id="timeline" value={form.timeline} onChange={update} options={TIMELINES} theme={theme} />
                    <div className="mb-5">
                      <label className="block font-display font-semibold tracking-[.06em] mb-1.5" style={{ fontSize: 12, color: theme.textFaint }}>
                        Project Description <span style={{ color: theme.primary }}>*</span>
                      </label>
                      <textarea value={form.message} placeholder="Tell us about your project, the problem you're trying to solve, and what success looks like..." required
                        onChange={e => update('message', e.target.value)} rows={4}
                        className="w-full rounded-[10px] font-body text-sm outline-none transition-all duration-200 resize-none"
                        style={{ padding: '11px 14px', border: `1px solid ${errors.message ? 'rgba(244,63,94,0.44)' : theme.borderSubtle}`, background: theme.bgCard, color: theme.textPrimary }} />
                      {errors.message && <div className="font-body text-xs mt-1" style={{ color: '#f43f5e' }}>{errors.message}</div>}
                    </div>

                    <motion.button type="submit" disabled={status === 'loading'} whileHover={{ y: -2 }} whileTap={{ scale: .97 }}
                      className="w-full py-4 rounded-[12px] font-display font-extrabold tracking-[.04em] text-[15px] text-white transition-all duration-200 relative overflow-hidden"
                      style={{ background: `linear-gradient(135deg,${theme.primary},${theme.secondary})`, boxShadow: `0 6px 24px ${theme.primary}44`, opacity: status === 'loading' ? 0.7 : 1 }}>
                      {status === 'loading' ? 'Sending...' : 'Send My Project Details →'}
                    </motion.button>

                    {status === 'error' && (
                      <div className="mt-3 text-center font-body text-[13px]" style={{ color: '#f43f5e' }}>Something went wrong. Please try WhatsApp or email directly.</div>
                    )}

                    <div className="mt-4 text-center font-body text-[12px]" style={{ color: theme.textFaint }}>
                      Or reach us directly on{' '}
                      <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="no-underline font-semibold" style={{ color: '#25D366' }}>WhatsApp</a>
                      {' '}for instant response.
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative" style={{ background: theme.bg2, padding: 'clamp(56px,8vw,80px) clamp(16px,5vw,40px)' }}>
        <div className="line-top" />
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Reveal className="text-center mb-[clamp(32px,4vw,48px)]">
            <div className="font-display font-semibold tracking-[.12em] mb-3.5" style={{ fontSize: 11, color: theme.secondary }}>◆ FAQ</div>
            <h2 className="section-h2">COMMON <GradText gradient={theme.grad}>QUESTIONS</GradText></h2>
          </Reveal>
          {[
            { q: 'How fast can you start?', a: 'Most projects begin within 3-7 business days of signing. Discovery and audit start immediately.' },
            { q: 'Do I own the code and models?', a: 'Yes. 100%. All source code, model weights and documentation are transferred to you on delivery. No vendor lock-in.' },
            { q: 'What if my project scope changes?', a: 'We work in 2-week sprints with a change request process. Scope changes are normal and we handle them professionally without surprise invoices.' },
            { q: 'Do you sign NDAs?', a: 'Yes, before any discovery call. Your business information is always protected.' },
            { q: "What's included in the free consultation?", a: 'A 45-minute call where we map your top automation opportunities, estimate potential ROI and give you a written summary of the next steps. It is free, no strings attached.' },
          ].map((item, i) => (
            <Reveal key={i} delay={i * .07}>
              <div className="mb-4 rounded-[14px] p-[clamp(16px,3vw,22px)]" style={{ background: theme.bgCard, border: `1px solid ${theme.borderSubtle}` }}>
                <div className="font-display font-bold mb-2" style={{ fontSize: 'clamp(13px,2vw,15px)', color: theme.textPrimary }}>{item.q}</div>
                <p className="font-body text-[13.5px] leading-[1.75]" style={{ color: theme.textMuted }}>{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

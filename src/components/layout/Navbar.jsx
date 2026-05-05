import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "../../data/data";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const location = useLocation();
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoHov, setLogoHov] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Sticky Nav */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="sticky top-0 z-[200] transition-all duration-300"
        style={{
          background: scrolled ? theme.navBgScroll : theme.navBg,
          backdropFilter: "blur(20px) saturate(180%)",
          borderBottom: `1px solid ${scrolled ? theme.navBorder : theme.borderSubtle}`,
          boxShadow: scrolled
            ? `0 4px 30px rgba(0,0,0,.4),0 0 0 0.5px ${theme.primary}15`
            : "none",
        }}
      >
        <div
          className="max-container flex items-center justify-between transition-all duration-300"
          style={{
            padding: "0 clamp(16px,4vw,48px)",
            height: scrolled ? 60 : 70,
          }}
        >
          {/* LEFT SIDE LOGO */}
          <Link to="/" className="flex items-center gap-2 no-underline">
            <img
              src="/images/logo.png"
              alt="Scrapix AI"
              style={{ height: 80,  filter: "brightness(1.3)" }}
            onMouseEnter={e => {
                  e.currentTarget.style.filter = `brightness(1.55) drop-shadow(0 0 24px ${theme.primary})`;
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.filter = `brightness(1.3) drop-shadow(0 0 14px ${theme.primary}77)`;
                  e.currentTarget.style.transform = 'scale(1)';
                }}
            />
          </Link>{" "}
          {/* Desktop links */}
          <ul className="desktop-nav-links items-center gap-0.5 list-none p-0 m-0 flex-nowrap">
            {NAV_LINKS.map(({ label, path }) => {
              const active = location.pathname === path;
              return (
                <li key={path} className="relative">
                  <Link
                    to={path}
                    className="block px-3 py-1.5 rounded-lg font-display text-[13.5px] no-underline whitespace-nowrap transition-all duration-200 relative"
                    style={{
                      fontWeight: active ? 700 : 500,
                      color: active ? theme.primary : theme.textMuted,
                      background: active ? `${theme.primary}14` : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!active) {
                        e.currentTarget.style.color = theme.textPrimary;
                        e.currentTarget.style.background = theme.bgCard;
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!active) {
                        e.currentTarget.style.color = theme.textMuted;
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {label}
                    {active && (
                      <span
                        className="absolute bottom-[3px] left-2 right-2 h-0.5 rounded"
                        style={{
                          background: `linear-gradient(90deg,${theme.primary},${theme.accent})`,
                          boxShadow: `0 0 8px ${theme.primary}`,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Desktop CTA */}
          <div className="desktop-nav-cta">
            <motion.div
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="https://wa.me/923246664914"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden block no-underline whitespace-nowrap rounded-[10px] font-display font-bold text-[13px] tracking-[.03em] px-[22px] py-[9px]"
                style={{
                  background: theme.grad,
                  color: theme.btnText,
                  boxShadow: `0 4px 18px ${theme.primary}44`,
                }}
              >
                <span className="shimmer-layer" />
                💬 Book Free Consultation
              </Link>
            </motion.div>
          </div>
          {/* Mobile hamburger */}
          <div
            className="mobile-nav-bar items-center justify-end w-full"
            style={{ display: "none" }}
          >
            <motion.button
              onClick={() => setMenuOpen((v) => !v)}
              whileTap={{ scale: 0.92 }}
              aria-label="Open menu"
              className="w-[42px] h-[42px] rounded-xl flex flex-col items-center justify-center gap-[5px] cursor-pointer transition-all duration-300 flex-shrink-0"
              style={{
                background: menuOpen ? `${theme.primary}22` : theme.bgCard,
                border: `1px solid ${menuOpen ? theme.primary + "44" : theme.borderSubtle}`,
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{
                    width: menuOpen && i === 1 ? 0 : 20,
                    opacity: menuOpen && i === 1 ? 0 : 1,
                    rotate: menuOpen ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
                    y: menuOpen ? (i === 0 ? 7 : i === 2 ? -7 : 0) : 0,
                    backgroundColor: menuOpen ? theme.primary : theme.textMuted,
                  }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="block h-[2.5px] rounded"
                  style={{ transformOrigin: "center" }}
                />
              ))}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="bd"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 z-[180]"
              style={{
                background: "rgba(0,0,0,.75)",
                backdropFilter: "blur(6px)",
              }}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[190] flex flex-col overflow-hidden"
              style={{
                width: "min(300px,80vw)",
                background: theme.bg3,
                borderLeft: `1px solid ${theme.borderColor}`,
                boxShadow: `-20px 0 60px rgba(0,0,0,.6),0 0 40px ${theme.primary}11`,
              }}
            >
              <div
                className="flex items-center justify-between px-[18px] py-[18px] pb-[14px]"
                style={{
                  borderBottom: `1px solid ${theme.borderSubtle}`,
                  background: theme.bg3,
                }}
              >
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 no-underline"
                >
                  <img
                    src="/images/logo.png"
                    alt="Scrapix AI"
                    style={{
                      height: 36,
                      mixBlendMode: "screen",
                      filter: "brightness(1.3)",
                    }}
                  />
                  <span
                    className="font-heading text-[19px]"
                    style={{
                      backgroundImage: theme.grad,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    SCRAPIX AI
                  </span>
                </Link>
                <motion.button
                  whileTap={{ scale: 0.9, rotate: 90 }}
                  onClick={() => setMenuOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[17px] cursor-pointer"
                  style={{
                    background: theme.bgCard,
                    border: `1px solid ${theme.borderSubtle}`,
                    color: theme.textMuted,
                  }}
                >
                  ✕
                </motion.button>
              </div>
              <div className="flex-1 overflow-y-auto p-2.5 flex flex-col gap-1">
                {NAV_LINKS.map(({ label, path }, i) => {
                  const active = location.pathname === path;
                  return (
                    <motion.div
                      key={path}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        to={path}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-[13px] rounded-xl no-underline transition-all duration-200 font-display text-[15px] tracking-[.02em]"
                        style={{
                          fontWeight: active ? 700 : 500,
                          color: active ? theme.primary : theme.textSecondary,
                          background: active
                            ? `${theme.primary}15`
                            : "transparent",
                          border: `1px solid ${active ? theme.primary + "33" : "transparent"}`,
                        }}
                      >
                        <span
                          className="font-heading text-[12px] w-[18px] flex-shrink-0"
                          style={{ color: `${theme.primary}66` }}
                        >
                          {String(i + 1).padStart(2, "00")}
                        </span>
                        {label}
                        {active && (
                          <span
                            className="ml-auto text-xs"
                            style={{ color: theme.primary }}
                          >
                            ●
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
                className="p-3.5 flex flex-col gap-2"
                style={{ borderTop: `1px solid ${theme.borderSubtle}` }}
              >
                <Link
                  to="https://wa.me/923246664914"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center rounded-xl no-underline font-display font-extrabold text-sm tracking-[.04em] py-[13px]"
                  style={{
                    background: theme.grad,
                    color: theme.btnText,
                    boxShadow: `0 4px 20px ${theme.primary}44`,
                  }}
                >
                  💬 WhatsApp Us →
                </Link>
                <p
                  className="text-center font-body text-[11px]"
                  style={{ color: theme.textFaint }}
                >
                  Tap outside to close
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

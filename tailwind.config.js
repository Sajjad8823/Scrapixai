/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // body text — warm, modern, highly readable
        body:    ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        // display — bold headings, numbers, stats
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        // section titles — tech-forward, clean
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        // code tags, tech badges
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
      },
      animation: {
        'float':      'floatY 3s ease-in-out infinite',
        'pulse-dot':  'pulseDot 2s ease infinite',
        'fade-up':    'fadeInUp .6s ease forwards',
        'scale-in':   'scaleIn .5s ease forwards',
        'glow':       'glowPulse 2.5s ease infinite',
        'shimmer':    'shimmerX 2.5s ease-in-out infinite',
      },
      screens: {
        'xs': '380px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

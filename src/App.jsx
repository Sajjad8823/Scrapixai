import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ThemeSwitcher from './components/ui/ThemeSwitcher';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import CaseStudies from './components/pages/CaseStudies';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Team from './components/pages/Team';
import Process from './components/pages/Process';
import Contact from './components/pages/Contact';

function AppInner() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <ThemeSwitcher />
      <main>
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/services"     element={<Services />} />
          <Route path="/portfolio"    element={<Portfolio />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog"         element={<Blog />} />
          <Route path="/blog/:slug"   element={<Blog />} />
          <Route path="/about"        element={<About />} />
          <Route path="/team"         element={<Team />} />
          <Route path="/process"      element={<Process />} />
          <Route path="/contact"      element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

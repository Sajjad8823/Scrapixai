import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // instant jump - no smooth scroll so page feels snappy on navigation
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

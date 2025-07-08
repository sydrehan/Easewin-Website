// src/components/ScrollToAnchor.jsx

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToAnchor() {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.pathname === '/') {
      if (location.hash) {
        lastHash.current = location.hash;
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    } else {
        window.scrollTo(0, 0); // Always scroll to top on new pages
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor;
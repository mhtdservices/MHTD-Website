import { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from './common/Icons';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <m.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          onClick={scrollUp}
          aria-label="Retour en haut"
          className="scroll-to-top-btn"
        >
          <FaArrowUp />
        </m.button>
      )}
    </AnimatePresence>
  );
}


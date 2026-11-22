import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import Home from './components/home/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import { LazyMotion, domAnimation, AnimatePresence, m } from 'framer-motion';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import MobileBottomBar from './components/MobileBottomBar';

// Code-split secondary routes and below-the-fold components
const Footer = lazy(() => import('./components/Footer'));
const Contact = lazy(() => import('./components/contact/Contacts'));
const ProductDetails = lazy(() => import('./components/home/ProductDetails'));
const WarrantyPolicy = lazy(() => import('./components/policy/WarrantyPolicy'));
const LegalNotice = lazy(() => import('./components/policy/LegalNotice'));

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -12 },
};

const pageTransition = {
  type: 'tween',
  ease: [0.22, 1, 0.36, 1],
  duration: 0.35,
};

function AnimatedPage({ children }) {
  return (
    <m.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </m.div>
  );
}

function PageFallback() {
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Chargement...</span>
      </div>
    </div>
  );
}

function App() {
  const location = useLocation();

  // Scroll to top on page navigation unless navigating to on-page anchors
  useEffect(() => {
    if (!window.location.hash.includes('#solutions') && !window.location.hash.includes('#products')) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname]);

  return (
    <LazyMotion features={domAnimation} strict>
      <Header />
      <NavBar />

      <main id="main-content">
        <AnimatePresence mode="wait" initial={false}>
          <Suspense fallback={<PageFallback />}>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <AnimatedPage>
                    <Home />
                  </AnimatedPage>
                }
              />
              <Route
                path="/contact"
                element={
                  <AnimatedPage>
                    <Contact />
                  </AnimatedPage>
                }
              />
              <Route
                path="/produits/:id"
                element={
                  <AnimatedPage>
                    <ProductDetails />
                  </AnimatedPage>
                }
              />
              <Route
                path="/ProductDetails/:id"
                element={
                  <AnimatedPage>
                    <ProductDetails />
                  </AnimatedPage>
                }
              />
              <Route
                path="/garantie"
                element={
                  <AnimatedPage>
                    <WarrantyPolicy />
                  </AnimatedPage>
                }
              />
              <Route
                path="/WarrantyPolicy"
                element={
                  <AnimatedPage>
                    <WarrantyPolicy />
                  </AnimatedPage>
                }
              />
              <Route
                path="/mentions-legales"
                element={
                  <AnimatedPage>
                    <LegalNotice />
                  </AnimatedPage>
                }
              />
              <Route
                path="/legal"
                element={
                  <AnimatedPage>
                    <LegalNotice />
                  </AnimatedPage>
                }
              />
              {/* Fallback to Home for any unknown route or anchor hash */}
              <Route
                path="*"
                element={
                  <AnimatedPage>
                    <Home />
                  </AnimatedPage>
                }
              />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <ScrollToTop />
      <MobileBottomBar />
    </LazyMotion>
  );
}

export default App;

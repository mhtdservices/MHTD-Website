import './App.css';
import Home from './components/home/Home';
import Contact from './components/contact/Contacts';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ProductDetails from './components/home/ProductDetails';
import WarrantyPolicy from './components/policy/WarrantyPolicy';
import ScrollToTop from './components/ScrollToTop';
import MobileBottomBar from './components/MobileBottomBar';

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
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <>
      {/* Accessibility: skip-to-content link */}
      <a href="#main-content" className="skip-to-content">
        Aller au contenu principal
      </a>

      <Header />
      <NavBar />

      <main id="main-content">
        <AnimatePresence mode="wait">
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
              path="/WarrantyPolicy"
              element={
                <AnimatedPage>
                  <WarrantyPolicy />
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
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
      <ScrollToTop />
      <MobileBottomBar />
    </>
  );
}

export default App;

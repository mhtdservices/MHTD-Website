import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import logo from '../images/mhtd-logo.webp';

function NavBar() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const toggleLanguage = () => {
    const nextLang = isAr ? 'fr' : 'ar';
    i18n.changeLanguage(nextLang);
    localStorage.setItem('mhtd_lang', nextLang);
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = nextLang;
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-custom sticky-top">
        <Container className="d-flex align-items-center justify-content-between">
          {/* Brand Logo */}
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center py-0">
            <img
              src={logo}
              alt="MHTD Services - Énergie Solaire"
              className="navbar-logo"
              width="78"
              height="52"
              style={{ height: '52px', maxHeight: '52px', width: 'auto' }}
            />
          </Navbar.Brand>

          {/* Desktop Navigation (lg and above) */}
          <Nav className={`d-none d-lg-flex ${isAr ? 'me-auto' : 'ms-auto'} align-items-lg-center`}>
            <Nav.Link as={Link} to="/" className="nav-link-custom mx-lg-1">
              {t('nav.home')}
            </Nav.Link>
            <Nav.Link as={HashLink} smooth to="/contact/#contactForm" className="nav-link-custom mx-lg-1">
              {t('nav.consultation')}
            </Nav.Link>
            <NavDropdown title={t('nav.services')} id="desktop-nav-dropdown" className="nav-link-custom mx-lg-1">
              <NavDropdown.Item as={HashLink} smooth to="/#solutions" className="py-2">
                <i className={`fas fa-solar-panel text-warning ${isAr ? 'ms-2' : 'me-2'}`}></i> {t('nav.solutions')}
              </NavDropdown.Item>
              <NavDropdown.Item as={HashLink} smooth to="/#products" className="py-2">
                <i className={`fas fa-store text-primary ${isAr ? 'ms-2' : 'me-2'}`}></i> {t('nav.shop')}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={HashLink} smooth to="/contact/#contactInfo" className="py-2">
                <i className={`fas fa-location-dot text-danger ${isAr ? 'ms-2' : 'me-2'}`}></i> {t('nav.contactLocation')}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/WarrantyPolicy" className="py-2">
                <i className={`fas fa-award text-success ${isAr ? 'ms-2' : 'me-2'}`}></i> {t('nav.warranty')}
              </NavDropdown.Item>
            </NavDropdown>

            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              className="lang-switch-btn mx-lg-2"
              aria-label="Changer de langue / تغيير اللغة"
              title="Changer de langue / تغيير اللغة"
            >
              <i className="fas fa-globe"></i>
              <span>{isAr ? 'Français' : 'العربية'}</span>
            </button>

            {/* Desktop CTA Button */}
            <HashLink
              smooth
              to="/contact/#contactForm"
              className={`navbar-btn-cta ${isAr ? 'me-lg-2' : 'ms-lg-2'} text-center`}
            >
              <i className="fas fa-paper-plane"></i>
              <span>{t('nav.quoteBtn')}</span>
            </HashLink>
          </Nav>

          {/* Mobile Right Controls: Quick Lang Toggle + Animated Hamburger */}
          <div className="d-flex d-lg-none align-items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="lang-switch-btn lang-switch-mobile py-1 px-2"
              aria-label="Changer de langue / تغيير اللغة"
              style={{ fontSize: '0.8rem' }}
            >
              <i className="fas fa-globe"></i>
              <span>{isAr ? 'FR' : 'عربي'}</span>
            </button>

            <button
              type="button"
              className="mobile-hamburger-btn"
              onClick={handleShow}
              aria-label="Ouvrir le menu de navigation"
            >
              <i className="fas fa-bars fa-lg"></i>
            </button>
          </div>
        </Container>
      </Navbar>

      {/* Modern Slide-in Offcanvas Drawer for Mobile */}
      <Offcanvas
        show={showOffcanvas}
        onHide={handleClose}
        placement={isAr ? 'start' : 'end'}
        className="mobile-offcanvas-drawer"
      >
        <Offcanvas.Header closeButton className="border-bottom px-4 py-3">
          <Offcanvas.Title className="d-flex align-items-center">
            <img
              src={logo}
              alt="MHTD Logo"
              width="66"
              height="44"
              style={{ height: '44px', width: 'auto', objectFit: 'contain' }}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="d-flex flex-column justify-content-between p-4">
          <div>
            {/* Language switcher inside drawer */}
            <div className="d-flex justify-content-between align-items-center p-3 mb-4 rounded-3" style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0' }}>
              <div className="d-flex align-items-center gap-2">
                <i className="fas fa-globe text-primary"></i>
                <span className="small fw-semibold text-dark">
                  {isAr ? 'اللغة الحالية:' : 'Langue :'}
                </span>
              </div>
              <button
                onClick={toggleLanguage}
                className="btn btn-sm btn-outline-primary rounded-pill px-3 py-1 fw-bold"
                style={{ fontSize: '0.85rem' }}
              >
                {isAr ? 'Passer en Français 🇫🇷' : 'التحويل للعربية 🇲🇦'}
              </button>
            </div>

            {/* Navigation links list */}
            <div className="mobile-nav-list mb-4">
              <Link
                to="/"
                onClick={handleClose}
                className="mobile-nav-item"
              >
                <div className="mobile-nav-icon-wrap" style={{ backgroundColor: 'rgba(13, 59, 102, 0.08)', color: '#0D3B66' }}>
                  <i className="fas fa-house"></i>
                </div>
                <span>{t('nav.home')}</span>
                <i className={`fas fa-chevron-${isAr ? 'left' : 'right'} ms-auto text-muted small`}></i>
              </Link>

              <HashLink
                smooth
                to="/contact/#contactForm"
                onClick={handleClose}
                className="mobile-nav-item"
              >
                <div className="mobile-nav-icon-wrap" style={{ backgroundColor: 'rgba(243, 156, 18, 0.12)', color: '#F39C12' }}>
                  <i className="fas fa-clipboard-question"></i>
                </div>
                <span>{t('nav.consultation')}</span>
                <i className={`fas fa-chevron-${isAr ? 'left' : 'right'} ms-auto text-muted small`}></i>
              </HashLink>

              <HashLink
                smooth
                to="/#solutions"
                onClick={handleClose}
                className="mobile-nav-item"
              >
                <div className="mobile-nav-icon-wrap" style={{ backgroundColor: 'rgba(39, 174, 96, 0.12)', color: '#27AE60' }}>
                  <i className="fas fa-solar-panel"></i>
                </div>
                <span>{t('nav.solutions')}</span>
                <i className={`fas fa-chevron-${isAr ? 'left' : 'right'} ms-auto text-muted small`}></i>
              </HashLink>

              <HashLink
                smooth
                to="/#products"
                onClick={handleClose}
                className="mobile-nav-item"
              >
                <div className="mobile-nav-icon-wrap" style={{ backgroundColor: 'rgba(52, 152, 219, 0.12)', color: '#2980B9' }}>
                  <i className="fas fa-store"></i>
                </div>
                <span>{t('nav.shop')}</span>
                <i className={`fas fa-chevron-${isAr ? 'left' : 'right'} ms-auto text-muted small`}></i>
              </HashLink>

              <HashLink
                smooth
                to="/contact/#contactInfo"
                onClick={handleClose}
                className="mobile-nav-item"
              >
                <div className="mobile-nav-icon-wrap" style={{ backgroundColor: 'rgba(231, 76, 60, 0.12)', color: '#E74C3C' }}>
                  <i className="fas fa-location-dot"></i>
                </div>
                <span>{t('nav.contactLocation')}</span>
                <i className={`fas fa-chevron-${isAr ? 'left' : 'right'} ms-auto text-muted small`}></i>
              </HashLink>

              <Link
                to="/WarrantyPolicy"
                onClick={handleClose}
                className="mobile-nav-item"
              >
                <div className="mobile-nav-icon-wrap" style={{ backgroundColor: 'rgba(142, 68, 173, 0.12)', color: '#8E44AD' }}>
                  <i className="fas fa-shield-halved"></i>
                </div>
                <span>{t('nav.warranty')}</span>
                <i className={`fas fa-chevron-${isAr ? 'left' : 'right'} ms-auto text-muted small`}></i>
              </Link>
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-3 border-top">
            <HashLink
              smooth
              to="/contact/#contactForm"
              onClick={handleClose}
              className="btn-solar w-100 py-3 text-center mb-3 d-flex align-items-center justify-content-center gap-2"
              style={{ fontSize: '1rem', fontWeight: '700' }}
            >
              <i className="fas fa-paper-plane"></i>
              <span>{t('nav.quoteBtn')}</span>
            </HashLink>

            <div className="d-flex gap-2">
              <a
                href="tel:+212626425469"
                className="btn btn-outline-dark w-50 py-2 d-flex align-items-center justify-content-center gap-2 rounded-3"
                style={{ fontSize: '0.85rem', fontWeight: '600' }}
              >
                <i className="fas fa-phone text-primary"></i>
                <span>{isAr ? 'اتصال' : 'Appeler'}</span>
              </a>

              <a
                href="https://wa.me/212626425469?text=Bonjour%20MHTD,%20je%20souhaite%20un%20renseignement."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success w-50 py-2 d-flex align-items-center justify-content-center gap-2 rounded-3"
                style={{ fontSize: '0.85rem', fontWeight: '600' }}
              >
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NavBar;

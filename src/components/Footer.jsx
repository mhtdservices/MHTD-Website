import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import mhtdlog from '../images/mhtd-logo.webp';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }} className="mt-5">
      <Container className="py-5">
        <Row className="g-4 justify-content-between">
          {/* Brand & Mission */}
          <Col lg={4} md={6}>
            <div className="mb-3">
              <img
                src={mhtdlog}
                alt="MHTD Logo"
                className="footer-logo mb-3"
                width="90"
                height="60"
                style={{ height: '60px', maxHeight: '60px', width: 'auto', objectFit: 'contain' }}
                loading="lazy"
              />
            </div>
            <p className="text-muted small mb-4" style={{ lineHeight: '1.7', maxWidth: '340px' }}>
              {t('footer.desc')}
            </p>
            <div className="d-flex gap-2">
              <a
                href="https://www.facebook.com/mhtdservices?_rdc=1&_rdr"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Facebook MHTD"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://wa.me/212626425469?text=Bonjour%20MHTD,%20je%20souhaite%20un%20renseignement."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="WhatsApp MHTD"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="tel:+212626425469"
                className="footer-social-btn"
                aria-label="Appeler MHTD"
              >
                <i className="fas fa-phone-alt"></i>
              </a>
            </div>
          </Col>

          {/* Navigation Rapide */}
          <Col lg={2} sm={6}>
            <h6 className="fw-bold mb-3 text-uppercase" style={{ color: '#0D3B66', letterSpacing: '0.8px', fontSize: '0.85rem' }}>
              {t('footer.navTitle')}
            </h6>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2">
                <HashLink to="/" className="footer-link">
                  <i className={`fas fa-angle-${isAr ? 'left' : 'right'} ${isAr ? 'ms-1' : 'me-1'}`} style={{ color: '#F39C12' }}></i> {t('nav.home')}
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink smooth to="/contact/#contactForm" className="footer-link">
                  <i className={`fas fa-angle-${isAr ? 'left' : 'right'} ${isAr ? 'ms-1' : 'me-1'}`} style={{ color: '#F39C12' }}></i> {t('nav.consultation')}
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink smooth to="/#solutions" className="footer-link">
                  <i className={`fas fa-angle-${isAr ? 'left' : 'right'} ${isAr ? 'ms-1' : 'me-1'}`} style={{ color: '#F39C12' }}></i> {t('nav.solutions')}
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink smooth to="/#products" className="footer-link">
                  <i className={`fas fa-angle-${isAr ? 'left' : 'right'} ${isAr ? 'ms-1' : 'me-1'}`} style={{ color: '#F39C12' }}></i> {t('nav.shop')}
                </HashLink>
              </li>
              <li className="mb-2">
                <Link to="/WarrantyPolicy" className="footer-link">
                  <i className={`fas fa-angle-${isAr ? 'left' : 'right'} ${isAr ? 'ms-1' : 'me-1'}`} style={{ color: '#F39C12' }}></i> {t('nav.warranty')}
                </Link>
              </li>
            </ul>
          </Col>

          {/* Nos Solutions */}
          <Col lg={3} sm={6}>
            <h6 className="fw-bold mb-3 text-uppercase" style={{ color: '#0D3B66', letterSpacing: '0.8px', fontSize: '0.85rem' }}>
              {t('footer.solutionsTitle')}
            </h6>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2">
                <HashLink smooth to="/#solutions" className="footer-link">
                  {isAr ? "ضخ المياه بالطاقة الشمسية" : "Pompage Solaire Agricole"}
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink smooth to="/#solutions" className="footer-link">
                  {isAr ? "أنظمة السقي الأوتوماتيكي" : "Systèmes d'Arrosage Automatique"}
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink smooth to="/#solutions" className="footer-link">
                  {isAr ? "سخانات الماء بالطاقة الشمسية" : "Chauffe-Eau Solaire (200L / 300L)"}
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink smooth to="/#solutions" className="footer-link">
                  {isAr ? "محطات متصلة بالشبكة (On-Grid)" : "Installation Raccordée (On-Grid)"}
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink smooth to="/#solutions" className="footer-link">
                  {isAr ? "أنظمة شمسية هجينة مع بطاريات" : "Système Solaire Hybride"}
                </HashLink>
              </li>
            </ul>
          </Col>

          {/* Contact Direct */}
          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-3 text-uppercase" style={{ color: '#0D3B66', letterSpacing: '0.8px', fontSize: '0.85rem' }}>
              {t('footer.contactTitle')}
            </h6>
            <ul className="list-unstyled small text-muted mb-0">
              <li className="mb-3 d-flex align-items-start">
                <i className={`fas fa-location-dot mt-1 ${isAr ? 'ms-2' : 'me-2'} text-danger`}></i>
                <span>{isAr ? "حي النصر، سيدي علال البحراوي 15252، المغرب" : "HAY ENNASSER, Sidi Allal el Bahraoui 15252, Maroc"}</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className={`fas fa-phone-alt ${isAr ? 'ms-2' : 'me-2'} text-success`}></i>
                <a href="tel:+212626425469" className="text-decoration-none text-muted" dir="ltr">
                  +212 626425469
                </a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <i className={`fas fa-envelope ${isAr ? 'ms-2' : 'me-2'} text-primary`}></i>
                <a href="mailto:mhtdservices@gmail.com" className="text-decoration-none text-muted" dir="ltr">
                  mhtdservices@gmail.com
                </a>
              </li>
              <li className="d-flex align-items-center">
                <i className={`fas fa-clock ${isAr ? 'ms-2' : 'me-2'} text-warning`}></i>
                <span>{isAr ? "الإثنين - السبت: 08:30 - 18:30" : "Lun - Sam : 08h30 - 18h30"}</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Copyright Bar */}
      <div className="py-3 text-center small border-top" style={{ backgroundColor: '#E2E8F0', color: '#475569' }}>
        <Container className="d-flex flex-wrap justify-content-center align-items-center gap-2">
          <span>MHTD © {currentYear}</span>
          <span className="d-none d-sm-inline">🔥</span>
          <span>
            {' '}
            <a
              style={{ textDecoration: 'none', color: '#0D3B66', fontWeight: '700' }}
              href="https://zakariaz.netlify.app/ar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Zz
            </a>
          </span>
          <span className="d-none d-sm-inline">🔥</span>
          <a
            style={{ textDecoration: 'none', color: '#475569' }}
            href="mailto:zakariazinedine1@gmail.com"
            className="d-flex align-items-center gap-1"
          >
            <i className="fas fa-envelope text-primary"></i>
            {/* <span>zakariazinedine1@gmail.com</span> */}
          </a>
        </Container>
      </div>
    </footer>
  );
}

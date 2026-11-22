import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaAngleLeft,
  FaAngleRight,
  FaLocationDot,
  FaEnvelope,
  FaClock
} from './common/Icons';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#F8FAFC', borderTop: '1px solid #E2E8F0' }} className="mt-5">
      <Container className="py-5">
        <Row className="g-4 justify-content-between">
          {/* Brand & Mission */}
          <Col xs={12} md={6} lg={4}>
            <div className="mb-3">
              <img
                src="/mhtd-logo.webp"
                alt="MHTD Logo"
                className="footer-logo mb-3"
                width="90"
                height="60"
                style={{ height: '60px', maxHeight: '60px', width: 'auto', objectFit: 'contain', aspectRatio: '90/60' }}
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
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/212626425469?text=Bonjour%20MHTD,%20je%20souhaite%20un%20renseignement."
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="WhatsApp MHTD"
              >
                <FaWhatsapp />
              </a>
              <a
                href="tel:+212626425469"
                className="footer-social-btn"
                aria-label="Appeler MHTD"
              >
                <FaPhoneAlt />
              </a>
            </div>
          </Col>

          {/* Navigation Rapide */}
          <Col xs={6} sm={6} lg={2}>
            <h6 className="fw-bold mb-3 text-uppercase" style={{ color: '#0D3B66', letterSpacing: '0.8px', fontSize: '0.85rem' }}>
              {t('footer.navTitle')}
            </h6>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2">
                <HashLink to="/" className="footer-link">
                  {isAr ? <FaAngleLeft className="me-1" style={{ color: '#F39C12' }} /> : <FaAngleRight className="me-1" style={{ color: '#F39C12' }} />} {t('nav.home')}
                </HashLink>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="footer-link">
                  {isAr ? <FaAngleLeft className="me-1" style={{ color: '#F39C12' }} /> : <FaAngleRight className="me-1" style={{ color: '#F39C12' }} />} {t('nav.consultation')}
                </Link>
              </li>
              <li className="mb-2">
                <HashLink smooth to="/#solutions" className="footer-link">
                  {isAr ? <FaAngleLeft className="me-1" style={{ color: '#F39C12' }} /> : <FaAngleRight className="me-1" style={{ color: '#F39C12' }} />} {t('nav.solutions')}
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink smooth to="/#products" className="footer-link">
                  {isAr ? <FaAngleLeft className="me-1" style={{ color: '#F39C12' }} /> : <FaAngleRight className="me-1" style={{ color: '#F39C12' }} />} {t('nav.shop')}
                </HashLink>
              </li>
              <li className="mb-2">
                <Link to="/garantie" className="footer-link">
                  {isAr ? <FaAngleLeft className="me-1" style={{ color: '#F39C12' }} /> : <FaAngleRight className="me-1" style={{ color: '#F39C12' }} />} {t('nav.warranty')}
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/mentions-legales" className="footer-link">
                  {isAr ? <FaAngleLeft className="me-1" style={{ color: '#F39C12' }} /> : <FaAngleRight className="me-1" style={{ color: '#F39C12' }} />} {t('footer.legalLink')}
                </Link>
              </li>
            </ul>
          </Col>

          {/* Nos Solutions */}
          <Col xs={6} sm={6} lg={3}>
            <h6 className="fw-bold mb-3 text-uppercase" style={{ color: '#0D3B66', letterSpacing: '0.8px', fontSize: '0.85rem' }}>
              {t('footer.solutionsTitle')}
            </h6>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2">
                <HashLink smooth to="/#solutions" className="footer-link">
                  {isAr ? <FaAngleLeft className="me-1" style={{ color: '#F39C12' }} /> : <FaAngleRight className="me-1" style={{ color: '#F39C12' }} />} {t('footer.sol1')}
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink smooth to="/#solutions" className="footer-link">
                  {isAr ? <FaAngleLeft className="me-1" style={{ color: '#F39C12' }} /> : <FaAngleRight className="me-1" style={{ color: '#F39C12' }} />} {t('footer.sol2')}
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink smooth to="/#solutions" className="footer-link">
                  {isAr ? <FaAngleLeft className="me-1" style={{ color: '#F39C12' }} /> : <FaAngleRight className="me-1" style={{ color: '#F39C12' }} />} {t('footer.sol3')}
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink smooth to="/#solutions" className="footer-link">
                  {isAr ? <FaAngleLeft className="me-1" style={{ color: '#F39C12' }} /> : <FaAngleRight className="me-1" style={{ color: '#F39C12' }} />} {t('footer.sol4')}
                </HashLink>
              </li>
              <li className="mb-2">
                <HashLink smooth to="/#solutions" className="footer-link">
                  {isAr ? <FaAngleLeft className="me-1" style={{ color: '#F39C12' }} /> : <FaAngleRight className="me-1" style={{ color: '#F39C12' }} />} {t('footer.sol5')}
                </HashLink>
              </li>
            </ul>
          </Col>

          {/* Contact Direct */}
          <Col xs={12} md={6} lg={3}>
            <h6 className="fw-bold mb-3 text-uppercase" style={{ color: '#0D3B66', letterSpacing: '0.8px', fontSize: '0.85rem' }}>
              {t('footer.contactTitle')}
            </h6>
            <ul className="list-unstyled small text-muted mb-0">
              <li className="mb-3 d-flex align-items-start">
                <FaLocationDot className="mt-1 me-2 text-danger" />
                <span>{t('footer.address')}</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaPhoneAlt className="me-2 text-success" />
                <a href="tel:+212626425469" className="text-decoration-none text-muted" dir="ltr">
                  +212 626425469
                </a>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaEnvelope className="me-2 text-primary" />
                <a href="mailto:mhtdservices@gmail.com" className="text-decoration-none text-muted" dir="ltr">
                  mhtdservices@gmail.com
                </a>
              </li>
              <li className="d-flex align-items-center">
                <FaClock className="me-2 text-warning" />
                <span>{t('footer.hours')}</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Copyright Bar */}
      <div className="py-3 text-center small border-top" style={{ backgroundColor: '#E2E8F0', color: '#475569' }}>
        <Container className="d-flex flex-wrap justify-content-center align-items-center gap-2">
          <span>MHTD © {currentYear}</span>
          <span className="d-none d-sm-inline">•</span>
          <Link to="/mentions-legales" style={{ textDecoration: 'none', color: '#475569', fontSize: '0.8rem' }}>
            {t('footer.privacyLink')}
          </Link>
          <span className="d-none d-sm-inline">🔥</span>
          <span>
            {' '}
            <a
              style={{ textDecoration: 'none', color: '#0D3B66', fontWeight: '700' }}
              href="https://zakariaz.netlify.app/ar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio Développeur Zakaria Zinedine"
            >
              Zz
            </a>
          </span>
          <span className="d-none d-sm-inline">🔥</span>
          <a
            style={{ textDecoration: 'none', color: '#475569', minWidth: '32px', minHeight: '32px' }}
            href="mailto:zakariazinedine1@gmail.com"
            className="d-flex align-items-center justify-content-center"
            aria-label="Email Développeur Zakaria Zinedine"
          >
            <FaEnvelope className="text-primary" />
          </a>
        </Container>
      </div>
    </footer>
  );
}

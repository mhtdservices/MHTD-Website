import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useParams, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { productsData } from '../../data';
import { FadeInUp } from '../Animations';
import {
  FaBoxOpen,
  FaHouse,
  FaChevronLeft,
  FaChevronRight,
  FaStore,
  FaListCheck,
  FaWhatsapp,
  FaArrowLeft,
  FaArrowRight,
} from '../common/Icons';

export default function ProductDetails() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const product = productsData.find((item) => String(item.id) === String(id));
  const phoneNumber = '212626425469';

  if (!product) {
    return (
      <Container className="py-5 text-center my-5">
        <FadeInUp className="p-5 bg-light rounded-4 shadow-sm mx-auto" style={{ maxWidth: '500px' }}>
          <FaBoxOpen className="fa-3x text-muted mb-3" />
          <h2 className="fw-bold mb-3" style={{ color: '#0D3B66' }}>{t('products.notFoundTitle')}</h2>
          <p className="text-muted mb-4">{t('products.notFoundDesc')}</p>
          <Link to="/" className="btn btn-solar px-4 py-2">
            {t('products.btnBack')}
          </Link>
        </FadeInUp>
      </Container>
    );
  }

  const title = isAr ? (product.title_ar || product.title) : product.title;
  const description = isAr ? (product.discreption_ar || product.discreption) : product.discreption;
  const features = isAr ? (product.featrues_ar || product.featrues) : product.featrues;

  const message = t('products.detailMsg', { title });
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-5" style={{ backgroundColor: '#F8FAFC' }}>
      <Container>
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb-modern">
            <li className="breadcrumb-modern-item">
              <Link to="/" className="breadcrumb-modern-link">
                <FaHouse className="breadcrumb-home-icon" />
                <span>{t('nav.home')}</span>
              </Link>
            </li>
            <li className="breadcrumb-modern-separator" aria-hidden="true">
              {isAr ? <FaChevronLeft /> : <FaChevronRight />}
            </li>
            <li className="breadcrumb-modern-item">
              <HashLink smooth to="/#products" className="breadcrumb-modern-link">
                <FaStore />
                <span>{t('nav.shop')}</span>
              </HashLink>
            </li>
            <li className="breadcrumb-modern-separator" aria-hidden="true">
              {isAr ? <FaChevronLeft /> : <FaChevronRight />}
            </li>
            <li className="breadcrumb-modern-item active" aria-current="page">
              <span className="breadcrumb-modern-current text-truncate" title={title}>
                {title}
              </span>
            </li>
          </ol>
        </nav>

        <FadeInUp>
          <Card className="border-0 shadow-sm rounded-4 overflow-hidden bg-white p-3 p-md-4">
            <Row className="g-4 align-items-center">
              <Col lg={6}>
                <div
                  className="d-flex align-items-center justify-content-center p-4 rounded-4"
                  style={{ backgroundColor: '#F1F5F9', minHeight: '380px' }}
                >
                  <img
                    src={product.imgurl}
                    srcSet={product.imgurl2x ? `${product.imgurl} 500w, ${product.imgurl2x} 1000w` : undefined}
                    sizes="(max-width: 768px) 100vw, 500px"
                    alt={title}
                    className="img-fluid"
                    style={{ maxHeight: '340px', objectFit: 'contain' }}
                    width="500"
                    height="340"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </Col>

              <Col lg={6}>
                <div className={isAr ? "pe-lg-3" : "ps-lg-3"}>
                  <span className="section-badge mb-2">{t('products.badge')}</span>
                  <h1 className="fw-bold mb-3 text-capitalize" style={{ color: '#0D3B66' }}>
                    {title}
                  </h1>

                  <p className="lead text-muted mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                    {description}
                  </p>

                  <div
                    className="p-3 rounded-3 mb-4"
                    style={{
                      backgroundColor: '#F8FAFC',
                      borderInlineStart: '4px solid #F39C12'
                    }}
                  >
                    <h6 className="fw-bold mb-2" style={{ color: '#0D3B66' }}>
                      <FaListCheck className={isAr ? 'ms-2' : 'me-2'} style={{ color: '#F39C12' }} />
                      {t('products.featuresHeader')}
                    </h6>
                    <p className="text-muted small mb-0" style={{ lineHeight: '1.6' }}>
                      {features}
                    </p>
                  </div>

                  <div className="d-flex flex-wrap gap-3 pt-2">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp px-4 py-2"
                    >
                      <FaWhatsapp className="fa-lg" /> {t('products.whatsappOrder')}
                    </a>

                    <Link to="/#products" className="btn btn-outline-secondary px-4 py-2" style={{ borderRadius: '30px' }}>
                      {isAr ? <FaArrowRight className="ms-1" /> : <FaArrowLeft className="me-1" />} {t('products.btnBackShop')}
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </FadeInUp>
      </Container>
    </section>
  );
}

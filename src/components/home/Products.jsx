import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { productsData } from '../../data';
import { FadeInUp, StaggerContainer, staggerChildVariants } from '../Animations';

function Products() {
  const { t, i18n } = useTranslation();
  const phoneNumber = '212626425469';
  const isAr = i18n.language === 'ar';

  return (
    <section id="products" className="py-5 bg-gradient-products">
      <Container>
        <FadeInUp className="text-center mb-5">
          <span className="section-badge">{t('products.badge')}</span>
          <h2 className="fw-bold mb-3" style={{ color: '#0D3B66' }}>
            {t('products.title')}
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '680px' }}>
            {t('products.desc')}
          </p>
        </FadeInUp>

        <StaggerContainer>
          <Row xs={1} md={2} lg={3} className="g-4">
            {productsData.map((product) => {
              const title = isAr ? product.title_ar || product.title : product.title;
              const desc = isAr ? product.discreption_ar || product.discreption : product.discreption;

              const whatsappMsg = isAr
                ? `السلام عليكم MHTD، أود طلب أو الاستفسار عن عرض سعر لمنتج : ${title}.`
                : `Bonjour MHTD, je souhaite commander ou avoir un devis pour : ${title}.`;
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMsg)}`;

              return (
                <Col key={product.id}>
                  <motion.div variants={staggerChildVariants} className="h-100">
                    <Card className="h-100 card-hover-lift bg-white">
                      <div
                        className="img-zoom-container d-flex align-items-center justify-content-center p-3"
                        style={{ height: '220px', backgroundColor: '#F8FAFC' }}
                      >
                        <Card.Img
                          variant="top"
                          src={product.imgurl}
                          alt={title}
                          style={{ maxHeight: '180px', maxWidth: '90%', objectFit: 'contain' }}
                          loading="lazy"
                        />
                      </div>
                      <Card.Body className="d-flex flex-column p-4">
                        <Card.Title className="fw-bold mb-2 text-capitalize" style={{ color: '#0D3B66', fontSize: '1.15rem' }}>
                          {title}
                        </Card.Title>
                        <Card.Text className="text-muted small mb-3 flex-grow-1" style={{ lineHeight: '1.6' }}>
                          {desc}
                        </Card.Text>

                        <div className="d-grid gap-2 pt-2 border-top">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp text-center"
                            style={{ fontSize: '0.85rem' }}
                            aria-label={`Commander ${title} sur WhatsApp`}
                          >
                            <i className="fab fa-whatsapp"></i> {t('products.btnOrder')}
                          </a>
                          <Link
                            to={`/ProductDetails/${product.id}`}
                            className="btn btn-outline-primary btn-sm text-center"
                            style={{ borderRadius: '20px', fontWeight: '500' }}
                          >
                            {t('products.btnDetails')} <i className={`fas ${isAr ? 'fa-arrow-left' : 'fa-arrow-right'} ms-1`}></i>
                          </Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </StaggerContainer>
      </Container>
    </section>
  );
}

export default Products;

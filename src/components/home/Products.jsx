import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { productsData } from '../../data';
import { FadeInUp, StaggerContainer, staggerChildVariants } from '../Animations';

export default function Products() {
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
          <Row xs={1} sm={2} md={3} lg={4} className="g-3 align-items-stretch justify-content-center">
            {productsData.map((product) => {
              const title = isAr ? product.title_ar || product.title : product.title;
              const desc = isAr ? product.discreption_ar || product.discreption : product.discreption;

              const whatsappMsg = isAr
                ? `السلام عليكم MHTD، أود طلب أو الاستفسار عن عرض سعر لمنتج : ${title}.`
                : `Bonjour MHTD, je souhaite commander ou avoir un devis pour : ${title}.`;
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMsg)}`;

              return (
                <Col key={product.id} className="d-flex align-items-stretch">
                  <motion.div variants={staggerChildVariants} className="w-100 h-100 d-flex flex-column">
                    <Card className="h-100 card-hover-lift bg-white w-100 d-flex flex-column justify-content-between shadow-sm">
                      {/* Image container identical to Solutions, scaled down 30% (155px vs 220px) */}
                      <div
                        className="img-zoom-container position-relative d-flex align-items-center justify-content-center"
                        style={{ height: '155px', backgroundColor: '#F8FAFC' }}
                      >
                        <Card.Img
                          variant="top"
                          src={product.imgurl}
                          alt={title}
                          className="w-100 h-100"
                          style={{
                            objectFit: 'contain',
                            maxHeight: '135px',
                            maxWidth: '88%',
                            padding: '6px',
                            aspectRatio: '300/155'
                          }}
                          width="300"
                          height="155"
                          loading="lazy"
                        />
                      </div>

                      {/* Card Body with 30% more compact padding (p-3 vs p-4) and aligned heights */}
                      <Card.Body className="d-flex flex-column p-3 flex-grow-1 justify-content-between">
                        <div>
                          <Card.Title
                            className="fw-bold mb-2 text-capitalize d-flex align-items-center"
                            style={{
                              color: '#0D3B66',
                              fontSize: '0.95rem',
                              minHeight: '2.8rem',
                              lineHeight: '1.35'
                            }}
                          >
                            {title}
                          </Card.Title>

                          <Card.Text
                            className="text-muted small mb-3 flex-grow-1"
                            style={{
                              fontSize: '0.8rem',
                              lineHeight: '1.5',
                              minHeight: '3.6rem',
                              display: '-webkit-box',
                              WebkitLineClamp: 3,
                              WebkitBoxOrient: 'vertical',
                              overflow: 'hidden'
                            }}
                          >
                            {desc}
                          </Card.Text>
                        </div>

                        {/* Action buttons identical in style to Solutions, calibrated 30% smaller */}
                        <div className="d-grid gap-2 pt-2 border-top mt-auto">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp text-center"
                            style={{ fontSize: '0.8rem', padding: '0.4rem 0.6rem' }}
                            aria-label={`Commander ${title} sur WhatsApp`}
                          >
                            <i className="fab fa-whatsapp"></i> {t('products.btnOrder')}
                          </a>
                          <Link
                            to={`/ProductDetails/${product.id}`}
                            className="btn btn-outline-secondary btn-sm text-center"
                            style={{
                              borderRadius: '20px',
                              fontWeight: '500',
                              fontSize: '0.76rem',
                              padding: '0.32rem 0.6rem'
                            }}
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

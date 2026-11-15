import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FadeInUp, StaggerContainer, staggerChildVariants } from "../Animations";
import pompageSolaire from "../../images/pomageSolaire.jpg";
import chauffeEauSolaire from "../../images/chauffeeausolaire.jpg";
import energisSolaire from "../../images/energisSolaire.jpg";
import arrosageAutomatique from "../../images/arrosageAutomatique2.jpg";
import injectionReseau from "../../images/injectionReseau.jpg";
import hybride from "../../images/hybride.jpg";
import { HashLink } from "react-router-hash-link";

const solutionImages = {
  1: pompageSolaire,
  2: chauffeEauSolaire,
  3: energisSolaire,
  4: arrosageAutomatique,
  5: injectionReseau,
  6: hybride,
};

export default function Solutions() {
  const { t, i18n } = useTranslation();
  const phoneNumber = "212626425469";
  const items = t('solutions.items', { returnObjects: true }) || [];

  return (
    <section id="solutions" className="py-5 bg-gradient-solutions">
      <Container>
        <FadeInUp className="text-center mb-5">
          <span className="section-badge">{t('solutions.badge')}</span>
          <h2 className="fw-bold mb-3" style={{ color: "#0D3B66" }}>
            {t('solutions.title')}
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "700px" }}>
            {t('solutions.desc')}
          </p>
        </FadeInUp>

        <StaggerContainer>
          <Row xs={1} md={2} lg={3} className="g-4">
            {items.map((item) => {
              const quoteMessage = i18n.language === 'ar'
                ? `السلام عليكم MHTD، أود الحصول على عرض سعر مجاني لخدمة : ${item.title}.`
                : `Bonjour MHTD, je souhaite un devis gratuit pour la solution : ${item.title}.`;
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(quoteMessage)}`;

              return (
                <Col key={item.id}>
                  <motion.div variants={staggerChildVariants} className="h-100">
                    <Card className="h-100 card-hover-lift bg-white">
                      <div className="img-zoom-container position-relative" style={{ height: "220px" }}>
                        <span className="card-feature-badge">{item.badge}</span>
                        <Card.Img
                          variant="top"
                          src={solutionImages[item.id] || pompageSolaire}
                          alt={item.title}
                          className="w-100 h-100"
                          style={{ objectFit: "cover" }}
                          loading="lazy"
                        />
                      </div>
                      <Card.Body className="d-flex flex-column p-4">
                        <Card.Title className="fw-bold mb-2" style={{ color: "#0D3B66" }}>
                          {item.title}
                        </Card.Title>
                        <Card.Text className="text-muted mb-4 small flex-grow-1" style={{ lineHeight: "1.6" }}>
                          {item.desc}
                        </Card.Text>
                        <div className="d-grid gap-2 pt-2 border-top">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-whatsapp text-center"
                            style={{ fontSize: "0.9rem" }}
                            aria-label={`Demander un devis WhatsApp pour ${item.title}`}
                          >
                            <i className="fab fa-whatsapp"></i> {t('solutions.btnWhatsapp')}
                          </a>
                          <HashLink
                            smooth
                            to="/contact/#contactForm"
                            className="btn btn-outline-secondary btn-sm"
                            style={{ borderRadius: "20px", fontWeight: "500" }}
                          >
                            {t('solutions.btnForm')}
                          </HashLink>
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

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { m } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import background from "../../images/background.webp";
import { FadeInUp, StaggerContainer, staggerChildVariants } from '../Animations';
import { FaSolarPanel, FaHandshakeAngle, FaLeaf } from '../common/Icons';

const valueMeta = {
  1: { icon: FaSolarPanel, color: "#F39C12" },
  2: { icon: FaHandshakeAngle, color: "#0D3B66" },
  3: { icon: FaLeaf, color: "#27AE60" }
};

function ValuesSection() {
  const { t } = useTranslation();
  const rawItems = t('values.items', { returnObjects: true });
  const items = Array.isArray(rawItems) ? rawItems : [];

  return (
    <section id="values" className="position-relative py-5">
      {/* Background with overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.35)',
          zIndex: 0,
        }}
      />

      <Container className="position-relative py-4" style={{ zIndex: 1 }}>
        <FadeInUp className="text-center text-white mb-5">
          <span
            className="badge px-3 py-2 mb-3 text-uppercase"
            style={{ backgroundColor: 'rgba(243, 156, 18, 0.9)', letterSpacing: '0.5px' }}
          >
            {t('values.badge')}
          </span>
          <h2 className="fw-bold display-6 mb-3">{t('values.title')}</h2>
          <p className="lead mx-auto text-white-50" style={{ maxWidth: '720px', fontSize: '1.05rem' }}>
            {t('values.desc')}
          </p>
        </FadeInUp>

        <StaggerContainer>
          <Row className="g-4">
            {items.map((v) => {
              const meta = valueMeta[v.id] || { icon: FaSolarPanel, color: "#F39C12" };
              return (
                <Col key={v.id} lg={4} md={6}>
                  <m.div variants={staggerChildVariants} className="h-100">
                    <Card className="h-100 border-0 rounded-4 shadow bg-white p-4 text-center card-hover-lift">
                      <div
                        className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          width: '70px',
                          height: '70px',
                          backgroundColor: `${meta.color}15`,
                          color: meta.color,
                        }}
                      >
                        <meta.icon className="fa-2x" />
                      </div>
                      <Card.Body className="p-0 d-flex flex-column">
                        <span className="text-uppercase fw-bold small mb-2" style={{ color: meta.color, letterSpacing: '0.5px' }}>
                          {v.header}
                        </span>
                        <Card.Title className="fw-bold mb-3" style={{ color: '#0D3B66', fontSize: '1.2rem' }}>
                          {v.title}
                        </Card.Title>
                        <Card.Text className="text-muted small mb-0" style={{ lineHeight: '1.7' }}>
                          {v.desc}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </m.div>
                </Col>
              );
            })}
          </Row>
        </StaggerContainer>
      </Container>
    </section>
  );
}

export default ValuesSection;

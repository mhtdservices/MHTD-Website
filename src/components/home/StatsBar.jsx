import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FadeInUp } from '../Animations';
import { FaSolarPanel, FaAward, FaLeaf, FaFileInvoiceDollar } from '../common/Icons';

export default function StatsBar() {
  const { t } = useTranslation();

  const stats = [
    {
      icon: FaSolarPanel,
      value: t('stats.stat1_value'),
      label: t('stats.stat1_label'),
      desc: t('stats.stat1_desc'),
    },
    {
      icon: FaAward,
      value: t('stats.stat2_value'),
      label: t('stats.stat2_label'),
      desc: t('stats.stat2_desc'),
    },
    {
      icon: FaLeaf,
      value: t('stats.stat3_value'),
      label: t('stats.stat3_label'),
      desc: t('stats.stat3_desc'),
    },
    {
      icon: FaFileInvoiceDollar,
      value: t('stats.stat4_value'),
      label: t('stats.stat4_label'),
      desc: t('stats.stat4_desc'),
    },
  ];

  return (
    <section className="py-4 position-relative overflow-hidden bg-gradient-stats">
      <Container>
        <Row className="g-3 text-center">
          {stats.map((stat, idx) => (
            <Col key={idx} xs={6} md={3}>
              <FadeInUp delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 12px 28px rgba(0,0,0,0.25)' }}
                  transition={{ duration: 0.25 }}
                  className="stats-card p-3 p-md-4 bg-white rounded-4 shadow h-100 d-flex flex-column align-items-center justify-content-center border-0"
                >
                  <stat.icon className="fa-2x mb-2" style={{ color: '#F39C12' }} />
                  <h3 className="fw-bold mb-0" style={{ color: '#0D3B66', fontSize: '1.35rem' }}>
                    {stat.value}
                  </h3>
                  <span className="fw-semibold text-dark" style={{ fontSize: '0.85rem' }}>{stat.label}</span>
                  <span className="text-muted" style={{ fontSize: '0.74rem' }}>
                    {stat.desc}
                  </span>
                </motion.div>
              </FadeInUp>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

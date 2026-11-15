import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FadeInUp, StaggerContainer, staggerChildVariants } from '../Animations';

export default function Testimony() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const reviews = [
    {
      id: 1,
      name: isAr ? "عبد اللطيف ك." : "Abdellatif K.",
      role: isAr ? "ضيعة فلاحية — سيدي علال البحراوي" : "Domaine Agricole — Sidi Allal El Bahraoui",
      project: isAr ? "ضخ شمسي 15 كيلوواط" : "Pompage Solaire 15 kW",
      quote: isAr
        ? "فريق MHTD ركّب لنا نظام ضخ المياه بالطاقة الشمسية في وقت قياسي. منذ أكثر من سنة، بئرنا يعمل بانتظام وبدون استهلاك قطرة كازوال واحدة. مردودية مضمونة وخدمة ما بعد البيع ممتازة!"
        : "L'équipe MHTD a installé notre système de pompage solaire en un temps record. Depuis plus d'un an, notre puits fonctionne 7j/7 sans consommer un seul litre de gasoil. La rentabilité est totale et le service après-vente irréprochable !",
    },
    {
      id: 2,
      name: isAr ? "مصطفى ب." : "Mustapha B.",
      role: isAr ? "مستغل فلاحي — نواحي الخميسات" : "Exploitant Agricole — Région Khemisset",
      project: isAr ? "سقي موضعي وبئر شمسي" : "Arrosage Automatique & Puits",
      quote: isAr
        ? "تركيب احترافي ومتقن لبستان الزيتون الخاص بنا. الجمع بين نظام السقي الأوتوماتيكي والألواح الشمسية وفر علينا كميات هائلة من الماء والوقت. أنصح بشدة بالتعامل مع شركة MHTD."
        : "Installation très professionnelle pour notre verger d'oliviers. Le système d'arrosage automatique combiné aux panneaux solaires nous a fait économiser une quantité précieuse d'eau et de temps. Je recommande chaleureusement MHTD.",
    },
    {
      id: 3,
      name: isAr ? "كريم ت." : "Karim T.",
      role: isAr ? "فيلا سكنية — الرباط" : "Villa Résidentielle — Rabat",
      project: isAr ? "سخان شمسي 300 لتر وربط بالشبكة" : "Chauffe-Eau Solaire 300L & On-Grid",
      quote: isAr
        ? "معدات ذات جودة عالية جداً (Jinko و JA Solar). التزام بالموعد، دراسة تقنية دقيقة وفريق خلوق ومتمكن. انخفضت فاتورة الكهرباء لدينا بأكثر من 60%. شكراً لفريق MHTD!"
        : "Matériel de très haute qualité (Jinko / JA Solar). Devis transparent, visite technique rapide et une équipe polie et compétente. Notre facture d'électricité a chuté de plus de 60%. Merci à toute l'équipe MHTD !",
    },
  ];

  return (
    <section id="testimony" className="py-5 bg-gradient-testimony">
      <Container>
        <FadeInUp className="text-center mb-5">
          <span className="section-badge">{t('testimony.badge')}</span>
          <h2 className="fw-bold mb-3" style={{ color: "#0D3B66" }}>
            {t('testimony.title')}
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "650px" }}>
            {t('testimony.desc')}
          </p>
        </FadeInUp>

        <StaggerContainer>
          <Row className="g-4">
            {reviews.map((rev) => (
              <Col key={rev.id} lg={4} md={6}>
                <motion.div variants={staggerChildVariants} className="h-100">
                  <Card className="h-100 card-hover-lift bg-white border-0 p-4">
                    <Card.Body className="p-0 d-flex flex-column">
                      {/* Rating Stars */}
                      <div className="mb-3" style={{ color: "#F39C12" }}>
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className={`fas fa-star ${isAr ? 'ms-1' : 'me-1'}`}></i>
                        ))}
                      </div>

                      <p className="text-muted small mb-4 flex-grow-1 fst-italic" style={{ lineHeight: "1.7" }}>
                        "{rev.quote}"
                      </p>

                      <div className="pt-3 border-top d-flex align-items-center">
                        <div
                          className={`rounded-circle d-flex align-items-center justify-content-center text-white fw-bold ${isAr ? 'ms-3' : 'me-3'}`}
                          style={{
                            width: "48px",
                            height: "48px",
                            backgroundColor: "#0D3B66",
                            fontSize: "1.1rem",
                            flexShrink: 0
                          }}
                        >
                          {rev.name.charAt(0)}
                        </div>
                        <div>
                          <h6 className="fw-bold mb-0 text-dark">{rev.name}</h6>
                          <small className="text-muted d-block" style={{ fontSize: "0.78rem" }}>
                            {rev.role}
                          </small>
                          <span className="badge mt-1" style={{ backgroundColor: "#F1F5F9", color: "#0D3B66" }}>
                            {rev.project}
                          </span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </StaggerContainer>
      </Container>
    </section>
  );
}

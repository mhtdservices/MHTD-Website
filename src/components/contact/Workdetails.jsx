import { Container, Row, Col, Card } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import workTime from "../../images/workTime.jpg";

export default function WorkDetails() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <section id="contactInfo" className="py-5" style={{ backgroundColor: "#F1F5F9", borderTop: "1px solid #E2E8F0" }}>
      <Container>
        <div className="text-center mb-5">
          <span className="section-badge">{t('contact.officeBadge')}</span>
          <h2 className="fw-bold mb-3" style={{ color: "#0D3B66" }}>
            {t('contact.officeTitle')}
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "650px" }}>
            {t('contact.officeDesc')}
          </p>
        </div>

        <Row className="g-4 align-items-stretch">
          {/* Horaires & Coordonnées */}
          <Col lg={5}>
            <Card className="border-0 shadow-sm rounded-4 h-100 overflow-hidden bg-white">
              <img
                src={workTime}
                alt="Horaires de travail MHTD"
                className="w-100"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="p-4 d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold mb-3" style={{ color: "#0D3B66" }}>
                    {t('contact.practicalInfo')}
                  </h5>

                  <ul className="list-unstyled mb-4">
                    <li className="d-flex align-items-start mb-3">
                      <i className={`fas fa-location-dot fa-lg text-primary mt-1 ${isAr ? 'ms-3' : 'me-3'}`}></i>
                      <div>
                        <strong className="text-dark">{t('contact.addressLabel')}</strong>
                        <p className="text-muted small mb-0">
                          {isAr ? "حي النصر، سيدي علال البحراوي 15252، المغرب" : "HAY ENNASSER, Sidi Allal el Bahraoui 15252, Maroc"}
                        </p>
                      </div>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                      <i className={`fas fa-clock fa-lg text-warning mt-1 ${isAr ? 'ms-3' : 'me-3'}`}></i>
                      <div>
                        <strong className="text-dark">{t('contact.hoursLabel')}</strong>
                        <p className="text-muted small mb-0">{t('contact.hoursWeek')}</p>
                        <p className="text-muted small mb-0">{t('contact.hoursSunday')}</p>
                      </div>
                    </li>

                    <li className="d-flex align-items-start mb-3">
                      <i className={`fas fa-phone fa-lg text-success mt-1 ${isAr ? 'ms-3' : 'me-3'}`}></i>
                      <div>
                        <strong className="text-dark">{t('contact.phoneLabel')}</strong>
                        <p className="text-muted small mb-0">
                          <a href="tel:+212626425469" className="text-decoration-none text-muted" dir="ltr">
                            +212 626425469
                          </a>
                        </p>
                      </div>
                    </li>

                    <li className="d-flex align-items-start">
                      <i className={`fas fa-envelope fa-lg text-danger mt-1 ${isAr ? 'ms-3' : 'me-3'}`}></i>
                      <div>
                        <strong className="text-dark">{t('contact.emailLabel')}</strong>
                        <p className="text-muted small mb-0">
                          <a href="mailto:mhtdservices@gmail.com" className="text-decoration-none text-muted" dir="ltr">
                            mhtdservices@gmail.com
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-top d-flex gap-2">
                  <a
                    href="https://maps.google.com/?q=MHTD+Sarl+Sidi+Allal+el+Bahraoui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary w-100 btn-sm py-2"
                    style={{ borderRadius: "20px", fontWeight: "600" }}
                  >
                    <i className={`fas fa-diamond-turn-right ${isAr ? 'ms-1' : 'me-1'}`}></i> {t('contact.mapsBtn')}
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Interactive Google Maps Embed */}
          <Col lg={7}>
            <Card className="border-0 shadow-sm rounded-4 h-100 overflow-hidden bg-white">
              <iframe
                title="MHTD Localisation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.4076511398803!2d-6.528809324485378!3d34.007745673173744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7496530aba2c3%3A0x6dc2d165ea3a2f9f!2sMHTD%20Sarl!5e0!3m2!1sen!2sma!4v1704060342494!5m2!1sen!2sma"
                width="100%"
                height="100%"
                style={{ minHeight: "420px", border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

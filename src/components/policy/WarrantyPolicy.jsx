import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import warranty from "../../images/warranty.webp";
import { FadeInUp, ScaleIn } from "../Animations";
import {
  FaSolarPanel,
  FaCircleCheck,
  FaFilePdf,
  FaMicrochip,
  FaCircleInfo,
  FaWhatsapp,
} from "../common/Icons";

export default function WarrantyPolicy() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const phoneNumber = "212626425469";
  const warrantyMsg = t('warranty.whatsappMsg');

  return (
    <>
      {/* Hero Banner */}
      <div
        className="contact-hero d-flex flex-column justify-content-center align-items-center text-center p-4 position-relative"
        style={{
          backgroundImage: `url(${warranty})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "45vh",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(13, 59, 102, 0.75)" }}
        />

        <FadeInUp className="position-relative text-white py-4" style={{ zIndex: 1, maxWidth: "750px" }}>
          <span
            className="badge px-3 py-2 mb-3 text-uppercase"
            style={{ backgroundColor: "#F39C12", letterSpacing: "0.5px" }}
          >
            {t('warranty.badge')}
          </span>
          <h1 className="fw-bold display-6 mb-3">{t('warranty.title')}</h1>
          <p className="lead mb-0 text-white-50" style={{ fontSize: "1.1rem" }}>
            {t('warranty.desc')}
          </p>
        </FadeInUp>
      </div>

      <Container className="py-5" id="warrantyPolicy">
        <Breadcrumb className="mb-4">
          <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
            {t('nav.home')}
          </Breadcrumb.Item>
          <Breadcrumb.Item active>{t('warranty.title')}</Breadcrumb.Item>
        </Breadcrumb>

        <FadeInUp className="mb-5">
          <p className="lead text-dark" style={{ lineHeight: "1.8" }}>
            {t('warranty.intro1')}
          </p>
          <p className="text-muted">
            {t('warranty.intro2')}
          </p>
        </FadeInUp>

        <Row className="g-4 mb-5">
          {/* Panneaux Solaires */}
          <Col md={6}>
            <ScaleIn delay={0.1} className="h-100">
              <Card className="h-100 border-0 shadow-sm rounded-4 p-4 card-hover-lift bg-white">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className={`rounded-circle d-flex align-items-center justify-content-center ${isAr ? 'ms-3' : 'me-3'}`}
                    style={{ width: "50px", height: "50px", backgroundColor: "rgba(243, 156, 18, 0.15)", color: "#F39C12", flexShrink: 0 }}
                  >
                    <FaSolarPanel className="fa-lg" />
                  </div>
                  <div>
                    <span className="section-badge mb-1" style={{ fontSize: "0.7rem" }}>{t('warranty.solarBadge')}</span>
                    <h4 className="fw-bold mb-0" style={{ color: "#0D3B66" }}>{t('warranty.solarTitle')}</h4>
                  </div>
                </div>

                <ul className="list-unstyled mb-4">
                  <li className="d-flex align-items-start mb-2">
                    <FaCircleCheck className={`text-success ${isAr ? 'ms-2' : 'me-2'} mt-1`} />
                    <span>{t('warranty.solarG1')}</span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <FaCircleCheck className={`text-success ${isAr ? 'ms-2' : 'me-2'} mt-1`} />
                    <span>{t('warranty.solarG2')}</span>
                  </li>
                </ul>

                <div className="pt-3 border-top mt-auto">
                  <small className="text-muted d-block mb-2 fw-semibold">{t('warranty.certLabel')}</small>
                  <div className="d-flex flex-wrap gap-2">
                    <a
                      href="https://www.jinkosolar.com/uploads/JinkoSolar-Global%20Limited%20Warranty%20(Rev112318)-EN.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm rounded-pill"
                    >
                      <FaFilePdf className={`${isAr ? 'ms-1' : 'me-1'} text-danger`} /> {t('warranty.jinkoBtn')}
                    </a>
                    <a
                      href="https://www.jasolar.com/uploadfile/2018/0518/20180518102313951.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm rounded-pill"
                    >
                      <FaFilePdf className={`${isAr ? 'ms-1' : 'me-1'} text-danger`} /> {t('warranty.jaBtn')}
                    </a>
                  </div>
                </div>
              </Card>
            </ScaleIn>
          </Col>

          {/* Onduleurs & Pompage */}
          <Col md={6}>
            <ScaleIn delay={0.2} className="h-100">
              <Card className="h-100 border-0 shadow-sm rounded-4 p-4 card-hover-lift bg-white">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className={`rounded-circle d-flex align-items-center justify-content-center ${isAr ? 'ms-3' : 'me-3'}`}
                    style={{ width: "50px", height: "50px", backgroundColor: "rgba(13, 59, 102, 0.15)", color: "#0D3B66", flexShrink: 0 }}
                  >
                    <FaMicrochip className="fa-lg" />
                  </div>
                  <div>
                    <span className="section-badge mb-1" style={{ fontSize: "0.7rem" }}>{t('warranty.inverterBadge')}</span>
                    <h4 className="fw-bold mb-0" style={{ color: "#0D3B66" }}>{t('warranty.inverterTitle')}</h4>
                  </div>
                </div>

                <ul className="list-unstyled mb-4">
                  <li className="d-flex align-items-start mb-2">
                    <FaCircleCheck className={`text-success ${isAr ? 'ms-2' : 'me-2'} mt-1`} />
                    <span>{t('warranty.inverterG1')}</span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <FaCircleCheck className={`text-success ${isAr ? 'ms-2' : 'me-2'} mt-1`} />
                    <span>{t('warranty.inverterG2')}</span>
                  </li>
                  <li className="d-flex align-items-start mb-2">
                    <FaCircleCheck className={`text-success ${isAr ? 'ms-2' : 'me-2'} mt-1`} />
                    <span>{t('warranty.inverterG3')}</span>
                  </li>
                </ul>

                <div className="p-3 rounded-3 mt-auto" style={{ backgroundColor: "#F8FAFC" }}>
                  <small className="text-muted">
                    <FaCircleInfo className={`text-primary ${isAr ? 'ms-1' : 'me-1'}`} />
                    {t('warranty.claimNotice')}
                  </small>
                </div>
              </Card>
            </ScaleIn>
          </Col>
        </Row>

        {/* WhatsApp Support Callout */}
        <FadeInUp>
          <Card
            className="border-0 shadow-sm rounded-4 p-4 text-center bg-white"
            style={{ borderInlineStart: "5px solid #F39C12" }}
          >
            <h5 className="fw-bold mb-2" style={{ color: "#0D3B66" }}>
              {t('warranty.helpTitle')}
            </h5>
            <p className="text-muted small mb-3">
              {t('warranty.helpDesc')}
            </p>
            <div>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(warrantyMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-4 py-2"
              >
                <FaWhatsapp className={isAr ? 'ms-1' : 'me-1'} /> {t('warranty.helpBtn')}
              </a>
            </div>
          </Card>
        </FadeInUp>
      </Container>
    </>
  );
}

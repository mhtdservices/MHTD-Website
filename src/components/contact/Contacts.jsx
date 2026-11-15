import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import contactImage from "../../images/contactImage.jpg";
import Steps from "./Steps";
import ContactForm from "./ContactForm";
import WorkDetails from "./Workdetails";
import { FadeInUp, FadeInLeft, FadeInRight } from "../Animations";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Banner */}
      <div
        className="contact-hero d-flex flex-column justify-content-center align-items-center text-center p-4 position-relative"
        style={{
          backgroundImage: `url(${contactImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          minHeight: "45vh",
        }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(13, 59, 102, 0.72)" }}
        />

        <FadeInUp className="position-relative text-white py-4" style={{ zIndex: 1, maxWidth: "750px" }}>
          <span
            className="badge px-3 py-2 mb-3 text-uppercase"
            style={{ backgroundColor: "#F39C12", letterSpacing: "0.5px" }}
          >
            {t('contact.heroBadge')}
          </span>
          <h1 className="fw-bold display-6 mb-3">{t('contact.heroTitle')}</h1>
          <p className="lead mb-0 text-white-50" style={{ fontSize: "1.1rem" }}>
            {t('contact.heroDesc')}
          </p>
        </FadeInUp>
      </div>

      {/* Main 2-Column Section */}
      <Container className="py-5">
        <Row className="g-5 align-items-start">
          <Col lg={6}>
            <FadeInLeft>
              <Steps />
            </FadeInLeft>
          </Col>
          <Col lg={6}>
            <FadeInRight>
              <ContactForm />
            </FadeInRight>
          </Col>
        </Row>
      </Container>

      {/* Work Details & Map Section */}
      <WorkDetails />
    </>
  );
}

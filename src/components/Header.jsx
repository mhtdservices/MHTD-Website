import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaPhoneAlt, FaEnvelope, FaLocationDot, FaWhatsapp } from "./common/Icons";
import '../App.css';

export default function Header() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const phoneNumber = '212626425469';

  const whatsappMsg = isAr
    ? "السلام عليكم شركة MHTD، أود الاستفسار عن خدماتكم أو طلب عرض أسعار."
    : "Bonjour MHTD, je souhaite un renseignement ou un devis.";

  return (
    <>
      {/* Top Bar */}
      <div className="py-2 text-white small bg-gradient-topbar">
        <Container className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <a href="tel:+212626425469" className="text-white text-decoration-none d-flex align-items-center gap-1" dir="ltr">
              <FaPhoneAlt style={{ color: "#F39C12" }} />
              <span>+212 626425469</span>
            </a>
            <span className="text-white-50 d-none d-sm-inline">|</span>
            <a href="mailto:mhtdservices@gmail.com" className="text-white text-decoration-none d-none d-sm-flex align-items-center gap-1" dir="ltr">
              <FaEnvelope style={{ color: "#F39C12" }} />
              <span>mhtdservices@gmail.com</span>
            </a>
          </div>

          <div className="d-flex align-items-center gap-2">
            <span className="text-white-50 d-none d-md-inline">
              <FaLocationDot className={isAr ? 'ms-1' : 'me-1'} style={{ color: "#F39C12" }} />
              {t('topbar.location')}
            </span>
            <span className="badge px-2 py-1" style={{ backgroundColor: "rgba(243, 156, 18, 0.2)", color: "#F39C12", border: "1px solid #F39C12" }}>
              {t('topbar.freeQuote')}
            </span>
          </div>
        </Container>
      </div>

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMsg)}`}
        className="floating-whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('topbar.whatsappFloating')}
      >
        <FaWhatsapp className="fa-xl" />
        <span>{t('topbar.whatsappFloating')}</span>
      </a>
    </>
  );
}

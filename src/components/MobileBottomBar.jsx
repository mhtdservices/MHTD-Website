import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaWhatsapp, FaFileInvoiceDollar } from './common/Icons';

export default function MobileBottomBar() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const phoneNumber = '212626425469';

  const whatsappMessage = isAr
    ? 'السلام عليكم شركة MHTD، أود استشارة سريعة بخصوص مشروعي.'
    : 'Bonjour MHTD, je souhaite un renseignement ou un devis.';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <nav className="mobile-bottom-bar d-lg-none" aria-label="Actions rapides mobiles">
      <div className="mobile-bottom-bar-inner">
        {/* Direct Call Button */}
        <a
          href={`tel:+${phoneNumber}`}
          className="mobile-bottom-btn call-btn"
          aria-label={isAr ? "اتصال هاتفي مباشر" : "Appeler directement"}
        >
          <div className="mobile-bottom-icon-wrap">
            <FaPhoneAlt />
          </div>
          <span className="mobile-bottom-label">
            {isAr ? "اتصال" : "Appeler"}
          </span>
        </a>

        {/* WhatsApp Featured Button (Center) */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bottom-btn whatsapp-btn"
          aria-label={isAr ? "تواصل عبر واتساب" : "Contacter sur WhatsApp"}
        >
          <div className="mobile-bottom-icon-wrap whatsapp-icon-wrap">
            <FaWhatsapp />
          </div>
          <span className="mobile-bottom-label">
            {isAr ? "واتساب" : "WhatsApp"}
          </span>
        </a>

        {/* Request a Quote Button */}
        <Link
          to="/contact"
          className="mobile-bottom-btn quote-btn"
          aria-label={isAr ? "طلب عرض أسعار" : "Demander un devis"}
        >
          <div className="mobile-bottom-icon-wrap quote-icon-wrap">
            <FaFileInvoiceDollar />
          </div>
          <span className="mobile-bottom-label">
            {isAr ? "عرض سعر" : "Devis"}
          </span>
        </Link>
      </div>
    </nav>
  );
}


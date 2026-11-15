import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function Steps() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  const steps = [
    {
      num: 1,
      color: "#0D3B66",
      title: t('contact.step1Title'),
      desc: t('contact.step1Desc'),
    },
    {
      num: 2,
      color: "#F39C12",
      title: t('contact.step2Title'),
      desc: t('contact.step2Desc'),
    },
    {
      num: 3,
      color: "#27AE60",
      title: t('contact.step3Title'),
      desc: t('contact.step3Desc'),
    },
  ];

  const urgentMsg = isAr
    ? "السلام عليكم شركة MHTD، أود استشارة سريعة بخصوص مشروعي."
    : "Bonjour MHTD, je souhaite une consultation rapide.";

  return (
    <div className={`w-100 ${isAr ? 'ps-lg-4' : 'pe-lg-4'} mb-4 mb-lg-0`}>
      <div className="mb-4">
        <span className="section-badge">{t('contact.stepsBadge')}</span>
        <h3 className="fw-bold" style={{ color: "#0D3B66" }}>
          {t('contact.stepsTitle')}
        </h3>
        <p className="text-muted">
          {t('contact.stepsDesc')}
        </p>
      </div>

      <div className={isAr ? "pe-2" : "ps-2"}>
        {steps.map((s) => (
          <div key={s.num} className="timeline-step">
            <div className="timeline-icon" style={{ backgroundColor: s.color }}>
              {s.num}
            </div>
            <h5 className="fw-bold mb-1" style={{ color: "#0D3B66" }}>
              {s.title}
            </h5>
            <p className="text-muted small mb-0" style={{ lineHeight: "1.6" }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Direct WhatsApp Callout Card */}
      <Card
        className="border-0 shadow-sm rounded-4 p-3 mt-4"
        style={{
          backgroundColor: "#F0FDF4",
          borderInlineStart: "4px solid #25D366"
        }}
      >
        <div className="d-flex align-items-center">
          <i className={`fab fa-whatsapp fa-2x text-success ${isAr ? 'ms-3' : 'me-3'}`}></i>
          <div>
            <h6 className="fw-bold mb-1 text-dark">{t('contact.urgentTitle')}</h6>
            <p className="text-muted small mb-2">{t('contact.urgentDesc')}</p>
            <a
              href={`https://wa.me/212626425469?text=${encodeURIComponent(urgentMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-sm px-3"
              style={{ borderRadius: "20px", fontWeight: "600" }}
            >
              {t('contact.urgentBtn')}
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Steps;

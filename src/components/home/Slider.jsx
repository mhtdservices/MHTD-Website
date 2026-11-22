import Carousel from 'react-bootstrap/Carousel';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import agricole from '../../images/agricole.webp';
import arrosage from '../../images/arrosage.webp';
import ongrid from '../../images/ongrid.webp';

function Slider() {
  const { t } = useTranslation();
  const phoneNumber = '212626425469';

  const slides = [
    {
      img: '/agricole.webp',
      badge: t('slider.slide1.badge'),
      title: t('slider.slide1.title'),
      desc: t('slider.slide1.desc'),
      whatsappMsg: t('slider.slide1.whatsappMsg'),
    },
    {
      img: arrosage,
      badge: t('slider.slide2.badge'),
      title: t('slider.slide2.title'),
      desc: t('slider.slide2.desc'),
      whatsappMsg: t('slider.slide2.whatsappMsg'),
    },
    {
      img: ongrid,
      badge: t('slider.slide3.badge'),
      title: t('slider.slide3.title'),
      desc: t('slider.slide3.desc'),
      whatsappMsg: t('slider.slide3.whatsappMsg'),
    },
  ];

  return (
    <section id="slider" className="position-relative">
      <Carousel interval={null} indicators={true} controls={true}>
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <div className="position-relative" style={{ height: '85vh', minHeight: '560px' }}>
              <img
                className="d-block w-100 h-100"
                src={slide.img}
                alt={slide.title}
                style={{ objectFit: 'cover' }}
                fetchPriority={idx === 0 ? "high" : "low"}
                loading={idx === 0 ? "eager" : "lazy"}
                width="1280"
                height="720"
              />
              {/* Subtle dark gradient overlay */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(13, 59, 102, 0.45) 0%, rgba(13, 59, 102, 0.75) 100%)',
                }}
              />
            </div>

            <Carousel.Caption className="d-flex align-items-center justify-content-center">
              <div className="glass-hero-card text-center text-white">
                <span
                  className="badge mb-3 px-3 py-2 text-uppercase"
                  style={{
                    backgroundColor: 'rgba(243, 156, 18, 0.9)',
                    color: '#FFFFFF',
                    fontSize: '0.85rem',
                    letterSpacing: '0.5px',
                  }}
                >
                  {slide.badge}
                </span>

                <h1 className="fw-bold mb-3 display-6 display-md-5">{slide.title}</h1>

                <p className="lead mb-4 mx-auto" style={{ maxWidth: '620px', fontSize: '1.05rem', opacity: 0.95 }}>
                  {slide.desc}
                </p>

                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(slide.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp px-4 py-2"
                  >
                    <i className="fab fa-whatsapp fa-lg"></i>
                    {t('slider.ctaWhatsapp')}
                  </a>

                  <HashLink smooth to="/#solutions" className="btn-navy-outline px-4 py-2">
                    {t('slider.ctaSolutions')}
                  </HashLink>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default Slider;

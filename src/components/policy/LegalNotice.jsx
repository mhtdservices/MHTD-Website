import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FadeInUp } from "../Animations";
import {
  FaHouse,
  FaChevronLeft,
  FaChevronRight,
  FaBuilding,
  FaFileInvoice,
  FaShieldHalved,
  FaServer,
  FaScaleBalanced
} from "../common/Icons";

export default function LegalNotice() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "80vh" }}>
      {/* Header Banner */}
      <section className="py-5" style={{ backgroundColor: "#0D3B66" }}>
        <Container className="text-center text-white py-3">
          <span
            className="badge px-3 py-2 mb-3 text-uppercase"
            style={{ backgroundColor: "#F39C12", letterSpacing: "0.5px" }}
          >
            {isAr ? "الشفافية والامتثال القانوني" : "Conformité Légale & Transparence"}
          </span>
          <h1 className="fw-bold display-6 mb-2">
            {isAr ? "الإشعار القانوني وسياسة الخصوصية" : "Mentions Légales & Confidentialité"}
          </h1>
          <p className="text-white-50 mx-auto mb-0" style={{ maxWidth: "680px" }}>
            {isAr
              ? "معلومات الشركة، شروط الاستخدام، وحماية المعطيات الشخصية وفقاً للقانون المغربي."
              : "Informations sur l'entreprise, conditions d'utilisation et protection des données selon la loi marocaine."}
          </p>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="py-5">
        {/* Modern Pill Breadcrumb */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb-modern">
            <li className="breadcrumb-modern-item">
              <Link to="/" className="breadcrumb-modern-link">
                <FaHouse className="breadcrumb-home-icon" />
                <span>{t('nav.home')}</span>
              </Link>
            </li>
            <li className="breadcrumb-modern-separator" aria-hidden="true">
              {isAr ? <FaChevronLeft /> : <FaChevronRight />}
            </li>
            <li className="breadcrumb-modern-item active" aria-current="page">
              <span className="breadcrumb-modern-current">
                {isAr ? "الإشعار القانوني والخصوصية" : "Mentions Légales"}
              </span>
            </li>
          </ol>
        </nav>

        <Row className="g-4">
          {/* 1. Identification de l'Éditeur */}
          <Col lg={12}>
            <FadeInUp>
              <Card className="border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white mb-4">
                <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                    style={{ width: "48px", height: "48px", backgroundColor: "rgba(13, 59, 102, 0.08)", color: "#0D3B66" }}
                  >
                    <FaBuilding className="fa-lg" />
                  </div>
                  <div>
                    <h4 className="fw-bold mb-1" style={{ color: "#0D3B66" }}>
                      {isAr ? "1. معلومات الشركة والناشر" : "1. Éditeur du Site & Identification"}
                    </h4>
                    <span className="text-muted small">
                      {isAr ? "طبقا لمقتضيات القانون رقم 31-08 ومدونة التجارة المغربية" : "Conformément à la loi n° 31-08 et au Code de commerce marocain"}
                    </span>
                  </div>
                </div>

                <Row className="g-3 small text-muted">
                  <Col md={6}>
                    <div className="p-3 rounded-3" style={{ backgroundColor: "#F8FAFC" }}>
                      <strong className="text-dark d-block mb-1">
                        {isAr ? "الاسم التجاري والكيان القانوني :" : "Raison sociale & Statut :"}
                      </strong>
                      <span>MHTD Services S.A.R.L</span>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="p-3 rounded-3" style={{ backgroundColor: "#F8FAFC" }}>
                      <strong className="text-dark d-block mb-1">
                        {isAr ? "طبيعة النشاط :" : "Activité principale :"}
                      </strong>
                      <span>{isAr ? "دراسة وتركيب حلول الطاقة الشمسية، الضخ الفلاحي، والسقي الأوتوماتيكي" : "Ingénierie, installation de solutions solaires, pompage agricole et arrosage"}</span>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="p-3 rounded-3" style={{ backgroundColor: "#F8FAFC" }}>
                      <strong className="text-dark d-block mb-1">
                        {isAr ? "المقر الاجتماعي :" : "Siège social :"}
                      </strong>
                      <span>{isAr ? "حي النصر، سيدي علال البحراوي 15252، جهة الرباط-سلا-القنيطرة، المغرب" : "HAY ENNASSER, Sidi Allal el Bahraoui 15252, Région Rabat-Salé-Kénitra, Maroc"}</span>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="p-3 rounded-3" style={{ backgroundColor: "#F8FAFC" }}>
                      <strong className="text-dark d-block mb-1">
                        {isAr ? "وسائل الاتصال الرسمية :" : "Contact officiel :"}
                      </strong>
                      <span>Tél / WhatsApp : +212 626425469 | Email : mhtdservices@gmail.com</span>
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className="p-3 rounded-3 border" style={{ backgroundColor: "#FFFDF5", borderColor: "#FEE2B3" }}>
                      <div className="d-flex align-items-center gap-2 mb-1">
                        <FaFileInvoice className="text-warning" />
                        <strong className="text-dark">
                          {isAr ? "البيانات الجبائية والقانونية (RC / IF / ICE / CNSS) :" : "Immatriculation & Registres Légaux (RC / IF / ICE / CNSS) :"}
                        </strong>
                      </div>
                      <p className="mb-0 text-muted">
                        {isAr
                          ? "شركة مقيدة بسجلات المحكمة التجارية ومصلحة الضرائب بالمملكة المغربية. يتم تسليم مستخرج الوثائق القانونية الرسمية مع كل فاتورة أو عقد صفقة، ومتاحة عند الطلب للسلطات والزبناء."
                          : "Société régulièrement enregistrée au Registre du Commerce et auprès de l'Administration Fiscale du Royaume du Maroc. Les identifiants légaux complets figurent sur tous nos devis et factures officiels et sont communicables sur demande."}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Card>
            </FadeInUp>
          </Col>

          {/* 2. Protection des Données Personnelles (Loi 09-08) */}
          <Col lg={12}>
            <FadeInUp>
              <Card className="border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white mb-4">
                <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                    style={{ width: "48px", height: "48px", backgroundColor: "rgba(39, 174, 96, 0.1)", color: "#27AE60" }}
                  >
                    <FaShieldHalved className="fa-lg" />
                  </div>
                  <div>
                    <h4 className="fw-bold mb-1" style={{ color: "#0D3B66" }}>
                      {isAr ? "2. حماية المعطيات الشخصية (القانون رقم 09-08 - CNDP)" : "2. Données Personnelles (Loi n° 09-08 & CNDP)"}
                    </h4>
                    <span className="text-muted small">
                      {isAr ? "احترام الخصوصية وسرية بيانات الزبناء" : "Protection des personnes physiques à l'égard du traitement des données"}
                    </span>
                  </div>
                </div>

                <div className="text-muted small" style={{ lineHeight: "1.8" }}>
                  <p>
                    {isAr
                      ? "طبقا لمقتضيات القانون المغربي رقم 09-08 الصادر بالظهير الشريف رقم 1-09-15 المتعلق بحماية الأشخاص الذاتيين تجاه معالجة المعطيات ذات الطابع الشخصي، نحيطكم علماً بما يلي :"
                      : "Conformément aux dispositions de la loi marocaine n° 09-08 promulguée par le Dahir n° 1-09-15 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel :"}
                  </p>
                  <ul className="mb-3">
                    <li className="mb-2">
                      <strong className="text-dark">{isAr ? "الهدف من جمع المعطيات :" : "Finalité du traitement : "}</strong>
                      {isAr
                        ? "المعلومات المطلوبة عبر استمارة الموقع (الاسم، الهاتف، البريد الإلكتروني، طبيعة المشروع) مخصصة حصراً لدراسة وتوجيه طلب عرض الأسعار والتواصل معكم من طرف مستشارينا."
                        : "Les données recueillies via notre formulaire de devis (nom, téléphone, email, nature du besoin) sont destinées exclusivement à l'étude technique, l'établissement du devis et le suivi commercial personnalisé par notre équipe."}
                    </li>
                    <li className="mb-2">
                      <strong className="text-dark">{isAr ? "السرية وعدم المشاركة مع أطراف ثالثة :" : "Confidentialité & Tiers : "}</strong>
                      {isAr
                        ? "تلتزم شركة MHTD بعدم بيع أو إيجار أو تفويت معطياتكم الشخصية لأي طرف ثالث أو جهة إشهارية تحت أي ظرف كان."
                        : "MHTD Services s'engage formellement à ne jamais vendre, louer, ni transmettre vos données à des tiers ou à des fins publicitaires."}
                    </li>
                    <li className="mb-2">
                      <strong className="text-dark">{isAr ? "حقوقكم في الولوج والتعديل :" : "Droits d'accès et de rectification : "}</strong>
                      {isAr
                        ? "لكم الحق في ممارسة حق الولوج إلى معطياتكم وتصحيحها أو التعرض عليها. لممارسة هذا الحق، يكفي مراسلتنا عبر البريد الإلكتروني : mhtdservices@gmail.com أو الاتصال بنا هاتفياً."
                        : "Vous bénéficiez d'un droit d'accès, de rectification et d'opposition pour motifs légitimes. Vous pouvez exercer ce droit à tout moment en nous écrivant à : mhtdservices@gmail.com ou par téléphone au +212 626425469."}
                    </li>
                  </ul>
                </div>
              </Card>
            </FadeInUp>
          </Col>

          {/* 3. Hébergement & Sécurité */}
          <Col md={6}>
            <FadeInUp>
              <Card className="border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                    style={{ width: "42px", height: "42px", backgroundColor: "rgba(52, 152, 219, 0.1)", color: "#2980B9" }}
                  >
                    <FaServer />
                  </div>
                  <h5 className="fw-bold mb-0" style={{ color: "#0D3B66" }}>
                    {isAr ? "3. الاستضافة التقنية والأمان" : "3. Hébergement & Sécurité"}
                  </h5>
                </div>
                <p className="text-muted small mb-0" style={{ lineHeight: "1.7" }}>
                  {isAr
                    ? "يتم استضافة هذا الموقع عبر خوادم سحابية مؤمنة تدعم شهادات التشفير الرقمي SSL/TLS (بروتوكول HTTPS المشفر). لا يقوم الموقع بزرع أي ملفات تعريف ارتباط (Cookies) تجسسية أو إعلانية للمستخدمين."
                    : "Le site est hébergé sur une infrastructure cloud sécurisée avec chiffrement HTTPS (certificat SSL/TLS). Aucun cookie de pistage publicitaire invasif n'est déposé sur votre terminal."}
                </p>
              </Card>
            </FadeInUp>
          </Col>

          {/* 4. Propriété intellectuelle & Droit applicable */}
          <Col md={6}>
            <FadeInUp>
              <Card className="border-0 shadow-sm rounded-4 p-4 h-100 bg-white">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 flex-shrink-0"
                    style={{ width: "42px", height: "42px", backgroundColor: "rgba(243, 156, 18, 0.1)", color: "#F39C12" }}
                  >
                    <FaScaleBalanced />
                  </div>
                  <h5 className="fw-bold mb-0" style={{ color: "#0D3B66" }}>
                    {isAr ? "4. الملكية الفكرية والقانون الساري" : "4. Propriété & Droit Applicable"}
                  </h5>
                </div>
                <p className="text-muted small mb-0" style={{ lineHeight: "1.7" }}>
                  {isAr
                    ? "كافة محتويات الموقع (النصوص، الصور، الشعارات) محمية بموجب التشريع المغربي للملكية الفكرية. تخضع أي منازعة لاختصاص محاكم المملكة المغربية حصراً."
                    : "L'ensemble des contenus (textes, graphismes, marques MHTD) est protégé par le droit marocain de la propriété intellectuelle. Tout litige relatif à l'utilisation du site est soumis au droit marocain et à la compétence des tribunaux compétents du Royaume du Maroc."}
                </p>
              </Card>
            </FadeInUp>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


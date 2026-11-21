import { useState, useRef, useEffect } from "react";
import { Button, Form, Card, Alert, Spinner } from "react-bootstrap";
import emailjs from "emailjs-com";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === 'ar';
  const form = useRef();
  const location = useLocation();
  const [selectedSolution, setSelectedSolution] = useState("Nos Solutions");
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });
  const [lastSubmittedData, setLastSubmittedData] = useState(null);

  // Pre-fill solution dropdown if passed via query params (e.g. ?solution=Pompage Solaire)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sol = params.get("solution");
    if (sol) {
      setSelectedSolution(sol);
    }
  }, [location]);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    // Snapshot form data for fallback in case of delivery failure
    const currentFormData = {
      name: form.current?.name?.value?.trim() || "",
      email: form.current?.email?.value?.trim() || "",
      number: form.current?.number?.value?.trim() || "",
      subject: form.current?.subject?.value || selectedSolution,
      message: form.current?.message?.value?.trim() || ""
    };
    setLastSubmittedData(currentFormData);

    // EmailJS credentials
    const serviceId = "service_30shd0a";
    const templateId = "template_4zudrsb";
    const publicKey = "GHgi6dmsbELEHwaE5";

    // Format rich message content so ALL details appear in EmailJS {{message}} (Bilingual support)
    const formattedMessage = isAr
      ? `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 طلب عرض سعر جديد — MHTD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 العميل : ${currentFormData.name}
📞 الهاتف : ${currentFormData.number}
✉️ البريد الإلكتروني : ${currentFormData.email}
☀️ الخدمة المطلوبة : ${currentFormData.subject}

📝 رسالة / تفاصيل العميل :
${currentFormData.message || "لا توجد تفاصيل إضافية."}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
      : `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 NOUVELLE DEMANDE DE DEVIS — MHTD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Client : ${currentFormData.name}
📞 Téléphone : ${currentFormData.number}
✉️ Email : ${currentFormData.email}
☀️ Solution : ${currentFormData.subject}

📝 Détails / Message du client :
${currentFormData.message || "Aucune note complémentaire."}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

    // Map all potential template parameters so EmailJS template never receives blanks
    const templateParams = {
      name: currentFormData.name,
      from_name: currentFormData.name,
      email: currentFormData.email,
      reply_to: currentFormData.email,
      number: currentFormData.number,
      phone: currentFormData.number,
      subject: currentFormData.subject,
      title: currentFormData.subject, // Matches {{title}} in EmailJS Subject
      time: new Date().toLocaleString(isAr ? 'ar-MA' : 'fr-FR', {
        dateStyle: 'medium',
        timeStyle: 'short'
      }),
      message: formattedMessage,
      user_message: currentFormData.message
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        () => {
          setStatus({
            loading: false,
            success: true,
            message: t('contact.formSuccess'),
          });
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS delivery error:", error);
          setStatus({
            loading: false,
            success: false,
            message: t('contact.formError'),
          });
        }
      );
  };

  return (
    <Card id="contactForm" className="border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white w-100">
      <div className="mb-4">
        <h3 className="fw-bold mb-2" style={{ color: "#0D3B66" }}>
          {t('contact.formTitle')}
        </h3>
        <p className="text-muted small">
          {t('contact.formDesc')}
        </p>
      </div>

      {status.message && (
        <Alert
          variant={status.success ? "success" : "danger"}
          dismissible
          onClose={() => setStatus({ ...status, message: "" })}
          className="rounded-3"
        >
          <div className="d-flex align-items-start">
            <i className={`fas ${status.success ? "fa-circle-check" : "fa-triangle-exclamation"} ${isAr ? 'ms-2' : 'me-2'} mt-1`}></i>
            <div className="flex-grow-1">
              <div>{status.message}</div>
              {!status.success && lastSubmittedData && (
                <div className="mt-3">
                  <a
                    href={`https://wa.me/212626425469?text=${encodeURIComponent(
                      isAr
                        ? `طلب عرض سعر MHTD:\n- الاسم: ${lastSubmittedData.name}\n- الهاتف: ${lastSubmittedData.number}\n- البريد: ${lastSubmittedData.email}\n- الخدمة: ${lastSubmittedData.subject}\n- التفاصيل: ${lastSubmittedData.message || 'لا توجد'}`
                        : `Demande de Devis MHTD:\n- Nom: ${lastSubmittedData.name}\n- Tél: ${lastSubmittedData.number}\n- Email: ${lastSubmittedData.email}\n- Solution: ${lastSubmittedData.subject}\n- Message: ${lastSubmittedData.message || 'Aucun'}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success btn-sm d-inline-flex align-items-center gap-2 fw-semibold px-3 py-2 shadow-sm"
                    style={{ backgroundColor: '#25D366', borderColor: '#25D366', borderRadius: '20px' }}
                  >
                    <i className="fab fa-whatsapp fa-lg"></i>
                    <span>{isAr ? "إرسال هذا الطلب عبر واتساب الآن" : "Envoyer cette demande sur WhatsApp en 1 clic"}</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </Alert>
      )}

      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label className="small fw-semibold text-dark">
            {t('contact.formName')} <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder={isAr ? "مثال: محمد العلمي" : "Ex : Mohamed El Alami"}
            required
            className="py-2 rounded-3"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label className="small fw-semibold text-dark">
            {t('contact.formEmail')} <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Ex : contact@domaine.ma"
            required
            className="py-2 rounded-3"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label className="small fw-semibold text-dark">
            {t('contact.formPhone')} <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            name="number"
            type="tel"
            placeholder={isAr ? "مثال: 06XX XX XX XX" : "Ex : +212 6XX XX XX XX"}
            required
            className="py-2 rounded-3"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label className="small fw-semibold text-dark">
            {t('contact.formSubject')}
          </Form.Label>
          <Form.Select
            name="subject"
            value={selectedSolution}
            onChange={(e) => setSelectedSolution(e.target.value)}
            className="py-2 rounded-3"
          >
            <option value="Nos Solutions">{isAr ? "اختر الحل المناسب..." : "Sélectionnez une solution..."}</option>
            <option value="Pompage Solaire">{isAr ? "ضخ المياه بالطاقة الشمسية (آبار / فلاحي)" : "Pompage Solaire (Puits / Agricole)"}</option>
            <option value="Chauffe Eau Solaire">{isAr ? "سخان ماء شمسي (200 لتر / 300 لتر)" : "Chauffe-Eau Solaire (200L / 300L)"}</option>
            <option value="Eclairage Solaire">{isAr ? "إنارة شمسية (أعمدة / كشافات LED)" : "Éclairage Solaire (Lampadaires / Projecteurs)"}</option>
            <option value="Arrosage Automatique">{isAr ? "سقي أوتوماتيكي (ري ذكي بالتنقيط)" : "Arrosage Automatique (Irrigation intelligente)"}</option>
            <option value="Injection Au Reseau">{isAr ? "محطة شمسية متصلة بالشبكة (On-Grid)" : "Centrale Solaire Raccordée au Réseau (On-Grid)"}</option>
            <option value="Systeme Hybride">{isAr ? "نظام شمسي هجين مع بطاريات تخزين" : "Système Solaire Hybride avec Batteries"}</option>
            <option value="Autre Demande">{isAr ? "طلب آخر / تجهيزات خاصة" : "Autre Demande / Matériel spécifique"}</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formMessage">
          <Form.Label className="small fw-semibold text-dark">
            {t('contact.formMessage')}
          </Form.Label>
          <Form.Control
            name="message"
            as="textarea"
            rows={3}
            placeholder={
              isAr
                ? "حدد موقعك (مثلاً: سيدي علال البحراوي، تيفلت، الخميسات...)، عمق البئر، أو أي تفاصيل إضافية مفيدة."
                : "Précisez votre localisation (ex : Région Sidi Allal El Bahraoui, Khemisset...), la profondeur du puits, ou toute autre information utile."
            }
            className="rounded-3"
          />
        </Form.Group>

        <Button
          type="submit"
          className="btn-solar w-100 py-3"
          disabled={status.loading}
        >
          {status.loading ? (
            <>
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className={isAr ? "ms-2" : "me-2"} />
              {t('contact.formSending')}
            </>
          ) : (
            <>
              <i className={`fas fa-paper-plane ${isAr ? "ms-2" : "me-2"}`}></i> {t('contact.formSubmit')}
            </>
          )}
        </Button>
      </Form>
    </Card>
  );
}

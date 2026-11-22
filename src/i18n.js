import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      topbar: {
        location: "Sidi Allal El Bahraoui, Maroc",
        freeQuote: "Devis Gratuit 24h",
        whatsappFloating: "Discuter sur WhatsApp"
      },
      nav: {
        home: "Accueil",
        consultation: "Consultation",
        services: "Services",
        solutions: "Nos Solutions",
        shop: "Boutique Matériel",
        contactLocation: "Contact & Localisation",
        warranty: "Politique de Garantie",
        quoteBtn: "Demander un devis"
      },
      slider: {
        slide1: {
          badge: "☀️ Pompage Solaire Agricole",
          title: "Pompage Solaire & Énergie Autonome",
          desc: "Alimentez vos puits et bassins sans carburant grâce à nos systèmes solaires haute performance adaptés au climat marocain.",
          whatsappMsg: "Bonjour MHTD, je souhaite un devis pour une installation de Pompage Solaire."
        },
        slide2: {
          badge: "💧 Arrosage Intelligent",
          title: "Systèmes d'Arrosage Automatique",
          desc: "Optimisez chaque goutte d’eau pour vos cultures, vergers et espaces verts avec nos programmateurs et réseaux d’irrigation durables.",
          whatsappMsg: "Bonjour MHTD, je souhaite un devis pour un système d'Arrosage Automatique."
        },
        slide3: {
          badge: "⚡ Énergie Résidentielle & Industrielle",
          title: "Installations Raccordées au Réseau",
          desc: "Réduisez votre facture électrique jusqu’à 80% grâce à nos centrales solaires photovoltaïques connectées (On-Grid).",
          whatsappMsg: "Bonjour MHTD, je souhaite des informations sur l'installation solaire raccordée au réseau."
        },
        ctaWhatsapp: "Devis Gratuit sur WhatsApp",
        ctaSolutions: "Découvrir nos Solutions"
      },
      stats: {
        stat1_value: "+100",
        stat1_label: "Projets Réalisés",
        stat1_desc: "Partout au Maroc",
        stat2_value: "25 Ans",
        stat2_label: "Garantie Performance",
        stat2_desc: "Panneaux certifiés",
        stat3_value: "100%",
        stat3_label: "Énergie Propre",
        stat3_desc: "Économie immédiate",
        stat4_value: "Gratuit",
        stat4_label: "Devis & Conseil",
        stat4_desc: "Réponse sous 24h"
      },
      solutions: {
        badge: "Solutions Clés en Main",
        title: "Nos Solutions en Énergie Solaire & Arrosage",
        desc: "MHTD conçoit, installe et maintient des installations solaires fiables, économiques et conformes aux plus hauts standards de durabilité au Maroc.",
        btnWhatsapp: "Devis WhatsApp Rapide",
        btnForm: "Formulaire de Devis",
        quoteMsg: "Bonjour MHTD, je souhaite un devis gratuit pour la solution : {{title}}.",
        items: [
          {
            id: 1,
            title: "Pompage Solaire",
            badge: "Agricole & Puits",
            desc: "Services de pompage solaire personnalisés adaptés à vos besoins en eau agricole et domestique, sans carburant ni bruit."
          },
          {
            id: 2,
            title: "Chauffe-Eau Solaire",
            badge: "Économie 70%",
            desc: "Gamme complète de chauffe-eaux solaires 200L et 300L haute performance avec installation et mise en service certifiées."
          },
          {
            id: 3,
            title: "Éclairage Solaire",
            badge: "Autonomie 100%",
            desc: "Illuminez vos extérieurs, fermes, routes et jardins avec nos lampadaires et projecteurs LED solaires haute durabilité."
          },
          {
            id: 4,
            title: "Arrosage Automatique",
            badge: "Irrigation Intelligente",
            desc: "Transformez vos cultures et espaces verts avec nos systèmes d'arrosage goutte-à-goutte et asperseurs programmables."
          },
          {
            id: 5,
            title: "Injection au Réseau",
            badge: "On-Grid",
            desc: "Consommez l'électricité produite par vos panneaux solaires le jour et réduisez considérablement vos factures énergétiques."
          },
          {
            id: 6,
            title: "Système Hybride",
            badge: "Secours & Batterie",
            desc: "Solution intelligente avec onduleurs hybrides et parcs de batteries pour stocker l'énergie solaire et garantir l'alimentation 24h/24."
          }
        ]
      },
      products: {
        badge: "Équipements Certifiés",
        title: "Boutique Solaire & Matériel Professionnel",
        desc: "Explorez notre sélection de matériels solaires de premier choix : panneaux photovoltaïques haute efficacité, onduleurs, pompes immergées et coffrets de protection.",
        btnOrder: "Commander sur WhatsApp",
        btnDetails: "Voir Fiche Produit",
        notFoundTitle: "Produit introuvable",
        notFoundDesc: "L'article demandé n'existe pas ou a été déplacé.",
        btnBack: "Retour à l'accueil",
        btnBackShop: "Retour à la boutique",
        featuresHeader: "Caractéristiques Techniques :",
        whatsappOrder: "Commander / Devis sur WhatsApp",
        whatsappMsg: "Bonjour MHTD, je souhaite commander ou avoir un devis pour : {{title}}.",
        detailMsg: "Bonjour MHTD ! Je suis intéressé par l'article : {{title}}. Pouvez-vous me donner plus de détails et son prix ?"
      },
      values: {
        badge: "Pourquoi Choisir MHTD",
        title: "Votre Partenaire Solaire de Confiance au Maroc",
        desc: "Nous combinons maîtrise technologique, équipements de premier plan et connaissance approfondie des besoins agricoles et résidentiels marocains.",
        items: [
          {
            id: 1,
            header: "Expertise Technique",
            title: "Solutions Énergétiques Sur-Mesure",
            desc: "Forts de plusieurs années d'expérience terrain au Maroc, nous dimensionnons et installons des systèmes solaires optimisés pour un rendement maximal et durable."
          },
          {
            id: 2,
            header: "Accompagnement Dédié",
            title: "Service Client & SAV Réactif",
            desc: "De la première visite technique à la mise en service et au suivi après-vente, notre équipe d'ingénieurs et techniciens vous accompagne à chaque étape."
          },
          {
            id: 3,
            header: "Engagement Écologique",
            title: "Durabilité & Rentabilité",
            desc: "Nos solutions solaires et d'arrosage automatique réduisent vos coûts d'exploitation tout en préservant les ressources en eau et l'environnement."
          }
        ]
      },
      testimony: {
        badge: "Témoignages Clients",
        title: "La Confiance de Nos Clients au Maroc",
        desc: "Découvrez les retours d'expérience de nos clients agriculteurs, industriels et particuliers qui ont fait le choix de l'énergie solaire avec MHTD."
      },
      contact: {
        heroBadge: "Étude & Devis",
        heroTitle: "Consultation Gratuite",
        heroDesc: "Bénéficiez de l'accompagnement de nos experts pour concrétiser votre projet d'énergie solaire et d'arrosage au Maroc.",
        stepsBadge: "Comment Ça Marche ?",
        stepsTitle: "Un Accompagnement en 3 Étapes Simples",
        stepsDesc: "Du premier contact jusqu'à la mise en service de vos panneaux, bénéficiez de notre expertise terrain.",
        step1Title: "Remplissage du Formulaire",
        step1Desc: "Transmettez-nous les détails de votre besoin (pompage, arrosage, résidentiel ou matériel) en quelques clics.",
        step2Title: "Échange & Étude Préliminaire",
        step2Desc: "Notre équipe technique prend contact avec vous pour dimensionner votre projet et répondre à toutes vos questions.",
        step3Title: "Visite Technique",
        step3Desc: "Nous planifions une visite technique sur votre terrain pour valider la faisabilité et vous remettre un devis clé en main.",
        urgentTitle: "Besoin d'une réponse urgente ?",
        urgentDesc: "Nos conseillers solaires sont joignables directement sur WhatsApp.",
        urgentBtn: "Écrire sur WhatsApp",
        formTitle: "Demande de Devis Gratuit",
        formDesc: "Remplissez ce formulaire et recevez une estimation personnalisée sous 24h.",
        formName: "Nom et Prénom",
        formEmail: "Adresse Email",
        formPhone: "Numéro de Téléphone (WhatsApp)",
        formSubject: "Solution Souhaitée",
        formMessage: "Détails de Votre Projet (Optionnel)",
        formSubmit: "Envoyer ma Demande de Devis",
        formSending: "Envoi en cours...",
        formSuccess: "Votre demande a été envoyée avec succès ! Notre équipe vous contactera dans les plus brefs délais.",
        formError: "Une erreur est survenue lors de l'envoi. Veuillez nous contacter directement au +212 626425469 ou sur WhatsApp.",
        officeBadge: "Notre Siège",
        officeTitle: "Venez Nous Rendre Visite",
        officeDesc: "Notre agence est située à Sidi Allal El Bahraoui. Nous vous accueillons du lundi au samedi pour étudier vos projets et découvrir nos équipements.",
        practicalInfo: "Informations Pratiques",
        addressLabel: "Adresse :",
        hoursLabel: "Horaires d'Ouverture :",
        hoursWeek: "Lundi - Samedi : 08h30 - 18h30",
        hoursSunday: "Dimanche : Sur rendez-vous",
        phoneLabel: "Téléphone / WhatsApp :",
        emailLabel: "Email :",
        mapsBtn: "Ouvrir dans Google Maps"
      },
      warranty: {
        badge: "Engagement Qualité",
        title: "Politique de Garantie",
        desc: "Chez MHTD, votre investissement solaire est protégé par des garanties fabricants certifiées et un suivi technique rigoureux.",
        intro1: "Chez MHTD, notre priorité absolue est d'assurer que votre transition vers l'énergie solaire et l'arrosage automatique soit entièrement sécurisée et rentable. C'est pourquoi la totalité de nos équipements provient de fabricants de renommée mondiale bénéficiant de garanties étendues.",
        intro2: "Les conditions précises et durées de garantie sont détaillées dans chaque devis estimatif selon le modèle et le constructeur retenu.",
        solarBadge: "Modules Photovoltaïques",
        solarTitle: "Panneaux Solaires",
        solarG1: "Garantie produit fabricant : 10 à 12 ans contre tout défaut matériel.",
        solarG2: "Garantie performance linéaire : 25 ans garantissant un rendement minimal de 80-85%.",
        certLabel: "Certificats de garantie constructeurs :",
        jinkoBtn: "Garantie Jinko Solar",
        jaBtn: "Garantie JA Solar",
        inverterBadge: "Électronique & Pompage",
        inverterTitle: "Onduleurs & Pompes",
        inverterG1: "Onduleurs solaires : 1 à 5 ans de garantie constructeur selon le modèle (On-Grid / Off-Grid / Hybride).",
        inverterG2: "Pompes immergées & variateurs : Garantie constructeur avec tests de conformité avant mise en service.",
        inverterG3: "Date de prise d'effet : Date d'installation officielle ou 30 jours après livraison.",
        claimNotice: "Toute réclamation est prise en charge par notre équipe technique basée à Sidi Allal El Bahraoui.",
        helpTitle: "Une question concernant la garantie de votre matériel ?",
        helpDesc: "Notre service technique est disponible pour vous assister et vérifier la couverture de vos équipements.",
        helpBtn: "Contacter le Support Garantie sur WhatsApp",
        whatsappMsg: "Bonjour MHTD, j'ai une question concernant la garantie de mes équipements."
      },
      footer: {
        desc: "MHTD — Entreprise marocaine de référence spécialisée dans l'énergie solaire photovoltaïque, le pompage solaire et les solutions d'arrosage automatique.",
        navTitle: "Navigation",
        solutionsTitle: "Nos Solutions",
        contactTitle: "Contact Direct",
        copyright: "Copyright MHTD ©",
        realizedBy: "Réalisé par",
        legalLink: "Mentions Légales & Confidentialité",
        sol1: "Pompage Solaire Agricole",
        sol2: "Systèmes d'Arrosage Automatique",
        sol3: "Chauffe-Eau Solaire (200L / 300L)",
        sol4: "Installation Raccordée (On-Grid)",
        sol5: "Système Solaire Hybride",
        address: "HAY ENNASSER, Sidi Allal el Bahraoui 15252, Maroc",
        hours: "Lun - Sam : 08h30 - 18h30",
        privacyLink: "Mentions Légales & Données"
      }
    }
  },
  ar: {
    translation: {
      topbar: {
        location: "سيدي علال البحراوي، المغرب",
        freeQuote: "عرض سعر مجاني خلال 24 ساعة",
        whatsappFloating: "تواصل عبر واتساب"
      },
      nav: {
        home: "الرئيسية",
        consultation: "طلب استشارة",
        services: "خدماتنا",
        solutions: "حلولنا المتكاملة",
        shop: "متجر التجهيزات",
        contactLocation: "الاتصال وموقعنا",
        warranty: "سياسة الضمان",
        quoteBtn: "طلب عرض أسعار"
      },
      slider: {
        slide1: {
          badge: "☀️ الطاقة الشمسية الفلاحية",
          title: "ضخ المياه بالطاقة الشمسية واستقلالية طاقية",
          desc: "شغّل آبارك وأحواضك المائية بدون محروقات ولا فواتير باهظة، بفضل أنظمتنا الشمسية عالية الكفاءة الملائمة للبيئة المغربية.",
          whatsappMsg: "السلام عليكم MHTD، أود الحصول على عرض سعر لتركيب نظام ضخ المياه بالطاقة الشمسية."
        },
        slide2: {
          badge: "💧 السقي الذكي",
          title: "أنظمة السقي الأوتوماتيكي والري بالتنقيط",
          desc: "وفّر المياه وضاعف إنتاجية محاصيلك وأشجارك المثمرة بواسطة شبكات ري عصرية ومبرمجة بدقة.",
          whatsappMsg: "السلام عليكم MHTD، أود الحصول على عرض سعر لنظام سقي أوتوماتيكي."
        },
        slide3: {
          badge: "⚡ الطاقة السكنية والصناعية",
          title: "محطات شمسية متصلة بالشبكة الكهربائية",
          desc: "خفّض فاتورة الكهرباء بنسبة تصل إلى 80% في المنازل والضيعات والمصانع بفضل الطاقة الكهروضوئية المتصلة بالشبكة (On-Grid).",
          whatsappMsg: "السلام عليكم MHTD، أود الاستفسار عن محطة الطاقة الشمسية المتصلة بالشبكة."
        },
        ctaWhatsapp: "عرض سعر مجاني عبر واتساب",
        ctaSolutions: "اكتشف حلولنا"
      },
      stats: {
        stat1_value: "+100",
        stat1_label: "مشروع منجز",
        stat1_desc: "في مختلف ربوع المغرب",
        stat2_value: "25 سنة",
        stat2_label: "ضمان الأداء",
        stat2_desc: "ألواح شمسية معتمدة",
        stat3_value: "100%",
        stat3_label: "طاقة نظيفة",
        stat3_desc: "اقتصاد فوري في التكاليف",
        stat4_value: "مجاناً",
        stat4_label: "دراسة واستشارة",
        stat4_desc: "إجابة خلال 24 ساعة"
      },
      solutions: {
        badge: "حلول جاهزة ومفصلة",
        title: "حلولنا في الطاقة الشمسية والسقي الأوتوماتيكي",
        desc: "تقوم شركة MHTD بدراسة وتوريد وتركيب وصيانة أنظمة شمسية متينة واقتصادية بأعلى معايير الجودة في المغرب.",
        btnWhatsapp: "طلب عرض سعر عبر واتساب",
        btnForm: "استمارة طلب السعر",
        quoteMsg: "السلام عليكم MHTD، أود الحصول على عرض سعر مجاني لخدمة : {{title}}.",
        items: [
          {
            id: 1,
            title: "ضخ المياه بالطاقة الشمسية",
            badge: "فلاحي وآبار",
            desc: "حلول ضخ شمسي مخصصة لآبار الفلاحة والاستعمال اليومي دون الحاجة للوقود أو الصيانة المتكررة."
          },
          {
            id: 2,
            title: "السخانات الشمسية للماء",
            badge: "اقتصاد 70%",
            desc: "تشكيلة متميزة من السخانات الشمسية سعة 200 و 300 لتر بأداء فائق مع التركيب والتشغيل المعتمد."
          },
          {
            id: 3,
            title: "الإنارة الشمسية",
            badge: "استقلالية 100%",
            desc: "إنارة الضيعات والمزارع والطرق والحدائق بأعمدة وكشافات LED شمسية متطورة ذات عمر افتراضي طويل."
          },
          {
            id: 4,
            title: "السقي الأوتوماتيكي",
            badge: "ري ذكي",
            desc: "عصْرن سقي ضيعتك ببرامج الري بالتنقيط الذكية وأجهزة التحكم التلقائي التي تحافظ على الموارد المائية."
          },
          {
            id: 5,
            title: "الربط بالشبكة الكهربائية",
            badge: "On-Grid",
            desc: "استهلك الكهرباء المولدة من ألواحك نهاراً وقلّص فواتيرك الشهرية بنسبة ملحوظة مع إمكانية تصدير الفائض."
          },
          {
            id: 6,
            title: "النظام الشمسي الهجين",
            badge: "بطاريات واحتياط",
            desc: "نظام ذكي بمحولات متطورة وبطاريات لتخزين الكهرباء وضمان استمرارية التيار طوال اليوم والليل دون انقطاع."
          }
        ]
      },
      products: {
        badge: "تجهيزات أصلية ومعتمدة",
        title: "متجر المعدات الشمسية والأجهزة الاحترافية",
        desc: "تصفح باقة مختارة من أفضل المعدات العالمية: ألواح كهروضوئية عالية الإنتاجية، محولات طاقة، مضخات غاطسة، وخزانات التحكم والحماية.",
        btnOrder: "طلب فوري عبر واتساب",
        btnDetails: "معاينة تفاصيل المنتج",
        notFoundTitle: "المنتج غير موجود",
        notFoundDesc: "المعدات المطلوبة غير متوفرة حالياً أو تم نقلها.",
        btnBack: "العودة للرئيسية",
        btnBackShop: "العودة للمتجر",
        featuresHeader: "الخصائص والمواصفات التقنية :",
        whatsappOrder: "الطلب وعرض الأسعار عبر واتساب",
        whatsappMsg: "السلام عليكم MHTD، أود طلب أو الاستفسار عن عرض سعر لمنتج : {{title}}.",
        detailMsg: "السلام عليكم شركة MHTD، أنا مهتم بالمنتج: {{title}}. هل يمكن تزويدي بالمزيد من التفاصيل وسعر التوريد والتركيب؟"
      },
      values: {
        badge: "لماذا تختار MHTD",
        title: "شريككم الموثوق في الطاقة الشمسية بالمغرب",
        desc: "نجمع بين الكفاءة التقنية العالية والمعدات العالمية الرائدة وفهمنا العميق لاحتياجات الفلاح والمستهلك المغربي.",
        items: [
          {
            id: 1,
            header: "خبرة هندسية دقيقة",
            title: "دراسة وحلول مخصصة",
            desc: "بفضل سنوات من الخبرة الميدانية في المغرب، نقوم بتحديد الحجم الأمثل للمحطات لضمان أعلى مردودية بأقل تكلفة."
          },
          {
            id: 2,
            header: "مواكبة مستمرة",
            title: "خدمة عملاء وما بعد البيع",
            desc: "من المعاينة الأولى في الميدان حتى إطلاق المحطة والمتابعة الدورية، يرافقكم فريق من المهندسين والتقنيين المؤهلين."
          },
          {
            id: 3,
            header: "التزام بيئي واقتصادي",
            title: "استدامة وتوفير حقيقي",
            desc: "تساهم حلولنا في خفض مصاريف التشغيل بشكل ملموس مع المحافظة على الثروة المائية والبيئة للأجيال القادمة."
          }
        ]
      },
      testimony: {
        badge: "آراء الزبناء",
        title: "ثقة عملائنا في مختلف أنحاء المغرب",
        desc: "اطلع على تجارب الفلاحين والمستثمرين وأصحاب المنازل الذين اختاروا الطاقة الشمسية مع MHTD."
      },
      contact: {
        heroBadge: "دراسة وعروض أسعار",
        heroTitle: "استشارة مجانية",
        heroDesc: "استفد من توجيهات خبرائنا لتحقيق مشروعك في الطاقة الشمسية والسقي الأوتوماتيكي بالمغرب.",
        stepsBadge: "كيف نعمل ؟",
        stepsTitle: "مواكبة واضحة في 3 مراحل",
        stepsDesc: "من أول اتصال حتى تشغيل المحطة، تستفيدون من خبرتنا الميدانية وتتبعنا الدقيق.",
        step1Title: "ملء استمارة الطلب",
        step1Desc: "أرسل لنا تفاصيل احتياجك (ضخ، سقي، طاقة منزلية أو شراء تجهيزات) في دقائق قليلة.",
        step2Title: "دراسة تقنية وتواصل",
        step2Desc: "يتصل بكم فريقنا الهندسي لتحديد المعطيات الدقيقة والإجابة عن كافة استفساراتكم.",
        step3Title: "زيارة ميدانية",
        step3Desc: "نقوم بزيارة أرضكم لمعاينة الموقع وتأكيد الجدوى وتسليمكم عرض أسعار تفصيلي وشامل.",
        urgentTitle: "هل تحتاج إجابة عاجلة ؟",
        urgentDesc: "مستشارونا في الطاقة الشمسية متاحون مباشرة على واتساب.",
        urgentBtn: "مراسلة عبر واتساب",
        formTitle: "طلب استشارة مجانية",
        formDesc: "املأ هذه الاستمارة للحصول على دراسة وتقدير مالي مخصص خلال 24 ساعة.",
        formName: "الاسم الكامل",
        formEmail: "البريد الإلكتروني",
        formPhone: "رقم الهاتف (واتساب)",
        formSubject: "الخدمة أو الحل المطلوب",
        formMessage: "تفاصيل المشروع (اختياري)",
        formSubmit: "إرسال طلب العرض",
        formSending: "جاري الإرسال...",
        formSuccess: "تم إرسال طلبكم بنجاح! سيتواصل معكم فريقنا التقني في أقرب وقت ممكن.",
        formError: "حدث خطأ أثناء الإرسال. يرجى الاتصال بنا مباشرة على 0626425469 أو عبر واتساب.",
        officeBadge: "مقر الشركة",
        officeTitle: "تفضلوا بزيارتنا",
        officeDesc: "يقع مقرنا بمدينة سيدي علال البحراوي. نرحب بكم من الاثنين إلى السبت للاطلاع على نماذج التجهيزات ومناقشة مشاريعكم.",
        practicalInfo: "معلومات عملية",
        addressLabel: "العنوان :",
        hoursLabel: "أوقات العمل :",
        hoursWeek: "الاثنين - السبت : 08:30 إلى 18:30",
        hoursSunday: "الأحد : بالموعد المسبق",
        phoneLabel: "الهاتف / واتساب :",
        emailLabel: "البريد الإلكتروني :",
        mapsBtn: "فتح في خرائط Google"
      },
      warranty: {
        badge: "التزام بالجودة",
        title: "سياسة الضمان المعتمد",
        desc: "مع MHTD، استثماركم الشمسي محمي بضمانات معتمدة من كبرى الشركات المصنعة عالمياً وتتبع تقني دائم.",
        intro1: "هدفنا الأساسي في MHTD هو أن يكون انتقالكم نحو الطاقة الشمسية آمناً ومربحاً ومضموناً لسنوات طويلة. لذلك، فإن جميع ألواحنا وتجهيزاتنا صادرة عن مصنّعين عالميين مصنفين في الفئة الأولى (Tier-1).",
        intro2: "شروط وفترات الضمان التفصيلية تكون مبينة بدقة في كل عرض أسعار وفاتورة تسليم.",
        solarBadge: "الألواح الكهروضوئية",
        solarTitle: "الألواح الشمسية",
        solarG1: "ضمان المصنع على المنتج : 10 إلى 12 سنة ضد أي عيب تصنيعي.",
        solarG2: "ضمان الأداء الخطي : 25 سنة بإنتاجية لا تقل عن 80-85%.",
        certLabel: "شهادات الضمان الرسمية للمصنعين :",
        jinkoBtn: "ضمان جينكو سولار Jinko",
        jaBtn: "ضمان جي إيه سولار JA Solar",
        inverterBadge: "المحولات والإلكترونيات",
        inverterTitle: "محولات الطاقة والمضخات",
        inverterG1: "محولات الطاقة (الانفرتر) : ضمان من سنة إلى 5 سنوات حسب الطراز ونوع النظام.",
        inverterG2: "المضخات الغاطسة وأجهزة التحكم : ضمان المصنع مع اختبارات الجودة قبل التسليم والتشغيل.",
        inverterG3: "تاريخ سريان الضمان : من تاريخ التركيب الرسمي أو 30 يوماً من استلام المعدات.",
        claimNotice: "تتم معالجة جميع الاستفسارات وطلبات الصيانة بواسطة فريقنا التقني المتواجد بسيدي علال البحراوي.",
        helpTitle: "هل لديكم سؤال حول ضمان معداتكم ؟",
        helpDesc: "فريق الدعم الفني جاهز للإجابة والتأكد من تغطية جميع مكونات محطتكم.",
        helpBtn: "التواصل مع الدعم الفني للضمان عبر واتساب",
        whatsappMsg: "السلام عليكم شركة MHTD، لدي استفسار بخصوص ضمان المعدات والتجهيزات."
      },
      footer: {
        desc: "MHTD — مقاولة مغربية رائدة متخصصة في الطاقة الشمسية الكهروضوئية، الضخ الشمسي، وأنظمة الري والسقي الأوتوماتيكي.",
        navTitle: "روابط سريعة",
        solutionsTitle: "حلولنا الرئيسية",
        contactTitle: "معلومات الاتصال",
        copyright: "جميع الحقوق محفوظة MHTD ©",
        realizedBy: "تصميم وتطوير",
        legalLink: "الإشعار القانوني والخصوصية",
        sol1: "ضخ المياه بالطاقة الشمسية",
        sol2: "أنظمة السقي الأوتوماتيكي",
        sol3: "سخانات الماء بالطاقة الشمسية",
        sol4: "محطات متصلة بالشبكة (On-Grid)",
        sol5: "أنظمة شمسية هجينة مع بطاريات",
        address: "حي النصر، سيدي علال البحراوي 15252، المغرب",
        hours: "الإثنين - السبت: 08:30 - 18:30",
        privacyLink: "الخصوصية والشروط"
      }
    }
  }
};

const savedLang = localStorage.getItem('mhtd_lang') || 'ar';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
  });

// Apply document direction and language on load
if (typeof document !== 'undefined') {
  document.documentElement.dir = savedLang === 'fr' ? 'ltr' : 'rtl';
  document.documentElement.lang = savedLang;
}

export default i18n;


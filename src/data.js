import chauffeEauSolaire from "./images/chauffe-eau-solaire.png";
import jasolar from "./images/jasolar.png";
import onduleur from "./images/onduleur.png";
import accessoires from "./images/accessoires.png";
import coffret from "./images/coffret1.png";
import eclairageSolaire from "./images/eclairage-solaire.png";
import pompes from "./images/pompe.png";

export const productsData = [
  {
    id: 1,
    title: "Chauffe-eau solaire",
    title_ar: "سخان الماء الشمسي",
    discreption: "Le chauffe-eau solaire est une solution écologique et économique pour répondre à vos besoins en eau chaude.",
    discreption_ar: "حل إيكولوجي واقتصادي متطور لتلبية احتياجاتكم من الماء الساخن طوال السنة.",
    featrues: "Le système de chauffe-eau solaire 300L (ou 200L) est composé de capteurs solaires thermiques et d'un ballon de stockage isolé.",
    featrues_ar: "نظام سخان شمسي سعة 200 أو 300 لتر بألواح حرارية عالية الجودة وخزان معزول متين مقاوم للصدأ.",
    imgurl: chauffeEauSolaire,
  },
  {
    id: 2,
    title: "Coffret et Armoire de commande",
    title_ar: "خزائن ولوحات التحكم الكهربائية",
    discreption: "Que ce soit pour des installations solaires, des projets industriels ou résidentiels, les armoires sont indispensables pour la protection.",
    discreption_ar: "لوحات كهربائية متطورة مصممة لحماية محطات الطاقة الشمسية والمنشآت الفلاحية والصناعية.",
    featrues: "Explorez notre gamme complète de coffrets personnalisés en fonction de la taille de votre installation, fabriqués avec des composants certifiés.",
    featrues_ar: "خزائن مفصلة حسب حجم المنشأة والمعدات، مصنوعة من مواد معدنية وPVC متينة لضمان حماية قصوى.",
    imgurl: coffret,
  },
  {
    id: 3,
    title: "Onduleurs solaires On-Grid, Off-Grid & Hybrides",
    title_ar: "محولات الطاقة الشمسية (On-Grid / Off-Grid / Hybride)",
    discreption: "Les onduleurs solaires sont les composants essentiels pour convertir et optimiser l'énergie de vos panneaux photovoltaïques.",
    discreption_ar: "محولات شمسية موثوقة لتحويل وتدبير الطاقة الكهروضوئية بكفاءة عالية واستقرار تام.",
    featrues: "Gamme complète adaptée à chaque besoin : injection réseau (On-Grid), sites isolés autonomes (Off-Grid) et solutions hybrides avec batteries.",
    featrues_ar: "محولات متصلة بالشبكة ومحولات مستقلة وهجينة متوافقة مع البطاريات من كبرى الماركات العالمية المعتمدة.",
    imgurl: onduleur,
  },
  {
    id: 4,
    title: "Accessoires et Câblage solaire",
    title_ar: "إكسسوارات ومستلزمات التركيب الشمسي",
    discreption: "Accessoires solaires essentiels pour une installation complète, performante et sécurisée.",
    discreption_ar: "كابلات شمسية معتمدة، قواطع تيار، هياكل تثبيت مقاومة للرياح، وبطاريات عالية السعة.",
    featrues: "Câbles solaires certifiés anti-UV, connecteurs MC4 étanches, parafoudres, disjoncteurs DC et structures de montage robustes.",
    featrues_ar: "معدات ومستلزمات أصلية تضمن سلامة واستدامة المنظومة الشمسية لسنوات طويلة بأعلى معايير السلامة.",
    imgurl: accessoires,
  },
  {
    id: 5,
    title: "Éclairage solaire autonome",
    title_ar: "الإنارة الشمسية الخارجية المستقلة",
    discreption: "Une solution innovante et durable pour illuminer vos extérieurs, fermes, routes et parcs sans facture d'électricité.",
    discreption_ar: "أعمدة وكشافات إضاءة شمسية متكاملة لإنارة الضيعات والمزارع والممرات دون الحاجة لشبكة كهربائية.",
    featrues: "Systèmes d'éclairage LED haute puissance, batterie lithium longue durée intégrée et allumage automatique crépusculaire.",
    featrues_ar: "سهلة التركيب دون كابلات أرضية، مجهزة ببطاريات ليثيوم طويلة الأمد وحساسات حركة ذكية ومقاومة للماء والعوامل الجوية.",
    imgurl: eclairageSolaire,
  },
  {
    id: 6,
    title: "Panneaux solaires photovoltaïques",
    title_ar: "الألواح الشمسية الكهروضوئية",
    discreption: "Panneaux solaires haute efficacité des plus grands fabricants mondiaux (Tier-1) tels que JA Solar et Jinko Solar.",
    discreption_ar: "ألواح شمسية عالية الجودة والكفاءة من الفئة الأولى (Tier-1) مثل JA Solar و Jinko Solar.",
    featrues: "Modules monocristallins half-cell avec rendements élevés, de 280W à 660W, assortis d'une garantie de performance de 25 ans.",
    featrues_ar: "طرازات متعددة بقدرات تبدأ من 280W وتصل إلى 660W نصف خلوية (Half-Cell) مع ضمان أداء خطي 25 سنة.",
    imgurl: jasolar,
  },
  {
    id: 7,
    title: "Pompes immergées solaires",
    title_ar: "المضخات الغاطسة الفلاحية",
    discreption: "Pompes immergées spécialement conçues pour puiser l'eau des puits profonds et alimenter les bassins agricoles.",
    discreption_ar: "مضخات شمسية غاطسة قوية لسحب مياه الآبار العميقة والسطحية بكفاءة فائقة وموثوقية عالية.",
    featrues: "Corps en acier inoxydable (Inox), moteur à haut rendement énergétique et variateur solaire intelligent pour régulation automatique.",
    featrues_ar: "مصنوعة من الفولاذ المقاوم للصدأ (Inox)، مصممة للعمل الشاق وتدفق المياه العالي مع أجهزة التحكم الذكية.",
    imgurl: pompes,
  },
];

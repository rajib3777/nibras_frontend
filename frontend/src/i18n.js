import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "home": "Home",
      "quran_learning": "QURAN LEARNING",
      "hero_desc": "Master Quran reading and recitation with structured online lessons taught by certified instructors. Whether for kids or adults, our easy learning path makes studying the Quran simple, flexible, and effective.",
      "register_now": "Register Now",
      "history": "Institutional History",
      "teacher_staff": "Teachers & Staff",
      "teacher_directory": "Teacher Directory",
      "staff": "Staff",
      "online_admission": "Online Admission",
      "academic_info": "Academic Info",
      "exam_routine": "Exam Routine",
      "form_download": "Admission Form",
      "admit_card": "Admit Card",
      "marksheet": "Mark Sheet",
      "certificate": "Certificate",
      "photo": "Photo",
      "video": "Video",
      "others": "Others",
      "notice": "Notice Board",
      "contact": "Contact",
      "login": "Login",
      "branch": "Branches",
      "emergency_notice": "Emergency Announcement: Our website development is ongoing. We apologize for any temporary inconvenience. Work will be completed tomorrow. Thank you for staying with us.",
      "history_title": "Institutional History",
      "history_desc_1": "Madrasa education is ancient and vital in our country. Nibras Madrasah brings a scientific and time-appropriate approach to this legacy, ensuring students develop strong character and faith. Starting with a group of talented youth, we expanded to separate girls' sections, multi-campuses in Mohammadpur and Banasree, and a dedicated Tahfizul Quran campus.",
      "history_desc_2": "In 2005, the decision was made to establish a modern institution under Nibras Foundation. Nibras International Madrasah began its journey in Banasree in 2006. Over the years, we expanded to separate girls' sections, multi-campuses in Mohammadpur and Banasree, and a dedicated Tahfizul Quran campus. In 2006, Maulana Zainul Abedin was elected as Chairman of the Madrasah Management Committee and Mohammad Ali Chowdhury as Chairman of the Foundation.",
      "student_guardian_corner": "Student & Guardian Corner",
      "teacher_staff_corner": "Teacher & Staff Corner",
      "download": "Downloads",
      "address": "House-1, Road-5, Block-D, Banasree, Rampura, Dhaka-1219",
      "phone": "01909995555, 01909994444, 01711069898",
      "footer_credit": "© All Rights Reserved: Nibras Madrasah. Technical Support: Codeastro",
    }
  },
  bn: {
    translation: {
      "home": "হোম",
      "quran_learning": "কুরআন শিক্ষা",
      "hero_desc": "প্রত্যায়িত প্রশিক্ষকদের দ্বারা শেখানো কাঠামোগত অনলাইন পাঠের মাধ্যমে কুরআন পাঠ এবং তিলাওয়াতে দক্ষ হন। শিশু বা প্রাপ্তবয়স্কদের জন্য হোক না কেন, আমাদের সহজ শিক্ষা পদ্ধতি কুরআনের অধ্যয়নকে সহজ, নমনীয় এবং কার্যকর করে তোলে।",
      "register_now": "নিবন্ধন করুন",
      "history": "প্রতিষ্ঠানের ইতিহাস",
      "teacher_staff": "শিক্ষক ও স্টাফ",
      "teacher_directory": "শিক্ষক মণ্ডলী",
      "staff": "স্টাফ",
      "online_admission": "অনলাইন এডমিশন",
      "academic_info": "একাডেমিক তথ্য",
      "exam_routine": "পরীক্ষার রুটিন",
      "form_download": "ভর্তি ফরম ডাউনলোড",
      "admit_card": "এডমিট কার্ড",
      "marksheet": "মার্কশিট",
      "certificate": "সার্টিফিকেট",
      "photo": "ফটো",
      "video": "ভিডিও",
      "others": "অন্যান্য",
      "notice": "নোটিশ বোর্ড",
      "contact": "যোগাযোগ",
      "login": "লগইন",
      "branch": "শাখা",
      "emergency_notice": "জরুরী ঘোষণা : আমাদের ওয়েব সাইটের সার্বিক উন্নয়ন এর কাজ চলছে। কাজ চলাকালীন অবস্থায় , আপনাদের সাময়িকভাবে কিছুটা অসুবিধা হতে পারে এর জন্য আমরা আন্তরিকভাবে দুক্ষিত । আমাদের ওয়েবসাইট উন্নয়নের কাজটি আগামিকাল শেষ হবে। আমাদের সাথে থাকার জন্য ধন্যবাদ।",
      "history_title": "প্রতিষ্ঠানের ইতিহাস",
      "history_desc_1": "আমাদের দেশে প্রচলিত শিক্ষাধারাগুলোর মধ্যে মাদরাসা শিক্ষাধারা অত্যন্ত প্রাচীন ও গুরুত্বপূর্ণ। এ ধারাকে বর্তমানে অত্যন্ত সময়োপযোগী ও বিজ্ঞানসম্মতভাবে বিন্যাস করা হয়েছে। এটি এমন এক সমন্বিত শিক্ষাধারা, যার মাধ্যমে একজন শিক্ষার্থীর ব্যক্তিসত্তা বিকাশের পথ হয় উন্মুক্ত, চরিত্র হয় সুন্দর, ঈমান হয় সুদৃঢ়, সমাজের প্রতি আপন দায়-দায়িত্ব পালনের অনুভূতি হয় তীব্র। স্বীয় দায়িত্ব পালনের বিষয়ে পরকালে জবাবদিহিতার ভয় থাকে অন্তরে সদা জাগ্ৰত।",
      "history_desc_2": "২০০৫ সালে আলোচনা হয় নিবরাস ফউন্ডেশনের উদ্যোগে একটি প্রতিষ্ঠান প্রতিষ্ঠা করা হবে। প্রতিষ্ঠানটি হবে আধুনিক মানসম্পন্ন। নৈতিকতাতো থাকতেই হবে। প্রস্তাব হয় মালয়েশিয়ার আদলে একটি প্রতিষ্ঠান করার। বিস্তারিত আলোচনা শেষে ২০০৭ সাল থেকেই এর কার্যক্রম আরম্ভ করার চূড়ান্ত সিদ্ধান্ত হয়। নাম দেয়া হয় “নিবরাস ইন্টারন্যাশনাল মাদরাসা”। ২০০৬ এর শেষ দিকে বনশ্রীতে নিবরাস ফাউন্ডেশনের উদ্যোগে শুরু হয় নিবরাস ইন্টারন্যাশনাল মাদরাসার কার্যক্রম। ২ সেপ্টেম্বর ২০০৬ তারিখের সভায় অধ্যক্ষ মাওলানা যাইনুল আবেদীনকে মাদরাসা পরিচালনা কমিটির সভাপতি ও জনাব মোহাম্মদ আলী চৌধুরীকে ফাউন্ডেশনের চেয়ারম্যান হিসেবে নির্বাচন করি।",
      "student_guardian_corner": "শিক্ষার্থী ও অভিভাবক কর্ণার",
      "teacher_staff_corner": "শিক্ষক ও স্টাফ কর্ণার",
      "download": "ডাউনলোড",
      "address": "বাড়ি-১, রোড-৫, ব্লক-ডি, বনশ্রী, রামপুরা, ঢাকা-১২১৯",
      "phone": "০১৯০৯৯৯৫৫৫৫, ০১৯০৯৯৯৪৪৪৪, ০১৭১১০৬৯৮৯৮",
      "footer_credit": "© সকল কিছুর স্বত্বাধিকারঃ নিবরাস মাদরাসা। সকল কারিগরী সহযোগিতায়ঃ Codeastro",
    }
  },
  ar: {
    translation: {
      "home": "الصفحة الرئيسية",
      "quran_learning": "تعلم القرآن",
      "hero_desc": "أتقن قراءة القرآن وتلاوته من خلال دروس منظمة عبر الإنترنت يقدمها مدربون معتمدون. سواء للأطفال أو الكبار، فإن مسارنا التعليمي السهل يجعل دراسة القرآن بسيطة ومرنة وفعالة.",
      "register_now": "سجل الآن",
      "history": "تاريخ المؤسسة",
      "teacher_staff": "المعلمون والموظفون",
      "teacher_directory": "هيئة التدريس",
      "staff": "الموظفون",
      "online_admission": "القبول عبر الإنترنت",
      "academic_info": "المعلومات الأكاديمية",
      "exam_routine": "جدول الامتحانات",
      "form_download": "تحميل نموذج القبول",
      "admit_card": "بطاقة الدخول",
      "marksheet": "کشف الدرجات",
      "certificate": "الشهادة",
      "photo": "صور",
      "video": "فيديو",
      "others": "آخرى",
      "notice": "لوحة الإعلانات",
      "contact": "اتصل بنا",
      "login": "تسجيل الدخول",
      "branch": "الفروع",
      "emergency_notice": "إعلان هام: جاري تطوير الموقع. نعتذر عن أي إزعاج مؤقت. سينتهي العمل غداً. شكراً لبقائكم معنا.",
      "history_title": "تاريخ المؤسسة",
      "history_desc_1": "التعليم المدرسي في بلادنا قديم ومهم للغاية. مدرسة نبراس تقدم نهجاً علمياً لهذا التراث.",
      "history_desc_2": "بدأت مدرسة نبراس رحلتها في عام ٢٠٠٦ بجهود نخبة من الشباب المبدعين، وتوسعت لتشمل فروعاً متعددة. في عام ٢٠٠٦، تم انتخاب مولانا زين العابدين رئيساً للجنة إدارة المدرسة ومحمد علي شودري رئيساً للمؤسسة.",
      "student_guardian_corner": "ركن الطلاب وأولياء الأمور",
      "teacher_staff_corner": "ركن المعلمين والموظفين",
      "download": "التحميلات",
      "address": "منزل-١، طريق-٥، بلوك-د، بناسري، رامبورا، داكا-١٢١٩",
      "phone": "٠١٩٠৯৯৯৫৫৫৫, ٠১৯০৯৯৯৪৪৪৪, ٠١৭১১০৬৯৮৯৮",
      "footer_credit": "© جميع الحقوق محفوظة لمدرسة نبراس. جميع التعاون الفني: Codeastro",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'bn',
    lng: 'bn', // Force Bangla as default for now to ensure visibility
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import img1 from "../assets/temple.png";

export default function About() {
  const { language } = useLanguage();
  const t = (en, mr) => (language === "mr" ? mr : en);

  return (
    <section className="bg-[#FFF9F2] min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Decorative Traditional Border Top */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-600"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm"
          >
            {t("75 Years of Legacy", "७५ वर्षांचा वारसा")}
          </motion.span>
          <h1 className="text-[#D32F2F] font-serif font-bold text-5xl md:text-7xl mb-4 mt-2 drop-shadow-sm">
            {t("About Us", "आमच्याबद्दल")}
          </h1>
          <div className="flex justify-center items-center gap-4">
            <div className="h-[2px] w-16 bg-orange-300"></div>
            <span className="text-yellow-600 text-2xl">🚩</span>
            <div className="h-[2px] w-16 bg-orange-300"></div>
          </div>
        </div>

        {/* 1. Founders & History Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Elegant Image Frame */}
            <div className="relative p-4 bg-white shadow-2xl rounded-sm border border-gray-100">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-yellow-500"></div>
              <img 
                src={img1} 
                alt="Temple History" 
                className="w-full h-auto rounded-sm shadow-inner"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#D32F2F]"></div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-[#D32F2F] mb-6 border-b-2 border-yellow-500 pb-2 w-fit">
              {t("The Foundation (1952)", "स्थापना आणि इतिहास")}
            </h2>
            <div className="space-y-4 text-gray-800 text-lg leading-relaxed font-medium">
              <p className="bg-orange-50 p-4 rounded-r-xl border-l-4 border-orange-500 italic">
                {t(
                  "Established by Late Daulat Putlaji Telange (Master) and Late Vithoba Moruji Kalekar (Master) around 75 years ago in 1952.",
                  "१९५२ मध्ये स्वर्गीय दौलत पुतलाजी तेलंगे (मास्तर) आणि स्वर्गीय विठोबा मोरुजी कळेकर (मास्तर) यांनी सुमारे ७५ वर्षांपूर्वी या मंडळाची स्थापना केली."
                )}
              </p>
              <ul className="space-y-3">
                {[
                  { en: "Dedicated to social service and community unity", mr: "सामाजिक सेवा आणि सामुदायिक एकात्मतेसाठी समर्पित" },
                  { en: "Promoting Dharma and the teachings of Lord Rama", mr: "धर्म आणि प्रभू श्रीरामांच्या शिकवणीचा प्रसार" },
                  { en: "Conducting Ram Navami celebrations for decades", mr: "अनेक दशकांपासून अखंड रामनवमी उत्सव" }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-orange-600 font-bold">●</span>
                    {t(item.en, item.mr)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 2. Mission & Values (Colored Cards) */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          <ColoredCard 
            title={t("Our Mission", "आमचे ध्येय")} 
            color="bg-red-700" 
            icon="🎯"
          >
            {t("Harmony, service, and cultural preservation are at our core.", "सुसंवाद, सेवा आणि सांस्कृतिक जतन हे आमचे मूळ आहे.")}
          </ColoredCard>
          <ColoredCard 
            title={t("The Temple", "भव्य मंदिर")} 
            color="bg-orange-600" 
            icon="🕌"
          >
            {t("Renovated and maintaining a large Lord Rama temple in our village near Sudhagad.", "सुधागड जवळील गावात भव्य श्रीराम मंदिराचे नूतनीकरण आणि देखभाल.")}
          </ColoredCard>
          <ColoredCard 
            title={t("Growth", "विकास")} 
            color="bg-yellow-600" 
            icon="🌱"
          >
            {t("Supporting students' education and moral development.", "विद्यार्थ्यांचे शिक्षण आणि नैतिक विकासासाठी सदैव तत्पर.")}
          </ColoredCard>
        </div>

        {/* 3. Festivals & Service Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Festivals */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100"
          >
            <h3 className="text-2xl font-bold text-[#D32F2F] mb-6 flex items-center gap-3">
              <span className="p-2 bg-red-100 rounded-lg">🎊</span>
              {t("Major Festivals", "मुख्य उत्सव")}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {festivals.map((f, i) => (
                <li key={i} className="flex items-center gap-2 bg-[#FFF9F2] p-3 rounded-xl text-gray-700 font-bold border-l-4 border-yellow-500">
                  {t(f.en, f.mr)}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Service */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-red-100"
          >
            <h3 className="text-2xl font-bold text-[#D32F2F] mb-6 flex items-center gap-3">
              <span className="p-2 bg-orange-100 rounded-lg">🤝</span>
              {t("Social Service", "सामाजिक उपक्रम")}
            </h3>
            <div className="space-y-3">
              {socialService.map((s, i) => (
                <div key={i} className="flex items-center gap-4 p-2 hover:bg-red-50 rounded-lg transition-colors">
                  <div className="w-2 h-2 rounded-full bg-red-600"></div>
                  <p className="text-gray-700 font-medium">{t(s.en, s.mr)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 4. Map & Directions */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-500/20 flex flex-col lg:flex-row">
          <div className="p-10 lg:w-2/5 bg-gradient-to-br from-[#D32F2F] to-[#8B0000] text-white">
            <h2 className="text-3xl font-serif font-bold mb-6 italic border-b border-white/20 pb-4">
              {t("Location Details", "स्थान तपशील")}
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="text-2xl">📍</span>
                <p className="text-lg opacity-90 leading-relaxed font-light">
                  Ramwadi, Pachchapur,<br />
                  Maharashtra 412108, India<br />
                  <span className="font-bold text-yellow-400">({t("Near Sudhagad Fort", "सुधागड किल्ल्याजवळ")})</span>
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <span className="text-2xl">🏥</span>
                <p className="opacity-90">{t("Health Awareness & Community Unity", "आरोग्य आणि सामाजिक एकता")}</p>
              </div>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                className="mt-6 inline-flex items-center gap-3 bg-yellow-500 hover:bg-white hover:text-red-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg"
              >
                <span>🚀</span> {t("Get Directions", "नकाशा पहा")}
              </a>
            </div>
          </div>
          <div className="lg:w-3/5 h-[450px]">
            <iframe
              title="Ramwadi Location"
              src="https://www.google.com/maps/place/Ramwadi/@18.52326,73.304055,1679m/data=!3m1!1e3!4m6!3m5!1s0x3be8197b5c94aabd:0xab4f9a0b4782d1e2!8m2!3d18.5232604!4d73.3040552!16s%2Fg%2F11fn53x0zh?hl=en&entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D2"
              className="w-full h-full border-0 grayscale-[10%] hover:grayscale-0 transition-all"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function ColoredCard({ title, children, color, icon }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`${color} p-8 rounded-2xl shadow-xl text-white relative overflow-hidden group`}
    >
      <div className="absolute -right-4 -bottom-4 text-7xl opacity-10 group-hover:scale-125 transition-transform">
        {icon}
      </div>
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="opacity-90 leading-relaxed text-sm font-medium">{children}</p>
    </motion.div>
  );
}

const festivals = [
  { en: "Ram Navami", mr: "राम नवमी" },
  { en: "Sita Navami", mr: "सीता नवमी" },
  { en: "Hanuman Jayanti", mr: "हनुमान जयंती" },
  { en: "Gokul Ashtami", mr: "गोकुळ अष्टमी" },
  { en: "Religious Processions", mr: "धार्मिक मिरवणूक" },
  { en: "Devotional Programs", mr: "भक्ती कार्यक्रम" },
  { en: "Community Prayer", mr: "सामुदायिक प्रार्थना" }
];

const socialService = [
  { en: "Educational support initiatives", mr: "शैक्षणिक मदत उपक्रम" },
  { en: "Health check-up & awareness camps", mr: "आरोग्य तपासणी व जागरूकता" },
  { en: "Cultural, Art and Sports activities", mr: "सांस्कृतिक, कला आणि क्रीडा" },
  { en: "Spiritual tours & Guidance", mr: "आध्यात्मिक सहली आणि मार्गदर्शन" },
  { en: "Volunteer programs", mr: "स्वयंसेवक कार्यक्रम" }
];
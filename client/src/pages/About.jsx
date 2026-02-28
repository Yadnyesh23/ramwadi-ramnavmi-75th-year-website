import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import img1 from "../assets/temple.png";

export default function About() {
  const { language } = useLanguage();

  return (
    <section className="bg-[#FFF9F2] min-h-screen py-16 px-6 relative">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-[#D32F2F] font-bold text-4xl md:text-6xl mb-4">
            {language === "mr" ? "आमच्याबद्दल" : "About Us"}
          </h1>
          <div className="h-1.5 w-32 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        {/* 1. History Section (Split Layout like the video) */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/2"
          >
            <div className="border-12px border-white shadow-2xl relative">
              <img 
                src={img1} 
                alt="Mandals History" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 border border-yellow-500/30 m-2"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-[#D32F2F] mb-6 flex items-center gap-3">
              <span className="text-yellow-600 font-serif">🚩</span>
              {language === "mr" ? "इतिहास" : "Our Legacy"}
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                {language === "mr"
                  ? "हे मंडळ सुमारे ७५ वर्षांपूर्वी १९५२ साली स्वर्गीय दौलत पुतलाजी तेलंगे (मास्तर) आणि स्वर्गीय विठोबा मोरुजी कळेकर (मास्तर) यांनी स्थापन केले."
                  : "This mandal was established in 1952 (75 years ago) by Late Daulat Putlaji Telange and Late Vithoba Moruji Kalekar."}
              </p>
              <p>
                {language === "mr"
                  ? "मंडळ धर्म, सेवा आणि भगवान श्रीराम यांच्या शिकवणीचा प्रसार करण्यासाठी कार्य करते. अनेक दशकांपासून रामनवमी उत्सव सतत साजरा केला जात आहे."
                  : "The mandal works to promote the teachings of Lord Rama, celebrating Ram Navami for decades with unwavering devotion."}
              </p>
            </div>
          </motion.div>
        </div>

        {/* 2. Location & Major Festivals (Grid Layout) */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <InfoCard 
            title={language === "mr" ? "स्थान व मंदिर" : "Location & Temple"}
            icon="🕌"
          >
            {language === "mr"
              ? "हे मंडळ सुधागड किल्ल्याजवळील गावात स्थित आहे. येथे मोठे आणि सुंदर भगवान श्रीराम मंदिर आहे ज्याचे नूतनीकरण मंडळाने केले आहे."
              : "Located near Sudhagad Fort, the mandal maintains a magnificent Lord Rama temple, recently renovated to preserve its glory."}
          </InfoCard>

          <InfoCard 
            title={language === "mr" ? "मुख्य सण" : "Major Festivals"}
            icon="🎊"
          >
            <ul className="grid grid-cols-2 gap-2 text-sm md:text-base">
              <li>• Ram Navami</li>
              <li>• Sita Navami</li>
              <li>• Hanuman Jayanti</li>
              <li>• Gokul Ashtami</li>
            </ul>
          </InfoCard>
        </div>

        {/* 3. Social Work (Full Width Highlight) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white border-l-8 border-[#D32F2F] p-8 md:p-12 shadow-xl rounded-r-xl"
        >
          <h2 className="text-3xl font-bold text-[#D32F2F] mb-8">
            {language === "mr" ? "सामाजिक उपक्रम" : "Social Initiatives"}
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {socialActivities.map((act, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[#D32F2F] mt-1">◈</span>
                <p className="text-gray-700">{language === "mr" ? act.mr : act.en}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// Reusable Info Card Component
function InfoCard({ title, icon, children }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-yellow-500 hover:shadow-2xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-[#333] mb-4">{title}</h3>
      <div className="text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
}

const socialActivities = [
  { mr: "विद्यार्थ्यांसाठी शैक्षणिक मदत", en: "Educational support for students" },
  { mr: "आरोग्य तपासणी शिबिरे", en: "Health check-up camps" },
  { mr: "आध्यात्मिक सहलींचे आयोजन", en: "Spiritual tours & yatras" },
  { mr: "सांस्कृतिक आणि कला क्रीडा उपक्रम", en: "Art, Sports & Cultural events" },
  { mr: "सामुदायिक सेवा कार्यक्रम", en: "Community service programs" },
  { mr: "आध्यात्मिक मार्गदर्शन", en: "Spiritual guidance sessions" },
];
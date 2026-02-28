import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export default function Events() {
  const { language } = useLanguage();

  const t = (en, mr) => (language === "mr" ? mr : en);

  // Timeline Data for Ram Navami Day
  const schedule = [
    { time: "06:00 AM", en: "Pooja of Lord Ram", mr: "श्रीराम पूजन आणि अभिषेक" },
    { time: "09:00 AM", en: "Bhajan & Kirtan", mr: "भजन आणि कीर्तन" },
    { time: "12:00 PM", en: "Ram Janma Sohala", mr: "श्रीराम जन्म सोहळा" },
    { time: "01:00 PM", en: "Maha Prasad (Lunch)", mr: "महाप्रसाद (भोजन)" },
    { time: "06:00 PM", en: "Palkhi Sohala", mr: "पालखी सोहळा" },
  ];

  const yearlyEvents = [
    { name_en: "Sita Navami", name_mr: "सीता नवमी", date: "May 2026", desc_en: "Celebration dedicated to Goddess Sita.", desc_mr: "माता सीतेच्या जन्मोत्सवाचा कार्यक्रम." },
    { name_en: "Hanuman Jayanti", name_mr: "हनुमान जयंती", date: "April 2026", desc_en: "Special pooja and devotional programs.", desc_mr: "विशेष पूजा आणि भजन कार्यक्रम." },
    { name_en: "Gokul Ashtami", name_mr: "गोकुळ अष्टमी", date: "August 2026", desc_en: "Krishna Janmashtami celebration.", desc_mr: "श्रीकृष्ण जन्मोत्सव कार्यक्रम." },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F2] py-16 px-6">
      
      {/* Section Title */}
      <div className="text-center mb-16">
        <h1 className="text-[#D32F2F] font-bold text-4xl md:text-5xl">
          {t("Festival Schedule", "उत्सव वेळापत्रक")}
        </h1>
        <div className="h-1.5 w-24 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-600 mt-4 italic font-medium">
          {t("Ram Navami Main Celebration - 26 March 2026", "राम नवमी मुख्य उत्सव - २६ मार्च २०२६")}
        </p>
      </div>

      {/* --- VERTICAL TIMELINE --- */}
      <div className="max-w-4xl mx-auto relative mb-24">
        {/* Center Vertical Line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-yellow-500/30"></div>

        <div className="space-y-12">
          {schedule.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between w-full flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#D32F2F] border-4 border-white rounded-full z-10 shadow-md"></div>

              {/* Content Card */}
              <div className="w-full md:w-[45%] ml-12 md:ml-0">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#D32F2F] hover:shadow-2xl transition-shadow">
                  <span className="text-[#D32F2F] font-bold text-sm tracking-widest bg-red-50 px-3 py-1 rounded-full">
                    {item.time}
                  </span>
                  <h3 className="text-xl font-bold text-[#333] mt-3">
                    {t(item.en, item.mr)}
                  </h3>
                </div>
              </div>
              
              {/* Empty Space for alignment on Desktop */}
              <div className="hidden md:block md:w-[45%]"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- YEARLY EVENTS GRID --- */}
      <div className="max-w-6xl mx-auto border-t-2 border-gray-200 pt-20">
        <h2 className="text-center text-3xl font-bold text-[#333] mb-12">
            {t("Other Yearly Festivals", "इतर वार्षिक उत्सव")}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {yearlyEvents.map((event, index) => (
            <div key={index} className="bg-white border-b-4 border-yellow-500 p-8 rounded-xl shadow-md group hover:bg-[#D32F2F] transition-all duration-300">
              <h3 className="text-xl font-bold text-[#D32F2F] group-hover:text-white">{t(event.name_en, event.name_mr)}</h3>
              <p className="text-gray-400 text-sm mb-4 group-hover:text-red-100">{event.date}</p>
              <p className="text-gray-600 text-sm group-hover:text-white leading-relaxed">{t(event.desc_en, event.desc_mr)}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
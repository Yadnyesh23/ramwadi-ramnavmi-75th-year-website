import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

export default function EventsPreview() {
  const { language } = useLanguage();

  const events = [
    {
      titleMr: "राम जन्म सोहळा",
      titleEn: "Ram Janma Sohala",
      dateMr: "२६ मार्च २०२६",
      dateEn: "26 March 2026",
      timeMr: "दुुपारी १२:०० वाजता",
      timeEn: "12:00 PM",
    },
    {
      titleMr: "भजन संध्या",
      titleEn: "Bhajan Sandhya",
      dateMr: "२५ मार्च २०२६",
      dateEn: "25 March 2026",
      timeMr: "सायं. ७:०० वाजता",
      timeEn: "7:00 PM",
    },
    {
      titleMr: "महाप्रसाद",
      titleEn: "Maha Prasad",
      dateMr: "२६ मार्च २०२६",
      dateEn: "26 March 2026",
      timeMr: "दुुपारी १:३० वाजता",
      timeEn: "1:30 PM",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 relative overflow-hidden">
      {/* Subtle Background Pattern (Optional: traditional motif) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#D32F2F] font-bold text-4xl md:text-5xl mb-2">
            {language === "mr" ? "उत्सव कार्यक्रम" : "Festival Schedule"}
          </h2>
          <div className="h-1.5 w-32 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-[#FFF5E6] border-t-4 border-[#D32F2F] rounded-lg p-8 shadow-md flex flex-col items-center text-center relative group"
            >
              {/* Decorative Icon Circle */}
              <div className="w-16 h-16 bg-[#D32F2F] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:bg-[#FF8C00] transition-colors">
                <span className="text-white text-2xl">🕉️</span>
              </div>

              <h3 className="text-[#333] font-bold text-2xl mb-3">
                {language === "mr" ? event.titleMr : event.titleEn}
              </h3>

              <div className="space-y-1">
                <p className="text-gray-700 font-semibold text-lg">
                  {language === "mr" ? event.dateMr : event.dateEn}
                </p>
                <p className="text-[#D32F2F] font-bold text-xl">
                  {language === "mr" ? event.timeMr : event.timeEn}
                </p>
              </div>

              {/* Decorative Corner Motif */}
              <div className="absolute bottom-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-4xl text-[#D32F2F]">🏮</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/events"
            className="inline-block bg-[#D32F2F] text-white px-10 py-3.5 rounded-full font-bold shadow-lg hover:bg-[#B71C1C] transition-all transform hover:scale-105"
          >
            {language === "mr" ? "सर्व कार्यक्रम पहा" : "View All Events"}
          </Link>
        </div>
      </div>
    </section>
  );
}
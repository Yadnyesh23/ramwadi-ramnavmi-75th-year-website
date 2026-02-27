import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  const navText = {
    mr: {
      title: "रामवाडी सार्वजनिक उत्सव मंडळ",
      live: "थेट प्रक्षेपण",
      home: "मुख्यपृष्ठ",
      events: "कार्यक्रम",
      gallery: "छायाचित्रे",
      invitation: "निमंत्रण",
      committee: "समिती",
      about: "आमच्याबद्दल",
      contact: "संपर्क",
      admin: "प्रशासन",
      toggle: "EN",
    },
    en: {
      title: "Ramwadi Sarvajanik Utsav Mandal",
      live: "Live",
      home: "Home",
      events: "Events",
      gallery: "Gallery",
      invitation: "Invitation",
      committee: "Committee",
      about: "About Us",
      contact: "Contact",
      admin: "Admin",
      toggle: "मराठी",
    },
  };

  const t = navText[language];

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      {/* 1. Top Decorative Banner (Title) */}
      <div className="bg-[#D32F2F] border-b-4 border-[#FFD700] py-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md tracking-wide">
          {t.title}
        </h1>
      </div>

      {/* 2. Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-4 md:px-10 py-2 flex justify-between items-center overflow-x-auto">
        
        {/* Left Side: Live Indicator & Links */}
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded text-sm font-bold animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            {t.live}
          </div>

          <div className="hidden lg:flex gap-6 text-[#333] font-semibold text-sm uppercase">
            <Link to="/" className="hover:text-[#D32F2F] transition-colors">{t.home}</Link>
            <Link to="/about" className="hover:text-[#D32F2F] transition-colors">{t.about}</Link>
            <Link to="/events" className="hover:text-[#D32F2F] transition-colors">{t.events}</Link>
            <Link to="/gallery" className="hover:text-[#D32F2F] transition-colors">{t.gallery}</Link>
            <Link to="/committee" className="hover:text-[#D32F2F] transition-colors">{t.committee}</Link>
            <Link to="/contact" className="hover:text-[#D32F2F] transition-colors">{t.contact}</Link>
          </div>
        </div>

        {/* Right Side: Admin & Language Toggle */}
        <div className="flex gap-3 items-center">
          <Link
            to="/admin"
            className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-4 py-1.5 rounded text-sm font-bold shadow-sm transition-all"
          >
            {t.admin}
          </Link>

          <button
            onClick={toggleLanguage}
            className="border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white px-3 py-1 rounded font-bold text-xs transition-all"
          >
            {t.toggle}
          </button>
        </div>
      </nav>
    </header>
  );
}
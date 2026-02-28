import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

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

  const menuLinks = [
    { path: "/", label: t.home },
    { path: "/about", label: t.about },
    { path: "/events", label: t.events },
    { path: "/gallery", label: t.gallery },
    { path: "/committee", label: t.committee },
    { path: "/contact", label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-lg font-devnagari">
      {/* 1. Top Decorative Banner */}
      <div className="bg-[#D32F2F] border-b-4 border-[#FFD700] py-3 md:py-4 text-center px-4">
        <h1 className="text-lg md:text-3xl font-bold text-white drop-shadow-md tracking-wide truncate">
          {t.title}
        </h1>
      </div>

      {/* 2. Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-4 md:px-10 py-2 flex justify-between items-center relative">
        
        {/* Left: Mobile Menu Button & Live Badge */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#D32F2F] p-2 focus:outline-none"
          >
            <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
          </button>

          <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-2 py-1 md:px-3 md:py-1 rounded text-[10px] md:text-sm font-bold animate-pulse">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></span>
            {t.live}
          </div>
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex gap-6 text-[#333] font-semibold text-sm uppercase">
          {menuLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="hover:text-[#D32F2F] transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-[#D32F2F] transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right: Admin & Language */}
        <div className="flex gap-2 md:gap-3 items-center">
          <Link
            to="/admin"
            className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-3 py-1.5 md:px-4 md:py-1.5 rounded text-[10px] md:text-sm font-bold transition-all shadow-sm"
          >
            {t.admin}
          </Link>

          <button
            onClick={toggleLanguage}
            className="border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white px-2 py-1 md:px-3 md:py-1 rounded font-bold text-[10px] md:text-xs transition-all"
          >
            {t.toggle}
          </button>
        </div>

        {/* 3. Mobile Drawer Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-[110px] left-0 w-3/4 h-screen bg-white shadow-2xl z-40 lg:hidden flex flex-col p-6 gap-6 border-r-4 border-[#FFD700]"
            >
              {menuLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-[#333] border-b border-gray-100 pb-2 hover:text-[#D32F2F]"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Overlay to close menu when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
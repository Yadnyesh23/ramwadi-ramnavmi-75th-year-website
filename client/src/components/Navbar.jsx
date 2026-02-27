import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  const navText = {
    mr: {
      title: "रामवाडी रामनवमी",
      home: "मुख्यपृष्ठ",
      events: "कार्यक्रम",
      gallery: "छायाचित्रे",
      invitation: "निमंत्रण",
      committee: "समिती",
      about: "मंदिर माहिती",
      contact: "संपर्क",
      admin: "प्रशासन",
      toggle: "EN",
    },
    en: {
      title: "RamWadi Ram Navmi",
      home: "Home",
      events: "Events",
      gallery: "Gallery",
      invitation: "Invitation",
      committee: "Committee",
      about: "About",
      contact: "Contact",
      admin: "Admin",
      toggle: "मराठी",
    },
  };

  const t = navText[language];

  return (
    <nav className="bg-black/80 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="font-bold text-gold text-lg">
        {t.title}
      </h1>

      <div className="flex gap-5 items-center">
        <Link to="/">{t.home}</Link>
        <Link to="/events">{t.events}</Link>
        <Link to="/gallery">{t.gallery}</Link>
        <Link to="/invitation">{t.invitation}</Link>
        <Link to="/committee">{t.committee}</Link>
        <Link to="/about">{t.about}</Link>
        <Link to="/contact">{t.contact}</Link>

        <Link
          to="/admin"
          className="bg-saffron px-3 py-1 rounded-md"
        >
          {t.admin}
        </Link>

        <button
          onClick={toggleLanguage}
          className="border px-3 py-1 rounded"
        >
          {t.toggle}
        </button>
      </div>
    </nav>
  );
}
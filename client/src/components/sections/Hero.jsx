import temple from "../../assets/temple.png"; // your temple image
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

export default function Hero() {
  const { language } = useLanguage();

  return (
    <section
      className="relative h-[90vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${temple})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl">
        <p className="text-gold mb-3">
          {language === "mr"
            ? "राम मंदिर • रामवाडी"
            : "Ram Temple • Ramwadi"}
        </p>

        <h1 className="font-devnagari text-4xl md:text-6xl font-bold text-white leading-tight">
          {language === "mr"
            ? "रामवाडी रामनवमी"
            : "Ramwadi Ram Navami"}
        </h1>

        <h2 className="font-devnagari text-2xl md:text-4xl text-saffron mt-4">
          {language === "mr"
            ? "७५ वा अमृत महोत्सव"
            : "75th Amrut Mahotsav"}
        </h2>

        <p className="text-gray-300 mt-6 text-lg">
          26 March 2026
        </p>

        <Link
          to="/invitation"
          className="inline-block mt-8 bg-saffron hover:opacity-90 px-6 py-3 rounded-md font-semibold"
        >
          {language === "mr" ? "निमंत्रण पहा" : "View Invitation"}
        </Link>
      </div>
    </section>
  );
}
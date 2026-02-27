import invitation from "../assets/temple.png";
import { useLanguage } from "../context/LanguageContext";

export default function Invitation() {
  const { language } = useLanguage();

  return (
    <section className="min-h-screen bg-primary py-20 text-center px-6">
      <h1 className="font-devnagari text-4xl md:text-5xl text-gold mb-12">
        {language === "mr"
          ? "रामनवमी निमंत्रण"
          : "Ram Navami Invitation"}
      </h1>

      <div className="flex justify-center">
        <img
          src={invitation}
          alt="Ram Navami Invitation"
          className="rounded-xl shadow-xl max-h-650px"
        />
      </div>

      <div className="mt-10">
        <p className="text-lg text-gray-300">
          {language === "mr"
            ? "दिनांक: 26 मार्च 2026"
            : "Date: 26 March 2026"}
        </p>

        <p className="text-lg text-gray-300 mt-2">
          {language === "mr"
            ? "स्थळ: राम मंदिर, रामवाडी"
            : "Location: Ram Temple, Ramwadi"}
        </p>
      </div>

      <a
        href="https://wa.me/?text=Join%20us%20for%20Ram%20Navami%20Celebration"
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-10 bg-saffron px-6 py-3 rounded-md font-semibold hover:opacity-90"
      >
        {language === "mr"
          ? "WhatsApp वर शेअर करा"
          : "Share on WhatsApp"}
      </a>
    </section>
  );
}
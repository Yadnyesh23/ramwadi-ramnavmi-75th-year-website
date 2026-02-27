import invitation from "../../assets/temple.png"; 
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

export default function InvitationHighlight() {
  const { language } = useLanguage();

  return (
    <section className="py-28
max-w-6xl mx-auto
px-6 bg-primary text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-devnagari text-3xl md:text-4xl text-gold mb-12">
          {language === "mr"
            ? "रामनवमी निमंत्रण"
            : "Ram Navami Invitation"}
        </h2>

        {/* Invitation Card */}
        <div className="flex justify-center">
          <img
            src={invitation}
            alt="Ram Navami Invitation"
            className="rounded-xl shadow-xl border border-gray-800 max-h-500px object-cover"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <Link
            to="/invitation"
            className="bg-saffron px-6 py-3 rounded-md font-semibold hover:opacity-90"
          >
            {language === "mr" ? "पूर्ण निमंत्रण पहा" : "View Full Invitation"}
          </Link>

          <a
            href="https://wa.me/?text=Join%20us%20for%20Ram%20Navami%20Celebration"
            target="_blank"
            rel="noreferrer"
            className="border border-gray-600 px-6 py-3 rounded-md hover:bg-card"
          >
            {language === "mr" ? "WhatsApp वर शेअर करा" : "Share on WhatsApp"}
          </a>
        </div>
      </div>
    </section>
  );
}
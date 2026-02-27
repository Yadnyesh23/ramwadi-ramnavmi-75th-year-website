import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

import img1 from "../../assets/temple.png";
import img2 from "../../assets/temple.png";
import img3 from "../../assets/temple.png";
import img4 from "../../assets/temple.png";
import img5 from "../../assets/temple.png";


export default function GalleryPreview() {
  const { language } = useLanguage();

  return (
    <section className="py-24 bg-primary px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-devnagari text-3xl md:text-4xl text-gold text-center mb-16">
          {language === "mr" ? "मागील वर्षांची झलक" : "Festival Gallery"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Large Image */}
          <div className="md:col-span-2 md:row-span-2">
            <img
              src={img1}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Small Images */}
          <img src={img2} className="w-full h-full object-cover rounded-lg" />
          <img src={img3} className="w-full h-full object-cover rounded-lg" />
          <img src={img4} className="w-full h-full object-cover rounded-lg" />
          <img src={img5} className="w-full h-full object-cover rounded-lg" />
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="bg-saffron px-6 py-3 rounded-md font-semibold hover:opacity-90"
          >
            {language === "mr"
              ? "पूर्ण गॅलरी पहा"
              : "View Full Gallery"}
          </Link>
        </div>
      </div>
    </section>
  );
}
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { motion } from "framer-motion";

import img1 from "../../assets/temple.png";
import img2 from "../../assets/temple.png";
import img3 from "../../assets/temple.png";
import img4 from "../../assets/temple.png";
import img5 from "../../assets/temple.png";

export default function GalleryPreview() {
  const { language } = useLanguage();

  const title = language === "mr" ? "छायाचित्रे" : "Festival Gallery";
  const subtitle = language === "mr" ? "मागील वर्षांची काही खास क्षणचित्रे" : "Glimpses of previous years";

  return (
    <section className="bg-[#FFF9F2] py-20 px-6 relative overflow-hidden">
      {/* Decorative Background Element (Optional - subtle mandala) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D32F2F]/5 rounded-full -mr-32 -mt-32"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#D32F2F] font-bold text-4xl md:text-5xl mb-2">
            {title}
          </h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium italic">{subtitle}</p>
        </div>

        {/* Bento Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-600px">
          {/* Main Featured Image */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="col-span-2 row-span-2 relative group overflow-hidden border-8 border-white shadow-xl"
          >
            <img src={img1} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 border-1px border-yellow-500/30 m-2"></div>
          </motion.div>

          {/* Side Images */}
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <PhotoFrame src={img2} />
            <PhotoFrame src={img3} />
          </div>
          
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <PhotoFrame src={img4} />
            <PhotoFrame src={img5} />
          </div>
        </div>

        {/* Navigation Button */}
        <div className="text-center mt-16">
          <Link
            to="/gallery"
            className="inline-block border-2 border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white px-10 py-3 rounded-full font-bold transition-all shadow-md"
          >
            {language === "mr" ? "सर्व छायाचित्रे पहा" : "View All Photos"}
          </Link>
        </div>
      </div>
    </section>
  );
}

// Helper Component for "Framed" look
function PhotoFrame({ src }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="relative overflow-hidden border-4 border-white shadow-lg h-full group"
    >
      <img src={src} alt="Gallery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      {/* Gold inner hairline border */}
      <div className="absolute inset-0 border-1px border-yellow-600/20 m-1"></div>
    </motion.div>
  );
}
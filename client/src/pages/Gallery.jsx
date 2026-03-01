import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Gallery() {
  const { language } = useLanguage();
  const [year, setYear] = useState("2026");

  const t = (en, mr) => (language === "mr" ? mr : en);

  const galleryData = {
    2026: [
      { type: "image", src: "/gallery/2026/ramnavmi1.jpg" },
      { type: "image", src: "/gallery/2026/ramnavmi2.jpg" },
      { type: "video", src: "/gallery/2026/video1.mp4" },
    ],
    2025: [
      { type: "image", src: "/gallery/2025/img1.jpg" },
      { type: "image", src: "/gallery/2025/img2.jpg" },
    ],
    2024: [
      { type: "image", src: "/gallery/2024/img1.jpg" },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FFF9F1] text-[#333] px-6 py-12">
      
      {/* Title Section - Matching Schedule Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D32F2F] mb-2">
          {t("Festival Gallery", "उत्सव गॅलरी")}
        </h1>
        <div className="h-1.5 w-24 bg-[#FFC107] mx-auto mb-4 rounded-full"></div>
        <p className="text-gray-600 italic font-medium">
          {t("Ram Navmi Celebration Memories", "राम नवमी उत्सवाच्या आठवणी")}
        </p>
      </div>

      {/* Year Selector - Matching Navigation Style */}
      <div className="flex justify-center gap-4 mb-12">
        {Object.keys(galleryData).sort((a, b) => b - a).map((y) => (
          <button
            key={y}
            onClick={() => setYear(y)}
            className={`px-6 py-2 rounded-lg font-bold border-2 transition-all duration-200 ${
              year === y
                ? "bg-[#D32F2F] border-[#D32F2F] text-white shadow-md"
                : "bg-white border-gray-200 text-gray-600 hover:border-[#D32F2F] hover:text-[#D32F2F]"
            }`}
          >
            {y}
          </button>
        ))}
      </div>

      {/* Gallery Grid - Card Style Matching Schedule Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {galleryData[year].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg border-l-8 border-[#D32F2F] overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative group">
              {item.type === "image" ? (
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt="festival"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="aspect-[4/3] bg-black">
                  <video
                    src={item.src}
                    controls
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              {/* Badge for Type */}
              <div className="absolute top-3 right-3 bg-[#FFF3E0] text-[#E65100] px-3 py-1 rounded-full text-xs font-bold uppercase border border-[#FFE0B2]">
                {item.type === "video" ? t("Video", "व्हिडिओ") : t("Photo", "फोटो")}
              </div>
            </div>

            {/* Label Area */}
            
          </div>
        ))}
      </div>
    </div>
  );
}
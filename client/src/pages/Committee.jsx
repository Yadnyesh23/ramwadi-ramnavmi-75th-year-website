import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export default function Committee() {
  const { language } = useLanguage();

  const content = {
    mr: {
      hero: "कार्यकारिणी समिती",
      sub: "धर्मासाठी आणि समाजासाठी समर्पित आमची कार्यकारिणी",
      intro: "आमची संस्था दोन मुख्य मंडळांद्वारे कार्य करते जी परंपरा जपण्यासाठी आणि सामाजिक कार्यासाठी एकत्र येतात.",
      villageTitle: "ग्रामस्थ मंडळ — रामवाडी",
      villageName: "रामवाडी ग्रामस्थ मंडळ",
      cityTitle: "शहर मंडळ",
      cityName: "श्री राम सेवा मंडळ",
    },
    en: {
      hero: "Committee",
      sub: "Our Dedicated Committees Working for Dharma & Community",
      intro: "Our organization functions through two main mandals that work together to preserve traditions and serve society.",
      villageTitle: "Village Mandal — Ramwadi",
      villageName: "Ramwadi Gramasth Mandal",
      cityTitle: "City Mandal",
      cityName: "Shree Ram Seva Mandal",
    }
  };

  const t = content[language];

  // Designations Mapping
  const roles = {
    president: { mr: "अध्यक्ष", en: "President" },
    secretary: { mr: "कार्यवाह", en: "Secretary" },
    treasurer: { mr: "खजिनदार", en: "Treasurer" },
    member: { mr: "सदस्य", en: "Member" }
  };

  // Structured Data
  const villageMembers = [
    { name: "Moreshwar Gopal Halde", role: roles.president },
    { name: "Dattaram Maruti Belose", role: roles.secretary },
    { name: "Chandrakant Nathuram Warange", role: roles.treasurer },
  ];

  const cityMembers = [
    { name: "Raju Patere", role: roles.president },
    { name: "Ganesh Halde", role: roles.secretary },
    { name: "Shashikant Warange", role: roles.treasurer },
  ];

  return (
    <div className="bg-[#FFF9F2] min-h-screen pb-20">
      
      {/* 1. Official Header */}
      <section className="bg-[#D32F2F] py-20 text-center text-white px-6 border-b-8 border-yellow-500">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {t.hero}
        </motion.h1>
        <p className="text-yellow-200 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          {t.sub}
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* 2. Intro Description */}
        <section className="bg-white shadow-lg rounded-xl -mt-10 p-8 text-center relative z-10 border border-gray-100 mb-16">
          <p className="text-gray-700 text-lg leading-relaxed italic">
            "{t.intro}"
          </p>
        </section>

        {/* 3. Village Mandal Section */}
        <MandalSection 
          title={t.villageTitle} 
          subName={t.villageName} 
          members={villageMembers} 
          lang={language}
        />

        <div className="h-px bg-gray-200 my-16 w-1/2 mx-auto"></div>

        {/* 4. City Mandal Section */}
        <MandalSection 
          title={t.cityTitle} 
          subName={t.cityName} 
          members={cityMembers} 
          lang={language}
        />
      </div>
    </div>
  );
}

function MandalSection({ title, subName, members, lang }) {
  return (
    <section className="mb-12">
      <div className="text-center mb-10">
        <h2 className="text-xl font-bold uppercase tracking-widest text-gray-400">{title}</h2>
        <h3 className="text-3xl md:text-4xl font-black text-[#333] mt-2">{subName}</h3>
        <div className="h-1 w-20 bg-yellow-500 mx-auto mt-4"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -8 }}
            className="bg-white border-b-4 border-gray-100 p-8 rounded-2xl shadow-md flex flex-col items-center text-center w-full sm:w-72 group hover:border-yellow-500 transition-all"
          >
            {/* Avatar with Ring */}
            <div className="w-24 h-24 rounded-full mb-4 flex items-center justify-center bg-gray-50 border-2 border-dashed border-gray-200 group-hover:border-yellow-500 group-hover:bg-yellow-50 transition-all">
              <span className="text-4xl grayscale group-hover:grayscale-0 transition-all">👤</span>
            </div>
            
            {/* Designation Badge */}
            <span className="bg-[#D32F2F] text-white text-[10px] md:text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-3 shadow-sm group-hover:bg-[#FF8C00]">
              {lang === "mr" ? member.role.mr : member.role.en}
            </span>

            <h4 className="text-xl font-bold text-[#333] group-hover:text-[#D32F2F] transition-colors">
              {member.name}
            </h4>
            
            <div className="w-10 h-1 bg-yellow-500/20 mt-4 group-hover:w-20 group-hover:bg-yellow-500 transition-all"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
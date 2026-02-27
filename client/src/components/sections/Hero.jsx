import { useEffect, useState } from "react";
import temple from "../../assets/temple.png";
import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

export default function Hero() {
  const { language } = useLanguage();

  const targetDate = new Date("March 26, 2026 00:00:00").getTime();

  const calculateTime = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative h-[95vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: `url(${temple})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 px-6 max-w-5xl">
        <p className="text-gold mb-4">
          {language === "mr"
            ? "राम मंदिर • रामवाडी"
            : "Ram Temple • Ramwadi"}
        </p>

        <h1 className="font-devnagari text-4xl md:text-6xl font-bold text-white">
          {language === "mr"
            ? "रामवाडी रामनवमी"
            : "Ramwadi Ram Navami"}
        </h1>

        <h2 className="font-devnagari text-2xl md:text-4xl text-saffron mt-4">
          {language === "mr"
            ? "७५ वा अमृत महोत्सव"
            : "75th Amrut Mahotsav"}
        </h2>

        {/* Countdown */}
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          <TimeBox value={timeLeft.days} label={language === "mr" ? "दिवस" : "Days"} />
          <TimeBox value={timeLeft.hours} label={language === "mr" ? "तास" : "Hours"} />
          <TimeBox value={timeLeft.minutes} label={language === "mr" ? "मिनिटे" : "Minutes"} />
          <TimeBox value={timeLeft.seconds} label={language === "mr" ? "सेकंद" : "Seconds"} />
        </div>

        <Link
          to="/invitation"
          className="inline-block mt-10 bg-saffron px-7 py-3 rounded-md font-semibold hover:opacity-90"
        >
          {language === "mr" ? "निमंत्रण पहा" : "View Invitation"}
        </Link>
      </div>
    </section>
  );
}

function TimeBox({ value, label }) {
  return (
    <div className="bg-card px-6 py-4 rounded-lg min-w-90px">
      <p className="text-2xl md:text-3xl font-bold text-saffron">{value}</p>
      <p className="text-gray-300 text-sm">{label}</p>
    </div>
  );
}
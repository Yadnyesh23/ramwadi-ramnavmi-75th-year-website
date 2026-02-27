import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import templeImage from "../assets/temple.png";

const festivalDate = new Date("March 26, 2026 00:00:00").getTime();

export default function Home() {
  const { language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = festivalDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );

      setTimeLeft({ days, hours, minutes });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${templeImage})` }}
    >
      <div className="bg-black/70 p-10 rounded-xl text-center backdrop-blur-md">
        {language === "mr" ? (
          <>
            <h1 className="text-4xl md:text-6xl text-gold font-bold mb-3">
              रामवाडी रामनवमी
            </h1>

            <h2 className="text-3xl text-saffron mb-4">
              ७५ वा अमृत महोत्सव
            </h2>

            <p className="mb-6">दिनांक: २६ मार्च २०२६</p>
          </>
        ) : (
          <>
            <h1 className="text-4xl md:text-6xl text-gold font-bold mb-3">
              RamWadi Ram Navmi
            </h1>

            <h2 className="text-3xl text-saffron mb-4">
              75th Amrut Mahotsav
            </h2>

            <p className="mb-6">26 March 2026</p>
          </>
        )}

        <div className="flex gap-6 justify-center text-xl">
          <div>
            <p className="text-3xl font-bold">{timeLeft.days}</p>
            <p>{language === "mr" ? "दिवस" : "Days"}</p>
          </div>
          <div>
            <p className="text-3xl font-bold">{timeLeft.hours}</p>
            <p>{language === "mr" ? "तास" : "Hours"}</p>
          </div>
          <div>
            <p className="text-3xl font-bold">{timeLeft.minutes}</p>
            <p>{language === "mr" ? "मिनिटे" : "Minutes"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
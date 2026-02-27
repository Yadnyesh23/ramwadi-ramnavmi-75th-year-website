import { useEffect, useState } from "react";

const festivalDate = new Date("March 26, 2026 00:00:00").getTime();

export default function Home() {
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
      const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      setTimeLeft({ days, hours, minutes , seconds});
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-[90vh] bg-templeDark text-white">
      
      <div
        className="min-h-[90vh] flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600375462888-9e0bdb0c7c2b')",
        }}
      >
        <div className="bg-black/60 p-10 rounded-xl backdrop-blur-md">
          <h1 className="text-4xl md:text-6xl font-bold text-gold mb-4">
            RamWadi Ram Navmi
          </h1>

          <h2 className="text-2xl md:text-4xl text-saffron mb-6">
            75th Amrut Mahotsav
          </h2>

          <p className="mb-6 text-lg">
            Celebrating on 26 March 2026
          </p>

          
          <div className="flex gap-6 justify-center text-xl">
            <div>
              <p className="text-3xl font-bold">{timeLeft.days}</p>
              <p>Days</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{timeLeft.hours}</p>
              <p>Hours</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{timeLeft.minutes}</p>
              <p>Minutes</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{timeLeft.seconds}</p>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

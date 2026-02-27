import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("bg-white");
    document.body.classList.toggle("text-black");
  };

  return (
    <nav className="bg-black/80 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="font-bold text-gold text-lg">
        RamWadi 75th Mahotsav
      </h1>

      <div className="flex gap-5 items-center">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/invitation">Invitation</Link>
        <Link to="/committee">Committee</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <Link
          to="/admin"
          className="bg-saffron px-3 py-1 rounded-md"
        >
          Admin
        </Link>

        <button
          onClick={toggleTheme}
          className="border px-2 py-1 rounded"
        >
          Toggle
        </button>
      </div>
    </nav>
  );
}
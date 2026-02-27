import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-templeDark text-white">
      <Navbar />
      {children}
    </div>
  );
}
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BiCart, BiUser, BiSearch } from "react-icons/bi"; // Más íconos

const Logo =
  "https://i.pinimg.com/736x/15/f3/b1/15f3b1dd58c05f61a2f4f1bbe85e9e33.jpg"; // Logo urbano

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "bg-gradient-to-r from-black via-gray-900 to-gray-800 shadow-2xl"
          : "bg-gradient-to-r from-gray-800 via-black to-gray-900"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo y nombre de la tienda */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-16 w-16 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6 transform"
            />
          </Link>
          {/* Nombre de la tienda con estilo graffitero */}
          <Link
            to="/"
            className="text-4xl font-bold text-white font-sans transform hover:scale-110 hover:text-yellow-400 transition-all duration-300"
            style={{
              fontFamily: "'Permanent Marker', cursive", // Tipografía estilo graffiti
            }}
          >
            REALKING-STORE
          </Link>
        </div>

        {/* Menú central */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
            to="/"
            className="text-white text-lg font-semibold tracking-wider hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Inicio
          </Link>
          <Link
            to="/products"
            className="text-white text-lg font-semibold tracking-wider hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Tienda
          </Link>
          <Link
            to="/marcas"
            className="text-white text-lg font-semibold tracking-wider hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Marcas
          </Link>
        </div>

        {/* Menú derecho */}
        <div className="flex items-center space-x-6">
          {/* Íconos */}
          <Link
            to="/user"
            className="bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <BiUser className="w-6 h-6 text-white" />
          </Link>
          <Link
            to="/cart"
            className="relative bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 p-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <BiCart className="w-7 h-7 text-gray-900" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center transform translate-x-2 -translate-y-2 shadow-md">
              3
            </span>
          </Link>
        </div>

        {/* Menú desplegable en móvil */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white p-4 space-y-4">
          <Link
            to="/"
            className="block text-lg hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Inicio
          </Link>
          <Link
            to="/products"
            className="block text-lg hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Tienda
          </Link>
          <Link
            to="/marcas"
            className="block text-lg hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Marcas
          </Link>
          <Link
            to="/about"
            className="block text-lg hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Nosotros
          </Link>
          <Link
            to="/contact"
            className="block text-lg hover:text-yellow-400 transition-all duration-300 transform hover:scale-110"
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}

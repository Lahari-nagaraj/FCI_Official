import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow-md py-2 px-6 flex justify-between items-center">
      {/* Logo and Brand Name */}
      <div className="flex items-center space-x-4">
        <img
          src="/logo.png"
          alt="FCI Logo"
          className="w-14 h-14 object-contain"
        />
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          FCI
        </h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-lg font-medium">
        <a href="#about" className="text-white hover:text-gray-400 transition">
          About Us
        </a>
        <a href="#donate" className="text-white hover:text-gray-400 transition">
          Donate
        </a>
        <a
          href="#contact"
          className="text-white hover:text-gray-400 transition"
        >
          Contact
        </a>
      </nav>

      {/* Hamburger Icon (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white text-3xl focus:outline-none"
      >
        ☰
      </button>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`absolute top-16 right-0 w-full bg-gray-800 shadow-md p-4 flex flex-col space-y-4 text-center transition-all origin-top transform ${
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        } md:hidden`}
      >
        <a
          href="#about"
          className="text-white hover:text-gray-400 transition"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </a>
        <a
          href="#donate"
          className="text-white hover:text-gray-400 transition"
          onClick={() => setIsOpen(false)}
        >
          Donate
        </a>
        <a
          href="#contact"
          className="text-white hover:text-gray-400 transition"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </div>
    </header>
  );
};

export default Header;

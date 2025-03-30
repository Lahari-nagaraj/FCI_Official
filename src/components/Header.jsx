import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-md py-1.5 px-8 flex justify-between items-center">
      {/* Logo and Brand Name */}
      <div className="flex items-center space-x-4">
        <img
          src="/logo.png"
          alt="FCI Logo"
          className="w-16 h-16 object-contain"
        />
        <h1 className="text-2xl font-extrabold text-white tracking-wide">
          FCI
        </h1>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <a
              href="#about"
              className="text-white hover:text-gray-400 transition"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#donate"
              className="text-white hover:text-gray-400 transition"
            >
              Donate
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:text-gray-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

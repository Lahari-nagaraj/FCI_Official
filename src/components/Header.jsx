import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-900">FCI</h1>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-blue-600">
              About Us
            </a>
          </li>
          <li>
            <a href="#donate" className="hover:text-blue-600">
              Donate
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">
              More
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

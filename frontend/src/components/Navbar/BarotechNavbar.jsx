import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState from react

const BarotechNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          {/* Replace the anchor tag with Link component */}
          <Link to="/" className="text-xl font-bold">
            Barotech
          </Link>
          <button
            className="text-white focus:outline-none lg:hidden"
            aria-controls="navbar"
            onClick={toggleMenu} // Toggle menu visibility when clicked
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Conditionally render menu based on isMenuOpen state */}
          <div
            className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}
            id="navbar"
          >
            <ul className="flex flex-col space-y-4">
              {" "}
              {/* Vertical alignment for mobile */}
              {/* Replace anchor tags with Link components */}
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-white hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-gray-300"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="hidden lg:flex flex-grow items-center justify-end"
            id="navbar"
          >
            <ul className="flex space-x-4">
              {/* Replace anchor tags with Link components */}
              <li>
                <Link to="/" className="text-white hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white hover:text-gray-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BarotechNavbar;

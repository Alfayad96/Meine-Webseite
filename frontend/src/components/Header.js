import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";

// filepath: c:\Users\mn512\OneDrive\Desktop\website\frontend\src\components\Header.js
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">IT-Dienstleistungs-Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="services" smooth={true} duration={500} className="hover:underline cursor-pointer">
                Dienstleistungen
              </Link>
            </li>
            <li>
              <Link to="employees" smooth={true} duration={500} className="hover:underline cursor-pointer">
                Mitarbeiter
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} className="hover:underline cursor-pointer">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
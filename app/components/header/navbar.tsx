"use client";
import Link from "next/link";
import { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-gray-800 bg-opacity-75 backdrop-blur-md shadow-md">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white py-2 md:py-4">
          Einfamilienhaus <br />
          <span className="text-xs sm:text-sm xl:text-lg font-light">
            Wilhelm-Schröder-Straße, Grettstadt
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-4 xl:space-x-8">
          <NavLink href="/#lage" label="Lage & Eckdaten" />
          <NavLink href="/#erdgeschoss" label="Erdgeschoss" />
          <NavLink href="/#obergeschoss" label="Obergeschoss" />
          <NavLink href="/#untergeschoss" label="Untergeschoss" />
          <NavLink href="/#dachboden" label="Dachboden" />
          <NavLink href="/#aussenbereich" label="Außenbereich" />
          <Link
            href="/#kontakt"
            className="text-white relative group no-underline"
          >
            <EnvelopeIcon className="size-5 transition-all duration-300 ease-in-out group-hover:text-blue-300" />
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="inline-flex lg:hidden items-center p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 ease-in-out bg-gray-700 lg:hidden`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          <NavLink
            href="/#lage"
            label="Lage & Eckdaten"
            closeMenu={closeMenu}
          />
          <NavLink
            href="/#erdgeschoss"
            label="Erdgeschoss"
            closeMenu={closeMenu}
          />
          <NavLink
            href="/#obergeschoss"
            label="Obergeschoss"
            closeMenu={closeMenu}
          />
          <NavLink
            href="/#untergeschoss"
            label="Untergeschoss"
            closeMenu={closeMenu}
          />
          <NavLink href="/#dachboden" label="Dachboden" closeMenu={closeMenu} />
          <NavLink
            href="/#aussenbereich"
            label="Außenbereich"
            closeMenu={closeMenu}
          />
          <Link
            href="/#kontakt"
            className="text-white relative group no-underline flex items-center"
            onClick={closeMenu}
          >
            <EnvelopeIcon className="size-5 transition-all duration-300 ease-in-out group-hover:text-blue-300" />
            <span className="ml-2 transition-all duration-300 ease-in-out group-hover:text-blue-300">
              Kontakt
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  label,
  closeMenu,
}: {
  href: string;
  label: string;
  closeMenu?: () => void;
}) {
  return (
    <Link
      href={href}
      className="text-white relative group no-underline block text-center"
      onClick={closeMenu}
    >
      <span className="transition-all duration-300 ease-in-out group-hover:text-blue-300">
        {label}
      </span>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </Link>
  );
}

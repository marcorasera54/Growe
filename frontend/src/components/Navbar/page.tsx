"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-black/40 backdrop-blur-sm shadow-md border-b border-white/30 py-2`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-lg sm:text-xl md:text-2xl text-white"
          >
            Growe
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 lg:space-x-4 xl:space-x-6 justify-center">
            <NavItem href="/" label="Home" />
            <NavItem href="/about" label="About" />
            <NavItem href="/services" label="Soluzione" />
            <NavItem href="/news" label="News" />
            <NavItem href="/contact-us" label="Contattaci" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
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
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-2 space-y-2 rounded-lg">
            <MobileNavItem
              href="/"
              label="Home"
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileNavItem
              href="/about"
              label="About"
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileNavItem
              href="/services"
              label="Soluzione"
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileNavItem
              href="/news"
              label="News"
              onClick={() => setMobileMenuOpen(false)}
            />
            <MobileNavItem
              href="/contact-us"
              label="Contattaci"
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="px-2 py-2 lg:px-3 text-sm sm:text-md lg:text-lg font-medium relative group text-white hover:text-gray-300 transition-colors duration-200"
    >
      <div className="flex items-center">
        {label}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
      </div>
    </Link>
  );
};

const MobileNavItem = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) => {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-white hover:bg-white/10 transition-colors duration-200"
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Navbar;

"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun, Download, Menu, X } from "lucide-react";

/**
 * Navbar component cloned with pixel-perfect accuracy.
 * Features: Glassmorphism effect, gradient logo, navigation links, theme toggle, and resume button.
 */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent"
            style={{
              fontSize: "24px",
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            Saurav Raj
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-800"
                style={{
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions: Theme Toggle & Resume Button */}
          <div className="flex items-center space-x-2">
            <button
              className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              <Moon size={20} className="lucide lucide-moon" />
            </button>

            <a
              href="/resume.pdf"
              className="hidden md:flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-sm hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/25"
            >
              <Download size={16} className="lucide lucide-download" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-800 text-gray-300"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={24} className="lucide lucide-x" />
              ) : (
                <Menu size={24} className="lucide lucide-menu" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-xl transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/5 mt-4">
              <a
                href="/resume.pdf"
                className="flex items-center justify-center space-x-2 w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-base shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
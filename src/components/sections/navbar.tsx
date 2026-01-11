"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun, Download, Menu, X } from "lucide-react";

/**
 * Navbar component for Saurav Raj's portfolio.
 * Features a glassmorphism effect, gradient logo, navigation links,
 * theme toggle, and a gradient resume button.
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section highlighting logic
      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "glass-panel bg-gray-900/80 border-b border-white/10 py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              className="text-xl md:text-2xl font-bold text-gradient"
              style={{
                background: "linear-gradient(to right, #2563eb, #9333ea, #0891b2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
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
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:bg-gray-800 ${
                    activeSection === link.id
                      ? "text-blue-400 bg-gray-800/50"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle Button */}
              <button
                className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                <Moon size={20} />
              </button>

              {/* Resume Button */}
              <a
                href="/resume.pdf"
                className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-sm hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-blue-500/20"
              >
                <Download size={16} />
                <span>Resume</span>
              </a>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 rounded-lg bg-gray-800 text-gray-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 glass-panel bg-gray-900/95 transition-all duration-300 transform origin-top ${
            mobileMenuOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? "text-blue-400 bg-gray-800"
                    : "text-gray-300 hover:text-blue-400 hover:bg-gray-800"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 px-4">
              <a
                href="/resume.pdf"
                className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold shadow-lg"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Skip to Content Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed top-4 left-4 z-[1000] px-4 py-3 bg-white text-gray-900 rounded-xl shadow-2xl font-medium border border-gray-200"
      >
        Skip to content
      </a>
    </>
  );
};

export default Navbar;
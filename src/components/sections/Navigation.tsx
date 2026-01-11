"use client";

import React, { useState, useEffect } from "react";
import { Moon, Sun, Download, Menu, X, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple intersection observer logic for active section
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
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 dark:border-gray-800/50 py-2 sm:py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Saurav Raj
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 lg:px-4 py-2 text-sm font-medium transition-all rounded-lg ${
                  activeSection === link.href.substring(1)
                    ? "text-blue-600 dark:text-blue-400 bg-gray-100/50 dark:bg-gray-800/50"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Dark Mode Toggle Placeholder (Visual Only as per strict requirement for single theme light) */}
            <button
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              <Moon size={20} className="block dark:hidden" />
              <Sun size={20} className="hidden dark:block" />
            </button>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-sm hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
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
        className={`md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-xl transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <a
              href="/resume.pdf"
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-sm shadow-md"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
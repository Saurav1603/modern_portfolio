import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-[#111827] border-t border-gray-200 dark:border-white/10 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Brand/Logo Section */}
          <div className="text-center md:text-left">
            <a 
              href="#home" 
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Saurav Raj
            </a>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xs text-sm leading-relaxed">
              Building intelligent solutions and crafting digital experiences with code and AI.
            </p>
          </div>

          {/* Quick Links / Socials */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Connect with me
            </h4>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/Saurav1603" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@sauravraj.com" 
                className="p-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-lg transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 border-t border-gray-200 dark:border-white/5 pt-8">
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-white/5 pt-8">
          <p>© {currentYear} Saurav Raj. All rights reserved.</p>
          <div className="flex space-x-6">
            <span className="hover:text-gray-700 dark:hover:text-gray-300 cursor-default transition-colors">
              Designed & Built with ❤️
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Github, Linkedin, Mail, Twitter, ChevronUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/Saurav1603', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#111827] border-t border-white/10 pt-16 pb-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Identity */}
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="text-2xl font-bold inline-block mb-4">
              <span className="bg-gradient-to-r from-[#2563eb] to-[#9333ea] bg-clip-text text-transparent">
                Saurav Raj
              </span>
            </a>
            <p className="text-[#9ca3af] text-lg max-w-sm mb-6 leading-relaxed">
              Aspiring Software and AI/ML Engineer building intelligent solutions to solve real-world problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#9ca3af] hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#9ca3af] hover:text-[#2563eb] transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Navigation */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              {navLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#9ca3af] hover:text-[#2563eb] transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  className="text-[#9ca3af] hover:text-[#2563eb] transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Copyright and Bottom Area */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#9ca3af] text-sm md:text-base">
            © {currentYear} <span className="text-white font-medium">Saurav Raj</span>. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-[#9ca3af]">
            <span className="flex items-center">
              Designed with 
              <span className="mx-1 text-red-500 text-lg">♥</span> 
              by Saurav
            </span>
            <button
              onClick={scrollToTop}
              className="group p-2 rounded-full bg-white/5 border border-white/10 hover:border-[#2563eb]/50 hover:bg-[#2563eb]/10 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ChevronUp size={20} className="text-[#9ca3af] group-hover:text-[#2563eb] transform group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
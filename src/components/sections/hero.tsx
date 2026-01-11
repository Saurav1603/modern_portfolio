import React, { useEffect, useState, useRef } from 'react';
import { Download, Github, Linkedin, Twitter, ArrowDown } from 'lucide-react';

/**
 * Hero component for the developer portfolio.
 * Includes a Three.js-like particle background (simulated via CSS/Divs for stability),
 * typed text effects, availability badge, and performance stats.
 */
const Hero = () => {
  const [typedTitle, setTypedTitle] = useState('');
  const [typedStack, setTypedStack] = useState('');
  
  const titleText = "Frontend Engineer";
  const stackText = "React • TypeScript • Next.js • Tailwind";

  useEffect(() => {
    let titleIdx = 0;
    let stackIdx = 0;
    
    const titleInterval = setInterval(() => {
      setTypedTitle(titleText.slice(0, titleIdx));
      titleIdx++;
      if (titleIdx > titleText.length) clearInterval(titleInterval);
    }, 100);

    const stackInterval = setInterval(() => {
      setTypedStack(stackText.slice(0, stackIdx));
      stackIdx++;
      if (stackIdx > stackText.length) clearInterval(stackInterval);
    }, 80);

    return () => {
      clearInterval(titleInterval);
      clearInterval(stackInterval);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gray-50 dark:bg-[#030712]">
      {/* Mesh Gradient Background Overlay */}
      <div className="mesh-gradient absolute inset-0 pointer-events-none opacity-40"></div>
      
      {/* Three.js Canvas Placeholder / Decorative Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full relative opacity-30 dark:opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-[128px]"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Availability Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-700 mb-6 shadow-lg animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Available for opportunities</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-heading">
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="text-gradient">Saurav Raj</span>
            <br />
            <span className="text-gray-900 dark:text-white">I'm a </span>
            <span className="text-gradient">
              {typedTitle}
              <span className="inline-block w-0.5 h-[1em] bg-blue-500 ml-1 translate-y-1"></span>
            </span>
            <br />
            <span className="text-gray-900 dark:text-white text-3xl sm:text-4xl md:text-5xl block mt-2 font-medium">
              Building Fast, Accessible Web Applications
            </span>
          </h1>

          {/* Tech Stack Typing Animation */}
          <div className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6 font-medium min-h-[2rem] flex items-center justify-center">
            <span className="text-blue-600 dark:text-blue-400">
              {typedStack}
              <span className="inline-block w-0.5 h-[1.1em] bg-blue-500 ml-1 translate-y-1"></span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            I build performant, accessible web applications with modern technologies. 
            Passionate about clean code, user experience, and scalable solutions.
          </p>

          {/* Statistics Cards */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10 px-6 py-5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className="flex items-center space-x-2 translate-y-[-1px]">
              <span className="text-2xl sm:text-3xl font-bold text-gradient">3+</span>
              <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap">Projects Shipped</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center space-x-2 translate-y-[-1px]">
              <span className="text-2xl sm:text-3xl font-bold text-gradient">5k+</span>
              <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap">Lines of Code</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center space-x-2 translate-y-[-1px]">
              <span className="text-2xl sm:text-3xl font-bold text-gradient">95+</span>
              <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap">Lighthouse Scores</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
              <span>View Projects</span>
            </button>
            <a 
              href="/resume.pdf" 
              className="w-full sm:w-auto px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all flex items-center justify-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            <a 
              href="https://github.com/Saurav1603" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:scale-110 shadow-sm" 
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/saurav-raj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:scale-110 shadow-sm" 
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:scale-110 shadow-sm" 
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors animate-bounce p-2" 
          aria-label="Scroll to about section"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
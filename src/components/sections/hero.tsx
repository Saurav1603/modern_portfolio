"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, MapPin, Mail, Github, ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Software Engineer & AI/ML Engineer";
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        // Simple loop or just stay static. Requirement asked for typing animation.
        // For a more professional feel, we'll reset or just stop.
        // Let's reset after a pause to keep the "dynamic" feel.
        setTimeout(() => {
          currentIndex = 0;
        }, 3000);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-[#111827]"
    >
      {/* Dynamic Mesh Overlay Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20 z-0"></div>
      
      {/* Mesh Gradient Blobs */}
      <div 
        className="mesh-gradient-blob bg-brand-blue top-[-10%] left-[-10%]" 
        style={{ opacity: 0.1, filter: 'blur(120px)' }} 
      />
      <div 
        className="mesh-gradient-blob bg-brand-purple bottom-[-10%] right-[-10%]" 
        style={{ opacity: 0.1, filter: 'blur(120px)' }} 
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Animated Circle 1 */}
        <div className="absolute top-20 left-10 w-24 h-24 md:w-32 md:h-32 animate-pulse">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl backdrop-blur-sm border border-white/5 rotate-12"></div>
        </div>
        {/* Animated Circle 2 */}
        <div className="absolute top-40 right-20 w-20 h-20 md:w-28 md:h-28 animate-bounce transition-all duration-1000">
          <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full backdrop-blur-sm border border-white/5"></div>
        </div>
        {/* Animated Diamond 3 */}
        <div className="absolute bottom-40 left-1/4 w-16 h-16 md:w-20 md:h-20 animate-spin-slow">
          <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl backdrop-blur-sm border border-white/5 transform rotate-45"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[-40px]">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {/* Available Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-800/80 backdrop-blur-md rounded-full border border-white/10 mb-8 shadow-2xl">
            <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">Available for opportunities</span>
          </div>

          <p className="text-blue-400 text-lg md:text-xl font-medium mb-4 tracking-wide">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tighter">
            <span className="text-gradient">Saurav Raj</span>
          </h1>

          {/* Typing Animation Area */}
          <div className="h-12 md:h-16 flex items-center justify-center mb-6">
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-400 drop-shadow-sm min-w-[20px]">
              {typedText}
              <span className="inline-block w-1 h-[1em] bg-blue-500 ml-1 animate-pulse align-middle"></span>
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center space-x-2 text-gray-400 mb-10">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span className="text-lg">Muzaffarpur, Bihar, India</span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Aspiring Software and AI/ML Engineer aiming to apply strong computer science and machine learning fundamentals to build scalable, real-world solutions while continuously learning and growing professionally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#contact"
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center space-x-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
            
            <a
              href="https://github.com/Saurav1603"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border-2 border-gray-700 text-gray-300 rounded-full font-bold text-lg hover:border-blue-500 hover:text-blue-400 transition-all hover:scale-105 bg-gray-900/50 backdrop-blur-sm flex items-center space-x-3"
            >
              <Github className="w-5 h-5" />
              <span>View GitHub</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-500 hover:text-blue-400 transition-all duration-300 animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .text-gradient {
          background: linear-gradient(to right, #2563eb, #9333ea, #0891b2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .mesh-overlay {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#1f2937 0.5px, transparent 0.5px);
          background-size: 24px 24px;
          mask-image: radial-gradient(ellipse at center, black, transparent 80%);
          opacity: 0.15;
          pointer-events: none;
        }
      `}</style>
      <div className="mesh-overlay"></div>
    </section>
  );
};

export default HeroSection;
"use client";

import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  MapPin, 
  Mail, 
  Github, 
  ArrowDown 
} from "lucide-react";

/**
 * Hero Section Component
 * 
 * Includes:
 * - Mesh gradient background
 * - Floating geometric glassmorphism shapes
 * - Typing effect for role
 * - "Available for opportunities" badge
 * - Gradient heading
 * - Primary CTA buttons
 */
export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Software Engineer", "AI/ML Engineer", "Full-Stack Developer"];
  const period = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{ backgroundColor: "rgb(249, 250, 251)" }}
    >
      {/* Mesh Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 opacity-100" />
      
      {/* Animated Mesh Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-[120px] animate-pulse transition-all duration-1000" />
      </div>

      {/* Floating Geometric Glassmorphism Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cube-like shape */}
        <div className="absolute top-20 left-10 w-20 h-20 md:w-32 md:h-32 transform hover:rotate-12 transition-transform duration-700">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl backdrop-blur-md border border-white/40 shadow-xl" />
        </div>
        
        {/* Sphere-like shape */}
        <div className="absolute top-40 right-20 w-16 h-16 md:w-24 md:h-24 animate-bounce [animation-duration:4s]">
          <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full backdrop-blur-md border border-white/40 shadow-xl" />
        </div>

        {/* Diamond tracking shape */}
        <div className="absolute bottom-40 left-1/4 w-12 h-12 md:w-20 md:h-20 animate-spin [animation-duration:10s]">
          <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl backdrop-blur-md border border-white/40 shadow-xl transform rotate-45" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-32">
        <div className="animate-in fade-in slide-in-from-bottom-5 duration-1000">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 mb-6 shadow-sm hover:shadow-md transition-shadow">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
          </div>

          <p className="text-blue-600 text-lg md:text-xl font-medium mb-4 tracking-wide">
            Hello, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Saurav Raj
            </span>
          </h1>

          {/* Typing Effect Subtitle */}
          <div className="h-12 md:h-16 flex items-center justify-center mb-6">
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
              {text}
              <span className="inline-block w-[3px] h-[0.8em] bg-blue-600 ml-2 animate-pulse align-middle" />
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-8">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span className="text-md font-medium">Muzaffarpur, Bihar, India</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
            Aspiring Software and AI/ML Engineer aiming to apply strong computer science 
            and machine learning fundamentals to build scalable, real-world solutions 
            while continuously learning and growing professionally.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#contact" 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-blue-500/25 hover:scale-105 active:scale-95 flex items-center space-x-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transition-transform -translate-x-full group-hover:translate-x-0 duration-300 pointer-events-none" />
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
            
            <a 
              href="https://github.com/Saurav1603" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-gray-200 text-gray-700 bg-white/50 backdrop-blur-sm rounded-full font-bold text-lg hover:border-blue-500 hover:text-blue-600 hover:bg-white transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center space-x-3"
            >
              <Github className="w-5 h-5" />
              <span>View GitHub</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-400 hover:text-blue-600 transition-colors animate-bounce cursor-pointer p-2"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>

      {/* Decorative Blur Overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
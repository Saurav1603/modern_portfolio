import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, MapPin, Mail, Github, ArrowDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Software Engineer',
    'AI/ML Engineer',
    'Full-Stack Developer',
    'Problem Solver'
  ];
  
  const typingSpeed = isDeleting ? 50 : 150;
  const pauseTime = 2000;

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setTypedText(currentRole.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        setTypedText(currentRole.substring(0, typedText.length + 1));
        if (typedText === currentRole) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-[#f9fafb]"
    >
      {/* Dynamic Mesh-Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 pointer-events-none" />
      
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-400/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft square */}
        <div className="absolute top-24 left-12 w-24 h-24 md:w-32 md:h-32 transform rotate-12 transition-transform duration-[5000ms] hover:rotate-45">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl backdrop-blur-[4px] border border-white/40 shadow-sm" />
        </div>
        
        {/* Soft circle */}
        <div className="absolute top-1/3 right-16 w-20 h-20 md:w-28 md:h-28 transform -translate-y-1/2">
          <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full backdrop-blur-[4px] border border-white/40 shadow-sm" />
        </div>

        {/* Rotated Rect */}
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 md:w-24 md:h-24">
          <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl backdrop-blur-[4px] border border-white/40 transform rotate-45 shadow-sm" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Available Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 mb-8 shadow-lg transform transition hover:scale-105 duration-300">
          <Sparkles className="w-4 h-4 text-yellow-500 animate-spin-slow" />
          <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
        </div>

        <p className="text-blue-600 text-lg md:text-xl font-medium mb-4">Hello, I'm</p>
        
        {/* Name Gradient Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[800] mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-[#2563eb] to-[#9333ea] bg-clip-text text-transparent">
            Saurav Raj
          </span>
        </h1>

        {/* Animated Typing Sub-headline */}
        <div className="h-10 md:h-12 flex items-center justify-center mb-6">
          <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-600 bg-blue-50 px-4 py-1 rounded-lg">
            {typedText}
            <span className="inline-block w-1 h-[0.8em] bg-blue-500 ml-1 animate-pulse align-middle" />
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center space-x-2 text-gray-500 mb-8">
          <MapPin className="w-5 h-5" />
          <span className="text-base md:text-lg">Muzaffarpur, Bihar, India</span>
        </div>

        {/* Brief Bio */}
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-normal px-4">
          Aspiring Software and AI/ML Engineer aiming to apply strong computer science and machine learning fundamentals to build scalable, real-world solutions while continuously learning and growing professionally.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a 
            href="#contact" 
            className="group px-8 py-4 bg-gradient-to-r from-[#2563eb] to-[#9333ea] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center space-x-2 min-w-[200px] justify-center"
          >
            <Mail className="w-5 h-5 group-hover:animate-bounce" />
            <span>Get In Touch</span>
          </a>
          <a 
            href="https://github.com/Saurav1603" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-bold text-lg hover:border-blue-500 hover:text-blue-500 hover:bg-blue-50 transition-all flex items-center space-x-2 min-w-[200px] justify-center"
          >
            <Github className="w-5 h-5" />
            <span>View GitHub</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-400 hover:text-blue-500 transition-colors animate-bounce p-2"
          aria-label="Scroll down"
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
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
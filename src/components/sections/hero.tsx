"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, MapPin, Mail, Github, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [roleText, setRoleText] = useState("");
  const fullRole = "Software Engineer";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isTyping) {
      if (roleText.length < fullRole.length) {
        timeout = setTimeout(() => {
          setRoleText(fullRole.slice(0, roleText.length + 1));
        }, 150);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (roleText.length > 0) {
        timeout = setTimeout(() => {
          setRoleText(roleText.slice(0, roleText.length - 1));
        }, 100);
      } else {
        setIsTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [roleText, isTyping]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-[#111827]"
    >
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 mesh-gradient opacity-40"></div>
      
      {/* Animated Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Top Left Shape */}
        <div className="absolute top-[10%] left-[5%] w-32 h-32 md:w-48 md:h-48 animate-pulse">
          <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl backdrop-blur-sm border border-white/5 transform rotate-12 transition-transform duration-1000"></div>
        </div>
        
        {/* Top Right Shape */}
        <div className="absolute top-[15%] right-[10%] w-24 h-24 md:w-40 md:h-40 animate-bounce [animation-duration:8s]">
          <div className="w-full h-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full backdrop-blur-sm border border-white/5"></div>
        </div>

        {/* Bottom Left Shape */}
        <div className="absolute bottom-[20%] left-[15%] w-20 h-20 md:w-32 md:h-32 animate-pulse [animation-duration:5s]">
          <div className="w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl backdrop-blur-sm border border-white/5 transform rotate-45"></div>
        </div>

        {/* Random Floating Particles (Simulated via divs) */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500/20"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800/80 backdrop-blur-md rounded-full border border-gray-700/50 mb-8 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Sparkles className="w-4 h-4 text-yellow-500 fill-yellow-500/20" />
            <span className="text-sm font-medium text-gray-300">
              Available for opportunities
            </span>
          </div>

          {/* Greeting */}
          <p className="text-blue-400 text-lg md:text-xl font-medium mb-4 tracking-wide animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Hello, I&apos;m
          </p>

          {/* Name - Large Gradient Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            <span className="text-gradient inline-block hover:scale-[1.02] transition-transform cursor-default">
              Saurav Raj
            </span>
          </h1>

          {/* Typing Role Description */}
          <div className="h-12 md:h-16 flex items-center justify-center mb-6 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-400">
              {roleText}
              <span className="inline-block w-[3px] h-[1.1em] bg-blue-500 ml-2 align-middle animate-pulse"></span>
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-10 text-sm md:text-base animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-400">
            <MapPin className="w-5 h-5 text-blue-500" />
            <span>Muzaffarpur, Bihar, India</span>
          </div>

          {/* Intro Text */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-normal animate-in fade-in slide-in-from-bottom-14 duration-1000 delay-500">
            Aspiring Software and AI/ML Engineer aiming to apply strong computer science and machine learning fundamentals to build scalable, real-world solutions while continuously learning and growing professionally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-700">
            <a
              href="#contact"
              className="px-10 py-4.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-[0_10px_40px_-10px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_50px_-12px_rgba(37,99,235,0.6)] flex items-center gap-3 transform hover:-translate-y-1 active:scale-95 px-8"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
            
            <a
              href="https://github.com/Saurav1603"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4.5 border-2 border-gray-700 text-gray-300 rounded-full font-bold text-lg hover:border-blue-500 hover:text-blue-400 transition-all flex items-center gap-3 transform hover:-translate-y-1 active:scale-95 backdrop-blur-sm bg-gray-800/20 px-8"
            >
              <Github className="w-5 h-5" />
              <span>View GitHub</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-gray-500 hover:text-blue-400 transition-all animate-bounce cursor-pointer group"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="w-8 h-8 group-hover:scale-110" />
        </button>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        .mesh-gradient {
          background: radial-gradient(circle at 10% 10%, rgba(37, 99, 235, 0.15) 0%, transparent 40%),
                      radial-gradient(circle at 90% 90%, rgba(147, 51, 234, 0.15) 0%, transparent 40%),
                      radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 60%);
        }

        .text-gradient {
          background: linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #22d3ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
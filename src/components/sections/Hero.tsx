"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  MapPin, 
  Mail, 
  Github, 
  ArrowDown,
  Cpu,
  Globe,
  Zap
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const heroRef = useRef(null);

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
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mousePosition.x, springConfig);
  const mouseYSpring = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { label: "Projects", value: "10+", icon: Globe },
    { label: "Commits", value: "500+", icon: Zap },
    { label: "Coffee", value: "∞", icon: Cpu },
  ];

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Interactive Cursor Spotlight */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-30 opacity-40 mix-blend-soft-light hidden lg:block"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) => `radial-gradient(800px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
          ),
        }}
      />

      {/* Mesh Background Layers */}
      <div className="glow-mesh">
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="glow-blob top-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-500/20" 
        />
        <motion.div 
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="glow-blob bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-purple-500/20" 
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] left-[10%] w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] right-[10%] w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full backdrop-blur-md border border-white/20 shadow-2xl"
        />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Availability Badge */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 px-6 py-2 bg-white/5 dark:bg-white/10 backdrop-blur-2xl rounded-full border border-white/10 mb-10 shadow-2xl"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-sm font-bold tracking-tight text-foreground/80 uppercase">Available for new opportunities</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-indigo-500 dark:text-indigo-400 text-lg md:text-xl font-black mb-6 tracking-[0.3em] uppercase"
          >
            Engineering the Intelligence
          </motion.p>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-none">
            <span className="text-gradient drop-shadow-2xl">
              Saurav Raj
            </span>
          </h1>

          {/* Typing Effect Subtitle */}
          <div className="h-20 md:h-24 flex items-center justify-center mb-8">
            <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground/90 tracking-tight">
              {text}
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[4px] h-[0.9em] bg-indigo-500 ml-4 align-middle" 
              />
            </span>
          </div>

          <p className="text-foreground/70 text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
            Building <span className="text-foreground font-black">intelligent systems</span> and 
            <span className="text-foreground font-black"> scalable web experiences</span> that 
            transform data into impact.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mb-16 px-8 py-6 glass-card rounded-3xl">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-5 h-5 text-indigo-500 group-hover:scale-125 transition-transform" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-foreground">{stat.value}</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-foreground/40 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg transition-all shadow-2xl shadow-indigo-500/40 flex items-center space-x-3"
            >
              <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Let's Connect</span>
            </motion.a>
            
            <motion.a 
              href="https://github.com/Saurav1603" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 glass-card rounded-2xl font-black text-lg flex items-center space-x-3"
            >
              <Github className="w-6 h-6" />
              <span>Source Code</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button 
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/20 hover:text-indigo-500 transition-colors p-4"
        >
          <ArrowDown className="w-8 h-8" />
        </motion.button>
      </motion.div>

      {/* Fade Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

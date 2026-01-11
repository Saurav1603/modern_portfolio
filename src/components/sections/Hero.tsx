"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  MapPin, 
  Mail, 
  Github, 
  ArrowDown 
} from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Interactive Cursor Spotlight */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-30 opacity-40 mix-blend-soft-light"
        style={{
          background: useTransform(
            [mouseXSpring, mouseYSpring],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.15), transparent 80%)`
          ),
        }}
      />

      {/* Mesh Background Layers */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Animated Mesh Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-indigo-500/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-purple-500/30 rounded-full blur-[120px]" 
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
          className="absolute top-[15%] left-[10%] w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl rotate-12"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute top-[40%] right-[10%] w-32 h-32 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full backdrop-blur-md border border-white/20 shadow-2xl"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
          className="absolute bottom-[20%] left-[20%] w-16 h-16 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl backdrop-blur-md border border-white/20 shadow-2xl -rotate-12"
        />
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Availability Badge */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 dark:bg-white/10 backdrop-blur-xl rounded-full border border-white/10 mb-8 shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-foreground/80">Available for new opportunities</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-indigo-500 dark:text-indigo-400 text-lg md:text-xl font-medium mb-4 tracking-widest uppercase"
          >
            Engineering the Intelligence
          </motion.p>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-none">
            <span className="text-gradient">
              Saurav Raj
            </span>
          </h1>

          {/* Typing Effect Subtitle */}
          <div className="h-16 md:h-20 flex items-center justify-center mb-8">
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground/90">
              {text}
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-[4px] h-[0.9em] bg-indigo-500 ml-3 align-middle" 
              />
            </span>
          </div>

          <div className="flex items-center justify-center space-x-2 text-foreground/60 mb-12">
            <MapPin className="w-5 h-5 text-indigo-500" />
            <span className="text-lg font-medium">Bihar, India</span>
          </div>

          <p className="text-foreground/70 text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-light">
            I build <span className="text-foreground font-medium">intelligent systems</span> and 
            <span className="text-foreground font-medium"> scalable web experiences</span> that 
            transform complex data into meaningful impact.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-indigo-500/20 flex items-center space-x-3"
            >
              <Mail className="w-5 h-5" />
              <span>Let's Connect</span>
            </motion.a>
            
            <motion.a 
              href="https://github.com/Saurav1603" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 glass-card rounded-2xl font-bold text-lg flex items-center space-x-3"
            >
              <Github className="w-5 h-5" />
              <span>Source Code</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button 
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/30 hover:text-indigo-500 transition-colors p-4"
        >
          <ArrowDown className="w-8 h-8" />
        </motion.button>
      </motion.div>

      {/* Fade Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

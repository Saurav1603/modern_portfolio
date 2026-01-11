"use client";

import React from 'react';
import { 
  MapPin, 
  GraduationCap, 
  CodeXml, 
  Brain, 
  Rocket, 
  Coffee,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { motion } from "framer-motion";

export default function About() {
  const services = [
    { 
      icon: CodeXml, 
      title: "Software Engineering", 
      desc: "Architecting robust, scalable systems using modern frameworks like React, Next.js, and Node.js.",
      gradient: "from-blue-500 to-indigo-500"
    },
    { 
      icon: Brain, 
      title: "AI & Machine Learning", 
      desc: "Implementing intelligent models and recommendation systems using TensorFlow and PyTorch.",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: Rocket, 
      title: "System Design", 
      desc: "Designing high-performance architectures that prioritize user experience and reliability.",
      gradient: "from-orange-500 to-red-500"
    },
    { 
      icon: Coffee, 
      title: "Problem Solving", 
      desc: "Turning complex challenges into elegant code through continuous learning and iteration.",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-500/10 rounded-full mb-6 border border-indigo-500/20"
          >
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-black text-indigo-500 uppercase tracking-widest">Our Story</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
            Bridging <span className="text-gradient">Intelligence</span> & Code
          </h2>
          <p className="text-foreground/60 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            I am a Software Engineer specialized in AI, dedicated to building the next generation of digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 glass-card rounded-[3rem] p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] -mr-32 -mt-32" />
              
              <div className="text-center">
                <motion.div 
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="w-48 h-48 mx-auto mb-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1.5 shadow-2xl"
                >
                  <div className="w-full h-full rounded-[2.3rem] bg-background flex items-center justify-center">
                    <span className="text-6xl font-black text-gradient">SR</span>
                  </div>
                </motion.div>
                
                <h3 className="text-4xl font-black text-foreground mb-3">Saurav Raj</h3>
                <p className="text-indigo-500 font-black uppercase tracking-[0.2em] text-sm mb-10">Software & AI Engineer</p>
                
                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="flex items-center justify-center space-x-3 text-foreground/70 glass-card !bg-white/5 p-4 rounded-2xl">
                    <MapPin className="w-5 h-5 text-indigo-500" />
                    <span className="font-bold">Bihar, India</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-foreground/70 glass-card !bg-white/5 p-4 rounded-2xl">
                    <GraduationCap className="w-5 h-5 text-indigo-500" />
                    <span className="font-bold">B.Tech CSE (AI)</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-8 bg-black/5 dark:bg-white/5 rounded-3xl border border-white/10">
                  <div className="text-center px-4">
                    <p className="text-3xl font-black text-gradient">10+</p>
                    <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-black mt-1">Projects</p>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div className="text-center px-4">
                    <p className="text-3xl font-black text-gradient">2+</p>
                    <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-black mt-1">Exp Years</p>
                  </div>
                  <div className="w-px h-12 bg-white/10" />
                  <div className="text-center px-4">
                    <p className="text-3xl font-black text-gradient">15+</p>
                    <p className="text-[10px] uppercase tracking-widest text-foreground/40 font-black mt-1">Skills</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background blobs */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-indigo-500/10 blur-[120px] rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />
          </motion.div>

          {/* Narrative Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <h3 className="text-4xl font-black text-foreground tracking-tight leading-tight">
                Crafting the future with <br />
                <span className="text-gradient">Precision & Intelligence</span>
              </h3>
              <div className="space-y-6 text-foreground/70 text-xl leading-relaxed font-medium">
                <p>
                  I specialize in developing <span className="text-foreground font-bold underline decoration-indigo-500/30 decoration-4">high-performance applications</span> that leverage 
                  cutting-edge AI to solve real-world problems. My approach combines mathematical rigor with a deep understanding of user experience.
                </p>
                <p>
                  Whether it's building recommendation systems or scalable web platforms, I focus on delivering <span className="text-foreground font-bold italic">impactful solutions</span> that stand the test of time.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-8 glass-card rounded-[2rem] group cursor-default"
                >
                  <div className={`p-4 bg-gradient-to-br ${service.gradient} rounded-2xl w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-black text-xl text-foreground mb-3">{service.title}</h4>
                  <p className="text-sm text-foreground/50 font-bold leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="p-1 rounded-[2.5rem] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20">
              <div className="p-10 glass-card !border-none rounded-[2.3rem] flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-indigo-500" />
                </div>
                <p className="text-foreground/80 font-bold text-lg leading-snug">
                  "Excellence is not an act, but a habit. I bring that commitment to every line of code I write."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

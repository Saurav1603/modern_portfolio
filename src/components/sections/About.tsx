"use client";

import React from 'react';
import { 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Download, 
  CodeXml, 
  Brain, 
  Rocket, 
  Coffee 
} from 'lucide-react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Bridging the gap between data-driven intelligence and high-performance software engineering.
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl transform rotate-3 scale-105 blur-xl"></div>
              
              <div className="relative glass-card rounded-3xl p-10 overflow-hidden">
                <div className="text-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-40 h-40 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-2xl relative"
                  >
                    <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                      <span className="text-5xl font-black text-gradient">SR</span>
                    </div>
                  </motion.div>
                  
                  <h3 className="text-3xl font-black text-foreground mb-2">Saurav Raj</h3>
                  <p className="text-indigo-500 dark:text-indigo-400 font-bold mb-8 uppercase tracking-widest text-sm">Software & AI Engineer</p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center space-x-3 text-foreground/70">
                      <MapPin size={18} className="text-indigo-500" />
                      <span className="font-semibold">Bihar, India</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 text-foreground/70">
                      <GraduationCap size={18} className="text-indigo-500" />
                      <span className="font-semibold">B.Tech CSE (AI)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-6 bg-white/5 rounded-2xl mb-8 border border-white/10">
                    <div>
                      <p className="text-2xl font-black text-gradient">2+</p>
                      <p className="text-[10px] uppercase tracking-widest text-foreground/50 font-bold mt-1">Projects</p>
                    </div>
                    <div className="border-x border-white/10">
                      <p className="text-2xl font-black text-gradient">2</p>
                      <p className="text-[10px] uppercase tracking-widest text-foreground/50 font-bold mt-1">Internships</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-gradient">15+</p>
                      <p className="text-[10px] uppercase tracking-widest text-foreground/50 font-bold mt-1">Tools</p>
                    </div>
                  </div>

                  <motion.a 
                    href="/resume.pdf" 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-3 w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-500/20 group"
                  >
                    <Download size={20} className="group-hover:animate-bounce" />
                    <span>Download Resume</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-4xl font-black text-foreground mb-8 tracking-tighter">
                Crafting <span className="text-gradient">Intelligent</span> Systems
              </h3>
              <div className="space-y-6 text-foreground/70 leading-relaxed text-lg font-medium">
                <p>
                  I am a forward-thinking <span className="text-foreground">Software Engineer</span> with a deep focus on <span className="text-indigo-500">Artificial Intelligence</span>. Currently completing my B.Tech in CSE (AI), I specialize in building systems that don't just work, but learn and adapt.
                </p>
                <p>
                  My expertise spans from <span className="text-foreground">Full-Stack development</span> to <span className="text-foreground">Machine Learning engineering</span>. I've successfully delivered projects in recommendation systems and stock market prediction, blending mathematical rigor with architectural excellence.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: CodeXml, title: "Full-Stack Dev", desc: "React, Node.js, Django" },
                { icon: Brain, title: "AI/ML Engineering", desc: "TensorFlow, PyTorch, Sklearn" },
                { icon: Rocket, title: "Scalable Apps", desc: "System Design & Cloud" },
                { icon: Coffee, title: "Deep Learning", desc: "Neural Networks & NLP" }
              ].map((service, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-6 glass-card rounded-2xl group"
                >
                  <div className="p-3 bg-indigo-500/10 rounded-xl w-fit mb-4 group-hover:bg-indigo-500/20 transition-colors">
                    <service.icon className="w-6 h-6 text-indigo-500" />
                  </div>
                  <h5 className="font-bold text-lg text-foreground mb-1">{service.title}</h5>
                  <p className="text-sm text-foreground/50 font-medium">{service.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="relative p-8 bg-indigo-500/5 rounded-3xl border border-indigo-500/20">
              <p className="text-foreground/80 italic text-xl font-medium leading-relaxed">
                "I believe the most powerful applications are those that use data to create seamless, intuitive experiences that feel like magic."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

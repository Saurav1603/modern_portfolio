"use client";

import React from 'react';
import { GraduationCap, BookOpen, School, Calendar, Building2, Award } from 'lucide-react';
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "B.Tech – CSE (Artificial Intelligence)",
    institution: "Noida Institute of Engineering and Technology",
    period: "2022 - 2025",
    description: "Specializing in machine learning architectures, neural networks, and algorithmic optimization.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "from-indigo-500 to-blue-600"
  },
  {
    degree: "Diploma – Computer Science & Engineering",
    institution: "Government Polytechnic, Muzaffarpur",
    period: "2019 - 2022",
    description: "Acquired fundamental engineering principles, data structures, and system design basics.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "from-purple-500 to-indigo-600"
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "M.S. College, Motihari",
    period: "2017 - 2019",
    description: "Major in Mathematics and Physics with a focus on logical reasoning.",
    icon: <Award className="w-6 h-6" />,
    color: "from-cyan-500 to-blue-500"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            My academic foundation in engineering and artificial intelligence.
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group p-8 rounded-[2rem] border border-white/10 flex flex-col h-full relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${edu.color} text-white shadow-xl group-hover:scale-110 transition-transform`}>
                  {edu.icon}
                </div>
                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-black tracking-widest text-foreground/50">
                  {edu.period}
                </div>
              </div>

              <h3 className="text-2xl font-black text-foreground mb-4 leading-tight group-hover:text-indigo-400 transition-colors">
                {edu.degree}
              </h3>
              
              <div className="flex items-center text-indigo-500/80 mb-6 font-bold text-sm">
                <Building2 className="w-4 h-4 mr-2" />
                <span>{edu.institution}</span>
              </div>

              <p className="text-foreground/60 leading-relaxed font-medium mb-8">
                {edu.description}
              </p>

              <div className="mt-auto pt-6 border-t border-white/5 flex justify-end">
                <div className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full group-hover:w-20 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

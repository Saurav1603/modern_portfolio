"use client";

import React from 'react';
import { GraduationCap, Calendar, BookOpen, Star } from 'lucide-react';
import { motion } from "framer-motion";

const EducationCard = ({ edu, index }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group"
  >
    <div className="glass-card rounded-[2.5rem] p-8 h-full border border-white/5 group-hover:border-indigo-500/30 transition-all relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
        <GraduationCap className="w-24 h-24 text-indigo-500" />
      </div>

      <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
        <div className="p-4 bg-indigo-500/10 rounded-2xl group-hover:scale-110 transition-transform">
          <BookOpen className="w-6 h-6 text-indigo-500" />
        </div>
        <div className="px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20 text-indigo-500 text-xs font-black flex items-center space-x-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>{edu.duration}</span>
        </div>
      </div>

      <h3 className="text-2xl font-black text-foreground mb-2 group-hover:text-indigo-500 transition-colors">{edu.degree}</h3>
      <p className="text-foreground/40 font-black uppercase tracking-widest text-xs mb-6">{edu.institution}</p>
      
      <p className="text-foreground/60 leading-relaxed font-medium">
        {edu.details}
      </p>

      {edu.score && (
        <div className="mt-8 pt-6 border-t border-white/5 flex items-center space-x-2">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-black text-foreground/70">CGPA: {edu.score}</span>
        </div>
      )}
    </div>
  </motion.div>
);

export default function Education() {
  const education = [
    {
      degree: "B.Tech in CSE (AI)",
      institution: "Your University Name",
      duration: "2021 - 2024 (Expected)",
      details: "Specializing in Artificial Intelligence and Machine Learning. Coursework includes Deep Learning, Neural Networks, and Advanced Data Structures.",
      score: "8.5"
    },
    {
      degree: "Diploma in CSE",
      institution: "State Board of Technical Education",
      duration: "2018 - 2021",
      details: "Foundational studies in Computer Science, Operating Systems, and Software Engineering principles.",
      score: "8.2"
    }
  ];

  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-500/10 rounded-full mb-6 border border-indigo-500/20">
            <GraduationCap className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-black text-indigo-500 uppercase tracking-widest">Academic Base</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Educational <span className="text-gradient">Foundation</span>
          </h2>
          <p className="text-foreground/60 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            A solid academic background focused on the intersection of computer science and artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, i) => (
            <EducationCard key={i} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

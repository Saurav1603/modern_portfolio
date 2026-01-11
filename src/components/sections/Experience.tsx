"use client";

import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from "framer-motion";

const ExperienceCard = ({ exp, index }: any) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-12 pb-12 last:pb-0 group"
  >
    {/* Timeline Line */}
    <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-indigo-500/10 group-last:bottom-full" />
    
    {/* Timeline Dot */}
    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-background border-4 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10 transition-transform group-hover:scale-125" />

    <div className="glass-card rounded-[2rem] p-8 group-hover:border-indigo-500/30 transition-all">
      <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-black text-foreground mb-1">{exp.role}</h3>
          <p className="text-indigo-500 font-black uppercase tracking-widest text-xs">{exp.company}</p>
        </div>
        <div className="px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20 text-indigo-500 text-xs font-black flex items-center space-x-2">
          <Calendar className="w-3.5 h-3.5" />
          <span>{exp.duration}</span>
        </div>
      </div>

      <div className="flex items-center space-x-2 text-foreground/40 text-sm font-bold mb-6">
        <MapPin className="w-4 h-4" />
        <span>{exp.location}</span>
      </div>

      <p className="text-foreground/60 leading-relaxed font-medium mb-8">
        {exp.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {exp.skills.map((skill: string, i: number) => (
          <span 
            key={i}
            className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-wider text-foreground/50 group-hover:text-indigo-500 group-hover:border-indigo-500/30 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default function Experience() {
  const experiences = [
    {
      role: "AIML Intern",
      company: "YBI Foundation",
      duration: "June 2023 - July 2023",
      location: "Remote",
      description: "Spearheaded the development of machine learning models for real-world predictive analytics. Focused on optimizing data preprocessing pipelines and model evaluation frameworks.",
      skills: ["Python", "TensorFlow", "Pandas", "Scikit-Learn"]
    },
    {
      role: "Android Developer Intern",
      company: "GOWOX Infotech Pvt. Ltd",
      duration: "Jan 2023 - March 2023",
      location: "Work from Home",
      description: "Collaborated on the end-to-end development of Android applications. Implemented complex UI components and integrated RESTful APIs for seamless data synchronization.",
      skills: ["Java", "Android Studio", "XML", "Retrofit"]
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-500/10 rounded-full mb-6 border border-indigo-500/20">
            <Briefcase className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-black text-indigo-500 uppercase tracking-widest">Career Path</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Professional <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-foreground/60 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            A track record of continuous growth and technical contributions across diverse engineering domains.
          </p>
        </motion.div>

        <div className="relative">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

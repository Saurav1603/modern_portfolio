"use client";

import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, ChevronRight } from 'lucide-react';
import { motion } from "framer-motion";

const experiences = [
  {
    role: "AIML Intern",
    company: "YBI Foundation",
    duration: "2023 - Present",
    location: "Remote",
    description: "Built recommendation systems and analyzed complex datasets to derive actionable insights using machine learning techniques.",
    responsibilities: [
      "Developed and implemented movie recommendation systems using collaborative filtering.",
      "Conducted data preprocessing and exploratory data analysis on large-scale datasets.",
      "Optimized model performance through hyperparameter tuning and cross-validation.",
      "Collaborated with senior engineers to understand production deployment workflows."
    ]
  },
  {
    role: "Android Developer Intern",
    company: "GOWOX Infotech Pvt. Ltd",
    duration: "2022 - 2023",
    location: "Noida, India",
    description: "Focused on crafting intuitive mobile experiences and implementing modern Android development practices.",
    responsibilities: [
      "Developed several Android application modules using Java and Kotlin.",
      "Integrated RESTful APIs for real-time data synchronization.",
      "Collaborated on UI/UX designs to enhance user engagement and retention.",
      "Debugged and resolved performance issues to ensure smooth app operation."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            My professional journey and internship experiences in software development and AI.
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative space-y-16">
            {/* Timeline Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 opacity-20 hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:ml-[-10px] top-0 md:top-10 w-5 h-5 bg-indigo-600 rounded-full z-20 shadow-2xl shadow-indigo-500/50 hidden md:block" />

                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} ml-6 md:ml-0`}>
                    <div className="glass-card p-8 md:p-10 rounded-3xl border border-black/5 dark:border-white/10 group">
                      <div className={`flex flex-col gap-4 mb-8 ${index % 2 === 0 ? 'md:items-end' : 'items-start'}`}>
                        <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-500 w-fit">

                        <Briefcase size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-black text-foreground group-hover:text-indigo-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className={`flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 text-sm font-bold tracking-wide text-foreground/50 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                          <span className="flex items-center gap-2">
                            <Building2 size={16} className="text-indigo-500" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-2">
                            <Calendar size={16} className="text-purple-500" />
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/70 mb-8 text-base md:text-lg leading-relaxed font-medium">
                      {exp.description}
                    </p>

                    <ul className={`space-y-4 ${index % 2 === 0 ? 'md:items-end' : 'items-start'} flex flex-col`}>
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className={`flex gap-3 text-sm text-foreground/50 font-medium leading-snug ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : 'flex-row text-left'}`}>
                          <ChevronRight size={18} className={`shrink-0 text-indigo-500 mt-0.5 ${index % 2 === 0 ? 'md:rotate-180' : ''}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

"use client";

import React from 'react';
import { 
  Code2, 
  Layers, 
  Wrench, 
  Database, 
  Library,
  Zap
} from 'lucide-react';
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 text-indigo-500" />,
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Frameworks",
    icon: <Layers className="w-6 h-6 text-indigo-500" />,
    skills: ["React", "Node.js", "Django", "Flask", "Tailwind CSS"]
  },
  {
    title: "Dev Tools",
    icon: <Wrench className="w-6 h-6 text-indigo-500" />,
    skills: ["Git", "Docker", "Postman", "VS Code", "Jupyter"]
  },
  {
    title: "Data & Cloud",
    icon: <Database className="w-6 h-6 text-indigo-500" />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "AWS"]
  },
  {
    title: "AI Libraries",
    icon: <Library className="w-6 h-6 text-indigo-500" />,
    skills: ["NumPy", "Pandas", "TensorFlow", "Keras", "Scikit-learn"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            A comprehensive overview of my technical expertise and proficiencies.
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-3xl p-8 border border-white/10 flex flex-col h-full"
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-indigo-500/10 rounded-2xl">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-black text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <motion.span 
                    key={sIdx} 
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold bg-white/5 border border-white/10 text-foreground/70 hover:text-indigo-500 hover:border-indigo-500 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="glass-card rounded-3xl p-8 border-dashed border-2 border-indigo-500/20 bg-indigo-500/5 flex flex-col justify-center items-center text-center"
          >
            <div className="p-5 bg-white/10 rounded-full shadow-2xl mb-6">
              <Zap className="w-10 h-10 text-indigo-500" />
            </div>
            <h3 className="text-2xl font-black text-foreground mb-3">Continuous Growth</h3>
            <p className="text-foreground/60 font-medium leading-relaxed">
              Always expanding my horizon with emerging technologies in AI, Distributed Systems, and Web Architecture.
            </p>
          </motion.div>
        </div>

        <div className="mt-24 pt-16 border-t border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: "Projects", val: "10+" },
              { label: "Internships", val: "2" },
              { label: "Tools", val: "15+" },
              { label: "Commitment", val: "100%" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl font-black text-gradient mb-2">{stat.val}</p>
                <p className="text-sm text-foreground/40 uppercase tracking-widest font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

"use client";

import React from 'react';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Layers, 
  Database,
  Search,
  Zap,
  Layout,
  Container,
  GitBranch,
  Cloud
} from 'lucide-react';
import { motion } from "framer-motion";

const SkillCard = ({ title, icon: Icon, skills, gradient, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8 }}
    whileHover={{ y: -10 }}
    className="group h-full"
  >
    <div className="relative glass-card rounded-[2.5rem] p-8 h-full overflow-hidden border border-white/10">
      {/* Decorative Blob */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
      
      <div className="flex items-center space-x-4 mb-8">
        <div className={`p-4 bg-gradient-to-br ${gradient} rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-500`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-2xl font-black text-foreground tracking-tight">{title}</h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill: string, i: number) => (
          <span 
            key={i}
            className="px-4 py-2 bg-white/5 dark:bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-foreground/70 hover:text-indigo-500 hover:border-indigo-500/50 hover:bg-indigo-500/5 transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
      
      {/* Progress Line */}
      <div className="mt-8 pt-6 border-t border-white/5">
        <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "85%" }}
            viewport={{ once: true }}
            transition={{ delay: delay + 0.5, duration: 1.5 }}
            className={`h-full bg-gradient-to-r ${gradient}`}
          />
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      icon: Terminal,
      gradient: "from-blue-500 to-indigo-500",
      skills: ["Java", "Python", "C/C++", "JavaScript", "TypeScript"]
    },
    {
      title: "Frameworks",
      icon: Layout,
      gradient: "from-purple-500 to-pink-500",
      skills: ["React", "Next.js", "Django", "Spring Boot", "Tailwind CSS"]
    },
    {
      title: "AI & Data",
      icon: Cpu,
      gradient: "from-emerald-500 to-teal-500",
      skills: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-Learn"]
    },
    {
      title: "Infrastructure",
      icon: Cloud,
      gradient: "from-orange-500 to-red-500",
      skills: ["Docker", "Vercel", "Git", "GitHub Actions", "REST APIs"]
    },
    {
      title: "Databases",
      icon: Database,
      gradient: "from-cyan-500 to-blue-500",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Supabase", "Redis"]
    },
    {
      title: "Dev Tools",
      icon: GitBranch,
      gradient: "from-rose-500 to-orange-500",
      skills: ["VS Code", "Postman", "Android Studio", "Vite", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-500/10 rounded-full mb-6 border border-indigo-500/20">
            <Zap className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-black text-indigo-500 uppercase tracking-widest">Capabilities</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-foreground/60 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            A comprehensive toolkit designed for building intelligent, scalable, and high-performance digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <SkillCard key={i} {...cat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

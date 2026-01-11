"use client";

import React from 'react';
import { 
  ExternalLink, 
  Github, 
  Monitor, 
  Layers, 
  ShieldCheck, 
  Target,
  Sparkles,
  ArrowRight,
  Code2
} from 'lucide-react';
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} mb-32 last:mb-0`}
  >
    {/* Visual Side */}
    <div className="w-full lg:w-1/2 group">
      <div className="relative glass-card rounded-[3rem] p-4 overflow-hidden border border-white/10 shadow-2xl">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
        
        {/* Decorative Header */}
        <div className={`p-10 rounded-[2.5rem] ${project.lightBg} ${project.darkBg} border border-white/5 mb-6 flex flex-col items-center justify-center min-h-[350px] text-center relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] -mr-32 -mt-32" />
          
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`p-6 bg-gradient-to-br ${project.accent} rounded-3xl text-white shadow-2xl mb-8 transform transition-transform duration-500`}
          >
            {project.icon}
          </motion.div>
          
          <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4 tracking-tight leading-tight">
            {project.title}
          </h3>
          <p className="text-foreground/50 font-black uppercase tracking-[0.2em] text-xs max-w-xs mx-auto">
            {project.subtitle}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="px-6 pb-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {project.techStack.map((tech: string) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-white/5 border border-white/10 text-foreground/60 text-xs font-black rounded-xl hover:text-indigo-500 hover:border-indigo-500/50 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Content Side */}
    <div className="w-full lg:w-1/2 space-y-10">
      <div className="space-y-6">
        <div className="flex items-center space-x-3 text-indigo-500">
          <Target className="w-6 h-6" />
          <h4 className="text-sm font-black uppercase tracking-[0.3em]">The Solution</h4>
        </div>
        <p className="text-foreground/70 text-xl leading-relaxed font-medium">
          {project.solution}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-8 glass-card rounded-[2rem] border border-white/5 hover:border-indigo-500/30">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-500/10 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-purple-500" />
            </div>
            <h4 className="font-black text-foreground">My Role</h4>
          </div>
          <p className="text-sm text-foreground/50 font-bold leading-relaxed">
            {project.role}
          </p>
        </div>

        <div className="p-8 glass-card rounded-[2rem] border border-white/5 hover:border-emerald-500/30">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-emerald-500/10 rounded-lg">
              <ExternalLink className="w-5 h-5 text-emerald-500" />
            </div>
            <h4 className="font-black text-foreground">Outcome</h4>
          </div>
          <p className="text-sm text-foreground/50 font-bold leading-relaxed">
            {project.outcome}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-6 pt-4">
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-3 px-8 py-4 bg-foreground text-background rounded-2xl font-black shadow-2xl transition-all"
        >
          <Github className="w-5 h-5" />
          <span>View Code</span>
        </motion.a>
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-3 px-8 py-4 glass-card rounded-2xl font-black border border-white/10 hover:border-indigo-500/50 transition-all"
        >
          <ExternalLink className="w-5 h-5" />
          <span>Live Demo</span>
        </motion.a>
      </div>
    </div>
  </motion.div>
);

export default function Projects() {
  const projects = [
    {
      id: "movie-rec",
      title: "Movie Recommendation System",
      subtitle: "ML-POWERED PERSONALIZATION",
      solution: "Built a collaborative filtering engine that analyzes deep user behavior patterns and high-dimensional movie metadata to deliver hyper-relevant suggestions in real-time.",
      techStack: ["Python", "Pandas", "Scikit-Learn", "Numpy", "Streamlit"],
      role: "End-to-end development from data pipeline engineering to model deployment and UI design.",
      outcome: "Achieved significant precision in user-preference matching with a sub-100ms response time.",
      accent: "from-blue-600 to-indigo-600",
      lightBg: "bg-blue-50/50",
      darkBg: "dark:bg-blue-900/10",
      icon: <Monitor className="w-8 h-8" />,
    },
    {
      id: "stock-pred",
      title: "Stock Price Predictor",
      subtitle: "DEEP LEARNING TIME-SERIES",
      solution: "Architected a multi-layered LSTM neural network to analyze complex temporal dependencies in stock market data, enabling robust short-term price trend forecasting.",
      techStack: ["Python", "TensorFlow", "Keras", "Matplotlib", "Yahoo Finance"],
      role: "Designed LSTM architecture, optimized hyperparameters, and integrated real-time data APIs.",
      outcome: "Delivered 85%+ accuracy on short-term trend predictions with interactive visual analytics.",
      accent: "from-purple-600 to-pink-600",
      lightBg: "bg-purple-50/50",
      darkBg: "dark:bg-purple-900/10",
      icon: <Layers className="w-8 h-8" />,
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-500/10 rounded-full mb-6 border border-indigo-500/20">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-black text-indigo-500 uppercase tracking-widest">Showcase</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Featured <span className="text-gradient">Creations</span>
          </h2>
          <p className="text-foreground/60 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            A selection of my most impactful projects where data intelligence meets engineering excellence.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Global CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <div className="inline-block p-1 rounded-[2.5rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
            <div className="bg-background px-12 py-10 rounded-[2.3rem] glass-card !border-none">
              <p className="text-foreground/50 font-black uppercase tracking-[0.2em] text-xs mb-6">Want to see more?</p>
              <a 
                href="https://github.com/Saurav1603" 
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 text-2xl md:text-3xl font-black text-foreground hover:text-indigo-500 transition-colors"
              >
                <span>Explore my GitHub Repository</span>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

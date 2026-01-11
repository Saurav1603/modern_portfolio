"use client";

import React from 'react';
import { ExternalLink, Github, Code2, Layers, Sparkles } from 'lucide-react';
import { motion } from "framer-motion";

const projects = [
  {
    title: "Movie Recommendation System",
    description: "A sophisticated machine learning engine that recommends movies using hybrid collaborative filtering and content-based algorithms. Built with a focus on precision and low-latency inference.",
    tech: ["Python", "Scikit-Learn", "Streamlit", "Pandas"],
    github: "https://github.com/Saurav1603",
    demo: "#",
    category: "Machine Learning"
  },
  {
    title: "Stock Price Predictor",
    description: "An LSTM-based deep learning model capable of predicting volatile market trends using historical time-series data. Features an interactive dashboard for real-time visualization.",
    tech: ["TensorFlow", "Keras", "NumPy", "Matplotlib"],
    github: "https://github.com/Saurav1603",
    demo: "#",
    category: "Deep Learning"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            <span className="text-gradient">Featured Work</span>
          </h2>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Exploring the boundaries of AI and Software Architecture.
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
                <div className="glass-card rounded-[2rem] p-8 md:p-12 h-full flex flex-col relative overflow-hidden">
                  <div className="flex justify-between items-start mb-10">
                    <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-500">
                      {index === 0 ? <Layers size={32} /> : <Code2 size={32} />}
                    </div>
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="px-5 py-2 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 text-foreground/50 rounded-full text-xs font-black tracking-widest uppercase"
                    >
                      {project.category}
                    </motion.span>
                  </div>


                <h3 className="text-3xl md:text-4xl font-black text-foreground mb-6 tracking-tighter group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/60 text-lg leading-relaxed mb-10 font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-12">
                  {project.tech.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-indigo-500/5 text-indigo-400 text-xs font-bold rounded-xl border border-indigo-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-8 pt-8 mt-auto border-t border-white/5">
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-foreground/70 hover:text-indigo-500 font-bold transition-colors"
                  >
                    <Github size={20} />
                    <span>Source</span>
                  </motion.a>
                  <motion.a 
                    href={project.demo}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 text-foreground/70 hover:text-indigo-500 font-bold transition-colors ml-auto"
                  >
                    <span>Demo</span>
                    <ExternalLink size={18} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <motion.a 
            href="https://github.com/Saurav1603" 
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-4 px-10 py-5 glass-card rounded-2xl font-bold text-lg text-foreground/80 hover:text-indigo-500"
          >
            <span>View More Projects</span>
            <Github size={24} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

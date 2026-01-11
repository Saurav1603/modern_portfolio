"use client";

import React from 'react';
import { Trophy, Star, Award, Zap, Target, Sparkles } from 'lucide-react';
import { motion } from "framer-motion";

const AchievementCard = ({ item, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group h-full"
  >
    <div className="glass-card rounded-[2.5rem] p-8 h-full border border-white/5 group-hover:border-indigo-500/30 transition-all flex flex-col relative overflow-hidden">
      {/* Background Icon */}
      <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity duration-500">
        <item.icon className="w-24 h-24 text-indigo-500" />
      </div>

      <div className="flex items-start justify-between mb-8">
        <div className={`p-4 bg-gradient-to-br ${item.gradient} rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-500`}>
          <item.icon className="w-6 h-6 text-white" />
        </div>
        <span className="px-3 py-1 bg-indigo-500/10 text-indigo-500 text-[10px] font-black uppercase tracking-widest rounded-full border border-indigo-500/20">
          {item.tag}
        </span>
      </div>

      <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-indigo-500 transition-colors">{item.title}</h3>
      <p className="text-foreground/60 leading-relaxed font-medium flex-grow">
        {item.description}
      </p>

      {/* Decorative Progress Bar */}
      <div className="mt-8 pt-6 border-t border-white/5">
        <div className="w-12 h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
            className={`h-full bg-gradient-to-r ${item.gradient}`}
          />
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Achievements() {
  const achievements = [
    {
      title: "ML Excellence",
      description: "Successfully developed and deployed high-precision recommendation engines and predictive models using Python and TensorFlow.",
      icon: Target,
      tag: "Technical",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor to various open-source projects, focusing on improving developer tools and AI-driven utilities.",
      icon: Star,
      tag: "Community",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Innovation Award",
      description: "Recognized for innovative problem-solving in college-level hackathons and technical competitions.",
      icon: Trophy,
      tag: "Honors",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-500/10 rounded-full mb-6 border border-indigo-500/20">
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-black text-indigo-500 uppercase tracking-widest">Milestones</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-foreground/60 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            A testament to my dedication, technical growth, and impact in the field of engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <AchievementCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

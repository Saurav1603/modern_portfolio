"use client";

import React from 'react';
import { Mail, Github, Linkedin, Twitter, ArrowRight, ExternalLink, Send, Sparkles } from 'lucide-react';
import { motion } from "framer-motion";

export default function Contact() {
  const socials = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/saurav-raj",
      desc: "Professional Network",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Saurav1603",
      desc: "Code & Projects",
      color: "bg-foreground/5 text-foreground/70"
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
      desc: "Latest Updates",
      color: "bg-sky-400/10 text-sky-400"
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-500/10 rounded-full mb-6 border border-indigo-500/20">
            <Send className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-black text-indigo-500 uppercase tracking-widest">Inquire</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Let's Start a <span className="text-gradient">Conversation</span>
          </h2>
          <p className="text-foreground/60 text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Ready to collaborate on the next big thing? My inbox is always open for interesting projects and technical discussions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Direct Contact Card */}
          <motion.a 
            href="mailto:rajsaurav1603@gmail.com"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="group relative glass-card rounded-[3rem] p-12 overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
              <Mail className="w-48 h-48 text-indigo-500 rotate-12 group-hover:rotate-0 transition-transform" />
            </div>

            <div>
              <div className="p-4 bg-indigo-500/10 rounded-2xl w-fit mb-10 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-3xl font-black text-foreground mb-4">Send an Email</h3>
              <p className="text-foreground/50 text-lg font-bold mb-10 max-w-xs">
                I typically respond within 24 hours. Looking forward to hearing from you!
              </p>
            </div>

            <div className="flex items-center justify-between mt-auto">
              <span className="text-2xl sm:text-3xl font-black text-foreground group-hover:text-indigo-500 transition-colors">
                rajsaurav1603@gmail.com
              </span>
              <div className="p-4 bg-indigo-500 text-white rounded-full group-hover:translate-x-2 transition-transform shadow-xl shadow-indigo-500/20">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </motion.a>

          {/* Socials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`glass-card rounded-[2.5rem] p-8 group flex flex-col justify-between ${i === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="flex justify-between items-start mb-10">
                  <div className={`p-4 ${social.color} rounded-2xl group-hover:scale-110 transition-transform`}>
                    <social.icon className="w-6 h-6" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-foreground/20 group-hover:text-indigo-500 transition-colors" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-foreground mb-1">{social.name}</h4>
                  <p className="text-foreground/40 font-bold uppercase tracking-widest text-[10px]">{social.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-foreground/40 font-black uppercase tracking-widest text-[10px]"
        >
          <p>© {new Date().getFullYear()} Saurav Raj. Built with Passion & Intelligence.</p>
          <div className="flex space-x-8">
            <a href="#about" className="hover:text-indigo-500 transition-colors">About</a>
            <a href="#projects" className="hover:text-indigo-500 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-indigo-500 transition-colors">Skills</a>
          </div>
          <div className="flex items-center space-x-2">
            <span>Bihar, India</span>
            <div className="w-1 h-1 bg-indigo-500 rounded-full" />
            <span>UTC +5:30</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

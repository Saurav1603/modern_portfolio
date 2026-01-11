"use client";

import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  MessageSquare, 
  ArrowUp,
  Send
} from 'lucide-react';
import { motion } from "framer-motion";

const ContactCard = ({ 
  icon: Icon, 
  title, 
  value, 
  href, 
  delay 
}: { 
  icon: any, 
  title: string, 
  value: string, 
  href: string,
  delay: number
}) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -5 }}
    className="glass-card group flex items-start p-8 rounded-[2rem] border border-white/10"
  >
    <div className="p-4 bg-indigo-500/10 rounded-2xl mr-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 text-indigo-500">
      <Icon className="w-6 h-6" />
    </div>
    <div className="flex flex-col">
      <span className="text-xs font-black text-foreground/40 uppercase tracking-widest mb-1">
        {title}
      </span>
      <span className="text-lg font-bold text-foreground group-hover:text-indigo-400 transition-colors">
        {value}
      </span>
    </div>
  </motion.a>
);

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-ping" />
            <span className="text-sm font-bold text-indigo-400 uppercase tracking-widest">Get In Touch</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            <span className="text-gradient">Let's build something great.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-foreground/60 leading-relaxed font-medium">
            Currently seeking new opportunities to innovate and contribute to cutting-edge AI and software projects.
          </p>
        </motion.div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <ContactCard
            icon={Mail}
            title="Email"
            value="sauravraj1603@gmail.com"
            href="mailto:sauravraj1603@gmail.com"
            delay={0.1}
          />
          <ContactCard
            icon={Phone}
            title="Phone"
            value="+91 8292416705"
            href="tel:+918292416705"
            delay={0.2}
          />
          <ContactCard
            icon={MapPin}
            title="Location"
            value="Bihar, India"
            href="https://www.google.com/maps/search/?api=1&query=Bihar,India"
            delay={0.3}
          />
        </div>

        {/* Footer Bottom Area */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black text-gradient mb-2 tracking-tighter">
              SAURAV.
            </h3>
            <p className="text-foreground/40 text-sm font-bold uppercase tracking-widest">
              Software & AI Engineer
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <span className="text-[10px] font-black text-foreground/30 uppercase tracking-[0.3em]">
              Connect
            </span>
            <div className="flex items-center space-x-6">
              {[
                { icon: Github, href: "https://github.com/Saurav1603" },
                { icon: Linkedin, href: "https://linkedin.com/in/saurav-raj" },
                { icon: Twitter, href: "#" },
                { icon: MessageSquare, href: "https://wa.me/918292416705" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 flex items-center justify-center rounded-2xl glass-card text-foreground/50 hover:text-indigo-500 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3 px-8 py-4 glass-card rounded-2xl text-foreground/60 font-bold hover:text-indigo-500"
          >
            <span className="text-sm">Back to Top</span>
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        <div className="mt-20 text-center text-foreground/20 text-xs font-bold tracking-widest uppercase">
          <p>© {new Date().getFullYear()} Saurav Raj • Crafted with precision</p>
        </div>
      </div>
    </footer>
  );
}

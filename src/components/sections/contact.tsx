import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let&apos;s connect!
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full self-center"></div>
            <div className="w-3 h-3 bg-brand-purple rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Information & CTA */}
          <div className="lg:col-span-12">
            <div className="glass-panel rounded-3xl p-8 md:p-12 overflow-hidden relative group">
              {/* Subtle mesh background for card */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 pointer-events-none"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      Let&apos;s work together
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <a 
                      href="mailto:sauravraj1603@gmail.com" 
                      className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-blue/50 hover:bg-white/10 transition-all group/item"
                    >
                      <div className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue group-hover/item:scale-110 transition-transform">
                        <Mail size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Email</p>
                        <p className="text-foreground font-semibold">sauravraj1603@gmail.com</p>
                      </div>
                    </a>

                    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-12 h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center text-brand-purple">
                        <Phone size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Phone</p>
                        <p className="text-foreground font-semibold">+91 91555 XXXXX</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 flex items-center justify-center text-brand-cyan">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Location</p>
                        <p className="text-foreground font-semibold">Muzaffarpur, Bihar, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="space-y-8">
                    <h4 className="text-xl font-bold text-foreground flex items-center">
                      <span className="w-8 h-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full mr-3"></span>
                      Social Media
                    </h4>
                    <p className="text-muted-foreground italic">
                      Connect with me on social media
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <a 
                        href="https://linkedin.com/in/sauravraj1603" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 py-4 px-6 rounded-2xl bg-[#0077b5]/10 border border-[#0077b5]/20 text-[#0077b5] hover:bg-[#0077b5]/20 transition-all"
                      >
                        <Linkedin size={20} />
                        <span className="font-semibold">LinkedIn</span>
                      </a>
                      <a 
                        href="https://github.com/Saurav1603" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 py-4 px-6 rounded-2xl bg-white/5 border border-white/10 text-foreground hover:bg-white/10 transition-all"
                      >
                        <Github size={20} />
                        <span className="font-semibold">GitHub</span>
                      </a>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a 
                      href="mailto:sauravraj1603@gmail.com"
                      className="inline-flex items-center justify-center space-x-2 w-full px-8 py-4 bg-gradient-to-r from-brand-blue to-brand-purple text-white rounded-2xl font-bold text-lg hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all transform active:scale-95"
                    >
                      <Send size={20} />
                      <span>Send a Message</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Saurav Raj. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#home" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">Home</a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">About</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-brand-blue transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
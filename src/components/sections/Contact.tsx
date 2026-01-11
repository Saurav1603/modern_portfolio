import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageSquare, ExternalLink, ArrowUp } from 'lucide-react';

const ContactCard = ({ 
  icon: Icon, 
  title, 
  value, 
  href, 
  isExternal = false 
}: { 
  icon: any, 
  title: string, 
  value: string, 
  href: string, 
  isExternal?: boolean 
}) => (
  <a 
    href={href}
    target={isExternal ? "_blank" : undefined}
    rel={isExternal ? "noopener noreferrer" : undefined}
    className="glass-card group flex items-start p-6 rounded-[1.5rem] border border-gray-200 bg-white/70 hover:bg-white/90 transition-all duration-300"
  >
    <div className="p-3 bg-blue-100 rounded-xl mr-4 group-hover:bg-blue-600 transition-colors duration-300">
      <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
        {title}
      </span>
      <span className="text-lg font-bold text-gray-900 break-all">
        {value}
      </span>
    </div>
  </a>
);

const SocialLink = ({ 
  icon: Icon, 
  href, 
  label 
}: { 
  icon: any, 
  href: string, 
  label: string 
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-600 hover:shadow-lg transition-all transform hover:-translate-y-1"
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      {/* Mesh Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-md rounded-full border border-gray-200 mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
            <span className="text-sm font-semibold text-gray-700">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            <span className="text-gradient">Let&apos;s work together</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <ContactCard
            icon={Mail}
            title="Email"
            value="sauravraj1603@gmail.com"
            href="mailto:sauravraj1603@gmail.com"
          />
          <ContactCard
            icon={Phone}
            title="Phone"
            value="+91 8292416705"
            href="tel:+918292416705"
          />
          <ContactCard
            icon={MapPin}
            title="Location"
            value="Muzaffarpur, Bihar, India"
            href="https://www.google.com/maps/search/?api=1&query=Muzaffarpur,Bihar,India"
            isExternal={true}
          />
        </div>

        {/* Footer Bottom Area */}
        <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Saurav Raj
            </h3>
            <p className="text-gray-500 text-sm font-medium">
              Software Engineer & AI/ML Engineer
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">
              Connect with me
            </span>
            <div className="flex items-center space-x-4">
              <SocialLink icon={Github} href="https://github.com/Saurav1603" label="GitHub" />
              <SocialLink icon={Linkedin} href="https://linkedin.com/in/saurav-raj" label="LinkedIn" />
              <SocialLink icon={Twitter} href="https://twitter.com" label="Twitter" />
              <SocialLink icon={MessageSquare} href="https://wa.me/918292416705" label="WhatsApp" />
            </div>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-600 shadow-sm hover:shadow-md hover:border-blue-600 hover:text-blue-600 transition-all group"
          >
            <span className="text-sm font-semibold">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-16 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Saurav Raj. Built with Passion & Precision.</p>
        </div>
      </div>
    </footer>
  );
}
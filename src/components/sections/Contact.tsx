import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="relative py-24 overflow-hidden bg-white dark:bg-gray-900">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
      <div className="absolute -top-24 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 mb-4">
            <Send className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's work <span className="text-gradient">together</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Email Card */}
          <div className="glass-card p-8 rounded-3xl border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Drop me a message anytime</p>
            <a 
              href="mailto:contact@sauravraj.com" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:underline group/link"
            >
              Send an email
              <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Phone Card */}
          <div className="glass-card p-8 rounded-3xl border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Phone</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Let's have a quick chat</p>
            <a 
              href="tel:+910000000000" 
              className="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:underline group/link"
            >
              Call now
              <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Location Card */}
          <div className="glass-card p-8 rounded-3xl border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Location</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Muzaffarpur, Bihar, India</p>
            <span className="inline-flex items-center text-cyan-600 dark:text-cyan-400 font-semibold">
              Available Remotely
            </span>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="pt-12 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start">
              <a href="#home" className="text-2xl font-bold gradient-text mb-4">Saurav Raj</a>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Connect with me on social media
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/Saurav1603" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all shadow-sm"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-12 text-center text-gray-500 dark:text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Saurav Raj. All rights reserved.</p>
            <p className="mt-2 flex items-center justify-center">
              Designed & Built with <span className="text-red-500 mx-1">❤</span> using Next.js & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
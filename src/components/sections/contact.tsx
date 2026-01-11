import React from 'react';
import { Mail, Github, Linkedin, Twitter, ArrowRight, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
      <div className="hidden sm:block absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="hidden sm:block absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative">
              Let&apos;s Build Something Together
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Open to full-stack and frontend opportunities. Whether you have a question or just want to say hi, my inbox is always open!
          </p>
          <div className="mt-8 flex justify-center items-center space-x-3">
            <div className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </div>
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
              Available for new opportunities
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Email Card */}
          <a 
            href="mailto:rajsaurav1603@gmail.com"
            className="group relative p-8 md:p-10 bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Mail className="w-24 h-24 text-blue-600 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
            </div>
            <div className="relative">
              <div className="inline-flex p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Drop me an email</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xs">
                Expect a response within 24 hours. I love discussing new tech and projects.
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                rajsaurav1603@gmail.com
              </span>
              <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:translate-x-2">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </a>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="https://linkedin.com/in/saurav-raj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-8 bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 rounded-2xl bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 transition-transform group-hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">LinkedIn</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Professional network & updates</p>
              </div>
            </a>

            <a 
              href="https://github.com/Saurav1603" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-8 bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 rounded-2xl bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white transition-transform group-hover:scale-110">
                  <Github className="w-6 h-6" />
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">GitHub</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Code, projects & contributions</p>
              </div>
            </a>

            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-8 bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between sm:col-span-2"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-500 dark:text-blue-400 transition-transform group-hover:scale-110">
                    <Twitter className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Twitter</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Insights & tech thoughts</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                  <span>Follow me</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer Credit Tag / Simple Copyright */}
        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between text-gray-500 dark:text-gray-400 text-sm gap-4">
          <p>© {new Date().getFullYear()} Saurav Raj. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">Skills</a>
          </div>
          <p className="flex items-center">
            Built with 
            <span className="mx-1 text-red-500">❤</span> 
            using React & Tailwind
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
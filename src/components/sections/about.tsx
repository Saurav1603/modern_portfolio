import React from 'react';
import { MapPin, GraduationCap, Briefcase, Download, CodeXml, Brain, Rocket, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-[120px] bg-white dark:bg-[#111827] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative">
        {/* Section Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient relative">
              About Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about building intelligent solutions that make a difference
          </p>
          <div className="mt-6 flex justify-center items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side: 3D Profile Card */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:sticky lg:top-24">
              {/* Decorative Background Glows */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[1.5rem] transform rotate-6 scale-105 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-[1.5rem] transform -rotate-3 scale-105 pointer-events-none"></div>
              
              {/* Actual Card */}
              <div className="relative glass-card surface-3d p-8">
                <div className="text-center">
                  {/* Profile Image Component Placeholder */}
                  <div className="w-36 h-36 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1 shadow-2xl relative">
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400/50"></div>
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                      <span className="text-5xl font-bold text-gradient">SR</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Saurav Raj</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-6">Software Engineer & AI/ML Engineer</p>
                  
                  {/* Detailed Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span className="font-medium">Location:</span>
                      <span>Muzaffarpur, Bihar, India</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <GraduationCap className="w-4 h-4 text-blue-500" />
                      <span className="font-medium">Degree:</span>
                      <span>B.Tech CSE (AI)</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <Briefcase className="w-4 h-4 text-blue-500" />
                      <span className="font-medium">Experience:</span>
                      <span>2 Internships</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-2xl mb-6 border border-border">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gradient">2+</p>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-1">Projects</p>
                    </div>
                    <div className="text-center border-x border-gray-200 dark:border-gray-700">
                      <p className="text-2xl font-bold text-gradient">2</p>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-1">Internships</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gradient">15+</p>
                      <p className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-400 mt-1">Technologies</p>
                    </div>
                  </div>

                  <a 
                    href="/resume.pdf" 
                    className="inline-flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Bio & Services */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Building the Future with <span className="text-gradient">Code & AI</span>
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                <p>
                  Hi there! I'm <span className="text-gray-900 dark:text-white font-semibold">Saurav Raj</span>, a dedicated Software Engineer and AI/ML enthusiast currently in my final years of 
                  <span className="text-blue-600 dark:text-blue-400 font-medium"> B.Tech in Computer Science (AI)</span> at Noida Institute of Engineering and Technology.
                </p>
                <p>
                  My journey began with a <span className="text-blue-600 dark:text-blue-400 font-medium">Diploma in Computer Science</span>, where I discovered my passion for creating impactful software. Today, I specialize in building 
                  <span className="text-gray-900 dark:text-white font-medium"> machine learning models</span>, 
                  <span className="text-gray-900 dark:text-white font-medium"> full-stack web applications</span>, and 
                  <span className="text-gray-900 dark:text-white font-medium"> data-driven solutions</span>.
                </p>
                <p>
                  I've had the opportunity to work as an <span className="text-gray-900 dark:text-white font-medium">AIML Intern at YBI Foundation</span>, where I built recommendation systems, and as an 
                  <span className="text-gray-900 dark:text-white font-medium"> Android Developer at GOWOX Infotech</span>, crafting intuitive mobile experiences.
                </p>
              </div>
            </div>

            {/* Service Grid */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                What I Do
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full-Stack */}
                <div className="p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all group shadow-sm hover:shadow-lg h-full">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <CodeXml className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Full-Stack Development</h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">React, Node.js, Django, Flask & modern web technologies.</p>
                    </div>
                  </div>
                </div>

                {/* AI/ML */}
                <div className="p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all group shadow-sm hover:shadow-lg h-full">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">AI/ML Engineering</h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">TensorFlow, Keras, Scikit-learn & deep learning models.</p>
                    </div>
                  </div>
                </div>

                {/* Problem Solving */}
                <div className="p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all group shadow-sm hover:shadow-lg h-full">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Problem Solving</h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">Data structures, algorithms & scalable solutions.</p>
                    </div>
                  </div>
                </div>

                {/* Continuous Learning */}
                <div className="p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all group shadow-sm hover:shadow-lg h-full">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Continuous Learning</h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">Always exploring cutting-edge technologies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote / Sign-off */}
            <div className="p-6 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border-l-4 border-blue-500 italic text-gray-700 dark:text-gray-300">
              &ldquo;I believe in writing clean code that not only works but tells a story. Every project is an opportunity to learn something new and make a positive impact.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
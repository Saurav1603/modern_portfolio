import React from 'react';
import { 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Download, 
  CodeXml, 
  Brain, 
  Rocket, 
  Coffee 
} from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-white dark:bg-[#111827] relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#2563eb] to-[#9333ea] rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Passionate about building intelligent solutions that make a difference
          </p>
          <div className="mt-6 flex justify-center items-center space-x-2">
            <div className="w-3 h-3 bg-[#2563eb] rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2563eb] to-[#9333ea] rounded-full"></div>
            <div className="w-3 h-3 bg-[#9333ea] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: 3D Profile Card */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:sticky lg:top-24">
              {/* Card Shadows/Glows */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-6 scale-105 blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl transform -rotate-3 scale-105 blur-sm"></div>
              
              {/* Profile Card */}
              <div className="relative glass-card tilt-3d rounded-3xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="w-36 h-36 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#2563eb] via-[#9333ea] to-[#06b6d4] p-1 shadow-2xl relative">
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400/50"></div>
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                      <span className="text-5xl font-bold text-gradient">SR</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#111827] dark:text-white mb-1">Saurav Raj</h3>
                  <p className="text-[#2563eb] dark:text-blue-400 font-semibold mb-6">
                    Software Engineer & AI/ML Engineer
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400 text-[14px]">
                      <MapPin size={16} className="text-[#2563eb]" />
                      <span className="font-medium">Location:</span>
                      <span>Muzaffarpur, Bihar, India</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400 text-[14px]">
                      <GraduationCap size={16} className="text-[#2563eb]" />
                      <span className="font-medium">Degree:</span>
                      <span>B.Tech CSE (AI)</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400 text-[14px]">
                      <Briefcase size={16} className="text-[#2563eb]" />
                      <span className="font-medium">Experience:</span>
                      <span>2 Internships</span>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50/50 dark:bg-gray-900/50 rounded-2xl mb-6 border border-gray-100 dark:border-gray-800">
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-bold text-gradient">2+</p>
                      <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold mt-1">Projects</p>
                    </div>
                    <div className="text-center border-x border-gray-200 dark:border-gray-700">
                      <p className="text-2xl md:text-3xl font-bold text-gradient">2</p>
                      <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold mt-1">Internships</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl md:text-3xl font-bold text-gradient">15+</p>
                      <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold mt-1">Technologies</p>
                    </div>
                  </div>

                  <a 
                    href="/resume.pdf" 
                    className="inline-flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-[#2563eb] to-[#9333ea] text-white rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                    <Download size={18} />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio and What I Do */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#111827] dark:text-white mb-6">
                Building the Future with <span className="text-gradient">Code & AI</span>
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                <p>
                  Hi there! I'm <span className="text-[#111827] dark:text-white font-semibold">Saurav Raj</span>, a dedicated Software Engineer and AI/ML enthusiast currently in my final years of 
                  <span className="text-[#2563eb] dark:text-blue-400 font-medium"> B.Tech in Computer Science (AI)</span> at Noida Institute of Engineering and Technology.
                </p>
                <p>
                  My journey began with a <span className="text-[#2563eb] dark:text-blue-400 font-medium">Diploma in Computer Science</span>, where I discovered my passion for creating impactful software. Today, I specialize in building 
                  <span className="text-[#111827] dark:text-white font-medium"> machine learning models</span>, 
                  <span className="text-[#111827] dark:text-white font-medium"> full-stack web applications</span>, and 
                  <span className="text-[#111827] dark:text-white font-medium"> data-driven solutions</span>.
                </p>
                <p>
                  I've had the opportunity to work as an <span className="text-[#111827] dark:text-white font-medium">AIML Intern at YBI Foundation</span>, where I built recommendation systems, and as an 
                  <span className="text-[#111827] dark:text-white font-medium"> Android Developer at GOWOX Infotech</span>, crafting intuitive mobile experiences.
                </p>
              </div>
            </div>

            {/* What I Do Grid */}
            <div>
              <h4 className="text-xl font-bold text-[#111827] dark:text-white mb-6 flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-[#2563eb] to-[#9333ea] rounded-full mr-3"></span>
                What I Do
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full-Stack */}
                <div className="p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all group shadow-sm hover:shadow-lg translate-y-0 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <CodeXml className="w-6 h-6 text-[#2563eb] dark:text-blue-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#111827] dark:text-white mb-1 group-hover:text-[#2563eb] dark:group-hover:text-blue-400 transition-colors">Full-Stack Development</h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400">React, Node.js, Django, Flask & modern web technologies.</p>
                    </div>
                  </div>
                </div>

                {/* AI/ML */}
                <div className="p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all group shadow-sm hover:shadow-lg translate-y-0 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Brain className="w-6 h-6 text-[#2563eb] dark:text-blue-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#111827] dark:text-white mb-1 group-hover:text-[#2563eb] dark:group-hover:text-blue-400 transition-colors">AI/ML Engineering</h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400">TensorFlow, Keras, Scikit-learn & deep learning models.</p>
                    </div>
                  </div>
                </div>

                {/* Problem Solving */}
                <div className="p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all group shadow-sm hover:shadow-lg translate-y-0 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Rocket className="w-6 h-6 text-[#2563eb] dark:text-blue-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#111827] dark:text-white mb-1 group-hover:text-[#2563eb] dark:group-hover:text-blue-400 transition-colors">Problem Solving</h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Data structures, algorithms & scalable solutions.</p>
                    </div>
                  </div>
                </div>

                {/* Learning */}
                <div className="p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 transition-all group shadow-sm hover:shadow-lg translate-y-0 hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                      <Coffee className="w-6 h-6 text-[#2563eb] dark:text-blue-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#111827] dark:text-white mb-1 group-hover:text-[#2563eb] dark:group-hover:text-blue-400 transition-colors">Continuous Learning</h5>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Always exploring cutting-edge technologies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Block */}
            <div className="relative pt-8">
              <div className="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-[#2563eb] to-[#9333ea] rounded-full opacity-30"></div>
              <blockquote className="text-xl italic font-medium text-gray-700 dark:text-gray-300 leading-relaxed pl-4 border-l-4 border-[#2563eb]/20">
                &ldquo;I believe in writing clean code that not only works but tells a story. Every project is an opportunity to learn something new and make a positive impact.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
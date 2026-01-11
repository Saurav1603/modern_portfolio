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
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[3rem] font-bold mb-4 tracking-tight leading-[1.2]">
            <span className="text-gradient relative">
              About Me
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></span>
            </span>
          </h2>
          <p className="text-[#4b5563] text-lg max-w-2xl mx-auto leading-relaxed">
            Passionate about building intelligent solutions that make a difference
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-[#2563eb] rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2563eb] to-[#9333ea] rounded-full self-center"></div>
            <div className="w-3 h-3 bg-[#9333ea] rounded-full"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: 3D Profile Card */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:sticky lg:top-24">
              {/* Decorative background layers for 3D effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-6 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl transform -rotate-3 scale-105"></div>
              
              {/* Main Card */}
              <div className="relative glass-card rounded-3xl p-8 border border-white/20">
                <div className="text-center">
                  <div className="w-36 h-36 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 p-1 shadow-2xl relative">
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400/50"></div>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <span className="text-5xl font-bold text-gradient">SR</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#111827] mb-1">Saurav Raj</h3>
                  <p className="text-[#2563eb] font-semibold mb-6">Software Engineer & AI/ML Engineer</p>
                  
                  {/* Detailed Stats Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center space-x-2 text-sm text-[#4b5563]">
                      <MapPin size={16} className="text-[#2563eb]" />
                      <span className="font-medium">Location:</span>
                      <span>Bihar, India</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-[#4b5563]">
                      <GraduationCap size={16} className="text-[#2563eb]" />
                      <span className="font-medium">Degree:</span>
                      <span>B.Tech CSE (AI)</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-[#4b5563]">
                      <Briefcase size={16} className="text-[#2563eb]" />
                      <span className="font-medium">Experience:</span>
                      <span>2 Internships</span>
                    </div>
                  </div>

                  {/* Horizontal Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-[#f9fafb] rounded-2xl mb-6 border border-[#e5e7eb]">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gradient">2+</p>
                      <p className="text-[10px] uppercase tracking-wider text-[#6b7280] font-semibold mt-1">Projects</p>
                    </div>
                    <div className="text-center border-x border-[#e5e7eb]">
                      <p className="text-3xl font-bold text-gradient">2</p>
                      <p className="text-[10px] uppercase tracking-wider text-[#6b7280] font-semibold mt-1">Internships</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gradient">15+</p>
                      <p className="text-[10px] uppercase tracking-wider text-[#6b7280] font-semibold mt-1">Techs</p>
                    </div>
                  </div>

                  <a 
                    href="/resume.pdf" 
                    className="inline-flex items-center justify-center space-x-2 w-full px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                    <Download size={18} />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Services */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-[#111827] mb-6">
                Building the Future with <span className="text-gradient">Code & AI</span>
              </h3>
              <div className="space-y-4 text-[#4b5563] leading-relaxed text-lg">
                <p>
                  Hi there! I'm <span className="text-[#111827] font-semibold">Saurav Raj</span>, a dedicated Software Engineer and AI/ML enthusiast currently in my final years of{' '}
                  <span className="text-[#2563eb] font-medium">B.Tech in Computer Science (AI)</span> at Noida Institute of Engineering and Technology.
                </p>
                <p>
                  My journey began with a <span className="text-[#2563eb] font-medium">Diploma in Computer Science</span>, where I discovered my passion for creating impactful software. Today, I specialize in building{' '}
                  <span className="text-[#111827] font-medium">machine learning models</span>,{' '}
                  <span className="text-[#111827] font-medium">full-stack web applications</span>, and{' '}
                  <span className="text-[#111827] font-medium">data-driven solutions</span>.
                </p>
                <p>
                  I've had the opportunity to work as an <span className="text-[#111827] font-medium">AIML Intern at YBI Foundation</span>, where I built recommendation systems, and as an <span className="text-[#111827] font-medium">Android Developer at GOWOX Infotech</span>, crafting intuitive mobile experiences.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#111827] mb-6 flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                What I Do
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Service Card 1 */}
                <div className="p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-blue-200 transition-all group shadow-sm hover:shadow-lg h-full">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <CodeXml className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#111827] mb-1 group-hover:text-[#2563eb] transition-colors">Full-Stack Development</h5>
                      <p className="text-sm text-[#4b5563]">React, Node.js, Django, Flask & modern web technologies.</p>
                    </div>
                  </div>
                </div>

                {/* Service Card 2 */}
                <div className="p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-blue-200 transition-all group shadow-sm hover:shadow-lg h-full">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <Brain className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#111827] mb-1 group-hover:text-[#2563eb] transition-colors">AI/ML Engineering</h5>
                      <p className="text-sm text-[#4b5563]">TensorFlow, Keras, Scikit-learn & deep learning models.</p>
                    </div>
                  </div>
                </div>

                {/* Service Card 3 */}
                <div className="p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-blue-200 transition-all group shadow-sm hover:shadow-lg h-full">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <Rocket className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#111827] mb-1 group-hover:text-[#2563eb] transition-colors">Problem Solving</h5>
                      <p className="text-sm text-[#4b5563]">Data structures, algorithms & scalable solutions.</p>
                    </div>
                  </div>
                </div>

                {/* Service Card 4 */}
                <div className="p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-blue-200 transition-all group shadow-sm hover:shadow-lg h-full">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <Coffee className="w-6 h-6 text-[#2563eb]" />
                    </div>
                    <div>
                      <h5 className="font-bold text-[#111827] mb-1 group-hover:text-[#2563eb] transition-colors">Continuous Learning</h5>
                      <p className="text-sm text-[#4b5563]">Always exploring cutting-edge technologies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Block */}
            <div className="relative p-8 bg-blue-50/50 rounded-2xl border-l-4 border-blue-600">
              <span className="absolute top-2 left-4 text-6xl text-blue-200 font-serif leading-none">“</span>
              <p className="relative z-10 text-gray-700 italic text-lg lg:text-xl">
                I believe in writing clean code that not only works but tells a story. Every project is an opportunity to learn something new and make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
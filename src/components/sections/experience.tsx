import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, Brain, Smartphone } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "AIML Intern",
      company: "YBI Foundation",
      duration: "Dec 2023 - Jan 2024",
      location: "Remote",
      description: "Guided by industry experts, I built end-to-end recommendation systems and machine learning models. Focused on data preprocessing, feature engineering, and evaluating model performance using real-world datasets.",
      skills: ["Python", "Machine Learning", "Recommendation Systems", "Data Analysis"],
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      role: "Android Developer Intern",
      company: "GOWOX Infotech Pvt. Ltd",
      duration: "Aug 2023 - Oct 2023",
      location: "Bihar, India",
      description: "Contributed to the development of intuitive mobile applications. Gained hands-on experience with Android Studio, Java, and XML to design and implement user-friendly interfaces and application logic.",
      skills: ["Java", "Android Studio", "XML", "Mobile Development"],
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-cyan-500"
    }
  ];

  return (
    <section id="experience" className="section-padding py-[120px] bg-[#111827] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-800/80 backdrop-blur-md rounded-full border border-white/10 mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-300">My Professional Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            My professional journey and internship experiences where I applied theoretical knowledge to real-world challenges.
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full self-center"></div>
            <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
          </div>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-0">
          {/* Vertical Line */}
          <div className="absolute left-8 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-600/50 via-purple-600/50 to-cyan-600/50 hidden sm:block"></div>

          <div className="space-y-16 sm:space-y-24">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col sm:flex-row items-center ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 top-0 sm:top-8 z-20">
                  <div className={`w-12 h-12 rounded-full bg-gray-900 border-4 border-gray-800 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)]`}>
                    <div className="text-blue-400">
                      {exp.icon}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full sm:w-[45%] ml-16 sm:ml-0 ${index % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'}`}>
                  <div className="glass-card p-6 md:p-8 hover-lift">
                    <div className="flex flex-col gap-1 mb-4">
                      <span className="text-sm font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-2 leading-tight">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-purple-400 font-medium text-lg">
                        <Briefcase className="w-4 h-4" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx} 
                          className="px-3 py-1 bg-gray-800/50 border border-white/5 rounded-full text-xs font-medium text-gray-300 hover:border-blue-500/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alignment on desktop */}
                <div className="hidden sm:block sm:w-[5%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import { Trophy, Code2, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Machine Learning Projects",
      description: "Completed multiple Machine Learning and Deep Learning projects using real-world datasets, including recommendation systems and stock price prediction models.",
      icon: <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      gradient: "from-blue-500/10 to-cyan-500/10",
      highlight: "AI/ML Focus"
    },
    {
      title: "Technical Expertise",
      description: "Developed proficiency in multiple programming languages and frameworks, with hands-on experience in Python, Java, React, and various ML libraries.",
      icon: <Trophy className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      gradient: "from-purple-500/10 to-pink-500/10",
      highlight: "Full Stack"
    },
    {
      title: "Industry Experience",
      description: "Gained valuable industry experience through internships at YBI Foundation and GOWOX Infotech, working on real-world AI/ML and Android development projects.",
      icon: <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      gradient: "from-blue-600/10 to-indigo-600/10",
      highlight: "Professional"
    }
  ];

  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-white dark:bg-gray-900">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-100 dark:border-blue-800 mb-4">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Milestones</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Highlights of my journey and accomplishments in the field of software engineering and artificial intelligence.
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full self-center"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
              <div className="relative glass-card h-full p-8 rounded-3xl border border-gray-200 dark:border-gray-800 flex flex-col items-start transition-all duration-300 hover:translate-y-[-8px]">
                
                {/* Icon & Label */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 border border-gray-200 dark:border-gray-700 px-2 py-1 rounded-md">
                    {item.highlight}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-6 flex-grow">
                  {item.description}
                </p>

                {/* Status Indicator */}
                <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Accomplished</span>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 border border-dashed border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center border border-gray-100 dark:border-gray-700">
              <Trophy className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">Continuous Growth</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Always exploring cutting-edge technologies and solving complex problems.</p>
            </div>
          </div>
          <a 
            href="#projects" 
            className="px-6 py-2.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
          >
            Explore Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
import React from 'react';
import { Sparkles, Brain, CodeXml, Briefcase } from 'lucide-react';

const Achievements = () => {
  const achievementCards = [
    {
      title: "Machine Learning Projects",
      description: "Completed multiple Machine Learning and Deep Learning projects using real-world datasets, including recommendation systems and stock price prediction models.",
      icon: <Brain className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "Technical Expertise",
      description: "Developed proficiency in multiple programming languages and frameworks, with hands-on experience in Python, Java, React, and various ML libraries.",
      icon: <CodeXml className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      gradient: "from-purple-500/10 to-cyan-500/10"
    },
    {
      title: "Industry Experience",
      description: "Gained valuable industry experience through internships at YBI Foundation and GOWOX Infotech, working on real-world AI/ML and Android development projects.",
      icon: <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
      gradient: "from-cyan-500/10 to-blue-500/10"
    }
  ];

  return (
    <section id="achievements" className="py-[120px] bg-white dark:bg-[#111827] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-700 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Milestones</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-gradient">Achievements</span>
          </h2>
          
          <p className="text-gray-600 dark:text-[#9ca3af] text-lg max-w-2xl mx-auto">
            Highlights of my journey and accomplishments
          </p>

          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full self-center"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementCards.map((achievement, index) => (
            <div 
              key={index}
              className="glass-card group p-8 flex flex-col items-start text-left h-full"
            >
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.gradient} mb-6 border border-white/20 dark:border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                {achievement.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {achievement.title}
              </h3>
              
              <p className="text-[#9ca3af] leading-relaxed">
                {achievement.description}
              </p>

              <div className="mt-auto pt-6 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View project details</span>
                <svg 
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
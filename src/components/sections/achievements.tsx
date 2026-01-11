import React from 'react';
import { Award, Target, TrendingUp } from 'lucide-react';

const Achievements = () => {
  const achievementCards = [
    {
      title: "Machine Learning Projects",
      description: "Completed multiple Machine Learning and Deep Learning projects using real-world datasets, including recommendation systems and stock price prediction models.",
      icon: <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Technical Expertise",
      description: "Developed proficiency in multiple programming languages and frameworks, with hands-on experience in Python, Java, React, and various ML libraries.",
      icon: <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      color: "from-purple-500/20 to-cyan-500/20",
    },
    {
      title: "Industry Experience",
      description: "Gained valuable industry experience through internships at YBI Foundation and GOWOX Infotech, working on real-world AI/ML and Android development projects.",
      icon: <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
      color: "from-cyan-500/20 to-blue-500/20",
    },
  ];

  return (
    <section id="achievements" className="py-20 md:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
              <span className="text-gradient">Achievements</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6">
            Highlights of my journey and accomplishments
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full self-center"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementCards.map((achievement, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative h-full glass-panel glossy p-8 rounded-3xl border border-gray-100 dark:border-white/10 flex flex-col items-start transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="mb-6 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base italic">
                  &quot;{achievement.description}&quot;
                </p>

                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5 w-full flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Details</span>
                  <svg 
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Quote */}
        <div className="mt-24 text-center">
          <p className="text-2xl md:text-3xl font-medium italic text-gray-900 dark:text-white max-w-4xl mx-auto leading-relaxed px-4">
            &quot;I believe in writing clean code that not only works but tells a story. Every project is an opportunity to learn something new and make a positive impact.&quot;
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
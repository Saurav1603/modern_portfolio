import React from 'react';
import { Briefcase, Cpu, Code2 } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Machine Learning Projects",
      description: "Completed multiple Machine Learning and Deep Learning projects using real-world datasets, including recommendation systems and stock price prediction models.",
      icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />,
      tag: "Technical Expertise",
      gradient: "from-blue-500 via-cyan-500 to-teal-500"
    },
    {
      title: "Technical Expertise",
      description: "Developed proficiency in multiple programming languages and frameworks, with hands-on experience in Python, Java, React, and various ML libraries.",
      icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />,
      tag: "Development",
      gradient: "from-purple-500 via-pink-500 to-rose-500"
    },
    {
      title: "Industry Experience",
      description: "Gained valuable industry experience through internships at YBI Foundation and GOWOX Infotech, working on real-world AI/ML and Android development projects.",
      icon: <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />,
      tag: "Professional",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 md:py-32 bg-gray-50/50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="hidden sm:block absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
      <div className="hidden sm:block absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            <span className="text-gradient relative">
              Achievements
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            Highlights of my journey and accomplishments
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full self-center"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className="group relative h-full"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 relative overflow-hidden flex flex-col">
                {/* Subtle Hover Gradient Mask */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-full blur-3xl transform translate-x-10 -translate-y-10 transition-opacity duration-500`} />
                
                {/* Card Tag */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-500 shadow-sm relative">
                    {item.icon}
                  </div>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full uppercase tracking-wider border border-blue-100 dark:bg-blue-900/20 dark:text-blue-400 dark:border-blue-800">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base sm:text-lg flex-grow">
                  {item.description}
                </p>

                {/* Decorative bar on hover */}
                <div className="mt-8 w-12 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className={`h-full w-0 group-hover:w-full bg-gradient-to-r ${item.gradient} transition-all duration-700 ease-out`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
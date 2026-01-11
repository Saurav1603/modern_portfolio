import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const educationData = [
  {
    degree: "B.Tech – Computer Science & Engineering (Artificial Intelligence)",
    institution: "Noida Institute of Engineering and Technology",
    location: "Greater Noida, UP",
    duration: "2021 – 2025",
    description: "Specializing in Artificial Intelligence and Machine Learning. Focused on core subjects like Data Structures, Algorithms, Neural Networks, and Deep Learning.",
    highlight: "Currently in Final Year"
  },
  {
    degree: "Diploma – Computer Science & Engineering",
    institution: "Government Polytechnic",
    location: "Lucknow, UP",
    duration: "2018 – 2021",
    description: "Built a strong foundation in computer science fundamentals, software development, and networking principles.",
    highlight: "First Class with Distinction"
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "Lalit Narayan Railway Colony High School",
    location: "Munger, Bihar",
    duration: "2016 – 2018",
    description: "Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics (PCM).",
    highlight: "BSEB Board"
  },
  {
    degree: "Secondary (Class X)",
    institution: "Lalit Narayan Railway Colony High School",
    location: "Munger, Bihar",
    duration: "2016",
    description: "Foundational education covering science, mathematics, and social studies with academic excellence.",
    highlight: "BSEB Board"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full self-center"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {educationData.map((item, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-[1.5rem] border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{item.duration}</span>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                    {item.degree}
                  </h3>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mb-4 text-lg">
                    <BookOpen className="w-4 h-4 mr-2" />
                    {item.institution}
                  </div>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-6 font-medium">
                    <MapPin className="w-4 h-4 mr-2" />
                    {item.location}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg text-sm font-semibold border border-green-100 dark:border-green-900/30">
                    <Award className="w-4 h-4" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical Journey Indicator for extra visual flair */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-gray-700 dark:text-gray-300 font-medium">Total Academic Journey: 7+ Years of Learning</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
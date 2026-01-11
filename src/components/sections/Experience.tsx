import React from 'react';
import { Briefcase, Calendar, MapPin, Building2, ChevronRight } from 'lucide-react';

const experiences = [
  {
    role: "AIML Intern",
    company: "YBI Foundation",
    duration: "2023 - Present",
    location: "Remote",
    description: "Built recommendation systems and analyzed complex datasets to derive actionable insights using machine learning techniques.",
    responsibilities: [
      "Developed and implemented movie recommendation systems using collaborative filtering.",
      "Conducted data preprocessing and exploratory data analysis on large-scale datasets.",
      "Optimized model performance through hyperparameter tuning and cross-validation.",
      "Collaborated with senior engineers to understand production deployment workflows."
    ]
  },
  {
    role: "Android Developer Intern",
    company: "GOWOX Infotech Pvt. Ltd",
    duration: "2022 - 2023",
    location: "Noida, India",
    description: "Focused on crafting intuitive mobile experiences and implementing modern Android development practices.",
    responsibilities: [
      "Developed several Android application modules using Java and Kotlin.",
      "Integrated RESTful APIs for real-time data synchronization.",
      "Collaborated on UI/UX designs to enhance user engagement and retention.",
      "Debugged and resolved performance issues to ensure smooth app operation."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient relative inline-block">
              Experience
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
            My professional journey and internship experiences in software development and AI
          </p>
          <div className="mt-8 flex justify-center space-x-2 items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-3 h-3 bg-purple-500 rounded-full" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-12">
            {/* Timeline Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-20 hidden md:block" />

            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] md:left-1/2 md:ml-[-10px] top-0 md:top-6 w-5 h-5 bg-white border-4 border-blue-500 rounded-full z-20 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} ml-6 md:ml-0`}>
                  <div className="glass-card p-6 md:p-8 rounded-[1.5rem] border border-gray-200">
                    <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                      <div className="p-3 bg-blue-100/50 rounded-xl text-blue-600 shrink-0">
                        <Briefcase size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {exp.role}
                        </h3>
                        <div className={`flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-gray-500 font-medium ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                          <span className="flex items-center gap-1">
                            <Building2 size={14} className="text-blue-500" />
                            {exp.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} className="text-purple-500" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} className="text-blue-500" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className={`space-y-3 ${index % 2 === 0 ? 'md:items-end' : 'items-start'} flex flex-col`}>
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className={`flex gap-2 text-sm text-gray-500 leading-snug ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : 'flex-row text-left'}`}>
                          <ChevronRight size={16} className={`shrink-0 text-blue-500 mt-0.5 ${index % 2 === 0 ? 'md:rotate-180' : ''}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Vertical spacer for mobile labels or desktop alignment */}
                <div className="hidden md:block w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .glass-card {
           background: rgba(255, 255, 255, 0.7);
           backdrop-filter: blur(12px);
           -webkit-backdrop-filter: blur(12px);
           box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.05);
           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-card:hover {
           transform: translateY(-4px);
           box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
           background: rgba(255, 255, 255, 0.85);
        }
        .text-gradient {
          background: linear-gradient(to right, #2563eb, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default Experience;
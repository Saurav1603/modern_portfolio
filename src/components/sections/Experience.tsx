import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "AIML Intern",
      company: "YBI Foundation",
      period: "May 2024 - July 2024",
      location: "Remote",
      description: "Worked on developing movie recommendation systems using machine learning algorithms. Gained hands-on experience with Python libraries like Pandas, NumPy, Scikit-learn, and TensorFlow for data analysis and model building.",
      tech: ["Python", "Machine Learning", "Scikit-learn", "Data Science"]
    },
    {
      title: "Android Developer Intern",
      company: "GOWOX Infotech Pvt. Ltd",
      period: "July 2023 - Oct 2023",
      location: "Kanpur, UP",
      description: "Developed and maintained Android applications using Java and XML. Implemented features for enhanced user experience and integrated APIs for real-time data processing. Collaborated with UI/UX designers to translate wireframes into functional mobile interfaces.",
      tech: ["Java", "Android Studio", "XML", "REST API", "Firebase"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient relative inline-block">
              Experience
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            My professional journey and internship experiences
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full self-center"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent transform -translate-x-1/2 hidden md:block opacity-20"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-500 transform -translate-x-1/2 z-20 hidden md:block"></div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pl-0' : 'md:pr-0'}`}>
                  <div className="glass-card p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-blue-500/30 transition-all duration-300 group shadow-lg hover:shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                      </div>
                      <span className="text-xs font-bold px-3 py-1 bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-full border border-blue-100 dark:border-gray-700">
                        INTERNSHIP
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                      {exp.company}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-xs font-medium bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 rounded-lg border border-gray-100 dark:border-gray-700 group-hover:border-blue-200 dark:group-hover:border-blue-900 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Decoration for Desktop (Connector Line) */}
                <div className="hidden md:block w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent opacity-20"></div>
              </div>
            ))}
          </div>
        </div>

        {/* View LinkedIn / Resume CTA */}
        <div className="mt-20 text-center">
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl font-semibold text-gray-900 dark:text-white hover:border-blue-500 hover:text-blue-600 transition-all duration-300 group shadow-sm hover:shadow-xl"
            >
              <span>Download Full Resume</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
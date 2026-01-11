import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const ExperienceEducation = () => {
  const experiences = [
    {
      role: "AIML Intern",
      company: "YBI Foundation",
      period: "2023 - Present",
      location: "Remote",
      description: "Working on recommendation systems and predictive modeling using machine learning algorithms. Gaining hands-on experience with Python, Scikit-learn, and TensorFlow.",
      icon: Briefcase,
    },
    {
      role: "Android Developer Intern",
      company: "GOWOX Infotech Pvt. Ltd",
      period: "2022 - 2023",
      location: "Remote",
      description: "Developed intuitive mobile applications and user interfaces using Java and Android Studio. Focused on performance optimization and API integration.",
      icon: Briefcase,
    }
  ];

  const education = [
    {
      degree: "B.Tech – Computer Science & Engineering (Artificial Intelligence)",
      institution: "Noida Institute of Engineering and Technology",
      period: "2021 - 2025",
      location: "Greater Noida, UP",
      description: "Focusing on AI/ML fundamentals, Data Structures, Algorithms, and Software Engineering principles.",
      icon: GraduationCap,
    },
    {
      degree: "Diploma – Computer Science & Engineering",
      institution: "Government Polytechnic",
      period: "2018 - 2021",
      location: "Bihar, India",
      description: "Foundation in computer science, programming languages, and networking concepts.",
      icon: GraduationCap,
    },
    {
      degree: "Secondary & Senior Secondary Schooling",
      institution: "CBSE / State Board",
      period: "Completed",
      location: "Muzaffarpur, Bihar",
      description: "Completed secondary education with a strong focus on Science and Mathematics.",
      icon: Award,
    }
  ];

  return (
    <section id="experience-education" className="py-24 relative overflow-hidden bg-gray-900">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div id="experience" className="space-y-12">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">Work Experience</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md">
                My professional journey and internship experiences in tech.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
              </div>
            </div>

            <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-blue-600 before:via-purple-600 before:to-transparent">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot Icon */}
                  <div className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-gray-900 border-2 border-blue-500 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                    <exp.icon className="w-3 h-3 text-blue-400" />
                  </div>
                  
                  <div className="glass-panel rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20">
                        <Calendar className="w-3 h-3 mr-1" />
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-4 text-sm font-medium">
                      <span className="text-gray-300">{exp.company}</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full" />
                      <span className="text-gray-500 inline-flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div id="education" className="space-y-12">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gradient">Education</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md">
                My academic journey and technical qualifications.
              </p>
              <div className="mt-4 flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
              </div>
            </div>

            <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-purple-600 before:via-cyan-600 before:to-transparent">
              {education.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot Icon */}
                  <div className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-gray-900 border-2 border-purple-500 flex items-center justify-center z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                    <edu.icon className="w-3 h-3 text-purple-400" />
                  </div>
                  
                  <div className="glass-panel rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-900/10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-medium rounded-full border border-purple-500/20">
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-4 text-sm font-medium">
                      <span className="text-gray-300">{edu.institution}</span>
                      <span className="w-1 h-1 bg-gray-600 rounded-full" />
                      <span className="text-gray-500 inline-flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {edu.location}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
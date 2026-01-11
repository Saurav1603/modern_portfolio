import React from 'react';
import { GraduationCap, BookOpen, School, Calendar, Building2, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech – Computer Science & Engineering (Artificial Intelligence)",
      institution: "Noida Institute of Engineering and Technology",
      period: "2022 - 2025",
      description: "Focusing on AI/ML fundamentals, deep learning, and scalable software solutions.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      degree: "Diploma – Computer Science & Engineering",
      institution: "Government Polytechnic, Muzaffarpur",
      period: "2019 - 2022",
      description: "Solid foundation in core computer science, programming, and data structures.",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "M.S. College, Motihari",
      period: "2017 - 2019",
      description: "Science stream with a focus on Mathematics and Physics.",
      icon: <Award className="w-6 h-6" />,
      color: "from-cyan-500 to-cyan-600"
    },
    {
      degree: "Secondary (Class X)",
      institution: "S.N.S. High School",
      period: "2017",
      description: "General academic curriculum with excellence in technical subjects.",
      icon: <School className="w-6 h-6" />,
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="education" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container-custom relative px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-gradient relative">
              Education
              <span className="absolute -bottom-2 left-0 h-1.5 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"></span>
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
          <div className="mt-8 flex justify-center items-center space-x-3">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="glass-card group p-8 rounded-[2rem] border border-border/50 bg-white/70 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${edu.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {edu.icon}
                </div>
                <div className="flex items-center space-x-2 text-sm font-medium text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
                  <Calendar className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {edu.degree}
                </h3>
                
                <div className="flex items-center text-muted-foreground mb-4 font-medium">
                  <Building2 className="w-4 h-4 mr-2 text-blue-500" />
                  <span>{edu.institution}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-16 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Motivational Quote or Footer Note for Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-100">
            <div className="px-8 py-4 bg-white/80 backdrop-blur-sm rounded-xl">
              <p className="text-muted-foreground italic text-lg">
                "Education is not the learning of facts, but the training of the mind to think."
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(to right, #2563eb, #9333ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass-card {
           box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }
        .container-custom {
            max-width: 1280px;
        }
      `}</style>
    </section>
  );
};

export default Education;
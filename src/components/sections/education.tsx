import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, School } from 'lucide-react';

const EducationItem = ({ 
  degree, 
  institution, 
  location, 
  duration, 
  description, 
  icon: Icon 
}: { 
  degree: string; 
  institution: string; 
  location: string; 
  duration: string; 
  description?: string;
  icon: any;
}) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      {/* Timeline Line */}
      <div className="absolute left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent group-last:bg-gradient-to-b group-last:from-blue-500/50 group-last:to-transparent"></div>
      
      {/* Timeline Dot */}
      <div className="absolute left-0 top-0 w-[24px] h-[24px] rounded-full bg-gray-900 border-2 border-blue-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(37,99,233,0.3)] group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-3 h-3 text-blue-400" />
      </div>

      {/* Content Card */}
      <div className="glass-card p-6 md:p-8 ml-4 transition-all duration-300 hover:border-blue-500/30">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
              {degree}
            </h3>
            <p className="text-blue-500 font-semibold text-lg mt-1">{institution}</p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
            <span className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
              <Calendar className="w-3.5 h-3.5 mr-2" />
              {duration}
            </span>
            <span className="flex items-center text-gray-400 text-sm">
              <MapPin className="w-3.5 h-3.5 mr-1" />
              {location}
            </span>
          </div>
        </div>
        
        {description && (
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default function Education() {
  const educationData = [
    {
      degree: "B.Tech – Computer Science & Engineering (Artificial Intelligence)",
      institution: "Noida Institute of Engineering and Technology",
      location: "Greater Noida, UP",
      duration: "2022 — 2025",
      description: "Focused on core Artificial Intelligence concepts, Deep Learning, and Advanced Data Structures. Actively participating in technical workshops and building real-world AI applications.",
      icon: GraduationCap
    },
    {
      degree: "Diploma – Computer Science & Engineering",
      institution: "Government Polytechnic",
      location: "Muzaffarpur, Bihar",
      duration: "2019 — 2022",
      description: "Foundational studies in Computer Science including Web Development, Database Management Systems, and Software Engineering principles.",
      icon: BookOpen
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "State Board",
      location: "Bihar, India",
      duration: "2017 — 2019",
      description: "Specialized in Science stream with a focus on Mathematics and Physics.",
      icon: School
    },
    {
      degree: "Secondary (Class X)",
      institution: "State Board",
      location: "Bihar, India",
      duration: "2017",
      description: "Completed secondary education with high distinction in Mathematics and Science.",
      icon: Award
    }
  ];

  return (
    <section id="education" className="section-padding relative overflow-hidden bg-[#111827]">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My academic journey and qualifications that shaped my technical foundation.
            </p>
            <div className="mt-8 flex justify-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full self-center"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            </div>
          </div>

          {/* Timeline Container */}
          <div className="mt-12">
            {educationData.map((edu, index) => (
              <EducationItem
                key={index}
                degree={edu.degree}
                institution={edu.institution}
                location={edu.location}
                duration={edu.duration}
                description={edu.description}
                icon={edu.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
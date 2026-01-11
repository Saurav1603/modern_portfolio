import React from 'react';
import { 
  Code2, 
  Layout, 
  Settings, 
  Database, 
  Library, 
  ChevronRight 
} from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-5 h-5" />,
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL"]
  },
  {
    title: "Frameworks",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React", "Next.js", "Django", "Flask", "Node.js", "Express"]
  },
  {
    title: "Developer Tools",
    icon: <Settings className="w-5 h-5" />,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Jupyter"]
  },
  {
    title: "Cloud & Databases",
    icon: <Database className="w-5 h-5" />,
    skills: ["AWS", "Google Cloud", "MongoDB", "PostgreSQL", "MySQL", "Firebase"]
  },
  {
    title: "Libraries",
    icon: <Library className="w-5 h-5" />,
    skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#f9fafb] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-[#4b5563] text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies
          </p>
          <div className="mt-6 flex justify-center items-center space-x-2">
            <div className="w-3 h-3 bg-[#2563eb] rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2563eb] to-[#9333ea] rounded-full"></div>
            <div className="w-3 h-3 bg-[#9333ea] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card rounded-[1.5rem] p-8 border border-[#e5e7eb] hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-2xl text-[#2563eb] group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#111827]">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <div 
                    key={skillIdx}
                    className="flex items-center space-x-1.5 px-4 py-2 bg-white border border-[#e5e7eb] rounded-xl text-sm font-medium text-[#4b5563] hover:border-[#2563eb] hover:text-[#2563eb] hover:shadow-sm transition-all duration-200 cursor-default group/badge"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-1 group-hover/badge:opacity-100 transition-all duration-200" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Special Experience Highlight Card */}
          <div className="lg:col-span-1 border-2 border-dashed border-blue-200 rounded-[1.5rem] p-8 flex flex-col justify-center items-center text-center bg-blue-50/30">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2563eb] to-[#9333ea] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
              <span className="text-white font-bold text-xl">15+</span>
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-2">Total Stack</h3>
            <p className="text-sm text-[#4b5563]">
              Continuously expanding my toolset with the latest industry standards and AI-driven innovations.
            </p>
          </div>
        </div>

        {/* Floating Skills Track (Visual only, subtle background effect) */}
        <div className="mt-20 opacity-[0.03] select-none pointer-events-none overflow-hidden whitespace-nowrap hidden lg:block">
          <div className="flex space-x-12 animate-marquee">
            {["PYTHON", "JAVA", "REACT", "NEXTJS", "TENSORFLOW", "SQL", "DJANGO", "DOCKER", "AWS"].map((text, i) => (
              <span key={i} className="text-8xl font-black">{text}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
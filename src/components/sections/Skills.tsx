import React from 'react';
import { 
  Code2, 
  Layers, 
  Wrench, 
  Database, 
  Library,
  Terminal,
  Cpu,
  Globe,
  Layout,
  Server,
  Cloud,
  FileJson,
  Braces,
  Settings,
  ShieldCheck,
  Zap
} from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6 text-blue-600" />,
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"]
  },
  {
    title: "Frameworks",
    icon: <Layers className="w-6 h-6 text-blue-600" />,
    skills: ["React", "Node.js", "Django", "Flask", "Bootstrap", "Tailwind CSS", "Spring Boot"]
  },
  {
    title: "Developer Tools",
    icon: <Wrench className="w-6 h-6 text-blue-600" />,
    skills: ["Git & GitHub", "VS Code", "Postman", "Docker", "Jupyter Notebook", "PyCharm"]
  },
  {
    title: "Cloud & Databases",
    icon: <Database className="w-6 h-6 text-blue-600" />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Firebase", "AWS Basics"]
  },
  {
    title: "Libraries",
    icon: <Library className="w-6 h-6 text-blue-600" />,
    skills: ["NumPy", "Pandas", "TensorFlow", "Keras", "Scikit-learn", "Matplotlib", "Seaborn"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-[#f9fafb] relative overflow-hidden">
      {/* Decorative background elements consistent with High Level Design */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-500/5 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-[#4b5563] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and proficiencies across various domains of software development and AI/ML.
          </p>
          <div className="mt-6 flex justify-center items-center space-x-2">
            <div className="w-3 h-3 bg-[#2563eb] rounded-full"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2563eb] to-[#9333ea] rounded-full"></div>
            <div className="w-3 h-3 bg-[#9333ea] rounded-full"></div>
          </div>
        </div>

        {/* Categorized Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card rounded-[1.5rem] p-8 border border-gray-200/50 flex flex-col h-full"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-[#111827]">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="inline-flex items-center px-4 py-1.5 rounded-lg text-sm font-medium bg-white border border-gray-100 shadow-sm text-[#4b5563] hover:text-[#2563eb] hover:border-blue-200 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Special "Ready to Explore" card to fill the grid or add personality */}
          <div className="glass-card rounded-[1.5rem] p-8 border-dashed border-2 border-blue-200 bg-blue-50/30 flex flex-col justify-center items-center text-center">
            <div className="p-4 bg-white rounded-full shadow-md mb-4">
              <Zap className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            </div>
            <h3 className="text-xl font-bold text-[#111827] mb-2">Continuous Growth</h3>
            <p className="text-sm text-[#4b5563]">
              Always learning and expanding my skill set with emerging technologies in AI, Cloud, and Web Architecture.
            </p>
          </div>
        </div>

        {/* Bottom Callout consistent with "What I Do" section text */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-gradient">2+</p>
              <p className="text-sm text-[#4b5563] mt-1 uppercase tracking-wider font-semibold">Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gradient">2</p>
              <p className="text-sm text-[#4b5563] mt-1 uppercase tracking-wider font-semibold">Internships</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gradient">15+</p>
              <p className="text-sm text-[#4b5563] mt-1 uppercase tracking-wider font-semibold">Tools</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-gradient">∞</p>
              <p className="text-sm text-[#4b5563] mt-1 uppercase tracking-wider font-semibold">Passion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
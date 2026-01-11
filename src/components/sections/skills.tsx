import React from 'react';
import { 
  Code2, 
  Layers, 
  Wrench, 
  Cloud, 
  Library, 
  Terminal, 
  Database, 
  Cpu, 
  Globe, 
  Smartphone, 
  Layout, 
  Server
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: <Code2 className="w-5 h-5 text-blue-500" /> },
      { name: "Java", icon: <Terminal className="w-5 h-5 text-red-500" /> },
      { name: "C / C++", icon: <Cpu className="w-5 h-5 text-blue-400" /> },
      { name: "JavaScript", icon: <Globe className="w-5 h-5 text-yellow-400" /> },
      { name: "TypeScript", icon: <Code2 className="w-5 h-5 text-blue-600" /> },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React.js", icon: <Layers className="w-5 h-5 text-cyan-400" /> },
      { name: "Next.js", icon: <Layout className="w-5 h-5 text-white" /> },
      { name: "Node.js", icon: <Server className="w-5 h-5 text-green-500" /> },
      { name: "Django", icon: <Code2 className="w-5 h-5 text-green-700" /> },
      { name: "Flask", icon: <Terminal className="w-5 h-5 text-gray-400" /> },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git & GitHub", icon: <Wrench className="w-5 h-5 text-orange-600" /> },
      { name: "Docker", icon: <Cloud className="w-5 h-5 text-blue-500" /> },
      { name: "VS Code", icon: <Code2 className="w-5 h-5 text-blue-400" /> },
      { name: "Postman", icon: <Globe className="w-5 h-5 text-orange-500" /> },
      { name: "Android Studio", icon: <Smartphone className="w-5 h-5 text-green-400" /> },
    ],
  },
  {
    title: "Cloud & Databases",
    skills: [
      { name: "AWS", icon: <Cloud className="w-5 h-5 text-yellow-500" /> },
      { name: "Firebase", icon: <Database className="w-5 h-5 text-yellow-600" /> },
      { name: "PostgreSQL", icon: <Database className="w-5 h-5 text-blue-300" /> },
      { name: "MongoDB", icon: <Server className="w-5 h-5 text-green-600" /> },
      { name: "SQL", icon: <Database className="w-5 h-5 text-blue-500" /> },
    ],
  },
  {
    title: "Libraries",
    skills: [
      { name: "TensorFlow", icon: <Library className="w-5 h-5 text-orange-400" /> },
      { name: "PyTorch", icon: <Cpu className="w-5 h-5 text-red-400" /> },
      { name: "Scikit-learn", icon: <Library className="w-5 h-5 text-blue-400" /> },
      { name: "NumPy", icon: <Layers className="w-5 h-5 text-blue-500" /> },
      { name: "Pandas", icon: <Code2 className="w-5 h-5 text-purple-400" /> },
    ],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="py-[120px] bg-[#111827] relative overflow-hidden mesh-gradient"
    >
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[3rem] font-bold mb-4 tracking-tight leading-tight">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-[#2563EB] rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2563EB] to-[#9333EA] rounded-full self-center"></div>
            <div className="w-3 h-3 bg-[#9333EA] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="glass-card p-8 group surface-3d"
            >
              <h3 className="text-xl font-semibold text-[#60A5FA] mb-6 flex items-center">
                <span className="w-8 h-1 bg-gradient-to-r from-[#2563EB] to-[#9333EA] rounded-full mr-3"></span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="flex items-center space-x-2 px-4 py-2 bg-[rgba(31,41,55,0.5)] border border-[rgba(255,255,255,0.1)] rounded-xl hover:border-[#2563EB]/50 transition-all duration-300"
                  >
                    <span>{skill.icon}</span>
                    <span className="text-sm font-medium text-[#F3F4F6]">{skill.name}</span>
                  </div>
                ))}
              </div>
              
              {/* Subtle accent border on active/hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#2563EB]/20 rounded-[1.5rem] pointer-events-none transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#2563EB]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#9333EA]/10 rounded-full blur-[100px] pointer-events-none"></div>
    </section>
  );
};

export default SkillsSection;
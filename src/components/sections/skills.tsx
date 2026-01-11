import React from 'react';
import { 
  Code2, 
  Terminal, 
  Database, 
  Cloud, 
  Layers, 
  Cpu, 
  Layout, 
  Server, 
  Settings, 
  Wrench,
  Binary,
  Globe
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ElementType;
  description?: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: Code2 },
      { name: "Java", icon: Terminal },
      { name: "C++", icon: Binary },
      { name: "JavaScript", icon: Code2 },
      { name: "SQL", icon: Database },
      { name: "HTML/CSS", icon: Globe },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", icon: Layout },
      { name: "Django", icon: Server },
      { name: "Flask", icon: Server },
      { name: "Bootstrap", icon: Layers },
      { name: "Tailwind CSS", icon: Layout },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git & GitHub", icon: GithubIcon },
      { name: "VS Code", icon: Settings },
      { name: "PyCharm", icon: Terminal },
      { name: "Postman", icon: Wrench },
      { name: "Docker", icon: Cloud },
    ],
  },
  {
    title: "Cloud & Databases",
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "MySQL", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "MongoDB", icon: Database },
      { name: "Firebase", icon: Cloud },
    ],
  },
  {
    title: "Libraries",
    skills: [
      { name: "TensorFlow", icon: Cpu },
      { name: "Scikit-learn", icon: Cpu },
      { name: "NumPy", icon: Binary },
      { name: "Pandas", icon: Binary },
      { name: "Matplotlib", icon: Layers },
    ],
  },
];

function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

const SkillsSection: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="py-24 md:py-32 bg-[#111827] relative overflow-hidden"
    >
      {/* Background blobs for depth */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies across various domains of software and AI engineering.
          </p>
          <div className="mt-8 flex justify-center items-center gap-3">
            <div className="w-3 h-3 bg-[#2563eb] rounded-full" />
            <div className="w-24 h-1 bg-gradient-to-r from-[#2563eb] to-[#9333ea] rounded-full" />
            <div className="w-3 h-3 bg-[#9333ea] rounded-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="glass-panel rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 bg-gradient-to-b from-[#2563eb] to-[#9333ea] rounded-full" />
                <h3 className="text-xl font-bold text-[#f9fafb]">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#1f2937]/50 border border-white/5 hover:bg-[#1f2937] hover:scale-[1.05] transition-all duration-200 group/item"
                  >
                    <div className="p-3 bg-blue-500/10 rounded-lg mb-3 group-hover/item:bg-blue-500/20 transition-colors">
                      <skill.icon className="w-6 h-6 text-blue-400 group-hover/item:text-blue-300 transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-[#9ca3af] group-hover/item:text-[#f9fafb] text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating background elements for texture */}
        <div className="mt-20 flex justify-center">
           <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center gap-4">
             <span className="text-sm text-[#9ca3af] font-medium italic">
               &ldquo;Always learning, always building.&rdquo;
             </span>
             <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full border border-[#111827] bg-gradient-to-br from-blue-500 to-purple-500" />
                ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
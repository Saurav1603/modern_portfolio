import React from 'react';
import { Code, Layout, Wrench, Cloud, Library, Database } from 'lucide-react';

const SkillBar = ({ label, percentage }: { label: string; percentage: number }) => (
  <div className="mb-4 group">
    <div className="flex justify-between items-center mb-1">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {label}
      </span>
      <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden relative">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative transition-all duration-1000 ease-out"
        style={{ width: `${percentage}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>
    </div>
  </div>
);

const SkillCard = ({ 
  title, 
  icon: Icon, 
  skills, 
  gradient 
}: { 
  title: string; 
  icon: any; 
  skills: { label: string; percentage: number }[];
  gradient: string;
}) => (
  <div className="h-full">
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 h-full border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-800 relative overflow-hidden group">
      {/* Floating background decoration */}
      <div className={`absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br ${gradient} opacity-5 rounded-full blur-2xl transform translate-x-10 -translate-y-10 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      <div className="flex items-center space-x-3 mb-4 sm:mb-6 relative">
        <div className={`p-2 sm:p-3 bg-gradient-to-br ${gradient} rounded-lg sm:rounded-xl text-white shadow-lg`}>
          <Icon size={24} className="sm:w-6 sm:h-6" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>

      <div className="relative">
        {skills.map((skill, index) => (
          <SkillBar key={index} label={skill.label} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      skills: [
        { label: "Java", percentage: 85 },
        { label: "Python", percentage: 90 },
        { label: "C/C++", percentage: 80 },
        { label: "JavaScript/TypeScript", percentage: 85 }
      ]
    },
    {
      title: "Frameworks",
      icon: Layout,
      gradient: "from-purple-500 via-indigo-500 to-blue-500",
      skills: [
        { label: "React", percentage: 90 },
        { label: "Next.js", percentage: 85 },
        { label: "Django", percentage: 75 },
        { label: "Spring Boot", percentage: 70 }
      ]
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      skills: [
        { label: "Git & GitHub", percentage: 90 },
        { label: "Docker", percentage: 80 },
        { label: "Vercel/Netlify", percentage: 85 },
        { label: "VS Code", percentage: 95 }
      ]
    },
    {
      title: "Cloud & Databases",
      icon: Cloud,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      skills: [
        { label: "MongoDB", percentage: 85 },
        { label: "PostgreSQL", percentage: 80 },
        { label: "Supabase", percentage: 75 },
        { label: "AWS (S3/EC2)", percentage: 65 }
      ]
    },
    {
      title: "Libraries",
      icon: Library,
      gradient: "from-fuchsia-500 via-purple-500 to-indigo-500",
      skills: [
        { label: "Tailwind CSS", percentage: 95 },
        { label: "Redux / Zustand", percentage: 85 },
        { label: "Framer Motion", percentage: 80 },
        { label: "React Query", percentage: 75 }
      ]
    },
    {
      title: "Backend Technologies",
      icon: Database,
      gradient: "from-rose-500 via-orange-500 to-yellow-500",
      skills: [
        { label: "Node.js / Express", percentage: 85 },
        { label: "REST APIs", percentage: 90 },
        { label: "GraphQL", percentage: 70 },
        { label: "Auth (JWT/OAuth)", percentage: 80 }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 md:py-32 bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="hidden sm:block absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient relative">
              Skills & Technologies
              <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full self-center"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
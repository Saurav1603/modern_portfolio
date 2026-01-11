import React from 'react';
import { CircleCheckBig, CodeXml, Server, Wrench } from 'lucide-react';

const AboutSection = () => {
  const valueProps = [
    {
      title: "Production-Ready Code",
      description: "Built and deployed 3+ full-stack applications using React, Node.js, and MongoDB, handling authentication, payments, and real-time features."
    },
    {
      title: "Performance Optimization",
      description: "Reduced bundle sizes by 40% and achieved 95+ Lighthouse scores through code splitting and lazy loading strategies."
    },
    {
      title: "User-Centric Design",
      description: "Implemented responsive designs across devices with focus on accessibility (WCAG 2.1 AA standards) and smooth user experiences."
    },
    {
      title: "Fast Learner",
      description: "Self-taught developer who went from basics to building production apps in 12 months. Comfortable picking up new frameworks and technologies quickly."
    }
  ];

  const technicalStrengths = [
    {
      category: "Frontend",
      icon: <CodeXml className="w-5 h-5 text-blue-600" />,
      skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      color: "blue"
    },
    {
      category: "Backend",
      icon: <Server className="w-5 h-5 text-purple-600" />,
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
      color: "purple"
    },
    {
      category: "Tools",
      icon: <Wrench className="w-5 h-5 text-cyan-600" />,
      skills: ["Git", "Vite", "Vercel", "Docker", "CI/CD pipelines"],
      color: "cyan"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white/50 backdrop-blur-sm relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient relative inline-block">
              About Me
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-4 font-sans">
            Passionate about building intelligent solutions that make a difference
          </p>
          <div className="mt-6 flex justify-center items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full self-center"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>

        {/* Two-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Biography & Value Props */}
          <div className="space-y-8">
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg font-sans">
              <p>
                I&apos;m a frontend engineer passionate about building web applications that are both beautiful and performant. With hands-on experience in React, TypeScript, and modern CSS frameworks, I&apos;ve shipped multiple full-stack projects from design to deployment.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                What I Bring to Your Team:
              </h3>
              <div className="space-y-4">
                {valueProps.map((prop, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CircleCheckBig className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1 font-heading">
                        {prop.title}
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed font-sans">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg font-sans">
              Currently seeking frontend or full-stack roles where I can contribute to scalable products while growing alongside experienced engineers.
            </p>
          </div>

          {/* Right Column: Technical Strengths Sidebar */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-heading">
                Technical Strengths
              </h3>
              
              <div className="space-y-8">
                {technicalStrengths.map((strength, index) => (
                  <div key={index}>
                    <div className="flex items-center space-x-2 mb-3">
                      {strength.icon}
                      <h4 className="font-semibold text-gray-900 font-heading">
                        {strength.category}
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {strength.skills.map((skill, sIdx) => {
                        const colors: { [key: string]: string } = {
                          blue: "bg-blue-50 text-blue-700 border-blue-200",
                          purple: "bg-purple-50 text-purple-700 border-purple-200",
                          cyan: "bg-cyan-50 text-cyan-700 border-cyan-200"
                        };
                        return (
                          <span 
                            key={sIdx}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${colors[strength.color]} transition-transform hover:scale-105 cursor-default`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
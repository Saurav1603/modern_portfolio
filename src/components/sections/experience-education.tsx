import React from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';

const ExperienceEducation = () => {
  const experiences = [
    {
      role: "AIML Intern",
      company: "YBI Foundation",
      duration: "June 2023 - July 2023",
      location: "Remote",
      description: "Worked on real-world AI/ML projects, focusing on data preprocessing, model selection, and performance evaluation. Gained hands-on experience with Python libraries like Pandas, NumPy, and Scikit-learn.",
      skills: ["Python", "Machine Learning", "Data Analysis"]
    },
    {
      role: "Android Developer Intern",
      company: "GOWOX Infotech Pvt. Ltd",
      duration: "Jan 2023 - March 2023",
      location: "Work from Home",
      description: "Contributed to the development of Android applications using Java and XML. Focused on UI/UX design implementation and integrating REST APIs for dynamic content.",
      skills: ["Android Studio", "Java", "XML", "REST API"]
    }
  ];

  const education = [
    {
      degree: "B.Tech – Computer Science & Engineering (Artificial Intelligence)",
      institution: "Your University/Institute Name",
      duration: "2021 - 2024 (Expected)",
      details: "Focusing on AI/ML specializations, Advanced Algorithms, and Full-stack Web Development."
    },
    {
      degree: "Diploma – Computer Science & Engineering",
      institution: "State Board of Technical Education",
      duration: "2018 - 2021",
      details: "Foundation in Computer Science, Operating Systems, and Data Structures."
    },
    {
      degree: "Senior Secondary (Class XII)",
      institution: "CBSE / State Board",
      duration: "2018",
      details: "Focused on Science (Physics, Chemistry, Maths)."
    },
    {
      degree: "Secondary (Class X)",
      institution: "CBSE / State Board",
      duration: "2016",
      details: "General academic curriculum with focus on Science and Mathematics."
    }
  ];

  return (
    <div className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="hidden sm:block absolute top-40 right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden sm:block absolute bottom-20 left-[-5%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Experience Section */}
          <section id="experience" className="scroll-mt-32">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-primary" />
                <span className="gradient-text">Professional Experience</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
            </div>

            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 sm:before:left-6 before:w-0.5 before:bg-border">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12 sm:pl-16 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[0.65rem] sm:left-[1.125rem] top-0 w-3 h-3 rounded-full bg-primary border-4 border-background ring-4 ring-primary/10 group-hover:scale-125 transition-transform duration-300 z-10" />
                  
                  <div className="glass p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                        <p className="text-primary font-semibold text-sm uppercase tracking-wider">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.duration}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, sIndex) => (
                        <span key={sIndex} className="px-3 py-1 bg-primary/5 text-primary border border-primary/10 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="scroll-mt-32">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
                <GraduationCap className="w-8 h-8 text-accent" />
                <span className="gradient-text">Academic Journey</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
            </div>

            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-4 sm:before:left-6 before:w-0.5 before:bg-border">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-12 sm:pl-16 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-[0.65rem] sm:left-[1.125rem] top-0 w-3 h-3 rounded-full bg-accent border-4 border-background ring-4 ring-accent/10 group-hover:scale-125 transition-transform duration-300 z-10" />
                  
                  <div className="glass p-6 rounded-2xl border border-border hover:border-accent/30 transition-all duration-300 shadow-sm hover:shadow-xl">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <h3 className="text-lg font-bold text-foreground max-w-[70%]">{edu.degree}</h3>
                      <div className="flex items-center gap-1.5 px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.duration}
                      </div>
                    </div>
                    
                    <p className="text-accent font-medium text-sm mb-3">
                      {edu.institution}
                    </p>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      <style jsx global>{`
        .section-padding {
          padding-top: 5rem;
          padding-bottom: 5rem;
        }
        @media (min-width: 1024px) {
          .section-padding {
            padding-top: 8rem;
            padding-bottom: 8rem;
          }
        }
        .gradient-text {
          background: linear-gradient(to right, #2563eb, #9333ea);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
};

export default ExperienceEducation;
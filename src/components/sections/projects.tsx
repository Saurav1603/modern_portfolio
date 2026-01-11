import React from 'react';
import { ExternalLink, Github, Monitor, TrendingUp } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      title: "Movie Recommendation System",
      description: "A machine learning project that recommends movies based on user preferences using collaborative filtering techniques. The system analyzes user behavior patterns and movie ratings to provide personalized recommendations.",
      icon: <Monitor className="w-6 h-6 text-blue-400" />,
      tags: ["Python", "Scikit-Learn", "Pandas", "Streamlit"],
      githubUrl: "https://github.com/Saurav1603",
      liveUrl: "#",
      gradient: "from-blue-600/20 to-cyan-500/20"
    },
    {
      title: "Stock Price Predictor",
      description: "An LSTM-based deep learning model trained on historical time-series stock data to predict future stock prices. The model uses recurrent neural networks (RNN) to capture temporal patterns in market data.",
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      tags: ["TensorFlow", "Keras", "LSTM", "Matplotlib"],
      githubUrl: "https://github.com/Saurav1603",
      liveUrl: "#",
      gradient: "from-purple-600/20 to-blue-500/20"
    }
  ];

  return (
    <section id="projects" className="py-[120px] relative overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full self-center"></div>
            <div className="w-3 h-3 bg-accent rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group">
              <div className="glass-card h-full p-8 flex flex-col relative overflow-hidden">
                {/* Project Background Glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${project.gradient} blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-muted/50 rounded-2xl border border-white/5 group-hover:border-primary/50 transition-colors">
                    {project.icon}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubUrl} 
                      className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-white/5 rounded-lg"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      className="p-2 text-muted-foreground hover:text-primary transition-colors hover:bg-white/5 rounded-lg"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 text-xs font-medium bg-muted/80 text-muted-foreground rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://github.com/Saurav1603" 
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-border text-foreground rounded-full font-semibold text-lg hover:border-primary hover:text-primary hover:bg-primary/5 transition-all shadow-lg overflow-hidden group"
          >
            <Github className="w-5 h-5" />
            <span>More Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
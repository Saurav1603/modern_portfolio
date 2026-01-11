import React from 'react';
import { ExternalLink, Github, ChevronRight, Monitor, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Movie Recommendation System",
      description: "A machine learning project that recommends movies based on user preferences using collaborative filtering techniques. The system analyzes user behavior patterns and movie ratings to provide personalized recommendations.",
      tags: ["Python", "Pandas", "Scikit-Learn", "NLTK", "Flask"],
      icon: <Monitor className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      github: "https://github.com/Saurav1603",
      demo: "#",
      gradient: "from-blue-500/10 to-purple-500/10",
      accent: "blue"
    },
    {
      title: "Stock Price Predictor",
      description: "An LSTM-based deep learning model trained on historical time-series stock data to predict future stock prices. The model uses recurrent neural networks to capture temporal patterns in market data.",
      tags: ["Deep Learning", "TensorFlow", "Keras", "LSTM", "Matplotlib"],
      icon: <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
      github: "https://github.com/Saurav1603",
      demo: "#",
      gradient: "from-purple-500/10 to-cyan-500/10",
      accent: "purple"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full self-center"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-[1.5rem] border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Header Image/Pattern Area */}
              <div className="h-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 w-full"></div>
              
              <div className="p-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-gray-100 dark:bg-gray-700/50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.demo} 
                      className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                  <a 
                    href={project.demo}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:gap-2 transition-all group/link"
                  >
                    View Project Details
                    <ChevronRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://github.com/Saurav1603" 
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-semibold text-lg hover:border-blue-500 hover:text-blue-500 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all group"
          >
            <span>View All My Projects</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { ExternalLink, Github, Code2, Layers } from 'lucide-react';

const projects = [
  {
    title: "Movie Recommendation System",
    description: "A machine learning project that recommends movies based on user preferences using collaborative filtering techniques. The system analyzes user behavior patterns and movie ratings to provide personalized recommendations.",
    tech: ["Python", "Pandas", "Scikit-Learn", "Streamlit"],
    github: "https://github.com/Saurav1603",
    demo: "#",
    category: "Machine Learning"
  },
  {
    title: "Stock Price Predictor",
    description: "An LSTM-based deep learning model trained on historical time-series stock data to predict future stock prices. The model uses recurrent neural networks to capture temporal patterns in market data.",
    tech: ["Python", "TensorFlow", "Keras", "Matplotlib"],
    github: "https://github.com/Saurav1603",
    demo: "#",
    category: "Deep Learning"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient relative inline-block">
              Featured Projects
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full self-center"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              {/* Card Decoration Layers for 3D effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-[2rem] transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-500"></div>
              
              <div className="glass-card rounded-[2rem] p-8 md:p-10 flex flex-col h-full border border-white/20 dark:border-gray-800 bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl shadow-xl overflow-hidden relative">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400">
                    {index === 0 ? <Layers size={28} /> : <Code2 size={28} />}
                  </div>
                  <span className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-full text-xs font-semibold tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-blue-50/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-lg border border-blue-100/50 dark:border-blue-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-700">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors group/link"
                  >
                    <Github size={20} className="group-hover/link:scale-110 transition-transform" />
                    <span>Source Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition-colors group/link ml-auto"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a 
            href="https://github.com/Saurav1603" 
            className="inline-flex items-center space-x-3 px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-bold hover:border-blue-500 hover:text-blue-500 transition-all group"
          >
            <span>Explore More on GitHub</span>
            <Github size={20} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
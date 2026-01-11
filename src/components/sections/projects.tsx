import React from 'react';
import { ExternalLink, Github, Monitor, Layers, ShieldCheck, Target } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: "movie-rec",
      title: "Movie Recommendation System",
      subtitle: "ML-powered personalized movie recommendations",
      solution: "Built a collaborative filtering recommendation system that analyzes user behavior patterns and movie ratings to provide personalized suggestions. The system uses machine learning algorithms to identify similar users and recommend movies based on their preferences.",
      techStack: ["Python", "Pandas", "Scikit-Learn", "Numpy", "Streamlit"],
      role: "Developed the entire recommendation system from data preprocessing to model deployment. Implemented collaborative filtering algorithms and evaluated model performance using various metrics.",
      outcome: "Successfully achieved high precision in user-preference matching and deployed a user-friendly interface for real-time recommendations.",
      accent: "from-blue-600 to-purple-600",
      lightBg: "bg-blue-50/50",
      darkBg: "dark:bg-blue-900/10",
      icon: <Monitor className="w-6 h-6" />,
    },
    {
      id: "stock-pred",
      title: "Stock Price Predictor",
      subtitle: "LSTM-based stock price prediction using deep learning",
      solution: "Developed an LSTM-based deep learning model that analyzes historical time-series stock data to predict future prices. The model uses recurrent neural networks to capture temporal patterns and trends in market data, providing more accurate predictions than traditional methods.",
      techStack: ["Python", "TensorFlow", "Keras", "Matplotlib", "Yahoo Finance API"],
      role: "Designed and implemented the LSTM architecture, trained the model on historical data, and created a Streamlit web interface for user interaction. Optimized hyperparameters for better prediction accuracy.",
      outcome: "Enabled 85%+ accuracy on short-term trend predictions and provided visual analytics for stock market historical data.",
      accent: "from-purple-600 to-pink-600",
      lightBg: "bg-purple-50/50",
      darkBg: "dark:bg-purple-900/10",
      icon: <Layers className="w-6 h-6" />,
    }
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative">
              Featured Projects
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-8">
            A showcase of my recent work and personal projects in Machine Learning and Web Development
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full self-center"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Project Card Layout */}
              <div className="w-full lg:w-1/2 group">
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-1 sm:p-2 shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden transform transition-all duration-500 hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  
                  {/* Decorative Project Header */}
                  <div className={`p-8 rounded-2xl ${project.lightBg} ${project.darkBg} border border-gray-100 dark:border-gray-700/50 mb-6 flex flex-col items-center justify-center min-h-[280px] text-center`}>
                    <div className={`p-4 bg-gradient-to-br ${project.accent} rounded-2xl text-white shadow-lg mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 font-medium max-w-xs mx-auto">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="px-6 pb-8">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="px-4 py-1.5 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 text-xs font-semibold rounded-full border border-gray-200 dark:border-gray-600 transition-colors hover:border-blue-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="w-full lg:w-1/2 space-y-8 py-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-blue-600 dark:text-blue-400">
                    <Target className="w-5 h-5" />
                    <h4 className="text-xl font-bold uppercase tracking-wider text-sm">Solution</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-2 mb-3">
                      <ShieldCheck className="w-5 h-5 text-purple-500" />
                      <h4 className="font-bold text-gray-900 dark:text-white">My Role</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.role}
                    </p>
                  </div>

                  <div className="p-6 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-2 mb-3">
                      <ExternalLink className="w-5 h-5 text-green-500" />
                      <h4 className="font-bold text-gray-900 dark:text-white">Outcome</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <a 
                    href="#" 
                    className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg text-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </a>
                  <a 
                    href="#" 
                    className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 rounded-xl font-bold hover:border-blue-500 transition-all text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-24 text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="bg-white dark:bg-gray-900 px-8 py-6 rounded-xl">
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-4">Interested in seeing more of my technical work?</p>
              <a 
                href="https://github.com/Saurav1603" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-bold text-lg hover:underline"
              >
                <span>Browse GitHub Repository</span>
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { ExternalLink, Github, Monitor, Boxes, Database } from 'lucide-react';

const projects = [
  {
    title: "Movie Recommendation System",
    description: "A machine learning project that recommends movies based on user preferences using collaborative filtering techniques. The system analyzes user behavior patterns and movie ratings to provide personalized recommendations.",
    tags: ["Machine Learning", "Python", "Pandas", "Scikit-Learn", "Collaborative Filtering"],
    icon: <Monitor className="w-6 h-6" />,
    link: "#",
    github: "https://github.com/Saurav1603",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Stock Price Predictor",
    description: "An LSTM-based deep learning model trained on historical time-series stock data to predict future stock prices. The model uses recurrent neural networks to capture temporal patterns in market data.",
    tags: ["Deep Learning", "LSTM", "TensorFlow", "Keras", "Time Series"],
    icon: <Database className="w-6 h-6" />,
    link: "#",
    github: "https://github.com/Saurav1603",
    color: "from-purple-500 to-blue-500"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-gray-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of my recent work and personal projects focusing on building intelligent systems and robust applications.
          </p>
          <div className="mt-8 flex justify-center items-center gap-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-full" />
            <div className="w-3 h-3 bg-cyan-500 rounded-full" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)] shadow-2xl"
            >
              {/* Card Header/Icon Area */}
              <div className="p-8 pb-0 flex justify-between items-start">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-10 text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {project.icon}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="View Source Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.link}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Visit Project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-900/50 text-blue-400 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <a
            href="https://github.com/Saurav1603"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-gray-700 text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/5 transition-all duration-300 group font-medium"
          >
            <span>See more on GitHub</span>
            <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
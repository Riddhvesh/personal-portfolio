import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Stock Price Prediction Using LSTM',
      description: 'A deep learning project that uses Long Short-Term Memory (LSTM) neural networks to predict stock prices based on historical data. Implements advanced time series forecasting techniques for financial market analysis.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'LSTM', 'TensorFlow', 'Pandas'],
      githubUrl: 'https://github.com/Riddhvesh/Stock-Price-Prediction-Using-LSTM.git',
      featured: true
    },
    {
      title: 'Netflix Shows Using K-Means Clustering',
      description: 'Data analysis project that applies K-Means clustering algorithm to Netflix shows dataset to discover patterns and group similar content. Provides insights into content categorization and recommendation systems.',
      image: 'https://images.pexels.com/photos/265685/pexels-photo-265685.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'K-Means', 'Scikit-learn', 'Matplotlib'],
      githubUrl: 'https://github.com/Riddhvesh/Netflix_show_kmeans_clusterning.git',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in machine learning, 
            data analysis, and artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover-scale"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            For more projects, visit my GitHub profile
          </p>
          <a
            href="https://github.com/Riddhvesh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
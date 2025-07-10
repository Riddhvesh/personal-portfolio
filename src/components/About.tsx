import React from 'react';
import { Code, Brain, BarChart3, Trophy } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Machine Learning', icon: Brain, level: 75 },
    { name: 'Artificial Intelligence', icon: BarChart3, level: 80 },
    { name: 'Sports Analytics', icon: Trophy, level: 85 }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate AI/ML Engineer with expertise in building intelligent systems and analyzing complex data patterns, particularly in the sports domain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="animate-fade-in-left">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                With a strong foundation in artificial intelligence and machine learning, I specialize in developing 
                data-driven solutions that solve real-world problems. My journey began with a fascination for cricket 
                analytics, which led me to explore the intersection of sports and technology.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I have experience working with various machine learning frameworks, statistical analysis tools, and 
                big data technologies. My projects range from predictive modeling to automated machine learning systems 
                that democratize AI for non-technical users.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                When I'm not coding, you'll find me analyzing cricket matches, exploring new AI research papers, or 
                contributing to open-source projects that make machine learning more accessible.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Core Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="flex items-center mb-2">
                    <skill.icon className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                    <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
                    <span className="ml-auto text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
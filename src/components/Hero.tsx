import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full float-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-white rounded-full float-animation" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-white rounded-full float-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-yellow-300">Riddhvesh</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            AI/ML Engineer | Cricket Analyst | Data Science Explorer
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Passionate about building intelligent systems and extracting insights from data. 
            I specialize in machine learning, artificial intelligence, and sports analytics.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Riddhvesh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/riddhvesh-dixit-1aa3b6262/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:riddhveshddixit@gmail.com"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get to Know Me
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Download, FileText, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Shri Ramdeo Baba College of Engineering and Management, Nagpur',
      period: '2022 - 2026',
      description: 'Currently pursuing B.Tech with focus on computer science fundamentals, programming, and emerging technologies.'
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            My academic journey and technical skills in AI/ML engineering and data science.
          </p>
          <a
            href="/RiddhveshDineshDixit_CV.pdf"
            download
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-6 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">{edu.institution}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{edu.period}</p>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Programming</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'R', 'SQL', 'JavaScript'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ML/AI</h4>
                  <div className="flex flex-wrap gap-2">
                    {['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras'].map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
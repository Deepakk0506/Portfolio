import { useEffect, useRef, useState } from 'react';
import { Code, Wrench, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    name: 'Languages',
    icon: Code,
    skills: ['Python', 'Java', 'C', 'C++', 'SQL', 'Scala'],
    color: 'from-purple to-purple-dark',
  },
  {
    name: 'Technologies',
    icon: Wrench,
    skills: [
      'Machine Learning',
      'LLM',
      'Robotic Vision',
      'Micro-controllers',
      'Django',
      'Flask',
      'TensorFlow',
      'PyTorch',
      'ASP.NET',
      'Node.js',
    ],
    color: 'from-blue to-blue-dark',
  },
  {
    name: 'Concepts',
    icon: Lightbulb,
    skills: [
      'Compiler Design',
      'Operating Systems',
      'Virtual Memory',
      'Cache Memory',
      'Encryption',
      'Decryption',
      'Artificial Intelligence',
      'Neural Networks',
      'APIs',
      'Database Normalization',
      'Cloud Computing',
    ],
    color: 'from-purple-light to-blue-light',
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue/5 to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple/50 to-transparent" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue/50 to-transparent" />
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className={`glass-card p-6 sm:p-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + categoryIndex * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-outfit font-bold text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`skill-badge transition-all duration-500 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ 
                      transitionDelay: `${500 + categoryIndex * 150 + skillIndex * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div 
          className={`mt-16 glass-card p-6 sm:p-8 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-xl font-outfit font-bold text-white mb-6 text-center">
            Proficiency Overview
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Python', level: 90 },
              { name: 'Machine Learning', level: 85 },
              { name: 'Deep Learning', level: 80 },
              { name: 'Web Development', level: 75 },
            ].map((item, index) => (
              <div 
                key={item.name}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${900 + index * 100}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-white/80">{item.name}</span>
                  <span className="text-sm text-white/60">{item.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple to-blue rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${item.level}%` : '0%',
                      transitionDelay: `${1000 + index * 100}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

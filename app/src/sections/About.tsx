import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Code, Brain, Rocket } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'B.Tech AI & Data Science at Amrita University',
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Full-stack web development with modern technologies',
  },
  {
    icon: Brain,
    title: 'AI/ML',
    description: 'Deep Learning, Computer Vision & NLP enthusiast',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Building solutions for real-world problems',
  },
];

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`flex items-center gap-4 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple/50 to-transparent" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-white">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Main Content */}
          <div 
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="glass-card p-6 sm:p-8 space-y-6">
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed">
                I am an undergraduate <span className="text-purple-light font-semibold">B.Tech student</span> in 
                Artificial Intelligence and Data Science at{' '}
                <span className="text-blue-light font-semibold">Amrita University</span>.
              </p>
              
              <p className="text-base sm:text-lg text-white/60 leading-relaxed">
                I completed my schooling at <span className="text-white/80">Kendriya Vidyalaya</span>, where I developed 
                a strong foundation in science and technology.
              </p>
              
              <p className="text-base sm:text-lg text-white/60 leading-relaxed">
                I pride myself on my <span className="text-purple-light">adaptability</span> to different situations 
                and people, and I am quick to learn new concepts and technologies.
              </p>
              
              <p className="text-base sm:text-lg text-white/60 leading-relaxed">
                I am passionate about <span className="text-blue-light">AI and Data Science</span>, and I continuously 
                seek opportunities to expand my knowledge and skills in these areas.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '10+', label: 'Projects' },
                { value: '5+', label: 'Technologies' },
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`glass-card p-4 text-center transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="text-2xl sm:text-3xl font-outfit font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div 
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`glass-card p-6 group hover:bg-white/10 transition-all duration-500 cursor-default ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${500 + index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple/20 to-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-purple-light" />
                </div>
                <h3 className="text-lg font-outfit font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

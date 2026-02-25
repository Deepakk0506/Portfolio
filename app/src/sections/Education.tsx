import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const coursework = [
  'Data Structures and Algorithms',
  'Machine Learning',
  'Internet of Things (IoT)',
  'Quantum Computing',
  'Large Language Models',
];

export default function Education() {
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
      id="education" 
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-1/2 h-full bg-gradient-to-r from-blue/5 to-transparent -translate-y-1/2" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-purple/10 rounded-full blur-3xl" />
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
            <span className="gradient-text">Education</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue/50 to-transparent" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-purple via-blue to-purple opacity-30" />
            <div 
              className={`absolute top-0 left-0 w-full bg-gradient-to-b from-purple via-blue to-purple transition-all duration-1000 ${
                isVisible ? 'h-full' : 'h-0'
              }`}
              style={{ transitionDelay: '0.5s' }}
            />
          </div>

          {/* Education Card */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Institution */}
            <div 
              className={`transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              <div className="glass-card p-6 sm:p-8 lg:p-10 relative overflow-hidden group">
                {/* Glow Effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple/20 rounded-full blur-3xl group-hover:bg-purple/30 transition-colors duration-500" />
                
                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-purple to-blue flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-2xl sm:text-3xl font-outfit font-bold text-white mb-2">
                  Amrita Vishwa Vidyapeetham
                </h3>
                
                <p className="relative text-lg sm:text-xl text-purple-light font-medium mb-4">
                  B.Tech in Artificial Intelligence and Data Science
                </p>

                <div className="relative flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-white/60">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Expected June 2027</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Coimbatore, Tamil Nadu</span>
                  </div>
                </div>

                {/* Timeline Node - Desktop */}
                <div className="hidden lg:flex absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-16 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-purple border-4 border-background shadow-glow" />
                </div>
              </div>
            </div>

            {/* Right Side - Coursework */}
            <div 
              className={`transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
            >
              <div className="glass-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-blue-light" />
                  <h4 className="text-xl font-outfit font-semibold text-white">
                    Relevant Coursework
                  </h4>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {coursework.map((course, index) => (
                    <div
                      key={course}
                      className={`flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple/30 transition-all duration-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                      }`}
                      style={{ transitionDelay: `${600 + index * 100}ms` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple to-blue flex-shrink-0" />
                      <span className="text-sm text-white/80">{course}</span>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-purple/10 to-blue/10 border border-white/10">
                  <p className="text-sm text-white/60">
                    <span className="text-white/80 font-medium">Admission No:</span> CB.AI.U4AID23012
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

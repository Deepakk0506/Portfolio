import { useEffect, useRef, useState } from 'react';
import { Award, FileText, ExternalLink } from 'lucide-react';

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

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

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x, y });
  };

  return (
    <section 
      id="achievements" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Spotlight Effect Background */}
      <div 
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(124, 58, 237, 0.15) 0%, transparent 40%)`,
        }}
      />
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple/5 via-transparent to-blue/5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple/50 to-transparent" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-white">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue/50 to-transparent" />
        </div>

        {/* Achievement Card */}
        <div 
          className={`relative transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card p-8 sm:p-10 lg:p-12 text-center relative overflow-hidden group">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Trophy Icon */}
            <div className="relative mb-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-br from-purple/20 to-blue/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                <Award className="w-12 h-12 sm:w-16 sm:h-16 text-purple-light" />
              </div>
              
              {/* Rotating Ring */}
              <div 
                className="absolute inset-0 w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full border-2 border-dashed border-purple/30"
                style={{
                  animation: 'spin 20s linear infinite',
                }}
              />
            </div>

            {/* Content */}
            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple/10 border border-purple/30">
                <span className="w-2 h-2 rounded-full bg-purple-light animate-pulse" />
                <span className="text-sm text-purple-light font-medium">IEEE Publication</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-outfit font-bold text-white">
                Research Paper Published
              </h3>

              <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
                Published a research paper titled <span className="text-purple-light font-semibold">"Two and Four Wheels Differential Racing Bots"</span> at the <span className="text-blue-light font-semibold">2025 International Conference on Computing Technologies (ICOCT), IEEE</span>.
              </p>

              {/* Paper Details */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <FileText className="w-4 h-4 text-white/60" />
                  <span className="text-sm text-white/60">ICOCT 2025</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-sm text-white/60">Conference Paper</span>
                </div>
              </div>

              {/* View Paper Link */}
              <div className="pt-6">
                <a 
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple to-blue text-white font-medium hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  <span>View Publication</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Stats */}
        <div 
          className={`grid grid-cols-3 gap-4 mt-8 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { value: '1', label: 'Research Paper' },
            { value: 'IEEE', label: 'Publication' },
            { value: '2025', label: 'Published' },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="glass-card p-4 text-center"
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-2xl sm:text-3xl font-outfit font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for spinning animation */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

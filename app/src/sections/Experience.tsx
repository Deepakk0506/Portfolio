import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const responsibilities = [
  'Developed and maintained websites and applications using Cursor AI, Firebase Studio, and AI technologies.',
  'Designed marketing and digital content using Canva for business and client projects.',
  'Assisted in managing and optimizing seller portals on Amazon and Flipkart.',
  'Collaborated with team members using Google Workspace for project coordination and documentation.',
  'Contributed to live projects, gaining hands-on experience in web development and digital operations.',
];

const technologies = ['Cursor AI', 'Firebase Studio', 'Canva', 'Google Workspace', 'Amazon Seller Central', 'Flipkart Seller'];

export default function Experience() {
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
      id="experience" 
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          className={`flex items-center gap-4 mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple/50 to-transparent" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-bold text-white">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue/50 to-transparent" />
        </div>

        {/* Experience Card */}
        <div 
          className={`relative transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="glass-card p-6 sm:p-8 lg:p-10 relative overflow-hidden">
            {/* Header */}
            <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple to-blue flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-outfit font-bold text-white mb-1">
                    Yuga Yatra Retail (OPC) Pvt. Ltd.
                  </h3>
                  <p className="text-lg text-purple-light font-medium">
                    Software Engineer
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 sm:text-right">
                <div className="flex items-center gap-2 text-white/60">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Feb 2026 – April 2026</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Bangalore, Karnataka</span>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="relative space-y-4 mb-8">
              <h4 className="text-lg font-outfit font-semibold text-white mb-4">
                Key Responsibilities
              </h4>
              {responsibilities.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple to-blue mt-2 flex-shrink-0" />
                  <p className="text-white/70 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="relative">
              <h4 className="text-sm font-outfit font-semibold text-white/60 mb-3">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={tech}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/20 hover:bg-purple/20 hover:border-purple/30 transition-all duration-300 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ transitionDelay: `${800 + index * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useRef, useEffect } from 'react';
import { ArrowDown, Linkedin, Github, Mail } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    
    setMousePosition({ x: x * 15, y: y * 15 });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple/20 to-blue/20 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Content - Text */}
          <div 
            className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Greeting */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
              style={{ transitionDelay: '0.2s' }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white/70">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-outfit font-bold mb-4"
              style={{ transitionDelay: '0.3s' }}
            >
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Deepak Kumar</span>
            </h1>

            {/* Subtitle */}
            <p 
              className="text-xl sm:text-2xl lg:text-3xl text-white/80 font-outfit font-medium mb-6"
              style={{ transitionDelay: '0.4s' }}
            >
              AI & Data Science Student | Software Engineer
            </p>

            {/* Description */}
            <p 
              className="text-base sm:text-lg text-white/60 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
              style={{ transitionDelay: '0.5s' }}
            >
              Passionate about building intelligent systems and innovative solutions. 
              Specializing in Machine Learning, Deep Learning, and Web Development.
            </p>

            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-8"
              style={{ transitionDelay: '0.6s' }}
            >
              <button
                onClick={() => scrollToSection('#projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple to-blue rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-glow hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue to-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-4 bg-white/5 border border-white/20 rounded-xl font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div 
              className="flex items-center gap-4 justify-center lg:justify-start"
              style={{ transitionDelay: '0.7s' }}
            >
              <a 
                href="https://linkedin.com/in/deepak-kumar-5baa48364" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-purple/20 hover:border-purple/30 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/Deepakk0506" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-purple/20 hover:border-purple/30 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:deepak.rc109@gmail.com"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-purple/20 hover:border-purple/30 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div 
            ref={imageRef}
            className={`flex-shrink-0 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ 
              transitionDelay: '0.4s',
              perspective: '1000px',
            }}
          >
            <div 
              className="relative group"
              style={{
                transform: `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
                transition: 'transform 0.1s ease-out',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple to-blue rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              
              {/* Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img 
                  src="/images/profile.jpg" 
                  alt="Deepak Kumar"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Badges */}
              <div 
                className="absolute -top-4 -right-4 px-4 py-2 bg-surface/90 backdrop-blur-sm rounded-xl border border-purple/30 text-sm font-medium text-white shadow-lg"
                style={{ 
                  transform: 'translateZ(50px)',
                  animation: 'float 3s ease-in-out infinite',
                }}
              >
                <span className="gradient-text">AI Enthusiast</span>
              </div>
              
              <div 
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-surface/90 backdrop-blur-sm rounded-xl border border-blue/30 text-sm font-medium text-white shadow-lg"
                style={{ 
                  transform: 'translateZ(50px)',
                  animation: 'float 3s ease-in-out infinite 0.5s',
                }}
              >
                <span className="gradient-text">Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-sm text-white/50">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

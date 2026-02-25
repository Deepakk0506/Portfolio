import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Shield, Activity } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Military Surveillance & Landmine Detection Robot',
    description: 'Designed and developed an autonomous military surveillance robot for landmine detection, threat monitoring, and safe path planning.',
    details: [
      'Integrated ROS-based SLAM and A* path planning for autonomous navigation in GPS-denied environments with dynamic obstacle avoidance.',
      'Built a CNN-based fire detection model using TensorFlow and Keras, achieving 94% accuracy for real-time threat identification.',
    ],
    technologies: ['ROS', 'AI', 'Raspberry Pi', 'SLAM', 'TensorFlow', 'Flask', 'IoT'],
    icon: Shield,
    color: 'from-red-500 to-orange-500',
    github: '#',
    demo: '#',
  },
  {
    id: 2,
    title: 'Medical Image Analysis for Brain Tumor & Glaucoma Detection',
    description: 'Developed a deep learning-based system for brain tumor segmentation and glaucoma detection from medical images.',
    details: [
      'Implemented Hybrid U-Net and TransUNet architectures for accurate MRI and retinal image analysis.',
      'Trained and evaluated models using TensorFlow and PyTorch, achieving high accuracy in disease classification.',
      'Designed an automated diagnostic pipeline to assist doctors in early detection and clinical decision-making.',
    ],
    technologies: ['Deep Learning', 'Python', 'U-Net', 'TransUNet', 'OpenCV', 'TensorFlow', 'PyTorch'],
    icon: Activity,
    color: 'from-blue-500 to-cyan-500',
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
      id="projects" 
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-purple/5 to-transparent -translate-y-1/2" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple/10 rounded-full blur-3xl" />
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue/50 to-transparent" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                className={`glass-card h-full p-6 sm:p-8 transition-all duration-500 ${
                  hoveredProject === project.id ? 'scale-[1.02] shadow-glow' : ''
                }`}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex gap-2">
                    <a 
                      href={project.github}
                      className="p-2 rounded-lg bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                      aria-label="GitHub repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={project.demo}
                      className="p-2 rounded-lg bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <h3 className="text-xl sm:text-2xl font-outfit font-bold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-white/60 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2 mb-6">
                  {project.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-white/50">
                      <div className="w-1 h-1 rounded-full bg-purple-light mt-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/20 transition-all duration-300 ${
                        hoveredProject === project.id ? 'bg-purple/20 border-purple/30' : ''
                      }`}
                      style={{ 
                        transitionDelay: hoveredProject === project.id ? `${idx * 30}ms` : '0ms',
                        transform: hoveredProject === project.id ? 'translateY(0)' : 'translateY(5px)',
                        opacity: hoveredProject === project.id ? 1 : 0.7,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div 
                  className={`absolute inset-0 rounded-xl bg-gradient-to-r from-purple/10 to-blue/10 transition-opacity duration-500 pointer-events-none ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a 
            href="https://github.com/Deepakk0506"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/20 text-white/80 hover:text-white hover:bg-white/10 hover:border-purple/30 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

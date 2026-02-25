import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'deepak.rc109@gmail.com',
    href: 'mailto:deepak.rc109@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9994149183',
    href: 'tel:+919994149183',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Coimbatore, Tamil Nadu',
    href: '#',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/deepak-kumar-5baa48364',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Deepakk0506',
  },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative w-full py-20 sm:py-28 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-purple/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue/10 rounded-full blur-3xl" />
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div 
            className={`space-y-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-outfit font-bold text-white mb-4">
                Let's Connect
              </h3>
              <p className="text-white/60 leading-relaxed">
                Feel free to reach out for collaborations, opportunities, or just a friendly hello. 
                I'm always excited to connect with like-minded individuals and explore new possibilities.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple/30 transition-all duration-300 group ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple/20 to-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-5 h-5 text-purple-light" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/30 ml-auto group-hover:text-purple-light group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-white/50 mb-4">Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-purple/20 hover:border-purple/30 transition-all duration-300 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ transitionDelay: `${700 + index * 100}ms` }}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div 
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-outfit font-bold text-white mb-6">
                Send a Message
              </h3>

              {/* Name Field */}
              <div className="relative">
                <label 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'name' || formData.name
                      ? '-top-2 text-xs text-purple-light bg-surface px-2'
                      : 'top-4 text-white/50'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'email' || formData.email
                      ? '-top-2 text-xs text-purple-light bg-surface px-2'
                      : 'top-4 text-white/50'
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label 
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focusedField === 'message' || formData.message
                      ? '-top-2 text-xs text-purple-light bg-surface px-2'
                      : 'top-4 text-white/50'
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-purple focus:ring-2 focus:ring-purple/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                  submitted
                    ? 'bg-green-500 hover:bg-green-600'
                    : 'bg-gradient-to-r from-purple to-blue hover:shadow-glow'
                } disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02]`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : submitted ? (
                  <>
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

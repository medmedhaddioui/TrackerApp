import { useState, useRef, useEffect } from 'react';

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [end, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Animated Section wrapper
const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setIsVisible(true)),
      { threshold: 0.05, rootMargin: '50px 0px 50px 0px' }
    );
    const ref = sectionRef.current;
    if (ref) observer.observe(ref);
    return () => ref && observer.unobserve(ref);
  }, []);

  return (
    <div ref={sectionRef} className={`transform transition-all duration-1000 ease-out ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}>
      {children}
    </div>
  );
};

export default function WorkshopsMasterclasses() {
  const colors = { 
    primary: '#00B8A9', 
    accent: '#FF8C42', 
    dark: '#1A4D4D', 
    blue: '#4A90E2', 
    green: '#50C878', 
    pink: '#FF6B9D', 
    yellow: '#FFB800' 
  };
  
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    workshopType: '',
    participantCount: '',
    preferredFormat: '',
    focusAreas: '',
    objectives: '',
    timeline: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [activeFormat, setActiveFormat] = useState(0);

  const useCases = [
    {
      title: 'Universities & Colleges',
      description: 'Empower students with career-ready skills through interactive workshops on resume writing, interviewing, and professional development.',
      icon: '🎓',
      color: colors.primary,
      stats: { workshops: '200+', students: '15K+' }
    },
    {
      title: 'Corporate Teams',
      description: 'Upskill your workforce with leadership masterclasses, technical training, and professional communication workshops.',
      icon: '💼',
      color: colors.accent,
      stats: { workshops: '150+', teams: '500+' }
    },
    {
      title: 'Bootcamps',
      description: 'Enhance your curriculum with industry-expert sessions on emerging technologies and real-world project implementation.',
      icon: '🚀',
      color: colors.blue,
      stats: { workshops: '100+', graduates: '8K+' }
    },
    {
      title: 'Professional Associations',
      description: 'Deliver high-value content to members through specialized masterclasses and certification preparation workshops.',
      icon: '🏆',
      color: colors.green,
      stats: { workshops: '80+', members: '12K+' }
    }
  ];

  const deliveryFormats = [
    {
      title: 'In-Person Intensive',
      description: 'High-energy, hands-on workshops at your location with interactive exercises, live demos, and immediate feedback.',
      icon: '👥',
      color: colors.accent,
      features: ['Full-day immersion', 'Interactive activities', 'Real-time coaching', 'Networking opportunities'],
      duration: '4-8 hours',
      ideal: '20-50 people'
    },
    {
      title: 'Live Virtual Sessions',
      description: 'Engaging online masterclasses with breakout rooms, polls, whiteboards, and collaborative learning experiences.',
      icon: '🖥️',
      color: colors.primary,
      features: ['Global accessibility', 'Recording provided', 'Digital resources', 'Chat & Q&A'],
      duration: '2-4 hours',
      ideal: 'Unlimited'
    },
    {
      title: 'Hybrid Experience',
      description: 'Combine in-person energy with virtual reach - perfect for distributed teams and multi-location organizations.',
      icon: '🌐',
      color: colors.blue,
      features: ['Dual engagement', 'Flexible participation', 'Recorded content', 'Multi-location sync'],
      duration: 'Custom',
      ideal: 'Mixed groups'
    },
    {
      title: 'Multi-Week Series',
      description: 'Comprehensive learning journey with weekly sessions, assignments, progress tracking, and certificate of completion.',
      icon: '📚',
      color: colors.pink,
      features: ['Deep learning', 'Progressive curriculum', 'Certification', 'Community building'],
      duration: '4-12 weeks',
      ideal: 'Committed learners'
    }
  ];

  const valuePoints = [
    {
      title: 'World-Class Facilitators',
      description: 'Learn from industry leaders with an average of 15+ years experience at top tech companies, consulting firms, and Fortune 500 organizations.',
      icon: '⭐',
      metric: '15+',
      label: 'Years Avg Experience',
      color: colors.accent
    },
    {
      title: 'Proven Track Record',
      description: 'Over 500 successful workshops delivered with 98% participant satisfaction and measurable skill improvement.',
      icon: '📈',
      metric: '98%',
      label: 'Satisfaction Rate',
      color: colors.primary
    },
    {
      title: 'Cutting-Edge Content',
      description: 'Always current with the latest industry trends, tools, and best practices updated quarterly by our expert team.',
      icon: '💡',
      metric: '100%',
      label: 'Current Content',
      color: colors.blue
    },
    {
      title: 'Interactive Learning',
      description: 'Hands-on exercises, live demonstrations, group discussions, and real-world case studies for maximum engagement.',
      icon: '🎯',
      metric: '85%',
      label: 'Active Participation',
      color: colors.green
    },
    {
      title: 'Custom Solutions',
      description: 'Every workshop is tailored to your specific needs, industry, and learning objectives for maximum relevance.',
      icon: '🎨',
      metric: '100%',
      label: 'Customization',
      color: colors.pink
    },
    {
      title: 'Ongoing Support',
      description: 'Post-workshop resources, follow-up Q&A sessions, and continued access to learning materials for 60 days.',
      icon: '🤝',
      metric: '60',
      label: 'Days Support',
      color: colors.yellow
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.organizationName.trim()) newErrors.organizationName = 'Organization name is required';
    if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';
    if (!formData.phone.match(/^[\d\s\-+()]{10,}$/)) newErrors.phone = 'Valid phone number is required';
    if (!formData.workshopType) newErrors.workshopType = 'Please select workshop type';
    if (!formData.participantCount) newErrors.participantCount = 'Please specify participant count';
    if (!formData.preferredFormat) newErrors.preferredFormat = 'Please select preferred format';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    errors[name] && setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xbdlzzly', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'Workshop Request' })
      });
      if (res.ok) {
        setFormStatus('success');
        setFormData({
          organizationName: '', contactName: '', email: '', phone: '',
          workshopType: '', participantCount: '', preferredFormat: '',
          focusAreas: '', objectives: '', timeline: ''
        });
        setTimeout(() => setFormStatus(''), 5000);
      } else setFormStatus('error');
    } catch { setFormStatus('error'); }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFormat((prev) => (prev + 1) % deliveryFormats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <style>{`
        @keyframes float-wave {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-15px) translateX(10px); }
          50% { transform: translateY(-30px) translateX(0); }
          75% { transform: translateY(-15px) translateX(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes slide-in-left {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-right {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes bounce-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes text-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        .float-wave { animation: float-wave 4s ease-in-out infinite; }
        .spin-slow { animation: spin-slow 30s linear infinite; }
        .pulse-ring { animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .bounce-in { animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
        .text-gradient {
          background: linear-gradient(90deg, #FF8C42, #00B8A9, #4A90E2, #FF8C42);
          background-size: 200% 200%;
          animation: text-gradient 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .morph-shape { animation: morph 8s ease-in-out infinite; }
        .hover-lift { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-12px) scale(1.02); }
      `}</style>

      {/* Hero Section - Completely Redesigned */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A1F1F 0%, #1A4D4D 50%, #2A6D6D 100%)' }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                background: `radial-gradient(circle, ${[colors.accent, colors.primary, colors.blue][i % 3]} 0%, transparent 70%)`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float-wave ${Math.random() * 6 + 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Spinning Gradient Orb */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-30 spin-slow"
          style={{ background: `conic-gradient(from 0deg, ${colors.accent}, ${colors.primary}, ${colors.blue}, ${colors.accent})` }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-12">
            {/* Animated Badge */}
            <div className="mt-20 inline-flex items-center gap-3 px-8 py-4 rounded-full backdrop-blur-md border-2 bounce-in"
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                borderColor: colors.accent,
                animationDelay: '0.2s'
              }}>
              <span className="text-3xl">⚡</span>
              <span className="text-white font-bold text-lg">Expert-Led Learning Experiences</span>
            </div>

            {/* Main Headline with Animated Gradient */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-tight slide-in-left">
              <div className="text-white mb-4">Transform</div>
              <div className="text-gradient">Your Team</div>
            </h1>

            {/* Subheadline */}
            <p className="text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto leading-relaxed slide-in-right font-light">
              World-class workshops and masterclasses that drive <span className="font-bold text-gradient">measurable results</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 bounce-in" style={{ animationDelay: '0.6s' }}>
              <a href="#request" 
                className="group relative px-10 py-6 rounded-full font-bold text-xl text-gray-900 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-110"
                style={{ background: colors.accent }}>
                <span className="relative z-10 flex items-center gap-3">
                  Book a Workshop
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="pulse-ring absolute inset-0 rounded-full" style={{ background: colors.accent }}></div>
              </a>
              
              <a href="#formats"
                className="px-10 py-6 rounded-full font-bold text-xl text-white border-2 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:scale-110"
                style={{ borderColor: colors.primary }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
                Explore Options
              </a>
            </div>

            {/* Floating Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto">
              {[
                { value: 500, label: 'Workshops', icon: '🎯', color: colors.accent, delay: '0.8s' },
                { value: 10000, label: 'Participants', icon: '👥', color: colors.primary, delay: '1s' },
                { value: 98, label: 'Satisfaction', icon: '⭐', color: colors.blue, delay: '1.2s' },
                { value: 50, label: 'Expert Trainers', icon: '🎓', color: colors.green, delay: '1.4s' }
              ].map((stat, i) => (
                <div key={i} 
                  className="backdrop-blur-md rounded-2xl p-6 border border-white/20 hover-lift bounce-in"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.1)',
                    animationDelay: stat.delay
                  }}>
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-4xl font-black mb-1" style={{ color: stat.color }}>
                    <AnimatedCounter end={stat.value} suffix={i === 2 ? '%' : '+'} />
                  </div>
                  <div className="text-white/80 text-sm font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
          <span className="text-white/60 text-sm font-semibold">Scroll to Explore</span>
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Use Cases - Morphing Cards */}
      <AnimatedSection delay={100}>
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, ${colors.accent} 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-7xl font-black mb-6">
                <span className="text-gray-900">Perfect For</span>
                <br />
                <span className="text-gradient">Every Organization</span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                Customized learning experiences for diverse teams and industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, idx) => (
                <div key={idx}
                  className="group relative p-10 rounded-3xl transition-all duration-700 hover-lift cursor-pointer overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${useCase.color}08 0%, white 100%)`,
                    border: `3px solid ${useCase.color}30`
                  }}>
                  {/* Morphing Background Shape */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 opacity-10 morph-shape transition-opacity duration-700 group-hover:opacity-20"
                    style={{ background: useCase.color }}></div>

                  <div className="relative z-10">
                    {/* Icon with Pulse */}
                    <div className="relative inline-block mb-6">
                      <div className="text-7xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                        {useCase.icon}
                      </div>
                      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 pulse-ring"
                        style={{ background: useCase.color }}></div>
                    </div>

                    <h3 className="text-3xl font-black mb-4 transition-colors duration-500"
                      style={{ color: useCase.color }}>
                      {useCase.title}
                    </h3>

                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {useCase.description}
                    </p>

                    {/* Stats Row */}
                    <div className="flex items-center gap-8 pt-6 border-t-2"
                      style={{ borderColor: `${useCase.color}20` }}>
                      <div>
                        <div className="text-3xl font-black" style={{ color: useCase.color }}>
                          {useCase.stats.workshops}
                        </div>
                        <div className="text-sm text-gray-600 font-semibold">Workshops</div>
                      </div>
                      <div className="w-px h-12" style={{ background: `${useCase.color}30` }}></div>
                      <div>
                        <div className="text-3xl font-black" style={{ color: useCase.color }}>
                          {useCase.stats.students || useCase.stats.teams || useCase.stats.graduates || useCase.stats.members}
                        </div>
                        <div className="text-sm text-gray-600 font-semibold">
                          {Object.keys(useCase.stats)[1].charAt(0).toUpperCase() + Object.keys(useCase.stats)[1].slice(1)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Delivery Formats - Interactive Carousel */}
      <AnimatedSection delay={100}>
        <section id="formats" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.dark}DD 100%)` }}>
          {/* Animated Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(${colors.accent} 2px, transparent 2px), linear-gradient(90deg, ${colors.accent} 2px, transparent 2px)`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
                Choose Your <span style={{ color: colors.accent }}>Format</span>
              </h2>
              <p className="text-2xl text-white/80 max-w-3xl mx-auto">
                Flexible delivery options designed for maximum impact and engagement
              </p>
            </div>

            {/* Format Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {deliveryFormats.map((format, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFormat(idx)}
                  className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 ${
                    activeFormat === idx 
                      ? 'scale-110 shadow-2xl' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{
                    background: activeFormat === idx ? format.color : 'rgba(255, 255, 255, 0.1)',
                    color: activeFormat === idx ? 'white' : 'rgba(255, 255, 255, 0.8)',
                    border: `2px solid ${activeFormat === idx ? format.color : 'transparent'}`
                  }}>
                  <span className="mr-2">{format.icon}</span>
                  {format.title}
                </button>
              ))}
            </div>

            {/* Active Format Display */}
            <div className="relative">
              {deliveryFormats.map((format, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-700 ${
                    activeFormat === idx 
                      ? 'opacity-100 relative' 
                      : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Visual */}
                    <div className="relative h-96 flex items-center justify-center">
                      <div className="relative w-80 h-80 rounded-3xl morph-shape flex items-center justify-center shadow-2xl"
                        style={{ background: `linear-gradient(135deg, ${format.color} 0%, ${format.color}CC 100%)` }}>
                        <div className="text-9xl">{format.icon}</div>
                      </div>
                      {/* Orbiting Dots */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="spin-slow w-96 h-96">
                          {[0, 90, 180, 270].map((deg) => (
                            <div
                              key={deg}
                              className="absolute w-4 h-4 rounded-full"
                              style={{
                                background: format.color,
                                top: '50%',
                                left: '50%',
                                transform: `rotate(${deg}deg) translateY(-200px)`
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right - Details */}
                    <div className="text-white space-y-8">
                      <h3 className="text-5xl font-black" style={{ color: format.color }}>
                        {format.title}
                      </h3>
                      <p className="text-2xl text-white/90 leading-relaxed">
                        {format.description}
                      </p>

                      {/* Features Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {format.features.map((feature, i) => (
                          <div key={i} 
                            className="flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm"
                            style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                            <div className="w-2 h-2 rounded-full" style={{ background: format.color }}></div>
                            <span className="text-white/90 font-semibold">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-8 pt-6">
                        <div className="p-4 rounded-xl backdrop-blur-sm" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                          <div className="text-sm text-white/60 mb-1">Duration</div>
                          <div className="text-xl font-bold" style={{ color: format.color }}>{format.duration}</div>
                        </div>
                        <div className="p-4 rounded-xl backdrop-blur-sm" style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                          <div className="text-sm text-white/60 mb-1">Ideal For</div>
                          <div className="text-xl font-bold" style={{ color: format.color }}>{format.ideal}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Value Points - 3D Cards */}
      <AnimatedSection delay={100}>
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative"
          style={{ background: 'linear-gradient(135deg, #FAFBFC 0%, #FFFFFF 50%, #F5F8FA 100%)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-7xl font-black mb-6">
                <span className="text-gray-900">Why We're</span>
                <br />
                <span className="text-gradient">Different</span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                Six pillars of excellence that set our workshops apart
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valuePoints.map((point, idx) => (
                <div key={idx}
                  className="group relative rounded-3xl overflow-hidden hover-lift cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${point.color}15 0%, ${point.color}05 100%)`,
                    border: `3px solid ${point.color}30`,
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}>
                  {/* 3D Tilt Effect Container */}
                  <div className="p-8 relative z-10">
                    {/* Icon & Metric Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-6xl transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500">
                        {point.icon}
                      </div>
                      <div className="text-right p-4 rounded-2xl"
                        style={{ background: `${point.color}20` }}>
                        <div className="text-4xl font-black" style={{ color: point.color }}>
                          {point.metric}
                        </div>
                        <div className="text-xs font-bold text-gray-600 mt-1">{point.label}</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-black mb-4" style={{ color: point.color }}>
                      {point.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {point.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-8 h-2 rounded-full transform group-hover:scale-x-110 transition-transform duration-500"
                      style={{ background: `linear-gradient(90deg, ${point.color} 0%, transparent 100%)` }}></div>
                  </div>

                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, transparent 0%, ${point.color}20 50%, transparent 100%)`,
                      transform: 'translateX(-100%)',
                      animation: 'shimmer 2s infinite'
                    }}></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Request Form - Split Design */}
      <AnimatedSection delay={100}>
        <section id="request" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.blue} 100%)` }}>
          {/* Floating Circles */}
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-10 float-wave"
              style={{
                width: `${Math.random() * 200 + 100}px`,
                height: `${Math.random() * 200 + 100}px`,
                background: 'white',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Left - Motivation */}
              <div className="lg:col-span-2 text-white space-y-8">
                <h2 className="text-6xl md:text-7xl font-black leading-tight">
                  Let's Create
                  <br />
                  <span style={{ color: colors.accent }}>Magic</span>
                  <br />
                  Together
                </h2>
                <p className="text-2xl text-white/90 leading-relaxed">
                  Tell us about your goals and we'll design a workshop experience that exceeds expectations.
                </p>

                {/* Trust Indicators */}
                <div className="space-y-4 pt-8">
                  {[
                    { icon: '⚡', text: '24-hour response time' },
                    { icon: '🎯', text: 'Custom-tailored content' },
                    { icon: '✓', text: 'Satisfaction guaranteed' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="text-3xl">{item.icon}</div>
                      <span className="text-xl font-semibold">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} 
                  className="backdrop-blur-xl rounded-3xl p-10 shadow-2xl"
                  style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
                  <div className="space-y-6">
                    {/* Row 1 */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Organization *</label>
                        <input
                          type="text"
                          name="organizationName"
                          value={formData.organizationName}
                          onChange={handleChange}
                          placeholder="Your Organization"
                          className={`w-full px-5 py-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
                            errors.organizationName 
                              ? 'border-red-500 focus:ring-red-200' 
                              : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                          }`}
                        />
                        {errors.organizationName && (
                          <p className="text-red-600 text-sm mt-2">⚠️ {errors.organizationName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Your Name *</label>
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          placeholder="Full Name"
                          className={`w-full px-5 py-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
                            errors.contactName 
                              ? 'border-red-500 focus:ring-red-200' 
                              : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                          }`}
                        />
                        {errors.contactName && (
                          <p className="text-red-600 text-sm mt-2">⚠️ {errors.contactName}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className={`w-full px-5 py-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
                            errors.email 
                              ? 'border-red-500 focus:ring-red-200' 
                              : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-600 text-sm mt-2">⚠️ {errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          className={`w-full px-5 py-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
                            errors.phone 
                              ? 'border-red-500 focus:ring-red-200' 
                              : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-600 text-sm mt-2">⚠️ {errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Workshop Type *</label>
                        <select
                          name="workshopType"
                          value={formData.workshopType}
                          onChange={handleChange}
                          className={`w-full px-5 py-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
                            errors.workshopType 
                              ? 'border-red-500 focus:ring-red-200' 
                              : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                          }`}>
                          <option value="">Select type</option>
                          <option value="Career Development">Career Development</option>
                          <option value="Technical Skills">Technical Skills</option>
                          <option value="Leadership">Leadership</option>
                          <option value="Communication">Communication</option>
                          <option value="Custom">Custom</option>
                        </select>
                        {errors.workshopType && (
                          <p className="text-red-600 text-sm mt-2">⚠️ {errors.workshopType}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Participants *</label>
                        <select
                          name="participantCount"
                          value={formData.participantCount}
                          onChange={handleChange}
                          className={`w-full px-5 py-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
                            errors.participantCount 
                              ? 'border-red-500 focus:ring-red-200' 
                              : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                          }`}>
                          <option value="">Select count</option>
                          <option value="1-20">1-20</option>
                          <option value="20-50">20-50</option>
                          <option value="50-100">50-100</option>
                          <option value="100+">100+</option>
                        </select>
                        {errors.participantCount && (
                          <p className="text-red-600 text-sm mt-2">⚠️ {errors.participantCount}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-900 mb-2">Format *</label>
                        <select
                          name="preferredFormat"
                          value={formData.preferredFormat}
                          onChange={handleChange}
                          className={`w-full px-5 py-4 rounded-xl border-2 transition-all focus:outline-none focus:ring-4 ${
                            errors.preferredFormat 
                              ? 'border-red-500 focus:ring-red-200' 
                              : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                          }`}>
                          <option value="">Select format</option>
                          <option value="In-Person">In-Person</option>
                          <option value="Virtual">Virtual</option>
                          <option value="Hybrid">Hybrid</option>
                          <option value="Multi-Week">Multi-Week</option>
                        </select>
                        {errors.preferredFormat && (
                          <p className="text-red-600 text-sm mt-2">⚠️ {errors.preferredFormat}</p>
                        )}
                      </div>
                    </div>

                    {/* Row 4 */}
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-2">What are your goals?</label>
                      <textarea
                        name="objectives"
                        value={formData.objectives}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Tell us what you'd like to achieve with this workshop..."
                        className="w-full px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-200 resize-none"
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="w-full py-5 rounded-xl font-bold text-xl text-white transition-all duration-500 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      style={{ background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.pink} 100%)` }}>
                      {formStatus === 'sending' ? (
                        <span className="flex items-center justify-center gap-3">
                          <span className="animate-spin">⏳</span> Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-3">
                          <span>🚀</span> Request Workshop
                        </span>
                      )}
                    </button>

                    {/* Status */}
                    {formStatus === 'success' && (
                      <div className="p-4 rounded-xl text-center font-bold flex items-center justify-center gap-3"
                        style={{ background: `${colors.green}20`, color: colors.green }}>
                        <span>✓</span> Request sent! We'll contact you within 24 hours.
                      </div>
                    )}

                    {formStatus === 'error' && (
                      <div className="p-4 rounded-xl text-center font-bold flex items-center justify-center gap-3 bg-red-100 text-red-800">
                        <span>⚠️</span> Error sending request. Please try again.
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Final CTA - Bold & Simple */}
      <AnimatedSection delay={100}>
        <section className="py-32 px-4 text-center"
          style={{ background: `linear-gradient(135deg, ${colors.dark} 0%, black 100%)` }}>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-6xl md:text-7xl font-black text-white leading-tight">
              Ready to <span style={{ color: colors.accent }}>Level Up</span>
              <br />
              Your Team?
            </h2>
            <p className="text-2xl text-white/80">
              Join 500+ organizations that have transformed their teams with our workshops
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <a href="#request"
                className="px-12 py-6 rounded-full font-bold text-2xl text-gray-900 transition-all duration-500 hover:scale-110 hover:shadow-2xl"
                style={{ background: colors.accent }}>
                Book Now
              </a>
              <a href="mailto:workshops@company.com"
                className="px-12 py-6 rounded-full font-bold text-2xl text-white border-2 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:bg-white"
                style={{ borderColor: colors.primary }}
                onMouseEnter={(e) => e.currentTarget.style.color = colors.primary}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}>
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
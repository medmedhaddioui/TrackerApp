import { useState, useRef, useEffect } from 'react';

// Animated Counter Component
const AnimatedCounter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
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
  }, [end, hasAnimated, duration]);

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

export default function BootcampsPage() {
  const colors = { 
    primary: '#00B8A9', 
    accent: '#FF8C42', 
    dark: '#1A4D4D', 
    blue: '#4A90E2', 
    green: '#50C878', 
    pink: '#FF6B9D', 
    yellow: '#FFB800' 
  };

  const [selectedTrack, setSelectedTrack] = useState('tech');
  const [activeMonth, setActiveMonth] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: '',
    track: '',
    experience: '',
    motivation: '',
    availability: '',
    portfolio: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [errors, setErrors] = useState({});

  const timeline = [
    {
      month: 'Month 1-2',
      title: 'Foundation & Core Skills',
      description: 'Master the fundamentals and build a strong technical foundation',
      activities: ['Core curriculum', 'Tool proficiency', 'Team formation', 'Project kickoff'],
      icon: '🎯',
      color: colors.accent
    },
    {
      month: 'Month 3-4',
      title: 'Advanced Concepts & Projects',
      description: 'Deep dive into advanced topics and real-world applications',
      activities: ['Advanced modules', 'Live projects', 'Industry mentorship', 'Skill assessments'],
      icon: '🚀',
      color: colors.primary
    },
    {
      month: 'Month 5-6',
      title: 'Capstone & Career Prep',
      description: 'Build your portfolio and prepare for the job market',
      activities: ['Capstone project', 'Interview prep', 'Resume building', 'Job placement'],
      icon: '🏆',
      color: colors.blue
    }
  ];

  const tracks = {
    tech: [
      {
        title: 'Full-Stack Development',
        description: 'Master modern web development from frontend to backend',
        icon: '💻',
        color: colors.blue,
        skills: ['React/Next.js', 'Node.js', 'Databases', 'DevOps', 'Cloud Services'],
        duration: '6 months',
        projects: 5
      },
      {
        title: 'Data Science & AI',
        description: 'Learn machine learning, data analysis, and AI applications',
        icon: '🤖',
        color: colors.primary,
        skills: ['Python', 'ML/DL', 'Data Visualization', 'Statistics', 'AI Tools'],
        duration: '6 months',
        projects: 4
      },
      {
        title: 'Cloud & DevOps',
        description: 'Build expertise in cloud infrastructure and automation',
        icon: '☁️',
        color: colors.green,
        skills: ['AWS/Azure', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
        duration: '6 months',
        projects: 4
      },
      {
        title: 'Cybersecurity',
        description: 'Protect systems and networks from security threats',
        icon: '🔒',
        color: colors.pink,
        skills: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Risk Management', 'Compliance'],
        duration: '6 months',
        projects: 4
      }
    ],
    business: [
      {
        title: 'Product Management',
        description: 'Lead product strategy and drive business outcomes',
        icon: '📊',
        color: colors.accent,
        skills: ['Product Strategy', 'User Research', 'Analytics', 'Roadmapping', 'Stakeholder Mgmt'],
        duration: '6 months',
        projects: 3
      },
      {
        title: 'Digital Marketing',
        description: 'Master digital channels and growth strategies',
        icon: '📱',
        color: colors.yellow,
        skills: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics', 'Email Marketing'],
        duration: '6 months',
        projects: 4
      },
      {
        title: 'Business Analytics',
        description: 'Transform data into strategic business insights',
        icon: '📈',
        color: colors.blue,
        skills: ['Excel/SQL', 'Power BI', 'Statistical Analysis', 'Forecasting', 'Business Intelligence'],
        duration: '6 months',
        projects: 4
      },
      {
        title: 'UX/UI Design',
        description: 'Create user-centered designs that drive engagement',
        icon: '🎨',
        color: colors.pink,
        skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Usability Testing'],
        duration: '6 months',
        projects: 5
      }
    ]
  };

  const outcomes = [
    {
      title: 'Job Placement',
      stat: '87%',
      description: 'of graduates hired within 3 months',
      icon: '💼',
      color: colors.accent
    },
    {
      title: 'Salary Increase',
      stat: '65%',
      description: 'average salary boost for career switchers',
      icon: '💰',
      color: colors.primary
    },
    {
      title: 'Portfolio Projects',
      stat: '4-5',
      description: 'real-world projects completed',
      icon: '🎯',
      color: colors.blue
    },
    {
      title: 'Industry Mentors',
      stat: '50+',
      description: 'experts guiding your journey',
      icon: '👥',
      color: colors.green
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';
    if (!formData.phone.match(/^[\d\s\-+()]{10,}$/)) newErrors.phone = 'Valid phone number is required';
    if (!formData.education) newErrors.education = 'Education level is required';
    if (!formData.track) newErrors.track = 'Please select a track';
    if (!formData.availability) newErrors.availability = 'Please select availability';
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
        body: JSON.stringify({ ...formData, type: 'Bootcamp Application' })
      });
      if (res.ok) {
        setFormStatus('success');
        setFormData({
          fullName: '', email: '', phone: '', education: '', track: '',
          experience: '', motivation: '', availability: '', portfolio: ''
        });
        setTimeout(() => setFormStatus(''), 5000);
      } else setFormStatus('error');
    } catch { setFormStatus('error'); }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMonth((prev) => (prev + 1) % timeline.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float-up-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes rotate-360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes slide-right {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-in-up {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes border-dance {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        .gradient-shift {
          background: linear-gradient(135deg, #FF8C42, #00B8A9, #4A90E2, #FF8C42);
          background-size: 300% 300%;
          animation: gradient-shift 6s ease infinite;
        }
        .float-up-down { animation: float-up-down 4s ease-in-out infinite; }
        .scale-pulse { animation: scale-pulse 3s ease-in-out infinite; }
        .rotate-360 { animation: rotate-360 20s linear infinite; }
        .slide-right { animation: slide-right 0.8s ease-out; }
        .fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .border-dance { animation: border-dance 8s ease-in-out infinite; }
      `}</style>

      {/* Hero Section - Diagonal Split Design */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Diagonal Background Split */}
        <div className="absolute inset-0" style={{ 
          background: `linear-gradient(135deg, ${colors.dark} 0%, ${colors.dark} 50%, white 50%, white 100%)` 
        }}>
          {/* Animated Dots Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle, ${colors.accent} 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Floating Shapes */}
        {[
          { w: 120, h: 120, top: 10, left: 15, delay: 0, dur: 4 },
          { w: 80, h: 80, top: 60, left: 85, delay: 0.5, dur: 5 },
          { w: 150, h: 150, top: 30, left: 70, delay: 1, dur: 6 },
          { w: 100, h: 100, top: 80, left: 20, delay: 1.5, dur: 4.5 },
          { w: 90, h: 90, top: 5, left: 50, delay: 0.3, dur: 5.5 },
          { w: 110, h: 110, top: 70, left: 60, delay: 0.8, dur: 5 },
          { w: 130, h: 130, top: 45, left: 10, delay: 1.2, dur: 6 },
          { w: 95, h: 95, top: 90, left: 80, delay: 0.6, dur: 4.8 }
        ].map((shape, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 float-up-down"
            style={{
              width: `${shape.w}px`,
              height: `${shape.h}px`,
              background: [colors.accent, colors.primary, colors.blue, colors.green][i % 4],
              top: `${shape.top}%`,
              left: `${shape.left}%`,
              animationDelay: `${shape.delay}s`,
              animationDuration: `${shape.dur}s`
            }}
          />
        ))}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md border-2 slide-right"
                style={{ background: 'rgba(255, 140, 66, 0.1)', borderColor: colors.accent }}>
                <span className="text-2xl">🚀</span>
                <span className="font-bold text-lg" style={{ color: colors.accent }}>
                  6-Month Intensive Program
                </span>
              </div>

              <h1 className="text-7xl md:text-8xl font-black leading-tight slide-right" style={{ animationDelay: '0.2s' }}>
                <span className="text-white">Launch Your</span>
                <br />
                <span className="gradient-shift" style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Tech Career
                </span>
              </h1>

              <p className="text-2xl text-white/90 leading-relaxed slide-right" style={{ animationDelay: '0.4s' }}>
                Intensive bootcamp programs designed to transform beginners into <span className="font-bold" style={{ color: colors.accent }}>job-ready professionals</span> in just 6 months.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 fade-in-up" style={{ animationDelay: '0.6s' }}>
                <a href="#apply" 
                  className="group px-10 py-5 rounded-full font-bold text-xl text-white transition-all duration-300 hover:shadow-2xl hover:scale-110 flex items-center justify-center gap-3"
                  style={{ background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.pink} 100%)` }}>
                  Apply Now
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="#tracks"
                  className="px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(255, 255, 255, 0.1)', color: 'white', border: `2px solid ${colors.primary}`, backdropFilter: 'blur(10px)' }}>
                  View Tracks
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { value: '6', label: 'Months', icon: '📅' },
                  { value: '8+', label: 'Tracks', icon: '🎯' },
                  { value: '87%', label: 'Hired', icon: '💼' }
                ].map((stat, i) => (
                  <div key={i} 
                    className="p-4 rounded-2xl backdrop-blur-md border border-white/20 fade-in-up"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)',
                      animationDelay: `${0.8 + i * 0.1}s`
                    }}>
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/70 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-[600px] hidden lg:flex items-center justify-center">
              {/* Rotating Border */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rotate-360 w-96 h-96 rounded-full border-4 border-dashed opacity-20"
                  style={{ borderColor: colors.accent }}></div>
              </div>

              {/* Central Card */}
              <div className="relative z-10 w-80 h-80 rounded-3xl flex flex-col items-center justify-center text-white shadow-2xl border-dance overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.blue} 100%)` }}>
                <div className="text-8xl mb-6 scale-pulse">🎓</div>
                <div className="text-3xl font-black mb-2">Transform</div>
                <div className="text-xl font-semibold opacity-90">In 6 Months</div>
              </div>

              {/* Floating Cards */}
              {[
                { icon: '💻', label: 'Code', pos: 'top-10 -left-10', color: colors.accent },
                { icon: '🎯', label: 'Learn', pos: 'top-10 -right-10', color: colors.primary },
                { icon: '🚀', label: 'Build', pos: 'bottom-10 -left-10', color: colors.blue },
                { icon: '⭐', label: 'Succeed', pos: 'bottom-10 -right-10', color: colors.green }
              ].map((card, i) => (
                <div key={i}
                  className={`absolute ${card.pos} w-24 h-24 rounded-2xl flex flex-col items-center justify-center text-white shadow-xl float-up-down`}
                  style={{ 
                    background: card.color,
                    animationDelay: `${i * 0.5}s`
                  }}>
                  <div className="text-4xl mb-1">{card.icon}</div>
                  <div className="text-xs font-bold">{card.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Timeline - Interactive Journey */}
      <AnimatedSection delay={100}>
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative"
          style={{ background: 'linear-gradient(180deg, white 0%, #F5F8FA 50%, white 100%)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-7xl font-black mb-6">
                <span className="text-gray-900">Your 6-Month</span>
                <br />
                <span className="gradient-shift" style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Journey</span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                A carefully structured path from beginner to professional
              </p>
            </div>

            {/* Timeline Navigation */}
            <div className="flex justify-center gap-4 mb-16">
              {timeline.map((phase, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMonth(idx)}
                  className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 ${
                    activeMonth === idx ? 'scale-110 shadow-2xl' : 'opacity-50 hover:opacity-100'
                  }`}
                  style={{
                    background: activeMonth === idx ? phase.color : 'rgba(0,0,0,0.05)',
                    color: activeMonth === idx ? 'white' : '#666'
                  }}>
                  {phase.month}
                </button>
              ))}
            </div>

            {/* Timeline Content */}
            <div className="relative min-h-[500px]">
              {timeline.map((phase, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-700 ${
                    activeMonth === idx 
                      ? 'opacity-100 relative' 
                      : 'opacity-0 absolute inset-0 pointer-events-none'
                  }`}>
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Visual Side */}
                    <div className="relative h-96 flex items-center justify-center">
                      <div className="relative w-80 h-80 rounded-3xl flex items-center justify-center shadow-2xl border-dance"
                        style={{ background: `linear-gradient(135deg, ${phase.color} 0%, ${phase.color}CC 100%)` }}>
                        <div className="text-9xl">{phase.icon}</div>
                      </div>

                      {/* Progress Ring */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-full h-full rotate-360" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke={phase.color}
                            strokeWidth="0.5"
                            strokeDasharray="4 4"
                            opacity="0.3"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-8">
                      <div>
                        <div className="text-6xl font-black mb-4" style={{ color: phase.color }}>
                          {phase.month}
                        </div>
                        <h3 className="text-4xl font-black text-gray-900 mb-4">
                          {phase.title}
                        </h3>
                        <p className="text-xl text-gray-600 leading-relaxed">
                          {phase.description}
                        </p>
                      </div>

                      {/* Activities */}
                      <div className="grid grid-cols-2 gap-4">
                        {phase.activities.map((activity, i) => (
                          <div key={i}
                            className="p-4 rounded-xl transition-all duration-300 hover:scale-105"
                            style={{ 
                              background: `${phase.color}10`,
                              border: `2px solid ${phase.color}30`
                            }}>
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 rounded-full" style={{ background: phase.color }}></div>
                              <span className="font-bold text-gray-800">{activity}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Progress Bar */}
                      <div className="pt-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-bold text-gray-600">Program Progress</span>
                          <span className="text-sm font-bold" style={{ color: phase.color }}>
                            {Math.round(((idx + 1) / timeline.length) * 100)}%
                          </span>
                        </div>
                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000"
                            style={{ 
                              width: `${((idx + 1) / timeline.length) * 100}%`,
                              background: `linear-gradient(90deg, ${phase.color} 0%, ${phase.color}AA 100%)`
                            }}
                          />
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

      {/* Tracks Section - Tab-Based */}
      <AnimatedSection delay={100}>
        <section id="tracks" className="py-32 px-4 sm:px-6 lg:px-8"
          style={{ background: `linear-gradient(135deg, ${colors.dark} 0%, #0D2D2D 100%)` }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
                Choose Your <span style={{ color: colors.accent }}>Track</span>
              </h2>
              <p className="text-2xl text-white/80 max-w-3xl mx-auto mb-12">
                Specialized programs in tech and business domains
              </p>

              {/* Track Selector */}
              <div className="inline-flex gap-4 p-2 rounded-full backdrop-blur-md"
                style={{ background: 'rgba(255, 255, 255, 0.1)' }}>
                <button
                  onClick={() => setSelectedTrack('tech')}
                  className={`px-12 py-4 rounded-full font-bold text-xl transition-all duration-500 ${
                    selectedTrack === 'tech' ? 'scale-110' : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    background: selectedTrack === 'tech' ? colors.primary : 'transparent',
                    color: 'white'
                  }}>
                  💻 Tech Tracks
                </button>
                <button
                  onClick={() => setSelectedTrack('business')}
                  className={`px-12 py-4 rounded-full font-bold text-xl transition-all duration-500 ${
                    selectedTrack === 'business' ? 'scale-110' : 'opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    background: selectedTrack === 'business' ? colors.accent : 'transparent',
                    color: 'white'
                  }}>
                  📊 Business Tracks
                </button>
              </div>
            </div>

            {/* Track Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {tracks[selectedTrack].map((track, idx) => (
                <div key={idx}
                  className="group relative p-8 rounded-3xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: `2px solid ${track.color}40`
                  }}>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${track.color}20 0%, transparent 100%)` }}></div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-7xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                        {track.icon}
                      </div>
                      <div className="text-right">
                        <div className="px-4 py-2 rounded-full text-sm font-bold text-white mb-2"
                          style={{ background: track.color }}>
                          {track.duration}
                        </div>
                        <div className="text-white/70 text-sm font-semibold">
                          {track.projects} Projects
                        </div>
                      </div>
                    </div>

                    <h3 className="text-3xl font-black text-white mb-4">
                      {track.title}
                    </h3>
                    <p className="text-lg text-white/80 leading-relaxed mb-6">
                      {track.description}
                    </p>

                    {/* Skills */}
                    <div className="space-y-3">
                      <div className="text-sm font-bold text-white/70 mb-3">Key Skills:</div>
                      <div className="flex flex-wrap gap-2">
                        {track.skills.map((skill, i) => (
                          <span key={i}
                            className="px-4 py-2 rounded-full text-sm font-semibold text-white"
                            style={{ 
                              background: `${track.color}30`,
                              border: `1px solid ${track.color}60`
                            }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <button className="mt-8 w-full py-4 rounded-full font-bold text-lg text-white transition-all duration-300 hover:shadow-xl group-hover:scale-105"
                      style={{ background: `linear-gradient(135deg, ${track.color} 0%, ${track.color}CC 100%)` }}>
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Outcomes Section */}
      <AnimatedSection delay={100}>
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-7xl font-black mb-6">
                <span className="text-gray-900">Real</span>{' '}
                <span className="gradient-shift" style={{
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Results</span>
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                Our graduates achieve incredible career transformations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {outcomes.map((outcome, idx) => (
                <div key={idx}
                  className="group relative p-8 rounded-3xl transition-all duration-500 hover:scale-110 hover:shadow-2xl overflow-hidden"
                  style={{ 
                    background: `linear-gradient(135deg, ${outcome.color}10 0%, ${outcome.color}20 100%)`,
                    border: `2px solid ${outcome.color}40`
                  }}>
                  {/* Animated Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-dance"
                    style={{ background: `linear-gradient(135deg, ${outcome.color}20 0%, transparent 100%)` }}></div>

                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                      {outcome.icon}
                    </div>
                    <div className="text-5xl font-black mb-3" style={{ color: outcome.color }}>
                      <AnimatedCounter end={parseInt(outcome.stat)} suffix={outcome.stat.replace(/[0-9]/g, '')} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {outcome.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Application Form */}
      <AnimatedSection delay={100}>
        <section id="apply" className="py-32 px-4 sm:px-6 lg:px-8"
          style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.blue} 100%)` }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-6xl md:text-7xl font-black text-white mb-6">
                Apply Now
              </h2>
              <p className="text-2xl text-white/90">
                Start your transformation journey today
              </p>
            </div>

            <form onSubmit={handleSubmit}
              className="backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl"
              style={{ background: 'rgba(255, 255, 255, 0.95)' }}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border-2 focus:outline-none transition-all ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border-2 focus:outline-none transition-all ${
                      errors.email ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border-2 focus:outline-none transition-all ${
                      errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Education */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Education Level *
                  </label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border-2 focus:outline-none transition-all ${
                      errors.education ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}>
                    <option value="">Select education level</option>
                    <option value="high-school">High School</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
                </div>

                {/* Track Selection */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Preferred Track *
                  </label>
                  <select
                    name="track"
                    value={formData.track}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border-2 focus:outline-none transition-all ${
                      errors.track ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}>
                    <option value="">Select a track</option>
                    <optgroup label="Tech Tracks">
                      <option value="fullstack">Full-Stack Development</option>
                      <option value="data-science">Data Science & AI</option>
                      <option value="cloud">Cloud & DevOps</option>
                      <option value="cybersecurity">Cybersecurity</option>
                    </optgroup>
                    <optgroup label="Business Tracks">
                      <option value="product">Product Management</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="analytics">Business Analytics</option>
                      <option value="design">UX/UI Design</option>
                    </optgroup>
                  </select>
                  {errors.track && <p className="text-red-500 text-sm mt-1">{errors.track}</p>}
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Availability *
                  </label>
                  <select
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className={`w-full px-5 py-4 rounded-xl border-2 focus:outline-none transition-all ${
                      errors.availability ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
                    }`}>
                    <option value="">Select availability</option>
                    <option value="full-time">Full-time (40+ hrs/week)</option>
                    <option value="part-time">Part-time (20-30 hrs/week)</option>
                    <option value="flexible">Flexible schedule</option>
                  </select>
                  {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability}</p>}
                </div>

                {/* Experience */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Previous Experience (Optional)
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                    placeholder="Brief description of relevant experience"
                  />
                </div>

                {/* Portfolio */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Portfolio/GitHub (Optional)
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all"
                    placeholder="https://github.com/yourname"
                  />
                </div>

                {/* Motivation */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Why do you want to join this bootcamp? (Optional)
                  </label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your goals and motivation..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full mt-8 py-5 rounded-xl font-bold text-xl text-white transition-all duration-300 hover:shadow-2xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.pink} 100%)` }}>
                {formStatus === 'sending' ? 'Submitting...' : 'Submit Application'}
              </button>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <div className="mt-6 p-4 rounded-xl bg-green-100 border-2 border-green-500">
                  <p className="text-green-700 font-bold text-center">
                    ✅ Application submitted successfully! We'll be in touch soon.
                  </p>
                </div>
              )}
              {formStatus === 'error' && (
                <div className="mt-6 p-4 rounded-xl bg-red-100 border-2 border-red-500">
                  <p className="text-red-700 font-bold text-center">
                    ❌ Something went wrong. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center"
        style={{ background: colors.dark }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join hundreds of successful graduates who've launched their dream careers
          </p>
          <a href="#apply"
            className="inline-block px-12 py-5 rounded-full font-bold text-xl text-white transition-all duration-300 hover:shadow-2xl hover:scale-110"
            style={{ background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.pink} 100%)` }}>
            Apply Today →
          </a>
        </div>
      </section>
    </div>
  );
}
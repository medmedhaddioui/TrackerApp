import { useState, useRef, useEffect } from 'react';

const AnimatedCounter = ({ end, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let current = 0;
          const increment = end / 50;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 30);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && setIsVisible(true)),
      { threshold: 0.05, rootMargin: '100px 0px 100px 0px' }
    );
    const ref = sectionRef.current;
    if (ref) observer.observe(ref);
    return () => ref && observer.unobserve(ref);
  }, []);

  return (
    <div ref={sectionRef} className={`transform transition-all duration-800 ease-out ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}>
      {children}
    </div>
  );
};

const FloatingParticle = ({ delay }) => {
  const [randomValues] = useState(() => ({
    hue: Math.floor(Math.random() * 360),
    left: Math.floor(Math.random() * 100),
    top: Math.floor(Math.random() * 100)
  }));

  return (
    <div
      className="absolute w-2 h-2 rounded-full"
      style={{
        background: `hsl(${randomValues.hue}, 70%, 60%)`,
        left: `${randomValues.left}%`,
        top: `${randomValues.top}%`,
        animation: `float-particle 6s infinite ease-in-out`,
        animationDelay: `${delay}s`,
        opacity: 0.5
      }}
    />
  );
};

export default function CareerMentorshipPage() {
  const colors = { primary: '#00B8A9', accent: '#FF8C42', dark: '#1A4D4D', blue: '#4A90E2', green: '#50C878', pink: '#FF6B9D', yellow: '#FFB800' };

  const [hoveredMentor, setHoveredMentor] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', preferredMentor: '', experience: '', sessionFrequency: '', goals: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [focusedField, setFocusedField] = useState(null);

  const content = {
    heroTitle: 'Find Your Guide to Success',
    heroSubtitle: 'Connect with industry experts for personalized career mentorship',
    statsData: [
      { number: 150, label: 'Expert Mentors', icon: '👨‍💼', color: colors.accent },
      { number: 5000, label: 'Sessions Completed', icon: '✅', color: colors.blue },
      { number: 96, label: 'Satisfaction Rate', suffix: '%', icon: '⭐', color: colors.green }
    ],
    mentors: [
      { id: 1, name: 'Sarah Chen', role: 'Tech Lead @ Google', expertise: ['Product Strategy', 'Leadership', 'Tech'], icon: '👩‍💻', color: colors.accent, bio: '10+ years in tech leadership' },
      { id: 2, name: 'Michael Rodriguez', role: 'Head of Design @ Airbnb', expertise: ['UX/UI Design', 'Innovation', 'Teams'], icon: '🎨', color: colors.blue, bio: 'Design thinking & creative strategy' },
      { id: 3, name: 'Priya Patel', role: 'Data Science Director @ Meta', expertise: ['Data Science', 'ML', 'Analytics'], icon: '📊', color: colors.green, bio: 'Data-driven decision making' },
      { id: 4, name: 'James Wilson', role: 'CEO @ StartupX', expertise: ['Entrepreneurship', 'Scaling', 'Fundraising'], icon: '🚀', color: colors.pink, bio: 'Built & scaled multiple startups' }
    ],
    sessionStructure: [
      { step: 1, title: 'Discovery Call', description: 'Initial 15-min call to understand your goals and challenges', icon: '📞', duration: '15 min' },
      { step: 2, title: 'Tailored Sessions', description: 'Customized 1-on-1 sessions focused on your growth areas', icon: '💼', duration: '60 min' },
      { step: 3, title: 'Action Plan', description: 'Receive a personalized roadmap with actionable steps', icon: '🗺️', duration: '30 min' },
      { step: 4, title: 'Ongoing Support', description: 'Email support and check-ins between sessions', icon: '🤝', duration: 'Ongoing' }
    ],
    benefits: [
      { title: 'Expert Guidance', description: 'Learn from industry leaders with decades of experience', icon: '🎯', color: colors.accent },
      { title: 'Career Acceleration', description: 'Fast-track your growth with insider knowledge and insights', icon: '🚀', color: colors.blue },
      { title: 'Personalized Approach', description: 'Custom mentoring tailored to your unique goals', icon: '🎨', color: colors.green },
      { title: 'Network Building', description: 'Expand your professional network with industry connections', icon: '🤝', color: colors.pink },
      { title: 'Confidence Boost', description: 'Build confidence in your career decisions', icon: '💪', color: colors.yellow },
      { title: 'Lifetime Access', description: 'Ongoing support even after mentorship concludes', icon: '🌟', color: colors.primary }
    ]
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';
    if (!formData.phone.match(/^[\d\s\-+()]{10,}$/)) newErrors.phone = 'Valid phone is required';
    if (!formData.preferredMentor) newErrors.preferredMentor = 'Please select a mentor';
    if (!formData.sessionFrequency) newErrors.sessionFrequency = 'Please select session frequency';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    errors[name] && setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ fullName: '', email: '', phone: '', preferredMentor: '', experience: '', sessionFrequency: '', goals: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <style>{`
        @keyframes float-slow { 
          0%, 100% { transform: translateY(0px) rotate(0deg); } 
          50% { transform: translateY(-30px) rotate(180deg); } 
        }
        @keyframes slide-down { 
          from { opacity: 0; transform: translateY(-50px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        @keyframes rotate-slow { 
          0% { transform: rotate(0deg); } 
          100% { transform: rotate(360deg); } 
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 140, 66, 0.4); }
          50% { box-shadow: 0 0 40px rgba(255, 140, 66, 0.8); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes bounce-in {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes float-particle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(50px); opacity: 0; }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes wave {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes scale-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes rainbow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 5px rgba(255, 140, 66, 0.5)); }
          50% { filter: drop-shadow(0 0 20px rgba(255, 140, 66, 1)); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes swing {
          0%, 100% { transform: rotate(0deg); transform-origin: top center; }
          25% { transform: rotate(15deg); }
          75% { transform: rotate(-15deg); }
        }
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        @keyframes float-diagonal {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        @keyframes color-shift {
          0% { color: #FF8C42; }
          33% { color: #00B8A9; }
          66% { color: #4A90E2; }
          100% { color: #FF8C42; }
        }
        @keyframes border-dance {
          0% { border-color: #FF8C42; }
          33% { border-color: #00B8A9; }
          66% { border-color: #4A90E2; }
          100% { border-color: #FF8C42; }
        }
        .float-element { animation: float-slow 4s ease-in-out infinite; }
        .slide-down-text { animation: slide-down 0.8s ease-out; }
        .rotate-element { animation: rotate-slow 20s linear infinite; }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .shimmer-effect { 
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        .blob-animation { animation: blob 8s infinite; }
        .gradient-animation { 
          background-size: 200% 200%;
          animation: gradient-shift 6s ease infinite;
        }
        .wave-animation { animation: wave 2s ease-in-out infinite; }
        .scale-pulse { animation: scale-pulse 2s ease-in-out infinite; }
        .wiggle { animation: wiggle 1s ease-in-out infinite; }
        .rainbow { animation: rainbow 10s linear infinite; }
        .bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
        .swing { animation: swing 3s ease-in-out infinite; }
        .spin-slow { animation: spin-slow 30s linear infinite; }
        .morph { animation: morph 8s ease-in-out infinite; }
        .float-diagonal { animation: float-diagonal 4s ease-in-out infinite; }
        .color-shift { animation: color-shift 4s ease-in-out infinite; }
        .border-dance { animation: border-dance 4s ease-in-out infinite; }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0f9f9 50%, #fff5f0 100%)' }}>
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-20 blur-3xl blob-animation" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)' }}></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl blob-animation" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', animationDelay: '2s' }}></div>

        {[...Array(8)].map((_, i) => (
          <FloatingParticle key={i} delay={i * 0.5} />
        ))}

        {/* Additional decorative elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full opacity-30 bounce-gentle" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-1/3 right-20 w-16 h-16 opacity-20 spin-slow" style={{ background: 'linear-gradient(135deg, #00B8A9 0%, #4A90E2 100%)', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
        <div className="absolute top-1/2 right-1/4 text-6xl opacity-10 swing">✨</div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block px-6 py-3 rounded-full text-sm font-bold slide-down-text transform hover:scale-110 transition-transform cursor-pointer glow-pulse" style={{ background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.2) 0%, rgba(0, 184, 169, 0.2) 100%)', color: '#FF8C42', border: '2px solid #FF8C42', boxShadow: '0 0 20px rgba(255, 140, 66, 0.2)' }}>
                🌟 Expert Mentorship Awaits
              </div>

              <h1 className="text-6xl lg:text-7xl font-black leading-tight slide-down-text" style={{ animationDelay: '0.2s' }}>
                <span className="block text-gray-900">{content.heroTitle}</span>
                <span className="block gradient-animation" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 50%, #FF8C42 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundSize: '200% 200%' }}>
                  {content.heroSubtitle}
                </span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed max-w-lg slide-down-text" style={{ animationDelay: '0.4s' }}>
                Get personalized guidance from industry leaders to accelerate your career and achieve your goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 slide-down-text" style={{ animationDelay: '0.6s' }}>
                <a href="#booking" className="group px-8 py-5 rounded-3xl font-bold text-lg text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex items-center justify-center gap-3 cursor-pointer relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)', boxShadow: '0 10px 30px rgba(255, 140, 66, 0.3)' }}>
                  <span className="shimmer-effect absolute inset-0"></span>
                  <span className="relative">Book a Session</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
                <a href="#mentors" className="px-8 py-5 rounded-3xl font-bold text-lg transition-all duration-300 hover:shadow-lg cursor-pointer transform hover:scale-105" style={{ background: 'rgba(0, 184, 169, 0.1)', color: '#00B8A9', border: '2px solid #00B8A9' }}>
                  Meet Our Mentors
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 slide-down-text" style={{ animationDelay: '0.8s' }}>
                {content.statsData.map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl transition-all hover:shadow-lg transform hover:scale-110 cursor-pointer relative group border-dance" style={{ background: `rgba(${stat.color === colors.accent ? '255, 140, 66' : stat.color === colors.blue ? '74, 144, 226' : '80, 200, 120'}, 0.1)`, border: '3px solid' }}>
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 morph" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)' }}></div>
                    <div className="text-4xl mb-2 bounce-gentle">{stat.icon}</div>
                    <div className="text-3xl font-black mb-2 relative z-10 color-shift">
                      <AnimatedCounter end={stat.number} suffix={stat.suffix || ''} />
                    </div>
                    <div className="text-xs font-bold text-gray-600 relative z-10">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-full hidden lg:flex items-center justify-center">
              <div className="relative w-full h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="float-element w-48 h-48 rounded-3xl flex items-center justify-center text-7xl shadow-2xl pulse-glow morph" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)' }}>
                    🎓
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rotate-element w-80 h-80">
                    {[
                      { pos: 'top-0 left-1/2 -translate-x-1/2', icon: '💡', color: colors.primary, delay: '0s' },
                      { pos: 'bottom-0 left-1/2 -translate-x-1/2', icon: '📈', color: colors.blue, delay: '0.5s' },
                      { pos: 'top-1/2 right-0 -translate-y-1/2', icon: '🎯', color: colors.green, delay: '1s' },
                      { pos: 'top-1/2 left-0 -translate-y-1/2', icon: '🌟', color: colors.accent, delay: '1.5s' }
                    ].map((item, i) => (
                      <div key={i} className={`absolute ${item.pos} w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg transform hover:scale-125 transition-transform cursor-pointer wiggle`} style={{ background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}99 100%)`, animation: `bounce-in 0.6s ease-out ${item.delay}, wiggle 2s ease-in-out infinite ${item.delay}` }}>
                        {item.icon}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Orbiting stars */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div key={i} className="absolute text-2xl opacity-40" style={{ animation: `rotate-slow ${20 + i * 2}s linear infinite reverse`, width: `${120 + i * 30}px`, height: `${120 + i * 30}px` }}>
                      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}>⭐</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex items-center justify-center gap-6 py-6 rounded-3xl flex-wrap gradient-animation relative overflow-hidden" style={{ background: 'linear-gradient(90deg, #FF8C42 0%, #00B8A9 50%, #FF8C42 100%)', backgroundSize: '200% 200%' }}>
          <div className="absolute inset-0 shimmer-effect opacity-30"></div>
          <span className="text-white font-bold text-lg relative z-10 wave-animation" style={{ animationDelay: '0s' }}>✓ Certified Mentors</span>
          <span className="text-white/50 relative z-10">•</span>
          <span className="text-white font-bold text-lg relative z-10 wave-animation" style={{ animationDelay: '0.2s' }}>✓ Personalized Plans</span>
          <span className="text-white/50 relative z-10">•</span>
          <span className="text-white font-bold text-lg relative z-10 wave-animation" style={{ animationDelay: '0.4s' }}>✓ Proven Results</span>
        </div>
      </section>

      {/* Mentor Profiles */}
      <AnimatedSection delay={100}>
        <section id="mentors" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full opacity-5 blob-animation morph" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', animationDelay: '3s' }}></div>
          <div className="absolute top-10 right-10 text-9xl opacity-5 spin-slow">🎯</div>
          <div className="absolute bottom-40 right-40 text-7xl opacity-10 bounce-gentle">💼</div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full glow-pulse" style={{ background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.2) 0%, rgba(74, 144, 226, 0.2) 100%)', border: '2px solid #00B8A9' }}>
                  <span className="text-2xl bounce-gentle">👥</span>
                  <span className="font-bold color-shift">Industry Experts</span>
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
                Meet Your <span className="color-shift">Mentors</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Learn from industry leaders with diverse expertise and proven track records
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.mentors.map((mentor, i) => (
                <div
                  key={mentor.id}
                  className="group relative p-8 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden cursor-pointer hover:rotate-1"
                  style={{
                    background: `linear-gradient(135deg, ${mentor.color}15 0%, ${mentor.color}05 100%)`,
                    border: `2px solid ${mentor.color}30`,
                    animation: `slide-in-${i % 2 === 0 ? 'left' : 'right'} 0.8s ease-out ${i * 0.1}s both`
                  }}
                  onMouseEnter={() => setHoveredMentor(i)}
                  onMouseLeave={() => setHoveredMentor(null)}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 morph" style={{ background: mentor.color }}></div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full opacity-0 group-hover:opacity-100 transition-opacity spin-slow" style={{ background: `linear-gradient(135deg, ${mentor.color} 0%, ${mentor.color}cc 100%)`, boxShadow: `0 0 20px ${mentor.color}` }}></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 glow-pulse">{mentor.icon}</div>
                    <h3 className="text-xl font-bold mb-1 text-gray-900">{mentor.name}</h3>
                    <p className="text-sm font-semibold mb-3 color-shift">{mentor.role}</p>
                    
                    <p className={`text-sm text-gray-600 mb-4 transition-all duration-300 ${hoveredMentor === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                      {mentor.bio}
                    </p>
                    
                    <div className={`flex flex-wrap gap-2 mb-4 transition-all duration-300 ${hoveredMentor === i ? 'opacity-100' : 'opacity-0'}`}>
                      {mentor.expertise.map((skill, j) => (
                        <span key={j} className="px-2 py-1 rounded-full text-xs font-bold text-white" style={{ background: `linear-gradient(135deg, ${mentor.color} 0%, ${mentor.color}cc 100%)` }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <button className="w-full py-2 rounded-xl font-bold text-sm text-white transition-all transform hover:scale-110 shimmer-effect relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${mentor.color} 0%, ${mentor.color}cc 100%)` }}>
                      <span className="relative z-10">View Profile</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Session Structure */}
      <AnimatedSection delay={100}>
        <section className="relative py-32 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #F8FAFB 0%, #FFFFFF 50%, #F0F9F9 100%)' }}>
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full opacity-5 blob-animation morph" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-10 left-10 text-8xl opacity-5 float-diagonal">🗺️</div>
          <div className="absolute top-1/2 right-10 text-6xl opacity-10 swing">🎯</div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
                Session <span style={{ color: '#FF8C42' }}>Structure</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                A comprehensive mentorship journey designed for your success
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-32 left-0 right-0 h-1 gradient-animation overflow-hidden" style={{ background: 'linear-gradient(90deg, transparent, #FF8C42 0%, #00B8A9 50%, #FF8C42, transparent)', backgroundSize: '200% 200%' }}>
                <div className="absolute top-0 left-0 w-8 h-8 -mt-3 rounded-full animate-pulse" style={{ background: '#FF8C42', boxShadow: '0 0 20px #FF8C42', animation: 'slide-in-right 3s ease-in-out infinite' }}></div>
              </div>

              {content.sessionStructure.map((session, i) => (
                <div key={i} className="relative p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:scale-105 group cursor-pointer hover:-rotate-1" style={{ background: `linear-gradient(135deg, rgba(${i % 2 === 0 ? '255, 140, 66' : '0, 184, 169'}, 0.1) 0%, rgba(${i % 2 === 0 ? '255, 140, 66' : '0, 184, 169'}, 0.05) 100%)`, borderLeft: `4px solid ${i % 2 === 0 ? colors.accent : colors.primary}`, animation: `bounce-in 0.6s ease-out ${i * 0.15}s both` }}>
                  <div className="absolute -top-6 left-8 w-12 h-12 rounded-full flex items-center justify-center font-bold text-white group-hover:scale-125 transition-transform scale-pulse" style={{ background: `linear-gradient(135deg, ${i % 2 === 0 ? colors.accent : colors.primary} 0%, ${i % 2 === 0 ? colors.accent : colors.primary}99 100%)`, boxShadow: `0 0 15px ${i % 2 === 0 ? colors.accent : colors.primary}` }}>
                    {i + 1}
                  </div>
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 bounce-gentle">{session.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{session.title}</h3>
                  <p className="text-gray-700 mb-3">{session.description}</p>
                  <p className="text-sm font-bold color-shift">⏱️ {session.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection delay={100}>
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10 morph" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full opacity-5 morph" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 left-1/4 text-9xl opacity-5 spin-slow">🚀</div>
          <div className="absolute bottom-1/4 right-1/3 text-7xl opacity-5 float-diagonal">💪</div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ color: '#1A4D4D' }}>
                Why <span style={{ color: '#FF8C42' }}>Mentorship</span> Works
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Transform your career with guidance from proven industry leaders
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="group relative p-8 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden hover:rotate-1 cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, ${benefit.color}15 0%, ${benefit.color}05 100%)`,
                    border: `2px solid ${benefit.color}30`,
                    animation: `bounce-in 0.6s ease-out ${idx * 0.1}s both`
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 morph" style={{ background: benefit.color }}></div>
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-20 transition-opacity spin-slow" style={{ background: `radial-gradient(circle, ${benefit.color} 0%, transparent 70%)` }}></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 glow-pulse">{benefit.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 color-shift">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {benefit.description}
                    </p>

                    <div className="pt-4 border-t-2" style={{ borderColor: `${benefit.color}30` }}>
                      <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
                        <div className="w-2 h-2 rounded-full scale-pulse" style={{ background: benefit.color }}></div>
                        <span className="text-sm font-bold color-shift">Learn More</span>
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: benefit.color }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Booking Form */}
      <AnimatedSection delay={100}>
        <section id="booking" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #F0F9F9 0%, #FFFFFF 50%, #FFF5F0 100%)' }}>
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full opacity-10 blob-animation morph" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-20 text-9xl opacity-5 spin-slow">📝</div>
          <div className="absolute top-1/2 left-20 text-6xl opacity-10 bounce-gentle">✉️</div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center gap-3 px-6 py-3 rounded-full glow-pulse" style={{ background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.2) 0%, rgba(0, 184, 169, 0.2) 100%)', border: '2px solid #FF8C42' }}>
                  <span className="text-2xl bounce-gentle">🎯</span>
                  <span className="font-bold color-shift">Start Your Journey</span>
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
                Book Your <span className="color-shift">Session</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Take the first step towards career transformation
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden transform hover:scale-[1.01] transition-transform" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, rgba(0, 184, 169, 0.05) 100%)', border: '2px solid rgba(0, 184, 169, 0.2)' }}>
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 blob-animation morph" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)', animationDelay: '2s' }}></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 opacity-10 spin-slow" style={{ background: 'linear-gradient(135deg, #00B8A9 0%, #4A90E2 100%)', clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>

              <div className="relative z-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      onFocus={() => setFocusedField('fullName')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                      style={{
                        borderColor: errors.fullName ? '#FF6B9D' : focusedField === 'fullName' ? '#00B8A9' : '#E5E7EB',
                        boxShadow: focusedField === 'fullName' ? '0 0 0 3px rgba(0, 184, 169, 0.1)' : 'none'
                      }}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-sm font-semibold" style={{ color: '#FF6B9D' }}>{errors.fullName}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                      style={{
                        borderColor: errors.email ? '#FF6B9D' : focusedField === 'email' ? '#00B8A9' : '#E5E7EB',
                        boxShadow: focusedField === 'email' ? '0 0 0 3px rgba(0, 184, 169, 0.1)' : 'none'
                      }}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-sm font-semibold" style={{ color: '#FF6B9D' }}>{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                      style={{
                        borderColor: errors.phone ? '#FF6B9D' : focusedField === 'phone' ? '#00B8A9' : '#E5E7EB',
                        boxShadow: focusedField === 'phone' ? '0 0 0 3px rgba(0, 184, 169, 0.1)' : 'none'
                      }}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && <p className="text-sm font-semibold" style={{ color: '#FF6B9D' }}>{errors.phone}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Preferred Mentor *</label>
                    <select
                      name="preferredMentor"
                      value={formData.preferredMentor}
                      onChange={handleFormChange}
                      onFocus={() => setFocusedField('preferredMentor')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                      style={{
                        borderColor: errors.preferredMentor ? '#FF6B9D' : focusedField === 'preferredMentor' ? '#00B8A9' : '#E5E7EB',
                        boxShadow: focusedField === 'preferredMentor' ? '0 0 0 3px rgba(0, 184, 169, 0.1)' : 'none'
                      }}
                    >
                      <option value="">Select a mentor</option>
                      {content.mentors.map(mentor => (
                        <option key={mentor.id} value={mentor.name}>{mentor.name}</option>
                      ))}
                    </select>
                    {errors.preferredMentor && <p className="text-sm font-semibold" style={{ color: '#FF6B9D' }}>{errors.preferredMentor}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Experience Level</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleFormChange}
                    onFocus={() => setFocusedField('experience')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none"
                    style={{
                      borderColor: focusedField === 'experience' ? '#00B8A9' : '#E5E7EB',
                      boxShadow: focusedField === 'experience' ? '0 0 0 3px rgba(0, 184, 169, 0.1)' : 'none'
                    }}
                  >
                    <option value="">Select your level</option>
                    <option value="entry">Entry Level (0-2 years)</option>
                    <option value="mid">Mid Level (3-5 years)</option>
                    <option value="senior">Senior Level (6+ years)</option>
                    <option value="executive">Executive Level</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Session Frequency *</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Weekly', 'Bi-weekly', 'Monthly', 'One-time'].map(freq => (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, sessionFrequency: freq }));
                          errors.sessionFrequency && setErrors(prev => ({ ...prev, sessionFrequency: '' }));
                        }}
                        className="px-4 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
                        style={{
                          background: formData.sessionFrequency === freq ? 'linear-gradient(135deg, #00B8A9 0%, #00A89A 100%)' : 'rgba(0, 184, 169, 0.1)',
                          color: formData.sessionFrequency === freq ? '#FFFFFF' : '#00B8A9',
                          border: `2px solid ${formData.sessionFrequency === freq ? '#00B8A9' : 'rgba(0, 184, 169, 0.3)'}`
                        }}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>
                  {errors.sessionFrequency && <p className="text-sm font-semibold" style={{ color: '#FF6B9D' }}>{errors.sessionFrequency}</p>}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Career Goals (Optional)</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleFormChange}
                    onFocus={() => setFocusedField('goals')}
                    onBlur={() => setFocusedField(null)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none resize-none"
                    style={{
                      borderColor: focusedField === 'goals' ? '#00B8A9' : '#E5E7EB',
                      boxShadow: focusedField === 'goals' ? '0 0 0 3px rgba(0, 184, 169, 0.1)' : 'none'
                    }}
                    placeholder="Tell us about your career aspirations and what you hope to achieve through mentorship..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-4 rounded-2xl font-bold text-lg text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)' }}
                >
                  <span className="shimmer-effect absolute inset-0"></span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity morph" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)' }}></div>
                  <span className="relative flex items-center justify-center gap-3">
                    <span>{formStatus === 'sending' ? 'Submitting...' : formStatus === 'success' ? '✓ Submitted Successfully!' : 'Submit Application'}</span>
                    {formStatus !== 'sending' && formStatus !== 'success' && (
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    )}
                  </span>
                </button>

                {formStatus === 'success' && (
                  <div className="p-4 rounded-xl text-center font-bold scale-pulse border-2" style={{ background: 'linear-gradient(135deg, rgba(80, 200, 120, 0.2) 0%, rgba(80, 200, 120, 0.1) 100%)', color: '#50C878', borderColor: '#50C878' }}>
                    <span className="inline-block bounce-gentle text-3xl mr-2">🎉</span>
                    We'll be in touch within 24 hours!
                  </div>
                )}
              </div>
            </form>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="relative py-16 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #1A4D4D 0%, #0F3838 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Career Mentorship</h3>
              <p className="text-gray-300">Empowering professionals to reach their full potential through expert guidance.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#mentors" className="text-gray-300 hover:text-white transition-colors">Our Mentors</a></li>
                <li><a href="#booking" className="text-gray-300 hover:text-white transition-colors">Book a Session</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>📧 info@careermentorship.com</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>📍 San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2026 Career Mentorship. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
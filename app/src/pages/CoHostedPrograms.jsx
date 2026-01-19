import { useState, useRef, useEffect } from 'react';
import { AnimatedCounter } from '../components/AnimatedCounter';

// Animated Section wrapper
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
    <div ref={sectionRef} className={`transform transition-all duration-800 ease-out ${className} ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`} style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}>
      {children}
    </div>
  );
};

export default function CoHostedPrograms() {
  const colors = { primary: '#00B8A9', accent: '#FF8C42', dark: '#1A4D4D', blue: '#4A90E2', green: '#50C878', pink: '#FF6B9D', yellow: '#FFB800' };
  
  const [formData, setFormData] = useState({
    institutionName: '', contactPerson: '', email: '', phone: '', institutionType: '', studentCount: '', objectives: '', timeline: '', specificChallenges: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [errors, setErrors] = useState({});

  const benefits = [
    { title: 'Co-Create Opportunities', description: 'Partner with us to design and deliver internship programs tailored to your institution\'s unique needs.', icon: '🤝', color: colors.primary },
    { title: 'Industry Exposure', description: 'Give your learners direct access to 500+ leading companies across 60+ countries.', icon: '🌍', color: colors.accent },
    { title: 'Enhanced Employability', description: 'Our structured programs significantly boost graduate employment rates and career readiness.', icon: '📈', color: colors.blue },
    { title: 'Curriculum Integration', description: 'Seamlessly integrate real-world projects into your academic curriculum.', icon: '📚', color: colors.green },
    { title: 'Dedicated Support', description: 'Our team provides ongoing support for both your institution and students throughout the program.', icon: '👥', color: colors.pink },
    { title: 'Measurable Results', description: 'Access detailed analytics and reports on student performance and engagement.', icon: '📊', color: colors.yellow }
  ];

  const steps = [
    { title: 'Discovery Call', description: 'We learn about your institution, goals, and student demographics to assess the right fit.', icon: '📞' },
    { title: 'Program Design', description: 'Together, we co-create a customized co-hosted program that aligns with your curriculum and career services.', icon: '✏️' },
    { title: 'Student Matching', description: 'Our AI-powered platform matches students with ideal internship opportunities based on their profiles.', icon: '🎯' },
    { title: 'Ongoing Support', description: 'We provide continuous support, mentorship, and progress tracking throughout the internship.', icon: '🚀' }
  ];



  const validateForm = () => {
    const newErrors = {};
    if (!formData.institutionName.trim()) newErrors.institutionName = 'Institution name is required';
    if (!formData.contactPerson.trim()) newErrors.contactPerson = 'Contact person name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';
    if (!formData.phone.match(/^[\d\s\-+()]{10,}$/)) newErrors.phone = 'Valid phone number is required';
    if (!formData.institutionType) newErrors.institutionType = 'Please select institution type';
    if (!formData.studentCount) newErrors.studentCount = 'Please specify student count';
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
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'Co-Hosted Program Inquiry' })
      });
      if (res.ok) {
        setFormStatus('success');
        setFormData({ institutionName: '', contactPerson: '', email: '', phone: '', institutionType: '', studentCount: '', objectives: '', timeline: '', specificChallenges: '' });
        setTimeout(() => setFormStatus(''), 5000);
      } else setFormStatus('error');
    } catch { setFormStatus('error'); }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Modern Split Design */}
      <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <style>{`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
          }
          @keyframes slide-down {
            from { opacity: 0; transform: translateY(-50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes rotate-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .float-element { animation: float-slow 4s ease-in-out infinite; }
          .slide-down-text { animation: slide-down 0.8s ease-out; }
          .rotate-element { animation: rotate-slow 20s linear infinite; }
        `}</style>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-block px-6 py-3 rounded-full text-sm font-bold slide-down-text" style={{ background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.2) 0%, rgba(0, 184, 169, 0.2) 100%)', color: '#FF8C42', border: '2px solid #FF8C42' }}>
                ✨ Transform Education Through Partnership
              </div>

              {/* Main Headline */}
              <div className="slide-down-text" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-6">
                  <span className="block text-gray-900">Co-Host Your</span>
                  <span className="block" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Internship Future</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-gray-700 leading-relaxed max-w-lg slide-down-text" style={{ animationDelay: '0.4s' }}>
                Partner with us to create customized internship programs that empower your students, strengthen your institution's reputation, and drive meaningful career outcomes.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 slide-down-text" style={{ animationDelay: '0.6s' }}>
                <a href="#inquiry" className="group px-8 py-5 rounded-3xl font-bold text-lg text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex items-center justify-center gap-3" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)' }}>
                  Start Your Partnership
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
                <a href="#benefits" className="px-8 py-5 rounded-3xl font-bold text-lg transition-all duration-300 hover:shadow-lg" style={{ background: 'rgba(0, 184, 169, 0.1)', color: '#00B8A9', border: '2px solid #00B8A9' }}>
                  Learn How It Works
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 slide-down-text" style={{ animationDelay: '0.8s' }}>
                {[['150+', 'Partner\nInstitutions', '#FF8C42'], ['50K+', 'Students\nEmpowered', '#00B8A9'], ['95%', 'Success\nRate', '#4A90E2']].map((stat, i) => (
                  <div key={i} className="p-4 rounded-2xl transition-all hover:shadow-lg" style={{ background: `linear-gradient(135deg, rgba(${stat[2].slice(1)}, 0.1) 0%, rgba(${stat[2].slice(1)}, 0.05) 100%)` }}>
                    <div className="text-3xl font-black mb-2" style={{ color: stat[2] }}>
                      <AnimatedCounter end={parseInt(stat[0])} suffix={stat[0].includes('k') ? 'k+' : stat[0].includes('%') ? '%' : '+'} />
                    </div>
                    <div className="text-xs font-bold text-gray-600 whitespace-pre-line">{stat[1]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual Elements */}
            <div className="relative h-full hidden lg:flex items-center justify-center">
              {/* Floating cards */}
              <div className="relative w-full h-96">
                {/* Central animated orb */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="float-element w-48 h-48 rounded-3xl flex items-center justify-center text-7xl shadow-2xl" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)', boxShadow: '0 30px 60px rgba(255, 140, 66, 0.3)' }}>
                    🎓
                  </div>
                </div>

                {/* Orbiting elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rotate-element w-80 h-80">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.9) 0%, rgba(0, 160, 136, 0.9) 100%)' }}>
                      💼
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.9) 0%, rgba(66, 133, 244, 0.9) 100%)' }}>
                      🏢
                    </div>
                    <div className="absolute top-1/2 right-0 -translate-y-1/2 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(80, 200, 120, 0.9) 0%, rgba(70, 180, 110, 0.9) 100%)' }}>
                      🌟
                    </div>
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-lg" style={{ background: 'linear-gradient(135deg, rgba(255, 107, 45, 0.9) 0%, rgba(255, 140, 66, 0.9) 100%)' }}>
                      🚀
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="mt-20 flex items-center justify-center gap-6 py-6 rounded-3xl" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 100%)' }}>
          <span className="text-white font-bold text-lg">✓ Industry-Verified</span>
          <span className="text-white/50">•</span>
          <span className="text-white font-bold text-lg">✓ Fully Supported</span>
          <span className="text-white/50">•</span>
          <span className="text-white font-bold text-lg">✓ Proven Results</span>
        </div>
      </section>

      {/* What is Co-Hosting Section */}
      <AnimatedSection delay={100}>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)' }}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-3 rounded-full text-sm font-bold mb-6 backdrop-blur-sm" style={{ backgroundColor: 'rgba(255,140,66,0.15)', color: '#FF8C42', border: '2px solid rgba(255,140,66,0.3)' }}>
                About Co-Hosting
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
                What is Co-Hosting?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  <strong>Co-Hosted Programs</strong> represent a strategic partnership where your institution collaborates with us to design and deliver a customized internship program. Rather than sending students elsewhere, you maintain direct involvement and oversight while leveraging our extensive industry network and platform capabilities.
                </p>

                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  It's not just about placing students—it's about creating a comprehensive learning experience that bridges the gap between theory and practice, enhancing your institution's reputation and student outcomes.
                </p>

                <div className="space-y-4">
                  {[
                    'Customized program design',
                    'Direct institutional oversight',
                    'Access to 500+ companies',
                    'Ongoing support and mentoring',
                    'Detailed student analytics',
                    'Career services integration'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full mt-1 shrink-0" style={{ backgroundColor: '#FF8C42' }}></div>
                      <p className="text-gray-700 font-medium">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl" style={{ background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.1) 0%, rgba(0, 184, 169, 0.1) 100%)' }}>
                <div className="p-8 flex items-center justify-center h-96">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌟</div>
                    <p className="text-gray-700 font-bold text-lg">Excellence through Partnership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Benefits Section - Creative Hexagon/Grid Layout */}
      <AnimatedSection delay={100}>
        <section id="benefits" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #F5F7FA 0%, #FFFFFF 100%)' }}>
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)' }}></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ color: '#1A4D4D' }}>
                Why <span style={{ color: '#FF8C42' }}>Partner</span> With Us
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Transform your institution's career services and measurably improve student outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="group relative p-8 rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${benefit.color}15 0%, ${benefit.color}05 100%)`,
                    border: `2px solid ${benefit.color}30`
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{ background: benefit.color }}></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-6">{benefit.icon}</div>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: benefit.color }}>
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Decorative accent */}
                    <div className="mt-6 pt-6 border-t-2" style={{ borderColor: `${benefit.color}30` }}>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ background: benefit.color }}></div>
                        <span className="text-sm font-bold" style={{ color: benefit.color }}>Learn More</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* How It Works - Staggered Card Design */}
      <AnimatedSection delay={100}>
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #F8FAFB 0%, #FFFFFF 50%, #F0F9F9 100%)' }}>
          <style>{`
            @keyframes slide-in {
              from { opacity: 0; transform: translateX(-30px); }
              to { opacity: 1; transform: translateX(0); }
            }
          `}</style>

          <div className="absolute top-10 right-20 w-72 h-72 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-20 -left-32 w-96 h-96 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)' }}></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
                How It <span style={{ color: '#FF8C42' }}>Works</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                A streamlined 4-step journey to partnership success
              </p>
            </div>

            {/* Desktop: Staggered Cards */}
            <div className="hidden lg:block">
              <div className="space-y-16">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-12 group ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}
                    style={{ animation: `slide-in 0.6s ease-out ${idx * 0.2}s both` }}
                  >
                    {/* Content Card */}
                    <div className="flex-1 p-8 rounded-3xl border-2 transition-all duration-500 hover:shadow-2xl hover:translate-x-2 cursor-pointer"
                      style={{
                        background: idx % 2 === 0 
                          ? `linear-gradient(135deg, rgba(255, 140, 66, 0.08) 0%, rgba(255, 140, 66, 0.02) 100%)`
                          : `linear-gradient(135deg, rgba(0, 184, 169, 0.08) 0%, rgba(0, 184, 169, 0.02) 100%)`,
                        borderColor: idx % 2 === 0 ? '#FF8C42' : '#00B8A9'
                      }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-5xl">{step.icon}</div>
                        <div className="text-6xl font-black" style={{ color: idx % 2 === 0 ? '#FF8C42' : '#00B8A9' }}>
                          {idx + 1}
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{step.description}</p>
                    </div>

                    {/* Visual Element */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="relative w-48 h-48 rounded-3xl flex items-center justify-center text-7xl shadow-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${idx % 2 === 0 ? '#FF8C42' : '#00B8A9'} 0%, ${idx % 2 === 0 ? '#FF6B2B' : '#00A896'} 100%)`,
                          boxShadow: `0 20px 40px rgba(${idx % 2 === 0 ? '255, 140, 66' : '0, 184, 169'}, 0.3)`
                        }}
                      >
                        {step.icon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: Vertical Card Stack */}
            <div className="lg:hidden space-y-8">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl border-2 transition-all duration-500 hover:shadow-xl"
                  style={{
                    background: `linear-gradient(135deg, rgba(${idx % 2 === 0 ? '255, 140, 66' : '0, 184, 169'}, 0.1) 0%, rgba(${idx % 2 === 0 ? '255, 140, 66' : '0, 184, 169'}, 0.05) 100%)`,
                    borderColor: idx % 2 === 0 ? '#FF8C42' : '#00B8A9',
                    animation: `slide-in 0.6s ease-out ${idx * 0.2}s both`
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{step.icon}</div>
                    <div className="text-5xl font-black" style={{ color: idx % 2 === 0 ? '#FF8C42' : '#00B8A9' }}>
                      {idx + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Inquiry Form Section */}
      <AnimatedSection delay={100}>
        <section id="inquiry" className="relative py-32 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #F8FAFB 0%, #FFFFFF 50%, #F0F9F9 100%)' }}>
          {/* Decorative circles */}
          <div className="absolute top-20 right-20 w-40 h-40 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)' }}></div>
          <div className="absolute bottom-40 left-10 w-56 h-56 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)' }}></div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black mb-4 text-gray-900">
                Ready to <span style={{ color: '#00B8A9' }}>Co-Host</span>?
              </h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Submit your inquiry and our team will connect with you within 24 hours to discuss your partnership vision.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Section 1: Institution Info */}
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="text-3xl mr-4">🏫</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">Institution Information</h3>
                    <p className="text-gray-600">Tell us about your organization</p>
                  </div>
                  <div className="hidden sm:block text-5xl opacity-10">📋</div>
                </div>
                <div className="h-1 w-20 mb-8" style={{ background: 'linear-gradient(90deg, #FF8C42 0%, transparent 100%)' }}></div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Institution Name *
                    </label>
                    <input
                      type="text"
                      name="institutionName"
                      value={formData.institutionName}
                      onChange={handleChange}
                      placeholder="University/College Name"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        errors.institutionName
                          ? 'border-red-500 focus:ring-red-500 focus:ring-offset-red-50'
                          : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
                      }`}
                      style={errors.institutionName ? {} : { borderColor: '#E5E7EB' }}
                    />
                    {errors.institutionName && (
                      <p className="text-red-600 text-sm mt-2 flex items-center">
                        <span className="mr-1">⚠️</span> {errors.institutionName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Institution Type *
                    </label>
                    <select
                      name="institutionType"
                      value={formData.institutionType}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        errors.institutionType
                          ? 'border-red-500 focus:ring-red-500 focus:ring-offset-red-50'
                          : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
                      }`}
                      style={errors.institutionType ? {} : { borderColor: '#E5E7EB' }}
                    >
                      <option value="">Select institution type</option>
                      <option value="University">University</option>
                      <option value="College">College</option>
                      <option value="Bootcamp">Bootcamp</option>
                      <option value="Vocational Institute">Vocational Institute</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.institutionType && (
                      <p className="text-red-600 text-sm mt-2 flex items-center">
                        <span className="mr-1">⚠️</span> {errors.institutionType}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Number of Students *
                    </label>
                    <select
                      name="studentCount"
                      value={formData.studentCount}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        errors.studentCount
                          ? 'border-red-500 focus:ring-red-500 focus:ring-offset-red-50'
                          : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
                      }`}
                      style={errors.studentCount ? {} : { borderColor: '#E5E7EB' }}
                    >
                      <option value="">Select student count</option>
                      <option value="100-500">100-500</option>
                      <option value="500-1000">500-1,000</option>
                      <option value="1000-5000">1,000-5,000</option>
                      <option value="5000+">5,000+</option>
                    </select>
                    {errors.studentCount && (
                      <p className="text-red-600 text-sm mt-2 flex items-center">
                        <span className="mr-1">⚠️</span> {errors.studentCount}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Primary Contact Person *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        errors.contactPerson
                          ? 'border-red-500 focus:ring-red-500 focus:ring-offset-red-50'
                          : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
                      }`}
                      style={errors.contactPerson ? {} : { borderColor: '#E5E7EB' }}
                    />
                    {errors.contactPerson && (
                      <p className="text-red-600 text-sm mt-2 flex items-center">
                        <span className="mr-1">⚠️</span> {errors.contactPerson}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>

              {/* Section 2: Program Details */}
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="text-3xl mr-4">🎯</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">Program Details</h3>
                    <p className="text-gray-600">What kind of program interests you?</p>
                  </div>
                  <div className="hidden sm:block text-5xl opacity-10">🎨</div>
                </div>
                <div className="h-1 w-20 mb-8" style={{ background: 'linear-gradient(90deg, #00B8A9 0%, transparent 100%)' }}></div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3">
                        Program Objectives *
                      </label>
                      <textarea
                        name="objectives"
                        value={formData.objectives}
                        onChange={handleChange}
                        rows="3"
                        placeholder="What are your primary goals for this program? e.g., enhance employability, integrate real-world projects..."
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 resize-none"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-900 mb-3">
                        Preferred Timeline *
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30"
                      >
                        <option value="">Select timeline</option>
                        <option value="ASAP">ASAP (Next 3 months)</option>
                        <option value="3-6 months">3-6 months</option>
                        <option value="6-12 months">6-12 months</option>
                        <option value="12+ months">12+ months</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Specific Challenges or Requirements
                    </label>
                    <textarea
                      name="specificChallenges"
                      value={formData.specificChallenges}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Any specific industries, skills, or program requirements we should know about?"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8"></div>

              {/* Section 3: Contact Info */}
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="text-3xl mr-4">💼</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">Contact Information</h3>
                    <p className="text-gray-600">How can we reach you?</p>
                  </div>
                  <div className="hidden sm:block text-5xl opacity-10">📞</div>
                </div>
                <div className="h-1 w-20 mb-8" style={{ background: 'linear-gradient(90deg, #4A90E2 0%, transparent 100%)' }}></div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contact@institution.edu"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        errors.email
                          ? 'border-red-500 focus:ring-red-500 focus:ring-offset-red-50'
                          : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
                      }`}
                      style={errors.email ? {} : { borderColor: '#E5E7EB' }}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-2 flex items-center">
                        <span className="mr-1">⚠️</span> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        errors.phone
                          ? 'border-red-500 focus:ring-red-500 focus:ring-offset-red-50'
                          : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
                      }`}
                      style={errors.phone ? {} : { borderColor: '#E5E7EB' }}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-2 flex items-center">
                        <span className="mr-1">⚠️</span> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-4 px-8 rounded-2xl font-bold text-lg text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)' }}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <span className="animate-spin mr-3">⏳</span> Submitting...
                    </>
                  ) : (
                    <>
                      <span className="mr-2">✨</span> Submit Inquiry
                    </>
                  )}
                </button>
              </div>

              {/* Status message */}
              {formStatus === 'success' && (
                <div className="p-4 rounded-xl text-center font-bold bg-green-100 text-green-800">
                  ✓ Inquiry submitted successfully! Our team will contact you within 24 hours.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 rounded-xl text-center font-bold bg-red-100 text-red-800">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );      
}
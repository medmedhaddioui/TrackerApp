import { useState, useRef, useEffect } from 'react';
import { AnimatedCounter } from '../components/AnimatedCounter';

// Animated Section wrapper
const AnimatedSection = ({ children, delay = 0 }) => {
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
    <div ref={sectionRef} className={`transform transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}>
      {children}
    </div>
  );
};

export default function IndustryInternship() {
  const colors = { blue: '#4A90E2', green: '#50C878', orange: '#FF8C42', teal: '#00B8A9', dark: '#1A4D4D' };
  
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', university: '', major: '', trackDomain: '', trackSpecific: '', skills: '', experience: '', customPreferences: '', startDate: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [errors, setErrors] = useState({});

  const tracks = {
    'Technology': { color: colors.blue, items: [{ name: 'Full Stack Development', icon: '💻' }, { name: 'Data Science & Analytics', icon: '📊' }, { name: 'Cybersecurity', icon: '🔒' }, { name: 'Cloud Architecture', icon: '☁️' }, { name: 'AI/Machine Learning', icon: '🤖' }, { name: 'Mobile Development', icon: '📱' }] },
    'Business': { color: colors.green, items: [{ name: 'Management Consulting', icon: '📈' }, { name: 'Project Management', icon: '📋' }, { name: 'Business Analysis', icon: '🔍' }, { name: 'Operations', icon: '⚙️' }, { name: 'Supply Chain', icon: '🚚' }, { name: 'Strategy', icon: '🎯' }] },
    'Marketing': { color: colors.orange, items: [{ name: 'Digital Marketing', icon: '📱' }, { name: 'Content Strategy', icon: '✍️' }, { name: 'SEO/SEM', icon: '🔍' }, { name: 'Brand Management', icon: '🎨' }, { name: 'Social Media', icon: '📲' }, { name: 'Marketing Analytics', icon: '📊' }] },
    'Finance': { color: colors.teal, items: [{ name: 'Investment Banking', icon: '💰' }, { name: 'Financial Analysis', icon: '📈' }, { name: 'Risk Management', icon: '⚠️' }, { name: 'Trading', icon: '📉' }, { name: 'Corporate Finance', icon: '🏢' }, { name: 'Accounting', icon: '📑' }] }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';
    if (!formData.phone.match(/^[\d\s\-+()]{10,}$/)) newErrors.phone = 'Valid phone number is required';
    if (!formData.university.trim()) newErrors.university = 'University is required';
    if (!formData.major.trim()) newErrors.major = 'Major is required';
    if (!formData.trackDomain) newErrors.trackDomain = 'Please select a domain';
    if (!formData.trackSpecific) newErrors.trackSpecific = 'Please select a track';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    errors[name] && setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleDomainChange = (domain) => {
    setFormData(prev => ({ ...prev, trackDomain: domain, trackSpecific: '' }));
    errors.trackDomain && setErrors(prev => ({ ...prev, trackDomain: '' }));
  };

  const handleTrackSelect = (trackName) => {
    setFormData(prev => ({ ...prev, trackSpecific: trackName }));
    errors.trackSpecific && setErrors(prev => ({ ...prev, trackSpecific: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xbdlzzly', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'Industry Internship Registration' })
      });
      if (res.ok) {
        setFormStatus('success');
        setFormData({ fullName: '', email: '', phone: '', university: '', major: '', trackDomain: '', trackSpecific: '', skills: '', experience: '', customPreferences: '', startDate: '' });
        setTimeout(() => setFormStatus(''), 5000);
      } else setFormStatus('error');
    } catch (err) { setFormStatus(err); }
  };

  const selectedDomain = formData.trackDomain ? { ...tracks[formData.trackDomain], domain: formData.trackDomain, lightColor: `rgba(${tracks[formData.trackDomain].color.slice(1)}, 0.1)` } : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Creative Design with Diagonal Split */}
      <section className="relative pt-20 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated background grid pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(0,184,169,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,184,169,0.03) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
          {/* Floating shapes */}
          <div className="absolute top-10 right-20 w-32 h-32 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
          <div className="absolute bottom-40 left-10 w-40 h-40 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 pt-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-block px-5 py-2 rounded-full text-sm font-bold mb-8 animate-fade-in-up" style={{ background: 'rgba(74, 144, 226, 0.1)', color: '#4A90E2', border: '2px solid #4A90E2', animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
                ✨ Choose Your Specialty
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
                <span style={{ color: '#1A4D4D' }}>Industry</span>
                <br />
                <span style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Internship Tracks</span>
              </h1>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg animate-fade-in-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
                From tech to finance, discover specialized internship tracks designed to accelerate your career in your chosen field.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
                <a href="#tracks" className="group px-8 py-4 rounded-2xl font-bold text-lg text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex items-center gap-3" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)' }}>
                  <span>Explore All Tracks</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="#register" className="px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:shadow-lg" style={{ background: 'rgba(0,184,169,0.1)', color: '#00B8A9', border: '2px solid #00B8A9' }}>
                  Register Now
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
                <div className="p-4 rounded-xl" style={{ background: 'rgba(74, 144, 226, 0.1)' }}>
                  <div className="text-3xl font-black mb-1" style={{ color: '#4A90E2' }}>
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-xs font-bold text-gray-600">Active Roles</div>
                </div>
                <div className="p-4 rounded-xl" style={{ background: 'rgba(255, 140, 66, 0.1)' }}>
                  <div className="text-3xl font-black mb-1" style={{ color: '#FF8C42' }}>
                    <AnimatedCounter end={4} />
                  </div>
                  <div className="text-xs font-bold text-gray-600">Domains</div>
                </div>
                <div className="p-4 rounded-xl" style={{ background: 'rgba(0, 184, 169, 0.1)' }}>
                  <div className="text-3xl font-black mb-1" style={{ color: '#00B8A9' }}>
                    <AnimatedCounter end={98} suffix="%" />
                  </div>
                  <div className="text-xs font-bold text-gray-600">Success</div>
                </div>
              </div>
            </div>

            {/* Right Side - Visual Cards */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-6">
                {/* Tech Card */}
                <div className="p-6 rounded-2xl h-48 flex flex-col justify-between transform hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.15) 0%, rgba(74, 144, 226, 0) 100%)', border: '2px solid #4A90E2' }}>
                  <div className="text-5xl">💻</div>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: '#4A90E2' }}>Technology</h3>
                    <p className="text-sm text-gray-600">6 Specializations</p>
                  </div>
                </div>

                {/* Business Card */}
                <div className="p-6 rounded-2xl h-48 flex flex-col justify-between transform hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(80, 200, 120, 0.15) 0%, rgba(80, 200, 120, 0) 100%)', border: '2px solid #50C878' }}>
                  <div className="text-5xl">📈</div>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: '#50C878' }}>Business</h3>
                    <p className="text-sm text-gray-600">6 Specializations</p>
                  </div>
                </div>

                {/* Marketing Card */}
                <div className="p-6 rounded-2xl h-48 flex flex-col justify-between transform hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.15) 0%, rgba(255, 140, 66, 0) 100%)', border: '2px solid #FF8C42' }}>
                  <div className="text-5xl">📱</div>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: '#FF8C42' }}>Marketing</h3>
                    <p className="text-sm text-gray-600">6 Specializations</p>
                  </div>
                </div>

                {/* Finance Card */}
                <div className="p-6 rounded-2xl h-48 flex flex-col justify-between transform hover:scale-105 transition-all duration-300" style={{ background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.15) 0%, rgba(0, 184, 169, 0) 100%)', border: '2px solid #00B8A9' }}>
                  <div className="text-5xl">💰</div>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: '#00B8A9' }}>Finance</h3>
                    <p className="text-sm text-gray-600">6 Specializations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom section */}
        <div className="mt-20 relative h-32" style={{ background: 'linear-gradient(135deg, #4A90E2 0%, #00B8A9 100%)' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white font-bold text-center text-lg">Choose your path • Build your future • Launch your career</p>
          </div>
        </div>
      </section>

      {/* Tracks Section - Interactive Domain Showcase */}
      <AnimatedSection delay={100}>
        <section id="tracks" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: '#F5F7FA' }}>
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-32" style={{ background: 'linear-gradient(135deg, rgba(74, 144, 226, 0.1) 0%, transparent 100%)' }}></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)' }}></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-6" style={{ color: '#1A4D4D' }}>
                Explore Our <span style={{ color: '#FF8C42' }}>4 Domains</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Click on any domain to discover 6 specialized internship tracks tailored to your interests
              </p>
            </div>

            {/* Domain Grid - Click to Filter */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {Object.entries(tracks).map(([domainName, domainData]) => (
                <button
                  key={domainName}
                  onClick={() => handleDomainChange(domainName)}
                  className={`group p-8 rounded-3xl text-center transition-all duration-300 transform cursor-pointer ${
                    formData.trackDomain === domainName
                      ? 'shadow-2xl scale-105 ring-4'
                      : 'hover:shadow-xl hover:scale-102'
                  }`}
                  style={{
                    background: formData.trackDomain === domainName
                      ? `linear-gradient(135deg, ${domainData.color} 0%, ${domainData.color}dd 100%)`
                      : `linear-gradient(135deg, rgba(${domainData.color.slice(1)}, 0.08) 0%, rgba(${domainData.color.slice(1)}, 0) 100%)`,
                    border: `2px solid ${domainData.color}`,
                    ringColor: domainData.color
                  }}
                >
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {domainName === 'Technology' && '💻'}
                    {domainName === 'Business' && '📊'}
                    {domainName === 'Marketing' && '🎨'}
                    {domainName === 'Finance' && '💳'}
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 transition-colors ${
                    formData.trackDomain === domainName ? 'text-white' : ''
                  }`} style={{ color: formData.trackDomain === domainName ? 'white' : `text-white` }}>
                    {domainName}
                  </h3>
                  <p className={`text-sm transition-colors ${
                    formData.trackDomain === domainName ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    6 Specializations
                  </p>
                  {formData.trackDomain === domainName && (
                    <div className="mt-4 text-white text-sm font-bold animate-pulse">
                      ↓ Scroll to see tracks
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Tracks Display with Animation */}
            {selectedDomain && (
              <div className="mt-16">
                <div className="mb-8 text-center">
                  <h3 className="text-3xl font-bold mb-2" style={{ color: selectedDomain.color }}>
                    {selectedDomain.domain} Specializations
                  </h3>
                  <div className="w-20 h-1 mx-auto" style={{ background: selectedDomain.color }}></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedDomain.items.map((track, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleTrackSelect(track.name)}
                      className={`p-8 rounded-2xl cursor-pointer group transition-all duration-300 transform hover:scale-105 ${
                        formData.trackSpecific === track.name
                          ? 'shadow-xl ring-2'
                          : 'shadow-md hover:shadow-xl'
                      }`}
                      style={{
                        background: formData.trackSpecific === track.name
                          ? `linear-gradient(135deg, ${selectedDomain.lightColor} 0%, ${selectedDomain.color}15 100%)`
                          : '#FFFFFF',
                        border: `2px solid ${selectedDomain.color}`,
                        ringColor: selectedDomain.color
                      }}
                    >
                      <div className="text-6xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                        {track.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-3" style={{ color: selectedDomain.color }}>
                        {track.name}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Gain hands-on experience and build real skills in {track.name.toLowerCase()}.
                      </p>
                      {formData.trackSpecific === track.name && (
                        <div className="mt-4 pt-4 border-t" style={{ borderColor: selectedDomain.color }}>
                          <span className="text-sm font-bold" style={{ color: selectedDomain.color }}>✓ Selected</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </AnimatedSection>

      {/* Custom Internship Option - Creative Card */}
      <AnimatedSection delay={100}>
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F7FA 100%)' }}>
          <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)' }}></div>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Text */}
              <div>
                <div className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6" style={{ background: 'rgba(255, 140, 66, 0.15)', color: '#FF8C42' }}>
                  ⚙️ Flexible Options
                </div>

                <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight" style={{ color: '#1A4D4D' }}>
                  Your Path,<br />Your Rules
                </h2>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Don't see your perfect track? No problem! Our platform supports <strong>fully customizable internship experiences</strong> designed exactly how you want them.
                </p>

                <div className="space-y-5 mb-10">
                  {[
                    { icon: '🎯', title: 'Pick Your Focus', desc: 'Any role, any company, any industry' },
                    { icon: '📅', title: 'Set Your Timeline', desc: 'Flexible duration and schedule' },
                    { icon: '💡', title: 'Define Goals', desc: 'Internship tailored to your vision' },
                    { icon: '🌟', title: 'Personalized Support', desc: 'Expert mentors in your field' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="text-3xl shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a href="#register" className="inline-block px-8 py-4 rounded-2xl font-bold text-lg text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)' }}>
                  Create Custom Program →
                </a>
              </div>

              {/* Right - Visual */}
              <div className="relative hidden lg:block">
                <div className="p-8 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.1) 0%, rgba(0, 184, 169, 0.1) 100%)' }}>
                  <div className="space-y-6">
                    <div className="p-6 bg-white rounded-2xl shadow-md border-l-4" style={{ borderLeftColor: '#FF8C42' }}>
                      <div className="text-4xl mb-3">🚀</div>
                      <h4 className="font-bold mb-2" style={{ color: '#FF8C42' }}>Startup Track</h4>
                      <p className="text-sm text-gray-600">Work with innovative startups on early-stage challenges</p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl shadow-md border-l-4" style={{ borderLeftColor: '#00B8A9' }}>
                      <div className="text-4xl mb-3">🌍</div>
                      <h4 className="font-bold mb-2" style={{ color: '#00B8A9' }}>Global Impact</h4>
                      <p className="text-sm text-gray-600">NGOs and social enterprises making real-world difference</p>
                    </div>

                    <div className="p-6 bg-white rounded-2xl shadow-md border-l-4" style={{ borderLeftColor: '#4A90E2' }}>
                      <div className="text-4xl mb-3">🏢</div>
                      <h4 className="font-bold mb-2" style={{ color: '#4A90E2' }}>Fortune 500</h4>
                      <p className="text-sm text-gray-600">Enterprise experience with global leaders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Registration Form */}
      <AnimatedSection delay={100}>
        <section id="register" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(0,184,169,0.05) 0%, #FFFFFF 50%, rgba(255,140,66,0.05) 100%)' }}>
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#00B8A9' }}></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#FF8C42' }}></div>

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-3 rounded-full text-sm font-bold mb-6 backdrop-blur-sm" style={{ backgroundColor: 'rgba(0,184,169,0.15)', color: '#00B8A9', border: '2px solid rgba(0,184,169,0.3)' }}>
                Get Started
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
                Register Your Internship
              </h2>
              <p className="text-xl text-gray-600">
                Complete your profile to get matched with the perfect internship opportunity
              </p>
            </div>

            <form onSubmit={handleSubmit} className="relative bg-white p-10 rounded-3xl shadow-2xl overflow-hidden" style={{ border: '2px solid rgba(0,184,169,0.1)' }}>
              <div className="absolute top-0 left-0 w-full h-2" style={{ background: 'linear-gradient(90deg, #00B8A9 0%, #FF8C42 100%)' }}></div>

              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
                  Personal Information
                </h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-bold mb-3 text-base" style={{ color: '#1A4D4D' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300"
                      style={{ borderColor: errors.fullName ? '#FF8C42' : 'rgba(0,184,169,0.2)' }}
                      onFocus={(e) => !errors.fullName && (e.target.style.borderColor = '#00B8A9')}
                      onBlur={(e) => !errors.fullName && (e.target.style.borderColor = 'rgba(0,184,169,0.2)')}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-2">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block font-bold mb-3 text-base" style={{ color: '#1A4D4D' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300"
                      style={{ borderColor: errors.email ? '#FF8C42' : 'rgba(0,184,169,0.2)' }}
                      onFocus={(e) => !errors.email && (e.target.style.borderColor = '#00B8A9')}
                      onBlur={(e) => !errors.email && (e.target.style.borderColor = 'rgba(0,184,169,0.2)')}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-bold mb-3 text-base" style={{ color: '#1A4D4D' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300"
                      style={{ borderColor: errors.phone ? '#FF8C42' : 'rgba(0,184,169,0.2)' }}
                      onFocus={(e) => !errors.phone && (e.target.style.borderColor = '#00B8A9')}
                      onBlur={(e) => !errors.phone && (e.target.style.borderColor = 'rgba(0,184,169,0.2)')}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block font-bold mb-3 text-base" style={{ color: '#1A4D4D' }}>
                      University *
                    </label>
                    <input
                      type="text"
                      name="university"
                      value={formData.university}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300"
                      style={{ borderColor: errors.university ? '#FF8C42' : 'rgba(0,184,169,0.2)' }}
                      onFocus={(e) => !errors.university && (e.target.style.borderColor = '#00B8A9')}
                      onBlur={(e) => !errors.university && (e.target.style.borderColor = 'rgba(0,184,169,0.2)')}
                      placeholder="Your University"
                    />
                    {errors.university && <p className="text-red-500 text-sm mt-2">{errors.university}</p>}
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-3 text-base" style={{ color: '#1A4D4D' }}>
                    Major/Field of Study *
                  </label>
                  <input
                    type="text"
                    name="major"
                    value={formData.major}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300"
                    style={{ borderColor: errors.major ? '#FF8C42' : 'rgba(0,184,169,0.2)' }}
                    onFocus={(e) => !errors.major && (e.target.style.borderColor = '#00B8A9')}
                    onBlur={(e) => !errors.major && (e.target.style.borderColor = 'rgba(0,184,169,0.2)')}
                    placeholder="Computer Science, Business, etc."
                  />
                  {errors.major && <p className="text-red-500 text-sm mt-2">{errors.major}</p>}
                </div>
              </div>

              {/* Track Selection */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
                  Select Your Track
                </h3>

                <div className="mb-6">
                  <label className="block font-bold mb-3 text-base" style={{ color: '#1A4D4D' }}>
                    Domain *
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(tracks).map(([domainName, domainData]) => (
                      <button
                        key={domainName}
                        type="button"
                        onClick={() => handleDomainChange(domainName)}
                        className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                          formData.trackDomain === domainName
                            ? 'text-white'
                            : 'bg-white border-2 text-gray-700'
                        }`}
                        style={
                          formData.trackDomain === domainName
                            ? { backgroundColor: domainData.color }
                            : { borderColor: domainData.color, color: domainData.color }
                        }
                      >
                        {domainName}
                      </button>
                    ))}
                  </div>
                  {errors.trackDomain && <p className="text-red-500 text-sm mt-2">{errors.trackDomain}</p>}
                </div>

                {selectedDomain && (
                  <div>
                    <label className="block font-bold mb-3 text-base" style={{ color: '#1A4D4D' }}>
                      Specific Track *
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedDomain.items.map((track, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleTrackSelect(track.name)}
                          className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                            formData.trackSpecific === track.name
                              ? 'border-2'
                              : 'border-2 hover:shadow-md'
                          }`}
                          style={{
                            backgroundColor: formData.trackSpecific === track.name ? selectedDomain.lightColor : '#FFFFFF',
                            borderColor: selectedDomain.color
                          }}
                        >
                          <span className="text-2xl mr-2">{track.icon}</span>
                          <span className="font-bold" style={{ color: '#1A4D4D' }}>
                            {track.name}
                          </span>
                        </button>
                      ))}
                    </div>
                    {errors.trackSpecific && <p className="text-red-500 text-sm mt-2">{errors.trackSpecific}</p>}
                  </div>
                )}
              </div>

              {/* Additional Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
                  Additional Information
                </h3>

                <div className="mb-6">
                  <label className="block font-bold mb-3 text-base" style={{ color: '#1A4D4D' }}>
                    Key Skills
                  </label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300"
                    style={{ borderColor: 'rgba(0,184,169,0.2)' }}
                    onFocus={(e) => (e.target.style.borderColor = '#00B8A9')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(0,184,169,0.2)')}
                    placeholder="e.g., Python, Data Analysis, Team Leadership"
                  />
                </div>

                <div className="mb-6">
                  <label className="block font-bold mb-3 text-base" style={{ color: '#1A4D4D' }}>
                    Relevant Experience
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none"
                    style={{ borderColor: 'rgba(0,184,169,0.2)' }}
                    onFocus={(e) => (e.target.style.borderColor = '#00B8A9')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(0,184,169,0.2)')}
                    placeholder="Describe your relevant projects, internships, or experience..."
                  />
                </div>

                <div className="mb-6">
                  <label className="block font-bold mb-3 text-base" style={{ color: '#1A4D4D' }}>
                    Custom Preferences
                  </label>
                  <textarea
                    name="customPreferences"
                    value={formData.customPreferences}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none"
                    style={{ borderColor: 'rgba(0,184,169,0.2)' }}
                    onFocus={(e) => (e.target.style.borderColor = '#00B8A9')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(0,184,169,0.2)')}
                    placeholder="Any specific preferences, industries, or company types?"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-3 text-base" style={{ color: '#1A4D4D' }}>
                    Preferred Start Date *
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300"
                    style={{ borderColor: errors.startDate ? '#FF8C42' : 'rgba(0,184,169,0.2)' }}
                    onFocus={(e) => !errors.startDate && (e.target.style.borderColor = '#00B8A9')}
                    onBlur={(e) => !errors.startDate && (e.target.style.borderColor = 'rgba(0,184,169,0.2)')}
                  />
                  {errors.startDate && <p className="text-red-500 text-sm mt-2">{errors.startDate}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="group relative w-full py-5 text-white rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
                style={{ backgroundColor: '#00B8A9' }}
              >
                <span className="relative z-10">
                  {formStatus === 'sending' ? 'Registering...' : 'Register Now'}
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(45deg, rgba(255,255,255,0.2) 0%, transparent 100%)' }}></div>
              </button>

              {formStatus === 'success' && (
                <div className="text-center mt-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(0,184,169,0.1)' }}>
                  <p className="font-bold" style={{ color: '#00B8A9' }}>
                    ✓ Registration successful! We'll contact you soon with matching opportunities.
                  </p>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="text-center mt-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,140,66,0.1)' }}>
                  <p className="font-bold" style={{ color: '#FF8C42' }}>
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
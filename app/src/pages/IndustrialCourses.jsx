import { useState, useRef, useEffect } from 'react';
import { AnimatedCounter } from '../components/AnimatedCounter';

// Animated Section wrapper (same for consistency)
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
    <div ref={sectionRef} className={`transform transition-all duration-1000 ease-out ${className} ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-90'}`} style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}>
      {children}
    </div>
  );
};

export default function IndustrialCourses() {
  const colors = { primary: '#00B8A9', accent: '#FF8C42', dark: '#1A4D4D', blue: '#4A90E2', green: '#50C878', pink: '#FF6B9D', yellow: '#FFB800' };
  
  const [formData, setFormData] = useState({
    institutionName: '', department: '', contactPerson: '', email: '', phone: '', institutionType: '', studentCount: '', integrationGoals: '', preferredTimeline: '', specificRequirements: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [errors, setErrors] = useState({});

  const outcomes = [
    { title: 'Practical Industry Skills', description: 'Students gain hands-on experience with current tools, technologies, and workflows used in industry.', icon: '🔧', color: colors.primary, category: 'Students' },
    { title: 'Recognized Certifications', description: 'Earn industry-recognized certificates that strengthen resumes and LinkedIn profiles.', icon: '🏆', color: colors.accent, category: 'Students' },
    { title: 'Higher Employability', description: 'Graduates with parallel industrial training secure jobs faster and at better salaries.', icon: '📈', color: colors.blue, category: 'Students' },
    { title: 'Modernized Curriculum', description: 'Stay ahead by integrating cutting-edge industry content without overhauling existing programs.', icon: '📚', color: colors.green, category: 'Institutions' },
    { title: 'Stronger Industry Ties', description: 'Build direct partnerships with leading companies for guest lectures, projects, and placements.', icon: '🤝', color: colors.pink, category: 'Institutions' },
    { title: 'Improved Rankings & Reputation', description: 'Demonstrate commitment to employability with measurable graduate success metrics.', icon: '⭐', color: colors.yellow, category: 'Institutions' }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.institutionName.trim()) newErrors.institutionName = 'Institution name is required';
    if (!formData.department.trim()) newErrors.department = 'Department name is required';
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
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/xbdlzzly', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, type: 'Industrial Course Integration Inquiry' })
      });
      if (res.ok) {
        setFormStatus('success');
        setFormData({
          institutionName: '', department: '', contactPerson: '', email: '', phone: '',
          institutionType: '', studentCount: '', integrationGoals: '', preferredTimeline: '', specificRequirements: ''
        });
        setTimeout(() => setFormStatus(''), 5000);
      } else setFormStatus('error');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section – Completely new industrial-themed design with layered rotating machinery animation */}
      <section className="relative min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <style>{`
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 20px rgba(255,140,66,0.4); }
            50% { box-shadow: 0 0 60px rgba(255,140,66,0.8); }
          }
          @keyframes rotate-clock {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes rotate-counter {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes slide-up-fade {
            from { opacity: 0; transform: translateY(60px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .glow-pulse { animation: pulse-glow 3s ease-in-out infinite; }
          .rotate-clock { animation: rotate-clock 40s linear infinite; }
          .rotate-counter { animation: rotate-counter 25s linear infinite; }
          .slide-up { animation: slide-up-fade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        `}</style>

        {/* Subtle industrial background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ background: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,184,169,0.03) 35px, rgba(0,184,169,0.03) 70px)' }}></div>
        </div>

        {/* Large background circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)' }}></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left – Content with new slide-up animation */}
            <div className="space-y-10">
              <div className="inline-block px-6 py-3 rounded-full text-sm font-bold slide-up" style={{ background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.2) 0%, rgba(0, 184, 169, 0.2) 100%)', color: '#FF8C42', border: '2px solid #FF8C42' }}>
                ✨ Future-Proof Your Curriculum
              </div>

              <div className="slide-up" style={{ animationDelay: '0.2s' }}>
                <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                  <span className="block text-gray-900">Parallel</span>
                  <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 100%)' }}>
                    Industrial Courses
                  </span>
                </h1>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed max-w-lg slide-up" style={{ animationDelay: '0.4s' }}>
                Deliver industry-designed courses alongside your academic programs. Equip students with real-world skills and certifications that lead directly to high-demand jobs.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 slide-up" style={{ animationDelay: '0.6s' }}>
                <a href="#inquiry" className="px-8 py-5 rounded-2xl font-bold text-lg text-white shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)' }}>
                  Integrate Courses Now
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </a>
                <a href="#model" className="px-8 py-5 rounded-2xl font-bold text-lg transition-all hover:shadow-xl" style={{ background: 'rgba(0, 184, 169, 0.1)', color: '#00B8A9', border: '2px solid #00B8A9' }}>
                  Explore the Model
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 slide-up" style={{ animationDelay: '0.8s' }}>
                {[['300+', 'Live Courses', '#FF8C42'], ['500+', 'Industry Partners', '#00B8A9'], ['92%', 'Placement Increase', '#4A90E2']].map((stat, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white shadow-md text-center">
                    <div className="text-4xl font-black mb-2" style={{ color: stat[2] }}>
                      <AnimatedCounter end={parseInt(stat[0])} suffix={stat[0].includes('+') ? '+' : stat[0].includes('%') ? '%' : ''} />
                    </div>
                    <div className="text-sm font-bold text-gray-600">{stat[1]}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – New layered rotating industrial machinery animation */}
            <div className="relative h-96 lg:h-full flex items-center justify-center">
              <div className="relative w-full max-w-xl h-full">
                {/* Central glowing core */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glow-pulse w-56 h-56 rounded-full flex items-center justify-center text-9xl shadow-2xl" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF4500 100%)' }}>
                    ⚙️
                  </div>
                </div>

                {/* Counter-clockwise inner ring */}
                <div className="rotate-counter absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-3xl shadow-2xl flex items-center justify-center text-6xl" style={{ background: 'linear-gradient(135deg, #00B8A9 0%, #008f7f 100%)' }}>🔧</div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-32 rounded-3xl shadow-2xl flex items-center justify-center text-6xl" style={{ background: 'linear-gradient(135deg, #4A90E2 0%, #357ABD 100%)' }}>🛠️</div>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl shadow-2xl flex items-center justify-center text-6xl" style={{ background: 'linear-gradient(135deg, #50C878 0%, #3DAE5E 100%)' }}>🧰</div>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl shadow-2xl flex items-center justify-center text-6xl" style={{ background: 'linear-gradient(135deg, #FFB800 0%, #E5A200 100%)' }}>⚡</div>
                  </div>
                </div>

                {/* Clockwise outer ring */}
                <div className="rotate-clock absolute inset-0 flex items-center justify-center" style={{ animationDuration: '50s' }}>
                  <div className="relative w-full h-full">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-24 rounded-2xl shadow-xl flex items-center justify-center text-5xl" style={{ background: 'linear-gradient(135deg, rgba(255,140,66,0.95) 0%, rgba(255,69,0,0.95) 100%)' }}>🏆</div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-24 h-24 rounded-2xl shadow-xl flex items-center justify-center text-5xl" style={{ background: 'linear-gradient(135deg, rgba(0,184,169,0.95) 0%, rgba(0,137,127,0.95) 100%)' }}>📈</div>
                    <div className="absolute left-8 top-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl shadow-xl flex items-center justify-center text-5xl" style={{ background: 'linear-gradient(135deg, rgba(74,144,226,0.95) 0%, rgba(53,122,189,0.95) 100%)' }}>💼</div>
                    <div className="absolute right-8 top-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl shadow-xl flex items-center justify-center text-5xl" style={{ background: 'linear-gradient(135deg, rgba(255,182,0,0.95) 0%, rgba(229,162,0,0.95) 100%)' }}>🚀</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="mt-20 flex items-center justify-center gap-8 py-6 rounded-3xl shadow-lg" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 100%)' }}>
          <span className="text-white font-bold text-lg">✓ Industry-Crafted Content</span>
          <span className="text-white/50">•</span>
          <span className="text-white font-bold text-lg">✓ Certified Outcomes</span>
          <span className="text-white/50">•</span>
          <span className="text-white font-bold text-lg">✓ Seamless Integration</span>
        </div>
      </section>

      {/* Parallel Model Section – New layout with horizontal timeline feel */}
      <AnimatedSection delay={100} id="model">
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block px-8 py-4 rounded-full text-lg font-bold mb-8" style={{ background: 'rgba(255,140,66,0.1)', color: '#FF8C42', border: '3px solid #FF8C42' }}>
                The Integration Model
              </div>
              <h2 className="text-5xl lg:text-6xl font-black" style={{ color: '#1A4D4D' }}>
                How Parallel Courses Work
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#FF8C42] to-[#00B8A9] hidden lg:block"></div>

              {[
                { title: 'Academic Core', desc: 'Your existing degree program remains unchanged', icon: '🎓', side: 'left' },
                { title: 'Parallel Industrial Track', desc: 'Students opt-in to industry courses delivered by experts', icon: '🏭', side: 'right' },
                { title: 'Certifications & Projects', desc: 'Real-world projects and recognized credentials', icon: '🏆', side: 'left' },
                { title: 'Direct Placement Pathways', desc: 'Graduates enter jobs with proven skills', icon: '🚀', side: 'right' }
              ].map((step, idx) => (
                <div key={idx} className={`relative flex items-center mb-20 ${step.side === 'left' ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-white border-8 border-gray-100 shadow-xl flex items-center justify-center text-4xl z-10 hidden lg:flex">
                    {step.icon}
                  </div>
                  <div className="flex-1 p-8 rounded-3xl shadow-xl bg-gradient-to-br from-gray-50 to-white">
                    <h3 className="text-3xl font-bold mb-4" style={{ color: idx % 2 === 0 ? '#FF8C42' : '#00B8A9' }}>{step.title}</h3>
                    <p className="text-lg text-gray-700">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Outcomes Section – New staggered card layout with depth */}
      <AnimatedSection delay={100}>
        <section className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8fdff 0%, #f0f9f9 100%)' }}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-6xl font-black mb-6" style={{ color: '#1A4D4D' }}>
                Transformative <span style={{ color: '#FF8C42' }}>Outcomes</span>
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Measurable impact for both students and your institution
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {outcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="relative p-10 rounded-3xl shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-3xl"
                  style={{
                    background: `linear-gradient(135deg, ${outcome.color}10 0%, white 100%)`,
                    border: `3px solid ${outcome.color}40`,
                    transform: `translateY(${idx % 2 === 0 ? '40px' : '0px'})`
                  }}
                >
                  <div className="text-7xl mb-6">{outcome.icon}</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">{outcome.category}</div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: outcome.color }}>{outcome.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Full Inquiry Form Section */}
      <AnimatedSection delay={100}>
        <section id="inquiry" className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl lg:text-6xl font-black mb-6 text-gray-900">
                Ready to Launch <span style={{ color: '#00B8A9' }}>Industrial Courses</span>?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Share your department details and goals. Our team will propose a customized integration plan within 48 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 space-y-12">
              {/* Institution & Department */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="text-4xl mr-6">🏫</div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Institution & Department</h3>
                    <p className="text-gray-600 mt-2">Tell us about your university and program</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">Institution Name *</label>
                    <input
                      type="text"
                      name="institutionName"
                      value={formData.institutionName}
                      onChange={handleChange}
                      placeholder="Your University"
                      className={`w-full px-6 py-4 rounded-2xl border-2 text-lg transition-all focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                        errors.institutionName ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:border-[#FF8C42] focus:ring-[#FF8C42]/20'
                      }`}
                    />
                    {errors.institutionName && <p className="text-red-600 text-sm mt-3 flex items-center"><span className="mr-2">⚠️</span>{errors.institutionName}</p>}
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">Department / Faculty *</label>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      placeholder="e.g., Computer Science"
                      className={`w-full px-6 py-4 rounded-2xl border-2 text-lg transition-all focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                        errors.department ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:border-[#FF8C42] focus:ring-[#FF8C42]/20'
                      }`}
                    />
                    {errors.department && <p className="text-red-600 text-sm mt-3 flex items-center"><span className="mr-2">⚠️</span>{errors.department}</p>}
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">Institution Type *</label>
                    <select
                      name="institutionType"
                      value={formData.institutionType}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 rounded-2xl border-2 text-lg transition-all focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                        errors.institutionType ? 'border-red-500' : 'border-gray-300 focus:border-[#FF8C42]'
                      }`}
                    >
                      <option value="">Select type</option>
                      <option value="University">University</option>
                      <option value="College">College</option>
                      <option value="Technical Institute">Technical Institute</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">Student Cohort Size *</label>
                    <select
                      name="studentCount"
                      value={formData.studentCount}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 rounded-2xl border-2 text-lg transition-all focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                        errors.studentCount ? 'border-red-500' : 'border-gray-300 focus:border-[#FF8C42]'
                      }`}
                    >
                      <option value="">Select range</option>
                      <option value="100-500">100–500</option>
                      <option value="500-2000">500–2,000</option>
                      <option value="2000-5000">2,000–5,000</option>
                      <option value="5000+">5,000+</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-200 my-8"></div>

              {/* Goals & Timeline */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="text-4xl mr-6">🎯</div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Your Goals</h3>
                    <p className="text-gray-600 mt-2">What are you hoping to achieve?</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">Primary Objectives</label>
                    <textarea
                      name="integrationGoals"
                      value={formData.integrationGoals}
                      onChange={handleChange}
                      rows="5"
                      placeholder="e.g., boost tech employability, add industry certifications to engineering program..."
                      className="w-full px-6 py-4 rounded-2xl border-2 border-gray-300 focus:border-[#00B8A9] focus:outline-none focus:ring-4 focus:ring-[#00B8A9]/20 text-lg resize-none"
                    ></textarea>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-lg font-bold text-gray-900 mb-3">Preferred Launch Timeline</label>
                      <select
                        name="preferredTimeline"
                        value={formData.preferredTimeline}
                        onChange={handleChange}
                        className="w-full px-6 py-4 rounded-2xl border-2 border-gray-300 focus:border-[#00B8A9] focus:outline-none focus:ring-4 focus:ring-[#00B8A9]/20 text-lg"
                      >
                        <option value="">Select timeline</option>
                        <option value="Next semester">Next semester</option>
                        <option value="Within 6 months">Within 6 months</option>
                        <option value="Within 12 months">Within 12 months</option>
                        <option value="Just exploring">Just exploring</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-lg font-bold text-gray-900 mb-3">Specific Requirements or Focus Areas</label>
                      <textarea
                        name="specificRequirements"
                        value={formData.specificRequirements}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Target industries, skills, credit needs..."
                        className="w-full px-6 py-4 rounded-2xl border-2 border-gray-300 focus:border-[#00B8A9] focus:outline-none focus:ring-4 focus:ring-[#00B8A9]/20 text-lg resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-gray-200 my-8"></div>

              {/* Contact */}
              <div>
                <div className="flex items-center mb-8">
                  <div className="text-4xl mr-6">📞</div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">Contact Person</h3>
                    <p className="text-gray-600 mt-2">Who should we connect with?</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">Full Name *</label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder="Dr. Jane Smith"
                      className={`w-full px-6 py-4 rounded-2xl border-2 text-lg transition-all focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                        errors.contactPerson ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:border-[#4A90E2] focus:ring-[#4A90E2]/20'
                      }`}
                    />
                    {errors.contactPerson && <p className="text-red-600 text-sm mt-3 flex items-center"><span className="mr-2">⚠️</span>{errors.contactPerson}</p>}
                  </div>

                  <div>
                    <label className="block text-lg font-bold text-gray-900 mb-3">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@university.edu"
                      className={`w-full px-6 py-4 rounded-2xl border-2 text-lg transition-all focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                        errors.email ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:border-[#4A90E2] focus:ring-[#4A90E2]/20'
                      }`}
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-3 flex items-center"><span className="mr-2">⚠️</span>{errors.email}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-lg font-bold text-gray-900 mb-3">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+49 123 456 7890"
                      className={`w-full px-6 py-4 rounded-2xl border-2 text-lg transition-all focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                        errors.phone ? 'border-red-500 focus:ring-red-300' : 'border-gray-300 focus:border-[#4A90E2] focus:ring-[#4A90E2]/20'
                      }`}
                    />
                    {errors.phone && <p className="text-red-600 text-sm mt-3 flex items-center"><span className="mr-2">⚠️</span>{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-6 rounded-3xl font-bold text-xl text-white shadow-2xl transition-all hover:shadow-3xl hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-4"
                  style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF4500 100%)' }}
                >
                  {formStatus === 'sending' ? (
                    <>⏳ Sending Inquiry...</>
                  ) : (
                    <>✨ Submit Integration Request</>
                  )}
                </button>
              </div>

              {formStatus === 'success' && (
                <div className="p-6 rounded-2xl text-center font-bold text-green-800 bg-green-100">
                  ✓ Success! We'll contact you within 48 hours with a tailored plan.
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-6 rounded-2xl text-center font-bold text-red-800 bg-red-100">
                  ⚠️ Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
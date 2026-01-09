import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CompaniesPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  const benefits = [
    { title: 'Zero Financial Cost', description: 'Benefit from fully funded intern support, backed by universities - no hiring fees or hidden costs.', icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )},
    { title: 'Instant Support', description: 'Bring on qualified interns within days to tackle overdue projects and reduce backlogs.', icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )},
    { title: 'Effortless Matching', description: 'Receive intern recommendations that fit your goals, or browse candidates independently.', icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )},
    { title: 'Pre-Screened Talent', description: 'Access a global pool of skilled, motivated interns ready to contribute from day one.', icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )},
    { title: 'Ready-Made Projects', description: 'Choose from 500+ project templates to streamline setup and get results faster.', icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )},
    { title: 'Access Anywhere', description: 'Seamlessly onboard and manage interns from anywhere with our remote-first platform.', icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )}
  ];

  const industries = [
    { name: 'Technology', icon: '💻', roles: 'Software, Data, AI' },
    { name: 'Marketing', icon: '📊', roles: 'Digital, Content, SEO' },
    { name: 'Finance', icon: '💰', roles: 'Analysis, Accounting' },
    { name: 'Design', icon: '🎨', roles: 'UI/UX, Graphic, Brand' },
    { name: 'Operations', icon: '⚙️', roles: 'Project, Admin, HR' },
    { name: 'Consulting', icon: '💼', roles: 'Strategy, Research' },
  ];

  const testimonials = [
    {
      company: 'Tribe Global',
      person: 'Elaine Miller',
      role: 'Global Operations Manager',
      image: '/Natalie.png',
      quote: 'Virtual Internships is an extension of our HR department. The fresh perspectives and ideas our interns bring to company challenges have been invaluable.',
    },
    {
      company: 'REEF Scuba',
      person: 'Graham Patterson',
      role: 'Founder & Executive Director',
      image: '/Nathan.png',
      quote: 'We successfully connected with exceptional interns worldwide and benefited immensely from the cultural knowledge exchange.',
    },
    {
      company: 'WRKR Technology',
      person: 'Brigitte Perenyi',
      role: 'Co-Founder',
      image: '/Jocelyn.png',
      quote: 'Working with diverse interns brought unique approaches to problems and fresh perspectives that transformed how we operate.',
    },
  ];

  const faqs = [
    {
      question: 'What does it cost to host an intern?',
      answer: 'Zero. Our internship programs are fully funded by partner universities, meaning there are no fees or hidden costs for your company.'
    },
    {
      question: 'How quickly can I get an intern?',
      answer: 'Typically within days. Once you post your role, we match you with qualified candidates quickly, and you can start interviewing right away.'
    },
    {
      question: 'What kind of work can interns do?',
      answer: 'Interns can handle a wide range of tasks including marketing, business development, data analysis, software development, research, design, and more. We have 500+ project templates to help you get started.'
    },
    {
      question: 'Are the interns pre-screened?',
      answer: 'Yes. All interns go through our vetting process to ensure they have the skills, motivation, and professionalism needed to contribute effectively to your projects.'
    },
    {
      question: 'Is this only for remote work?',
      answer: 'Yes, our platform is designed for remote internships, allowing you to access global talent regardless of location.'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{background: 'linear-gradient(135deg, #0A2A2A 0%, #1A4D4D 50%, #00B8A9 100%)'}}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 backdrop-blur-xl" style={{ background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.2) 0%, rgba(255, 140, 66, 0.1) 100%)', border: '1px solid rgba(255, 140, 66, 0.3)' }}>
                <svg className="w-5 h-5" style={{ color: '#FF8C42' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span style={{ color: '#FF8C42' }} className="font-semibold text-sm">For Companies</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white">
                Achieve More With <span style={{background: 'linear-gradient(135deg, #FF8C42 0%, #FFB88C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Ready-to-Work Interns</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-10 text-white/80 leading-relaxed">
                Connect with driven, pre-screened interns, allowing you to overcome project backlogs, boost productivity, and make a real impact - all at zero cost to your business.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:-translate-y-1 text-white" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)', boxShadow: '0 20px 40px rgba(255, 140, 66, 0.4)' }}>
                  <span>Hire Interns Now</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <a href="#how-it-works" className="px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 text-white" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '2px solid rgba(255, 255, 255, 0.3)' }}>
                  How It Works
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-white/60">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">No Cost</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Pre-Screened</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Remote-First</span>
                </div>
              </div>
            </div>

            {/* Hero Image with floating cards */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3)' }}>
                <img src="/abce.png" alt="Professional handshake" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.2) 0%, transparent 100%)' }}></div>
              </div>
              
              {/* Floating stat cards */}
              <div className="absolute -left-8 top-20 bg-white rounded-2xl p-4 shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 184, 169, 0.1)' }}>
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: '#00B8A9' }}>88%</p>
                    <p className="text-xs text-gray-500">Success Rate</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-20 bg-white rounded-2xl p-4 shadow-2xl animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 140, 66, 0.1)' }}>
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: '#FF8C42' }}>$6K</p>
                    <p className="text-xs text-gray-500">Avg. Saved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255, 140, 66, 0.1)', color: '#FF8C42' }}>
              ✨ Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
              Everything You Need to Scale
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform provides all the tools and support you need to find, hire, and manage top intern talent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '1px solid rgba(0,0,0,0.05)'
                }}
              >
                <div className="absolute top-0 left-0 w-1 h-full transition-all duration-500 group-hover:w-2" style={{backgroundColor: index % 2 === 0 ? '#FF8C42' : '#00B8A9'}}></div>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle, ${index % 2 === 0 ? 'rgba(255,140,66,0.1)' : 'rgba(0,184,169,0.1)'} 0%, transparent 70%)` }}></div>
                
                <div className="relative">
                  <div 
                    className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${index % 2 === 0 ? '#FF8C42' : '#00B8A9'} 0%, ${index % 2 === 0 ? '#FF6B2B' : '#1A4D4D'} 100%)`,
                      color: '#FFFFFF'
                    }}
                  >
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#1A4D4D' }}>{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(0, 184, 169, 0.1)', color: '#00B8A9' }}>
                🎯 Industries We Serve
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
                Interns for Every Department
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                From tech startups to established enterprises, we provide skilled interns across all major industries and functions.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <span className="text-3xl">{industry.icon}</span>
                    <div>
                      <p className="font-semibold" style={{ color: '#1A4D4D' }}>{industry.name}</p>
                      <p className="text-sm text-gray-500">{industry.roles}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/happy-guy-eyeglasses-holding-tablet.jpg" 
                alt="Business professional" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img src="/Jack.png" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                    <img src="/Jocelyn.png" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                    <img src="/Maab.png" alt="Team member" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  </div>
                  <div>
                    <p className="font-bold" style={{ color: '#1A4D4D' }}>500+ Projects</p>
                    <p className="text-sm text-gray-500">Ready to start</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #0A2A2A 0%, #1A4D4D 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Access a Pool of Ambitious Talent
            </h2>
            <p className="text-xl text-white/70">Numbers that speak for themselves</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '88%', label: 'of companies would give a positive reference for their interns', icon: '⭐' },
              { value: '$6,000', label: 'saved on average per intern hired when using our platform', icon: '💵' },
              { value: '1 in 3', label: 'companies offer their interns further opportunities upon completion', icon: '🎯' },
              { value: '500+', label: 'ready-made internship project plans for you to select', icon: '📋' },
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-extrabold mb-4" style={{ color: idx % 2 === 0 ? '#00B8A9' : '#FF8C42' }}>
                  {stat.value}
                </div>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(0, 184, 169, 0.1)', color: '#00B8A9' }}>
              🚀 Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
              How It Works
            </h2>
            <p className="text-xl text-gray-600">Get started in four simple steps</p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-teal-400 to-orange-400 opacity-20"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Post Your Role', desc: 'Share your internship requirements and project details with us', icon: '📝' },
                { step: 2, title: 'We Match', desc: 'We find pre-screened candidates that fit your needs', icon: '🔍' },
                { step: 3, title: 'Interview', desc: 'Meet candidates and select your ideal intern', icon: '🤝' },
                { step: 4, title: 'Start Working', desc: 'Onboard your intern and begin making progress', icon: '🚀' },
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full text-center border border-gray-100">
                    <div className="relative inline-flex items-center justify-center mb-6">
                      <div 
                        className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold relative z-10"
                        style={{ background: idx % 2 === 0 ? 'linear-gradient(135deg, #00B8A9, #1A4D4D)' : 'linear-gradient(135deg, #FF8C42, #FF6B2B)' }}
                      >
                        <span className="text-3xl">{item.icon}</span>
                      </div>
                      <div 
                        className="absolute inset-0 rounded-full blur-lg opacity-30"
                        style={{ backgroundColor: idx % 2 === 0 ? '#00B8A9' : '#FF8C42' }}
                      ></div>
                    </div>
                    <div className="text-sm font-bold mb-2" style={{ color: idx % 2 === 0 ? '#00B8A9' : '#FF8C42' }}>Step {item.step}</div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#1A4D4D' }}>{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#00B8A9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Companies Say
            </h2>
            <p className="text-xl text-white/80">Hear from companies who have transformed their hiring process</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].person}
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
                <div className="flex-1 text-center md:text-left">
                  <svg className="w-10 h-10 mb-4 mx-auto md:mx-0" style={{ color: '#FF8C42' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonials[activeTestimonial].quote}"
                  </p>
                  <div>
                    <p className="font-bold text-lg" style={{ color: '#1A4D4D' }}>{testimonials[activeTestimonial].person}</p>
                    <p className="text-gray-500">{testimonials[activeTestimonial].role}, {testimonials[activeTestimonial].company}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeTestimonial ? 'w-8 bg-white' : 'bg-white/40 hover:bg-white/60'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img src="/portrait-happy-young-man-eyeglasses.jpg" alt="Happy intern" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
                <img src="/front-view-young-female-student-red-shirt-black-bag-using-laptop-white.jpg" alt="Intern working" className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8" />
                <img src="/front-view-young-female-student-red-t-shirt-black-jeans-holding-copybook-white.jpg" alt="Career placement" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
                <img src="/young-man-work-with-laptop-computer-front-white-studio-wall.jpg" alt="Team collaboration" className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8" />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255, 140, 66, 0.1)', color: '#FF8C42' }}>
                🌟 Global Talent
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
                Interns from Top Universities Worldwide
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our interns come from 200+ partner universities across 60+ countries, bringing diverse perspectives and cutting-edge skills to your projects.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: '🎓', text: '200+ Partner Universities' },
                  { icon: '🌍', text: '60+ Countries Represented' },
                  { icon: '📚', text: 'All Major Fields of Study' },
                  { icon: '✅', text: 'Pre-vetted and Interview-Ready' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-lg text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(0, 184, 169, 0.1)', color: '#00B8A9' }}>
              FAQs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-lg" style={{ color: '#1A4D4D' }}>{faq.question}</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} 
                    style={{ color: '#00B8A9' }}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="px-6 pb-6 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)' }}>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{backgroundColor: '#FFFFFF'}}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{backgroundColor: '#FFFFFF'}}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Ready to Hire Top Talent?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto">
            Join 18,000+ companies leveraging our platform to drive growth and innovation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="group flex items-center gap-3 px-10 py-5 bg-white rounded-2xl font-bold text-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300" style={{ color: '#FF8C42' }}>
              <span>Hire Interns Now</span>
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <Link to="/companies/contact">
            <button className="px-10 py-5 rounded-2xl font-bold text-xl text-white transition-all duration-300 hover:-translate-y-1" style={{ border: '2px solid rgba(255,255,255,0.5)', backgroundColor: 'rgba(255,255,255,0.1)' }}>
              Schedule a Call
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

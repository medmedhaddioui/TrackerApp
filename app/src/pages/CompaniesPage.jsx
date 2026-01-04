export default function CompaniesPage() {
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
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3)' }}>
                <img src="/career-placement-girl.png" alt="Professional working" className="w-full h-auto object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.2) 0%, transparent 100%)' }}></div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -left-8 bottom-8 p-4 rounded-2xl backdrop-blur-xl animate-bounce" style={{ background: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)', animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00B8A9 0%, #1A4D4D 100%)' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: '#1A4D4D' }}>$0 Cost</div>
                    <div className="text-xs" style={{ color: '#2D2D2D' }}>Zero hiring fees</div>
                  </div>
                </div>
              </div>

              {/* Another floating card */}
              <div className="absolute -right-4 top-8 p-4 rounded-2xl backdrop-blur-xl" style={{ background: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: '#1A4D4D' }}>15,000+</div>
                    <div className="text-xs" style={{ color: '#2D2D2D' }}>Companies Trust Us</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6" style={{ background: 'linear-gradient(135deg, rgba(0,184,169,0.1) 0%, rgba(255,140,66,0.1) 100%)' }}>
            <svg className="w-5 h-5" style={{ color: '#00B8A9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold text-sm" style={{ color: '#00B8A9' }}>Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#1A4D4D'}}>
            Tackle Your Talent Needs with Zero Overheads
          </h2>
          <p className="text-xl md:text-2xl max-w-5xl mx-auto font-light" style={{color: '#2D2D2D', lineHeight: '1.7'}}>
            As we face a global skills gap, finding diverse talent and building talent pipelines is a priority for business leaders worldwide. Our platform provides the support you need to onboard the right interns quickly.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(0,184,169,0.03) 50%, #FFFFFF 100%)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{color: '#1A4D4D'}}>
              Get Work Done & Make an Impact
            </h2>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light" style={{color: '#2D2D2D', lineHeight: '1.7'}}>
              Our platform connects you with ambitious interns worldwide. With built-in support and pre-screened talent, you can move projects forward while shaping the next generation of professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
                <div className="absolute top-0 left-0 w-1 h-full transition-all duration-500 group-hover:w-2" style={{backgroundColor: index % 2 === 0 ? '#FF8C42' : '#00B8A9'}}></div>
                <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl" style={{backgroundColor: index % 2 === 0 ? 'rgba(255,140,66,0.2)' : 'rgba(0,184,169,0.2)'}}></div>
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" style={{background: `linear-gradient(135deg, ${index % 2 === 0 ? '#FF8C42' : '#00B8A9'} 0%, ${index % 2 === 0 ? '#FF6B2B' : '#1A4D4D'} 100%)`, color: '#FFFFFF', boxShadow: `0 10px 30px ${index % 2 === 0 ? 'rgba(255,140,66,0.3)' : 'rgba(0,184,169,0.3)'}`}}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{color: '#1A4D4D'}}>{benefit.title}</h3>
                  <p className="text-base leading-relaxed" style={{color: '#2D2D2D', opacity: 0.9}}>
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20" style={{color: '#1A4D4D'}}>
            Access a Pool of Ambitious Talent
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group relative text-center p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden" style={{backgroundColor: 'white', border: '2px solid rgba(0,184,169,0.2)'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at center, rgba(0,184,169,0.1) 0%, transparent 70%)'}}></div>
              <div className="relative">
                <div className="text-6xl font-extrabold mb-4" style={{color: '#00B8A9', textShadow: '0 0 30px rgba(0,184,169,0.3)'}}>88%</div>
                <p className="font-semibold text-base" style={{color: '#2D2D2D'}}>
                  of companies would give a positive reference for their interns
                </p>
              </div>
            </div>

            <div className="group relative text-center p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden" style={{backgroundColor: 'white', border: '2px solid rgba(255,140,66,0.2)'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at center, rgba(255,140,66,0.1) 0%, transparent 70%)'}}></div>
              <div className="relative">
                <div className="text-6xl font-extrabold mb-4" style={{color: '#FF8C42', textShadow: '0 0 30px rgba(255,140,66,0.3)'}}>$6,000</div>
                <p className="font-semibold text-base" style={{color: '#2D2D2D'}}>
                  saved on average per intern hired when using our platform
                </p>
              </div>
            </div>

            <div className="group relative text-center p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden" style={{backgroundColor: 'white', border: '2px solid rgba(0,184,169,0.2)'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at center, rgba(0,184,169,0.1) 0%, transparent 70%)'}}></div>
              <div className="relative">
                <div className="text-6xl font-extrabold mb-4" style={{color: '#00B8A9', textShadow: '0 0 30px rgba(0,184,169,0.3)'}}>1 in 3</div>
                <p className="font-semibold text-base" style={{color: '#2D2D2D'}}>
                  companies offer their interns further opportunities immediately upon completion
                </p>
              </div>
            </div>

            <div className="group relative text-center p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden" style={{backgroundColor: 'white', border: '2px solid rgba(255,140,66,0.2)'}}>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at center, rgba(255,140,66,0.1) 0%, transparent 70%)'}}></div>
              <div className="relative">
                <div className="text-6xl font-extrabold mb-4" style={{color: '#FF8C42', textShadow: '0 0 30px rgba(255,140,66,0.3)'}}>500+</div>
                <p className="font-semibold text-base" style={{color: '#2D2D2D'}}>
                  ready-made internship project plans for you to select (or create your own)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-32 px-4 sm:px-6 lg:px-8" style={{background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(0,184,169,0.03) 50%, #FFFFFF 100%)'}}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 rounded-full text-sm font-bold mb-6 backdrop-blur-sm" style={{ backgroundColor: 'rgba(0,184,169,0.15)', color: '#00B8A9', border: '2px solid rgba(0,184,169,0.3)' }}>
              Simple Process
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{color: '#1A4D4D'}}>How It Works</h2>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto" style={{color: '#2D2D2D'}}>Get started in four simple steps</p>
          </div>

          <div className="relative">
            {/* Progress line */}
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 -z-0" style={{ background: 'linear-gradient(90deg, #00B8A9 0%, #FF8C42 100%)', opacity: 0.2 }}></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-3 border-2 border-transparent hover:border-opacity-30" style={{ borderColor: '#00B8A9' }}>
                <div className="relative inline-flex items-center justify-center mb-8">
                  <div className="absolute inset-0 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" style={{ backgroundColor: '#00B8A9' }}></div>
                  <div className="relative w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00B8A9' }}>
                    <span className="text-3xl font-bold text-white">1</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 transition-colors" style={{color: '#1A4D4D'}}>Post Your Role</h3>
                <p className="leading-relaxed text-base" style={{color: '#2D2D2D', opacity: 0.9}}>Share your internship requirements and project details with us</p>
              </div>

              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-3 border-2 border-transparent hover:border-opacity-30" style={{ borderColor: '#FF8C42' }}>
                <div className="relative inline-flex items-center justify-center mb-8">
                  <div className="absolute inset-0 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" style={{ backgroundColor: '#FF8C42' }}></div>
                  <div className="relative w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF8C42' }}>
                    <span className="text-3xl font-bold text-white">2</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 transition-colors" style={{color: '#1A4D4D'}}>We Match</h3>
                <p className="leading-relaxed text-base" style={{color: '#2D2D2D', opacity: 0.9}}>We find pre-screened candidates that fit your needs</p>
              </div>

              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-3 border-2 border-transparent hover:border-opacity-30" style={{ borderColor: '#00B8A9' }}>
                <div className="relative inline-flex items-center justify-center mb-8">
                  <div className="absolute inset-0 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" style={{ backgroundColor: '#00B8A9' }}></div>
                  <div className="relative w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00B8A9' }}>
                    <span className="text-3xl font-bold text-white">3</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 transition-colors" style={{color: '#1A4D4D'}}>Interview</h3>
                <p className="leading-relaxed text-base" style={{color: '#2D2D2D', opacity: 0.9}}>Meet candidates and select your ideal intern</p>
              </div>

              <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full transform hover:-translate-y-3 border-2 border-transparent hover:border-opacity-30" style={{ borderColor: '#FF8C42' }}>
                <div className="relative inline-flex items-center justify-center mb-8">
                  <div className="absolute inset-0 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" style={{ backgroundColor: '#FF8C42' }}></div>
                  <div className="relative w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF8C42' }}>
                    <span className="text-3xl font-bold text-white">4</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 transition-colors" style={{color: '#1A4D4D'}}>Start Working</h3>
                <p className="leading-relaxed text-base" style={{color: '#2D2D2D', opacity: 0.9}}>Onboard your intern and begin making progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#00B8A9' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
            "Virtual Internships is an Extension of our HR Department"
          </h2>
          <p className="text-center text-white text-xl mb-16 opacity-90">
            Hear from companies who have transformed their hiring process
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 rounded-t-3xl" style={{backgroundColor: '#FF8C42'}}></div>
              <p className="text-lg italic mb-8 leading-relaxed" style={{ color: '#2D2D2D' }}>
                "This remote-first, global marketing consultancy gained valuable insights from their virtual interns, welcoming the fresh perspectives and ideas they bought to company challenges."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(255,140,66,0.15)'}}>
                  <div className="w-6 h-6 rounded-full" style={{backgroundColor: '#FF8C42'}}></div>
                </div>
                <div>
                  <p className="font-bold text-lg" style={{ color: '#1A4D4D' }}>Elaine Miller</p>
                  <p className="text-sm" style={{ color: '#2D2D2D', opacity: 0.7 }}>Global Operations Manager, Tribe Global</p>
                </div>
              </div>
            </div>

            <div className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 rounded-t-3xl" style={{backgroundColor: '#1A4D4D'}}></div>
              <p className="text-lg italic mb-8 leading-relaxed" style={{ color: '#2D2D2D' }}>
                "This US organization successfully leveraged the platform to connect with exceptional interns worldwide and benefit from the exchange of cultural knowledge."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(26,77,77,0.15)'}}>
                  <div className="w-6 h-6 rounded-full" style={{backgroundColor: '#1A4D4D'}}></div>
                </div>
                <div>
                  <p className="font-bold text-lg" style={{ color: '#1A4D4D' }}>Graham Patterson</p>
                  <p className="text-sm" style={{ color: '#2D2D2D', opacity: 0.7 }}>Founder & Executive Director, REEF Scuba</p>
                </div>
              </div>
            </div>

            <div className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-full h-2 rounded-t-3xl" style={{backgroundColor: '#FF8C42'}}></div>
              <p className="text-lg italic mb-8 leading-relaxed" style={{ color: '#2D2D2D' }}>
                "This tech company felt the immense contribution of working with diverse interns through their unique approaches to problems, and the fresh perspectives brought to the company."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(255,140,66,0.15)'}}>
                  <div className="w-6 h-6 rounded-full" style={{backgroundColor: '#FF8C42'}}></div>
                </div>
                <div>
                  <p className="font-bold text-lg" style={{ color: '#1A4D4D' }}>Brigitte Perenyi</p>
                  <p className="text-sm" style={{ color: '#2D2D2D', opacity: 0.7 }}>Co-Founder, WRKR Technology Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-32 px-4 sm:px-6 lg:px-8" style={{background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,140,66,0.03) 50%, #FFFFFF 100%)'}}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>Frequently Asked Questions</h2>
            <p className="text-xl font-light" style={{color: '#2D2D2D'}}>Everything you need to know about hiring interns</p>
          </div>
          <div className="space-y-6">
            <div className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4" style={{ borderColor: '#00B8A9' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A4D4D' }}>What does it cost to host an intern?</h3>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D', opacity: 0.9 }}>
                Zero. Our internship programs are fully funded by partner universities, meaning there are no fees or hidden costs for your company.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4" style={{ borderColor: '#FF8C42' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A4D4D' }}>How quickly can I get an intern?</h3>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D', opacity: 0.9 }}>
                Typically within days. Once you post your role, we match you with qualified candidates quickly, and you can start interviewing right away.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4" style={{ borderColor: '#00B8A9' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A4D4D' }}>What kind of work can interns do?</h3>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D', opacity: 0.9 }}>
                Interns can handle a wide range of tasks including marketing, business development, data analysis, software development, research, design, and more. We have 500+ project templates to help you get started.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4" style={{ borderColor: '#FF8C42' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A4D4D' }}>Are the interns pre-screened?</h3>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D', opacity: 0.9 }}>
                Yes. All interns go through our vetting process to ensure they have the skills, motivation, and professionalism needed to contribute effectively to your projects.
              </p>
            </div>
            
            <div className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4" style={{ borderColor: '#00B8A9' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A4D4D' }}>Is this only for remote work?</h3>
              <p className="text-base leading-relaxed" style={{ color: '#2D2D2D', opacity: 0.9 }}>
                Yes, our platform is designed for remote internships, allowing you to access global talent regardless of location. This gives you flexibility and access to a much larger talent pool.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: '#FF8C42' }}>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{backgroundColor: '#FFFFFF'}}></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{backgroundColor: '#FFFFFF'}}></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">
            Find Top Talent and Hire Remote Interns Today
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white opacity-95 font-light max-w-3xl mx-auto">
            Join hundreds of companies leveraging our platform to drive growth and innovation
          </p>
          <button className="group px-12 py-6 bg-white rounded-xl font-bold text-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden" style={{ color: '#FF8C42' }}>
            <span className="relative z-10">Hire Interns Now</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(45deg, rgba(0,184,169,0.1) 0%, transparent 100%)' }}></div>
          </button>
        </div>
      </section>
    </div>
  );
}

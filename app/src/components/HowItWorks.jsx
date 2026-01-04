export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Sign up as an intern, company, or educator. Complete your profile with your goals, skills, and interests to get matched with the perfect opportunities.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Browse & Match',
      description: 'Explore thousands of internship opportunities across 80+ countries. Our platform matches you with positions that align with your career goals and interests.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Start Your Internship',
      description: 'Get onboarded with your host company and begin working on real projects. Receive guidance from industry mentors and develop valuable professional skills.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '04',
      title: 'Build Your Career',
      description: 'Complete your internship, earn certifications, and build your professional network. Leverage your experience to land your dream job or continue growing.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A4D4D 0%, #0A2A2A 100%)' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 backdrop-blur-xl" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span className="font-semibold text-sm text-white">Simple Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">How It Works</h2>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto text-white/80">Get started in four simple steps</p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute top-40 left-0 right-0 h-1 -z-0" style={{ background: 'linear-gradient(90deg, #00B8A9 0%, #FF8C42 100%)', opacity: 0.3 }}></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="group bg-white/10 backdrop-blur-xl p-8 rounded-3xl hover:bg-white/15 transition-all duration-500 h-full transform hover:-translate-y-4 border border-white/10 hover:border-white/20" style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}>
                  {/* Step number circle */}
                  <div className="relative inline-flex items-center justify-center mb-8">
                    <div className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity" style={{ backgroundColor: index % 2 === 0 ? '#00B8A9' : '#FF8C42' }}></div>
                    <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? '#00B8A9' : '#FF8C42'} 0%, ${index % 2 === 0 ? '#1A4D4D' : '#FF6B2B'} 100%)` }}>
                      <span className="text-white">{step.icon}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm font-bold mb-3" style={{ color: index % 2 === 0 ? '#00B8A9' : '#FF8C42' }}>
                    Step {step.number}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-base text-white/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
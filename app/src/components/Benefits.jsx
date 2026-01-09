export function Benefits() {
  const benefits = [
    {
      category: 'For Interns',
      title: 'Launch Your Career',
      description: 'Gain global work experience, develop valuable professional skills, and build meaningful connections that open doors to future opportunities.',
      stat: '95% satisfaction rate',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      category: 'For Companies',
      title: 'Access Top Talent',
      description: 'Connect with pre-vetted, motivated interns ready to contribute to your business. Build your future talent pipeline with remote team members.',
      stat: 'Pre-vetted interns',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      category: 'For Educators',
      title: 'Enhance Curriculum',
      description: 'Seamlessly integrate real-world internships into your programs. Improve student employability and prepare graduates for the modern workforce.',
      stat: '80+ countries',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      category: 'Global Reach',
      title: 'Work From Anywhere',
      description: 'Remote internships mean no geographical barriers. Access opportunities worldwide and work with international companies from your location.',
      stat: '250k+ internships',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      category: 'Career Growth',
      title: 'Real-World Skills',
      description: 'Develop essential career skills through hands-on projects. Learn from industry professionals and gain experience that employers value.',
      stat: 'Industry mentorship',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      category: 'High Success Rate',
      title: 'Get Hired',
      description: 'Our program leads to real results. 1 in 3 interns receive job offers upon completion, turning internships into career opportunities.',
      stat: '1 in 3 hired',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  return (
    <section id="benefits" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(0,184,169,0.05) 50%, #FFFFFF 100%)' }}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)', filter: 'blur(80px)' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6" style={{ background: 'linear-gradient(135deg, rgba(0,184,169,0.1) 0%, rgba(255,140,66,0.1) 100%)', border: '1px solid rgba(0,184,169,0.2)' }}>
            <svg className="w-5 h-5" style={{ color: '#00B8A9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="font-semibold text-sm" style={{ color: '#00B8A9' }}>Proven Results</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#1A4D4D' }}>Global Impact</h2>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>Real outcomes for interns, companies, and educators worldwide</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-gray-100 card-animate">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? 'rgba(0,184,169,0.05)' : 'rgba(255,140,66,0.05)'} 0%, transparent 100%)` }}></div>
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-block px-4 py-2 rounded-full text-xs font-bold" style={{ backgroundColor: index % 2 === 0 ? 'rgba(0,184,169,0.15)' : 'rgba(255,140,66,0.15)', color: index % 2 === 0 ? '#00B8A9' : '#FF8C42' }}>
                    {benefit.category}
                  </div>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 icon-animate" style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? '#00B8A9' : '#FF8C42'} 0%, ${index % 2 === 0 ? '#1A4D4D' : '#FF6B2B'} 100%)`, color: '#FFFFFF' }}>
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mt-2 mb-4 transition-colors duration-300" style={{ color: '#1A4D4D' }}>{benefit.title}</h3>
                <p className="mb-6 leading-relaxed text-base transition-all duration-300" style={{ color: '#2D2D2D', opacity: 0.9 }}>{benefit.description}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="text-2xl font-bold transition-transform duration-300 group-hover:scale-110" style={{ color: index % 2 === 0 ? '#00B8A9' : '#FF8C42' }}>
                    {benefit.stat}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
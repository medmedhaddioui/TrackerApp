import { AnimatedCounter } from './AnimatedCounter';

export function About() {
  const stats = [
    { value: 250, suffix: 'k+', label: 'Global Internships', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )},
    { value: 80, suffix: '+', label: 'Countries', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )},
    { value: 95, suffix: '%', label: 'Intern Satisfaction', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )},
    { value: '1 in 3', suffix: '', label: 'Interns Hired', icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )}
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(0,184,169,0.05) 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-72 h-72 rounded-full opacity-20 float-animation" style={{ background: 'linear-gradient(135deg, #00B8A9 0%, transparent 70%)', filter: 'blur(40px)', animationDelay: '0s' }}></div>
              <div className="absolute -bottom-8 -right-8 w-72 h-72 rounded-full opacity-20 float-animation" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, transparent 70%)', filter: 'blur(40px)', animationDelay: '1s' }}></div>
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden group" style={{ boxShadow: '0 40px 80px rgba(0, 0, 0, 0.15)' }}>
                <img 
                  src="/career-placement-girl.png" 
                  alt="Career success" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-80" style={{ background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.1) 0%, rgba(255, 140, 66, 0.1) 100%)' }}></div>
              </div>

              {/* Stats grid overlay */}
              <div className="absolute -bottom-10 -right-10 grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                  <div key={index} className={`p-5 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 card-animate stagger-${index + 1}`} style={{ background: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center icon-animate" style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? '#00B8A9' : '#FF8C42'} 0%, ${index % 2 === 0 ? '#1A4D4D' : '#FF6B2B'} 100%)`, color: '#FFFFFF' }}>
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-extrabold" style={{ color: index % 2 === 0 ? '#00B8A9' : '#FF8C42' }}>
                      {typeof stat.value === 'number' ? <AnimatedCounter end={stat.value} suffix={stat.suffix} /> : stat.value}
                    </div>
                    <div className="font-medium text-sm" style={{ color: '#1A4D4D' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8" style={{ background: 'linear-gradient(135deg, rgba(0,184,169,0.1) 0%, rgba(255,140,66,0.1) 100%)', border: '1px solid rgba(0,184,169,0.2)' }}>
              <svg className="w-5 h-5" style={{ color: '#00B8A9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold text-sm" style={{ color: '#00B8A9' }}>About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: '#1A4D4D' }}>The Future of Work is Changing. Are You Ready?</h2>
            
            <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#2D2D2D' }}>
              <p>
                As AI technology reshapes industries, work-based learning is more essential than ever. Real-world experience not only empowers learners but also equips employers with fresh talent ready to drive innovation.
              </p>
              <p>
                We connect educators, companies, and interns to create lasting, meaningful impact. Our platform provides access to remote, pre-vetted interns for companies, helps educators seamlessly embed internships into their curriculum, and enables interns to launch their careers with global experience.
              </p>
              <p className="font-medium p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(0,184,169,0.1) 0%, rgba(255,140,66,0.1) 100%)', color: '#1A4D4D', borderLeft: '4px solid #00B8A9' }}>
                What makes us different is our proven track record: 95% intern satisfaction rate and 1 in 3 interns hired post-program completion. We're shaping tomorrow's workforce, one internship at a time.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:-translate-y-1 btn-press" style={{ background: 'linear-gradient(135deg, #00B8A9 0%, #1A4D4D 100%)', color: '#FFFFFF', boxShadow: '0 20px 40px rgba(0, 184, 169, 0.3)' }}>
                <span>Learn More</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
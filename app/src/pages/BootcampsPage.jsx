import { Link } from 'react-router-dom';

export default function BootcampsPage() {
  const benefits = [
    {
      title: 'Drive Employability and Engagement',
      description: 'Connect your learners with employers looking for ambitious talent and improve engagement.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Meaningful Work Experiences',
      description: 'The vetting process ensures all parties are satisfied before, during, and after the internship experience.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Intelligent Placement Matching',
      description: 'We use 400k data points from our network of employers to connect your learners to the best opportunities for them.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Maximise Time Efficiency',
      description: 'Save time on researching and finding relevant employers for your learners. We do all the work for you.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Increase Opportunities',
      description: '10x the number of internship opportunities for your learners when you partner with us.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: '100% Guaranteed Placements',
      description: '100% of your learners in the program will be placed in internships in their specialty in six weeks or less.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Scalable Programming',
      description: 'Partnerships range from 10 to 100,000 learners, ensuring global scalability at any level.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-32" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #1A4D4D 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 backdrop-blur-xl" style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-semibold text-white">FOR BOOTCAMPS</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white">
                Guarantee 100% of Your Learners <span className="opacity-90">Real-World Experience</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-10 text-white/90 max-w-xl">
                Give your learners access to structured, career-aligned remote internships that complement your program, enhance employability, and drive real hiring outcomes
              </p>
              
              <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#FFFFFF', color: '#FF8C42', boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)' }}>
                <span>Book a Demo</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3)' }}>
                <img src="/internship_girl_img.png" alt="Bootcamp learner" className="w-full h-auto object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.2) 0%, transparent 100%)' }}></div>
              </div>
              
              {/* Floating card */}
              <div className="absolute -right-8 bottom-8 p-6 rounded-2xl backdrop-blur-xl" style={{ background: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)' }}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: '#1A4D4D' }}>10x</div>
                    <div className="text-sm" style={{ color: '#2D2D2D' }}>More Opportunities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6" style={{ background: 'linear-gradient(135deg, rgba(0,184,169,0.1) 0%, rgba(0,184,169,0.05) 100%)' }}>
            <svg className="w-5 h-5" style={{ color: '#00B8A9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold text-sm" style={{ color: '#00B8A9' }}>The Challenge</span>
          </div>
          <h2 className="text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
            Fostering Stronger Links Between Education and Employment
          </h2>
          <p className="text-xl max-w-4xl mx-auto" style={{ color: '#2D2D2D' }}>
            Bootcamps provide cutting-edge digital skills - but accessing the workforce with these new skills remains a challenge without practical experience. Employers favor candidates with practical experience, but providing such opportunities poses a significant challenge. It's time to address this issue and equip learners with the skills they need to succeed in the workforce.
          </p>
        </div>
      </div>

      {/* Solution Section */}
      <div className="py-32" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 140, 66, 0.05) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(0, 184, 169, 0.1)' }}>
              <svg className="w-5 h-5" style={{ color: '#00B8A9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold" style={{ color: '#00B8A9' }}>THE SOLUTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              Your Work-Based Learning Solution
            </h2>
            <p className="text-xl mb-4" style={{ color: '#FF8C42', fontWeight: 'bold' }}>
              Bridge the Work Experience Gap with Access to 20,000+ Employer Network
            </p>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
              We support your learners in stacking their education by combining bootcamps and certificate programs with meaningful internship experiences. This approach helps your learners gain technical skills, industry-recognized credentials, and hands-on experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl transition-all duration-500 hover:-translate-y-4 group cursor-pointer"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 140, 66, 0.1)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" style={{
                  background: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 100%)',
                  color: '#FFFFFF'
                }}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1A4D4D' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#2D2D2D', opacity: 0.8 }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(255, 140, 66, 0.1)' }}>
            <svg className="w-5 h-5" style={{ color: '#FF8C42' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-sm font-semibold" style={{ color: '#FF8C42' }}>OUR IMPACT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
            Project-Based Solutions With Results
          </h2>
          <p className="text-xl max-w-4xl mx-auto" style={{ color: '#2D2D2D' }}>
            Increase your learners' employability and help them excel in the dynamic and highly competitive job market
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { number: '100%', label: 'Guaranteed Placements', subtitle: 'In 18+ specialties including cybersecurity, software engineering, and marketing', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
            { number: '20,000+', label: 'Global Employers', subtitle: 'To offer internship placements for your learners', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
            { number: '1 in 3', label: 'Interns', subtitle: 'Companies offer their interns further opportunities immediately upon completion', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' }
          ].map((stat, index) => (
            <div
              key={index}
              className="relative p-10 rounded-3xl text-center transition-all duration-500 hover:-translate-y-4 group"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.1) 0%, rgba(0, 184, 169, 0.1) 100%)',
                border: '2px solid rgba(255, 140, 66, 0.2)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 100%)' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <div className="text-5xl md:text-6xl font-bold mb-4" style={{
                color: '#FF8C42',
                textShadow: '0 2px 10px rgba(255, 140, 66, 0.3)'
              }}>
                {stat.number}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1A4D4D' }}>
                {stat.label}
              </h3>
              <p className="text-sm" style={{ color: '#2D2D2D', opacity: 0.8 }}>
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-3xl p-16 text-center" style={{
          background: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 100%)'
        }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            filter: 'blur(60px)',
            transform: 'translate(30%, -30%)'
          }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full" style={{
            background: 'rgba(26, 77, 77, 0.2)',
            filter: 'blur(60px)',
            transform: 'translate(-30%, 30%)'
          }}></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Empower Your Learners with Work-Based Experience
            </h2>
            <p className="text-xl mb-10 text-white opacity-90">
              Schedule a call with us to discover how you can guarantee 100% of your learners access to global work experience
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#FF8C42',
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)'
              }}
            >
              <span>Request a Demo</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

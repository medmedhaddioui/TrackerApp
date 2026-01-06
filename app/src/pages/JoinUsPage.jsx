import { Link } from 'react-router-dom';

export default function JoinUsPage() {
  const lifeAtVI = [
    { number: '100+', label: "VI-er's" },
    { number: '20', label: 'Countries' },
    { number: '15', label: 'Languages' }
  ];

  const values = [
    { title: 'We are ambitious', description: 'We dare to dream' },
    { title: 'We care about performance', description: 'Results matter' },
    { title: 'We are insatiably curious', description: 'Sapere aude, we dare to know' },
    { title: 'We are resilient', description: 'We always find a way' },
    { title: 'We are humble', description: 'Never forget our roots and where we started' },
    { title: 'We value meritocracy', description: 'Our opportunities are based on achievement' }
  ];

  const benefits = [
    {
      title: 'Flexible Working',
      description: "We don't mind when you work, instead we focus on outcomes and results. You'll see no micromanaging or clock-watching at VI, you're trusted to do your job brilliantly because that's why we hired you.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'The Flexible VI-er Budget',
      description: "Up to $1,000/year. Designed to provide greater autonomy, the budget enables smart, personalized investment for an enhanced working environment, comprehensive wellness, professional development, and more.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Company Laptop',
      description: "Don't use your own, we'll get you a shiny new one.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Annual Leave',
      description: "25 days. We recently standardized this so every VI-er wherever they are in the world gets the same amount (excluding public holidays).",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Life Event Leave',
      description: "5 days. Life happens. Whether it be a wedding, moving house, or anything else that is important in your life – take the day!",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Birthday Leave',
      description: "1 day. No one should work on their birthday! If it falls on a weekend or holiday, you take the nearest day.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      )
    }
  ];

  const hiringSteps = [
    { step: '1', title: 'Application Review', description: 'We review your application and resume' },
    { step: '2', title: 'Initial Interview', description: 'A conversation to learn more about you' },
    { step: '3', title: 'Technical/Role Assessment', description: 'Demonstrate your skills' },
    { step: '4', title: 'Final Interview', description: 'Meet the team and leadership' },
    { step: '5', title: 'Offer', description: 'Welcome to the team!' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-32" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 50%, #1A4D4D 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20 animate-pulse" style={{ background: 'radial-gradient(circle, #FFB88C 0%, transparent 70%)', filter: 'blur(120px)', animation: 'pulse 8s ease-in-out infinite' }}></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)', filter: 'blur(120px)', animation: 'pulse 8s ease-in-out infinite 4s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', filter: 'blur(100px)', transform: 'translate(-50%, -50%)', animation: 'pulse 6s ease-in-out infinite 2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 backdrop-blur-xl shadow-2xl" style={{ background: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.3)' }}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm font-semibold text-white">JOIN US</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white">
            Work With Us.<br />From Anywhere in the World.
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto">
            At PraktikaX (VI), we're on a mission to make internships accessible to people all over the world, and we're hiring talent like you!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#open-roles" className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group" style={{ backgroundColor: '#FFFFFF', color: '#FF8C42', boxShadow: '0 10px 40px rgba(255, 255, 255, 0.4)' }}>
              <span>See Open Roles</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            <Link to="/about/our-mission" className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 text-white backdrop-blur-sm" style={{ border: '2px solid rgba(255, 255, 255, 0.5)', background: 'rgba(255, 255, 255, 0.1)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}>
              Our Mission
            </Link>
          </div>
        </div>
      </div>

      {/* Life at VI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(0, 184, 169, 0.1)' }}>
              <svg className="w-5 h-5" style={{ color: '#00B8A9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold" style={{ color: '#00B8A9' }}>LIFE AT VI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              Life at VI
            </h2>
            <p className="text-lg mb-8" style={{ color: '#2D2D2D' }}>
              We're a remote-first EdTech organization, so we really mean it when we say join us from anywhere.
            </p>
            <div className="flex gap-8">
              {lifeAtVI.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold" style={{ color: '#FF8C42' }}>{stat.number}</div>
                  <div className="text-sm" style={{ color: '#2D2D2D' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.1) 0%, rgba(255, 140, 66, 0.1) 100%)', border: '2px solid rgba(0, 184, 169, 0.2)' }}>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A4D4D' }}>VI-er</h3>
              <p className="text-lg italic mb-4" style={{ color: '#2D2D2D' }}>/vee-eye-er/</p>
              <p className="text-lg" style={{ color: '#2D2D2D' }}>
                noun: A member of the PraktikaX team. Someone who is passionate about making internships accessible to all.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose VI */}
      <div className="py-24" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(0, 184, 169, 0.05) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              Why Choose VI?
            </h2>
            <p className="text-xl" style={{ color: '#2D2D2D' }}>
              Discover our values and work ethic at PraktikaX
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl group relative overflow-hidden"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
                  border: '1px solid rgba(0, 184, 169, 0.1)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative w-14 h-14 rounded-2xl mb-6 flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 100%)' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1A4D4D' }}>
                  {value.title}
                </h3>
                <p style={{ color: '#2D2D2D', opacity: 0.8 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits & Perks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(255, 140, 66, 0.1)' }}>
            <svg className="w-5 h-5" style={{ color: '#FF8C42' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            <span className="text-sm font-semibold" style={{ color: '#FF8C42' }}>PERKS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
            Benefits & Perks
          </h2>
          <p className="text-xl" style={{ color: '#2D2D2D' }}>
            Let's skip to the good part.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl transition-all duration-500 hover:-translate-y-4 group relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.03) 0%, rgba(0, 184, 169, 0.03) 100%)',
                border: '1px solid rgba(255, 140, 66, 0.2)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-teal-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 100%)' }}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4" style={{ color: '#1A4D4D' }}>
                {benefit.title}
              </h3>
              <p className="text-sm" style={{ color: '#2D2D2D', opacity: 0.8 }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hiring Process */}
      <div className="py-24" style={{ background: 'linear-gradient(180deg, rgba(0, 184, 169, 0.05) 0%, #FFFFFF 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              Our Hiring Process
            </h2>
            <p className="text-xl" style={{ color: '#2D2D2D' }}>
              We don't want our hiring process to be a mystery
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {hiringSteps.map((step, index) => (
              <div key={index} className="flex-1 relative group">
                <div className="text-center p-6 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl" style={{ background: 'linear-gradient(135deg, #00B8A9 0%, #1A4D4D 100%)' }}>
                    {step.step}
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: '#1A4D4D' }}>{step.title}</h3>
                  <p className="text-sm" style={{ color: '#2D2D2D', opacity: 0.8 }}>{step.description}</p>
                </div>
                {index < hiringSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5" style={{ background: 'linear-gradient(90deg, #00B8A9, #FF8C42)', transform: 'translateX(-50%)' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Roles CTA */}
      <div id="open-roles" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-3xl p-16 text-center" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 100%)' }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.1)', filter: 'blur(60px)', transform: 'translate(30%, -30%)' }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full" style={{ background: 'rgba(26, 77, 77, 0.2)', filter: 'blur(60px)', transform: 'translate(-30%, 30%)' }}></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Open Roles
            </h2>
            <p className="text-xl mb-10 text-white opacity-90">
              Ready to join us? Check out our current openings and find your perfect role.
            </p>
            <div className="p-8 rounded-2xl mb-8" style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}>
              <p className="text-white text-lg">
                We're always looking for talented individuals! Even if you don't see a perfect match, feel free to reach out.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about/team" className="inline-block px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#FFFFFF', color: '#FF8C42' }}>
                Meet Our Team
              </Link>
              <Link to="/about/our-mission" className="inline-block px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 text-white" style={{ border: '2px solid rgba(255, 255, 255, 0.5)' }}>
                Our Mission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

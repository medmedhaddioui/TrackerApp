import React from 'react';
import { Link } from 'react-router-dom';

export default function EducatorsPage() {
  const educatorTypes = [
    {
      title: 'Universities',
      description: 'Guarantee work experience placements for your students with leading companies worldwide.',
      icon: '🎓',
      link: '/educators/universities',
      color: '#00B8A9',
      stats: '300+ Partners'
    },
    {
      title: 'Bootcamps',
      description: 'Complement your program with real-world internships that drive hiring outcomes.',
      icon: '💻',
      link: '/educators/bootcamps',
      color: '#FF8C42',
      stats: '100% Placement'
    },
    {
      title: 'Governments',
      description: 'Address talent shortages and unemployment with skills development at scale.',
      icon: '🏛️',
      link: '/educators/governments',
      color: '#1A4D4D',
      stats: 'Global Scale'
    },
    {
      title: 'Affiliates',
      description: 'Partner with us to provide guaranteed internships that enhance education.',
      icon: '🤝',
      link: '/educators/affiliates',
      color: '#FF6B2B',
      stats: '13,000+ Companies'
    },
  ];

  const stats = [
    { value: '300+', label: 'University Partners' },
    { value: '60+', label: 'Countries' },
    { value: '10,000+', label: 'Students Placed' },
    { value: '100%', label: 'Placement Rate' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A2A2A 0%, #1A4D4D 50%, #00B8A9 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 backdrop-blur-xl" style={{ background: 'rgba(255, 255, 255, 0.15)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                <span className="text-white font-semibold text-sm">For Educators</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white">
                Empower Your <span style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FFB88C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Students' Careers</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-10 text-white/80 leading-relaxed">
                Partner with us to provide guaranteed, career-aligned remote internships that boost employability and prepare students for the future of work.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/educators/universities" className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:-translate-y-1 text-white" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)', boxShadow: '0 20px 40px rgba(255, 140, 66, 0.4)' }}>
                  <span>Learn More</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link to="/contact" className="px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 text-white" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '2px solid rgba(255, 255, 255, 0.3)' }}>
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3)' }}>
                <img src="/front-view-young-female-student-red-shirt-black-bag-using-laptop-white.jpg" alt="Student learning" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.2) 0%, transparent 100%)' }}></div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -left-8 top-20 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 184, 169, 0.1)' }}>
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: '#00B8A9' }}>300+</p>
                    <p className="text-xs text-gray-500">Universities</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-20 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 140, 66, 0.1)' }}>
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: '#FF8C42' }}>60+</p>
                    <p className="text-xs text-gray-500">Countries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold" style={{ color: idx % 2 === 0 ? '#00B8A9' : '#FF8C42' }}>{stat.value}</p>
                <p className="text-gray-600 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educator Types */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(0, 184, 169, 0.1)', color: '#00B8A9' }}>
              Our Partners
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
              Solutions for Every Educator
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the program that best fits your institution's needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {educatorTypes.map((type, idx) => (
              <Link 
                key={idx}
                to={type.link}
                className="group relative bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}
              >
                <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: type.color }}></div>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle, ${type.color}20 0%, transparent 70%)` }}></div>
                
                <div className="relative flex items-start gap-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 group-hover:scale-110"
                    style={{ background: `${type.color}15` }}
                  >
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold" style={{ color: '#1A4D4D' }}>{type.title}</h3>
                      <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ backgroundColor: `${type.color}15`, color: type.color }}>{type.stats}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{type.description}</p>
                    <div className="flex items-center gap-2 font-semibold transition-colors" style={{ color: type.color }}>
                      <span>Learn more</span>
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #0A2A2A 0%, #1A4D4D 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255, 140, 66, 0.2)', color: '#FF8C42' }}>
                Why Partner With Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Transform Student Outcomes
              </h2>
              <p className="text-xl text-white/70 mb-8">
                Join 300+ educational institutions already providing world-class internship experiences to their students.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: '✓', text: '100% guaranteed placements in 6 weeks or less' },
                  { icon: '✓', text: '18,000+ host companies across 70+ industries' },
                  { icon: '✓', text: 'Dedicated support team for your institution' },
                  { icon: '✓', text: 'Real-time progress tracking and reporting' },
                  { icon: '✓', text: 'Career coaching and professional development' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#00B8A9' }}>
                      {item.icon}
                    </div>
                    <span className="text-white/90 text-lg">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="/front-view-young-female-student-red-t-shirt-black-jeans-holding-copybook-white.jpg" alt="Student" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              <img src="/happy-guy-eyeglasses-holding-tablet.jpg" alt="Student with tablet" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
              <img src="/young-man-work-with-laptop-computer-front-white-studio-wall.jpg" alt="Student working" className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              <img src="/portrait-happy-young-man-eyeglasses.jpg" alt="Happy student" className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Ready to Transform Your Students' Futures?
          </h2>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Join hundreds of institutions providing world-class internship experiences
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="group flex items-center gap-3 px-10 py-5 bg-white rounded-2xl font-bold text-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300" style={{ color: '#FF8C42' }}>
              <span>Schedule a Demo</span>
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

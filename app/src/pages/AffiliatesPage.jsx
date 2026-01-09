import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AffiliatesPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const benefits = [
    {
      title: 'Revenue Share',
      description: 'Earn competitive commissions for every successful referral that converts.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Marketing Support',
      description: 'Access our library of co-branded materials, banners, and content resources.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
    },
    {
      title: 'Dedicated Manager',
      description: 'Work with a dedicated partner success manager to maximize your results.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Real-Time Tracking',
      description: 'Monitor your referrals, conversions, and earnings with our partner dashboard.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Premium Product',
      description: 'Refer your audience to a world-class internship platform they will love.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      title: 'Global Network',
      description: 'Join a network of partners across 60+ countries driving impact together.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const partnerTypes = [
    { title: 'Career Coaches', desc: 'Help your clients gain real work experience', icon: '🎯' },
    { title: 'Influencers', desc: 'Share opportunities with your followers', icon: '📱' },
    { title: 'Agencies', desc: 'Add internships to your service offerings', icon: '🏢' },
    { title: 'Consultants', desc: 'Expand your career development toolkit', icon: '💼' },
  ];

  const testimonials = [
    {
      quote: "The affiliate program has been incredible. My students get amazing internship opportunities and I earn while helping them succeed.",
      author: 'Sarah Mitchell',
      position: 'Career Coach & Educator',
      image: '/Jocelyn.png'
    },
    {
      quote: "Virtual Internships makes it easy to refer clients. The tracking dashboard and support team are top-notch.",
      author: 'Marcus Johnson',
      position: 'Education Consultant',
      image: '/Jack.png'
    },
    {
      quote: "As an influencer in the education space, partnering with VI was a perfect fit. Great product, great commissions.",
      author: 'Emily Chen',
      position: 'Education Content Creator',
      image: '/Natalie.png'
    }
  ];

  const faqs = [
    { question: 'How does the affiliate program work?', answer: 'Sign up for free, get your unique referral link, share it with your audience, and earn commission for every successful enrollment that comes through your link.' },
    { question: 'What commission rates do you offer?', answer: 'We offer competitive commission rates that vary based on volume and partnership tier. Contact us for specific details about our commission structure.' },
    { question: 'How do I track my referrals?', answer: 'You get access to a real-time partner dashboard where you can track clicks, conversions, and earnings. We also provide monthly detailed reports.' },
    { question: 'When and how do I get paid?', answer: 'Payments are processed monthly for all confirmed enrollments. We support multiple payment methods including bank transfer and PayPal.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FFB88C 50%, #00B8A9 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-20" style={{ background: '#FFFFFF', filter: 'blur(80px)' }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-20" style={{ background: '#1A4D4D', filter: 'blur(100px)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 backdrop-blur-xl" style={{ background: 'rgba(255, 255, 255, 0.3)', border: '1px solid rgba(255, 255, 255, 0.4)' }}>
                <span className="text-2xl">🤝</span>
                <span className="text-white font-semibold text-sm">Affiliate Partnership</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white">
                Earn While You <span style={{ color: '#1A4D4D' }}>Inspire</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-10 text-white/90 max-w-xl leading-relaxed">
                Join our affiliate program and earn competitive commissions while helping students and young professionals access life-changing internship experiences.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/educators/contact" className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: '#1A4D4D', color: '#FFFFFF' }}>
                  <span>Become a Partner</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a href="#benefits" className="px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:-translate-y-1 text-white" style={{ background: 'rgba(255, 255, 255, 0.2)', border: '2px solid rgba(255, 255, 255, 0.4)' }}>
                  Learn More
                </a>
              </div>
            </div>

            {/* Hero Image with Cards */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0, 0, 0, 0.2)' }}>
                <img src="/career-placement-girl.png" alt="Affiliate partner" className="w-full h-[500px] object-cover object-top" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.1) 0%, transparent 100%)' }}></div>
              </div>
              
              {/* Floating stat cards */}
              <div className="absolute -left-6 top-16 bg-white rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 140, 66, 0.1)' }}>
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold" style={{ color: '#FF8C42' }}>Top Tier</p>
                    <p className="text-xs text-gray-500">Commissions</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-6 bottom-24 bg-white rounded-2xl p-5 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(26, 77, 77, 0.1)' }}>
                    <span className="text-2xl">📊</span>
                  </div>
                  <div>
                    <p className="text-xl font-bold" style={{ color: '#1A4D4D' }}>Real-Time</p>
                    <p className="text-xs text-gray-500">Tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#0A2A2A' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Perfect For</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerTypes.map((type, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2" style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <span className="text-4xl block mb-4">{type.icon}</span>
                <h3 className="font-bold text-white mb-2">{type.title}</h3>
                <p className="text-sm text-white/70">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255, 140, 66, 0.1)', color: '#FF8C42' }}>
              Partner Benefits
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join a growing network of affiliates making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                style={{ border: '2px solid #F1F5F9' }}
              >
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? '#FF8C42' : '#1A4D4D'} 0%, ${index % 2 === 0 ? '#FFB88C' : '#00B8A9'} 100%)`, color: '#FFFFFF' }}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1A4D4D' }}>{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(26, 77, 77, 0.1)', color: '#1A4D4D' }}>
              Getting Started
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Sign Up', desc: 'Apply to join our affiliate program - it\'s free and quick' },
              { step: '02', title: 'Get Your Link', desc: 'Receive your unique tracking link and marketing materials' },
              { step: '03', title: 'Share & Promote', desc: 'Share with your audience through your preferred channels' },
              { step: '04', title: 'Earn', desc: 'Get paid for every successful referral that enrolls' },
            ].map((item, idx) => (
              <div key={idx} className="text-center relative">
                <div className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6" style={{ background: `linear-gradient(135deg, ${idx % 2 === 0 ? '#FF8C42' : '#1A4D4D'} 0%, ${idx % 2 === 0 ? '#FFB88C' : '#00B8A9'} 100%)` }}>
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1A4D4D' }}>{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
                
                {idx < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%]">
                    <svg className="w-full h-4" viewBox="0 0 100 20">
                      <path d="M0 10 H90 L85 5 M90 10 L85 15" stroke="#E2E8F0" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #1A4D4D 0%, #0A2A2A 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255, 140, 66, 0.2)', color: '#FF8C42' }}>
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Partners Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                <svg className="w-10 h-10 mb-4" style={{ color: '#FF8C42' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-white/90 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-white">{testimonial.author}</p>
                    <p className="text-sm text-white/60">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255, 140, 66, 0.1)', color: '#FF8C42' }}>
              FAQs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="rounded-2xl overflow-hidden" style={{ border: '2px solid #F1F5F9' }}>
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg" style={{ color: '#1A4D4D' }}>{faq.question}</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} 
                    style={{ color: '#FF8C42' }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeFaq === idx ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="px-6 pb-6 text-gray-600 bg-white">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Join our affiliate program today and turn your network into opportunity
          </p>
          <Link to="/educators/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300" style={{ backgroundColor: '#1A4D4D', color: '#FFFFFF' }}>
            <span>Apply Now</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

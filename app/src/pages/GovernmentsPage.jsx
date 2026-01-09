import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GovernmentsPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const benefits = [
    {
      title: 'Global Scale',
      description: 'Every individual gains access regardless of their previous experience or location.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Speed',
      description: 'One month or less between registration and placement of individuals on our platform.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Boosts Employability',
      description: 'Individuals gain the experience, skills, and competencies employers are actively seeking.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Future Skills',
      description: 'Build confidence and prepare for future jobs through global work experience.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Talent Mobility',
      description: 'Offer cross-industry work experience to ensure career advancement and an agile workforce.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: 'Diversify Economies',
      description: 'Prepare individuals for future jobs in emerging fields across industries.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "I facilitated one of the most memorable workshops for the Women Returners Programme run by Virtual Internships as part of a Scottish Government initiative.",
      author: 'Louise Linnander',
      position: 'Former Partnerships Manager at Kiron',
      image: '/Natalie.png'
    },
    {
      quote: "The overall experience with Virtual Internships was outstanding. The independence in implementation was really helpful and provided high efficiency.",
      author: 'Maggie Chen',
      position: 'Co-founder, Girls in Charge Initiative',
      image: '/Jocelyn.png'
    },
    {
      quote: "Through the partnership with Virtual Internships, these learners get a great opportunity to experience a virtual workplace and grow their networks.",
      author: 'Joy Cherfan',
      position: 'Project Manager, Kiron Lebanon',
      image: '/Maab.png'
    }
  ];

  const faqs = [
    { question: 'What scale of programs can you support?', answer: 'We support programs from 10 to 100,000+ participants. Our platform is built for scale and can accommodate any size initiative.' },
    { question: 'How do you address unemployment challenges?', answer: 'We provide meaningful work experience that builds skills, confidence, and professional networks - key factors in improving employment outcomes.' },
    { question: 'Can programs be customized for specific demographics?', answer: 'Yes, we customize programs for various demographics including youth, women returners, refugees, and other underserved populations.' },
    { question: 'What reporting and tracking do you provide?', answer: 'We offer comprehensive dashboards with real-time tracking of participant progress, completion rates, and employment outcomes.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A4D4D 0%, #FF8C42 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 backdrop-blur-xl" style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-white font-semibold text-sm">For Governments</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white">
                Bridge the <span className="opacity-90">Global Skills Gap</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-10 text-white/90 max-w-xl leading-relaxed">
                The leading platform to address talent shortages and unemployment with skills development at scale.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/educators/contact" className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:-translate-y-1" style={{ backgroundColor: '#FF8C42', color: '#FFFFFF', boxShadow: '0 20px 40px rgba(255, 140, 66, 0.4)' }}>
                  <span>Find Out More</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a href="#benefits" className="px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 text-white" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '2px solid rgba(255, 255, 255, 0.3)' }}>
                  Learn More
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3)' }}>
                <img src="/portrait-happy-young-man-eyeglasses.jpg" alt="Government partnership" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26, 77, 77, 0.2) 0%, transparent 100%)' }}></div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -left-8 top-20 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(26, 77, 77, 0.1)' }}>
                    <span className="text-2xl">🌍</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: '#1A4D4D' }}>Global</p>
                    <p className="text-xs text-gray-500">Scale</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-20 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 140, 66, 0.1)' }}>
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: '#FF8C42' }}>&lt;1 Month</p>
                    <p className="text-xs text-gray-500">To Placement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '100K+', label: 'Participants Served' },
              { value: '60+', label: 'Countries' },
              { value: '18,000+', label: 'Host Companies' },
              { value: '<1 Month', label: 'To Placement' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl md:text-4xl font-extrabold" style={{ color: idx % 2 === 0 ? '#1A4D4D' : '#FF8C42' }}>{stat.value}</p>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(26, 77, 77, 0.1)', color: '#1A4D4D' }}>
              Program Benefits
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
              Transform Workforce Development
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Scalable solutions for employment and skills development initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}
              >
                <div className="absolute top-0 left-0 w-1 h-full transition-all duration-500 group-hover:w-2" style={{ backgroundColor: index % 2 === 0 ? '#1A4D4D' : '#FF8C42' }}></div>
                
                <div className="relative">
                  <div 
                    className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? '#1A4D4D' : '#FF8C42'} 0%, ${index % 2 === 0 ? '#0A2A2A' : '#FF6B2B'} 100%)`, color: '#FFFFFF' }}
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

      {/* Case Studies Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #0A2A2A 0%, #1A4D4D 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255, 140, 66, 0.2)', color: '#FF8C42' }}>
              Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Impacting Lives at Scale
            </h2>
            <p className="text-xl text-white/70 mb-12">
              From youth employment initiatives to women returner programs, we've partnered with governments worldwide to create meaningful opportunities.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Scottish Government', desc: 'Women Returners Programme helping women re-enter the workforce' },
                { title: 'Kiron Partnership', desc: 'Supporting refugees with career development opportunities' },
                { title: 'Youth Employment', desc: 'Providing first work experiences to young people globally' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left">
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#00B8A9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Partner Testimonials
            </h2>
            <p className="text-xl text-white/80">Hear from our government and NGO partners</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl">
                <svg className="w-10 h-10 mb-4" style={{ color: '#FF8C42' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-bold" style={{ color: '#1A4D4D' }}>{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(26, 77, 77, 0.1)', color: '#1A4D4D' }}>
              FAQs
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-lg" style={{ color: '#1A4D4D' }}>{faq.question}</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} 
                    style={{ color: '#1A4D4D' }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
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

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #1A4D4D 0%, #0A2A2A 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Ready to Transform Workforce Development?
          </h2>
          <p className="text-xl mb-10 text-white/80">
            Partner with us to address skills gaps and unemployment at scale
          </p>
          <Link to="/educators/contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300" style={{ backgroundColor: '#FF8C42', color: '#FFFFFF' }}>
            <span>Get in Touch</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

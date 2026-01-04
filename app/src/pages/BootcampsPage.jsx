import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BootcampsPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const benefits = [
    {
      title: 'Drive Employability',
      description: 'Connect your learners with employers looking for ambitious talent and improve engagement.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Meaningful Experiences',
      description: 'The vetting process ensures all parties are satisfied before, during, and after the internship.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Intelligent Matching',
      description: 'We use 400k data points from our network of employers to connect your learners to the best opportunities.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Maximize Time Efficiency',
      description: 'Save time on researching and finding relevant employers for your learners. We do all the work.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: '10x Opportunities',
      description: '10x the number of internship opportunities for your learners when you partner with us.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: '100% Guaranteed',
      description: '100% of your learners will be placed in internships in their specialty in six weeks or less.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  const faqs = [
    { question: 'What types of bootcamps do you partner with?', answer: 'We partner with coding bootcamps, data science programs, UX/UI bootcamps, digital marketing programs, and more. Any skills-focused program can benefit from our platform.' },
    { question: 'How does this complement our curriculum?', answer: 'Our internships provide real-world application of the skills your learners develop in your program. It bridges the gap between learning and employment.' },
    { question: 'What is the time commitment for learners?', answer: 'Internship commitments are flexible, typically 10-20 hours per week, allowing learners to balance with their bootcamp schedule.' },
    { question: 'Do you provide career coaching?', answer: 'Yes! All learners receive access to our award-winning career development courses and coaching support throughout their internship.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 100%)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #1A4D4D 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 backdrop-blur-xl" style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white font-semibold text-sm">For Bootcamps</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white">
                Guarantee <span className="opacity-90">100% Real-World Experience</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-10 text-white/90 max-w-xl leading-relaxed">
                Give your learners access to structured, career-aligned remote internships that complement your program and drive real hiring outcomes.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:-translate-y-1" style={{ backgroundColor: '#FFFFFF', color: '#FF8C42', boxShadow: '0 20px 40px rgba(255, 255, 255, 0.3)' }}>
                  <span>Book a Demo</span>
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
                <img src="/young-man-work-with-laptop-computer-front-white-studio-wall.jpg" alt="Bootcamp learner" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.2) 0%, transparent 100%)' }}></div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -left-8 top-20 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 140, 66, 0.1)' }}>
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: '#FF8C42' }}>100%</p>
                    <p className="text-xs text-gray-500">Placement Rate</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-20 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 184, 169, 0.1)' }}>
                    <span className="text-2xl">10x</span>
                  </div>
                  <div>
                    <p className="text-lg font-bold" style={{ color: '#00B8A9' }}>More</p>
                    <p className="text-xs text-gray-500">Opportunities</p>
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
              { value: '100%', label: 'Placement Rate' },
              { value: '6 Weeks', label: 'To Placement' },
              { value: '18,000+', label: 'Host Companies' },
              { value: '70+', label: 'Industries' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl md:text-4xl font-extrabold" style={{ color: idx % 2 === 0 ? '#FF8C42' : '#00B8A9' }}>{stat.value}</p>
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
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255, 140, 66, 0.1)', color: '#FF8C42' }}>
              Why Partner With Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
              Benefits for Your Bootcamp
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your program with real-world internship experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)' }}
              >
                <div className="absolute top-0 left-0 w-1 h-full transition-all duration-500 group-hover:w-2" style={{ backgroundColor: index % 2 === 0 ? '#FF8C42' : '#00B8A9' }}></div>
                
                <div className="relative">
                  <div 
                    className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? '#FF8C42' : '#00B8A9'} 0%, ${index % 2 === 0 ? '#FF6B2B' : '#1A4D4D'} 100%)`, color: '#FFFFFF' }}
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

      {/* Image + Content Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #0A2A2A 0%, #1A4D4D 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255, 140, 66, 0.2)', color: '#FF8C42' }}>
              Career-Aligned Placements
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Bridge the Gap Between Learning & Employment
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Give your learners the competitive edge they need in the job market with real work experience in their field.
            </p>
            
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                'Placements aligned with bootcamp curriculum',
                'Real projects with real companies',
                'Career coaching and professional development',
                'Improved hiring outcomes for graduates',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)' }}>
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
              <div key={idx} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-lg" style={{ color: '#1A4D4D' }}>{faq.question}</span>
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} 
                    style={{ color: '#00B8A9' }}
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
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
            Ready to Supercharge Your Bootcamp?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Give your learners the competitive edge with real-world experience
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white rounded-2xl font-bold text-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300" style={{ color: '#FF8C42' }}>
            <span>Schedule a Demo</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UniversitiesPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const benefits = [
    {
      title: 'Increase Student Employability',
      description: 'Guarantee work experience with approved companies looking for diverse, ambitious talent.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Real-World Work Experience',
      description: 'Students collaborate in real professional environments across the globe.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: 'Intelligent Matching',
      description: 'Considering nearly 400k data points from our host companies to connect your students with the best opportunities.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Time Efficient',
      description: 'Say goodbye to hours of tedious searching and let us help your students achieve their career goals.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Guaranteed Placements',
      description: '100% of your students are guaranteed a project-based learning experience in their chosen career field.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Global Scale',
      description: 'Partnerships range from 10 to 100,000 students, ensuring scalability at any level.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "The assistance and support Virtual Internships provided was crucial in allowing us to successfully complete the internship program. I cannot thank them enough.",
      author: 'Serinah Tan',
      position: 'University of the Ryukyus, Japan',
      image: '/Natalie.png'
    },
    {
      quote: "Virtual Internships offer a professional and valuable service to students and universities. It is impressive to see students being offered paid employment.",
      author: 'David Morland',
      position: 'Global Internships Manager, Durham University, UK',
      image: '/Nathan.png'
    },
    {
      quote: "Giving our students the professional global exposure they need would not be possible without the Virtual Internships programme.",
      author: 'Elsa Zenatti-Daniels',
      position: 'Student Development Lead, Aston Business School, UK',
      image: '/Jocelyn.png'
    },
  ];

  const faqs = [
    { question: 'How does the matching process work?', answer: 'We use 400,000+ data points to match students with companies based on their skills, interests, and career goals. The matching is done within 6 weeks of enrollment.' },
    { question: 'What industries are available?', answer: 'We have 18,000+ host companies across 70+ industries including technology, marketing, finance, healthcare, consulting, and more.' },
    { question: 'Is this only for specific majors?', answer: 'No, we support students from all academic backgrounds. Our diverse company network ensures placements across all fields of study.' },
    { question: 'How long are the internships?', answer: 'Internship lengths are flexible, typically ranging from 4 to 24 weeks depending on your program requirements.' },
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
                <span className="text-white font-semibold text-sm">For Universities</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white">
                Guarantee <span style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FFB88C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>100% Placements</span> for Students
              </h1>
              
              <p className="text-lg md:text-xl mb-10 text-white/80 leading-relaxed">
                Partner with us to provide guaranteed, career-aligned remote internships that boost student employability and prepare them for the future of work.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/universities/contact" className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:-translate-y-1 text-white" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)', boxShadow: '0 20px 40px rgba(255, 140, 66, 0.4)' }}>
                  <span>Book a Demo</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a href="#how-it-works" className="px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 text-white" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '2px solid rgba(255, 255, 255, 0.3)' }}>
                  How It Works
                </a>
              </div>

              {/* Trust badges */}
              <div className="mt-12 flex flex-wrap items-center gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-white/60">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">300+ Partners</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">100% Placement</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">60+ Countries</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3)' }}>
                <img src="/front-view-young-female-student-red-shirt-black-bag-using-laptop-white.jpg" alt="University student" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.2) 0%, transparent 100%)' }}></div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -left-8 top-20 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(0, 184, 169, 0.1)' }}>
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: '#00B8A9' }}>100%</p>
                    <p className="text-xs text-gray-500">Placement Rate</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-20 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 140, 66, 0.1)' }}>
                    <span className="text-2xl">⏱️</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold" style={{ color: '#FF8C42' }}>6 Weeks</p>
                    <p className="text-xs text-gray-500">To Placement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#F8F9FA' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '300+', label: 'University Partners' },
              { value: '10,000+', label: 'Students Placed' },
              { value: '18,000+', label: 'Host Companies' },
              { value: '70+', label: 'Industries' },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-3xl md:text-4xl font-extrabold" style={{ color: idx % 2 === 0 ? '#00B8A9' : '#FF8C42' }}>{stat.value}</p>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255, 140, 66, 0.1)', color: '#FF8C42' }}>
              Why Partner With Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
              Benefits for Your University
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to provide world-class internship experiences
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

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(0, 184, 169, 0.1)', color: '#00B8A9' }}>
              Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Partner With Us', desc: 'Sign a partnership agreement tailored to your institution\'s needs' },
              { step: 2, title: 'Enroll Students', desc: 'Students register and complete their profile with career preferences' },
              { step: 3, title: 'We Match', desc: 'Our AI matches students with ideal companies within 6 weeks' },
              { step: 4, title: 'Track Progress', desc: 'Monitor student progress with real-time dashboards and reports' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                    style={{ background: idx % 2 === 0 ? 'linear-gradient(135deg, #00B8A9, #1A4D4D)' : 'linear-gradient(135deg, #FF8C42, #FF6B2B)' }}
                  >
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1A4D4D' }}>{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#00B8A9' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Leading Universities
            </h2>
            <p className="text-xl text-white/80">Hear from our university partners</p>
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

      {/* Image Gallery */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255, 140, 66, 0.1)', color: '#FF8C42' }}>
                Global Reach
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
                Students from 60+ Countries
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join a global network of universities providing world-class internship experiences to students worldwide.
              </p>
              
              <div className="space-y-4">
                {[
                  'Partnerships from 10 to 100,000 students',
                  'Dedicated support team for your institution',
                  'Real-time progress tracking and reporting',
                  'Career coaching and professional development',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <svg className="w-6 h-6" style={{ color: '#00B8A9' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src="/front-view-young-female-student-red-t-shirt-black-jeans-holding-copybook-white.jpg" alt="Student" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
              <img src="/happy-guy-eyeglasses-holding-tablet.jpg" alt="Student" className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8" />
              <img src="/portrait-happy-young-man-eyeglasses.jpg" alt="Student" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
              <img src="/young-man-work-with-laptop-computer-front-white-studio-wall.jpg" alt="Student" className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, #F8F9FA 0%, #FFFFFF 100%)' }}>
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
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Join 300+ universities providing guaranteed internships to their students
          </p>
          <Link to="/universities/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white rounded-2xl font-bold text-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300" style={{ color: '#FF8C42' }}>
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

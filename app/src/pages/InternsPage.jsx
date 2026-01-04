export default function InternsPage() {
  const benefits = [
    { title: 'Complete Flexibility', description: 'You choose your start date, internship length, and weekly commitment of hours.', icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )},
    { title: 'Guaranteed Placement', description: 'No matter your degree, location, or experience - we will find you the right internship.', icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )},
    { title: 'Real Experience', description: 'Work remotely with one of 18,000 companies looking for ambitious talent like you.', icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )},
    { title: 'Coaching & Support', description: 'You will be supported by a team of expert coaches to guide you towards career success.', icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )},
    { title: 'Award-Winning Courses', description: 'Complement your internship with access to courses to build the skills that will set you apart.', icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )},
    { title: 'Save Time', description: 'Tell us what remote internship you want - we match you based on your preferences.', icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )}
  ];

  const testimonials = [
    { name: 'Aishah Sofea', school: 'Kolej MARA Banting, Malaysia', internship: 'Remote Data & Business Analyst Internship, Maldives', outcome: 'Now completing her studies', image: '/Maab.png' },
    { name: 'John Passmore', school: 'University of Birmingham, UK', internship: 'Remote HR & Recruitment Internship, UK', outcome: 'Now a Client Executive for Gartner', image: '/Jack.png' }
  ];

  const careerFields = [
    'Architecture', 'Business', 'Computer Science', 'Fashion & Design',
    'Finance', 'Environment & Sustainability', 'Healthcare', 'HR',
    'Marketing', 'Media & Communications', 'Engineering', 'Startup'
  ];

  const faqs = [
    { question: 'What is a virtual internship?', answer: 'A virtual internship is a work-based learning experience that takes place in a virtual environment. It provides opportunities to gain practical work experience, learn new skills, and engage with employers through online platforms.' },
    { question: 'What are the benefits of virtual internships?', answer: 'Benefits include flexibility to work from anywhere, gaining professional skills, working closely with company leaders, and gaining international experience on a schedule that suits you.' },
    { question: 'Who can do a Virtual Internship?', answer: 'Any person over 18 looking to build skills and gain experience. Our program is open to people anywhere in the world, regardless of their background, major, or stage of education.' },
    { question: 'How flexible is the internship program?', answer: 'You can choose your start date, length (1-4 months), and hours per week (10-30). You will complete a minimum of 120 hours with flexible schedule options.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A2A2A 0%, #1A4D4D 50%, #00B8A9 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 backdrop-blur-xl" style={{ background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.2) 0%, rgba(255, 140, 66, 0.2) 100%)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white font-semibold text-sm">The #1 Platform for Remote Internships</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white">
                Give Yourself an <span style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FFB88C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Unbeatable Advantage</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-10 text-white/80">
                The only platform that guarantees real-world work experience across the globe
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="#" className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 hover:-translate-y-1" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)', color: '#FFFFFF', boxShadow: '0 20px 40px rgba(255, 140, 66, 0.4)' }}>
                  <span>Enroll Now</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <a href="#how-it-works" className="px-8 py-4 rounded-2xl font-bold text-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-1" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF', border: '2px solid rgba(255, 255, 255, 0.3)' }}>
                  How It Works
                </a>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3)' }}>
                <img src="/internship_girl_img.png" alt="Intern working" className="w-full h-auto object-cover" />
              </div>
              
              <div className="absolute -left-8 bottom-8 p-4 rounded-2xl backdrop-blur-xl animate-bounce" style={{ background: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)', animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00B8A9 0%, #1A4D4D 100%)' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: '#1A4D4D' }}>250k+</div>
                    <div className="text-xs" style={{ color: '#2D2D2D' }}>Global Internships</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
            The Reality of Starting Your Career
          </h2>
          <p className="text-xl mb-8" style={{ color: '#2D2D2D' }}>
            The need for work experience is essential, but getting a job can be tough. You need experience, but to gain experience, you need a job. Internships are competitive, with <span className="font-bold" style={{ color: '#FF8C42' }}>80% of employers</span> considering it a critical factor.
          </p>
          <p className="text-2xl font-semibold" style={{ color: '#00B8A9' }}>
            So, what do you do?
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6" style={{ background: 'linear-gradient(135deg, rgba(0,184,169,0.1) 0%, rgba(255,140,66,0.1) 100%)' }}>
              <svg className="w-5 h-5" style={{ color: '#00B8A9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-semibold text-sm" style={{ color: '#00B8A9' }}>The Solution</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
              Virtual Internships
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
              Find global work experience in any field or region with Virtual Internships
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-4 border border-gray-100" style={{ background: '#FFFFFF', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)' }}>
                <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? '#00B8A9' : '#FF8C42'} 0%, ${index % 2 === 0 ? '#1A4D4D' : '#FF6B2B'} 100%)`, color: '#FFFFFF', boxShadow: `0 10px 30px ${index % 2 === 0 ? 'rgba(0,184,169,0.3)' : 'rgba(255,140,66,0.3)'}` }}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1A4D4D' }}>{benefit.title}</h3>
                <p className="text-base" style={{ color: '#2D2D2D' }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A4D4D 0%, #00B8A9 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20" style={{ background: '#FF8C42', filter: 'blur(100px)' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Launch Your Career</h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '250k+', label: 'Global Internships' },
              { number: '80+', label: 'Countries' },
              { number: '2', label: 'Coaching Calls' },
              { number: '1 in 3', label: 'Get Hired' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-3xl backdrop-blur-xl" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FFFFFF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {stat.number}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="experiences" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#1A4D4D' }}>
            Why Students Love Virtual Internships
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group p-8 rounded-3xl transition-all duration-500 hover:-translate-y-4" style={{ background: '#FFFFFF', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)', border: '1px solid rgba(0, 184, 169, 0.2)' }}>
                <div className="flex items-start gap-6 mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-2xl object-cover" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }} />
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: '#1A4D4D' }}>{testimonial.name}</h3>
                    <p className="text-sm" style={{ color: '#2D2D2D' }}>{testimonial.school}</p>
                  </div>
                </div>
                <p className="text-lg mb-4" style={{ color: '#2D2D2D' }}>{testimonial.internship}</p>
                <p className="font-semibold" style={{ color: '#00B8A9' }}>{testimonial.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A4D4D' }}>
              Find Your Work Experience in Three Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Enroll and Apply', description: 'Quick and easy sign-up process to get started.', icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              )},
              { step: '2', title: 'Get Matched', description: 'Share your preferences for personalized matching.', icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )},
              { step: '3', title: 'Start Your Internship', description: 'Begin with full support from our expert team.', icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              )}
            ].map((step, index) => (
              <div key={index} className="group text-center p-8 rounded-3xl transition-all duration-500 hover:-translate-y-4" style={{ background: '#FFFFFF', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)' }}>
                <div className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? '#00B8A9' : '#FF8C42'} 0%, ${index % 2 === 0 ? '#1A4D4D' : '#FF6B2B'} 100%)`, color: '#FFFFFF' }}>
                  {step.icon}
                </div>
                <div className="text-sm font-bold mb-3" style={{ color: index % 2 === 0 ? '#00B8A9' : '#FF8C42' }}>Step {step.step}</div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1A4D4D' }}>{step.title}</h3>
                <p style={{ color: '#2D2D2D' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Fields Section */}
      <section id="career-fields" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1A4D4D' }}>Explore Career Fields</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {careerFields.map((field, index) => (
              <div key={index} className="group p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105" style={{ background: '#FFFFFF', boxShadow: '0 5px 20px rgba(0, 0, 0, 0.06)', border: '1px solid rgba(0, 184, 169, 0.1)' }}>
                <div className="w-10 h-10 rounded-xl mb-4 transition-all duration-500 group-hover:scale-110" style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? '#00B8A9' : '#FF8C42'} 0%, ${index % 2 === 0 ? '#1A4D4D' : '#FF6B2B'} 100%)` }}></div>
                <h3 className="font-bold" style={{ color: '#1A4D4D' }}>{field}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16" style={{ color: '#1A4D4D' }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-8 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.05) 0%, rgba(255, 140, 66, 0.05) 100%)', borderLeft: '4px solid #00B8A9' }}>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1A4D4D' }}>{faq.question}</h3>
                <p style={{ color: '#2D2D2D' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #00B8A9 0%, #1A4D4D 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20" style={{ background: '#FF8C42', filter: 'blur(100px)' }}></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Start Your Career Journey Today!
          </h2>
          <p className="text-xl mb-10 text-white/80">
            Join our global network of successful alumni.
          </p>
          <a href="#" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-110" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)', color: '#FFFFFF', boxShadow: '0 20px 40px rgba(255, 140, 66, 0.4)' }}>
            <span>Enroll Now</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

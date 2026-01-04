import { Link } from 'react-router-dom';

export default function UniversitiesPage() {
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
      description: 'Considering nearly 400k data points from our host companies to connect your students with the best possible learning opportunities.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Time Efficient',
      description: 'Say goodbye to hours of tedious searching and let us help your students achieve their career development goals.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Guaranteed Placements',
      description: '100% of your students are guaranteed a project-based learning experience in their chosen career field, in less than six weeks.',
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
      quote: "The assistance and support Virtual Internships provided was crucial in allowing us to successfully complete the internship program. I cannot thank them enough for the work that they've put in to help materialize our internship.",
      author: 'Serinah Tan',
      position: 'University of the Ryukyus, Japan'
    },
    {
      quote: "Virtual Internships offer a professional and valuable service to students and universities. It is impressive to see students being offered paid employment at the end of their internships.",
      author: 'David Morland',
      position: 'Global Internships Manager, Durham University, UK'
    },
    {
      quote: "Giving our students the professional global exposure they need to enhance their learning and reach the next step of their career would not be possible without the Virtual Internships programme.",
      author: 'Elsa Zenatti-Daniels',
      position: 'Student Development Lead, Aston Business School, UK'
    },
    {
      quote: "Our partnership with Virtual Internships allowed us to offer a guaranteed internship experience for undergraduate students. Virtual Internships did an excellent job with providing our first-year students with valuable work experience.",
      author: 'Hannah Neal',
      position: 'Assistant Director, USC Marshall School of Business, USA'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-32" style={{ background: 'linear-gradient(135deg, #0A2A2A 0%, #1A4D4D 50%, #00B8A9 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 backdrop-blur-xl" style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                <span className="text-sm font-semibold text-white">FOR UNIVERSITIES</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white">
                Guarantee Your Students an <span style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FFB88C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Unbeatable Advantage</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-10 text-white/80 max-w-xl">
                The only platform that guarantees 100% of your students real-world work experience with companies across the globe
              </p>
              
              <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 text-white" style={{ backgroundColor: '#FF8C42', boxShadow: '0 10px 30px rgba(255, 140, 66, 0.3)' }}>
                <span>Learn More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3)' }}>
                <img src="/career-placement-girl.png" alt="University students" className="w-full h-auto object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.2) 0%, transparent 100%)' }}></div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -left-8 bottom-8 p-6 rounded-2xl backdrop-blur-xl" style={{ background: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00B8A9 0%, #1A4D4D 100%)' }}>
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ color: '#1A4D4D' }}>100%</div>
                    <div className="text-sm" style={{ color: '#2D2D2D' }}>Placement Guarantee</div>
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
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6" style={{ background: 'linear-gradient(135deg, rgba(255,140,66,0.1) 0%, rgba(255,140,66,0.05) 100%)' }}>
            <svg className="w-5 h-5" style={{ color: '#FF8C42' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="font-semibold text-sm" style={{ color: '#FF8C42' }}>The Challenge</span>
          </div>
          <h2 className="text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
            The Challenge
          </h2>
          <p className="text-xl max-w-4xl mx-auto" style={{ color: '#2D2D2D' }}>
            Choosing a university that enhances employability is critical for students, yet only <span className="font-bold" style={{ color: '#FF8C42' }}>35%</span> feel ready for the workforce. Employers favor graduates with practical experience, but providing such opportunities at scale poses a significant challenge. It's time to address this issue and equip students with the skills they need to succeed in the workforce.
          </p>
        </div>
      </div>

      {/* Solution Section */}
      <div className="py-32" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(0, 184, 169, 0.05) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6" style={{ background: 'linear-gradient(135deg, rgba(0,184,169,0.1) 0%, rgba(0,184,169,0.05) 100%)' }}>
              <svg className="w-5 h-5" style={{ color: '#00B8A9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-semibold text-sm" style={{ color: '#00B8A9' }}>The Solution</span>
            </div>
            <h2 className="text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              The Answer?
            </h2>
            <p className="text-xl mb-4" style={{ color: '#00B8A9', fontWeight: 'bold' }}>
              Virtual Internships Supported Career Accelerator Program
            </p>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
              The no. 1 platform for universities and colleges to improve career readiness and increase student employability through experiential learning opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl transition-all duration-500 hover:-translate-y-4 border border-gray-100"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
                }}
              >
                <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? '#00B8A9' : '#FF8C42'} 0%, ${index % 2 === 0 ? '#1A4D4D' : '#FF6B2B'} 100%)`, color: '#FFFFFF', boxShadow: `0 10px 30px ${index % 2 === 0 ? 'rgba(0,184,169,0.3)' : 'rgba(255,140,66,0.3)'}` }}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A4D4D' }}>
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
          <h2 className="text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
            Results that Count
          </h2>
          <p className="text-xl max-w-4xl mx-auto" style={{ color: '#2D2D2D' }}>
            Increase your students' employability with a platform customized to help them excel in the dynamic and highly competitive job market
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { number: '250k+', label: 'Project-Based Placements', subtitle: 'Available Now and Growing' },
            { number: '100%', label: 'Guaranteed Placements', subtitle: 'In All Career Fields' },
            { number: '1 in 3', label: 'Interns', subtitle: 'Offered Further Opportunities Immediately' },
            { number: '3 out of 4', label: 'Partners', subtitle: 'Offer Academic Credit for Internships' }
          ].map((stat, index) => (
            <div
              key={index}
              className="relative p-10 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.1) 0%, rgba(26, 77, 77, 0.1) 100%)',
                border: '2px solid rgba(0, 184, 169, 0.2)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="text-6xl font-bold mb-4" style={{
                color: '#00B8A9',
                textShadow: '0 2px 10px rgba(0, 184, 169, 0.3)'
              }}>
                {stat.number}
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A4D4D' }}>
                {stat.label}
              </h3>
              <p className="text-sm" style={{ color: '#2D2D2D', opacity: 0.8 }}>
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-32" style={{ background: 'linear-gradient(180deg, rgba(0, 184, 169, 0.05) 0%, #FFFFFF 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              Why Universities Love Virtual Internships
            </h2>
            <p className="text-xl" style={{ color: '#2D2D2D' }}>
              Increasing student employability and enhancing academic programs through remote internship opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative rounded-3xl p-10 transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 184, 169, 0.1)'
                }}
              >
                <div className="absolute top-0 left-0 w-full h-2 rounded-t-3xl" style={{
                  background: 'linear-gradient(90deg, #00B8A9 0%, #FF8C42 100%)'
                }}></div>
                <p className="text-lg mb-6 italic" style={{ color: '#2D2D2D' }}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full" style={{
                    background: 'linear-gradient(135deg, #00B8A9 0%, #1A4D4D 100%)'
                  }}></div>
                  <div>
                    <p className="font-bold" style={{ color: '#1A4D4D' }}>{testimonial.author}</p>
                    <p className="text-sm" style={{ color: '#2D2D2D', opacity: 0.7 }}>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-3xl p-16 text-center" style={{
          background: 'linear-gradient(135deg, #00B8A9 0%, #1A4D4D 100%)'
        }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            filter: 'blur(60px)',
            transform: 'translate(30%, -30%)'
          }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full" style={{
            background: 'rgba(255, 140, 66, 0.2)',
            filter: 'blur(60px)',
            transform: 'translate(-30%, 30%)'
          }}></div>

          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Let's Chat and Increase Student Employability Today!
            </h2>
            <p className="text-xl mb-10 text-white opacity-90">
              Schedule a call with us to discover how our platform can provide your students with invaluable global work experience
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#FF8C42',
                color: '#FFFFFF',
                boxShadow: '0 10px 30px rgba(255, 140, 66, 0.3)'
              }}
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

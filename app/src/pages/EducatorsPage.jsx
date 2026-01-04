import { Link } from 'react-router-dom';

export default function GovernmentsPage() {
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
      description: 'One month or less between registration and placement of individuals you put on our platform.',
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
      description: 'Build confidence and prepare for future jobs through global work experience and skills development programs.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Talent Mobility',
      description: "Offer cross-industry work experience opportunities to ensure career advancement and an agile workforce.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: 'Diversify Economies',
      description: 'Offer work experience opportunities across industries, preparing individuals for future jobs in emerging fields.',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Customizable Matching',
      description: "Access the world's largest and fastest-growing platform of opportunities, customized to your needs.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "I facilitated one of the most memorable workshops for the Women Returners Programme run by Virtual Internships as part of a Scottish Government initiative. I was absolutely struck by the experience, passion, and different journeys of the fantastic ladies on the programme.",
      author: 'Louise Linnander',
      position: 'Former Partnerships Manager at Kiron'
    },
    {
      quote: "The overall experience with Virtual Internships was outstanding. The independence in implementation was really helpful and provided high efficiency. Our trust in Virtual Internships to provide the best experience to our students was surely in the right place.",
      author: 'Maggie Chen',
      position: 'Co-founder, Girls in Charge Initiative'
    },
    {
      quote: "During a crisis, it is even more difficult to find a job. Through the partnership with Virtual Internships, these learners get a great opportunity to experience a virtual workplace, build their skills, get tailored support and mentoring, and grow their networks.",
      author: 'Joy Cherfan',
      position: 'Project Manager, Kiron Lebanon'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-32" style={{ background: 'linear-gradient(135deg, #1A4D4D 0%, #FF8C42 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 backdrop-blur-xl" style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-sm font-semibold text-white">FOR GOVERNMENTS</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white">
                Guarantee Work Experience to <span className="opacity-90">Bridge the Global Skills Gap</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-10 text-white/90 max-w-xl">
                The leading platform to address talent shortages and unemployment with skills development at scale
              </p>
              
              <Link to="/contact" className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 text-white" style={{ backgroundColor: '#FF8C42', boxShadow: '0 10px 30px rgba(255, 140, 66, 0.3)' }}>
                <span>Find Out More</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Hero Image */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3)' }}>
                <img src="/career-placement-girl.png" alt="Government workforce" className="w-full h-auto object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(26, 77, 77, 0.2) 0%, transparent 100%)' }}></div>
              </div>
              
              {/* Stats card */}
              <div className="absolute -left-8 bottom-8 p-6 rounded-2xl backdrop-blur-xl" style={{ background: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#1A4D4D' }}>130+</div>
                    <div className="text-xs" style={{ color: '#2D2D2D' }}>Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#FF8C42' }}>1 Month</div>
                    <div className="text-xs" style={{ color: '#2D2D2D' }}>To Placement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* Challenge Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(255, 140, 66, 0.1)' }}>
              <svg className="w-5 h-5" style={{ color: '#FF8C42' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-sm font-semibold" style={{ color: '#FF8C42' }}>THE CHALLENGE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              Global Skills Gap Crisis
            </h2>
            <p className="text-lg mb-6" style={{ color: '#2D2D2D' }}>
              Jobs of the future will require ever-evolving specialized skills, making upskilling and reskilling crucial. There is increasing pressure on governments to tackle labor shortages and unemployment rates that have risen as a result of the evolving job market.
            </p>
            <p className="text-lg" style={{ color: '#2D2D2D', opacity: 0.8 }}>
              Governments must provide access to skills development programs that help workers thrive and access employment opportunities, doing so on a scalable basis.
            </p>
          </div>
          <div className="relative">
            <div className="p-8 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(26, 77, 77, 0.1) 0%, rgba(255, 140, 66, 0.1) 100%)', border: '2px solid rgba(26, 77, 77, 0.1)' }}>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white text-center" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#1A4D4D' }}>85%</div>
                  <div className="text-sm" style={{ color: '#2D2D2D' }}>of jobs in 2030 don't exist yet</div>
                </div>
                <div className="p-6 rounded-2xl bg-white text-center" style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#FF8C42' }}>$8.5T</div>
                  <div className="text-sm" style={{ color: '#2D2D2D' }}>Lost due to talent shortage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="py-32" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(26, 77, 77, 0.05) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(0, 184, 169, 0.1)' }}>
              <svg className="w-5 h-5" style={{ color: '#00B8A9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold" style={{ color: '#00B8A9' }}>THE SOLUTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              Virtual Internships
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
              Due to the changing landscape of the job market, our platform offers dedicated solutions for skills development and real-world work experience, proven to boost employability and work-ready skills in just weeks.
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
                  border: '1px solid rgba(26, 77, 77, 0.1)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" style={{
                  background: 'linear-gradient(135deg, #1A4D4D 0%, #00B8A9 100%)',
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
          <h2 className="text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
            Opportunities for Upskilling, Regardless of Location
          </h2>
          <p className="text-xl max-w-4xl mx-auto" style={{ color: '#2D2D2D' }}>
            By partnering with Virtual Internships, governments and foundations take the proactive step toward building talent pipelines and strengthening their economies for a sustainable future
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { number: '250k+', label: 'Global Internships', subtitle: 'Available Now and Growing' },
            { number: '45', label: 'Days, Or Less', subtitle: 'Between Registration and Placement' },
            { number: '1 in 4', label: 'Interns', subtitle: 'Offered Further Opportunities Immediately Upon Completion' }
          ].map((stat, index) => (
            <div
              key={index}
              className="relative p-10 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2"
              style={{
                background: 'linear-gradient(135deg, rgba(26, 77, 77, 0.1) 0%, rgba(255, 140, 66, 0.1) 100%)',
                border: '2px solid rgba(26, 77, 77, 0.2)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-4" style={{
                color: '#1A4D4D',
                textShadow: '0 2px 10px rgba(26, 77, 77, 0.3)'
              }}>
                {stat.number}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#FF8C42' }}>
                {stat.label}
              </h3>
              <p className="text-sm" style={{ color: '#2D2D2D', opacity: 0.8 }}>
                {stat.subtitle}
              </p>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1A4D4D 0%, #00B8A9 100%)' }}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-32" style={{ background: 'linear-gradient(180deg, rgba(26, 77, 77, 0.05) 0%, #FFFFFF 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(255, 140, 66, 0.1)' }}>
              <svg className="w-5 h-5" style={{ color: '#FF8C42' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-sm font-semibold" style={{ color: '#FF8C42' }}>TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              Hear From Our Partners
            </h2>
            <p className="text-xl" style={{ color: '#2D2D2D' }}>
              Don't just take our word for it, our global partners say it best…
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative rounded-3xl p-10 transition-all duration-500 hover:-translate-y-4 group"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(26, 77, 77, 0.1)'
                }}
              >
                <div className="absolute top-0 left-0 w-full h-2 rounded-t-3xl" style={{
                  background: 'linear-gradient(90deg, #1A4D4D 0%, #FF8C42 100%)'
                }}></div>
                <div className="absolute top-6 right-6">
                  <svg className="w-10 h-10 opacity-20" style={{ color: '#1A4D4D' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-lg mb-8 italic leading-relaxed" style={{ color: '#2D2D2D' }}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{
                    background: 'linear-gradient(135deg, #1A4D4D 0%, #00B8A9 100%)'
                  }}>
                    {testimonial.author.charAt(0)}
                  </div>
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
          background: 'linear-gradient(135deg, #1A4D4D 0%, #FF8C42 100%)'
        }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            filter: 'blur(60px)',
            transform: 'translate(30%, -30%)'
          }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full" style={{
            background: 'rgba(0, 184, 169, 0.2)',
            filter: 'blur(60px)',
            transform: 'translate(-30%, 30%)'
          }}></div>

          </div>
        </div>
      </div>
    </div>
  );
}

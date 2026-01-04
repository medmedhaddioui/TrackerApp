import { Link } from 'react-router-dom';

export default function GovernmentsPage() {
  const benefits = [
    {
      title: 'Global Scale',
      description: 'Every individual gains access regardless of their previous experience or location.'
    },
    {
      title: 'Speed',
      description: 'One month or less between registration and placement of individuals you put on our platform.'
    },
    {
      title: 'Boosts Employability',
      description: 'Individuals gain the experience, skills, and competencies employers are actively seeking.'
    },
    {
      title: 'Future Skills',
      description: 'Build confidence and prepare for future jobs through global work experience and skills development programs.'
    },
    {
      title: 'Talent Mobility',
      description: 'Offer cross-industry work experience opportunities to ensure career advancement and an agile workforce.'
    },
    {
      title: 'Diversify Economies',
      description: 'Offer work experience opportunities across industries, preparing individuals for future jobs in emerging fields.'
    },
    {
      title: 'Customizable Matching',
      description: 'Access the world\'s largest and fastest-growing platform of opportunities, customized to your needs.'
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
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-32" style={{
        background: 'linear-gradient(135deg, #1A4D4D 0%, #FF8C42 100%)'
      }}>
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse" style={{
            background: '#00B8A9',
            top: '-10%',
            right: '-5%',
            filter: 'blur(80px)'
          }}></div>
          <div className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse" style={{
            background: '#FFFFFF',
            bottom: '-10%',
            left: '-5%',
            filter: 'blur(80px)',
            animationDelay: '1s'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-6 py-2 rounded-full mb-6" style={{
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <span className="text-sm font-semibold text-white">FOR GOVERNMENTS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              Guarantee Work Experience Opportunities to Bridge the Global Skills Gap
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white opacity-90 max-w-4xl mx-auto">
              The leading platform to address talent shortages and unemployment with skills development at scale
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
              Find Out More
            </Link>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
            The Challenge
          </h2>
          <p className="text-xl max-w-4xl mx-auto" style={{ color: '#2D2D2D' }}>
            Jobs of the future will require ever-evolving specialized skills, making upskilling and reskilling crucial. There is increasing pressure on governments to tackle labor shortages and unemployment rates that have risen as a result of the evolving job market. Governments must provide access to skills development programs that help workers thrive and access employment opportunities, doing so on a scalable basis.
          </p>
        </div>
      </div>

      {/* Solution Section */}
      <div className="py-32" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(26, 77, 77, 0.05) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              The Solution? Virtual Internships
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
              Due to the changing landscape of the job market, our platform offers dedicated solutions for skills development and real-world work experience, proven to boost employability and work-ready skills in just weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 group"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(26, 77, 77, 0.1)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{
                  background: 'linear-gradient(135deg, #1A4D4D 0%, #FF8C42 100%)'
                }}>
                  <div className="w-8 h-8 rounded-lg" style={{ background: 'rgba(255, 255, 255, 0.3)' }}></div>
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

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Guarantee Work Experience Opportunities
            </h2>
            <p className="text-xl mb-10 text-white opacity-90">
              Access Real-World Global Work Experience to Bridge the Skills Gap and Diversify Economies
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function AffiliatesPage() {
  const benefits = [
    {
      title: 'Complete Flexibility',
      description: 'You choose your start date, internship length, and weekly commitment of hours.'
    },
    {
      title: 'Guaranteed Placement',
      description: 'No matter your degree, location, or experience – we\'ll find you the right internship.'
    },
    {
      title: 'Real Experience',
      description: 'Work remotely with one of 13,000 companies looking for ambitious talent like you.'
    },
    {
      title: 'Coaching & Support',
      description: 'You will be supported by a team of expert coaches to guide you towards career success.'
    },
    {
      title: 'Award-Winning Courses',
      description: 'Complement your internship with access to courses to build the skills that will set you apart.'
    },
    {
      title: 'Save Time',
      description: 'Tell us what remote internship you want – we match you based on your preferences.'
    }
  ];

  const successStories = [
    {
      name: 'Aishah Sofea',
      school: 'Kolej MARA Banting, Malaysia',
      internship: 'Remote Data & Business Analyst Internship, Maldives',
      current: 'Now completing her studies'
    },
    {
      name: 'John Passmore',
      school: 'University of Birmingham, UK',
      internship: 'Remote HR & Recruitment Internship, UK',
      current: 'Now Client Executive at Gartner'
    },
    {
      name: 'Angelina Oh',
      school: 'University of Pennsylvania',
      internship: 'Remote Finance Internship, South Korea',
      current: 'Now Incoming Investment Banking Analyst at J.P.Morgan'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-32" style={{
        background: 'linear-gradient(135deg, #00B8A9 0%, #FF8C42 100%)'
      }}>
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse" style={{
            background: '#1A4D4D',
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
              <span className="text-sm font-semibold text-white">AFFILIATE PARTNERS</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white">
              Gain An Unbeatable Advantage with a Virtual Internship
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white opacity-90 max-w-4xl mx-auto">
              We work with partners across the globe to provide guaranteed internships that enhance education experience through real-world work opportunities
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#00B8A9',
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)'
              }}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>

      {/* Challenge Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
            Now is the Time to Gain Remote Internship Experience
          </h2>
          <p className="text-xl max-w-4xl mx-auto mb-12" style={{ color: '#2D2D2D' }}>
            Not only is internship experience essential to gain your advantage in the market, employers are now actively looking for graduates with remote work skills.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { number: '85%', label: 'more likely to obtain employment', subtitle: 'after graduation if you complete an internship' },
            { number: 'By 2024', label: '73% of all departments', subtitle: 'in US companies will have remote workers' },
            { number: '1 in 4', label: 'VI interns get offered a position', subtitle: 'with their host company immediately upon completion' }
          ].map((stat, index) => (
            <div
              key={index}
              className="relative p-10 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.1) 0%, rgba(255, 140, 66, 0.1) 100%)',
                border: '2px solid rgba(0, 184, 169, 0.2)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="text-5xl font-bold mb-4" style={{
                color: '#00B8A9',
                textShadow: '0 2px 10px rgba(0, 184, 169, 0.3)'
              }}>
                {stat.number}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1A4D4D' }}>
                {stat.label}
              </h3>
              <p className="text-sm" style={{ color: '#2D2D2D', opacity: 0.8 }}>
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-32" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(0, 184, 169, 0.05) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              Why Apply for a Virtual Internship
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 group"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 184, 169, 0.1)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{
                  background: 'linear-gradient(135deg, #00B8A9 0%, #FF8C42 100%)'
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

      {/* Success Stories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
            This Could Be You
          </h2>
          <p className="text-xl" style={{ color: '#2D2D2D' }}>
            Join our global network of alumni who have landed prestigious jobs worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
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
              <div className="w-20 h-20 rounded-full mx-auto mb-6" style={{
                background: 'linear-gradient(135deg, #00B8A9 0%, #FF8C42 100%)'
              }}></div>
              <h3 className="text-2xl font-bold mb-2 text-center" style={{ color: '#1A4D4D' }}>
                {story.name}
              </h3>
              <p className="text-sm mb-4 text-center" style={{ color: '#2D2D2D', opacity: 0.7 }}>
                {story.school}
              </p>
              <p className="text-sm mb-2 font-semibold text-center" style={{ color: '#00B8A9' }}>
                {story.internship}
              </p>
              <p className="text-sm text-center" style={{ color: '#FF8C42', fontWeight: 'bold' }}>
                {story.current}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-32" style={{ background: 'linear-gradient(180deg, rgba(0, 184, 169, 0.05) 0%, #FFFFFF 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              What's Next?
            </h2>
            <p className="text-xl" style={{ color: '#2D2D2D' }}>
              Find Your Work Experience in Three Steps
            </p>
            <p className="text-lg mt-4" style={{ color: '#2D2D2D', opacity: 0.8 }}>
              It's never been easier to gain global work experience that will give you an unbeatable advantage for your career
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: 'Step 1', title: 'Enroll now and complete the online application' },
              { step: 'Step 2', title: 'Tell us what you\'re looking for so we can find the perfect match' },
              { step: 'Step 3', title: 'Start your Virtual Internship and gain a career advantage' }
            ].map((item, index) => (
              <div
                key={index}
                className="relative p-10 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: '#FFFFFF',
                  border: '2px solid rgba(0, 184, 169, 0.2)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white" style={{
                  background: 'linear-gradient(135deg, #00B8A9 0%, #FF8C42 100%)'
                }}>
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#00B8A9' }}>
                  {item.step}
                </h3>
                <p className="text-lg" style={{ color: '#2D2D2D' }}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-3xl p-16 text-center" style={{
          background: 'linear-gradient(135deg, #00B8A9 0%, #FF8C42 100%)'
        }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full" style={{
            background: 'rgba(255, 255, 255, 0.1)',
            filter: 'blur(60px)',
            transform: 'translate(30%, -30%)'
          }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full" style={{
            background: 'rgba(26, 77, 77, 0.2)',
            filter: 'blur(60px)',
            transform: 'translate(-30%, 30%)'
          }}></div>

          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-6 text-white">
              What Are You Waiting For?
            </h2>
            <p className="text-xl mb-10 text-white opacity-90">
              Start your career journey with Virtual Internships
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#00B8A9',
                boxShadow: '0 10px 30px rgba(255, 255, 255, 0.3)'
              }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

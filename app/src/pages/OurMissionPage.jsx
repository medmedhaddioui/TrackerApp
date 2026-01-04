import { Link } from 'react-router-dom';

export default function OurMissionPage() {
  const stats = [
    { number: '300+', label: 'Partners', description: 'have given their audiences an unbeatable advantage' },
    { number: '10,000+', label: 'Alumni', description: 'have gained experience through our platform to launch their careers' },
    { number: '18,000+', label: 'Companies', description: 'on our platform are vetted to work with diverse GenZ talent' }
  ];

  const investors = [
    { name: 'Sequoia', description: 'Backed AirBnb, LinkedIn' },
    { name: 'Arsenal Growth', description: 'Growth Equity' },
    { name: 'Kaplan', description: 'Education Partner' },
    { name: 'Ascend Vietnam', description: 'Ventures' },
    { name: 'STIC', description: 'Investment Partner' },
    { name: 'Salica', description: 'Investments' }
  ];

  const leaders = [
    {
      name: 'Ed Holroyd Pearce',
      title: 'Co-Founder & President',
      quote: "At VI, our mission is to bridge the gap between education and the workplace, and that means trying to find the best and most efficient way to get young people real experience in companies worldwide, whilst finding the right balance to do that in a scalable yet personalised way. One of the most important things here at VI is accessibility. We are trying to reduce or completely remove the barriers to internships."
    },
    {
      name: 'Jason Kan',
      title: 'Chief Operating Officer',
      quote: "The Virtual Internships mission, for me, is all about enhancing and accelerating employability for students, graduates, and those at varying stages of their career around the world. We provide that solution by enabling them to secure a guaranteed internship with thousands of innovative companies around the world."
    },
    {
      name: 'Dan Nivern',
      title: 'CEO & Co-Founder',
      quote: "It's an ever-evolving world out there. As per the World Economic Forum, it's estimated that 85 million jobs will be displaced by automation and machinery. However, this shift will also create a window of opportunity for 97 million new jobs in various fields. Hence, it's crucial for us at Virtual Internships to steer towards this direction and aid students and educational partners to align themselves with the jobs of the future."
    }
  ];

  const pressLogos = ['TechCrunch', 'BBC', 'Forbes', 'Entrepreneur', 'HolonIQ'];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-32" style={{ background: 'linear-gradient(135deg, #0A2A2A 0%, #1A4D4D 50%, #00B8A9 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 backdrop-blur-xl" style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-sm font-semibold text-white">OUR MISSION</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white">
            Create a World Where <span style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FFB88C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Guaranteed Internships</span> Are Accessible to All
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-white/80 max-w-3xl mx-auto">
            It's a classic dilemma: To get a job, you need experience. But to gain experience, you need a job. We have found a way to break this vicious cycle.
          </p>

          <Link to="/about/team" className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 text-white" style={{ backgroundColor: '#FF8C42', boxShadow: '0 10px 30px rgba(255, 140, 66, 0.3)' }}>
            <span>Meet Our Team</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* The Problem Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(255, 140, 66, 0.1)' }}>
              <svg className="w-5 h-5" style={{ color: '#FF8C42' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="text-sm font-semibold" style={{ color: '#FF8C42' }}>THE CHALLENGE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              Breaking the Vicious Cycle
            </h2>
            <p className="text-lg mb-6" style={{ color: '#2D2D2D' }}>
              Internships are one of the main routes to work experience. Yet they are infamously hard to secure without prior work experience, relocating, or having the right contacts.
            </p>
            <p className="text-lg" style={{ color: '#2D2D2D', opacity: 0.8 }}>
              Our unique platform ensures intelligent, rapid matches between students and companies, provides access to real global internships at the world's most exciting companies, trains students before and during the internship, and unlocks a global network of relationships.
            </p>
          </div>
          <div className="relative">
            <div className="p-8 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(255, 140, 66, 0.1) 0%, rgba(0, 184, 169, 0.1) 100%)', border: '2px solid rgba(255, 140, 66, 0.2)' }}>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #00B8A9 100%)' }}>
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <p className="text-xl font-bold mb-2" style={{ color: '#1A4D4D' }}>No Experience</p>
                <svg className="w-8 h-8 mx-auto my-4" style={{ color: '#FF8C42' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <p className="text-xl font-bold" style={{ color: '#1A4D4D' }}>No Job</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(0, 184, 169, 0.05) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(0, 184, 169, 0.1)' }}>
              <svg className="w-5 h-5" style={{ color: '#00B8A9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span className="text-sm font-semibold" style={{ color: '#00B8A9' }}>SINCE 2018</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              Our Goal to Bridge the Gap
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
              Our goal to bridge the gap between education and the workplace is unchanging, and we've grown with it as more and more people have joined our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative p-10 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.1) 0%, rgba(26, 77, 77, 0.1) 100%)',
                  border: '2px solid rgba(0, 184, 169, 0.2)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-4" style={{ color: '#00B8A9' }}>
                  {stat.number}
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: '#1A4D4D' }}>
                  {stat.label}
                </h3>
                <p className="text-sm" style={{ color: '#2D2D2D', opacity: 0.8 }}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Backed by the Best */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
            Backed by the Best
          </h2>
          <p className="text-xl" style={{ color: '#2D2D2D' }}>
            The same investors that backed AirBnb, LinkedIn, and Udemy are in our corner.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {investors.map((investor, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2"
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(0, 184, 169, 0.2)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1A4D4D 0%, #00B8A9 100%)' }}>
                <span className="text-white font-bold text-xl">{investor.name.charAt(0)}</span>
              </div>
              <h3 className="font-bold" style={{ color: '#1A4D4D' }}>{investor.name}</h3>
              <p className="text-sm" style={{ color: '#2D2D2D', opacity: 0.7 }}>{investor.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Driven by the Best */}
      <div className="py-24" style={{ background: 'linear-gradient(180deg, rgba(0, 184, 169, 0.05) 0%, #FFFFFF 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              Driven by the Best
            </h2>
          </div>

          <div className="space-y-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 184, 169, 0.1)'
                }}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white" style={{ background: 'linear-gradient(135deg, #00B8A9 0%, #1A4D4D 100%)' }}>
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg italic mb-6" style={{ color: '#2D2D2D' }}>
                      "{leader.quote}"
                    </p>
                    <div>
                      <p className="font-bold" style={{ color: '#1A4D4D' }}>{leader.name}</p>
                      <p className="text-sm" style={{ color: '#FF8C42' }}>{leader.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured In */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold" style={{ color: '#1A4D4D' }}>Featured In</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {pressLogos.map((logo, index) => (
            <div
              key={index}
              className="px-8 py-4 rounded-xl"
              style={{ background: 'rgba(0, 184, 169, 0.05)' }}
            >
              <span className="text-xl font-bold" style={{ color: '#1A4D4D' }}>{logo}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-3xl p-16 text-center" style={{ background: 'linear-gradient(135deg, #00B8A9 0%, #1A4D4D 100%)' }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.1)', filter: 'blur(60px)', transform: 'translate(30%, -30%)' }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full" style={{ background: 'rgba(255, 140, 66, 0.2)', filter: 'blur(60px)', transform: 'translate(-30%, 30%)' }}></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Join Our Mission
            </h2>
            <p className="text-xl mb-10 text-white opacity-90">
              Be part of the movement to make internships accessible to everyone
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about/team" className="inline-block px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#FF8C42', color: '#FFFFFF', boxShadow: '0 10px 30px rgba(255, 140, 66, 0.3)' }}>
                Meet Our Team
              </Link>
              <Link to="/about/join-us" className="inline-block px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#FFFFFF', color: '#1A4D4D' }}>
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function OurTeamPage() {
  const teamStats = [
    { number: '100+', label: 'people in our global team' },
    { number: '20+', label: 'countries where our team are located' },
    { number: '15', label: 'languages spoken' },
    { number: '60%', label: 'women in our global team' }
  ];

  const leadership = [
    { name: 'Dan Nivern', title: 'CEO & Co-Founder', location: 'UK' },
    { name: 'Ed Holroyd Pearce', title: 'Co-Founder & President', location: 'UK' },
    { name: 'Jason Kan', title: 'Chief Operating Officer', location: 'Vietnam' },
    { name: 'Jillian Low', title: 'Chief Strategy Officer', location: 'USA' },
    { name: 'Katina Dell\'Acqua-Lubich', title: 'Chief Financial Officer', location: 'Vietnam' },
    { name: 'Nadim Naccache', title: 'General Counsel', location: 'Vietnam' },
    { name: 'Nitin Sangwan', title: 'VP of Engineering', location: 'India' },
    { name: 'Gemma Goodbourn', title: 'VP of Growth Marketing', location: 'UAE' },
    { name: 'Andrei Perevalov', title: 'Head of People Operations', location: 'Malaysia' }
  ];

  const teamMembers = [
    { name: 'Helen Nguyen', title: 'Company Account Executive', location: 'Vietnam' },
    { name: 'Laura Bidegain', title: 'Intern Coach', location: 'Argentina' },
    { name: 'Juliana Messias', title: 'Intern Experience Manager', location: 'Brazil' },
    { name: 'Dat Pham', title: 'Marketing Associate', location: 'Vietnam' },
    { name: 'Syahrir Suib', title: 'Partnerships Account Manager (APAC)', location: 'Malaysia' },
    { name: 'Mark Eres', title: 'Account Executive', location: 'USA' },
    { name: 'Simone Labuschagne', title: 'Host Company Success Executive', location: 'South Africa' },
    { name: 'Shaun Butcher', title: 'Global Head of Partnerships Development', location: 'Spain' },
    { name: 'Mirta Aguirre', title: 'Head of Employability', location: 'Argentina' },
    { name: 'Raksha Kini', title: 'Head of Company Account Management', location: 'India' },
    { name: 'Ankur Goyal', title: 'Senior Product Manager', location: 'India' },
    { name: 'Grace Homer', title: 'Content Marketing Manager', location: 'UK' }
  ];

  const advisors = [
    { name: 'David Armstrong', title: 'Board Advisor', location: 'USA' },
    { name: 'Aaron Sokol', title: 'Advisor', location: 'USA' },
    { name: 'Nicole Goldstein', title: 'Board Advisor', location: 'USA' },
    { name: 'Max Johnson', title: 'Advisor', location: 'Indonesia' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-32" style={{ background: 'linear-gradient(135deg, #1A4D4D 0%, #00B8A9 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-30" style={{ background: 'radial-gradient(circle, #FFFFFF 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8 backdrop-blur-xl" style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid rgba(255, 255, 255, 0.3)' }}>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-sm font-semibold text-white">OUR TEAM</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight text-white">
            Our Team
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-white/80 max-w-3xl mx-auto">
            Our team is composed of remote workers who are experts in their fields, no matter where they call home
          </p>
        </div>
      </div>

      {/* Remote-First Philosophy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(0, 184, 169, 0.1)' }}>
            <svg className="w-5 h-5" style={{ color: '#00B8A9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold" style={{ color: '#00B8A9' }}>REMOTE-FIRST</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
            Our Remote-First Philosophy: Best Minds Anywhere
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
            At Virtual Internships, we believe that talent knows no boundaries. As a VC-backed, high-growth startup, we understand that having the right people onboard our mission is imperative to our success.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {teamStats.map((stat, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.1) 0%, rgba(26, 77, 77, 0.1) 100%)',
                border: '2px solid rgba(0, 184, 169, 0.2)'
              }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: '#00B8A9' }}>
                {stat.number}
              </div>
              <p className="text-sm" style={{ color: '#2D2D2D' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-24" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(0, 184, 169, 0.05) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              Driving Our Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl text-center transition-all duration-500 hover:-translate-y-4 group"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(0, 184, 169, 0.1)'
                }}
              >
                <div className="absolute top-0 left-0 w-full h-2 rounded-t-3xl" style={{ background: 'linear-gradient(90deg, #00B8A9 0%, #FF8C42 100%)' }}></div>
                <div className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-110" style={{ background: 'linear-gradient(135deg, #1A4D4D 0%, #00B8A9 100%)' }}>
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#1A4D4D' }}>
                  {leader.name}
                </h3>
                <p className="text-sm font-semibold mb-1" style={{ color: '#FF8C42' }}>
                  {leader.title}
                </p>
                <p className="text-sm" style={{ color: '#2D2D2D', opacity: 0.7 }}>
                  {leader.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
            Introducing Our Global Team
          </h2>
          <p className="text-xl" style={{ color: '#2D2D2D' }}>
            Get to know the rest of us
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-2"
              style={{
                background: '#FFFFFF',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                border: '1px solid rgba(0, 184, 169, 0.1)'
              }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-lg font-bold text-white" style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? '#00B8A9' : '#FF8C42'} 0%, #1A4D4D 100%)` }}>
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 className="font-bold mb-1" style={{ color: '#1A4D4D' }}>
                {member.name}
              </h3>
              <p className="text-xs mb-1" style={{ color: '#2D2D2D', opacity: 0.8 }}>
                {member.title}
              </p>
              <p className="text-xs" style={{ color: '#00B8A9' }}>
                {member.location}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Advisors Section */}
      <div className="py-24" style={{ background: 'linear-gradient(180deg, rgba(0, 184, 169, 0.05) 0%, #FFFFFF 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: '#1A4D4D' }}>
              Meet Our Team of Advisors
            </h2>
            <p className="text-xl" style={{ color: '#2D2D2D' }}>
              Experts in Their Fields
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl text-center transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                  border: '1px solid rgba(255, 140, 66, 0.2)'
                }}
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-xl font-bold text-white" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #1A4D4D 100%)' }}>
                  {advisor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#1A4D4D' }}>
                  {advisor.name}
                </h3>
                <p className="text-sm font-semibold mb-1" style={{ color: '#FF8C42' }}>
                  {advisor.title}
                </p>
                <p className="text-sm" style={{ color: '#2D2D2D', opacity: 0.7 }}>
                  {advisor.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative overflow-hidden rounded-3xl p-16 text-center" style={{ background: 'linear-gradient(135deg, #1A4D4D 0%, #00B8A9 100%)' }}>
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full" style={{ background: 'rgba(255, 255, 255, 0.1)', filter: 'blur(60px)', transform: 'translate(30%, -30%)' }}></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full" style={{ background: 'rgba(255, 140, 66, 0.2)', filter: 'blur(60px)', transform: 'translate(-30%, 30%)' }}></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Want to Join Our Team?
            </h2>
            <p className="text-xl mb-10 text-white opacity-90">
              We're always looking for talented individuals to join our mission
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about/join-us" className="inline-block px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#FF8C42', color: '#FFFFFF', boxShadow: '0 10px 30px rgba(255, 140, 66, 0.3)' }}>
                View Open Roles
              </Link>
              <Link to="/about/mission" className="inline-block px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#FFFFFF', color: '#1A4D4D' }}>
                Our Mission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

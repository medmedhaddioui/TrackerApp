export function Proposition () {
      const values = [
    {
      title: 'Global Opportunities',
      description: 'Access internships across 80+ countries with leading companies worldwide. No geographical barriers—work remotely from anywhere in the world.'
    },
    {
      title: 'Guaranteed Experience',
      description: 'We guarantee real-world work experience with verified companies. Gain practical skills through meaningful projects that contribute to your career growth.'
    },
    {
      title: 'Industry Mentorship',
      description: 'Learn from experienced professionals who guide you throughout your internship. Get personalized feedback and develop skills that employers value.'
    },
    {
      title: 'Career Development',
      description: 'Build your professional network, enhance your resume, and develop essential career skills. Our platform prepares you for the future of work.'
    },
    {
      title: 'Flexible & Remote',
      description: 'All internships are remote, giving you flexibility to work from anywhere. Balance your studies, part-time work, and gain international experience.'
    },
    {
      title: 'Proven Success',
      description: 'Join 250,000+ interns who have launched successful careers through our platform. With 95% satisfaction and 1 in 3 hired post-completion, we deliver results.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Solution: Virtual Internships</h2>
          <p className="text-xl text-gray-600">Connecting educators, companies, and interns to create lasting, meaningful impact</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

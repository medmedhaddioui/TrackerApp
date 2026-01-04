export function Benefits() {
  const benefits = [
    {
      category: 'For Interns',
      title: 'Launch Your Career',
      description: 'Gain global work experience, develop valuable professional skills, and build meaningful connections that open doors to future opportunities.',
      stat: '95% satisfaction rate'
    },
    {
      category: 'For Companies',
      title: 'Access Top Talent',
      description: 'Connect with pre-vetted, motivated interns ready to contribute to your business. Build your future talent pipeline with remote team members.',
      stat: 'Pre-vetted interns'
    },
    {
      category: 'For Educators',
      title: 'Enhance Curriculum',
      description: 'Seamlessly integrate real-world internships into your programs. Improve student employability and prepare graduates for the modern workforce.',
      stat: '80+ countries'
    },
    {
      category: 'Global Reach',
      title: 'Work From Anywhere',
      description: 'Remote internships mean no geographical barriers. Access opportunities worldwide and work with international companies from your location.',
      stat: '250k+ internships'
    },
    {
      category: 'Career Growth',
      title: 'Real-World Skills',
      description: 'Develop essential career skills through hands-on projects. Learn from industry professionals and gain experience that employers value.',
      stat: 'Industry mentorship'
    },
    {
      category: 'High Success Rate',
      title: 'Get Hired',
      description: 'Our program leads to real results. 1 in 3 interns receive job offers upon completion, turning internships into career opportunities.',
      stat: '1 in 3 hired'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Proven Results: Global Impact</h2>
          <p className="text-xl text-gray-600">Real outcomes for interns, companies, and educators worldwide</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl border border-gray-200 hover:border-purple-400 hover:shadow-xl transition-all">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{benefit.category}</span>
              <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {benefit.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Programs() {
  const programs = [
    {
      title: 'Business & Finance',
      description: 'Gain hands-on experience in business development, financial analysis, consulting, and entrepreneurship. Work with startups and established companies.',
      highlights: [
        'Business Development',
        'Financial Analysis',
        'Consulting Projects',
        'Strategic Planning'
      ],
      popular: true
    },
    {
      title: 'Technology & Engineering',
      description: 'Work on real software projects, AI development, data science, and engineering tasks. Build your technical portfolio with meaningful contributions.',
      highlights: [
        'Software Development',
        'Data Science & AI',
        'Product Management',
        'Technical Projects'
      ]
    },
    {
      title: 'Marketing & Communications',
      description: 'Develop marketing strategies, manage social media campaigns, create content, and learn digital marketing from industry professionals.',
      highlights: [
        'Digital Marketing',
        'Content Creation',
        'Social Media Strategy',
        'Brand Management'
      ]
    },
    {
      title: 'Design & Creative',
      description: 'Work on graphic design, UX/UI projects, video production, and creative campaigns. Build your portfolio with real client work.',
      highlights: [
        'Graphic Design',
        'UX/UI Design',
        'Video Production',
        'Creative Strategy'
      ]
    },
    {
      title: 'Human Resources',
      description: 'Learn recruitment, talent management, employee engagement, and HR operations. Gain experience in building and managing teams.',
      highlights: [
        'Recruitment & Hiring',
        'Talent Development',
        'HR Operations',
        'Employee Engagement'
      ]
    },
    {
      title: 'Research & Analytics',
      description: 'Conduct market research, data analysis, and business intelligence projects. Develop analytical skills that are in high demand.',
      highlights: [
        'Market Research',
        'Data Analysis',
        'Business Intelligence',
        'Report Writing'
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Internship Categories</h2>
          <p className="text-xl text-gray-600">Explore opportunities across diverse industries</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all ${program.popular ? 'border-2 border-blue-500 relative' : 'border border-gray-200'}`}>
              {program.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
              <ul className="space-y-2 mb-6">
                {program.highlights.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

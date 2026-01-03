export function Programs() {
  const programs = [
    {
      title: 'Full-Stack Web Development',
      description: 'Master modern web development from front-end to back-end. Build real-world applications using React, Node.js, and cloud technologies.',
      highlights: [
        'Duration: 12 weeks, 10-15 hrs/week',
        'Level: Beginner to Intermediate',
        'Skills: React, Node.js, PostgreSQL, AWS',
        'Format: Self-paced + live Q&A'
      ],
      popular: true
    },
    {
      title: 'Data Science & Machine Learning',
      description: 'Learn to analyze data and build ML models. Master Python, statistical analysis, and deploy production-ready AI solutions.',
      highlights: [
        'Duration: 16 weeks, 12-18 hrs/week',
        'Level: Intermediate',
        'Skills: Python, TensorFlow, Statistics',
        'Format: Project-based learning'
      ]
    },
    {
      title: 'Cloud Architecture & DevOps',
      description: 'Become a cloud expert with AWS, Azure, and GCP. Learn infrastructure as code, CI/CD pipelines, and container orchestration.',
      highlights: [
        'Duration: 10 weeks, 8-12 hrs/week',
        'Level: Intermediate to Advanced',
        'Skills: AWS, Docker, Kubernetes, Terraform',
        'Format: Hands-on labs'
      ]
    },
    {
      title: 'Mobile App Development',
      description: 'Build native iOS and Android apps. Learn React Native and Swift to create beautiful, performant mobile applications.',
      highlights: [
        'Duration: 14 weeks, 10-14 hrs/week',
        'Level: Beginner to Intermediate',
        'Skills: React Native, Swift, Firebase',
        'Format: Build 5 real apps'
      ]
    },
    {
      title: 'Cybersecurity Professional',
      description: 'Protect systems and networks from threats. Learn ethical hacking, security auditing, and compliance frameworks.',
      highlights: [
        'Duration: 20 weeks, 12-16 hrs/week',
        'Level: Intermediate',
        'Skills: Penetration testing, CISSP prep',
        'Format: Live security exercises'
      ]
    },
    {
      title: 'Product Management',
      description: 'Lead product development from idea to launch. Learn strategy, user research, roadmapping, and agile methodologies.',
      highlights: [
        'Duration: 8 weeks, 8-10 hrs/week',
        'Level: All levels',
        'Skills: Product strategy, User research, Agile',
        'Format: Case studies + mentorship'
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600">Choose the path that fits your goals</p>
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
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

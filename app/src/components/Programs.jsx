export function Programs() {
  const programs = [
    {
      title: 'Financial Markets',
      description: 'Track gold prices, stock markets, cryptocurrency, forex, and economic indicators. Perfect for traders and investors who need daily market updates.',
      highlights: [
        'Gold & Silver prices',
        'Stock market updates',
        'Cryptocurrency trends',
        'Economic news & analysis'
      ],
      popular: true
    },
    {
      title: 'Politics & Government',
      description: 'Follow political news about your country or internationally. Get updates on policies, elections, government decisions, and political analysis.',
      highlights: [
        'National politics',
        'International relations',
        'Policy changes',
        'Election coverage'
      ]
    },
    {
      title: 'Technology & Innovation',
      description: 'Stay updated on AI developments, software releases, tech company news, and innovations. Essential for tech professionals and enthusiasts.',
      highlights: [
        'AI & Machine Learning',
        'Software updates',
        'Tech company news',
        'Innovation trends'
      ]
    },
    {
      title: 'Business & Economy',
      description: 'Track business news, company earnings, mergers & acquisitions, and economic trends. Stay informed about the business world.',
      highlights: [
        'Company earnings',
        'Business strategies',
        'Market analysis',
        'Economic indicators'
      ]
    },
    {
      title: 'Sports & Entertainment',
      description: 'Follow your favorite sports teams, athletes, and entertainment news. Get scores, highlights, and breaking news from the sports world.',
      highlights: [
        'Live scores & results',
        'Team updates',
        'Player news',
        'Entertainment headlines'
      ]
    },
    {
      title: 'Custom Topics',
      description: 'Choose any topic you want to follow. From health and science to lifestyle and travel—create your perfect personalized news feed.',
      highlights: [
        'Health & wellness',
        'Science discoveries',
        'Travel updates',
        'Any custom topic'
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular News Topics</h2>
          <p className="text-xl text-gray-600">Choose the topics that matter to you</p>
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
                Follow This Topic
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

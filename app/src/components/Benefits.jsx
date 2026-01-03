export function Benefits() {
  const benefits = [
    {
      category: 'Time Savings',
      title: 'Save Hours Daily',
      description: 'Stop wasting time browsing multiple news sites and searching Google. Our AI does the work for you, delivering curated updates in minutes instead of hours.',
      stat: '3+ hours saved daily'
    },
    {
      category: 'Personalization',
      title: 'Your News, Your Way',
      description: 'Complete control over what you see. Whether you\'re tracking gold prices, political updates, or tech trends—get exactly what matters to you, nothing else.',
      stat: '100% customized'
    },
    {
      category: 'Stay Informed',
      title: 'Never Miss Updates',
      description: 'Get daily automated updates on all your chosen topics. Stay ahead with real-time news aggregation that works 24/7 to keep you informed.',
      stat: 'Real-time updates'
    },
    {
      category: 'Convenience',
      title: 'All In One Place',
      description: 'Track multiple topics from one dashboard. Traders, professionals, enthusiasts—everyone gets their personalized news hub without juggling multiple sources.',
      stat: 'Unlimited topics'
    },
    {
      category: 'Smart Filtering',
      title: 'Quality Over Quantity',
      description: 'Our AI filters out noise and irrelevant content, showing you only the most important and relevant updates. Get informed, not overwhelmed.',
      stat: '95% relevance rate'
    },
    {
      category: 'Easy Access',
      title: 'Effortless Daily Routine',
      description: 'Set your preferences once, then simply check your personalized page daily. No searching, no scrolling—just the news you need, automatically delivered.',
      stat: 'Set once, use forever'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What You'll Gain</h2>
          <p className="text-xl text-gray-600">Real benefits from smart news aggregation</p>
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
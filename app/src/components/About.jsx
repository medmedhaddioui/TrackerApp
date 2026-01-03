export function About() {
  const stats = [
    { value: '50,000+', label: 'Active Users' },
    { value: '500+', label: 'News Categories' },
    { value: '24/7', label: 'Auto Updates' },
    { value: '100%', label: 'Personalized' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About AI Daily News</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                AI Daily News is an intelligent news aggregation platform that lets you choose the type of news you want to follow daily. Instead of spending time searching Google every day, our AI automatically collects and displays the most relevant updates based on your interests.
              </p>
              <p>
                For example, a trader can select gold prices and related market updates to receive them automatically every day. A policy enthusiast may choose to follow political news about their country. A tech professional might track AI developments and software updates.
              </p>
              <p>
                Each day, our application generates a dedicated personalized page with fresh updates based on your selected interests. You interact with the app once, set your preferences, and get curated news delivered to you daily without the hassle of manual searching.
              </p>
              <p>
                What makes us different is our AI-powered curation combined with complete personalization. We don't just show you everything—we learn what matters to you and deliver exactly that, saving you time and keeping you informed effortlessly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
const Proposition = () => {
      const values = [
    {
      title: 'AI-Powered Curation',
      description: 'Our advanced AI algorithms scan thousands of sources to find the most relevant news based on your interests. Get quality over quantity with intelligent filtering.'
    },
    {
      title: 'Fully Personalized',
      description: 'Choose exactly what topics you want to follow—from gold prices to political updates, tech news to sports. Your daily news page is uniquely yours.'
    },
    {
      title: 'Daily Auto-Updates',
      description: 'No more manual searching. Every day, we automatically generate a fresh page with the latest updates on your chosen topics. Your news comes to you.'
    },
    {
      title: 'Save Time',
      description: 'Stop wasting hours browsing Google and news sites. We do the searching, filtering, and organizing for you. Spend minutes, not hours, staying informed.'
    },
    {
      title: 'Multiple Topics',
      description: 'Track as many topics as you want in one place. Whether you\'re a trader, professional, or just curious—follow everything that matters to you.'
    },
    {
      title: 'Always Current',
      description: 'Our AI works 24/7 to ensure you never miss important updates. Get real-time news aggregation that keeps you ahead of the curve on topics you care about.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose AI Daily News</h2>
          <p className="text-xl text-gray-600">Smart news aggregation that saves you time and keeps you perfectly informed</p>
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
export default Proposition
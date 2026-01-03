export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Account',
      description: 'Sign up with your email in under 2 minutes. No credit card required. Set up your profile and get ready to personalize your news experience.'
    },
    {
      number: '02',
      title: 'Select Your Topics',
      description: 'Choose the news categories you want to follow—gold prices, political updates, tech news, sports, or any topic you care about. Add as many as you like.'
    },
    {
      number: '03',
      title: 'Let AI Work',
      description: 'Our AI automatically scans thousands of sources daily, filtering and curating the most relevant news based on your selections. No manual searching required.'
    },
    {
      number: '04',
      title: 'Get Daily Updates',
      description: 'Every day, access your personalized news page with fresh, curated updates. Stay informed effortlessly and never miss what matters to you.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Get started in four simple steps</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all h-full">
                <div className="text-5xl font-bold text-blue-100 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Sign up as an intern, company, or educator. Complete your profile with your goals, skills, and interests to get matched with the perfect opportunities.'
    },
    {
      number: '02',
      title: 'Browse & Match',
      description: 'Explore thousands of internship opportunities across 80+ countries. Our platform matches you with positions that align with your career goals and interests.'
    },
    {
      number: '03',
      title: 'Start Your Internship',
      description: 'Get onboarded with your host company and begin working on real projects. Receive guidance from industry mentors and develop valuable professional skills.'
    },
    {
      number: '04',
      title: 'Build Your Career',
      description: 'Complete your internship, earn certifications, and build your professional network. Leverage your experience to land your dream job or continue growing.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get started in four simple steps</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-blue-200">
                {/* Step number badge */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="relative text-6xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent px-4 py-2">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative corner gradient */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              {/* Arrow connector between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 items-center justify-center">
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
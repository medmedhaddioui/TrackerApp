export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Account',
      description: 'Sign up with your email in under 2 minutes. No credit card required for our free tier. Verify your email and complete your profile setup to get personalized recommendations.'
    },
    {
      number: '02',
      title: 'Choose Your Path',
      description: 'Browse our curated learning paths or take a quick 5-minute assessment. We recommend programs based on your current skills, career goals, and available time commitment.'
    },
    {
      number: '03',
      title: 'Start Learning',
      description: 'Access your first lesson immediately. Follow structured modules with video lectures, reading materials, and coding exercises. Track your progress through our interactive dashboard.'
    },
    {
      number: '04',
      title: 'Earn & Apply',
      description: 'Complete courses to earn industry-recognized certificates. Build portfolio projects and apply your skills in real-world scenarios. Get career support to land your next role.'
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
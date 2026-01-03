export function Benefits() {
  const benefits = [
    {
      category: 'Career Growth',
      title: 'Accelerate Your Advancement',
      description: 'Join thousands who have advanced their careers through our programs. Our structured approach and industry-recognized certifications open doors to better opportunities.',
      stat: '89% promotion rate'
    },
    {
      category: 'Time Efficiency',
      title: 'Learn 3x Faster',
      description: 'Our curated curriculum and focused approach means you master skills faster than traditional self-study. Spend less time searching and more time learning.',
      stat: '300+ hours saved'
    },
    {
      category: 'Cost Savings',
      title: 'Unlimited Access',
      description: 'One membership gives you access to all courses with no per-course fees. Learn multiple skills without breaking the bank or making per-course commitments.',
      stat: '$5,000+ value'
    },
    {
      category: 'Confidence',
      title: 'Build Real Skills',
      description: 'Gain the confidence to tackle complex projects and lead technical teams. Our hands-on approach ensures you can apply what you learn immediately.',
      stat: '95% confidence boost'
    },
    {
      category: 'Community',
      title: 'Network & Collaborate',
      description: 'Connect with 50,000+ learners and industry professionals. Build relationships that support your learning journey and career growth long-term.',
      stat: '50,000+ members'
    },
    {
      category: 'Flexibility',
      title: 'Learn Your Way',
      description: 'Study on your schedule without sacrificing your current job or commitments. Access content 24/7 from any device and learn at the pace that works for you.',
      stat: '100% flexible'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What You'll Gain</h2>
          <p className="text-xl text-gray-600">Real results from real learners</p>
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
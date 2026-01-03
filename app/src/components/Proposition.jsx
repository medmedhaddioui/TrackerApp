const Proposition = () => {
      const values = [
    {
      title: 'Learn at Your Own Pace',
      description: 'Access 200+ courses anytime, anywhere. Our self-paced learning model means you never miss a lesson, and you can revisit content as many times as needed to truly master the material.'
    },
    {
      title: 'Industry-Expert Instructors',
      description: 'Learn from professionals currently working at top tech companies. Get real-world insights and practical knowledge that goes beyond theory to actual industry practices.'
    },
    {
      title: 'Hands-On Projects',
      description: 'Build your portfolio with real-world projects that demonstrate your skills to employers. Every course includes practical exercises that prepare you for actual job scenarios.'
    },
    {
      title: 'Career Support',
      description: 'Get resume reviews, interview prep, and career counseling from our dedicated support team. We help you not just learn, but also land your dream job in tech.'
    },
    {
      title: 'Lifetime Access',
      description: 'Once enrolled, you have permanent access to course materials and all future updates. Stay current with evolving technologies without additional costs.'
    },
    {
      title: 'Community & Networking',
      description: 'Join a vibrant community of 50,000+ learners and professionals. Collaborate on projects, share knowledge, and build connections that last throughout your career.'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose LearnHub</h2>
          <p className="text-xl text-gray-600">We combine industry expertise with flexible learning to help you master in-demand skills</p>
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
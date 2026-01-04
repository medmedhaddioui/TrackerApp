export function About() {
  const stats = [
    { value: '250k+', label: 'Global Internships' },
    { value: '80+', label: 'Countries' },
    { value: '95%', label: 'Intern Satisfaction' },
    { value: '1 in 3', label: 'Interns Hired' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Future of Work is Changing. Are You Ready?</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                As AI technology reshapes industries, work-based learning is more essential than ever. Real-world experience not only empowers learners but also equips employers with fresh talent ready to drive innovation.
              </p>
              <p>
                We connect educators, companies, and interns to create lasting, meaningful impact. Our platform provides access to remote, pre-vetted interns for companies, helps educators seamlessly embed internships into their curriculum, and enables interns to launch their careers with global experience.
              </p>
              <p>
                With over 250,000 global internships available across 80+ countries, we're building the world's largest network of meaningful work experiences. Our interns gain valuable skills and professional connections while companies get access to motivated talent ready to contribute.
              </p>
              <p>
                What makes us different is our proven track record: 95% intern satisfaction rate and 1 in 3 interns hired post-program completion. We're not just offering internships—we're shaping tomorrow's workforce, one internship at a time.
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
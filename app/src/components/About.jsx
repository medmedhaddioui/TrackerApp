export function About() {
  const stats = [
    { value: '10,000+', label: 'Students Trained' },
    { value: '87%', label: 'Completion Rate' },
    { value: '250+', label: 'Partner Companies' },
    { value: '47%', label: 'Avg. Salary Increase' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About LearnHub</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2020 by former tech industry leaders from Google, Amazon, and Microsoft, we recognized a critical gap between traditional education and the skills companies actually need in today's fast-paced digital economy.
              </p>
              <p>
                Our mission is to democratize access to high-quality technical education. We believe that anyone, regardless of their background or location, should have the opportunity to learn cutting-edge skills and build a rewarding career in technology.
              </p>
              <p>
                We've trained over 10,000 professionals who've gone on to work at leading companies like Google, Amazon, Microsoft, and innovative startups worldwide. Our graduates report an average salary increase of 47% within one year of completing their programs.
              </p>
              <p>
                What makes us different is our focus on practical, project-based learning combined with ongoing career support. We don't just teach theory—we prepare you for real-world challenges and help you succeed in your career journey.
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
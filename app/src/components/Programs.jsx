import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Programs() {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  
  const programs = [
    {
      title: 'Business & Finance',
      description: 'Gain hands-on experience in business development, financial analysis, consulting, and entrepreneurship. Work with startups and established companies.',
      highlights: [
        'Business Development',
        'Financial Analysis',
        'Consulting Projects',
        'Strategic Planning'
      ],
      popular: true
    },
    {
      title: 'Technology & Engineering',
      description: 'Work on real software projects, AI development, data science, and engineering tasks. Build your technical portfolio with meaningful contributions.',
      highlights: [
        'Software Development',
        'Data Science & AI',
        'Product Management',
        'Technical Projects'
      ]
    },
    {
      title: 'Marketing & Communications',
      description: 'Develop marketing strategies, manage social media campaigns, create content, and learn digital marketing from industry professionals.',
      highlights: [
        'Digital Marketing',
        'Content Creation',
        'Social Media Strategy',
        'Brand Management'
      ]
    },
    {
      title: 'Design & Creative',
      description: 'Work on graphic design, UX/UI projects, video production, and creative campaigns. Build your portfolio with real client work.',
      highlights: [
        'Graphic Design',
        'UX/UI Design',
        'Video Production',
        'Creative Strategy'
      ]
    },
    {
      title: 'Human Resources',
      description: 'Learn recruitment, talent management, employee engagement, and HR operations. Gain experience in building and managing teams.',
      highlights: [
        'Recruitment & Hiring',
        'Talent Development',
        'HR Operations',
        'Employee Engagement'
      ]
    },
    {
      title: 'Research & Analytics',
      description: 'Conduct market research, data analysis, and business intelligence projects. Develop analytical skills that are in high demand.',
      highlights: [
        'Market Research',
        'Data Analysis',
        'Business Intelligence',
        'Report Writing'
      ]
    }
  ];

  return (
    <section id="programs" className="py-24 px-4 sm:px-6 lg:px-8" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255,140,66,0.03) 50%, #FFFFFF 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div 
          ref={titleRef}
          className={`text-center mb-20 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>Internship Categories</h2>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>Explore opportunities across diverse industries</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="card-hover group relative bg-white p-8 rounded-3xl shadow-lg overflow-hidden opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {program.popular && (
                <div className="absolute -top-0 -right-0 px-6 py-2 rounded-bl-3xl text-sm font-bold text-white" style={{ backgroundColor: '#FF8C42', boxShadow: '0 4px 20px rgba(255,140,66,0.3)' }}>
                  Most Popular
                </div>
              )}
              <div className="absolute top-0 left-0 w-full h-2" style={{ background: program.popular ? 'linear-gradient(90deg, #FF8C42 0%, #00B8A9 100%)' : '#00B8A9' }}></div>
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl -z-0" style={{ backgroundColor: program.popular ? 'rgba(255,140,66,0.2)' : 'rgba(0,184,169,0.2)' }}></div>
              
              <div className="relative pt-4">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#1A4D4D' }}>{program.title}</h3>
                <p className="mb-6 leading-relaxed text-base" style={{ color: '#2D2D2D', opacity: 0.9 }}>{program.description}</p>
                <div className="space-y-3 mb-8">
                  {program.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(0,184,169,0.15)' }}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00B8A9' }}></div>
                      </div>
                      <span className="text-sm font-medium" style={{ color: '#2D2D2D' }}>{item}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 text-white rounded-xl font-bold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                  <span className="relative z-10">Apply Now</span>
                  <div className="absolute inset-0 transition-all duration-300" style={{ backgroundColor: '#00B8A9' }}></div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(45deg, rgba(255,255,255,0.2) 0%, transparent 100%)' }}></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

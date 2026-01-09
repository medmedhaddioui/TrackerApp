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

  const BackgroundImage=[
    '/bf.jpg',
    '/te.jpg',
    '/c.jpg',
    '/d.jpg',
    '/hr.jpg',
    '/ra.jpg',
  ]

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
      className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden border border-gray-100 card-animate group"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={BackgroundImage[index]}
          alt={program.title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {program.popular && (
          <span className="absolute top-3 right-3 bg-white text-sm font-semibold px-3 py-1 rounded-full shadow animate-bounce" style={{ animationDuration: '2s' }}>
            Free Trial
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 relative">
        {/* Provider */}
        <div className="text-sm font-semibold text-gray-600 transition-colors duration-300 group-hover:text-[#00B8A9]">
          {program.provider || "IBM"}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 leading-snug transition-colors duration-300 group-hover:text-[#1A4D4D]">
          {program.title}
        </h3>

        {/* Skills */}
        <p className="text-sm text-gray-600 transition-all duration-300">
          <span className="font-semibold">Skills you'll gain:</span>{" "}
          {program.highlights.slice(0, 4).join(", ")}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-gray-900">4.7</span>
          <span className="text-yellow-500 transition-transform duration-300 group-hover:scale-125">★</span>
          <span className="text-gray-500">(12K reviews)</span>
        </div>

        {/* Meta */}
        <div className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
          Beginner · Professional Certificate · 3–6 Months
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}




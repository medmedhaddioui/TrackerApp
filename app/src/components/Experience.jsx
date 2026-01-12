import { useState, useEffect } from 'react';

export function Experience() {
  const [currentIndexValue, setCurrentIndexValue] = useState(0);

  const experiences = [
    {
      year: '2024',
      role: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&h=200&fit=crop',
      description: 'Led development of scalable web applications using React and Node.js, managing a team of 5 developers.',
      outcome: 'Promoted to Team Lead after 6 months'
    },
    {
      year: '2022-2023',
      role: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=200&h=200&fit=crop',
      description: 'Developed and maintained multiple client projects, focusing on modern web technologies and best practices.',
      outcome: 'Increased client satisfaction by 45%'
    },
    {
      year: '2020-2022',
      role: 'Frontend Developer',
      company: 'Creative Agency Co.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=200&fit=crop',
      description: 'Created responsive and interactive user interfaces for various clients across different industries.',
      outcome: 'Delivered 20+ successful projects'
    },
    {
      year: '2019-2020',
      role: 'Junior Developer',
      company: 'StartUp Ventures',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&h=200&fit=crop',
      description: 'Assisted in building MVP products and learning industry best practices in a fast-paced startup environment.',
      outcome: 'Secured full-time position within 3 months'
    },
    {
      year: '2018-2019',
      role: 'Web Development Intern',
      company: 'Digital Marketing Agency',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
      description: 'Learned fundamental web development skills and contributed to client website projects.',
      outcome: 'Built first 5 professional websites'
    },
    {
      year: '2017-2018',
      role: 'Freelance Designer',
      company: 'Self-Employed',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      description: 'Created custom designs for small businesses and personal brands while learning to code.',
      outcome: 'Completed 15+ design projects'
    }
  ];

  const totalSlides = experiences.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexValue((prev) =>
        prev === totalSlides - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section
      id="experiences"
      className="py-24"
      style={{
        background:
          'linear-gradient(180deg, #FFFFFF 0%, rgba(0, 184, 169, 0.05) 100%)'
      }}
    >
      <div className="items-center text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
  className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6"
  style={{
    background:
      'linear-gradient(135deg, rgba(0,184,169,0.1) 0%, rgba(255,140,66,0.1) 100%)',
    border: '1px solid rgba(0,184,169,0.2)'
  }}
>
  {/* Experience Icon */}
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    style={{ color: '#00B8A9' }}
  >
    {/* Briefcase */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 6V5a2 2 0 012-2h2a2 2 0 012 2v1"
    />
    <rect
      x="3"
      y="6"
      width="18"
      height="13"
      rx="2"
      ry="2"
      strokeWidth={2}
    />
    {/* Timeline dots */}
    <circle cx="8" cy="12" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="16" cy="12" r="1.5" />
  </svg>

  <span
    className="font-semibold text-sm"
    style={{ color: '#00B8A9' }}
  >
    Experience Journey
  </span>
</div>

        <h2
          className="text-4xl font-bold text-center mb-16"
          style={{ color: '#1A4D4D' }}
        >
          Professional Experience Journey
        </h2>

        <div className="overflow-visible">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentIndexValue * 100}%)` }}
          >
            {experiences.map((experience, index) => (
              <div
                key={index}
                className="w-full shrink-0 px-4 sm:px-6 lg:px-8"
              >
                <div
                  className="group max-w-3xl mx-auto p-10 rounded-3xl relative overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(0, 184, 169, 0.2)'
                  }}
                >
                  <div className="relative flex items-start gap-6 mb-6">
                    <img
                      src={experience.image}
                      alt={experience.role}
                      className="w-24 h-24 rounded-2xl object-cover shadow-lg"
                    />
                    <div>
                      <span
                        className="inline-block px-3 py-1 mb-2 text-xs font-bold rounded-full"
                        style={{
                          backgroundColor: 'rgba(0, 184, 169, 0.15)',
                          color: '#00B8A9'
                        }}
                      >
                        {experience.year}
                      </span>
                      <h3 className="text-2xl font-bold text-[#1A4D4D]">
                        {experience.role}
                      </h3>
                      <p className="text-sm text-[#2D2D2D]">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg mb-4 text-[#2D2D2D]">
                    {experience.description}
                  </p>

                  <p className="font-semibold text-[#00B8A9]">
                    {experience.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

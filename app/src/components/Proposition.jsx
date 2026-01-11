import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export function Proposition() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  const solutions = [
    {
      title: 'Universities & Institutions',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
      link: '/solutions/universities-institutions'
    },
    {
      title: 'Companies & Corporates',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      link: '/solutions/companies-corporates'
    },
    {
      title: 'Governments & Public Sector',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      link: '/solutions/governments-public-sector'
    },
    {
      title: 'Students & Graduates',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      link: '/solutions/students-graduates'
    },
    {
      title: 'Educational Institutions',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      link: '/solutions/educational-institutions'
    },
    {
      title: 'Non-Profit Organizations',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      link: '/solutions/non-profit-organizations'
    }
  ];

  const totalSlides = solutions.length - 2; // Show 3 cards, so max index is length - 3 + 1

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= totalSlides) {
          return 0;
        }
        return prev + 1;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered, totalSlides]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6" style={{ background: 'linear-gradient(135deg, rgba(0,184,169,0.1) 0%, rgba(255,140,66,0.1) 100%)', border: '1px solid rgba(0,184,169,0.2)' }}>
            <svg className="w-4 h-4 md:w-5 md:h-5" style={{ color: '#00B8A9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-semibold text-xs md:text-sm" style={{ color: '#00B8A9' }}>Our Solutions</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6" style={{ color: '#1A4D4D' }}>
            Who We Serve
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
            Tailored solutions for every stakeholder
          </p>
        </div>

        {/* Slider Container */}
        <div 
          ref={sliderRef}
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Cards Wrapper */}
          <div className="overflow-visible">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / Math.min(solutions.length, 3))}%)`
              }}
            >
              {solutions.map((solution, index) => (
                <Link
                  key={index}
                  to={solution.link}
                  className="group flex-shrink-0 px-3 md:px-4"
                  style={{ 
                    width: `${100 / Math.min(solutions.length, 3)}%`,
                    minWidth: '280px'
                  }}
                >
                  <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-lg transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl border-2 border-gray-100 hover:border-[#1A4D4D] h-full flex flex-col items-center justify-center text-center min-h-[300px]">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, rgba(0,184,169,0.05) 0%, rgba(255,140,66,0.05) 100%)' }}></div>
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div 
                        className="w-24 h-24 md:w-28 md:h-28 rounded-2xl mb-6 md:mb-8 flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{ 
                          background: 'linear-gradient(135deg, #00B8A9 0%, #1A4D4D 100%)',
                          color: '#FFFFFF',
                          boxShadow: '0 10px 30px rgba(0,184,169,0.3)'
                        }}
                      >
                        {solution.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#1A4D4D' }}>
                        {solution.title}
                      </h3>
                      
                      {/* Arrow */}
                      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-6 h-6 mx-auto" style={{ color: '#FF8C42' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-10 md:mt-12">
            {Array.from({ length: totalSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index 
                    ? 'w-10 h-3' 
                    : 'w-3 h-3 hover:bg-[#00B8A9]/50'
                }`}
                style={{ 
                  backgroundColor: currentIndex === index ? '#00B8A9' : 'rgba(0,184,169,0.2)'
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-6 text-sm" style={{ color: '#2D2D2D', opacity: 0.6 }}>
          Auto-playing • Hover to pause
        </div>
      </div>
    </section>
  );
}
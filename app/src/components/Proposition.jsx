import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export function Proposition() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  const solutions = [
    {
      title: 'Industry Internships',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: '/solutions/industry-internships'
    },
    {
      title: 'Co-Hosted Programs',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      link: '/solutions/co-hosted-programs'
    },
    {
      title: 'Custom Training Programs',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      link: '/solutions/custom-training'
    },
    {
      title: 'Industrial Courses',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      link: '/solutions/industrial-courses'
    },
    {
      title: 'Workshops & Masterclasses',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      link: '/solutions/workshops-masterclasses'
    },
    {
      title: 'Bootcamps & Career Tracks',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: '/solutions/bootcamps'
    },
    {
      title: 'Career Mentorship (1-to-1)',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      link: '/solutions/career-mentorship'
    }
  ];

  const totalSlides = solutions.length - 2;

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
            Explore Our Programs
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-light max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>
            Comprehensive learning solutions for every career stage
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative"
        >
          {/* Cards Wrapper */}
          <div 
            ref={sliderRef}
            className="overflow-visible"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
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
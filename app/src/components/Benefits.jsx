import React, { useState, useEffect, useRef } from 'react';
import { Users, BookOpen, UserCheck, Briefcase, Calendar } from 'lucide-react';

export const Benefits = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: 'Workshops & Masterclasses',
      icon: BookOpen,
      description: 'Learn from industry experts',
      link: '/community/workshops'
    },
    {
      id: 2,
      title: 'Career Mentorship (1-to-1)',
      icon: Users,
      description: 'Personalized guidance for your journey',
      link: '/community/mentorship'
    },
    {
      id: 3,
      title: 'Volunteer as an Expert',
      icon: UserCheck,
      description: 'Share your knowledge and give back',
      link: '/community/volunteer'
    },
    {
      id: 4,
      title: 'Hiring Initiatives',
      icon: Briefcase,
      description: 'Connect with top opportunities',
      link: '/community/hiring'
    },
    {
      id: 5,
      title: 'Educational & Career Events',
      icon: Calendar,
      description: 'Network and grow together',
      link: '/community/events'
    }
  ];

  // Duplicate cards for seamless loop
  const duplicatedCards = [...cards, ...cards];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let animationFrame;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset when we've scrolled through one set of cards
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  const handleCardClick = (link) => {
    console.log(`Navigating to: ${link}`);
    // In a real app: window.location.href = link; or use router
  };

  return (
    <section className="w-full py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(0,184,169,0.05) 50%, #FFFFFF 100%)' }}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)', filter: 'blur(80px)' }}></div>

      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6" style={{ background: 'linear-gradient(135deg, rgba(0,184,169,0.1) 0%, rgba(255,140,66,0.1) 100%)', border: '1px solid rgba(0,184,169,0.2)' }}>
            <svg className="w-5 h-5" style={{ color: '#00B8A9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="font-semibold text-sm" style={{ color: '#00B8A9' }}>Ecosystem View</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#1A4D4D' }}>Community & Growth</h2>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto" style={{ color: '#2D2D2D' }}>Explore our ecosystem of learning and opportunities</p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #FFFFFF, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #FFFFFF, transparent)' }} />
        
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden py-4"
          style={{ scrollBehavior: 'auto' }}
        >
          {duplicatedCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={`${card.id}-${index}`}
                className="group flex-shrink-0 w-72 sm:w-80 md:w-80 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-4 overflow-hidden border border-gray-100"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onClick={() => handleCardClick(card.link)}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? 'rgba(0,184,169,0.05)' : 'rgba(255,140,66,0.05)'} 0%, transparent 100%)` }}></div>
                <div className="p-6 sm:p-8 relative flex flex-col h-full">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? '#00B8A9' : '#FF8C42'} 0%, ${index % 2 === 0 ? '#1A4D4D' : '#FF6B2B'} 100%)` }}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 transition-colors duration-300" style={{ color: '#1A4D4D' }}>
                    {card.title}
                  </h3>
                  <p className="mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base transition-all duration-300 flex-grow" style={{ color: '#2D2D2D', opacity: 0.9 }}>
                    {card.description}
                  </p>
                  <div className="mt-auto flex items-center text-sm font-medium transition-transform duration-300 group-hover:translate-x-1" style={{ color: index % 2 === 0 ? '#00B8A9' : '#FF8C42' }}>
                    <span>Learn more</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-center mt-6 sm:mt-8 text-xs sm:text-sm font-medium px-4" style={{ color: '#00B8A9' }}>
        Hover over any card to pause scrolling
      </div>
    </section>
  );
};
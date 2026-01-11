import { useEffect, useRef, useState } from 'react';

export function HowItWorks() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [lineHeight, setLineHeight] = useState(0);
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  const steps = [
    {
      number: '01',
      title: 'Partner or Apply',
      description: 'Sign up as Partner, company, or educator. Complete your profile with your goals, skills, and interests to get matched with the perfect opportunities.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      side: 'left'
    },
    {
      number: '02',
      title: 'Learn by Doing (Real Projects)',
      description: 'Explore thousands of internship opportunities across 60+ countries. Our platform matches you with positions that align with your career goals and interests.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      side: 'right'
    },
    {
      number: '03',
      title: 'Deliver & Advance',
      description: 'Get onboarded with your host company and begin working on real projects. Receive guidance from industry mentors and develop valuable professional skills.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      side: 'left'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.max(0, Math.min(1, 
        (windowHeight - containerTop - 100) / (containerHeight - 300)
      ));
      
      setLineHeight(scrollProgress * 100);
    };

    const observers = [];
    
    cardRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set([...prev, index]));
            } else {
              setVisibleCards((prev) => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet;
              });
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -100px 0px'
        }
      );
      
      observer.observe(ref);
      observers.push(observer);
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="how-it-works" className="relative py-16 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1A4D4D 0%, #0A2A2A 100%)' }}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
        <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)', filter: 'blur(100px)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6 backdrop-blur-xl" style={{ background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span className="font-semibold text-xs md:text-sm text-white">Simple Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-white px-4">How It Works</h2>
          <p className="text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto text-white/80 px-4">Get started in four simple steps</p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Center Progress Line - Only on Desktop */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/20 hidden lg:block"
            style={{ height: '100%', top: 0 }}
          >
            <div 
              className="w-full transition-all duration-500 ease-out"
              style={{ 
                height: `${lineHeight}%`,
                background: 'linear-gradient(180deg, #00B8A9 0%, #FF8C42 100%)'
              }}
            />
          </div>

          {/* Timeline Steps */}
          <div className="space-y-12 md:space-y-20 lg:space-y-32">
            {steps.map((step, index) => {
              const isVisible = visibleCards.has(index);

              return (
                <div key={index} className="relative lg:min-h-[300px] flex items-center justify-center">
                  {/* Card - Responsive positioning */}
                  <div
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`
                      w-full lg:w-5/12 transition-all duration-700 ease-out
                      ${isVisible ? 'opacity-100' : 'opacity-0'}
                      
                      /* Mobile: slide from left/right */
                      ${isVisible 
                        ? 'translate-x-0' 
                        : step.side === 'left' ? '-translate-x-8' : 'translate-x-8'
                      }
                      
                      /* Desktop: pop up from bottom + positioned next to timeline */
                      lg:absolute
                      ${isVisible ? 'lg:translate-y-0' : 'lg:translate-y-16'}
                      ${isVisible ? 'lg:translate-x-0' : ''}
                      ${step.side === 'left' ? 'lg:right-1/2 lg:pr-8' : 'lg:left-1/2 lg:pl-8'}
                    `}
                  >
                    <div className="group bg-white/10 backdrop-blur-xl p-6 md:p-8 rounded-2xl md:rounded-3xl hover:bg-white/15 transition-all duration-500 h-full transform hover:-translate-y-2 lg:hover:-translate-y-4 border border-white/10 hover:border-white/20" style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)' }}>
                      {/* Step number circle */}
                      <div className="relative inline-flex items-center justify-center mb-6 md:mb-8">
                        <div className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity" style={{ backgroundColor: index % 2 === 0 ? '#00B8A9' : '#FF8C42' }}></div>
                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? '#00B8A9' : '#FF8C42'} 0%, ${index % 2 === 0 ? '#1A4D4D' : '#FF6B2B'} 100%)` }}>
                          <span className="text-white scale-90 md:scale-100">{step.icon}</span>
                        </div>
                      </div>
                      
                      <div className="text-xs md:text-sm font-bold mb-2 md:mb-3" style={{ color: index % 2 === 0 ? '#00B8A9' : '#FF8C42' }}>
                        Step {step.number}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">
                        {step.title}
                      </h3>
                      <p className="leading-relaxed text-sm md:text-base text-white/70">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Circle - Only on Desktop */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div
                      className={`w-6 h-6 rounded-full border-4 transition-all duration-700 ${
                        isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      }`}
                      style={{ 
                        background: `linear-gradient(135deg, ${index % 2 === 0 ? '#00B8A9' : '#FF8C42'} 0%, ${index % 2 === 0 ? '#1A4D4D' : '#FF6B2B'} 100%)`,
                        borderColor: '#0A2A2A'
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
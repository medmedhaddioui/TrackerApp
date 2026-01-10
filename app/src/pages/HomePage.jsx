import { useEffect, useRef, useState } from 'react';
import { Hero } from '../components/Hero';
import { Proposition } from '../components/Proposition';
import { HowItWorks } from '../components/HowItWorks';
import { Benefits } from '../components/Benefits';
import { Programs } from '../components/Programs';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import Partners from '../components/Partners';

// Animated wrapper component with reversible animation
const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section is visible - fade up
            setIsVisible(true);
          } else {
            // Section is not visible - fade down (reverse animation)
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.05, // Trigger earlier when only 5% visible
        rootMargin: '100px 0px 100px 0px' // Start animation before entering viewport
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transform transition-all duration-800 ease-out ${className} ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-12 scale-95'
      }`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  );
};

export default function HomePage() {
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <>
      {/* Hero doesn't need animation - it's the first thing visible */}
      <Hero  />
      
      {/* All sections animate on scroll - both directions */}
      <AnimatedSection delay={100}>
        <Proposition />
      </AnimatedSection>
      
      <AnimatedSection delay={100}>
        <HowItWorks />
      </AnimatedSection>
      
      <AnimatedSection delay={100}>
        <Benefits />
      </AnimatedSection>
      
      <AnimatedSection delay={100}>
        <Programs />
      </AnimatedSection>
      
      <AnimatedSection delay={100}>
        <About />
      </AnimatedSection>
      
      <AnimatedSection delay={100}>
        <Partners />
      </AnimatedSection>
      
      <AnimatedSection delay={100}>
        <Contact />
      </AnimatedSection>
    </>
  );
}
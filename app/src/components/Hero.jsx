import React from "react";
import { Link } from "react-router-dom";
import { TypewriterWords } from './TypewriterText';
import { AnimatedCounter } from './AnimatedCounter';


export function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A2A2A 0%, #1A4D4D 50%, #00B8A9 100%)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-30 float-animation" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)', filter: 'blur(100px)', animationDelay: '0s' }}></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-30 float-animation" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', filter: 'blur(100px)', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 float-animation" style={{ background: 'radial-gradient(circle, #FFFFFF 0%, transparent 60%)', filter: 'blur(60px)', animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full backdrop-blur-xl animate-fade-in-up" style={{ background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.2) 0%, rgba(255, 140, 66, 0.2) 100%)', border: '1px solid rgba(255, 255, 255, 0.25)', animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}>
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-semibold text-sm">The #1 Global Internship Platform</span>
            </div>
            
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
                <TypewriterWords 
                  words={['Industry-Led', 'Internships', '&', 'Training', 'Programs']}
                  speed={150}
                  delay={500}
                />
              </h1>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mt-2 text-orange-300" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FFB88C 100%)', WebkitBackgroundClip: 'text' }}>
                <TypewriterWords 
                  words={['Built', 'with', 'Universities', '&', 'Experts']}
                  speed={150}
                  delay={2500}
                />
              </h2>
            </div>
            
            <p className="text-lg md:text-xl mb-10 max-w-xl text-white/80 leading-relaxed animate-fade-in-up" style={{ animationDelay: '3s', opacity: 0, animationFillMode: 'forwards' }}>
              Real projects, real supervision, online, hybrid, or on-site delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up" style={{ animationDelay: '3.3s', opacity: 0, animationFillMode: 'forwards' }}>
              <Link to="/programs" className="group btn-primary btn-press flex items-center justify-center gap-3 px-8 py-4 text-white rounded-2xl font-bold text-lg">
                <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                <span>Explore Programs</span>
              </Link>
              <Link to="/partnerships" className="group btn-secondary btn-press flex items-center justify-center gap-3 px-8 py-4 text-white rounded-2xl font-bold text-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Partner With Us</span>
              </Link>
            </div>

            {/* Stats */}
            <div
  className="flex flex-wrap justify-center lg:justify-start gap-8 animate-fade-in-up"
  style={{ animationDelay: '3.6s', opacity: 0, animationFillMode: 'forwards' }}
>
  <div className="text-center">
    <div className="text-3xl font-bold text-white mb-1">
      <AnimatedCounter end={90} suffix="k+"  />
    </div>
    <div className="text-sm text-white/60">Internships</div>
  </div>

  <div className="w-px h-12 bg-white/20 hidden sm:block"></div>

  <div className="text-center">
    <div className="text-3xl font-bold text-white mb-1">
      <AnimatedCounter end={60} suffix="+"  />
    </div>
    <div className="text-sm text-white/60">Countries</div>
  </div>

  <div className="w-px h-12 bg-white/20 hidden sm:block"></div>

  <div className="text-center">
    <div className="text-3xl font-bold text-white mb-1">
      <AnimatedCounter end={95} suffix="%" />
    </div>
    <div className="text-sm text-white/60">Satisfaction</div>
  </div>
            </div>

          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-72 h-72 rounded-full opacity-20 float-animation" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, transparent 70%)', filter: 'blur(40px)', animationDelay: '0s' }}></div>
              <div className="absolute -bottom-8 -right-8 w-72 h-72 rounded-full opacity-20 float-animation" style={{ background: 'linear-gradient(135deg, #00B8A9 0%, transparent 70%)', filter: 'blur(40px)', animationDelay: '1.5s' }}></div>
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: '0 40px 80px rgba(0, 0, 0, 0.3)' }}>
                <img 
                  src="/internship_girl_img.png" 
                  alt="Intern working remotely" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0, 184, 169, 0.1) 0%, rgba(255, 140, 66, 0.1) 100%)' }}></div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-12 top-1/4 p-4 rounded-2xl backdrop-blur-xl animate-bounce" style={{ background: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)', animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00B8A9 0%, #1A4D4D 100%)' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: '#1A4D4D' }}>Guaranteed</div>
                    <div className="text-xs" style={{ color: '#2D2D2D' }}>100% Placement</div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-8 bottom-1/4 p-4 rounded-2xl backdrop-blur-xl animate-bounce" style={{ background: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)', animationDuration: '4s', animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FF6B2B 100%)' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: '#1A4D4D' }}>Global</div>
                    <div className="text-xs" style={{ color: '#2D2D2D' }}>80+ Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
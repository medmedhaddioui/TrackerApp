import React from "react";

const  Hero = () =>  {
  return (

    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Stay Informed with
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Daily News
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Your personalized AI-powered news platform that delivers the most relevant updates based on your interests—no more endless searching
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
            Get Started Free
          </button>
          <button onClick={() => scrollToSection('programs')} className="px-8 py-4 bg-white text-gray-800 rounded-lg font-semibold border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all">
            Explore Topics
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
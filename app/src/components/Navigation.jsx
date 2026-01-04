import { useState } from "react";
export function Navigation({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Virtual Internships
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => handleNavClick('hero')} className="text-gray-700 hover:text-blue-600 transition">Home</button>
            <button onClick={() => handleNavClick('how-it-works')} className="text-gray-700 hover:text-blue-600 transition">How It Works</button>
            <button onClick={() => handleNavClick('programs')} className="text-gray-700 hover:text-blue-600 transition">Internships</button>
            <button onClick={() => handleNavClick('about')} className="text-gray-700 hover:text-blue-600 transition">About</button>
            <button onClick={() => handleNavClick('contact')} className="text-gray-700 hover:text-blue-600 transition">Apply</button>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-gray-800 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-800 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-gray-800 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4">
            <button onClick={() => handleNavClick('hero')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Home</button>
            <button onClick={() => handleNavClick('how-it-works')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">How It Works</button>
            <button onClick={() => handleNavClick('programs')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Internships</button>
            <button onClick={() => handleNavClick('about')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">About</button>
            <button onClick={() => handleNavClick('contact')} className="block w-full text-left py-2 text-gray-700 hover:text-blue-600">Apply</button>
          </div>
        )}
      </div>
    </nav>
  );
}
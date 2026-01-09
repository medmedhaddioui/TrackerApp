import { useState, useEffect } from "react";
import { Link,  /*useNavigate */ } from "react-router-dom";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  //  const navigate = useNavigate();
   
   useEffect(() => {
  if (menuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [menuOpen]);

  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }; 

  return (
    <>
    <nav className="fixed top-0 w-full backdrop-blur-glass z-[9999] border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold" style={{color: '#1A4D4D'}}>
            PraktikaX
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdown('home')}
                className="nav-link text-gray-800 hover:text-teal-600 flex items-center gap-1"
              >
                Home <span className="text-xs">▾</span>
              </button>
              {dropdown === 'home' && (
                <div 
                  onMouseEnter={() => setDropdown('home')}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-fade-in"
                >
                  <a href="/#about" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    About
                  </a>
                  <a href="/#benefits" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Benefits
                  </a>
                  <a href="/#programs" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Programs
                  </a>
                  <a href="/#how-it-works" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    How It Works
                  </a>
                  <a href="/#contact" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Contact
                  </a>
                </div>
              )}
            </div>
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdown('companies')}
                className="nav-link text-gray-800 hover:text-teal-600 flex items-center gap-1"
              >
                Companies <span className="text-xs">▾</span>
              </button>
              {dropdown === 'companies' && (
                <div 
                  onMouseEnter={() => setDropdown('companies')}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-fade-in"
                >
                  <Link to="/companies" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Host an Intern
                  </Link>
                  <Link to="/companies" onClick={() => setTimeout(() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    How It Works
                  </Link>
                  <Link to="/companies" onClick={() => setTimeout(() => document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    FAQs
                  </Link>
                </div>
              )}
            </div>
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdown('educators')}
                className="nav-link text-gray-800 hover:text-teal-600 flex items-center gap-1"
              >
                Educators <span className="text-xs">▾</span>
              </button>
              {dropdown === 'educators' && (
                <div 
                  onMouseEnter={() => setDropdown('educators')}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-fade-in"
                >
                  <Link to="/educators/universities" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Universities
                  </Link>
                  <Link to="/educators/bootcamps" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Bootcamps
                  </Link>
                  <Link to="/educators/governments" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Governments
                  </Link>
                  <Link to="/educators/affiliates" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Affiliates
                  </Link>
                </div>
              )}
            </div>
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdown('interns')}
                className="nav-link text-gray-800 hover:text-teal-600 flex items-center gap-1"
              >
                Interns <span className="text-xs">▾</span>
              </button>
              {dropdown === 'interns' && (
                <div 
                  onMouseEnter={() => setDropdown('interns')}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                >
                  <Link to="/interns" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Apply for Internships
                  </Link>
                  <a href="/interns#how-it-works" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    How It Works
                  </a>
                  <a href="/interns#career-fields" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Career Fields
                  </a>
                  <a href="/interns#experiences" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Experiences
                  </a>
                  <a href="/interns#faqs" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    FAQs
                  </a>
                </div>
              )}
            </div>
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdown('about')}
                className="nav-link text-gray-800 hover:text-teal-600 flex items-center gap-1"
              >
                About Us <span className="text-xs">▾</span>
              </button>
              {dropdown === 'about' && (
                <div 
                  onMouseEnter={() => setDropdown('about')}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-fade-in"
                >
                  <Link to="/about/our-mission" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Our Mission
                  </Link>
                  <Link to="/about/team" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Our Team
                  </Link>
                  <Link to="/about/join-us" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Join Us
                  </Link>
                </div>
              )}
            </div>
            <Link to="/" className="text-white px-6 py-2 rounded-lg font-semibold bg-orange-500 hover:bg-orange-600 transition-colors">
              Get Started
            </Link>
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
      </div>
    </nav>

    {/* MOBILE MENU OUTSIDE NAV TO FIX STACKING CONTEXT */}
    {menuOpen && (
      <div className="fixed inset-0 top-16 bg-white z-[10000] overflow-y-auto md:hidden">
        <div className="pl-4 pb-10">

          <p className="py-2 font-semibold text-teal-800">Home</p>
          <a href="/#about" className="block py-2" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/#benefits" className="block py-2" onClick={() => setMenuOpen(false)}>Benefits</a>
          <a href="/#programs" className="block py-2" onClick={() => setMenuOpen(false)}>Programs</a>
          <a href="/#how-it-works" className="block py-2" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="/#contact" className="block py-2" onClick={() => setMenuOpen(false)}>Contact</a>

          <p className="py-2 font-semibold text-teal-800 mt-4">Companies</p>
          <Link to="/companies" className="block py-2" onClick={() => setMenuOpen(false)}>Host an Intern</Link>
          <Link to="/companies" className="block py-2" onClick={() => setMenuOpen(false)}>How It Works</Link>
          <Link to="/companies" className="block py-2" onClick={() => setMenuOpen(false)}>FAQs</Link>

          <p className="py-2 font-semibold text-teal-800 mt-4">Educators</p>
          <Link to="/educators/universities" className="block py-2" onClick={() => setMenuOpen(false)}>Universities</Link>
          <Link to="/educators/bootcamps" className="block py-2" onClick={() => setMenuOpen(false)}>Bootcamps</Link>
          <Link to="/educators/governments" className="block py-2" onClick={() => setMenuOpen(false)}>Governments</Link>
          <Link to="/educators/affiliates" className="block py-2" onClick={() => setMenuOpen(false)}>Affiliates</Link>

          <p className="py-2 font-semibold text-teal-800 mt-4">Interns</p>
          <Link to="/interns" className="block py-2" onClick={() => setMenuOpen(false)}>Apply for Internships</Link>
          <a href="/interns#how-it-works" className="block py-2" onClick={() => setMenuOpen(false)}>How It Works</a>
          <a href="/interns#career-fields" className="block py-2" onClick={() => setMenuOpen(false)}>Career Fields</a>
          <a href="/interns#experiences" className="block py-2" onClick={() => setMenuOpen(false)}>Experiences</a>
          <a href="/interns#faqs" className="block py-2" onClick={() => setMenuOpen(false)}>FAQs</a>

          <p className="py-2 font-semibold text-teal-800 mt-4">About Us</p>
          <Link to="/about/our-mission" className="block py-2" onClick={() => setMenuOpen(false)}>Our Mission</Link>
          <Link to="/about/team" className="block py-2" onClick={() => setMenuOpen(false)}>Our Team</Link>
          <Link to="/about/join-us" className="block py-2" onClick={() => setMenuOpen(false)}>Join Us</Link>

        </div>
      </div>
    )}
    </>
  );
}

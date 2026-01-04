import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold" style={{color: '#1A4D4D'}}>
            Virtual Internships
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdown('companies')}
                className="transition flex items-center gap-1"
                style={{color: '#2D2D2D'}}
                onMouseOver={(e) => e.target.style.color = '#00B8A9'}
                onMouseOut={(e) => e.target.style.color = '#2D2D2D'}
              >
                Companies <span className="text-xs">▾</span>
              </button>
              {dropdown === 'companies' && (
                <div 
                  onMouseEnter={() => setDropdown('companies')}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                >
                  <Link to="/companies" className="block px-4 py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#00B8A9'; e.currentTarget.style.color = '#FFFFFF';}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#2D2D2D';}}>
                    Host an Intern
                  </Link>
                  <Link to="/companies" onClick={() => setTimeout(() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="block px-4 py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#00B8A9'; e.currentTarget.style.color = '#FFFFFF';}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#2D2D2D';}}>
                    How It Works
                  </Link>
                  <Link to="/companies" onClick={() => setTimeout(() => document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="block px-4 py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#00B8A9'; e.currentTarget.style.color = '#FFFFFF';}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#2D2D2D';}}>
                    FAQs
                  </Link>
                </div>
              )}
            </div>
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdown('educators')}
                className="transition flex items-center gap-1"
                style={{color: '#2D2D2D'}}
                onMouseOver={(e) => e.target.style.color = '#00B8A9'}
                onMouseOut={(e) => e.target.style.color = '#2D2D2D'}
              >
                Educators <span className="text-xs">▾</span>
              </button>
              {dropdown === 'educators' && (
                <div 
                  onMouseEnter={() => setDropdown('educators')}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                >
                  <Link to="/educators/universities" className="block px-4 py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#00B8A9'; e.currentTarget.style.color = '#FFFFFF';}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#2D2D2D';}}>
                    Universities
                  </Link>
                  <Link to="/educators/bootcamps" className="block px-4 py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#00B8A9'; e.currentTarget.style.color = '#FFFFFF';}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#2D2D2D';}}>
                    Bootcamps
                  </Link>
                  <Link to="/educators/governments" className="block px-4 py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#00B8A9'; e.currentTarget.style.color = '#FFFFFF';}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#2D2D2D';}}>
                    Governments
                  </Link>
                  <Link to="/educators/affiliates" className="block px-4 py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#00B8A9'; e.currentTarget.style.color = '#FFFFFF';}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#2D2D2D';}}>
                    Affiliates
                  </Link>
                </div>
              )}
            </div>
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdown('interns')}
                className="transition flex items-center gap-1"
                style={{color: '#2D2D2D'}}
                onMouseOver={(e) => e.target.style.color = '#00B8A9'}
                onMouseOut={(e) => e.target.style.color = '#2D2D2D'}
              >
                Interns <span className="text-xs">▾</span>
              </button>
              {dropdown === 'interns' && (
                <div 
                  onMouseEnter={() => setDropdown('interns')}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                >
                  <Link to="/interns" className="block px-4 py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#00B8A9'; e.currentTarget.style.color = '#FFFFFF';}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#2D2D2D';}}>
                    Apply for Internships
                  </Link>
                  <a href="/interns#how-it-works" className="block px-4 py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#00B8A9'; e.currentTarget.style.color = '#FFFFFF';}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#2D2D2D';}}>
                    How It Works
                  </a>
                  <a href="/interns#career-fields" className="block px-4 py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#00B8A9'; e.currentTarget.style.color = '#FFFFFF';}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#2D2D2D';}}>
                    Career Fields
                  </a>
                  <a href="/interns#experiences" className="block px-4 py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#00B8A9'; e.currentTarget.style.color = '#FFFFFF';}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#2D2D2D';}}>
                    Experiences
                  </a>
                  <a href="/interns#faqs" className="block px-4 py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#00B8A9'; e.currentTarget.style.color = '#FFFFFF';}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#2D2D2D';}}>
                    FAQs
                  </a>
                </div>
              )}
            </div>
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdown('about')}
                className="transition flex items-center gap-1"
                style={{color: '#2D2D2D'}}
                onMouseOver={(e) => e.target.style.color = '#00B8A9'}
                onMouseOut={(e) => e.target.style.color = '#2D2D2D'}
              >
                About Us <span className="text-xs">▾</span>
              </button>
              {dropdown === 'about' && (
                <div 
                  onMouseEnter={() => setDropdown('about')}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                >
                  <Link to="/about/mission" className="block px-4 py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#00B8A9'; e.currentTarget.style.color = '#FFFFFF';}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#2D2D2D';}}>
                    Our Mission
                  </Link>
                  <Link to="/about/team" className="block px-4 py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#00B8A9'; e.currentTarget.style.color = '#FFFFFF';}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#2D2D2D';}}>
                    Our Team
                  </Link>
                  <Link to="/about/join-us" className="block px-4 py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = '#00B8A9'; e.currentTarget.style.color = '#FFFFFF';}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = ''; e.currentTarget.style.color = '#2D2D2D';}}>
                    Join Us
                  </Link>
                </div>
              )}
            </div>
            <Link to="/" className="text-white px-6 py-2 rounded-lg font-semibold transition" style={{backgroundColor: '#FF8C42'}} onMouseOver={(e) => e.target.style.backgroundColor = '#F7931E'} onMouseOut={(e) => e.target.style.backgroundColor = '#FF8C42'}>
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

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => e.target.style.color = '#00B8A9'} onMouseOut={(e) => e.target.style.color = '#2D2D2D'} onClick={() => setMenuOpen(false)}>Home</Link>
            <div className="pl-4">
              <p className="py-2 font-semibold" style={{color: '#1A4D4D'}}>Companies</p>
              <Link to="/companies" className="block py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => e.target.style.color = '#00B8A9'} onMouseOut={(e) => e.target.style.color = '#2D2D2D'} onClick={() => setMenuOpen(false)}>Host an Intern</Link>
              <Link to="/companies" className="block py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => e.target.style.color = '#00B8A9'} onMouseOut={(e) => e.target.style.color = '#2D2D2D'} onClick={() => { setMenuOpen(false); setTimeout(() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>How It Works</Link>
              <Link to="/companies" className="block py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => e.target.style.color = '#00B8A9'} onMouseOut={(e) => e.target.style.color = '#2D2D2D'} onClick={() => { setMenuOpen(false); setTimeout(() => document.getElementById('faqs')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>FAQs</Link>
            </div>
            <div className="pl-4">
              <p className="py-2 font-semibold" style={{color: '#1A4D4D'}}>Educators</p>
              <Link to="/educators/universities" className="block py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => e.target.style.color = '#00B8A9'} onMouseOut={(e) => e.target.style.color = '#2D2D2D'} onClick={() => setMenuOpen(false)}>Universities</Link>
              <Link to="/educators/bootcamps" className="block py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => e.target.style.color = '#00B8A9'} onMouseOut={(e) => e.target.style.color = '#2D2D2D'} onClick={() => setMenuOpen(false)}>Bootcamps</Link>
              <Link to="/educators/governments" className="block py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => e.target.style.color = '#00B8A9'} onMouseOut={(e) => e.target.style.color = '#2D2D2D'} onClick={() => setMenuOpen(false)}>Governments</Link>
              <Link to="/educators/affiliates" className="block py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => e.target.style.color = '#00B8A9'} onMouseOut={(e) => e.target.style.color = '#2D2D2D'} onClick={() => setMenuOpen(false)}>Affiliates</Link>
            </div>
            <div className="pl-4">
              <p className="py-2 font-semibold" style={{color: '#1A4D4D'}}>Interns</p>
              <Link to="/interns" className="block py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => e.target.style.color = '#00B8A9'} onMouseOut={(e) => e.target.style.color = '#2D2D2D'} onClick={() => setMenuOpen(false)}>Apply for Internships</Link>
              <a href="/interns#how-it-works" className="block py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => e.target.style.color = '#00B8A9'} onMouseOut={(e) => e.target.style.color = '#2D2D2D'} onClick={() => setMenuOpen(false)}>How It Works</a>
              <a href="/interns#career-fields" className="block py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => e.target.style.color = '#00B8A9'} onMouseOut={(e) => e.target.style.color = '#2D2D2D'} onClick={() => setMenuOpen(false)}>Career Fields</a>
              <a href="/interns#experiences" className="block py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => e.target.style.color = '#00B8A9'} onMouseOut={(e) => e.target.style.color = '#2D2D2D'} onClick={() => setMenuOpen(false)}>Experiences</a>
              <a href="/interns#faqs" className="block py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => e.target.style.color = '#00B8A9'} onMouseOut={(e) => e.target.style.color = '#2D2D2D'} onClick={() => setMenuOpen(false)}>FAQs</a>
            </div>
            <div className="pl-4">
              <p className="py-2 font-semibold" style={{color: '#1A4D4D'}}>About Us</p>
              <Link to="/about/mission" className="block py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => e.target.style.color = '#00B8A9'} onMouseOut={(e) => e.target.style.color = '#2D2D2D'} onClick={() => setMenuOpen(false)}>Our Mission</Link>
              <Link to="/about/team" className="block py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => e.target.style.color = '#00B8A9'} onMouseOut={(e) => e.target.style.color = '#2D2D2D'} onClick={() => setMenuOpen(false)}>Our Team</Link>
              <Link to="/about/join-us" className="block py-2 transition" style={{color: '#2D2D2D'}} onMouseOver={(e) => e.target.style.color = '#00B8A9'} onMouseOut={(e) => e.target.style.color = '#2D2D2D'} onClick={() => setMenuOpen(false)}>Join Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
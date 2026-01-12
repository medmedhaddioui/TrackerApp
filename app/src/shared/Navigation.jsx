import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [nestedDropdown, setNestedDropdown] = useState(null);
   
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
    <nav className="fixed top-0 w-full backdrop-blur-glass z-[9999] border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold" style={{color: '#1A4D4D'}}>
            PraktikaX
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* 1. Solutions */}
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdown('solutions')}
                className="nav-link text-gray-800 hover:text-teal-600 flex items-center gap-1"
              >
                Solutions<span className="text-xs">▾</span>
              </button>
              {dropdown === 'solutions' && (
                <div 
                  onMouseEnter={() => setDropdown('solutions')}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-fade-in"
                >
                  <Link to="/solutions/industry-internships" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Industry Internships
                  </Link>
                  <Link to="/solutions/co-hosted-programs" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Co-Hosted Programs
                  </Link>
                  <Link to="/solutions/custom-training" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Custom Training Programs
                  </Link>
                  <Link to="/solutions/industrial-courses" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Industrial Courses
                  </Link>
                  <Link to="/solutions/workshops" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Workshops & Masterclasses
                  </Link>
                  <Link to="/solutions/bootcamps" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Bootcamps & Career Tracks
                  </Link>
                  <Link to="/solutions/career-mentorship" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Career Mentorship (1-to-1)
                  </Link>
                </div>
              )}
            </div>

            {/* 2. Who It's For */}
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdown('who-its-for')}
                className="nav-link text-gray-800 hover:text-teal-600 flex items-center gap-1"
              >
                Who It's For <span className="text-xs">▾</span>
              </button>
              {dropdown === 'who-its-for' && (
                <div 
                  onMouseEnter={() => setDropdown('who-its-for')}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-fade-in"
                >
                  <Link to="/for/students-graduates" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Students & Graduates
                  </Link>
                  <Link to="/for/universities-educators" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Universities & Educators
                  </Link>
                  <Link to="/for/companies-organizations" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Companies & Organizations
                  </Link>
                  <Link to="/for/governments" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Governments & Public Sector
                  </Link>
                  <Link to="/for/institutions-ngos" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Institutions & NGOs
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Experiences */}
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdown('experiences')}
                className="nav-link text-gray-800 hover:text-teal-600 flex items-center gap-1"
              >
                Experiences <span className="text-xs">▾</span>
              </button>
              {dropdown === 'experiences' && (
                <div 
                  onMouseEnter={() => setDropdown('experiences')}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-fade-in"
                >
                  <Link to="/experiences/real-projects" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Real Projects
                  </Link>
                  <Link to="/experiences/global-exposure" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Global Exposure
                  </Link>
                  <Link to="/experiences/career-outcomes" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Career Outcomes
                  </Link>
                  <Link to="/experiences/success-stories" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Success Stories
                  </Link>
                  <Link to="/experiences/testimonials" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Feedback & Testimonials
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Ecosystem */}
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdown('ecosystem')}
                className="nav-link text-gray-800 hover:text-teal-600 flex items-center gap-1"
              >
                Ecosystem <span className="text-xs">▾</span>
              </button>
              {dropdown === 'ecosystem' && (
                <div 
                  onMouseEnter={() => setDropdown('ecosystem')}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-60 bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-fade-in"
                >
                  <Link to="/ecosystem/volunteer-expert" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Volunteer as an Expert
                  </Link>
                  <Link to="/ecosystem/hiring-initiatives" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Hiring Initiatives
                  </Link>
                  <Link to="/ecosystem/events" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Educational & Career Events
                  </Link>
                  <Link to="/ecosystem/expert-network" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Global Expert Network
                  </Link>
                  <Link to="/ecosystem/industry-engagements" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Industry Engagements
                  </Link>
                </div>
              )}
            </div>

            {/* 5. Partnerships */}
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdown('partnerships')}
                className="nav-link text-gray-800 hover:text-teal-600 flex items-center gap-1"
              >
                Partnerships <span className="text-xs">▾</span>
              </button>
              {dropdown === 'partnerships' && (
                <div 
                  onMouseEnter={() => setDropdown('partnerships')}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-fade-in"
                >
                  <Link to="/partnerships/university" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    University Partnerships
                  </Link>
                  <Link to="/partnerships/industry" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Industry Partners
                  </Link>
                  
                  {/* Nested Affiliate Network */}
                  <div 
                    className="relative"
                    onMouseEnter={() => setNestedDropdown('affiliates')}
                    onMouseLeave={() => setNestedDropdown(null)}
                  >
                    <button className="w-full text-left px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors flex items-center justify-between">
                      Affiliate Network <span className="text-xs">›</span>
                    </button>
                    {nestedDropdown === 'affiliates' && (
                      <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                        <Link to="/partnerships/affiliates/career-coaches" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white transition-colors">
                          Career Coaches
                        </Link>
                        <Link to="/partnerships/affiliates/influencers" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white transition-colors">
                          Influencers
                        </Link>
                        <Link to="/partnerships/affiliates/agencies" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white transition-colors">
                          Agencies
                        </Link>
                        <Link to="/partnerships/affiliates/consultants" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white transition-colors">
                          Consultants
                        </Link>
                      </div>
                    )}
                  </div>

                  <Link to="/partnerships/co-host" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Become a Co-Host
                  </Link>
                  <Link to="/partnerships/strategic-alliances" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Strategic Alliances
                  </Link>
                </div>
              )}
            </div>

            {/* 6. About */}
            <div className="relative group">
              <button 
                onMouseEnter={() => setDropdown('about')}
                className="nav-link text-gray-800 hover:text-teal-600 flex items-center gap-1"
              >
                About <span className="text-xs">▾</span>
              </button>
              {dropdown === 'about' && (
                <div 
                  onMouseEnter={() => setDropdown('about')}
                  onMouseLeave={() => setDropdown(null)}
                  className="absolute top-full left-0 mt-2 w-60 bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-fade-in"
                >
                  <Link to="/about/mission-vision" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Our Mission & Vision
                  </Link>
                  <Link to="/about/our-model" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Our Model (How We Work)
                  </Link>
                  <Link to="/about/team-experts" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Our Team & Experts
                  </Link>
                  <Link to="/about/european-network" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Our European Network
                  </Link>
                  <Link to="/about/contact" className="block px-4 py-2 text-gray-800 hover:bg-teal-600 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            {/* 7. Login/Portal */}
            <Link to="/login" className="text-white px-6 py-2 rounded-lg font-semibold bg-orange-500 hover:bg-orange-600 transition-colors">
              Login / Portal
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

    {/* MOBILE MENU */}
    {menuOpen && (
      <div className="fixed inset-0 top-16 bg-white z-[10000] overflow-y-auto md:hidden">
        <div className="pl-4 pb-10">

          <p className="py-2 font-semibold text-teal-800 mt-4">Solutions</p>
          <Link to="/solutions/industry-internships" className="block py-2" onClick={() => setMenuOpen(false)}>Industry Internships</Link>
          <Link to="/solutions/co-hosted-programs" className="block py-2" onClick={() => setMenuOpen(false)}>Co-Hosted Programs</Link>
          <Link to="/solutions/custom-training" className="block py-2" onClick={() => setMenuOpen(false)}>Custom Training Programs</Link>
          <Link to="/solutions/industrial-courses" className="block py-2" onClick={() => setMenuOpen(false)}>Industrial Courses</Link>
          <Link to="/solutions/workshops-masterclasses" className="block py-2" onClick={() => setMenuOpen(false)}>Workshops & Masterclasses</Link>
          <Link to="/solutions/bootcamps" className="block py-2" onClick={() => setMenuOpen(false)}>Bootcamps & Career Tracks</Link>
          <Link to="/solutions/career-mentorship" className="block py-2" onClick={() => setMenuOpen(false)}>Career Mentorship (1-to-1)</Link>

          <p className="py-2 font-semibold text-teal-800 mt-4">Who It's For</p>
          <Link to="/for/students-graduates" className="block py-2" onClick={() => setMenuOpen(false)}>Students & Graduates</Link>
          <Link to="/for/universities-educators" className="block py-2" onClick={() => setMenuOpen(false)}>Universities & Educators</Link>
          <Link to="/for/companies-organizations" className="block py-2" onClick={() => setMenuOpen(false)}>Companies & Organizations</Link>
          <Link to="/for/governments" className="block py-2" onClick={() => setMenuOpen(false)}>Governments & Public Sector</Link>
          <Link to="/for/institutions-ngos" className="block py-2" onClick={() => setMenuOpen(false)}>Institutions & NGOs</Link>

          <p className="py-2 font-semibold text-teal-800 mt-4">Experiences</p>
          <Link to="/experiences/real-projects" className="block py-2" onClick={() => setMenuOpen(false)}>Real Projects</Link>
          <Link to="/experiences/global-exposure" className="block py-2" onClick={() => setMenuOpen(false)}>Global Exposure</Link>
          <Link to="/experiences/career-outcomes" className="block py-2" onClick={() => setMenuOpen(false)}>Career Outcomes</Link>
          <Link to="/experiences/success-stories" className="block py-2" onClick={() => setMenuOpen(false)}>Success Stories</Link>
          <Link to="/experiences/testimonials" className="block py-2" onClick={() => setMenuOpen(false)}>Feedback & Testimonials</Link>

          <p className="py-2 font-semibold text-teal-800 mt-4">Ecosystem</p>
          <Link to="/ecosystem/volunteer-expert" className="block py-2" onClick={() => setMenuOpen(false)}>Volunteer as an Expert</Link>
          <Link to="/ecosystem/hiring-initiatives" className="block py-2" onClick={() => setMenuOpen(false)}>Hiring Initiatives</Link>
          <Link to="/ecosystem/events" className="block py-2" onClick={() => setMenuOpen(false)}>Educational & Career Events</Link>
          <Link to="/ecosystem/expert-network" className="block py-2" onClick={() => setMenuOpen(false)}>Global Expert Network</Link>
          <Link to="/ecosystem/industry-engagements" className="block py-2" onClick={() => setMenuOpen(false)}>Industry Engagements</Link>

          <p className="py-2 font-semibold text-teal-800 mt-4">Partnerships</p>
          <Link to="/partnerships/university" className="block py-2" onClick={() => setMenuOpen(false)}>University Partnerships</Link>
          <Link to="/partnerships/industry" className="block py-2" onClick={() => setMenuOpen(false)}>Industry Partners</Link>
          <p className="py-2 pl-4 font-semibold text-orange-600">Affiliate Network</p>
          <Link to="/partnerships/affiliates/career-coaches" className="block py-2 pl-8" onClick={() => setMenuOpen(false)}>Career Coaches</Link>
          <Link to="/partnerships/affiliates/influencers" className="block py-2 pl-8" onClick={() => setMenuOpen(false)}>Influencers</Link>
          <Link to="/partnerships/affiliates/agencies" className="block py-2 pl-8" onClick={() => setMenuOpen(false)}>Agencies</Link>
          <Link to="/partnerships/affiliates/consultants" className="block py-2 pl-8" onClick={() => setMenuOpen(false)}>Consultants</Link>
          <Link to="/partnerships/co-host" className="block py-2" onClick={() => setMenuOpen(false)}>Become a Co-Host</Link>
          <Link to="/partnerships/strategic-alliances" className="block py-2" onClick={() => setMenuOpen(false)}>Strategic Alliances</Link>

          <p className="py-2 font-semibold text-teal-800 mt-4">About</p>
          <Link to="/about/mission-vision" className="block py-2" onClick={() => setMenuOpen(false)}>Our Mission & Vision</Link>
          <Link to="/about/our-model" className="block py-2" onClick={() => setMenuOpen(false)}>Our Model (How We Work)</Link>
          <Link to="/about/team-experts" className="block py-2" onClick={() => setMenuOpen(false)}>Our Team & Experts</Link>
          <Link to="/about/european-network" className="block py-2" onClick={() => setMenuOpen(false)}>Our European Network</Link>
          <Link to="/about/contact" className="block py-2" onClick={() => setMenuOpen(false)}>Contact Us</Link>

          <Link to="/login" className="block py-3 px-6 mt-6 bg-orange-500 text-white rounded-lg font-semibold text-center w-48" onClick={() => setMenuOpen(false)}>
            Login / Portal
          </Link>

        </div>
      </div>
    )}
    </>
  );
}
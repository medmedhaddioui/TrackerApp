export function Footer({scrollToSection}) {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A2A2A 0%, #1A4D4D 50%, #00B8A9 100%)' }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
        <div className="absolute -top-1/4 -right-1/4 w-[400px] h-[400px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #00B8A9 0%, transparent 70%)', filter: 'blur(80px)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4" style={{ background: 'linear-gradient(135deg, #FF8C42 0%, #FFB88C 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Virtual Internships
            </div>
            <p className="text-sm text-white/70">Shaping tomorrow's workforce: one internship at a time</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/70">
              <li><button onClick={() => scrollToSection('hero')} className="hover:text-white transition">Home</button></li>
              <li><button onClick={() => scrollToSection('programs')} className="hover:text-white transition">Programs</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition">About</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">For You</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition">Interns: Apply</a></li>
              <li><a href="#" className="hover:text-white transition">Companies: Hire</a></li>
              <li><a href="#" className="hover:text-white transition">Educators: Partner</a></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">About</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-white/60" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
          <p>&copy; 2026 Virtual Internships. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
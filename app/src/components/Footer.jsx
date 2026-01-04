export function Footer({ scrollToSection }) {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Virtual Internships
            </div>
            <p className="text-sm">Shaping tomorrow's workforce: one internship at a time</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('hero')} className="hover:text-white transition">Home</button></li>
              <li><button onClick={() => scrollToSection('programs')} className="hover:text-white transition">Programs</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition">About</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">For You</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Interns: Apply</a></li>
              <li><a href="#" className="hover:text-white transition">Companies: Hire</a></li>
              <li><a href="#" className="hover:text-white transition">Educators: Partner</a></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 Virtual Internships. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
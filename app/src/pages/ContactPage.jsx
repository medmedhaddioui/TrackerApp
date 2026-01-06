import { useState } from "react";

export function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/xbdlzzly', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus(error);
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(0,184,169,0.05) 0%, #FFFFFF 50%, rgba(255,140,66,0.05) 100%)' }}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#00B8A9' }}></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#FF8C42' }}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-full text-sm font-bold mb-6 backdrop-blur-sm" style={{ backgroundColor: 'rgba(0,184,169,0.15)', color: '#00B8A9', border: '2px solid rgba(0,184,169,0.3)' }}>
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#1A4D4D' }}>Get Started Today</h2>
          <p className="text-xl md:text-2xl font-light" style={{ color: '#2D2D2D' }}>Ready to launch your career with a global internship? Contact us</p>
        </div>

        <form onSubmit={handleSubmit} className="relative bg-white p-10 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm" style={{ border: '2px solid rgba(0,184,169,0.1)' }}>
          <div className="absolute top-0 left-0 w-full h-2" style={{ background: 'linear-gradient(90deg, #00B8A9 0%, #FF8C42 100%)' }}></div>
          
          <div className="mb-6">
            <label className="block font-bold mb-3 text-base" style={{ color: '#1A4D4D' }}>Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300"
              style={{ borderColor: 'rgba(0,184,169,0.2)' }}
              onFocus={(e) => e.target.style.borderColor = '#00B8A9'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,184,169,0.2)'}
              placeholder="Mohammed"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block font-bold mb-3 text-base" style={{ color: '#1A4D4D' }}>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300"
              style={{ borderColor: 'rgba(0,184,169,0.2)' }}
              onFocus={(e) => e.target.style.borderColor = '#00B8A9'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,184,169,0.2)'}
              placeholder="Mohammed@example.com"
              required
            />
          </div>

          <div className="mb-8">
            <label className="block font-bold mb-3 text-base" style={{ color: '#1A4D4D' }}>Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="6"
              className="w-full px-6 py-4 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none"
              style={{ borderColor: 'rgba(0,184,169,0.2)' }}
              onFocus={(e) => e.target.style.borderColor = '#00B8A9'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(0,184,169,0.2)'}
              placeholder="Tell us how we can help you..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="group relative w-full py-5 text-white rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
            style={{ backgroundColor: '#00B8A9' }}
          >
            <span className="relative z-10">{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(45deg, rgba(255,255,255,0.2) 0%, transparent 100%)' }}></div>
          </button>

          {status === 'success' && (
            <div className="text-center mt-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(0,184,169,0.1)' }}>
              <p className="font-bold" style={{ color: '#00B8A9' }}>
                Message sent successfully! We'll get back to you soon.
              </p>
            </div>
          )}
          
          {status === 'error' && (
            <div className="text-center mt-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,140,66,0.1)' }}>
              <p className="font-bold" style={{ color: '#FF8C42' }}>
                Something went wrong. Please try again.
              </p>
            </div>
          )}

          {!status && (
            <p className="text-center text-sm mt-6 font-medium" style={{ color: '#2D2D2D', opacity: 0.7 }}>
              We typically respond within 24 hours
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
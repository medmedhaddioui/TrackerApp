const partners = [
  "/tech1.webp",
  "/tech2.webp",
  "/tech3.webp",
  "/tech4.webp",
  "/tech5.webp",
  "/tech6.webp",
  "/tech7.webp",
  "/tech8.webp",
  "/tech9.webp",
  "/tech10.webp",
];

const Partners = () => {
  return (
    <div className="overflow-hidden bg-white py-10">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 rounded-full text-sm font-bold mb-6 backdrop-blur-sm transition-all duration-300 hover:scale-105" style={{ backgroundColor: 'rgba(0,184,169,0.15)', color: '#00B8A9', border: '2px solid rgba(0,184,169,0.3)' }}>
            Our Partner's
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300" style={{ color: '#1A4D4D' }}>Collaborate With Us</h2>
          <p className="text-xl md:text-2xl font-light" style={{ color: '#2D2D2D' }}>Connecting you with trusted industry leaders to grow, innovate, and succeed together.</p>
        </div>
      <div className="flex w-[200%] animate-scroll">
        {[...partners].map((logo, idx) => (
          <div key={idx} className="flex-shrink-0 px-8 transition-all duration-300 hover:scale-110 hover:-translate-y-2">
            <img
              src={logo}
              alt={`Partner ${idx}`}
              className="h-16 md:h-20 object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Partners;

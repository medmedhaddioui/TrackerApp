import { useState, useEffect } from "react";
import { Sparkles, Users, Clock, Target, Award, CheckCircle, Send, Zap, BookOpen, Code, Briefcase, Brain, TrendingUp, Globe } from "lucide-react";

export default function App() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isCustomizeVisible, setIsCustomizeVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('field');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    teamSize: '',
    field: '',
    format: '',
    duration: '',
    message: ''
  });

  useEffect(() => {
    setIsHeroVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.target.id === 'customize' && entry.isIntersecting) {
            setIsCustomizeVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const customizeElement = document.getElementById('customize');
    if (customizeElement) observer.observe(customizeElement);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', company: '', teamSize: '', field: '', format: '', duration: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const options = {
    field: [
      { icon: Code, title: 'Technology & IT', desc: 'Software development, cybersecurity, data science', color: 'from-blue-500 to-cyan-500' },
      { icon: Briefcase, title: 'Business & Management', desc: 'Leadership, project management, strategy', color: 'from-purple-500 to-pink-500' },
      { icon: Brain, title: 'Soft Skills', desc: 'Communication, teamwork, problem-solving', color: 'from-green-500 to-teal-500' },
      { icon: TrendingUp, title: 'Industry-Specific', desc: 'Finance, healthcare, manufacturing', color: 'from-orange-500 to-red-500' }
    ],
    format: [
      { icon: Users, title: 'In-Person', desc: 'On-site training at your location', color: 'from-indigo-500 to-blue-500' },
      { icon: Globe, title: 'Virtual', desc: 'Live online interactive sessions', color: 'from-cyan-500 to-teal-500' },
      { icon: BookOpen, title: 'Hybrid', desc: 'Blend of online and in-person', color: 'from-violet-500 to-purple-500' },
      { icon: Target, title: 'Self-Paced', desc: 'Flexible learning modules', color: 'from-pink-500 to-rose-500' }
    ],
    duration: [
      { icon: Zap, title: 'Intensive Bootcamp', desc: '1-2 weeks full immersion', color: 'from-yellow-500 to-orange-500' },
      { icon: Clock, title: 'Short Course', desc: '4-8 weeks part-time', color: 'from-emerald-500 to-green-500' },
      { icon: TrendingUp, title: 'Extended Program', desc: '3-6 months comprehensive', color: 'from-blue-500 to-indigo-500' },
      { icon: Award, title: 'Ongoing Development', desc: 'Continuous learning journey', color: 'from-fuchsia-500 to-purple-500' }
    ]
  };

  const tabs = [
    { id: 'field', label: 'Field', icon: Target },
    { id: 'format', label: 'Format', icon: Users },
    { id: 'duration', label: 'Duration', icon: Clock }
  ];

  const trainingTypes = [
    {
      title: 'Technical Skills Training',
      description: 'Master the latest technologies and tools in your industry',
      features: ['Programming Languages', 'Cloud Computing', 'DevOps & CI/CD', 'Data Analytics'],
      color: 'from-blue-500 to-cyan-500',
      icon: Code
    },
    {
      title: 'Leadership Development',
      description: 'Build strong leaders who inspire and drive results',
      features: ['Strategic Thinking', 'Team Management', 'Decision Making', 'Change Management'],
      color: 'from-purple-500 to-pink-500',
      icon: Users
    },
    {
      title: 'Professional Certification',
      description: 'Prepare your team for industry-recognized certifications',
      features: ['Exam Preparation', 'Practice Tests', 'Expert Mentoring', 'Study Materials'],
      color: 'from-orange-500 to-red-500',
      icon: Award
    },
    {
      title: 'Soft Skills Enhancement',
      description: 'Develop critical interpersonal and communication skills',
      features: ['Communication', 'Collaboration', 'Problem Solving', 'Emotional Intelligence'],
      color: 'from-green-500 to-teal-500',
      icon: Brain
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Tailored Content',
      description: 'Programs designed specifically for your industry and team needs',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with real-world experience',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Flexible Scheduling',
      description: 'Training that fits your team\'s schedule and availability',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Award,
      title: 'Measurable Results',
      description: 'Track progress and ROI with comprehensive analytics',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'Training aligned with international best practices',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Support',
      description: 'Ongoing assistance and resources after training completion',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen">
      <style>{`
        @keyframes floating {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(5deg); }
          66% { transform: translate(-20px, 20px) rotate(-5deg); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(20, 184, 166, 0.3); }
          50% { box-shadow: 0 0 40px rgba(20, 184, 166, 0.6); }
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .floating { animation: floating 20s ease-in-out infinite; }
        .floating-delayed { animation: floating 25s ease-in-out infinite 5s; }
        .floating-slow { animation: floating 30s ease-in-out infinite 2s; }
        .animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; opacity: 0; }
        .animate-scale-in { animation: scaleIn 0.5s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-bounce-in { animation: bounceIn 0.8s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.8s ease-out forwards; opacity: 0; }
        .group:hover .animate-icon-bounce { animation: iconBounce 0.6s ease-in-out; }
        .group:hover .hover-wiggle { animation: wiggle 0.5s ease-in-out; }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-rotate { animation: rotate 20s linear infinite; }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 2000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-teal-500 blur-3xl opacity-20 animate-pulse floating"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-orange-500 blur-3xl opacity-20 animate-pulse floating-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-purple-500 blur-3xl opacity-10 animate-pulse floating-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-1000 transform ${isHeroVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/20 to-orange-500/20 border border-teal-500/30 mb-6 shimmer">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span className="text-sm font-semibold text-teal-700">
                Tailored Learning Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-teal-500 to-orange-600 bg-clip-text text-transparent">
              Custom Training Programs
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-600">
              Build your team's future with training programs designed specifically for your organization's needs and goals
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#customize" className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-teal-500/50 flex items-center gap-2 pulse-glow">
                Customize Your Program
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a href="#types" className="px-8 py-4 rounded-xl font-semibold border-2 border-gray-300 text-gray-800 hover:bg-gray-50 transition-all transform hover:scale-105">
                Explore Training Types
              </a>
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            {[
              { icon: Users, number: '500+', label: 'Companies Trained', color: 'from-blue-500 to-blue-600' },
              { icon: Award, number: '95%', label: 'Success Rate', color: 'from-purple-500 to-purple-600' },
              { icon: Globe, number: '30+', label: 'Countries Reached', color: 'from-orange-500 to-orange-600' }
            ].map((stat, i) => (
              <div
                key={i}
                className={`p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-200 shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${isHeroVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 150 + 500}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 transition-transform hover:rotate-12`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold mb-1 text-gray-900">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section id="customize" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Customize Your Training
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect combination for your team's needs
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex gap-2 p-2 rounded-2xl bg-gray-100 shadow-inner">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg transform scale-105'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Options Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {options[activeTab].map((option, i) => (
              <div
                key={i}
                className={`group p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-teal-500 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-2 shadow-md hover:shadow-2xl ${isCustomizeVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-4 transition-all group-hover:scale-110 group-hover:rotate-6 shadow-lg animate-icon-bounce`}>
                  <option.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {option.title}
                </h3>
                <p className="text-gray-600">
                  {option.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Types Section */}
      <section id="types" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Training Programs We Offer
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for every learning need
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingTypes.map((type, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-lg`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {type.title}
                </h3>
                <p className="mb-6 text-gray-600">
                  {type.description}
                </p>
                
                <div className="space-y-3">
                  {type.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3 transition-all hover:translate-x-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 text-teal-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why Choose Our Programs
            </h2>
            <p className="text-xl text-gray-600">
              Experience the PraktikaX advantage
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg transition-transform hover:rotate-12`}>
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Form Section */}
      <section id="request" className="py-20 bg-gradient-to-br from-teal-50 via-white to-orange-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Request Your Custom Program
            </h2>
            <p className="text-xl text-gray-600">
              Let's create the perfect training solution for your team
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-3xl shadow-2xl bg-white border border-gray-200 transition-all hover:shadow-3xl">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Team Size *
                  </label>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                  >
                    <option value="">Select team size</option>
                    <option value="1-10">1-10 people</option>
                    <option value="11-50">11-50 people</option>
                    <option value="51-200">51-200 people</option>
                    <option value="200+">200+ people</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Training Field *
                  </label>
                  <select
                    name="field"
                    value={formData.field}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                  >
                    <option value="">Select field</option>
                    <option value="technology">Technology & IT</option>
                    <option value="business">Business & Management</option>
                    <option value="soft-skills">Soft Skills</option>
                    <option value="industry">Industry-Specific</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Preferred Format *
                  </label>
                  <select
                    name="format"
                    value={formData.format}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                  >
                    <option value="">Select format</option>
                    <option value="in-person">In-Person</option>
                    <option value="virtual">Virtual</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="self-paced">Self-Paced</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 font-semibold text-gray-700">
                    Duration *
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                  >
                    <option value="">Select duration</option>
                    <option value="1-2-weeks">1-2 Weeks</option>
                    <option value="4-8-weeks">4-8 Weeks</option>
                    <option value="3-6-months">3-6 Months</option>
                    <option value="ongoing">Ongoing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Additional Details
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                  placeholder="Tell us more about your training needs and goals..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl font-bold text-lg hover:from-teal-600 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-teal-500/50 flex items-center justify-center gap-2"
              >
                Submit Request
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}
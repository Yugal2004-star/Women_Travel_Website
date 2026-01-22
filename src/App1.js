import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Users, Award, Globe, Heart, Shield, Compass, Mountain, Camera, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Star, Plane, Ship, Clock, CheckCircle, Sparkles, Wind, Sun } from 'lucide-react';

const TourismWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', title: 'Mountain Trekking', color: 'from-pink-400 to-rose-400' },
    { url: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80', title: 'Cultural Heritage', color: 'from-purple-400 to-pink-400' },
    { url: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80', title: 'Jungle Safari', color: 'from-orange-400 to-pink-400' },
    { url: 'https://images.unsplash.com/photo-1570778711852-c97fac815def?w=800&q=80', title: 'Spiritual Journey', color: 'from-yellow-400 to-orange-400' },
    { url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80', title: 'Beach Retreat', color: 'from-cyan-400 to-blue-400' },
    { url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80', title: 'Scenic Beauty', color: 'from-emerald-400 to-teal-400' },
  ];

  const content = {
    hero: {
      title: "Explore the World in Full Color",
      subtitle: "Where Every Journey Becomes a Beautiful Story"
    },
    tours: [
      { 
        id: 1, 
        name: "Eco Tours", 
        description: "Sustainable travel in pristine nature",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
        duration: "5-7 Days",
        price: "₹15,000",
        gradient: "from-emerald-400 via-teal-400 to-cyan-400"
      },
      { 
        id: 2, 
        name: "Pilgrimage Tours", 
        description: "Spiritual journeys to sacred places",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
        duration: "7-10 Days",
        price: "₹20,000",
        gradient: "from-orange-400 via-amber-400 to-yellow-400"
      },
      { 
        id: 3, 
        name: "Jungle Safaris", 
        description: "Wildlife adventures and exploration",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80",
        duration: "3-5 Days",
        price: "₹18,000",
        gradient: "from-lime-400 via-green-400 to-emerald-400"
      },
      { 
        id: 4, 
        name: "Himalayan Treks", 
        description: "Mountain expeditions with experts",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
        duration: "8-12 Days",
        price: "₹25,000",
        gradient: "from-blue-400 via-indigo-400 to-purple-400"
      },
      { 
        id: 5, 
        name: "Cultural Heritage", 
        description: "Explore India's historical legacy",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80",
        duration: "6-8 Days",
        price: "₹22,000",
        gradient: "from-pink-400 via-rose-400 to-red-400"
      },
      { 
        id: 6, 
        name: "Off-beat Destinations", 
        description: "Discover hidden gems",
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80",
        duration: "4-6 Days",
        price: "₹16,000",
        gradient: "from-fuchsia-400 via-purple-400 to-pink-400"
      }
    ],
    stats: [
      { value: "20+", label: "Years Experience", color: "from-pink-400 to-rose-500" },
      { value: "500+", label: "Tours Conducted", color: "from-purple-400 to-pink-500" },
      { value: "5000+", label: "Happy Travelers", color: "from-orange-400 to-pink-500" },
      { value: "100%", label: "Safety Record", color: "from-cyan-400 to-blue-500" }
    ],
    testimonials: [
      { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "Amazing experience! The women guides made us feel so safe and comfortable. Highly recommended!", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" },
      { name: "Anjali Reddy", location: "Bangalore", rating: 5, text: "Best tour operator for women travelers. Every detail was perfectly planned and executed.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80" },
      { name: "Meera Patel", location: "Delhi", rating: 5, text: "Professional, caring, and knowledgeable. Made our spiritual journey truly memorable!", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80" }
    ]
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % content.testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    { icon: <Shield className="w-12 h-12" />, title: "100% Safe", desc: "Women-led tour coordination", gradient: "from-pink-400 to-rose-500", delay: "0ms" },
    { icon: <Award className="w-12 h-12" />, title: "IATA Certified", desc: "Qualified tourism experts", gradient: "from-purple-400 to-pink-500", delay: "100ms" },
    { icon: <Heart className="w-12 h-12" />, title: "Custom Tours", desc: "Personalized itineraries", gradient: "from-orange-400 to-pink-500", delay: "200ms" },
    { icon: <Globe className="w-12 h-12" />, title: "Pan India", desc: "India, Nepal, Bhutan", gradient: "from-cyan-400 to-blue-500", delay: "300ms" }
  ];

  const destinations = [
    { name: "Himalayas", icon: <Mountain className="w-6 h-6" />, gradient: "from-blue-400 to-purple-400" },
    { name: "Kerala Backwaters", icon: <Ship className="w-6 h-6" />, gradient: "from-teal-400 to-emerald-400" },
    { name: "Rajasthan Heritage", icon: <Camera className="w-6 h-6" />, gradient: "from-orange-400 to-pink-400" },
    { name: "Northeast India", icon: <Compass className="w-6 h-6" />, gradient: "from-purple-400 to-pink-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-pink-400 rounded-full animate-float-particle"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full animate-float-particle animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-cyan-400 rounded-full animate-float-particle animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/4 w-4 h-4 bg-orange-400 rounded-full animate-float-particle animation-delay-3000"></div>
      </div>

      <header className={`fixed w-full z-40 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-xl py-3' : 'bg-gradient-to-b from-white/50 to-transparent backdrop-blur-md py-6'}`}>
        <nav className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <Compass className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">WomenTravel</span>
              <span className="text-xs text-purple-600 font-semibold">✨ NIDHI Certified</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {['Home', 'Tours', 'Gallery', 'About', 'Contact'].map((item, idx) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-semibold text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:bg-clip-text transition-all duration-300 hover:scale-110 relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:block px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-full hover:shadow-2xl hover:shadow-purple-300 transition transform hover:scale-110 font-semibold">
              Book Now ✨
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-3 rounded-xl bg-gradient-to-br from-pink-400 to-purple-400">
              {isMenuOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-2xl absolute w-full mt-4 py-6 animate-slideDown rounded-b-3xl border-t-4 border-gradient-to-r from-pink-400 to-purple-400">
            {['Home', 'Tours', 'Gallery', 'About', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block px-6 py-4 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition font-semibold text-gray-700 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section with Video Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.coverr.co/videos/coverr-woman-traveling-through-nature-9710/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/40 via-purple-400/40 to-cyan-400/40"></div>
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        </div>

        {/* Animated sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Sparkles className="absolute top-20 left-20 w-8 h-8 text-yellow-300 animate-pulse" style={{animationDelay: '0s'}} />
          <Sparkles className="absolute top-40 right-40 w-6 h-6 text-pink-300 animate-pulse" style={{animationDelay: '1s'}} />
          <Sparkles className="absolute bottom-40 left-1/3 w-7 h-7 text-purple-300 animate-pulse" style={{animationDelay: '2s'}} />
          <Sparkles className="absolute top-1/2 right-20 w-5 h-5 text-cyan-300 animate-pulse" style={{animationDelay: '1.5s'}} />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-20">
          <div className="inline-block mb-6 animate-bounceIn">
            <div className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-xl border-2 border-pink-300">
              <span className="text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text font-bold text-lg">
                ✨ Women-Led Adventures ✨
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-6 animate-fadeInUp leading-tight">
            <span className="text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text drop-shadow-2xl">
              {content.hero.title}
            </span>
          </h1>
          
          <p className="text-2xl md:text-4xl text-gray-800 mb-10 animate-fadeInUp animation-delay-200 font-bold drop-shadow-lg">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fadeInUp animation-delay-300">
            {destinations.map((dest, idx) => (
              <div key={idx} className={`px-6 py-3 bg-gradient-to-r ${dest.gradient} text-white font-bold rounded-full flex items-center gap-2 hover:scale-110 transition transform cursor-pointer shadow-xl hover:shadow-2xl animate-float`} style={{animationDelay: `${idx * 200}ms`}}>
                {dest.icon}
                {dest.name}
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp animation-delay-400">
            <a href="#tours" className="group px-12 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-full font-bold hover:shadow-2xl hover:shadow-purple-400 transition transform hover:scale-110 flex items-center justify-center gap-2 text-xl">
              <Sparkles className="w-6 h-6 animate-spin-slow" />
              Explore Tours 
              <ChevronRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#contact" className="px-12 py-5 bg-white text-purple-600 rounded-full font-bold hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition transform hover:scale-110 shadow-2xl border-4 border-purple-300 text-xl">
              Plan My Trip
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-8 h-12 border-4 border-pink-400 rounded-full flex justify-center p-2">
              <div className="w-2 h-4 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full animate-scroll"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.stats.map((stat, idx) => (
              <div key={idx} className="text-center transform hover:scale-110 transition duration-500 group animate-fadeInUp" style={{animationDelay: `${idx * 100}ms`}}>
                <div className="mb-4 flex justify-center">
                  <div className={`w-24 h-24 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500 shadow-xl relative`}>
                    {idx === 0 && <Award className="w-12 h-12 text-white" />}
                    {idx === 1 && <Plane className="w-12 h-12 text-white" />}
                    {idx === 2 && <Users className="w-12 h-12 text-white" />}
                    {idx === 3 && <CheckCircle className="w-12 h-12 text-white" />}
                    <div className="absolute -top-2 -right-2">
                      <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
                    </div>
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-125 transition-transform">{stat.value}</div>
                <div className="text-gray-700 font-bold text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section id="tours" className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 relative overflow-hidden">
        {/* Animated background waves */}
        <div className="absolute inset-0 opacity-30">
          <Wind className="absolute top-20 left-10 w-32 h-32 text-pink-300 animate-pulse" />
          <Sun className="absolute top-40 right-20 w-40 h-40 text-orange-300 animate-spin-slow" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 animate-bounceIn">
              <span className="px-6 py-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-bold text-lg shadow-xl">
                ✨ Our Premium Collections ✨
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-fadeInUp">Magical Journeys</h2>
            <p className="text-2xl text-gray-700 max-w-3xl mx-auto font-semibold animate-fadeInUp animation-delay-200">
              Customized adventures across Pan India, Nepal & Bhutan 🌸
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.tours.map((tour, idx) => (
              <div key={tour.id} className="group bg-white rounded-3xl shadow-2xl hover:shadow-pink-300 transition-all duration-500 overflow-hidden transform hover:-translate-y-4 hover:rotate-1 animate-fadeInUp cursor-pointer" style={{animationDelay: `${idx * 100}ms`}}>
                <div className="relative h-64 overflow-hidden">
                  <img src={tour.image} alt={tour.name} className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-3 transition-transform duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${tour.gradient} opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                  <div className="absolute top-4 right-4 bg-white px-5 py-2 rounded-full font-black text-purple-600 shadow-xl animate-pulse">
                    {tour.price}
                  </div>
                  <div className="absolute top-4 left-4">
                    <Sparkles className="w-8 h-8 text-yellow-300 animate-spin-slow" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-3xl font-black text-white drop-shadow-lg">{tour.name}</h3>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-pink-50">
                  <p className="text-gray-700 mb-4 leading-relaxed font-semibold">{tour.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-purple-600 font-bold">
                      <Clock className="w-5 h-5" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(star => (
                        <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${star * 100}ms`}} />
                      ))}
                    </div>
                  </div>
                  <button className={`w-full py-4 bg-gradient-to-r ${tour.gradient} text-white rounded-2xl font-black hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-lg`}>
                    Book Now <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-purple-50/50 to-cyan-50/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 animate-bounceIn">
              <span className="px-6 py-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-full font-bold text-lg shadow-xl">
                📸 Travel Moments 📸
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Picture Perfect</h2>
            <p className="text-xl text-gray-600 font-semibold">Captured memories from our incredible journeys ✨</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-purple-300 transition-all duration-500 transform hover:scale-105 hover:-rotate-2 cursor-pointer animate-fadeInUp" style={{animationDelay: `${idx * 100}ms`}}>
                <div className="aspect-square overflow-hidden">
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-6 transition-transform duration-700" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t ${img.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-end`}>
                  <div className="p-6 w-full">
                    <h3 className="text-white text-2xl font-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-lg">{img.title}</h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-8 h-8 text-white animate-spin-slow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 animate-bounceIn">
              <span className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold text-lg shadow-xl">
                💝 Why Choose Us 💝
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text mb-4">We Care, We Share</h2>
            <p className="text-2xl text-gray-700 max-w-2xl mx-auto font-semibold">Leading with love in women-centric travel experiences</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group bg-white rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-300 transition-all duration-500 transform hover:scale-110 hover:-rotate-3 cursor-pointer animate-fadeInUp" style={{animationDelay: feature.delay}}>
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 mx-auto shadow-xl relative`}>
                  <div className="text-white">{feature.icon}</div>
                  <div className="absolute -top-2 -right-2">
                    <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                  </div>
                </div>
                <h4 className="text-2xl font-black mb-3 text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-center">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed text-center font-semibold">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 animate-bounceIn">
              <span className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-white rounded-full font-bold text-lg shadow-xl">
                💬 Happy Stories 💬
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Love from Travelers</h2>
            <p className="text-xl text-gray-600 font-semibold">Hear what our amazing explorers say ✨</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {content.testimonials.map((testimonial, idx) => (
              <div key={idx} className={`transition-all duration-500 ${idx === activeTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'}`}>
                <div className="bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-2xl p-12 relative border-4 border-pink-200">
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex items-center gap-6 mb-8 relative z-10">
                    <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover border-4 border-purple-300 shadow-xl" />
                    <div>
                      <h4 className="text-3xl font-black text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">{testimonial.name}</h4>
                      <p className="text-gray-600 font-semibold">{testimonial.location}</p>
                      <div className="flex gap-1 mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 animate-pulse" style={{animationDelay: `${i * 100}ms`}} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-2xl text-gray-700 leading-relaxed relative z-10 font-semibold italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center gap-3 mt-8">
              {content.testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-4 rounded-full transition-all duration-300 ${idx === activeTestimonial ? 'bg-gradient-to-r from-pink-500 to-purple-500 w-16' : 'bg-pink-200 w-4'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80" alt="About Us" className="rounded-3xl shadow-2xl transform group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500" />
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <Heart className="w-10 h-10 text-white" />
                </div>
              </div>
              <div>
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-bold mb-6 shadow-xl animate-pulse">
                  ✨ NIDHI Certified Company ✨
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">20 Years of Excellence</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
                  A NIDHI registered company under the Ministry of Tourism and Maharashtra Tourism, we are a <span className="text-pink-600 font-black">women-led organization</span> that aims to provide safe, secure, and happy vacations for all. 💝
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-semibold">
                  Understanding the basic needs of women travelers, our women tour coordinators and tour managers make every journey pleasant and memorable. ✨
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition transform hover:scale-105">
                    <CheckCircle className="w-8 h-8 text-green-500 mt-1 flex-shrink-0 animate-pulse" />
                    <p className="text-gray-700 font-bold"><span className="text-purple-600">IATA Certified</span> professionals with HMI training</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition transform hover:scale-105">
                    <CheckCircle className="w-8 h-8 text-green-500 mt-1 flex-shrink-0 animate-pulse" />
                    <p className="text-gray-700 font-bold"><span className="text-purple-600">500+ Tours</span> successfully conducted across India, Nepal & Bhutan</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition transform hover:scale-105">
                    <CheckCircle className="w-8 h-8 text-green-500 mt-1 flex-shrink-0 animate-pulse" />
                    <p className="text-gray-700 font-bold"><span className="text-purple-600">Custom Itineraries</span> tailored to your preferences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-300 via-purple-300 to-cyan-300 animate-gradient"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-12">
            <div className="inline-block mb-4 animate-bounceIn">
              <span className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold text-lg shadow-xl">
                📞 Get In Touch 📞
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Let's Plan Together</h2>
            <p className="text-2xl text-gray-700 mb-8 font-bold">Ready for an unforgettable adventure? 🌈</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-pink-300 transition group transform hover:scale-110 hover:-rotate-2 duration-300 cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-transform shadow-xl">
                  <Phone className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-black text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-2xl mb-2">Call Us</h4>
                <p className="text-gray-600 font-semibold">+91 98765 43210</p>
                <p className="text-gray-600 font-semibold">+91 98765 43211</p>
              </div>
              <div className="bg-white rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-purple-300 transition group transform hover:scale-110 hover:rotate-2 duration-300 cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-transform shadow-xl">
                  <Mail className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-black text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-2xl mb-2">Email Us</h4>
                <p className="text-gray-600 font-semibold">info@womentravel.com</p>
                <p className="text-gray-600 font-semibold">tours@womentravel.com</p>
              </div>
              <div className="bg-white rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-cyan-300 transition group transform hover:scale-110 hover:-rotate-2 duration-300 cursor-pointer">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 group-hover:scale-110 transition-transform shadow-xl">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-black text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-2xl mb-2">Visit Us</h4>
                <p className="text-gray-600 font-semibold">Mumbai, Maharashtra</p>
                <p className="text-gray-600 font-semibold">India</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200">
              <h3 className="text-4xl font-black mb-6 text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">Send Us a Message ✨</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl border-3 border-pink-200 focus:border-purple-400 focus:outline-none transition bg-gradient-to-br from-white to-pink-50 font-semibold" />
                  <input type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-2xl border-3 border-pink-200 focus:border-purple-400 focus:outline-none transition bg-gradient-to-br from-white to-pink-50 font-semibold" />
                </div>
                <input type="tel" placeholder="Phone Number" className="w-full px-6 py-4 rounded-2xl border-3 border-pink-200 focus:border-purple-400 focus:outline-none transition bg-gradient-to-br from-white to-pink-50 font-semibold" />
                <textarea placeholder="Tell us about your dream vacation..." rows="5" className="w-full px-6 py-4 rounded-2xl border-3 border-pink-200 focus:border-purple-400 focus:outline-none transition resize-none bg-gradient-to-br from-white to-pink-50 font-semibold"></textarea>
                <button type="submit" className="w-full py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-purple-400 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <Sparkles className="w-6 h-6 animate-spin-slow" />
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="flex justify-center gap-6 mt-12">
              <a href="#" className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group shadow-xl hover:shadow-2xl">
                <Facebook className="w-8 h-8 text-white group-hover:scale-125 transition-transform" />
              </a>
              <a href="#" className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group shadow-xl hover:shadow-2xl">
                <Instagram className="w-8 h-8 text-white group-hover:scale-125 transition-transform" />
              </a>
              <a href="#" className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 group shadow-xl hover:shadow-2xl">
                <Twitter className="w-8 h-8 text-white group-hover:scale-125 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-white rounded-full blur-3xl animate-blob"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <span className="text-2xl font-black">WomenTravel</span>
              </div>
              <p className="text-white/90 font-semibold">Safe, memorable journeys crafted by women for women. ✨</p>
            </div>
            <div>
              <h5 className="font-black text-xl mb-4">Quick Links</h5>
              <ul className="space-y-2 text-white/80 font-semibold">
                <li><a href="#home" className="hover:text-white transition hover:translate-x-2 inline-block">Home</a></li>
                <li><a href="#tours" className="hover:text-white transition hover:translate-x-2 inline-block">Tours</a></li>
                <li><a href="#about" className="hover:text-white transition hover:translate-x-2 inline-block">About</a></li>
                <li><a href="#contact" className="hover:text-white transition hover:translate-x-2 inline-block">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-xl mb-4">Popular Tours</h5>
              <ul className="space-y-2 text-white/80 font-semibold">
                <li><a href="#" className="hover:text-white transition hover:translate-x-2 inline-block">Himalayan Treks</a></li>
                <li><a href="#" className="hover:text-white transition hover:translate-x-2 inline-block">Pilgrimage Tours</a></li>
                <li><a href="#" className="hover:text-white transition hover:translate-x-2 inline-block">Wildlife Safaris</a></li>
                <li><a href="#" className="hover:text-white transition hover:translate-x-2 inline-block">Cultural Heritage</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-xl mb-4">Newsletter ✉️</h5>
              <p className="text-white/80 mb-4 font-semibold">Subscribe for travel tips & offers</p>
              <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border-2 border-white/30 focus:outline-none focus:border-white font-semibold" />
              <button className="w-full mt-3 px-4 py-3 bg-white text-purple-600 rounded-xl font-black hover:shadow-2xl transition transform hover:scale-105">Subscribe 🚀</button>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/90 font-semibold">&copy; 2026 WomenTravel Tours. All rights reserved. Made with 💝</p>
            <p className="text-white/80 mt-2 font-semibold">✨ NIDHI Registered | IATA Certified | Ministry of Tourism & Maharashtra Tourism ✨</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 10px) scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-particle {
          0%, 100% { 
            transform: translate(0, 0);
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          50% { 
            transform: translate(100px, -100px);
          }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animate-bounceIn {
          animation: bounceIn 1s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-particle {
          animation: float-particle 10s ease-in-out infinite;
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default TourismWebsite;
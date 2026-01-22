import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Users, Award, Globe, Heart, Shield, Compass, Mountain, Camera, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Star, Plane, Ship, Clock, CheckCircle, Sparkles, Wind, Sun } from 'lucide-react';

const TourismWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const content = {
    hero: { title: "Explore the World in Full Color", subtitle: "Where Every Journey Becomes a Beautiful Story" },
    tours: [
      { id: 1, name: "Eco Tours", description: "Sustainable travel in pristine nature", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80", duration: "5-7 Days", price: "₹15,000", gradient: "from-emerald-400 via-teal-400 to-cyan-400" },
      { id: 2, name: "Pilgrimage Tours", description: "Spiritual journeys to sacred places", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80", duration: "7-10 Days", price: "₹20,000", gradient: "from-orange-400 via-amber-400 to-yellow-400" },
      { id: 3, name: "Jungle Safaris", description: "Wildlife adventures and exploration", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80", duration: "3-5 Days", price: "₹18,000", gradient: "from-lime-400 via-green-400 to-emerald-400" },
      { id: 4, name: "Himalayan Treks", description: "Mountain expeditions with experts", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", duration: "8-12 Days", price: "₹25,000", gradient: "from-blue-400 via-indigo-400 to-purple-400" },
      { id: 5, name: "Cultural Heritage", description: "Explore India's historical legacy", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80", duration: "6-8 Days", price: "₹22,000", gradient: "from-pink-400 via-rose-400 to-red-400" },
      { id: 6, name: "Off-beat Destinations", description: "Discover hidden gems", image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80", duration: "4-6 Days", price: "₹16,000", gradient: "from-fuchsia-400 via-purple-400 to-pink-400" }
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

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', title: 'Mountain Trekking', color: 'from-pink-400 to-rose-400' },
    { url: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80', title: 'Cultural Heritage', color: 'from-purple-400 to-pink-400' },
    { url: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?w=800&q=80', title: 'Jungle Safari', color: 'from-orange-400 to-pink-400' },
    { url: 'https://images.unsplash.com/photo-1570778711852-c97fac815def?w=800&q=80', title: 'Spiritual Journey', color: 'from-yellow-400 to-orange-400' },
    { url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80', title: 'Beach Retreat', color: 'from-cyan-400 to-blue-400' },
    { url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800&q=80', title: 'Scenic Beauty', color: 'from-emerald-400 to-teal-400' },
  ];

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

  const features = [
    { icon: <Shield className="w-10 h-10 md:w-12 md:h-12" />, title: "100% Safe", desc: "Women-led tour coordination", gradient: "from-pink-400 to-rose-500" },
    { icon: <Award className="w-10 h-10 md:w-12 md:h-12" />, title: "IATA Certified", desc: "Qualified tourism experts", gradient: "from-purple-400 to-pink-500" },
    { icon: <Heart className="w-10 h-10 md:w-12 md:h-12" />, title: "Custom Tours", desc: "Personalized itineraries", gradient: "from-orange-400 to-pink-500" },
    { icon: <Globe className="w-10 h-10 md:w-12 md:h-12" />, title: "Pan India", desc: "India, Nepal, Bhutan", gradient: "from-cyan-400 to-blue-500" }
  ];

  const destinations = [
    { name: "Himalayas", icon: <Mountain className="w-5 h-5 md:w-6 md:h-6" />, gradient: "from-blue-400 to-purple-400" },
    { name: "Kerala", icon: <Ship className="w-5 h-5 md:w-6 md:h-6" />, gradient: "from-teal-400 to-emerald-400" },
    { name: "Rajasthan", icon: <Camera className="w-5 h-5 md:w-6 md:h-6" />, gradient: "from-orange-400 to-pink-400" },
    { name: "Northeast", icon: <Compass className="w-5 h-5 md:w-6 md:h-6" />, gradient: "from-purple-400 to-pink-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
      {/* Simplified Background - Desktop only */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-xl py-3' : 'bg-gradient-to-b from-white/50 to-transparent backdrop-blur-md py-4 md:py-6'}`}>
        <nav className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="p-2 md:p-3 rounded-2xl bg-gradient-to-br from-pink-400 via-purple-400 to-cyan-400 shadow-lg">
              <Compass className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <div>
              <span className="text-lg md:text-2xl font-bold block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">WomenTravel</span>
              <span className="text-xs text-purple-600 font-semibold">✨ NIDHI Certified</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {['Home', 'Tours', 'Gallery', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="font-semibold text-gray-700 hover:text-purple-600 transition-all">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:block px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-full hover:shadow-xl transition text-sm lg:text-base font-semibold">
              Book Now ✨
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-3 rounded-xl bg-gradient-to-br from-pink-400 to-purple-400">
              {isMenuOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl shadow-2xl w-full py-6 mt-2 rounded-b-2xl">
            {['Home', 'Tours', 'Gallery', 'About', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block px-6 py-3 hover:bg-purple-50 transition font-semibold text-gray-700" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
            className="hidden md:block w-full h-full object-cover"
          >
            <source src="https://cdn.coverr.co/videos/coverr-woman-traveling-through-nature-9710/1080p.mp4" type="video/mp4" />
          </video>
          <div className="md:hidden w-full h-full bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80')"}}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/40 via-purple-400/40 to-cyan-400/40"></div>
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
        </div>

        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          <Sparkles className="absolute top-20 left-20 w-8 h-8 text-yellow-300 animate-pulse" />
          <Sparkles className="absolute top-40 right-40 w-6 h-6 text-pink-300 animate-pulse" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-20">
          <div className="inline-block mb-4 md:mb-6">
            <div className="px-4 py-2 md:px-6 md:py-3 bg-white/90 backdrop-blur-md rounded-full shadow-xl border-2 border-pink-300">
              <span className="text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text font-bold text-sm md:text-lg">
                ✨ Women-Led Adventures ✨
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 md:mb-6 leading-tight">
            <span className="text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text drop-shadow-2xl">
              {content.hero.title}
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 mb-6 md:mb-10 font-bold drop-shadow-lg">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-10">
            {destinations.map((dest, idx) => (
              <div key={idx} className={`px-3 py-2 md:px-6 md:py-3 bg-gradient-to-r ${dest.gradient} text-white font-bold rounded-full flex items-center gap-2 shadow-xl text-xs md:text-base`}>
                {dest.icon}
                <span className="hidden sm:inline">{dest.name}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#tours" className="px-8 py-3 md:px-12 md:py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-full font-bold hover:shadow-2xl transition flex items-center justify-center gap-2 text-sm md:text-xl">
              <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
              Explore Tours 
              <ChevronRight />
            </a>
            <a href="#contact" className="px-8 py-3 md:px-12 md:py-5 bg-white text-purple-600 rounded-full font-bold hover:bg-purple-50 transition shadow-2xl border-4 border-purple-300 text-sm md:text-xl">
              Plan My Trip
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <div className="w-8 h-12 border-4 border-pink-400 rounded-full flex justify-center p-2">
              <div className="w-2 h-4 bg-gradient-to-b from-pink-400 to-purple-400 rounded-full animate-scroll"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {content.stats.map((stat, idx) => (
              <div key={idx} className="text-center transform hover:scale-110 transition">
                <div className="mb-3 md:mb-4 flex justify-center">
                  <div className={`w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center shadow-xl`}>
                    {idx === 0 && <Award className="w-8 h-8 md:w-12 md:h-12 text-white" />}
                    {idx === 1 && <Plane className="w-8 h-8 md:w-12 md:h-12 text-white" />}
                    {idx === 2 && <Users className="w-8 h-8 md:w-12 md:h-12 text-white" />}
                    {idx === 3 && <CheckCircle className="w-8 h-8 md:w-12 md:h-12 text-white" />}
                  </div>
                </div>
                <div className="text-3xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-gray-700 font-bold text-xs md:text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Tours Section */}
      <section id="tours" className="py-12 md:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 md:px-6 md:py-2 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-bold text-sm md:text-lg shadow-xl mb-4">
              ✨ Our Premium Collections ✨
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Magical Journeys</h2>
            <p className="text-base md:text-2xl text-gray-700 font-semibold">
              Customized adventures across Pan India, Nepal & Bhutan 🌸
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {content.tours.map((tour) => (
              <div key={tour.id} className="group bg-white rounded-3xl shadow-2xl hover:shadow-pink-300 transition-all overflow-hidden transform hover:-translate-y-2 cursor-pointer">
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img src={tour.image} alt={tour.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${tour.gradient} opacity-40`}></div>
                  <div className="absolute top-4 right-4 bg-white px-3 md:px-5 py-2 rounded-full font-black text-purple-600 shadow-xl text-xs md:text-base">
                    {tour.price}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl md:text-3xl font-black text-white drop-shadow-lg">{tour.name}</h3>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-gray-700 mb-4 text-sm md:text-base font-semibold">{tour.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-purple-600 font-bold text-xs md:text-base">
                      <Clock className="w-4 h-4 md:w-5 md:h-5" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(star => (
                        <Star key={star} className="w-3 h-3 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <button className={`w-full py-3 md:py-4 bg-gradient-to-r ${tour.gradient} text-white rounded-2xl font-black hover:shadow-xl transition flex items-center justify-center gap-2 text-sm md:text-lg`}>
                    Book Now <ChevronRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 md:px-6 md:py-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white rounded-full font-bold text-sm md:text-lg shadow-xl mb-4">
              📸 Travel Moments 📸
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Picture Perfect</h2>
            <p className="text-sm md:text-xl text-gray-600 font-semibold">Captured memories from our incredible journeys ✨</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer">
                <div className="aspect-square overflow-hidden">
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700" />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t ${img.color} opacity-0 group-hover:opacity-80 transition-opacity flex items-end`}>
                  <div className="p-4 md:p-6 w-full">
                    <h3 className="text-white text-base md:text-2xl font-black">{img.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 md:px-6 md:py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold text-sm md:text-lg shadow-xl mb-4">
              💎 Why Choose Us 💎
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mb-4">We Care, We Share</h2>
            <p className="text-base md:text-2xl text-gray-700 font-semibold">Leading with love in women-centric travel experiences</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 md:p-8 hover:shadow-2xl transition transform hover:scale-105">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto shadow-xl`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h4 className="text-xl md:text-2xl font-black mb-3 text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-center">{feature.title}</h4>
                <p className="text-gray-600 text-sm md:text-base text-center font-semibold">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 md:px-6 md:py-2 bg-gradient-to-r from-cyan-400 to-blue-400 text-white rounded-full font-bold text-sm md:text-lg shadow-xl mb-4">
              💬 Happy Stories 💬
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Love from Travelers</h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {content.testimonials.map((test, idx) => (
              <div key={idx} className={`transition-all duration-500 ${idx === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                <div className="bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-2xl p-6 md:p-12 border-4 border-pink-200">
                  <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                    <img src={test.image} alt={test.name} className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover border-4 border-purple-300 shadow-xl" />
                    <div>
                      <h4 className="text-xl md:text-3xl font-black text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">{test.name}</h4>
                      <p className="text-gray-600 font-semibold text-sm md:text-base">{test.location}</p>
                      <div className="flex gap-1 mt-2">
                        {[...Array(test.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 md:w-6 md:h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-base md:text-2xl text-gray-700 font-semibold italic">"{test.text}"</p>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center gap-3 mt-8">
              {content.testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-3 md:h-4 rounded-full transition-all ${idx === activeTestimonial ? 'bg-gradient-to-r from-pink-500 to-purple-500 w-12 md:w-16' : 'bg-pink-200 w-3 md:w-4'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative group order-2 md:order-1">
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80" alt="About Us" className="rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-xl">
                  <Heart className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full font-bold mb-4 md:mb-6 shadow-xl text-sm md:text-base">
                  ✨ NIDHI Certified Company ✨
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 md:mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">20 Years of Excellence</h2>
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6 font-semibold">
                  A NIDHI registered company under the Ministry of Tourism and Maharashtra Tourism, we are a <span className="text-pink-600 font-black">women-led organization</span> that aims to provide safe, secure, and happy vacations for all. 💖
                </p>
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6 font-semibold">
                  Understanding the basic needs of women travelers, our women tour coordinators and tour managers make every journey pleasant and memorable. ✨
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-3 bg-white rounded-2xl p-3 md:p-4 shadow-lg hover:shadow-xl transition">
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-bold text-sm md:text-base"><span className="text-purple-600">IATA Certified</span> professionals with HMI training</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white rounded-2xl p-3 md:p-4 shadow-lg hover:shadow-xl transition">
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-bold text-sm md:text-base"><span className="text-purple-600">500+ Tours</span> successfully conducted across India, Nepal & Bhutan</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white rounded-2xl p-3 md:p-4 shadow-lg hover:shadow-xl transition">
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-bold text-sm md:text-base"><span className="text-purple-600">Custom Itineraries</span> tailored to your preferences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 bg-gradient-to-br from-pink-100 via-purple-100 to-cyan-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-8 md:mb-12">
            <span className="inline-block px-4 py-2 md:px-6 md:py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-bold text-sm md:text-lg shadow-xl mb-4">
              📞 Get In Touch 📞
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 md:mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Let's Plan Together</h2>
            <p className="text-base md:text-2xl text-gray-700 font-bold">Ready for an unforgettable adventure? 🌈</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="bg-white rounded-3xl p-6 md:p-8 text-center hover:shadow-2xl transition transform hover:scale-105">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Phone className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h4 className="font-black text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-xl md:text-2xl mb-2">Call Us</h4>
                <p className="text-gray-600 font-semibold text-sm md:text-base">+91 98765 43210</p>
                <p className="text-gray-600 font-semibold text-sm md:text-base">+91 98765 43211</p>
              </div>
              <div className="bg-white rounded-3xl p-6 md:p-8 text-center hover:shadow-2xl transition transform hover:scale-105">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Mail className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h4 className="font-black text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-xl md:text-2xl mb-2">Email Us</h4>
                <p className="text-gray-600 font-semibold text-sm md:text-base">info@womentravel.com</p>
                <p className="text-gray-600 font-semibold text-sm md:text-base">tours@womentravel.com</p>
              </div>
              <div className="bg-white rounded-3xl p-6 md:p-8 text-center hover:shadow-2xl transition transform hover:scale-105">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <MapPin className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h4 className="font-black text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-xl md:text-2xl mb-2">Visit Us</h4>
                <p className="text-gray-600 font-semibold text-sm md:text-base">Mumbai, Maharashtra</p>
                <p className="text-gray-600 font-semibold text-sm md:text-base">India</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border-4 border-pink-200">
              <h3 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 text-transparent bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text">Send Us a Message ✨</h3>
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 md:px-6 md:py-4 rounded-2xl border-2 border-pink-200 focus:border-purple-400 focus:outline-none transition bg-gradient-to-br from-white to-pink-50 font-semibold text-sm md:text-base" />
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-3 md:px-6 md:py-4 rounded-2xl border-2 border-pink-200 focus:border-purple-400 focus:outline-none transition bg-gradient-to-br from-white to-pink-50 font-semibold text-sm md:text-base" />
                </div>
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 md:px-6 md:py-4 rounded-2xl border-2 border-pink-200 focus:border-purple-400 focus:outline-none transition bg-gradient-to-br from-white to-pink-50 font-semibold text-sm md:text-base" />
                <textarea placeholder="Tell us about your dream vacation..." rows="4" className="w-full px-4 py-3 md:px-6 md:py-4 rounded-2xl border-2 border-pink-200 focus:border-purple-400 focus:outline-none transition resize-none bg-gradient-to-br from-white to-pink-50 font-semibold text-sm md:text-base"></textarea>
                <button type="submit" className="w-full py-4 md:py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white rounded-2xl font-black text-base md:text-xl hover:shadow-2xl transition flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                  Submit Inquiry
                </button>
              </form>
            </div>

            <div className="flex justify-center gap-4 md:gap-6 mt-8 md:mt-12">
              <a href="#" className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center hover:scale-110 transition shadow-xl">
                <Facebook className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </a>
              <a href="#" className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-400 to-rose-600 rounded-2xl flex items-center justify-center hover:scale-110 transition shadow-xl">
                <Instagram className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </a>
              <a href="#" className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center hover:scale-110 transition shadow-xl">
                <Twitter className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Compass className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <span className="text-xl md:text-2xl font-black">WomenTravel</span>
              </div>
              <p className="text-white/90 font-semibold text-sm md:text-base">Safe, memorable journeys crafted by women for women. ✨</p>
            </div>
            <div>
              <h5 className="font-black text-lg md:text-xl mb-3 md:mb-4">Quick Links</h5>
              <ul className="space-y-2 text-white/80 font-semibold text-sm md:text-base">
                <li><a href="#home" className="hover:text-white transition">Home</a></li>
                <li><a href="#tours" className="hover:text-white transition">Tours</a></li>
                <li><a href="#about" className="hover:text-white transition">About</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-lg md:text-xl mb-3 md:mb-4">Popular Tours</h5>
              <ul className="space-y-2 text-white/80 font-semibold text-sm md:text-base">
                <li><a href="#" className="hover:text-white transition">Himalayan Treks</a></li>
                <li><a href="#" className="hover:text-white transition">Pilgrimage Tours</a></li>
                <li><a href="#" className="hover:text-white transition">Wildlife Safaris</a></li>
                <li><a href="#" className="hover:text-white transition">Cultural Heritage</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black text-lg md:text-xl mb-3 md:mb-4">Newsletter ✉️</h5>
              <p className="text-white/80 mb-3 md:mb-4 font-semibold text-sm md:text-base">Subscribe for travel tips & offers</p>
              <input type="email" placeholder="Your email" className="w-full px-3 py-2 md:px-4 md:py-3 rounded-xl bg-white/20 text-white placeholder-white/60 border-2 border-white/30 focus:outline-none focus:border-white font-semibold text-sm md:text-base mb-2 md:mb-3" />
              <button className="w-full px-3 py-2 md:px-4 md:py-3 bg-white text-purple-600 rounded-xl font-black hover:shadow-xl transition text-sm md:text-base">Subscribe 🚀</button>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 md:pt-8 text-center">
            <p className="text-white/90 font-semibold text-sm md:text-base">&copy; 2026 WomenTravel Tours. All rights reserved. Made with 💖</p>
            <p className="text-white/80 mt-2 font-semibold text-xs md:text-base">✨ NIDHI Registered | IATA Certified | Ministry of Tourism & Maharashtra Tourism ✨</p>
          </div>
        </div>
      </footer>

      <style>{`
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
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        
        /* Reduce animations on mobile for better performance */
        @media (max-width: 768px) {
          * {
            animation-duration: 0.3s !important;
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Optimize for reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TourismWebsite;
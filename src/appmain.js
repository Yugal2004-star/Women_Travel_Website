import React, { useState, useEffect } from 'react';
import { Menu, X, Users, Award, Globe, Shield, Phone, Mail, MapPin, Star, Package, Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const IndiaTourWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const packages = [
    {
      id: 1,
      name: "Golden Triangle Tour",
      duration: "7 Days / 6 Nights",
      price: "₹25,000",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop",
      destinations: ["Delhi", "Agra", "Jaipur"],
      highlights: ["Taj Mahal Visit", "Amber Fort", "Red Fort", "Hawa Mahal", "Jama Masjid", "Qutub Minar"],
      included: ["Accommodation", "Breakfast", "Transport", "Guide"]
    },
    {
      id: 2,
      name: "Kerala Backwaters",
      duration: "5 Days / 4 Nights",
      price: "₹30,000",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
      destinations: ["Cochin", "Alleppey", "Munnar"],
      highlights: ["Houseboat Stay", "Tea Gardens", "Kathakali Dance", "Ayurvedic Spa", "Spice Plantations", "Beach Views"],
      included: ["Houseboat", "All Meals", "Transport", "Activities"]
    },
    {
      id: 3,
      name: "Rajasthan Heritage",
      duration: "10 Days / 9 Nights",
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop",
      destinations: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer"],
      highlights: ["Desert Safari", "Palace Tours", "Lake Pichola", "Camel Ride", "Fort Visits", "Cultural Shows"],
      included: ["Hotels", "All Meals", "Transport", "Guide", "Entry Fees"]
    },
    {
      id: 4,
      name: "Himalayan Adventure",
      duration: "8 Days / 7 Nights",
      price: "₹35,000",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
      destinations: ["Shimla", "Manali", "Dharamshala"],
      highlights: ["Mountain Trekking", "River Rafting", "Monastery Visit", "Snow Activities", "Valley Views", "Local Markets"],
      included: ["Hotels", "Breakfast & Dinner", "Transport", "Adventure Activities"]
    },
    {
      id: 5,
      name: "Goa Beach Retreat",
      duration: "4 Days / 3 Nights",
      price: "₹18,000",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop",
      destinations: ["North Goa", "South Goa"],
      highlights: ["Beach Hopping", "Water Sports", "Sunset Cruise", "Portuguese Heritage", "Beach Parties", "Seafood Delights"],
      included: ["Beach Resort", "Breakfast", "Airport Transfer", "Cruise"]
    },
    {
      id: 6,
      name: "Spiritual Varanasi",
      duration: "3 Days / 2 Nights",
      price: "₹15,000",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop",
      destinations: ["Varanasi", "Sarnath"],
      highlights: ["Ganga Aarti", "Boat Ride", "Temple Tours", "Buddhist Sites", "Silk Weaving", "Evening Prayer"],
      included: ["Hotel", "All Meals", "Boat Ride", "Guide", "Aarti Access"]
    }
  ];

  const destinations = [
    {
      id: 1,
      name: "Pan India Tours",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&h=600&fit=crop",
      description: "Explore the diverse cultural heritage and natural beauty of India from Kashmir to Kanyakumari"
    },
    {
      id: 2,
      name: "Nepal Expeditions",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&h=600&fit=crop",
      description: "Experience the majestic Himalayas and rich Nepalese culture with ancient temples and monasteries"
    },
    {
      id: 3,
      name: "Bhutan Journeys",
      image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=900&h=600&fit=crop",
      description: "Discover the land of happiness with its pristine monasteries and breathtaking mountain landscapes"
    }
  ];

  const gallery = [
    { id: 1, image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop", title: "Taj Mahal" },
    { id: 2, image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop", title: "Varanasi Ghats" },
    { id: 3, image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop", title: "Jaipur Palace" },
    { id: 4, image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop", title: "Kerala Backwaters" },
    { id: 5, image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&h=600&fit=crop", title: "Goa Beaches" },
    { id: 6, image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&h=600&fit=crop", title: "Rajasthan Desert" }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Mr. & Mrs. Sharma",
      location: "Mumbai",
      text: "Excellent service and very professional. The tour was well-organized and our coordinator was very helpful throughout the journey. We felt safe and comfortable at all times.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      id: 2,
      name: "Mrs. Anjali Desai",
      location: "Pune",
      text: "As a senior citizen traveling alone, I felt completely safe. The arrangements were perfect and staff very courteous. Highly recommended for solo women travelers!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5"
    },
    {
      id: 3,
      name: "Rajesh & Family",
      location: "Delhi",
      text: "Wonderful experience! Everything was taken care of from start to finish. The customized itinerary was perfect for our family. Will definitely book again!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=8"
    }
  ];

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "5000+", label: "Happy Travelers" },
    { number: "50+", label: "Destinations" },
    { number: "100%", label: "Safety First" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95'}`}>
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-gray-700" />
              <div>
                <span className="text-lg sm:text-2xl font-bold text-gray-800">India Tour Website</span>
                <p className="text-xs text-gray-600">Ministry of Tourism Registered</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Packages', 'Destinations', 'Gallery', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-gray-800"
            >
              {isMenuOpen ? <X className="h-6 w-6 sm:h-7 sm:w-7" /> : <Menu className="h-6 w-6 sm:h-7 sm:w-7" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {['Home', 'About', 'Packages', 'Destinations', 'Gallery', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1600&h=900&fit=crop"
            alt="India Tourism"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-full">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-8 leading-tight">
            Experience the Beauty of India
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-200 mb-8 sm:mb-16 font-light">
            Safe, Comfortable & Memorable Tours Since 20+ Years
          </p>
          <a href="#packages" className="inline-block px-8 sm:px-16 py-4 sm:py-6 bg-white text-gray-800 text-base sm:text-xl rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
            Explore Our Packages
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="w-full">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium px-4">
              NIDHI Registered Company - Ministry of Tourism & Maharashtra Tourism
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start mb-8 sm:mb-12 md:mb-16">
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                We are a women-led organization that aims to provide safe, secure, and happy vacations for all. The company is committed to providing comfortable travel and tours, especially for women.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Understanding the basic needs of women travelers, our women tour coordinators and tour managers for groups make their journeys and visits pleasant and memorable.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Professionally qualified in the field of tourism with IATA certification and training from Hotel Management Institutes (HMI), the promoters have over 20 years of experience in the field of travel and tourism.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-lg border-2 border-gray-200 text-center hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2 sm:mb-3">{stat.number}</h3>
                  <p className="text-gray-600 font-semibold text-sm sm:text-base md:text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      
      {/* Tour Packages Section */}
      <section id="packages" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="w-full">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Tour Packages</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl px-4">Choose from our carefully curated tour packages</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-gray-50 rounded-xl shadow-xl overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gray-800 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg font-bold text-lg sm:text-xl shadow-lg">
                    {pkg.price}
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{pkg.name}</h3>
                  <div className="flex items-center text-gray-600 mb-3 sm:mb-4">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                    <span className="font-semibold text-sm sm:text-base">{pkg.duration}</span>
                  </div>
                  <div className="mb-3 sm:mb-4">
                    <h4 className="font-bold text-gray-700 mb-2 flex items-center text-sm sm:text-base">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Destinations:
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base">{pkg.destinations.join(', ')}</p>
                  </div>
                  <div className="mb-4 sm:mb-5">
                    <h4 className="font-bold text-gray-700 mb-2 text-sm sm:text-base">Highlights:</h4>
                    <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                      {pkg.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 sm:mr-1.5 mt-0.5 text-gray-600 flex-shrink-0" />
                          <span className="text-gray-600 text-xs sm:text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="#contact" className="block w-full text-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-800 text-white text-sm sm:text-base rounded-lg font-semibold hover:bg-gray-700 transition-all transform hover:scale-105">
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section id="destinations" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="w-full">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl px-4">Explore breathtaking locations across South Asia</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all"
              >
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6 sm:p-8 md:p-12">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">{dest.name}</h3>
                  <p className="text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed text-base sm:text-lg md:text-xl">{dest.description}</p>
                  <a href="#contact" className="inline-flex items-center text-gray-800 font-bold hover:text-gray-600 text-base sm:text-lg md:text-xl">
                    <span>Learn More</span>
                    <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="w-full">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Photo Gallery</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl px-4">Memories captured from our wonderful tours</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all border-2 border-gray-200"
              >
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <p className="text-white font-bold text-xl sm:text-2xl md:text-3xl p-4 sm:p-6 md:p-8">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="w-full">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-4 sm:mb-6"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-10">
            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-xl border-2 border-gray-200 text-center hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gray-700" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Safety First</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">Women-led organization ensuring safe and secure travel for all tourists</p>
            </div>

            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-xl border-2 border-gray-200 text-center hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Award className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gray-700" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">20+ Years Experience</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">IATA certified professionals with extensive tourism expertise</p>
            </div>

            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-xl border-2 border-gray-200 text-center hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Package className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gray-700" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Customized Tours</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">Tailored packages designed specifically for your preferences</p>
            </div>

            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-xl border-2 border-gray-200 text-center hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-gray-700" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">5000+ Happy Travelers</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">Join thousands of satisfied customers who trust us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-gray-50">
        <div className="w-full">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl px-4">Real experiences from our satisfied travelers</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {testimonials.map((test) => (
              <div
                key={test.id}
                className="bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-all"
              >
                <div className="flex items-center mb-4 sm:mb-6 md:mb-8">
                  <img src={test.image} alt={test.name} className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full mr-3 sm:mr-4 border-4 border-gray-200" />
                  <div>
                    <div className="flex mb-1 sm:mb-2">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-700 fill-current" />
                      ))}
                    </div>
                    <h4 className="font-bold text-gray-800 text-base sm:text-lg md:text-xl">{test.name}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{test.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                  "{test.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="w-full">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-gray-800 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl px-4">Get in touch with us to plan your perfect tour</p>
          </div>
          
          <div className="w-full">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-12 md:mb-16">
              <div className="flex flex-col items-center p-6 sm:p-8 md:p-12 bg-gray-50 rounded-xl shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-800 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Phone className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3 text-gray-800">Call Us</h3>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl font-semibold">+91 98765 43210</p>
              </div>
              <div className="flex flex-col items-center p-6 sm:p-8 md:p-12 bg-gray-50 rounded-xl shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-800 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <Mail className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3 text-gray-800">Email Us</h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg font-semibold break-all">info@indiatour.com</p>
              </div>
              <div className="flex flex-col items-center p-6 sm:p-8 md:p-12 bg-gray-50 rounded-xl shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-shadow sm:col-span-2 md:col-span-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-800 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <MapPin className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                </div>
                <h3 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3 text-gray-800">Visit Us</h3>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl font-semibold">Mumbai, India</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl shadow-xl border-2 border-gray-200 p-6 sm:p-8 md:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 md:mb-10 text-center">Send Us a Message</h3>
              <form className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <div>
                  <label className="block text-left text-base sm:text-lg font-semibold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-lg text-base sm:text-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-left text-base sm:text-lg font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter your phone"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-lg text-base sm:text-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-left text-base sm:text-lg font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-lg text-base sm:text-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-left text-base sm:text-lg font-semibold text-gray-700 mb-2">Preferred Package</label>
                  <select className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-lg text-base sm:text-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent">
                    <option>Select a package</option>
                    <option>Golden Triangle Tour</option>
                    <option>Kerala Backwaters</option>
                    <option>Rajasthan Heritage</option>
                    <option>Himalayan Adventure</option>
                    <option>Goa Beach Retreat</option>
                    <option>Spiritual Varanasi</option>
                    <option>Custom Package</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-left text-base sm:text-lg font-semibold text-gray-700 mb-2">Your Message</label>
                  <textarea
                    rows="5"
                    placeholder="Tell us about your travel plans..."
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-300 rounded-lg text-base sm:text-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  ></textarea>
                </div>
                <div className="md:col-span-2 text-center">
                  <button
                    type="submit"
                    className="px-10 sm:px-16 py-3 sm:py-5 bg-gray-800 text-white text-base sm:text-xl rounded-lg font-semibold hover:bg-gray-700 transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-12">
        <div className="w-full">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mb-6 sm:mb-8 md:mb-12">
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <Globe className="h-10 w-10 sm:h-12 sm:w-12 text-gray-300" />
                <div>
                  <span className="text-2xl sm:text-3xl font-bold">India Tour Website</span>
                  <p className="text-xs sm:text-sm text-gray-400">NIDHI Registered Company</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                Ministry of Tourism & Maharashtra Tourism registered travel company providing safe, comfortable, and memorable tours across India, Nepal, and Bhutan.
              </p>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg">About Us</a></li>
                <li><a href="#packages" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg">Tour Packages</a></li>
                <li><a href="#destinations" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg">Destinations</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base md:text-lg">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Info</h3>
              <ul className="space-y-3 sm:space-y-4 text-gray-400">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg">+91 98765 43210</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg break-all">info@indiatour.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base md:text-lg">Mumbai, Maharashtra, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-xs sm:text-sm md:text-lg">
              © 2024 India Tour Website. All rights reserved. | Registered with Ministry of Tourism, Government of India
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all z-40 float"
        title="Chat on WhatsApp"
      >
        <svg className="w-7 h-7 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default IndiaTourWebsite;
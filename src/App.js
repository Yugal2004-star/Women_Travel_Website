import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Users, Award, Globe, Heart, Shield, Compass, Mountain, Camera, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Star, Plane, Ship, Clock, CheckCircle, Calendar, MapPinIcon } from 'lucide-react';

const TourismWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeRegion, setActiveRegion] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    '/images/gallery/1.jpg', '/images/gallery/2.jpg', '/images/gallery/2.jpg',
    '/images/gallery/4.jpg', '/images/gallery/5.jpg', '/images/gallery/6.jpg',
    '/images/gallery/7.jpg', '/images/gallery/8.jpg', '/images/gallery/9.jpg',
    '/images/gallery/10.jpg', '/images/gallery/11.jpg', '/images/gallery/12.jpg',
    '/images/gallery/13.jpg', '/images/gallery/14.jpg', '/images/gallery/15.jpg',
    '/images/gallery/16.jpg', '/images/gallery/17.jpg', '/images/gallery/18.jpg',
    '/images/gallery/19.jpg', '/images/gallery/20.jpg', '/images/gallery/21.jpg',
    '/images/gallery/22.jpg', '/images/gallery/23.jpg'
  ];

  const slidesData = [];
  for (let i = 0; i < galleryImages.length; i += 6) {
    slidesData.push(galleryImages.slice(i, i + 6));
  }

  const regions = ['All', 'Chardham', 'Gujarat', 'Himachal Pradesh', 'Kashmir & Ladakh', 'Madhya Pradesh', 'Maharashtra', 'Northeast', 'Odisha & Chhattisgarh', 'Rajasthan', 'South India', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal & Sikkim'];

  const content = {
    hero: { title: "Discover Incredible India", subtitle: "Your Gateway to Unforgettable Journeys" },
    stats: [
      { value: "20+", label: "Years Experience" },
      { value: "500+", label: "Tours Conducted" },
      { value: "5000+", label: "Happy Travelers" },
      { value: "100%", label: "Safety Record" }
    ],
    testimonials: [
      { name: "Priya Sharma", location: "Mumbai", rating: 5, text: "Amazing experience! The guides made us feel so safe and comfortable. Highly recommended!", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80" },
      { name: "Anjali Reddy", location: "Bangalore", rating: 5, text: "Best tour operator. Every detail was perfectly planned and executed frryccdyuxgkffiyfyjfyuikgyigiygfyjygyjgy.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80" },
      { name: "Meera Patel", location: "Delhi", rating: 5, text: "Professional, caring, and knowledgeable. Made our journey truly memorable!", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80" }
    ],
    tours: {
      'Chardham': [
        { 
          id: 1,
          name: "Kedarnath - Badrinath", 
          description: "Embark on a divine journey to two of the most sacred Char Dham temples nestled in the Himalayas",
          duration: "7D/6N", 
          price: "₹18,500",
          startFrom: "Haridwar/Rishikesh", 
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
          category: "Chardham",
          highlights: ["Kedarnath Temple Trek", "Badrinath Darshan", "Himalayan Views", "River Rafting in Rishikesh"],
          destinations: "Haridwar → Kedarnath → Badrinath → Rishikesh"
        },
        { 
          id: 2,
          name: "Yamunotri - Gangotri - Kedarnath - Badrinath", 
          description: "Complete Char Dham Yatra covering all four sacred shrines with experienced guides and comfortable stay",
          duration: "11D/10N", 
          price: "₹28,500",
          startFrom: "Haridwar/Rishikesh", 
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
          category: "Chardham",
          highlights: ["All 4 Dhams", "Scenic Mountain Routes", "Spiritual Experience", "Expert Guides"],
          destinations: "Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath"
        },
        { 
          id: 3,
          name: "Yamunotri - Gangotri - Kedarnath - Badrinath", 
          description: "Extended Char Dham tour starting from Delhi with additional sightseeing and comfortable travel",
          duration: "13D/12N", 
          price: "₹32,000",
          startFrom: "New Delhi", 
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
          category: "Chardham",
          highlights: ["Delhi Pickup", "All 4 Temples", "Comfortable Hotels", "Meals Included"],
          destinations: "Delhi → Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath → Delhi"
        },
        { 
          id: 4,
          name: "Kedarnath - Badrinath (Helicopter)", 
          description: "Luxury helicopter darshan of Kedarnath and Badrinath temples for a quick spiritual journey",
          duration: "3D/2N", 
          price: "₹1,25,000",
          startFrom: "Dehradun", 
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
          category: "Chardham",
          highlights: ["Helicopter Service", "VIP Darshan", "Luxury Stay", "Time Saving"],
          destinations: "Dehradun → Kedarnath (Heli) → Badrinath (Heli) → Dehradun"
        },
        { 
          id: 5,
          name: "Yamunotri - Gangotri - Kedarnath - Badrinath (Heli)", 
          description: "Ultimate luxury Char Dham by helicopter - complete spiritual journey in minimum time",
          duration: "2D/1N", 
          price: "₹1,85,000",
          startFrom: "Dehradun", 
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
          category: "Chardham",
          highlights: ["Full Helicopter Tour", "All 4 Dhams in 2 Days", "Premium Service", "VIP Treatment"],
          destinations: "Dehradun → All Char Dhams by Helicopter → Dehradun"
        },
        { 
          id: 6,
          name: "Rishikesh - Badrinath - Auli", 
          description: "Combine spiritual pilgrimage with adventure at Auli ski resort and beautiful valleys",
          duration: "6D/5N", 
          price: "₹22,000",
          startFrom: "Rishikesh", 
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
          category: "Chardham",
          highlights: ["Badrinath Temple", "Auli Ropeway", "Snow Activities", "Mountain Views"],
          destinations: "Rishikesh → Joshimath → Badrinath → Auli → Rishikesh"
        },
        { 
          id: 7,
          name: "Rishikesh - Kedarnath", 
          description: "Focused pilgrimage to Lord Shiva's abode with trekking and yoga in Rishikesh",
          duration: "6D/5N", 
          price: "₹16,500",
          startFrom: "Rishikesh", 
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
          category: "Chardham",
          highlights: ["Kedarnath Trek", "Yoga in Rishikesh", "Ganga Aarti", "Temple Darshan"],
          destinations: "Rishikesh → Gaurikund → Kedarnath → Rishikesh"
        },
        { 
          id: 8,
          name: "Valley of Flowers - Hemkund Saheb - Badrinath - Auli", 
          description: "UNESCO heritage Valley of Flowers trek combined with sacred Sikh shrine and Hindu temple",
          duration: "8D/7N", 
          price: "₹25,500",
          startFrom: "Rishikesh", 
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",
          category: "Chardham",
          highlights: ["Valley of Flowers Trek", "Hemkund Sahib", "Badrinath Temple", "Alpine Meadows"],
          destinations: "Rishikesh → Govindghat → Valley of Flowers → Hemkund → Badrinath → Auli"
        }
      ],


      'Gujarat': [
        { 
          id: 9, 
          name: "Ahmedabad - Modera - Rann of Kutch", 
          description: "Explore Gujarat's vibrant culture, white desert, and ancient sun temple", 
          duration: "3D/2N", 
          price: "₹12,500", 
          startFrom: "Ahmedabad", 
          image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&q=80", 
          category: "Gujarat", 
          highlights: ["Rann of Kutch", "Modera Sun Temple", "Cultural Shows", "Local Cuisine"], 
          destinations: "Ahmedabad → Modera → Rann of Kutch" 
        },
        { 
          id: 10, 
          name: "Dwarka - Porbandar - Gir Lion Safari", 
          description: "Divine journey to Krishna's kingdom combined with thrilling wildlife safari", 
          duration: "5D/4N", 
          price: "₹18,000", 
          startFrom: "Rajkot", 
          image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&q=80", 
          category: "Gujarat", 
          highlights: ["Dwarka Temple", "Asiatic Lions", "Beach Visit", "Porbandar Heritage"], 
          destinations: "Rajkot → Dwarka → Porbandar → Gir" 
        }
      ],


      'Himachal Pradesh': [
        { 
          id: 11, 
          name: "Shimla - Manali - Chandigarh",
          description: "Experience the best of hill stations with colonial charm and mountain adventures", 
          duration: "7D/6N", 
          price: "₹22,000", 
          startFrom: "New Delhi", 
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", 
          category: "Himachal Pradesh", 
          highlights: ["Mall Road Shimla", "Solang Valley", "Rohtang Pass", "Adventure Sports"], 
          destinations: "Delhi → Shimla → Manali → Chandigarh" 
        }
      ],
      'Kashmir & Ladakh': [
        { id: 12, name: "Srinagar - Gulmarg - Pahalgam - Sonamarg", description: "Discover paradise on earth with Kashmir's pristine valleys and meadows", duration: "8D/7N", price: "₹28,000", startFrom: "Srinagar", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", category: "Kashmir & Ladakh", highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Betaab Valley", "Snow Activities"], destinations: "Srinagar → Gulmarg → Pahalgam → Sonamarg" }
      ],
      'Rajasthan': [
        { id: 13, name: "Jaipur - Pushkar - Ajmer - Jaisalmer - Jodhpur", description: "Royal Rajasthan tour covering majestic forts, palaces and golden sand dunes", duration: "7D/6N", price: "₹24,000", startFrom: "Jaipur", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&q=80", category: "Rajasthan", highlights: ["Amber Fort", "Camel Safari", "Desert Camp", "Blue City"], destinations: "Jaipur → Pushkar → Jaisalmer → Jodhpur" }
      ],
      'South India': [
        { id: 14, name: "Cochin - Munnar - Thekkady - Alleppey", description: "God's Own Country - Kerala backwaters, tea gardens and wildlife sanctuary", duration: "6D/5N", price: "₹26,000", startFrom: "Cochin", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&q=80", category: "South India", highlights: ["Houseboat Stay", "Tea Plantations", "Periyar Wildlife", "Kathakali Dance"], destinations: "Cochin → Munnar → Thekkady → Alleppey" }
      ],
      'Uttar Pradesh': [
        { id: 15, name: "Agra - Fatehpur Sikri - Mathura", description: "Mughal heritage trail featuring the iconic Taj Mahal and ancient temples", duration: "3D/2N", price: "₹14,500", startFrom: "Agra", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&q=80", category: "Uttar Pradesh", highlights: ["Taj Mahal", "Agra Fort", "Krishna Janmabhoomi", "Fatehpur Sikri"], destinations: "Agra → Fatehpur Sikri → Mathura" }
      ],
      'Uttarakhand': [
        { id: 16, name: "Nainital - Kausani - Corbett N. Park", description: "Lake district beauty combined with exciting wildlife safari in Jim Corbett", duration: "6D/5N", price: "₹19,500", startFrom: "Kathgodam/Rampur", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80", category: "Uttarakhand", highlights: ["Naini Lake", "Tiger Safari", "Himalayan Sunrise", "Nature Walks"], destinations: "Kathgodam → Nainital → Kausani → Corbett" }
      ],
      'West Bengal & Sikkim': [
        { id: 17, name: "Darjeeling - Gangtok", description: "Toy train ride, tea gardens and monasteries in the lap of Kanchenjunga", duration: "6D/5N", price: "₹21,000", startFrom: "Siliguri", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80", category: "West Bengal & Sikkim", highlights: ["Toy Train Ride", "Tiger Hill Sunrise", "Tsomgo Lake", "Buddhist Monasteries"], destinations: "Siliguri → Darjeeling → Gangtok" }
      ],
      'Madhya Pradesh': [
        { id: 18, name: "Khajuraho - Orchha", description: "Explore UNESCO world heritage temples with stunning erotic sculptures and medieval forts", duration: "5D/4N", price: "₹16,500", startFrom: "Jhansi", image: "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=600&q=80", category: "Madhya Pradesh", highlights: ["Khajuraho Temples", "Orchha Fort", "Light & Sound Show", "Heritage Walk"], destinations: "Jhansi → Khajuraho → Orchha" }
      ],
      'Maharashtra': [
        { id: 19, name: "Ellora - Ajanta - Grishneshwar - Aurangabad - Shirdi", description: "Ancient rock-cut caves, UNESCO sites and sacred Sai Baba temple", duration: "5D/4N", price: "₹17,500", startFrom: "Aurangabad", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80", category: "Maharashtra", highlights: ["Ellora Caves", "Ajanta Paintings", "Shirdi Sai Baba", "Grishneshwar Jyotirlinga"], destinations: "Aurangabad → Ellora → Ajanta → Shirdi" }
      ],
      'Odisha & Chhattisgarh': [
        { id: 20, name: "Bhubaneswar - Konark - Puri", description: "Golden triangle of Odisha - temples, beach and Jagannath darshan", duration: "6D/5N", price: "₹15,500", startFrom: "Bhubaneswar", image: "https://images.unsplash.com/photo-1605084924035-4fd42fa2e1e0?w=600&q=80", category: "Odisha & Chhattisgarh", highlights: ["Jagannath Temple", "Konark Sun Temple", "Beach Festival", "Temple Architecture"], destinations: "Bhubaneswar → Konark → Puri" }
      ],
      'Northeast': [
        { id: 21, name: "Assam - Meghalaya", description: "Living root bridges, tea gardens and one-horned rhino safari", duration: "6D/5N", price: "₹23,000", startFrom: "Guwahati", image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&q=80", category: "Northeast", highlights: ["Kaziranga Safari", "Living Root Bridges", "Cherrapunji Waterfalls", "Tea Garden Tours"], destinations: "Guwahati → Kaziranga → Shillong → Cherrapunji" }
      ]
    }
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
  }, [content.testimonials.length]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slidesData.length]);

  const features = [
    { icon: <Shield className="w-8 h-8 md:w-12 md:h-12" />, title: "100% Safe", desc: "Secure & reliable travel" },
    { icon: <Award className="w-8 h-8 md:w-12 md:h-12" />, title: "IATA Certified", desc: "Qualified tourism experts" },
    { icon: <Heart className="w-8 h-8 md:w-12 md:h-12" />, title: "Custom Tours", desc: "Personalized itineraries" },
    { icon: <Globe className="w-8 h-8 md:w-12 md:h-12" />, title: "Pan India", desc: "India, Nepal, Bhutan" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white overflow-x-hidden">
      {/* Header */}
<header className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-2 md:py-3' : 'bg-transparent py-4 md:py-6'}`}>        
  <nav className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="p-1 md:p-2 rounded-xl bg-transparent ">
              <img src="/images/logo.jpeg" alt="India Tour Company" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            </div>
            <div>
              <span className={`text-lg md:text-2xl font-bold block ${isScrolled ? 'bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent' : 'text-white drop-shadow-lg'}`}>India Tour Company</span>
              <span className={`text-xs font-semibold hidden md:block ${isScrolled ? 'text-pink-900' : 'text-white/90'}`}>NIDHI Certified</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {['Home',  'Tours', 'Gallery','About Us', 'Contact Us'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className={`font-semibold transition-all duration-300 relative group ${isScrolled ? 'text-gray-700 hover:text-[#912082]' : 'text-white hover:text-[#912082]'}`}>
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#912082] to-pink-900 rounded-full group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <a href="#contact-us" className="hidden md:block px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full hover:shadow-xl hover:from-[#912082] hover:to-pink-900 transition text-sm lg:text-base font-semibold">
              Enquire Now
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-xl bg-gradient-to-br from-[#912082] to-pink-900">
              {isMenuOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-xl absolute w-full mt-3 py-4 rounded-b-2xl border-t-4 border-[#912082]">
            {['Home', 'About Us', 'Tours', 'Destination', 'Contact Us'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="block px-6 py-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 transition font-semibold text-gray-700 hover:text-[#912082]" onClick={() => setIsMenuOpen(false)}>
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1920&q=80"
          alt="Taj Mahal"
          className="w-full h-full object-cover"
        />
      </div>
              
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-20 pb-10">
          <div className="inline-block mb-4 md:mb-6 animate-fadeInDown">
            <div className="px-4 md:px-6 py-2 md:py-3 bg-white/95 shadow-lg rounded-full border-2 border-[#912082]">
              <span className="bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent font-bold text-sm md:text-lg">
                ✨ Discover Incredible India ✨
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 md:mb-6 leading-tight text-white drop-shadow-2xl animate-fadeInUp">
            {content.hero.title}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-6 md:mb-10 font-semibold px-2 drop-shadow-lg animate-fadeInUp animation-delay-200">
            {content.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-6 justify-center px-4 animate-fadeInUp animation-delay-400">
            <a href="#tours" className="px-6 md:px-12 py-3 md:py-5 bg-white text-pink-900 rounded-full font-bold hover:bg-pink-50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-lg lg:text-xl">
              Explore Tours 
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </a>
            <a href="#contact-us" className="px-6 md:px-12 py-3 md:py-5 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold hover:from-[#912082] hover:to-pink-900 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm md:text-lg lg:text-xl">
              Enquire Now
            </a>
          </div>

          {/* <div className="absolute bottom-5 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 md:w-8 md:h-12 border-2 md:border-4 border-white rounded-full flex justify-center p-1 md:p-2">
              <div className="w-1 md:w-2 h-2 md:h-4 bg-white rounded-full"></div>
            </div>
          </div> */}
        </div>
      </section>

      
             {/* About Us Section */}
      <section id="about-us" className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80" alt="About Us" className="rounded-2xl md:rounded-3xl shadow-2xl w-full" />
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-[#912082] to-pink-900 rounded-full flex items-center justify-center shadow-xl">
                  <Heart className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold mb-4 md:mb-6 shadow-lg text-xs md:text-base">
                  ✨ NIDHI Certified Company ✨
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent">20 Years of Excellence</h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-3 md:mb-6 font-semibold">
                  A NIDHI registered company under the Ministry of Tourism and Maharashtra Tourism, we are a <span className="font-black text-[#912082]">women-led organization</span> that aims to provide safe, secure, and happy vacations for all.
                </p>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6 font-semibold">
                  Understanding the basic needs of women travelers, our coordinators make every journey memorable.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start gap-2 md:gap-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg">
                    <CheckCircle className="w-5 h-5 md:w-8 md:h-8 text-[#912082] mt-0.5 md:mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-bold text-sm md:text-base"><span className="text-[#912082]">IATA Certified</span> professionals with HMI training</p>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg">
                    <CheckCircle className="w-5 h-5 md:w-8 md:h-8 text-[#912082] mt-0.5 md:mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-bold text-sm md:text-base"><span className="text-[#912082]">500+ Tours</span> successfully conducted</p>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl md:rounded-2xl p-3 md:p-4 shadow-lg">
                    <CheckCircle className="w-5 h-5 md:w-8 md:h-8 text-[#912082] mt-0.5 md:mt-1 flex-shrink-0" />
                    <p className="text-gray-700 font-bold text-sm md:text-base"><span className="text-[#912082]">Custom Itineraries</span> tailored for you</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Tours Section */}
      <section id="tours" className="py-12 md:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-3 md:mb-4">
              <span className="px-4 md:px-6 py-2 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold text-sm md:text-lg shadow-xl">
                ✨ Our Premium Tours ✨
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 md:mb-6 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent px-2">Explore India by Region</h2>
            <p className="text-base md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto font-semibold px-4 mb-8 md:mb-10">
              Choose from our extensive collection of tours across India
            </p>

            {/* Region Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
              {regions.map((region) => (
                <button
                  key={region}
                  onClick={() => setActiveRegion(region)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-bold text-xs md:text-sm transition-all duration-300 transform hover:scale-105 ${
                    activeRegion === region
                      ? 'bg-gradient-to-r from-[#912082] to-pink-900 text-white shadow-xl'
                      : 'bg-white text-gray-700 border-2 border-pink-200 hover:border-[#912082]'
                  }`}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>
          
          {/* Display Tours based on selected region */}
          {activeRegion === 'All' ? (
            <div className="space-y-12">
              {Object.entries(content.tours).map(([region, tourList]) => (
                <div key={region}>
                  <h3 className="text-2xl md:text-4xl font-black mb-6 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent">{region}</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {tourList.slice(0, 3).map((tour) => (
                      <div key={tour.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 group">
                        <div className="relative h-48 md:h-56 overflow-hidden">
                          <img src={tour.image} alt={tour.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                          <div className="absolute top-3 right-3 bg-gradient-to-r from-[#912082] to-pink-900 px-3 py-1.5 rounded-full text-white font-bold text-xs shadow-lg">
                            {tour.duration}
                          </div>
                          {/* <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[#912082] font-black text-sm shadow-lg">
                            {tour.price}
                          </div> */}
                          <div className="absolute bottom-3 left-3 right-3">
                            <h4 className="text-xl md:text-2xl font-black text-white drop-shadow-lg line-clamp-2 mb-1">{tour.name}</h4>
                            <p className="text-white/90 text-xs font-semibold line-clamp-2">{tour.description}</p>
                          </div>
                        </div>
                        <div className="p-4 space-y-3">
                          <div className="flex items-start gap-2 text-[#912082]">
                            <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-bold line-clamp-1">{tour.destinations}</span>
                          </div>
                          
                          <div className="space-y-2">
                            <p className="text-xs font-bold text-gray-500 uppercase">Highlights:</p>
                            <div className="flex flex-wrap gap-1.5">
                              {tour.highlights.slice(0, 3).map((highlight, i) => (
                                <span key={i} className="px-2 py-1 bg-gradient-to-r from-pink-50 to-rose-50 text-pink-900 rounded-lg text-xs font-semibold border border-pink-200">
                                  {highlight}
                                </span>
                              ))}
                              {tour.highlights.length > 3 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-semibold">
                                  +{tour.highlights.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="pt-2 border-t border-gray-100">
                            <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                              <span className="font-semibold">Starting from: {tour.startFrom}</span>
                            </div>
                            <button className="w-full py-3 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-xl font-bold hover:from-[#912082] hover:to-pink-900 transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-md hover:shadow-xl">
                              View Details <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {tourList.length > 3 && (
                    <button 
                      onClick={() => setActiveRegion(region)}
                      className="mt-4 px-6 py-2 bg-white border-2 border-[#912082] text-[#912082] rounded-full font-bold hover:bg-[#912082] hover:text-white transition"
                    >
                      View all {tourList.length} {region} tours →
                    </button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h3 className="text-2xl md:text-4xl font-black mb-6 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent text-center">{activeRegion} Tours</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {content.tours[activeRegion]?.map((tour) => (
                  <div key={tour.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 group">
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img src={tour.image} alt={tour.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-[#912082] to-pink-900 px-3 py-1.5 rounded-full text-white font-bold text-xs shadow-lg">
                        {tour.duration}
                      </div>
                      {/* <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[#912082] font-black text-sm shadow-lg">
                        {tour.price}
                      </div> */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <h4 className="text-xl md:text-2xl font-black text-white drop-shadow-lg line-clamp-2 mb-1">{tour.name}</h4>
                        <p className="text-white/90 text-xs font-semibold line-clamp-2">{tour.description}</p>
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex items-start gap-2 text-[#912082]">
                        <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-bold line-clamp-2">{tour.destinations}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-xs font-bold text-gray-500 uppercase">Highlights:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {tour.highlights.slice(0, 3).map((highlight, i) => (
                            <span key={i} className="px-2 py-1 bg-gradient-to-r from-pink-50 to-rose-50 text-pink-900 rounded-lg text-xs font-semibold border border-pink-200">
                              {highlight}
                            </span>
                          ))}
                          {tour.highlights.length > 3 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-semibold">
                              +{tour.highlights.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="pt-2 border-t border-gray-100">
                        <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                          <span className="font-semibold">Starting from: {tour.startFrom}</span>
                        </div>
                        <a href="#contact-us" className="w-full py-3 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-xl font-bold hover:from-[#912082] hover:to-pink-900 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                          Enquire Now <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

     
      

      {/* Gallery Section */}
      <section id="gallery" className="py-12 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-block mb-3 md:mb-4">
              <span className="px-4 md:px-6 py-2 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold text-sm md:text-lg shadow-xl">
                📸 Our Travel Gallery 📸
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 md:mb-4 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent px-2">Captured Moments</h2>
            <p className="text-sm md:text-lg lg:text-xl text-gray-600 font-semibold px-4">Real photos from our amazing tours</p>
          </div>
        </div>

        <div className="relative w-full">
          {/* Row 1 - Scrolling Right */}
          <div className="gallery-scroll">
            <div className="gallery-track-right">
              {[...galleryImages.slice(0, 12), ...galleryImages.slice(0, 12)].map((img, idx) => (
                <div key={`row1-${idx}`} className={`gallery-brick group ${idx % 4 === 0 ? 'brick-large' : idx % 4 === 1 ? 'brick-wide' : idx % 4 === 2 ? 'brick-tall' : 'brick-medium'}`}>
                  <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Scrolling Right */}
          <div className="gallery-scroll">
            <div className="gallery-track-right">
              {[...galleryImages.slice(12), ...galleryImages.slice(12)].map((img, idx) => (
                <div key={`row2-${idx}`} className={`gallery-brick group ${idx % 4 === 0 ? 'brick-tall' : idx % 4 === 1 ? 'brick-large' : idx % 4 === 2 ? 'brick-medium' : 'brick-wide'}`}>
                  <img src={img} alt={`Gallery ${idx + 13}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-block mb-3 md:mb-4">
              <span className="px-4 md:px-6 py-2 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold text-sm md:text-lg shadow-xl">
                💬 Happy Stories 💬
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 md:mb-4 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent px-2">What Travelers Say</h2>
            <p className="text-sm md:text-lg lg:text-xl text-gray-600 font-semibold px-4">Hear from our happy explorers</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {content.testimonials.map((testimonial, idx) => (
              <div key={idx} className={`transition-all duration-500 ${idx === activeTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'}`}>
                <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-12 border-2 md:border-4 border-[#912082]">
                  <div className="flex items-center gap-3 md:gap-6 mb-4 md:mb-8">
                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover border-2 md:border-4 border-[#912082] shadow-lg" />
                    <div>
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent">{testimonial.name}</h4>
                      <p className="text-gray-600 font-semibold text-sm md:text-base">{testimonial.location}</p>
                      <div className="flex gap-0.5 md:gap-1 mt-1 md:mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-base md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-semibold italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
              {content.testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`h-2 md:h-4 rounded-full transition-all duration-300 ${idx === activeTestimonial ? 'bg-gradient-to-r from-[#912082] to-pink-900 w-8 md:w-16' : 'bg-pink-200 w-2 md:w-4'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      

      {/* Contact Section */}
      <section id="contact-us" className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-8 md:mb-12">
            <div className="inline-block mb-3 md:mb-4">
              <span className="px-4 md:px-6 py-2 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-full font-bold text-sm md:text-lg shadow-xl">
                📞 Get In Touch 📞
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 md:mb-6 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent px-2">Let's Plan Together</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 md:mb-8 font-bold px-4">Ready for an unforgettable adventure?</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl md:rounded-3xl p-4 md:p-8 text-center hover:shadow-xl transition transform hover:scale-105">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-[#912082] to-pink-900 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <Phone className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
                <h4 className="font-black bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent text-lg md:text-xl lg:text-2xl mb-2">Call Us</h4>
                <a href="tel:+918767764784" className="text-gray-600 font-semibold text-xs md:text-sm hover:text-[#912082] transition block">+91 87677 64784</a>
                <a href="tel:+919373757002" className="text-gray-600 font-semibold text-xs md:text-sm hover:text-[#912082] transition block">+91 93737 57002</a>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl md:rounded-3xl p-4 md:p-8 text-center hover:shadow-xl transition transform hover:scale-105">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-[#912082] to-pink-900 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <Mail className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
                <h4 className="font-black bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent text-lg md:text-xl lg:text-2xl mb-2">Email Us</h4>
                <a href="mailto:itcindia05@gmail.com" className="text-gray-600 font-semibold text-xs md:text-sm hover:text-[#912082] transition block">itcindia05@gmail.com</a>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl md:rounded-3xl p-4 md:p-8 text-center hover:shadow-xl transition transform hover:scale-105 sm:col-span-3 lg:col-span-1">
                <div className="w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-[#912082] to-pink-900 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <MapPin className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
                <h4 className="font-black bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent text-lg md:text-xl lg:text-2xl mb-2">Visit Us</h4>
                <a href="https://maps.app.goo.gl/fHosnv7wEnQE99oF6" target="_blank" rel="noopener noreferrer" className="text-gray-600 font-semibold text-xs md:text-sm hover:text-[#912082] transition">
                 9, Suryodaya, Gazetted Officers Colony, West High Court Road, Civillines, Nagpur 440001
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl md:rounded-3xl shadow-xl p-4 md:p-8 lg:p-12 border-2 md:border-4 border-pink-200">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 md:mb-6 bg-gradient-to-r from-[#912082] to-pink-900 bg-clip-text text-transparent">Send Us a Message</h3>
              <form className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <input type="text" placeholder="Your Name" className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold text-sm md:text-base" />
                  <input type="email" placeholder="Your Email" className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold text-sm md:text-base" />
                </div>
                <input type="tel" placeholder="Phone Number" className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition bg-white font-semibold text-sm md:text-base" />
                <textarea placeholder="Tell us about your dream vacation..." rows="4" className="w-full px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-pink-300 focus:border-[#912082] focus:outline-none transition resize-none bg-white font-semibold text-sm md:text-base"></textarea>
                <button type="submit" className="w-full py-3 md:py-5 bg-gradient-to-r from-[#912082] to-pink-900 text-white rounded-xl md:rounded-2xl font-black text-base md:text-lg lg:text-xl hover:from-[#912082] hover:to-pink-900 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                  Submit Inquiry
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </form>
            </div>

            <div className="flex justify-center gap-3 md:gap-6 mt-8 md:mt-12">
              <a href="https://facebook.com" className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#912082] to-pink-900 rounded-xl md:rounded-2xl flex items-center justify-center hover:from-[#912082] hover:to-pink-900 hover:scale-110 transition-all duration-300 shadow-lg">
                <Facebook className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </a>
              <a href="https://instagram.com" className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#912082] to-pink-900 rounded-xl md:rounded-2xl flex items-center justify-center hover:from-[#912082] hover:to-pink-900 hover:scale-110 transition-all duration-300 shadow-lg">
                <Instagram className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </a>
              <a href="https://twitter.com" className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#912082] to-pink-900 rounded-xl md:rounded-2xl flex items-center justify-center hover:from-[#912082] hover:to-pink-900 hover:scale-110 transition-all duration-300 shadow-lg">
                <Twitter className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#912082] text-white py-8 md:py-12">
  <div className="container mx-auto px-4">
    
    <div className="grid grid-cols-3 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
      <div>
        <h5 className="font-black text-base md:text-xl mb-3 md:mb-4">Quick Links</h5>
        <ul className="space-y-1 md:space-y-2 text-white/80 font-semibold text-xs md:text-sm">
          <li><a href="#home" className="hover:text-white transition">Home</a></li>
          <li><a href="#tours" className="hover:text-white transition">Tours</a></li>
          <li><a href="#about-us" className="hover:text-white transition">About Us</a></li>
          <li><a href="#contact-us" className="hover:text-white transition">Contact Us</a></li>
        </ul>
      </div>
      
      <div>
        <h5 className="font-black text-base md:text-xl mb-3 md:mb-4">Popular Tours</h5>
        <ul className="space-y-1 md:space-y-2 text-white/80 font-semibold text-xs md:text-sm">
          <li><a href="#tours" className="hover:text-white transition">Golden Triangle</a></li>
          <li><a href="#tours" className="hover:text-white transition">Kerala</a></li>
          <li><a href="#tours" className="hover:text-white transition">Rajasthan</a></li>
          <li><a href="#tours" className="hover:text-white transition">Ladakh</a></li>
        </ul>
      </div>
      <div className="flex justify-center mb-4 md:mb-6">
        <div className="p-2 md:p-3 bg-transparent rounded-xl md:rounded-2xl ">
          <img src="/images/logo.jpeg" alt="India Tour Company" className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain shadow-lg" />
        </div>
      </div>
    </div>
    
    <div className="border-t border-white/20 pt-6 md:pt-8">
      
      <div className="text-center">
        <p className="text-white/90 font-semibold text-xs md:text-sm">&copy; 2026 India Tour Company. All rights reserved.</p>
        <p className="text-white/80 mt-1 md:mt-2 font-semibold text-xs md:text-sm">✨ NIDHI Registered | IATA Certified | Ministry of Tourism ✨</p>
      </div>
    </div>
  </div>
</footer>


      <style>{`
  html {
    scroll-behavior: smooth;
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
  
  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes scrollRight {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out;
    opacity: 0;
    animation-fill-mode: forwards;
  }
  
  .animate-fadeInDown {
    animation: fadeInDown 0.8s ease-out;
  }
  
  .animation-delay-200 {
    animation-delay: 0.2s;
  }
  
  .animation-delay-400 {
    animation-delay: 0.4s;
  }

  .gallery-scroll {
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .gallery-track-right {
    display: flex;
    animation: scrollRight 100s linear infinite;
    width: fit-content;
  }



 .gallery-brick {
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  border: 4px solid #912082;
  box-shadow: 0 8px 24px rgba(144, 32, 130, 0.3);
  transition: all 0.4s ease;
}

.gallery-brick:hover {
  border-color: #912082;
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(144, 32, 130, 0.5);
}

  /* Large brick - dominant size */
  .brick-large {
    width: 500px;
    height: 250px;
  }

  /* Wide brick */
  .brick-wide {
    width: 450px;
    height: 250px;
  }

  /* Tall brick */
  .brick-tall {
    width: 300px;
    height: 250px;
  }

  /* Medium brick */
  .brick-medium {
    width: 400px;
    height: 250px;
  }

  @media (max-width: 768px) {
    .brick-large {
      width: 350px;
      height: 180px;
    }

    .brick-wide {
      width: 320px;
      height: 180px;
    }

    .brick-tall {
      width: 250px;
      height: 180px;
    }

    .brick-medium {
      width: 300px;
      height: 180px;
    }
  }
    /* Animated gradient border */
@keyframes rotateBorder {
  0% {
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #ec4899, #f43f5e, #8b5cf6, #06b6d4) border-box;
  }
  25% {
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #f43f5e, #8b5cf6, #06b6d4, #ec4899) border-box;
  }
  50% {
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #8b5cf6, #06b6d4, #ec4899, #f43f5e) border-box;
  }
  75% {
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #06b6d4, #ec4899, #f43f5e, #8b5cf6) border-box;
  }
  100% {
    background: linear-gradient(white, white) padding-box,
                linear-gradient(45deg, #ec4899, #f43f5e, #8b5cf6, #06b6d4) border-box;
  }
}

.gallery-brick {
  animation: rotateBorder 4s linear infinite;
}
`}</style>
    </div>
  );
};

export default TourismWebsite;
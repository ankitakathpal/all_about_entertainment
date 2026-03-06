import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Award, Music, Users, Mic, Calendar, Star, Sparkles, Briefcase,
  Phone, Mail, Linkedin, Instagram, Facebook, Youtube, MapPin, Menu, X
} from "lucide-react";

const Services = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      title: "Corporate Events",
      icon: <Award className="h-12 w-12 text-purple-600" />,
      desc: "Product launches, annual meets, award nights, conferences, and brand events curated with top-tier professionalism.",
      gradient: "from-purple-50 to-purple-100"
    },
    {
      title: "Wedding & Private Functions",
      icon: <Music className="h-12 w-12 text-pink-600" />,
      desc: "Sangeet, reception, engagement, cocktail nights — experience luxury entertainment tailored for your special day.",
      gradient: "from-pink-50 to-pink-100"
    },
    {
      title: "College Fests & Concerts",
      icon: <Users className="h-12 w-12 text-blue-600" />,
      desc: "Celebrity nights, DJ concerts, pro-shows, cultural festivals — we bring electrifying performances for campus events.",
      gradient: "from-blue-50 to-blue-100"
    },
    {
      title: "Artist Management",
      icon: <Mic className="h-12 w-12 text-indigo-600" />,
      desc: "Singers, DJs, comedians, dancers, anchors — complete artist coordination & end-to-end show management.",
      gradient: "from-indigo-50 to-indigo-100"
    },
    {
      title: "Celebrity Booking",
      icon: <Star className="h-12 w-12 text-yellow-600" />,
      desc: "Pan-India celebrity appearance, performance and brand promotion bookings for events and fest nights.",
      gradient: "from-yellow-50 to-yellow-100"
    },
    {
      title: "Event Production",
      icon: <Briefcase className="h-12 w-12 text-red-600" />,
      desc: "Stage, sound, lighting, truss, LED walls, logistics and complete event setup handled professionally.",
      gradient: "from-red-50 to-red-100"
    },
    {
      title: "Creative Show Concepts",
      icon: <Sparkles className="h-12 w-12 text-emerald-600" />,
      desc: "Choreographed acts, thematic entries, live band concepts, and unique experiential entertainment.",
      gradient: "from-emerald-50 to-emerald-100"
    },
    {
      title: "Event Planning & Coordination",
      icon: <Calendar className="h-12 w-12 text-orange-600" />,
      desc: "End-to-end planning, scheduling, team coordination & execution with flawless precision.",
      gradient: "from-orange-50 to-orange-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ---------------------- TOP BAR ---------------------- */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            <div className="flex items-center space-x-6">
              <a href="tel:+919876543210" className="flex items-center hover:text-purple-400 transition">
                <Phone className="h-3.5 w-3.5 mr-1.5" />
                <span className="hidden sm:inline">+91 98765 43210</span>
              </a>

              <a href="mailto:info@allaboutentertainment.com" 
                 className="hidden md:flex items-center hover:text-purple-400 transition">
                <Mail className="h-3.5 w-3.5 mr-1.5" />
                <span>info@allaboutentertainment.com</span>
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <a href="#" className="hover:text-purple-400 transition"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="hover:text-purple-400 transition"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="hover:text-purple-400 transition"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="hover:text-purple-400 transition"><Youtube className="h-4 w-4" /></a>
            </div>

          </div>
        </div>
      </div>

      {/* ---------------------- NAVBAR ---------------------- */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <img src="/logo.png" className="w-52 h-auto" alt="Logo" />

                        
                                    {/* Desktop Nav */}
                                    <div className="hidden lg:flex items-center space-x-8">
                                      <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium transition-colors uppercase text-sm tracking-wide">Home</Link>
                                      <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors uppercase text-sm tracking-wide">About</Link>
                                      <Link to="/services" className="text-gray-700 hover:text-purple-600 font-medium transition-colors uppercase text-sm tracking-wide">Services</Link>
                                      <Link to="/artists" className="text-gray-700 hover:text-purple-600 font-medium transition-colors uppercase text-sm tracking-wide">Artists</Link>
                                      <Link to="/gallery" className="text-gray-700 hover:text-purple-600 font-medium transition-colors uppercase text-sm tracking-wide">Gallery</Link>
                                      <Link to="/contact" className="text-gray-700 hover:text-purple-600 font-medium transition-colors uppercase text-sm tracking-wide">Contact</Link>
                                    </div>
                                    {/* CTA Button */}
                        <div className="hidden lg:flex items-center">
                          <Link
                            to="/book"
                            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded font-semibold hover:shadow-lg transition-all uppercase text-sm tracking-wide"
                          >
                            Book Now
                          </Link>
                        </div>
            
                        {/* Mobile Menu Button */}
                        <button 
                          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                      </div>
                    </div>
            
                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                      <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
                        <div className="px-4 pt-2 pb-4 space-y-1">
                          <a href="#home" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded font-medium transition-colors uppercase text-sm">
                            Home
                          </a>
                          <a href="#about" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded font-medium transition-colors uppercase text-sm">
                            About
                          </a>
                          <a href="#services" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded font-medium transition-colors uppercase text-sm">
                            Services
                          </a>
                          <a href="#artists" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded font-medium transition-colors uppercase text-sm">
                            Artists
                          </a>
                          <a href="#gallery" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded font-medium transition-colors uppercase text-sm">
                            Gallery
                          </a>
                          <a href="#contact" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded font-medium transition-colors uppercase text-sm">
                            Contact
                          </a>
                          <div className="pt-3">
                            <button className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded font-semibold hover:shadow-lg transition-all uppercase text-sm">
                              Book Now
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </nav>

      {/* ---------------------- HEADER ---------------------- */}
      <header className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-14 text-center text-white">  
        <h1 className="text-4xl md:text-6xl font-bold">Our Services</h1>
        <p className="mt-4 text-xl opacity-90">
          End-to-end entertainment solutions designed to make every event unforgettable.
        </p>
      </header>

      {/* ---------------------- SERVICES GRID ---------------------- */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {services.map((service, i) => (
            <div key={i} className={`p-8 rounded-2xl shadow bg-gradient-to-br ${service.gradient}`}>
              {service.icon}
              <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
              <p className="mt-2 text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    {/* Footer */}
<footer className="bg-gray-900 text-white py-12 mt-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center mb-4">
    
          <span className="ml-2 text-xl font-bold">All About Entertainment</span>
        </div>
        <p className="text-gray-400">
          Creating unforgettable moments through world-class entertainment
        </p>
      </div>
   
      <div>
        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
          <li><a href="/about" className="text-gray-400 hover:text-white transition">About</a></li>
          <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
          <li><a href="#artists" className="text-gray-400 hover:text-white transition">Artists</a></li>
          <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Contact Info</h3>
        <ul className="space-y-2 text-gray-400">
          <li className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            +91 93545 98380
          </li>
          <li className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            info@allaboutentertainment.com
          </li>
          <li className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            Delhi, India
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-bold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition">
            <Youtube className="h-5 w-5" />
          </a>
          <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition">
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      <p>&copy; 2025 All About Entertainment. All rights reserved.</p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Services;

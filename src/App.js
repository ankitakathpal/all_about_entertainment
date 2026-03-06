import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Instagram, Youtube, Linkedin, Facebook, ChevronRight, Star, Calendar, Users, Award, Music, Mic, PartyPopper, Play } from 'lucide-react';
import { Link } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Artists from "./Artists";
import Gallery from "./Gallery";
import BookingForm from "./BookingForm";


const HomePage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    eventDate: '',
    artistCategory: '',
    budget: '',
    message: ''
  });

  const heroSlides = [
    {
      type: 'image',
      url: '/images/gallery11.jpg',
      title: 'slide 1 ',
      description: 'Professional entertainment for your business occasions'
    },
    {
      type: 'image',
      url: '/images/gallery4.jpeg',
      title: 'Dream Weddings',
      description: 'Making your special day unforgettable'
    },
    {
      type: 'image',
      url: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&h=600&fit=crop',
      title: 'College Fests',
      description: 'Bringing energy to campus celebrations'
    },
    {
      type: 'image',
      url: '/images/gallery9.jpg',
      title: 'Live Performances',
      description: 'Experience the magic of live entertainment'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({
      name: '',
      phone: '',
      eventType: '',
      eventDate: '',
      artistCategory: '',
      budget: '',
      message: ''
    });
  };

  const artists = [
    {
    id: "classico-mayank",
    name: "Classico Mayank",
    category: "Singer",
    genre: "Bollywood & Sufi",
    image: "/images/mayank.jpeg"
  },
    {
    id: "anchor-naina",
    name: "Anchor Naina",
    category: "Singer",
    genre: "Bollywood & Sufi",
    image: "/images/naina.jpeg"
    },
    { 
    id: "dj-hitesh",
    name: "DJ Hitesh",
    category: "Dj",
    genre: "Bollywood ",
    image: "/images/hitesh.jpeg"
     },
    
  ];

  const testimonials = [
    {
      name: 'Rajesh Mehta',
      designation: 'CEO, TechCorp India',
      review: 'All About Entertainment made our annual meet unforgettable. The artist quality and coordination were top-notch!',
      rating: 5
    },
    {
      name: 'Sneha & Aryan',
      designation: 'Wedding Couple',
      review: 'Our sangeet night was magical! The DJ and dancers they provided created the perfect atmosphere.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      designation: 'Cultural Head, IIT Delhi',
      review: 'Professional service from start to finish. They understood our college fest requirements perfectly.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a href="tel:+919876543210" className="flex items-center hover:text-purple-400 transition">
                <Phone className="h-3.5 w-3.5 mr-1.5" />
                <span className="hidden sm:inline">+91 98765 43210</span>
              </a>
              <a href="mailto:info@allaboutentertainment.com" className="hidden md:flex items-center hover:text-purple-400 transition">
                <Mail className="h-3.5 w-3.5 mr-1.5" />
                <span>info@allaboutentertainment.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#" className="hover:text-purple-400 transition">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
<nav className="bg-white shadow-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      {/* Logo Section */}
      <div className="flex items-center">
        <img 
          src="/logo.png" 
          alt="All About Entertainment Logo" 
          className="w-52 h-auto object-contain"
        />
      </div>
            
            {/* Desktop Navigation */}
<div className="hidden lg:flex items-center space-x-8">
  <Link
    to="/"
    className="text-gray-700 hover:text-purple-600 font-medium transition-colors uppercase text-sm tracking-wide"
  >
    Home
  </Link>

  <Link
    to="/about"
    className="text-gray-700 hover:text-purple-600 font-medium transition-colors uppercase text-sm tracking-wide"
  >
    About
  </Link>

  <Link
    to="/services"
    className="text-gray-700 hover:text-purple-600 font-medium transition-colors uppercase text-sm tracking-wide"
  >
    Services
  </Link>

  <Link
    to="/artists"
    className="text-gray-700 hover:text-purple-600 font-medium transition-colors uppercase text-sm tracking-wide"
  >
    Artists
  </Link>

  <Link
    to="/gallery"
    className="text-gray-700 hover:text-purple-600 font-medium transition-colors uppercase text-sm tracking-wide"
  >
    Gallery
  </Link>

  <Link
    to="/contact"
    className="text-gray-700 hover:text-purple-600 font-medium transition-colors uppercase text-sm tracking-wide"
  >
    Contact
  </Link>
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

      {/* Hero Section with Carousel */}
      <section id="home" className="pt-16 relative">
        {/* Carousel Container */}
        <div className="relative h-[600px] md:h-[700px] overflow-hidden">
          {/* Slides */}
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {slide.type === 'image' ? (
                <div className="relative w-full h-full">
                  <img
                    src={slide.url}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <iframe
                    src={slide.url}
                    className="w-full h-full object-cover"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                  ></iframe>
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent pointer-events-none"></div>
                </div>
              )}
            </div>
          ))}

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                  Bringing Your Events to Life with
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    World-Class Entertainment
                  </span>
                </h1>
                <p className="text-xl text-white mb-8 drop-shadow-lg">
                  From corporate galas to dream weddings and unforgettable college fests – we deliver artists and experiences that leave lasting impressions
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
<Link
                to="/book"
                className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition border-2 border-white"
              >                    Book an Artist
                  </Link>
                  <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition border-2 border-white">
                    View Our Talent
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition z-10"
          >
            <ChevronRight className="h-6 w-6 rotate-180" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full backdrop-blur-sm transition z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Bar */}
        <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600">500+</div>
                <div className="text-gray-600 mt-2">Events Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600">200+</div>
                <div className="text-gray-600 mt-2">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600">100+</div>
                <div className="text-gray-600 mt-2">Professional Artists</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600">Pan-India</div>
                <div className="text-gray-600 mt-2">Service Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Complete Entertainment Solution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At All About Entertainment, we specialize in curating perfect entertainment experiences for every occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition">
              <Award className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate Events</h3>
              <p className="text-gray-600">Product launches, annual meets, team celebrations with professional entertainment</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl hover:shadow-lg transition">
              <Music className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Weddings & Private Functions</h3>
              <p className="text-gray-600">Sangeet, reception, intimate gatherings with perfect entertainment vibes</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">College Fests</h3>
              <p className="text-gray-600">Concerts, celebrity performances, and cultural events for student communities</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl hover:shadow-lg transition">
              <Mic className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Artist Management</h3>
              <p className="text-gray-600">Complete event coordination and production support end-to-end</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section id="artists" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Star Performers
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked talent across genres to match your event's vibe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 h-48 flex items-center justify-center overflow-hidden">
  <img
  src={artist.image}
  alt={artist.name}
  className="w-full h-64 object-contain bg-gray-100"
/>
</div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{artist.name}</h3>
                  <p className="text-purple-600 font-semibold mb-2">{artist.category}</p>
                  <p className="text-gray-600 text-sm">{artist.genre}</p>
                  <button className="mt-4 text-purple-600 font-semibold flex items-center group-hover:translate-x-2 transition">
                    View Profile <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
  <Link to="/artists">
    <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition">
      View All Artists
    </button>
  </Link>
</div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Brands & Clients Trust Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Diverse Talent Pool</h3>
              <p className="text-gray-600">Singers, DJs, dancers, comedians, anchors and more</p>
            </div>

            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Seamless Booking</h3>
              <p className="text-gray-600">Simple inquiry process with quick confirmations</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">End-to-End Support</h3>
              <p className="text-gray-600">From artist selection to event-day coordination</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-600">500+ successful events delivered across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.designation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Book Your Perfect Artist?
            </h2>
            <p className="text-xl text-gray-600">
              Tell us your requirements and we'll get back to you within 24 hours
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Event Type *</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  <option value="">Select event type</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="college">College Fest</option>
                  <option value="private">Private Function</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Preferred Artist Category</label>
                <select
                  name="artistCategory"
                  value={formData.artistCategory}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  <option value="">Select category</option>
                  <option value="singer">Singer</option>
                  <option value="dj">DJ</option>
                  <option value="dancer">Dancer</option>
                  <option value="comedian">Comedian</option>
                  <option value="anchor">Anchor/Host</option>
                  <option value="band">Live Band</option>
                  <option value="multiple">Multiple Categories</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  <option value="">Select budget</option>
                  <option value="under50k">Under ₹50,000</option>
                  <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                  <option value="1l-3l">₹1,00,000 - ₹3,00,000</option>
                  <option value="3l-5l">₹3,00,000 - ₹5,00,000</option>
                  <option value="above5l">Above ₹5,00,000</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">Additional Details</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Tell us more about your event requirements..."
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full mt-6 bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition shadow-lg"
            >
              Submit Inquiry
            </button>

            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">Or reach us directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* CALL BUTTON */}
    <a
      href="tel:+9354598380"
      className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
    >
      Call Now
    </a>

    {/* WHATSAPP BUTTON */}
    <a
      href="https://wa.me/9354598380"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
    >
      WhatsApp
    </a>

  </div>
</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                
                <span className="ml-2 text-xl font-bold">All About Entertainment</span>
              </div>
              <p className="text-gray-400">Creating unforgettable moments through world-class entertainment</p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
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

export default HomePage;
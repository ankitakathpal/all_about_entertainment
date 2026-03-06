import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  PartyPopper, Users, Award, Star, Music,
  Phone, Mail, Linkedin, Instagram, Facebook, Youtube,
  Menu, X, MapPin
} from "lucide-react";

const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <a href="mailto:info@allaboutentertainment.com" className="hidden md:flex items-center hover:text-purple-400 transition">
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
            <div className="flex items-center">
              <img src="/logo.png" alt="Logo" className="w-52 h-auto object-contain" />
            </div>

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
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <Link to="/" className="block px-4 py-3 hover:bg-purple-50">Home</Link>
              <Link to="/about" className="block px-4 py-3 hover:bg-purple-50">About</Link>
              <a href="#services" className="block px-4 py-3 hover:bg-purple-50">Services</a>
              <a href="#artists" className="block px-4 py-3 hover:bg-purple-50">Artists</a>
              <a href="#gallery" className="block px-4 py-3 hover:bg-purple-50">Gallery</a>
              <a href="#contact" className="block px-4 py-3 hover:bg-purple-50">Contact</a>

              <button className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded mt-2">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ABOUT US
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted partner in creating unforgettable entertainment experiences
            </p>
          </div>

          {/* Company Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h3>
              <p className="text-gray-600 mb-4 text-justify">
                Founded in 2025 with a passion for bringing joy and entertainment to every occasion, All About Entertainment has grown to become one of the leading entertainment solution providers in India. What started as a small venture with a handful of talented artists has evolved into a comprehensive entertainment powerhouse.
              </p>
              <p className="text-gray-600 mb-4 text-justify">
                We specialize in curating the perfect entertainment experience for corporate events, weddings, college fests, and private celebrations. Our extensive network of over 100 talented artists and our unwavering commitment to excellence have made us the preferred choice for clients across the country.
              </p>
              <p className="text-gray-600 mb-4 text-justify">
                From intimate gatherings to grand celebrations with thousands of attendees, we handle every detail with precision and care. Our team works tirelessly to understand your vision and bring it to life through exceptional entertainment that resonates with your audience.
              </p>
              <p className="text-gray-60 text-justify ">
                With over 500+ successful events and 200+ happy clients, we continue to set new standards in the entertainment industry, one unforgettable experience at a time.
              </p>
            </div>
            <div className="rounded-xl h-96 overflow-hidden shadow-lg">
  <img
    src="/images/company.jpeg"
    alt="Company"
    className="w-full h-full object-cover"
  />
</div>
          </div>

          {/* Founder Section */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Meet Our Founder</h3>
              <p className="text-gray-600">The visionary behind All About Entertainment</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 items-center">

              <div className="md:col-span-1 flex justify-center">
      <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
        <img
          src="/images/founder.jpg"
          alt="Founder"
          className="w-full h-full object-cover"
        />
      </div>
    </div>


              <div className="md:col-span-2">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Piyush Nagpal</h4>
                <p className="text-purple-600 font-semibold mb-4">Founder & CEO</p>
                
                <p className="text-gray-600 mb-4 text-justify">
                  With over 8 years of experience in the entertainment industry, Piyush Nagpal founded All About Entertainment in 2020 with a vision to revolutionize how people experience entertainment at events across India. His journey began as an event coordinator for college festivals, where he discovered his passion for creating memorable experiences.
                </p>
                
                <p className="text-gray-600 mb-4 text-justify">
                  After completing his MBA in Event Management from Delhi University, Piyush worked with several leading event management companies, gaining invaluable experience in artist management, event production, and client relations. During this time, he identified a significant gap in the market for a professional, reliable, and comprehensive entertainment booking service.
                </p>

                <p className="text-gray-600 mb-4 text-justify">
                  Starting with just five artists and a dream, Piyush built All About Entertainment from the ground up. His hands-on approach, attention to detail, and commitment to both client satisfaction and artist welfare have been the cornerstones of the company's success. Today, the company manages a network of over 100 talented performers and has successfully executed more than 500 events.
                </p>

                <p className="text-gray-600 mb-4 text-justify">
                  Piyush's vision extends beyond just booking artists – he aims to create an ecosystem where talent meets opportunity, and every event becomes a platform for unforgettable entertainment. Under his leadership, All About Entertainment continues to innovate and set new benchmarks in the industry.
                </p>

                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                    <p className="text-2xl font-bold text-purple-600">15+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                    <p className="text-2xl font-bold text-purple-600">500+</p>
                    <p className="text-sm text-gray-600">Events Managed</p>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
                    <p className="text-2xl font-bold text-purple-600">100+</p>
                    <p className="text-sm text-gray-600">Artists Network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-purple-600">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600">
                To deliver exceptional entertainment experiences that create lasting memories for our clients and their guests. We strive to connect the right talent with the right audience, ensuring every event is a spectacular success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-pink-600">
              <div className="flex items-center mb-4">
                <div className="bg-pink-100 p-3 rounded-full mr-4">
                  <Star className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600">
                To become India's most trusted and innovative entertainment solutions provider, setting new benchmarks in quality, professionalism, and client satisfaction across all types of events.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Excellence</h4>
                <p className="text-sm text-gray-600">Committed to delivering top-quality entertainment</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-pink-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Trust</h4>
                <p className="text-sm text-gray-600">Building lasting relationships with clients and artists</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Innovation</h4>
                <p className="text-sm text-gray-600">Constantly evolving to meet industry trends</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-8 w-8 text-indigo-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Passion</h4>
                <p className="text-sm text-gray-600">Driven by love for entertainment and events</p>
              </div>
            </div>
          </div>
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

export default About;
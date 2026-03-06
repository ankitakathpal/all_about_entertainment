import React, { useState } from "react";
import { Menu, X, Phone, Mail, MapPin, Instagram, Youtube, Linkedin, Facebook, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const galleryImages = [
    "/images/gallery1.jpeg",
    "/images/gallery2.jpeg",
    "/images/gallery3.jpeg",
    "/images/gallery4.jpeg",
    "/images/gallery5.jpeg",
    "/images/gallery6.jpeg",
    "/images/gallery7.jpg",
    "/images/gallery8.jpg",
    "/images/gallery9.jpg",
    "/images/gallery11.jpg",
    "/images/gallery10.jpg",
    "/images/gallery12.jpg",
    
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/logo.png" alt="All About Entertainment Logo" className="w-52 h-auto object-contain" />
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
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
              <div className="px-4 pt-2 pb-4 space-y-1">
                <Link to="/" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded font-medium transition-colors uppercase text-sm">Home</Link>
                <Link to="/about" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded font-medium transition-colors uppercase text-sm">About</Link>
                <Link to="/services" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded font-medium transition-colors uppercase text-sm">Services</Link>
                <Link to="/artists" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded font-medium transition-colors uppercase text-sm">Artists</Link>
                <Link to="/gallery" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded font-medium transition-colors uppercase text-sm">Gallery</Link>
                <Link to="/contact" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded font-medium transition-colors uppercase text-sm">Contact</Link>
                <div className="pt-3">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded font-semibold hover:shadow-lg transition-all uppercase text-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Event Gallery
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform">
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
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
                <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
                <li><Link to="/artists" className="text-gray-400 hover:text-white transition">Artists</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
                <li><Link to="/gallery" className="text-gray-400 hover:text-white transition">Gallery</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> +91 93545 98380</li>
                <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> info@allaboutentertainment.com</li>
                <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> Delhi, India</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition"><Youtube className="h-5 w-5" /></a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition"><Linkedin className="h-5 w-5" /></a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition"><Facebook className="h-5 w-5" /></a>
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

export default Gallery;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  Menu,
  X,
  SendHorizontal,
  Clock
} from "lucide-react";

const allArtists = [
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
    category: "Anchor",
    genre: "Bollywood & Corporate",
    image: "/images/naina.jpeg"
  },
  {
    id: "dj-hitesh",
    name: "DJ Hitesh",
    category: "DJ",
    genre: "Bollywood",
    image: "/images/hitesh.jpeg"
  },
   {
    id: "dj-dheeraj",
    name: "DJ Dheeraj",
    category: "DJ",
    genre: "Bollywood",
    image: "/images/dheeraj.jpeg",
  },
  {
    id: "himanshu",
    name: "Himanshu",
    category: "Guitarist",
    genre: "Bollywood",
    image: "/images/himanshu.jpeg",
  },
  {
    id: "sunny",
    name: "Sunny",
    category: "Percussionist",
    genre: "Bollywood",
    image: "/images/sunny.jpeg",
  }
];

function Artists() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Added for mobile responsiveness later

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
              <a href="#" className="hover:text-purple-400 transition"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="hover:text-purple-400 transition"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="hover:text-purple-400 transition"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="hover:text-purple-400 transition"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Logo" 
                className="w-52 h-auto object-contain"
              />
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
          </div>
        </div>
      </nav>

      {/* Artists Content */}
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Our Artists</h1>
          <div className="grid md:grid-cols-3 gap-8">
            {allArtists.map((artist) => (
              <div key={artist.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
                <img src={artist.image} alt={artist.name} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{artist.name}</h3>
                  <p className="text-purple-600 font-semibold">{artist.category}</p>
                  <p className="text-gray-600 text-sm">{artist.genre}</p>
                 <Link
  to={`/book?artist=${encodeURIComponent(artist.name)}`}
  className="mt-4 inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
>
  Book Artist
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <span className="text-xl font-bold">All About Entertainment</span>
              <p className="text-gray-400 mt-4">Creating unforgettable moments through world-class entertainment</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/services" className="hover:text-white">Services</Link></li>
                <li><Link to="/artists" className="hover:text-white">Artists</Link></li>
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
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600"><Youtube className="h-5 w-5" /></a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600"><Linkedin className="h-5 w-5" /></a>
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
}

export default Artists;
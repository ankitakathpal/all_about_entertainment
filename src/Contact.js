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

const Contact = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


 const handleSubmit = async (e) => {
  e.preventDefault();

  let newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Enter a valid email";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!/^[0-9]{10}$/.test(formData.phone)) {
    newErrors.phone = "Enter a valid 10 digit phone number";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) return;

  try {
    const res = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } else {
      alert("Failed to send message");
    }
  } catch (err) {
    alert("Backend not running");
  }
};

  return (
    <div className="bg-white min-h-screen">

      {/* ---------------------- TOP BAR ---------------------- */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Left */}
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

            {/* Right */}
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
            <img src="/logo.png" alt="Logo" className="w-52 h-auto object-contain" />

                       
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

      {/* ---------------------- HERO HEADER ---------------------- */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-500 py-14 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Have a question or planning an event? We're here to help.
        </p>
      </header>

      {/* ---------------------- CONTACT SECTION ---------------------- */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE – Contact Form */}
          <div className="bg-white shadow-xl p-10 rounded-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
            <input
  type="text"
  name="name"
  placeholder="Your Name"
  value={formData.name}
  onChange={handleChange}
  className="w-full px-4 py-3 rounded-md border"
/>
{errors.name && (
  <p className="text-red-500 text-sm">{errors.name}</p>
)}

<input
  type="email"
  name="email"
  placeholder="Your Email"
  value={formData.email}
  onChange={handleChange}
  className="w-full px-4 py-3 rounded-md border"
/>
{errors.email && (
  <p className="text-red-500 text-sm">{errors.email}</p>
)}


<input
  type="text"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
  className="w-full px-4 py-3 rounded-md border"
/>
{errors.phone && (
  <p className="text-red-500 text-sm">{errors.phone}</p>
)}

 
<textarea
  rows="5"
  name="message"
  placeholder="Your Message..."
  value={formData.message}
  onChange={handleChange}
  className="w-full px-4 py-3 rounded-md border"
/>
{errors.message && (
  <p className="text-red-500 text-sm">{errors.message}</p>
)}

<button
  type="submit"
  className="w-full py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transition flex items-center justify-center gap-2"
>
  Send Message <SendHorizontal className="h-5 w-5" />
</button>

            </form>
          </div>

          {/* RIGHT SIDE – Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">Get in Touch</h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Whether it's an event inquiry, artist booking, or collaboration —
                we respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-700">+91 93545 98380</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-700">info@allaboutentertainment.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-900">Office</p>
                  <p className="text-gray-700">Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-purple-600" />
                <div>
                  <p className="font-semibold text-gray-900">Working Hours</p>
                  <p className="text-gray-700">Mon – Sat: 10:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-4">
              <a className="p-3 bg-gray-100 rounded-full hover:bg-purple-600 hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a className="p-3 bg-gray-100 rounded-full hover:bg-purple-600 hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a className="p-3 bg-gray-100 rounded-full hover:bg-purple-600 hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a className="p-3 bg-gray-100 rounded-full hover:bg-purple-600 hover:text-white transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>
      </section>
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

export default Contact;

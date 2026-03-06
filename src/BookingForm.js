import React, { useState } from "react";
import { Phone } from "lucide-react";
import { useLocation } from "react-router-dom";

const BookingForm = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const artistNameFromURL = params.get("artist");

  const [formData, setFormData] = useState({
    artistName: artistNameFromURL || "",
    name: "",
    phone: "",
    eventType: "",
    eventDate: "",
    artistCategory: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/book-artist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
  ...formData,
  sendToSheets: true,
}),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Booking request submitted successfully!");
        setFormData({
          artistName: artistNameFromURL || "",
          name: "",
          phone: "",
          eventType: "",
          eventDate: "",
          artistCategory: "",
          budget: "",
          message: "",
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book an Artist
          </h2>
          <p className="text-xl text-gray-600">
            Share your event details and we’ll get back within 24 hours
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 outline-none"
                  placeholder="Your name"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 outline-none"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Event Type */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Event Type *
                </label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 outline-none"
                >
                  <option value="">Select event</option>
                  <option>Corporate Event</option>
                  <option>Wedding</option>
                  <option>College Fest</option>
                  <option>Private Function</option>
                </select>
              </div>

              {/* Event Date */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 outline-none"
                />
              </div>

              {/* Artist Category */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Artist Category
                </label>
                <select
                  name="artistCategory"
                  value={formData.artistCategory}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 outline-none"
                >
                  <option value="">Select category</option>
                  <option>Singer</option>
                  <option>DJ</option>
                  <option>Dancer</option>
                  <option>Comedian</option>
                  <option>Anchor</option>
                  <option>Live Band</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 outline-none"
                >
                  <option value="">Select budget</option>
                  <option>Under ₹50,000</option>
                  <option>₹50,000 - ₹1,00,000</option>
                  <option>₹1,00,000 - ₹3,00,000</option>
                  <option>₹3,00,000+</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-gray-700 font-semibold mb-2">
                Additional Details
              </label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 outline-none"
                placeholder="Tell us more about your event..."
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-6 bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition shadow-lg"
            >
              Submit Booking Request
            </button>

            <div className="mt-6 text-center">
  <p className="text-gray-600 mb-4">Or contact us directly:</p>

  <div className="flex gap-4 justify-center">

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
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;

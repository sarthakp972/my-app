import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">

      {/* Top Divider */}
      <div className="contact-divider"></div>

      {/* Heading */}
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-subtitle">We're always here to assist you</p>

      <div className="contact-wrapper">

        {/* LEFT SIDE — Contact Info */}
        <div className="contact-info">

          <h3 className="section-heading">Reach Us</h3>

          <p className="info-item"><span>📍 Address:</span> Narsinghpur, Madhya Pradesh, India</p>
          <p className="info-item"><span>📞 Mobile:</span> +91 9876543210</p>
          <p className="info-item"><span>📧 Email:</span> bushramehendiart@gmail.com</p>

          <div className="social-icons">
            <a href="#" className="social-icon">📸 Instagram</a>
            <a href="#" className="social-icon">💬 WhatsApp</a>
            <a href="#" className="social-icon">📘 Facebook</a>
          </div>

          <h3 className="section-heading mt-10">Find Us on Map</h3>

          <div className="map-box">
            <iframe
              className="map-iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.443001366514!2d79.190!3d22.949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b1a4d8ec9999%3A0xac86b909!2sNarsinghpur%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        {/* RIGHT SIDE — Feedback Form */}
        <div className="contact-form">

          <h3 className="section-heading">Send Us a Message</h3>

          <form className="form-box">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Mobile Number</label>
            <input type="text" placeholder="Enter mobile number" required />

            <label>Your Message</label>
            <textarea rows="5" placeholder="Write your message..." required></textarea>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>

        </div>

      </div>

      {/* Bottom Divider */}
      <div className="contact-divider bottom-divider"></div>
    </div>
  );
}

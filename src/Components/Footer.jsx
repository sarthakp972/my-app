import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebookF, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">

        {/* Logo & Brand */}
        <div className="footer-brand">
          <h2>
            <span className="gold">Bushra</span> Mehendi Art
          </h2>
          <p>Luxury Mehendi Services Since 2015</p>
        </div>

        {/* Navigation */}
        <div className="footer-nav">
          <h4 className="gold">Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutus">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4 className="gold">Contact Us</h4>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaEnvelope /> info@bhushramehendi.com</p>
          <p><FaWhatsapp /> +91 98765 43210</p>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4 className="gold">Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>

      </div>

      {/* Bottom Note */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Bushra Mehendi Art. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

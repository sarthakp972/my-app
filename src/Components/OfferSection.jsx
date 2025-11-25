import React from "react";
import { motion } from "framer-motion";
import "./OfferSection.css";
import { WHATSAPP_NUMBER } from "../constant";
import { useNavigate } from "react-router-dom";

export default function OfferSection() {
  const navigate = useNavigate();

  const handleWhatsAppRedirect = (title) => {
    const message = `Hello, I want to know more about the offer: ${title}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const handleMoreOffersRedirect = () => {
    navigate("/services");
  };

  return (
    <section className="offer-section">
      <div className="gold-divider"></div>

      <motion.h2
        className="offer-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Exclusive <span>Mehendi</span> Offers
      </motion.h2>

      <div className="offer-container">

        {/* CARD 1 */}
        <motion.div
          className="offer-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <span className="discount-badge">✨ 20% OFF</span>
          <h3>Bridal Full Hand</h3>
          <p>Get luxury bridal mehendi with premium detailing.</p>
          <button
            className="offer-btn"
            onClick={() => handleWhatsAppRedirect("Bridal Full Hand")}
          >
            Grab This Offer
          </button>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          className="offer-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <span className="discount-badge">✨ 15% OFF</span>
          <h3>Arabic Mehendi</h3>
          <p>Elegant Arabic designs with smooth shading effects.</p>
          <button
            className="offer-btn"
            onClick={() => handleWhatsAppRedirect("Arabic Mehendi")}
          >
            Grab This Offer
          </button>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          className="offer-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <span className="discount-badge">✨ 10% OFF</span>
          <h3>Festival</h3>
          <p>Simple & stylish mehendi for all occasions.</p>
          <button
            className="offer-btn"
            onClick={() => handleWhatsAppRedirect("Festival")}
          >
            Grab This Offer
          </button>
        </motion.div>

        {/* MORE OFFERS CARD */}
        <motion.div
          className="offer-card more-offers"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          onClick={handleMoreOffersRedirect}
        >
          <h3>✨ More Offers</h3>
          <p>Explore all our mehendi services and packages.</p>
          <button className="offer-btn">View All Services</button>
        </motion.div>

      </div>
    </section>
  );
}

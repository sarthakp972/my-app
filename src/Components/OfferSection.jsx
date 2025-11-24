import React from "react";
import { motion } from "framer-motion";
import "./OfferSection.css";

export default function OfferSection() {
  return (
    <section className="offer-section">
        <div className="gold-divider"></div>


      {/* Title */}
      <motion.h2
        className="offer-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Exclusive <span>Mehendi</span> Offers
      </motion.h2>

      {/* Offer Cards */}
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
          <button className="offer-btn">Book Now</button>
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
          <button className="offer-btn">Grab This Offer</button>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          className="offer-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <span className="discount-badge">✨ 10% OFF</span>
          <h3>Party Mehendi</h3>
          <p>Simple & stylish mehendi for all occasions.</p>
          <button className="offer-btn">Book Appointment</button>
        </motion.div>

      </div>
    </section>
  );
}

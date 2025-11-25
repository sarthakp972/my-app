import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER, EMAIL,YOUTUBE_LINK, ADDRESS, INSTAGRAM_LINK,CALLING_NUMBER, WHATSAPP_MESSAGE,GOOGLE_MAP_LINK} from "../constant";

export default function ServicePromotion() {
  const navigate = useNavigate();

  const whatsappNumber = WHATSAPP_NUMBER; 
  const contactNumber = CALLING_NUMBER; 

  const whatsappMessage = `Hello, I want to book your Mehendi Service. Please share the details.`;

  return (
    <div
      className="container text-center py-5"
      style={{
        background: "#0d0d0d",
        color: "white",
        borderRadius: "20px",
        marginTop: "40px",
        padding: "40px",
        border: "2px solid #d4af37",
      }}
    >
      <motion.h2
        className="fw-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ color: "#d4af37", fontFamily: "'Cinzel Decorative', serif" }}
      >
        We Provide Services All Over India 🇮🇳
      </motion.h2>

      <p className="mt-3 fs-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
        Take our premium Mehendi services anywhere in India.  
        You can enquire, see all services, or directly book through WhatsApp.
      </p>

      {/* BUTTONS SECTION */}
      <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">

        {/* SEE ALL SERVICES */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/services")}
          className="btn"
          style={{
            background: "#d4af37",
            color: "#0d0d0d",
            fontWeight: "600",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          See All Services
        </motion.button>

        {/* SERVICE ENQUIRY */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/contact")}
          className="btn btn-outline-light"
          style={{
            border: "2px solid #d4af37",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          Service Enquiry
        </motion.button>

        {/* WHATSAPP BOOKING */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noreferrer"
          className="btn"
          style={{
            background: "#25D366",
            color: "white",
            fontWeight: "600",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          Book Service via WhatsApp
        </motion.a>

        {/* GALLERY BUTTON */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={() => navigate("/gallery")}
          className="btn btn-light"
          style={{
            color: "#0d0d0d",
            fontWeight: "600",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          Check Our Designs (Gallery)
        </motion.button>
      </div>

      {/* CONTACT SECTION */}
      <p className="mt-4 fs-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
        For more questions, call us at:  
        <span style={{ color: "#d4af37", fontWeight: "700" }}> {contactNumber} </span>
      </p>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER, EMAIL, INSTAGRAM_LINK, YOUTUBE_LINK, CALLING_NUMBER, ADDRESS ,urlWhatsapp ,ProductsImages} from "../constant";


export default function Product() {
  return (
    <div style={{ position: "relative", fontFamily: "'Poppins', sans-serif" }}>
      {/* Background Video */}
      <video
        src="https://res.cloudinary.com/dxahh0nqj/video/upload/v1764094587/home_page_video_vvvqab.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          filter: "brightness(0.5)", // dim video for contrast
        }}
      />

      {/* Content Overlay */}
      <div className="container py-5" style={{ position: "relative", zIndex: 1, }}>
        <h2
          className="text-center mb-5"
          style={{ color: "#d4af37", fontFamily: "'Cinzel Decorative', serif" }}
        >
          Our Premium Mehendi Designs
        </h2>

        <div className="row g-4">
          {ProductsImages.map((item, index) => (
            <div key={index} className="col-md-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{
                  background: "rgba(13, 13, 13, 0.85)", // semi-transparent black
                  border: "2px solid #d4af37",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 0 25px rgba(212, 175, 55, 0.4)",
                  cursor: "pointer",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-fluid"
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />

                <div className="p-4 text-center">
                  <h4
                    style={{
                      color: "#d4af37",
                      fontFamily: "'Cinzel Decorative', serif",
                      letterSpacing: "1px",
                      marginBottom: "15px",
                    }}
                  >
                    {item.name}
                  </h4>

                  <motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  style={{
    background: "#d4af37",
    color: "#0d0d0d",
    border: "none",
    padding: "10px 30px",
    borderRadius: "25px",
    fontWeight: "600",
    boxShadow: "0 0 12px rgba(212, 175, 55, 0.5)",
    cursor: "pointer",
  }}
  onClick={() => {
    alert(`${item.name} , Go to whatsapp!`);
    window.open(`${urlWhatsapp}?text=${encodeURIComponent(`Hi, I want to book ${item.name}`)}`, "_blank");
  }}
>
  BOOK NOW
</motion.button>

                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

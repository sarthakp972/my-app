import React from "react";
import { motion } from "framer-motion";

// Sample Product Data
const productData = [
  { name: "Bridal Mehendi Pattern 01", image: "/product1.jpeg" },
  { name: "Arabic Mehendi Style", image: "/product2.jpeg" },
  { name: "Floral Design Collection", image: "/product1.jpeg" },
  { name: "Pakistani Mehendi Style", image: "/product2.jpeg" },
  { name: "Mumbai Special Designs", image: "/product1.jpeg" },
  { name: "Hibiscus Collection", image: "/product2.jpeg" },
];

export default function Product() {
  return (
    <div style={{ position: "relative", fontFamily: "'Poppins', sans-serif" }}>
      {/* Background Video */}
      <video
        src="/7.mp4"
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
          {productData.map((item, index) => (
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
                    onClick={() => alert(`${item.name} added to cart!`)}
                  >
                    Add to Cart
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

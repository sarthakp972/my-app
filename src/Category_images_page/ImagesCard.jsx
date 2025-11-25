import React from "react";
import { motion } from "framer-motion";
import "./ImagesCard.css";

export default function ImagesCard({ image, title }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, boxShadow: "0 12px 30px rgba(255,215,0,0.5)" },
  };

  return (
    <motion.div
      className="image-card"
      initial={false}
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      variants={cardVariants}
    >
      <img src={image} alt={title} className="card-img" />
    </motion.div>
  );
}

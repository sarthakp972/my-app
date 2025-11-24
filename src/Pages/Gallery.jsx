// src/components/Gallery.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Gallery.css";


const images = [
  { id: 1, src: "/product1.jpeg", alt: "Bridal Mehendi 1" },
  { id: 2, src: "/product1.jpeg", alt: "Arabic Design 2" },
  { id: 3, src: "/product1.jpeg", alt: "Floral Design 3" },
  { id: 4, src: "/product1.jpeg", alt: " Style 4" },
  { id: 5, src: "/product1.jpeg", alt: "Mumbai Special 5" },
  { id: 6, src: "/product1.jpeg", alt: "Hibiscus 6" },
  // add more images as needed
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null); // index in images or null
  const [isKeyboardActive, setKeyboardActive] = useState(true);

  // trap escape to close lightbox, arrow keys to navigate
  useEffect(() => {
    function onKey(e) {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? null : Math.min(i + 1, images.length - 1)));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? null : Math.max(i - 1, 0)));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex]);

  // download image (same-origin assumed - public folder)
  const downloadImage = (src, filename) => {
    // create anchor and click
    const link = document.createElement("a");
    link.href = src;
    link.download = filename || src.split("/").pop();
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  // framer motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05 } }),
    hover: { scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.45)" },
    tap: { scale: 0.98 },
  };

  const lightboxVariants = {
    enter: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.18 } },
  };

  return (
    <div className="gallery-root">
      <h2 className="gallery-title">Our Gallery</h2>

      <div className="gallery-grid" role="list">
        {images.map((img, idx) => (
          <motion.div
            key={img.id}
            className="gallery-card"
            role="listitem"
            custom={idx}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            variants={cardVariants}
            onClick={() => setLightboxIndex(idx)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setLightboxIndex(idx);
            }}
            aria-label={`Open ${img.alt}`}
          >
            <div className="img-wrap">
              <img src={img.src} alt={img.alt} loading="lazy" className="gallery-img" />
            </div>

            <div className="card-meta">
              <div className="meta-left">
                <strong className="meta-title">{img.alt}</strong>
              </div>
              <div className="meta-actions">
                <button
                  className="download-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent opening lightbox
                    downloadImage(img.src, `${img.alt.replace(/\s+/g, "_")}.jpg`);
                  }}
                  aria-label={`Download ${img.alt}`}
                >
                  ⤓
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="lightbox-overlay"
            initial="enter"
            animate="visible"
            exit="exit"
            variants={lightboxVariants}
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="lightbox-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
            >
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                className="lightbox-image"
              />

              <div className="lightbox-controls" aria-hidden={!isKeyboardActive}>
                <button
                  className="lb-btn"
                  onClick={() => setLightboxIndex((i) => (i > 0 ? i - 1 : i))}
                  disabled={lightboxIndex === 0}
                  aria-label="Previous image"
                >
                  ‹
                </button>

                <button
                  className="lb-download"
                  onClick={() =>
                    downloadImage(images[lightboxIndex].src, `${images[lightboxIndex].alt.replace(/\s+/g, "_")}.jpg`)
                  }
                  aria-label="Download image"
                >
                  Download
                </button>

                <button
                  className="lb-btn"
                  onClick={() => setLightboxIndex((i) => (i < images.length - 1 ? i + 1 : i))}
                  disabled={lightboxIndex === images.length - 1}
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>

              <button
                className="lb-close"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close"
                title="Close"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

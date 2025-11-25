// src/components/Gallery.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

import {
  bridalImages,
  arabicImages,
  babyShowerGodhImages,
  CustomizedMehendi,
  EngagementRokaImages,
  FestivalImages,
  IndianTraditionalImages,
  IndoArabicImages,
  MehendiClassesWorkshopImages,
  MehendiForKidsImages,
  PortraitImages,
  SangeetWeddingImages,
} from "../constant";

const allGalleryImages = [
  ...bridalImages,
  ...arabicImages,
  ...babyShowerGodhImages,
  ...CustomizedMehendi,
  ...EngagementRokaImages,
  ...FestivalImages,
  ...IndianTraditionalImages,
  ...IndoArabicImages,
  ...MehendiClassesWorkshopImages,
  ...MehendiForKidsImages,
  ...PortraitImages,
  ...SangeetWeddingImages,
];

export default function GalleryPage() {
  const [visibleCount, setVisibleCount] = useState(10);

  const loadMore = () => setVisibleCount((p) => p + 10);

  return (
    <div className="w-full py-12 royal-bg">
      <h2 className="text-center text-4xl font-bold mb-10 royal-title">
        Our Gallery
      </h2>

      {/* Image Grid */}
      <div className="gallery-grid px-4">
        {allGalleryImages.slice(0, visibleCount).map((img) => (
          <motion.div
            key={img.id}
            className="gallery-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img src={img.image} alt={img.title} className="gallery-img" />
            <p className="gallery-title">{img.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < allGalleryImages.length && (
        <div className="text-center mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.93 }}
            onClick={loadMore}
            className="load-more-btn"
          >
            Load More
          </motion.button>
        </div>
      )}
    </div>
  );
}

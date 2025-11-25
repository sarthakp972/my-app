import React from "react";
import { motion } from "framer-motion";
import "./HomeVideo.css";
import { videos } from "../constant";

export default function HomeVideo() {

  return (
    <section className="luxury-video-section">

      {/* LEFT TEXT SECTION */}
      <motion.div
        className="luxury-text"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="luxury-title">
         ROYAL <span>MEHENDI</span> HIGHLIGHTS   
        </h1>
        <p className="luxury-sub">
           Experience beautiful mehendi art that blends traditional and modern styles. Our designs are elegant and luxurious, perfect for your special day. Get stunning mehendi art that leaves a lasting impression.
        </p>
      </motion.div>

      {/* INFINITE SCROLLING VIDEO SLIDER */}
      <div className="video-scroll-wrapper">
        <div className="video-scroll-track">
          {[...videos, ...videos].map((src, i) => (
            <div className="video-box" key={i}>
              <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="luxury-video"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

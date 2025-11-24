import React from "react";
import { motion } from "framer-motion";
import "./HomeVideo.css";

export default function HomeVideo() {
  const videos = [
    "/all_videos/video1.mp4",
    "/all_videos/video2.mp4",
    "/all_videos/video3.mp4",
    "/all_videos/video4.mp4",
    "/all_videos/video5.mp4",
    "/all_videos/video6.mp4",
    "/all_videos/video7.mp4",
    "/all_videos/video8.mp4",
    "/all_videos/video9.mp4",
    "/all_videos/video10.mp4",
    "/all_videos/video11.mp4",
    "/all_videos/video12.mp4",
    "/all_videos/video13.mp4",

    "/all_videos/video14.mp4",
    "/all_videos/video15.mp4",
    "/all_videos/video16.mp4",
    "/all_videos/video17.mp4",
    "/all_videos/video18.mp4",
  ];

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
          Royal <span>Mehendi</span> Moments
        </h1>
        <p className="luxury-sub">
          Experience the elegance of luxury bridal & traditional mehendi artistry.
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

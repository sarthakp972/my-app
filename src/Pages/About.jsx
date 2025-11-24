import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="about-title"
        >
          Bushra Mehendi Art
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="about-subtitle"
        >
          Since 2002 • Traditional • Elegant • Premium Designs
        </motion.p>
      </section>

      {/* Main Content */}
      <Container className="about-section">
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-title">Get Ready for the Traditional Art of Mehendi</h2>
              <p className="section-text">
                Our team consists of <span className="highlight">20 female artists</span> with 
                <span className="highlight"> 10+ years of experience</span> working all over India.
                Our talented artists ensure that every bride receives a stunning mehendi design 
                that complements her personality and enhances her beauty.
              </p>

              <p className="section-text">
                From intricate traditional patterns to modern designs, 
                <span className="highlight">Bushra Mehendi Art</span> offers endless options for every bride.
              </p>
            </motion.div>
          </Col>

          <Col md={6}>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="about-img-box"
            >
              <Image 
                src="https://lh6.googleusercontent.com/LBhO2mGUOqGUy_eIssKnZp2PPA2iZAZtnfnaxmcTV6MGW-rDMwMArrBLpQ760XL4Eh9vA4j0nyh8SO-Q02n1tTSdjUqr8XSDeQdJK0AyF1_qoEDMKALTNXgeQAPdlrdUMk0HpwzjdisQ9NsdNB8ZqotmiozckI1HwdirLiu_FJEmQGqx9ojQMuPpNXV7TQ" 
                alt="Mehendi Art p" 
                fluid 
                className="about-img"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Why Us */}
      <section className="why-us">
        <h2 className="section-title center">Why Choose Us?</h2>

        <div className="why-items">
          {[
            "Experienced Artists",
            "Premium Quality Henna",
            "100% Natural Mehendi",
            "Professional Bridal Services",
            "Creative & Custom Designs",
            "Nationwide Service Experience"
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="why-card"
            >
              <h4>{item}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Design Types */}
      <section className="design-types">
        <h2 className="section-title center">Available Designs</h2>

        <div className="design-list">
          {["Floral", "Pakistani", "Arabic", "Mumbai Pattern", "Hibiscus"].map((d, i) => (
            <motion.div 
              key={i}
              className="design-box"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {d}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

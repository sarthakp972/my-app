import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import "./About.css";
import { AboutSectionImages } from "../constant";
export default function About() {
  return (
    <div className="about-page">
     
      <section className="about-hero">
        <motion.h1 
          initial={false}
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
          Since 2015 • Traditional • Elegant • Premium Designs
        </motion.p>
      </section>

 <Container className="about-section">
  <Row className="align-items-center">
    <Col md={6}>
      <motion.div 
          initial={false}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="section-title">Experience the Art of Exquisite Mehendi</h2>
        
        <p className="section-text">
          Our team comprises <span className="highlight">20 skilled female artists</span> with 
          <span className="highlight"> over 10 years of experience</span> across India. Each artist brings 
          exceptional creativity and precision, ensuring every bride receives a personalized and stunning 
          mehendi design that enhances her beauty on her special day.
        </p>

        <p className="section-text">
          From intricate traditional patterns to contemporary designs, 
          <span className="highlight">Bushra Mehendi Art</span> offers a wide range of options to suit every bride’s 
          taste and style.
        </p>

        <p className="section-text">
          What sets us apart is our commitment to client satisfaction. We carefully listen to each bride’s 
          ideas and preferences, translating them into unique, personalized designs. Our attention to detail 
          and dedication to creating a memorable experience has earned us a loyal clientele over the years.
        </p>
      </motion.div>
    </Col>

          <Col md={6}>
            <motion.div 
               initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="about-img-box"
            >
              <Image 
                src={AboutSectionImages}
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
          {["Floral", "Bridal Mehendi", "Arabic", "Mumbai Pattern", "Hibiscus" ,"More"].map((d, i) => (
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

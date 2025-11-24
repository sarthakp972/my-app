
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImagesCard from "./ImagesCard";
// import "./ServicePage.css";


const bridalImages = [
  { id: 1, image: "/product1.jpeg", title: "Full Hand Bridal Mehendi" },
  { id: 2, image: "/product2.jpeg", title: "Feet Bridal Mehendi" },
  { id: 3, image: "/product3.jpeg", title: "Customised Bridal Mehendi" },
];

export default function Bridal() {
  return (
    <div className="service-page-root">
      <Container>
        <h2 className="service-page-title">Bridal Mehendi Gallery</h2>
        <Row className="justify-content-center">
          {bridalImages.map((img) => (
            <Col key={img.id} xs={12} sm={6} md={4} lg={3}>
              <ImagesCard image={img.image} title={img.title} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

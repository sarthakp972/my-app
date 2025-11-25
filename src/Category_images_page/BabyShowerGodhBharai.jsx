
import React from 'react'
import { babyShowerGodhImages} from "../constant";
import ImagesCard from "./ImagesCard";
import { Container, Row, Col } from "react-bootstrap";
function BabyShowerGodhBharai() {
  return (
        <div className="service-page-root">
      <Container>
        <h2 className="service-page-title">Baby Shower Godh Bharai Mehendi Gallery</h2>
        <Row className="justify-content-center">
          {babyShowerGodhImages.map((img) => (
            <Col key={img.id} xs={12} sm={6} md={4} lg={3}>
              {/* Pass single image and title to ImagesCard */}
              <ImagesCard image={img.image} title={img.title} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default BabyShowerGodhBharai
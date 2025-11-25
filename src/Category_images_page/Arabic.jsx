import React from 'react'
import { arabicImages} from "../constant";  
import ImagesCard from "./ImagesCard";
import { Container, Row, Col } from "react-bootstrap";
function Arabic() {
  return (
        <div className="service-page-root">
      <Container>
        <h2 className="service-page-title">Arabic Mehendi Gallery</h2>
        <Row className="justify-content-center">
          {arabicImages.map((img) => (
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

export default Arabic
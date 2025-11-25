
import { MehendiClassesWorkshopImages} from "../constant";
import ImagesCard from "./ImagesCard";
import { Container, Row, Col } from "react-bootstrap";
function MehendiClassesWorkshops() {
  return (
        <div className="service-page-root">
      <Container>
        <h2 className="service-page-title">Mehendi Classes Workshops Mehendi Gallery</h2>
        <Row className="justify-content-center">
          {MehendiClassesWorkshopImages.map((img) => (
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

export default MehendiClassesWorkshops
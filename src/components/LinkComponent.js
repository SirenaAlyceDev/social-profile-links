import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import profile from '../images/IMG_1382-removebg-preview.png';
import "bootstrap/dist/css/bootstrap.min.css";

function SocialLink() {
  return (
    <Container fluid>
      <Row>
        <Col xs="4">
          <img className="img-fluid rounded-circle" src={profile} alt="sirena alyce" />
          <h3 className="description">@sirenaalyce</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button href="">SirenaAlyce.com</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>LinkedIn</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>Twitter</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button>YouTube</Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <Button>Buy Me A Coffee! (or pizza)</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SocialLink;

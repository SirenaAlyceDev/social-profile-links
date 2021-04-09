import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../images/IMG_1382-removebg-preview.png";
import "bootstrap/dist/css/bootstrap.min.css";

function SocialLink() {
  return (
    <Container className="main" fluid>
      <Row className="align-items-center">
        <Col>
          <img
            className="rounded-circle"
            src={profile}
            alt="sirena alyce"
            width="50%"
            height="50%"
          />
          <h3 className="description">@sirenaalyce.io</h3>
        </Col>
      </Row>
      <Row className="m-3">
        <Col>
          <a className="link-button btn" size="sm" href="https://sirenaalyce.com/index.html">
            SirenaAlyce.com
          </a>
        </Col>
      </Row>
      <Row className="m-3">
        <Col>
          <a className="link-button btn" size="sm" href="https://www.linkedin.com/in/sirenaalycegandy/">
            LinkedIn
          </a>
        </Col>
      </Row>
      <Row className="m-3">
        <Col>
          <a className="link-button btn" size="sm" href="https://www.twitter.com/sirenaalyce">
            Twitter
          </a>
        </Col>
      </Row>
      <Row className="m-3">
        <Col>
          <a className="link-button btn" size="sm" href="https://www.youtube.com/sirenaalyce">
            YouTube
          </a>
        </Col>
      </Row>
      <Row className="m-3">
        <Col>
          <a className="link-button btn" size="sm" href="https://www.buymeacoffee.com/sirenaalyce">
            Buy Me A Coffee! (or pizza)
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default SocialLink;

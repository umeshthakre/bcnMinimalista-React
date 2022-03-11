import React from "react";
import {Row, Col, Container} from "reactstrap";

import 'bootstrap-social/bootstrap-social.css';
import "../styles/FooterComponent.css";

const Footer = () => {
  return (
    <div className="site-footer">
      <Container className="footer-container">
        <Row className="footer-row">
          <Col className="footer-icon">
            <a href="http://instagram.com/" target="_blank" rel="noreferrer"
              className="btn btn-social-icon btn-instagram"
            >
              <i className="fa fa-instagram fa-lg"></i>
            </a>
          </Col>
          <Col className="footer-icon">
            <a href="http://facebook.com/" target="_blank" rel="noreferrer"
              className="btn btn-social-icon btn-facebook"
            >
              <i className="fa fa-facebook fa-3x"></i>
            </a>
          </Col>
          <Col className="footer-icon">
            <a href="http://twitter.com/" target="_blank" rel="noreferrer"
              className="btn btn-social-icon btn-twitter"
            >
              <i className="fa fa-twitter fa-3x"></i>
            </a>
          </Col>
          <Col className="footer-icon">
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/" target="_blank" rel="noreferrer"
            >
              <i className="fa fa-envelope fa-3x"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

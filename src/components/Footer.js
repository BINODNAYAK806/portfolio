import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn, FaHackerrank } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/BINODNAYAK806"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/binod-nayak-05754b170/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by BINOD NAYAK</h3>
        </Col>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/BINODNAYAK806"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/binod-nayak-05754b170/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="*"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="*"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaHackerrank />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { IoIosMail } from "react-icons/io";
import { BsFillTelephoneFill } from "react-icons/bs";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Bonjour!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                JE SUIS <strong className="main-name">ATZENHOFFER MARIUS</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Contact</h1>
            <p>
              Restez <span className="purple">connecté</span> avec moi
            </p>

            <ul className="home-about-social-links">

              {/* EMAIL */}
              <li className="social-icons">
                <a
                  href="mailto:atzenhoffermarius@gmail.com"
                  className="icon-colour home-social-icons contact-item"
                >
                  <IoIosMail />
                  <span className="contact-text">
                    atzenhoffermarius@gmail.com
                  </span>
                </a>
              </li>

              {/* TELEPHONE */}
              <li className="social-icons">
                <a
                  href="tel:+33612345678"
                  className="icon-colour home-social-icons contact-item"
                >
                  <BsFillTelephoneFill />
                  <span className="contact-text">
                    +33 7 84 17 04 24
                  </span>
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;

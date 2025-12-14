import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import marius_avatar from "../../Assets/marius_avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETTEZ MOI <span className="purple"> DE </span> M'INTRODUIRE
            </h1>
            <p className="home-about-body">
              En tant qu'étudiant en informatique et réseau, j'apprécie la transformation 
              d'idées en projets solides et performants. Au fil du temps, j'ai acquis des 
              compétences dans diverses technologies et j'ai réalisé que ma véritable passion 
              réside dans le réseau et l'informatique.
              <br />
              <br />

              J’aime travailler aussi bien sur le réseau que sur les opérations informatiques en générales.
              <br />
              <br />
             Mes principaux domaines d'intérêt comprennent le développement 
              <i>
                <b className="purple">
                  {" "}
                 d'applications Web, et le réseau informatique.{" "}
                </b>
              </i>
              
              <br />
              <br />
              
              
              <i>
         
           
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={marius_avatar} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

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

              et j’aime travailler aussi bien sur le réseau que sur les opérations informatiques générales.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Blockchain Solutions,{" "}
                </b>
              </i>
              and exploring new ways to bridge on-chain and off-chain systems.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
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

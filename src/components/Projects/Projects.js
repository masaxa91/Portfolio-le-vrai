import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import quizzcyber from "../../Assets/Projects/Quizz-Cyber.png";
import disfa from "../../Assets/Projects/DISFA.png";
import ninho from "../../Assets/Projects/Site-Ninho.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes recents <strong className="purple">projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row
          className="justify-content-center"
          style={{ paddingBottom: "10px" }}
        >
          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={quizzcyber}
              isBlog={false}
              title="Quizz-Cyber"
              description="Le projet Quizz-Cyber a été créé pour aider les utilisateurs à adopter de bonnes habitudes, de bons comportements et de bonnes pratiques en matière de sécurité informatique."
              demoLink="https://quizz-cyber-oacm.vercel.app/"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={disfa}
              isBlog={false}
              title="Projet site DISFA"
              description="Cette application a été faite pour les personnes du DISFA en collaboration avec les SIO dont Mathys, Hugo, Elliot et Marius pour leurs projet MON ACCROCHE TOUT."
              demoLink="https://disfa.netlify.app/"
            />
          </Col>

          <Col xs={12} sm={6} md={4} className="project-card">
            <ProjectCard
              imgPath={ninho}
              isBlog={false}
              title="Site Ninho"
              description="Site réalisé dans le thème du rappeur Ninho dans le cadre d'un projet scolaire."
              demoLink="https://site-ninho-yw7u.vercel.app/"
            />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;

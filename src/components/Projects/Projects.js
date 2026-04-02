import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Images Dossier Assets
import quizzcyber from "../../Assets/Projects/Quizz-Cyber.png";
import disfa from "../../Assets/Projects/DISFA.png";
import ninho from "../../Assets/Projects/Site-Ninho.png";
import fogDoc from "../../Assets/Doc-FOG-SISR.pdf"; 

// Images Projet FOG et Proxmox (Même dossier que Projects.js)
import fogCover from "./fog-cover.png";
import unicastImg from "./fog-unicast.png";
import multicastImg from "./fog-multicast.png";
import proxmoxCover from "./proxmox-cover.png"; 

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Expertise <strong className="purple">Infrastructure & Réseau </strong>
        </h1>

        <Row className="justify-content-center" style={{ paddingBottom: "50px" }}>
          {/* PROJET FOG - TEXTE DÉTAILLÉ RÉTABLI */}
          <Col lg={4} md={6} className="project-card d-flex">
            <ProjectCard
              imgPath={fogCover}
              title="Infrastructure de Déploiement FOG"
              description="Mise en place d'un serveur de déploiement automatisé via PXE pour l'optimisation de la maintenance d'un parc informatique."
              hasDetails={true}
              imgUnicast={unicastImg}
              imgMulticast={multicastImg}
              docLink={fogDoc}
              detailedExplication="J'ai mis en place cette infrastructure pour automatiser l'installation des postes de travail. Le mode Unicast me permet de cibler une machine précise pour une maintenance rapide, tandis que le mode Multicast diffuse l'image système à l'ensemble des postes connectés en une seule fois. Cette solution optimise drastiquement la bande passante réseau et réduit le temps technique lors d'un déploiement de masse."
            />
          </Col>

          <Col lg={4} md={6} className="project-card d-flex">
            <ProjectCard
              imgPath={proxmoxCover}
              title="Virtualisation & Sécurité (Proxmox/IPFire)"
              description="Déploiement d'un hyperviseur Proxmox VE sécurisé par un pare-feu IPFire virtualisé pour la gestion et la segmentation des flux réseaux."
              hasDetails={false} 
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          Projets <strong className="purple">Développement </strong>
        </h1>

        <Row className="justify-content-center">
          <Col lg={4} md={6} className="project-card d-flex">
            <ProjectCard 
              imgPath={quizzcyber} 
              title="Quizz-Cyber" 
              description="Application de sensibilisation aux bonnes pratiques de la sécurité informatique." 
              demoLink="https://quizz-cyber-oacm.vercel.app/" 
            />
          </Col>
          <Col lg={4} md={6} className="project-card d-flex">
            <ProjectCard 
              imgPath={disfa} 
              title="Projet site DISFA" 
              description="Interface de gestion réalisée pour l'association DISFA en collaboration SIO." 
              demoLink="https://disfa.netlify.app/" 
            />
          </Col>
          <Col lg={4} md={6} className="project-card d-flex">
            <ProjectCard 
              imgPath={ninho} 
              title="Site Ninho" 
              description="Projet vitrine thématique réalisé lors de mon parcours de formation." 
              demoLink="https://site-ninho-yw7u.vercel.app/" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
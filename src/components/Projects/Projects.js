import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import quizzcyber from "../../Assets/Projects/Quizz-Cyber.png";
import disfa from "../../Assets/Projects/DISFA.png";
import ninho from "../../Assets/Projects/Site-Ninho.png";
import fogDoc from "../../Assets/Doc-FOG-SISR.pdf"; 

import fogCover from "./fog-cover.png";
import unicastImg from "./fog-unicast.png";
import multicastImg from "./fog-multicast.png";
import proxmoxCover from "./proxmox-cover.png"; 
import proxmoxImg from "./Proxmox.png";
import pbsImg from "./PBS.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Expertise <strong className="purple">Infrastructure & Réseau </strong>
        </h1>

        <Row className="justify-content-center" style={{ paddingBottom: "50px" }}>
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
              title="Virtualisation avec Proxmox VE"
              description="Déploiement d'un hyperviseur Proxmox VE pour la gestion de machines virtuelles."
              hasDetails={true}
              imgUnicast={proxmoxImg} 
              imgMulticast={pbsImg}   
              detailedExplication="Au sein de cet hyperviseur, j'ai déployé des instances Windows Server ainsi que des services critiques comme GLPI pour la gestion de parc. J'ai également mis en place une stack Docker gérée via Portainer pour la conteneurisation. Pour optimiser les déploiements, j'utilise Cloud-Init afin d'automatiser la configuration des VMs Linux. Enfin, l'ensemble de l'infrastructure est sécurisé et sauvegardé via un Proxmox Backup Server (PBS), garantissant la haute disponibilité des données."
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
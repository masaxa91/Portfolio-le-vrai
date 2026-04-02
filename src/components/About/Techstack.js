import React from "react";
import { Col, Row, ProgressBar } from "react-bootstrap";
// J'ai retiré SiGlpi et ajouté des icônes plus standards (Fa)
import { 
  SiCisco, SiWindows, SiDocker, SiLinux, SiProxmox, 
  SiMariadb, SiPortainer, SiPython, SiPhp, SiHtml5, SiPostgresql
} from "react-icons/si";
import { FaServer, FaShieldAlt, FaNetworkWired } from "react-icons/fa";

function Techstack() {
  const networkSkills = [
    { icon: <SiLinux color="#FCC624" />, name: "Linux (Debian/Ubuntu)", level: 80, isComponent: true },
    { icon: <SiWindows color="#0078D4" />, name: "Windows Server (AD, DNS, GPO)", level: 85, isComponent: true },
    { icon: <SiProxmox color="#E57000" />, name: "Virtualisation (Proxmox & PBS)", level: 85, isComponent: true },
    { icon: <SiCisco color="#1BA0D7" />, name: "Réseau (Cisco Packet Tracer)", level: 70, isComponent: true },
    { icon: <SiPortainer color="#13BEF9" />, name: "Conteneurisation (Docker/Portainer)", level: 55, isComponent: true },
    // Remplacement de SiGlpi par FaShieldAlt (Bouclier pour la gestion/LDAP)
    { icon: <FaShieldAlt color="#FF5733" />, name: "Gestion Parc & LDAP (GLPI)", level: 70, isComponent: true },
    // Remplacement par FaServer (Serveur pour FOG)
    { icon: <FaServer color="#FFFFFF" />, name: "Déploiement (FOG Project)", level: 70, isComponent: true },
    { icon: <SiMariadb color="#003545" />, name: "Bases de données (MariaDB)", level: 50, isComponent: true },
  ];

  const devSkills = [
    { icon: <SiPython color="#3776AB" />, name: "Python ", level: 40, isComponent: true },
    { icon: <SiPhp color="#777BB4" />, name: "PHP ", level: 45, isComponent: true },
    { icon: <SiPostgresql color="#4169E1" />, name: "SQL ", level: 50, isComponent: true },
    { icon: <SiHtml5 color="#E34F26" />, name: "HTML / CSS ", level: 70, isComponent: true },
  ];

  const SkillBar = ({ skill }) => (
    <Col xs={12} md={5} className="tech-bar-container" style={{ 
      margin: "15px", 
      padding: "20px", 
      backgroundColor: "rgba(255, 255, 255, 0.05)", 
      borderRadius: "10px",
      border: "1px solid rgba(190, 80, 244, 0.2)"
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ fontSize: "2.5rem", marginRight: "20px", display: "flex", alignItems: "center" }}>
           {skill.icon}
        </div>
        <div style={{ flexGrow: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <span style={{ fontWeight: "bold", color: "white", fontSize: "1.1em" }}>{skill.name}</span>
            <span style={{ color: "#be50f4", fontWeight: "bold" }}>{skill.level}%</span>
          </div>
          <ProgressBar 
            now={skill.level} 
            style={{ 
              height: "10px", 
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "5px"
            }}
          />
        </div>
      </div>
    </Col>
  );

  return (
    <div style={{ paddingBottom: "50px" }}>
      <h2 className="project-heading" style={{ textAlign: "center", fontSize: "2.2em", marginTop: "40px", marginBottom: "30px" }}>
       <strong className="purple">Systèmes & Réseaux</strong>
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
        {networkSkills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </Row>

      <hr style={{ borderColor: "rgba(190, 80, 244, 0.3)", width: "50%", margin: "auto" }} />

      <h2 className="project-heading" style={{ textAlign: "center", fontSize: "1.8em", marginTop: "50px", marginBottom: "30px" }}>
        <strong className="purple">Développement</strong>
      </h2>
      <Row style={{ justifyContent: "center" }}>
        {devSkills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
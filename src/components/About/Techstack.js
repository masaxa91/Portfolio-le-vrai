import React from "react";
import { Col, Row, ProgressBar } from "react-bootstrap";
import { 
  SiCisco, SiWindows, SiLinux, SiProxmox, 
  SiMariadb, SiPortainer, SiPython, SiPhp, SiHtml5, SiPostgresql,
  SiNextcloud 
} from "react-icons/si";
import { FaServer, FaShieldAlt, FaLock } from "react-icons/fa";

function Techstack() {
  const networkSkills = [
    { icon: <SiLinux color="#FCC624" />, name: "Linux (Debian/Ubuntu)", level: 80 },
    { icon: <SiWindows color="#0078D4" />, name: "Windows Server (AD, DNS, GPO)", level: 85 },
    { icon: <SiProxmox color="#E57000" />, name: "Virtualisation (Proxmox & PBS)", level: 85 },
    { icon: <SiCisco color="#1BA0D7" />, name: "Réseau (Cisco)", level: 70 },
    { icon: <SiPortainer color="#13BEF9" />, name: "Conteneurisation (Docker)", level: 55 },
    { icon: <FaShieldAlt color="#FF5733" />, name: "Gestion Parc (GLPI)", level: 70 },
    { icon: <FaServer color="#FFFFFF" />, name: "Déploiement (FOG Project)", level: 70 },
    { icon: <SiMariadb color="#003545" />, name: "Bases de données (MariaDB)", level: 50 },
    { icon: <SiNextcloud color="#0082C9" />, name: "Cloud Privé (Nextcloud)", level: 75 },
    { icon: <FaShieldAlt color="#FFFFFF" />, name: "Proxy & Filtrage (Squid)", level: 65 },
    { icon: <FaLock color="#be50f4" />, name: "Sécurisation VPN (OpenVPN)", level: 40 },
    // On a maintenant 11 compétences, on en rajoute une 12ème (ex: Active Directory/LDAP) pour faire 3 colonnes x 4 lignes
    { icon: <SiWindows color="#00a1f1" />, name: "Gestion Identités (LDAP)", level: 75 },
  ];

  const devSkills = [
    { icon: <SiPython color="#3776AB" />, name: "Python ", level: 40 },
    { icon: <SiPhp color="#777BB4" />, name: "PHP ", level: 45 },
    { icon: <SiPostgresql color="#4169E1" />, name: "SQL ", level: 50 },
    { icon: <SiHtml5 color="#E34F26" />, name: "HTML / CSS ", level: 70 },
  ];

  const SkillBar = ({ skill }) => (
    /* Changement de md={5} à md={4} pour créer 3 colonnes */
    <Col xs={12} md={4} className="tech-bar-container" style={{ 
      margin: "0px", // On enlève la marge globale pour laisser Bootstrap gérer l'espacement
      padding: "15px", 
    }}>
      <div style={{ 
        padding: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.05)", 
        borderRadius: "10px",
        border: "1px solid rgba(190, 80, 244, 0.2)",
        height: "100%" // Pour que toutes les cases aient la même hauteur
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: "2rem", marginRight: "15px", display: "flex", alignItems: "center" }}>
             {skill.icon}
          </div>
          <div style={{ flexGrow: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ fontWeight: "bold", color: "white", fontSize: "0.9em" }}>{skill.name}</span>
              <span style={{ color: "#be50f4", fontWeight: "bold", fontSize: "0.9em" }}>{skill.level}%</span>
            </div>
            <ProgressBar 
              now={skill.level} 
              style={{ 
                height: "8px", 
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "5px"
              }}
            />
          </div>
        </div>
      </div>
    </Col>
  );

  return (
    <div style={{ paddingBottom: "50px" }}>
      <h2 className="project-heading" style={{ textAlign: "center", fontSize: "2.2em", marginTop: "40px", marginBottom: "30px" }}>
       <strong className="purple">Systèmes & Réseaux</strong>
      </h2>
      <Row style={{ justifyContent: "center", paddingBottom: "40px", paddingLeft: "20px", paddingRight: "20px" }}>
        {networkSkills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </Row>

      <hr style={{ borderColor: "rgba(190, 80, 244, 0.3)", width: "50%", margin: "auto" }} />

      <h2 className="project-heading" style={{ textAlign: "center", fontSize: "1.8em", marginTop: "50px", marginBottom: "30px" }}>
        <strong className="purple">Développement</strong>
      </h2>
      <Row style={{ justifyContent: "center", paddingLeft: "20px", paddingRight: "20px" }}>
        {devSkills.map((skill, index) => (
          <SkillBar key={index} skill={skill} />
        ))}
      </Row>
    </div>
  );
}

export default Techstack;
import React from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub as github } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin as linkedin } from "@fortawesome/free-brands-svg-icons";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="brand">
        {/* <img
          src="https://firebasestorage.googleapis.com/v0/b/ecommerce-eacb4.appspot.com/o/ecommerce%2Flogo-wz.png?alt=media&token=d0543953-17db-43e3-a22a-947d560e980b"
          alt=""
        /> */}
        FECH
      </div>
      <ul className="navbar_section">
        <li>proyectos</li>
        <li>resumen</li>
        <li>contacto</li>
      </ul>
      <ul className="navbar_dev_social">
        <li>
          <a href="https://github.com/freconur" target="_blank">
            <FontAwesomeIcon icon={github} />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/franco-condori-huaraya-a78015164" target="_blank">
            <FontAwesomeIcon icon={linkedin} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export { Navbar };

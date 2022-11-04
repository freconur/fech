import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="photo_perfil_container">
        <img
          className="photo_perfil_image"
          src="https://firebasestorage.googleapis.com/v0/b/ecommerce-eacb4.appspot.com/o/InShot_20221031_111348109.jpg?alt=media&token=f062c11c-a12e-453d-abaf-d1236322989f"
          alt=""
        />
      </div>
      <div className="perfil_info_container">
        <h2>Hola, soy Franco y soy programador Javascript Full Stack</h2>
        <p>
          Soy programador javascript full stack, en mi experiencia vengo
          desarrollando proyectos personales, estoy muy motivado con el
          desarrollo de aplicaciones web, y sigo aprendiendo todos los dias.
        </p>
        <div className="button_container">
          <a href="#contact">
            <button className="contactme_button">contactame</button>
          </a>
          <a href="#projects">
            <button id="projects" className="check_my_work">
              mis proyectos
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export { Header };

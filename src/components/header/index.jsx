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
        <h2>Hola, soy Franco  y soy un programador javascript full stack</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam
          quo atque, dignissimos omnis aut provident consequuntur voluptatum
          saepe soluta beatae vero eveniet similique quis, aliquam ut fugit eos!
          Distinctio.
        </p>
        <div className="button_container">
          <button className="contactme_button">contact me</button>
          <button className="check_my_work">check my projects</button>
        </div>
      </div>
    </div>
  );
};

export { Header };

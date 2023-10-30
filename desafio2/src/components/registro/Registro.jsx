import React from "react";
import Card from "react-bootstrap/Card";
import { SocialButton } from "../socialbutton/SocialButton";
import { Formulario } from "../formulario/Formulario";

export const Registro = () => {
  return (
    <div>
      <Card border="warning" style={{ height: "40rem", width: "30rem" }}>
        <Card.Title>
          <h1>Crea una cuenta</h1>
          <br />
        </Card.Title>
        <br />
        <div>Cuentas</div>
        <br />
        <h5>O usa tu email para registrarte</h5>
        <br />
        <Card.Body>
          <div>
            <Formulario />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

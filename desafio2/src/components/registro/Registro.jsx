import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { SocialButton } from "../socialbutton/SocialButton";
import { Formulario } from "../formulario/Formulario";
import { Alert } from "../alert/Alert";

export const Registro = () => {
  const [error, setError] = useState({
    error: "",
    color: "",
  });

  // console.log(error.error);

  return (
    <div>
      <Card border="warning" style={{ height: "40rem", width: "30rem" }}>
        <Card.Title>
          <h1>Crea una cuenta</h1>
          <br />
        </Card.Title>
        <br />
        <div>
          <SocialButton></SocialButton>
        </div>
        <br />
        <h5>O usa tu email para registrarte</h5>
        <br />
        <Card.Body>
          <div>
            <Formulario setError={setError} />
          </div>
          <br />
          <Alert mensaje={error.error} color={error.color} />
        </Card.Body>
      </Card>
    </div>
  );
};

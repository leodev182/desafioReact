import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Formulario = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const obtenerDato = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();

    if (form.name.trim().length == 0) {
      setError({
        error: "Tu nombre no es válido",
        color: "danger",
      });
      alert("Debes ingresar tu nombre");
    }

    if (form.password != form.confirmPassword) {
      alert("Las contraseñas deben ser iguales");
    }
    // const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    // if (!validEmail.test(form.email)) {
    //   setError(false);
    //   setMensaje("Email incorrecto");

    if (form.email.trim() == "") {
      alert("Debes ingresar tu mail");
    }

    return;
  };

  return (
    <Form onSubmit={submit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="name"
          placeholder="Mariana García "
          onChange={obtenerDato}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="mail"
          placeholder="tuemail@email.com"
          onChange={obtenerDato}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          onChange={obtenerDato}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          name="confirmPassword"
          placeholder="Confirmar password"
          onChange={obtenerDato}
        />
      </Form.Group>
      <Button type="submit" variant="success" className="btn-boots">
        Registrate
      </Button>
    </Form>
  );
};

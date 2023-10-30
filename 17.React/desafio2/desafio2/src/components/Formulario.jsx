import { useState } from "react";

export const Formulario = (setError) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setContra] = useState("");
  const [confirmPassword, setConfirmaContra] = useState("");

  const onChangeName = () => {
    setName(e.target.value);
  };

  const onChangeMail = () => {
    setMail(e.target.value);
  };

  const onChangeContra = () => {
    setContra(e.target.value);
  };

  const onChangeConfirmaContra = () => {
    setConfirmaContra(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (name.trim() == "") {
      setError({
        error: "Tu nombre no es válido",
        color: "danger",
      });
      alert("Debes ingresar tu nombre");
    }

    if (password != confirmPassword) {
      alert("Las contraseñas deben ser iguales");
    }

    if (mail.trim() == "") {
      alert("Debes ingresar tu mail");
    }

    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if (!validEmail.test(email)) {
      setError(true);
      setMensaje("Email incorrecto");
      return;
    }
  };

  return (
    <form>
      <label>Nombre:</label>
      <input
        type="text"
        name="name"
        placeholder="Mariana García "
        onChange={onChangeName}
      />
      <label>Mail:</label>
      <input
        type="text"
        name="mail"
        placeholder="mariana@gmail.com"
        onChange={onChangeMail}
      />
      <label>Contraseña:</label>
      <input
        type="password"
        name="password"
        placeholder="desafiolatam!*"
        onChange={onChangeContra}
      />

      <label>Confirma la contraseña:</label>
      <input
        type="password"
        name="confirmPassword"
        placeholder="desafiolatam!*"
        onChange={onChangeConfirmaContra}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;

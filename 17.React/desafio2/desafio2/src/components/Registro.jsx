import { useState } from "react";
import { Formulario } from "./Formulario";
import Alert from "./Alert";

export const Registro = () => {
  const [error, setError] = useState({
    error: "",
    color: "danger",
  });

  console.log(error);
  return (
    <div>
      <Formulario setError={setError} />
      {error.error != "" && <Alert mensaje={error.error} color={error.color} />}
      <div></div>
    </div>
  );
};

export default Registro;

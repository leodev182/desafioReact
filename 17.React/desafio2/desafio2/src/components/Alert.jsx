import { Alert as AlertBootstrap } from "react-bootstrap/Alert";

const Alert = ({ mensaje }) => {
  return <AlertBootstrap variant="danger">{mensaje}</AlertBootstrap>;
};

export default Alert;

import React from "react";
import AlertB from "react-bootstrap/Alert";

export const Alert = ({ mensaje, color }) => {
  return (
    <AlertB variant={color}>
      <h4>{mensaje}</h4>
    </AlertB>
  );
};

import React from "react";
import "./ErrorComponent.css";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function ErrorComponent({ errorText }) {
  console.log("Error Text: ", errorText);

  const navigate = useNavigate();
  return (
    <div className="errorContainer">
      <div>
        <h4>Something went wrong</h4>
        <p>{errorText}</p>
        <Button variant="success" onClick={() => window.location.reload()}>Go back</Button>
      </div>
    </div>
  );
}

export default ErrorComponent;

import React from "react";
import "./ErrorComponent.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Styles/Button.style";

function ErrorComponent({ errorText }) {
  console.log("Error Text: ", errorText);

  const navigate = useNavigate();
  return (
    <div className="errorContainer">
      <div>
        <h4>Something went wrong</h4>
        <p>{errorText}</p>
        <Button onClick={() => navigate(-1)}>Go back</Button>
      </div>
    </div>
  );
}

export default ErrorComponent;

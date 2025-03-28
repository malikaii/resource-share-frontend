import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Styles/Button.style";
import "../Components/ErrorComponent/ErrorComponent.css";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="errorContainer">
      <div>
        <h4>Oops, this page does not exist.</h4>
        <Button onClick={() => navigate(-1)}>Go to previous page</Button>
      </div>
    </div>
  );
}

export default Error;

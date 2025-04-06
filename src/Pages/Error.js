import React from "react";
import { useNavigate } from "react-router-dom";
import "../Components/ErrorComponent/ErrorComponent.css";
import { Button } from "react-bootstrap";

function Error() {
  const navigate = useNavigate();

  return (
    <div className="errorContainer">
      <div>
        <h4>Oops, this page does not exist.</h4>
        <Button variant="success" onClick={() => navigate(-1)}>Go to previous page</Button>
      </div>
    </div>
  );
}

export default Error;

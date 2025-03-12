import React, { useState } from "react";
import { ExampleCard, StyledCard, exampleCard } from "../Styles/Card.style";
import { StyledForm } from "../Styles/Form.style";
import { Link } from "react-router-dom";
import { useAuth } from "../Components/Auth";
import { useNavigate, useLocation } from "react-router-dom";
function Register() {
  const auth = useAuth();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };


  const signUpRequest = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <>
      {/* <ExampleCard>Click Me!</ExampleCard> */}
      <StyledCard className="cardStyle">
        <div>
          <h3>Create an Account</h3>
        </div>
        <StyledForm onSubmit={signUpRequest}>
          <div>
            <div className="input-group">
              <label for="username">Username </label>
              <input name="username" type="text" onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label for="password">Password </label>
              <input
                type="password"
                name="password"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label for="firstName">First Name </label>
              <input
                type="text"
                name="firstName"
                onChange={handleInputChange}
              />
            </div>
            <div className="input-group">
              <label for="lastName">Last Name </label>
              <input type="text" name="lastName" onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label for="email">Email </label>
              <input type="text" name="email" onChange={handleInputChange} />
            </div>
          </div>
          <div>
            <button type="submit">Sign up!</button>
          </div>
          <div className="footerDiv">
            <Link to="/login">Already have an account? Login</Link>
          </div>
        </StyledForm>
      </StyledCard>
    </>
  );
}

export default Register;

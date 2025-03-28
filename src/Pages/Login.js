import React, { useState } from "react";
import { ExampleCard, StyledCard, exampleCard } from "../Styles/Card.style";
import { StyledForm } from "../Styles/Form.style";
import { Link } from "react-router-dom";
import { useAuth } from "../Components/Auth";
import { useNavigate, useLocation } from "react-router-dom";
function Login() {

    // const auth = useAuth();
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginCredentials((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const redirectPath = location.state?.path || '/'
  console.log(location.state);
  
  const sendLoginRequest = (e) => {
    e.preventDefault();
    // auth.login(loginCredentials)
    navigate(redirectPath, {replace: true})
  };

  return (
    <>
      {/* <ExampleCard>Click Me!</ExampleCard> */}
      <StyledCard className="cardStyle">
        <div>
          <h3>Sign In</h3>
        </div>
        <StyledForm onSubmit={sendLoginRequest}>
          <div>
            <div className="input-group">
              <label for="username">Username </label>
              <input name="username" type="text" onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label for="password">Password </label>
              <input type="password" name="password" onChange={handleInputChange} />
            </div>
          </div>
          <div>
            <button type="submit">Enter</button>
          </div>
          <div className="footerDiv">
            <Link to="/signup">Don't have an account?</Link>
          </div>
        </StyledForm>
      </StyledCard>
    </>
  );
}

export default Login;

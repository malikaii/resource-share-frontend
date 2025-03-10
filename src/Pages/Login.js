import React, { useState } from "react";
import { ExampleCard, StyledCard, exampleCard } from "../Styles/Card.style";
import { StyledForm } from "../Styles/Form.style";

function Login() {
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target
    
    setLoginCredentials(prevValue => {
        return {
            ...prevValue,
            [name]: value
        }

    })
  }
  const sendLoginRequest = (e) => {
    e.preventDefault();
    console.log(loginCredentials);
    
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
            <div>
              <label for="username">Username </label>
              <input name="username" type="text" onChange={handleInputChange} />
            </div>
            <div>
              <label for="password">Password </label>
              <input name="password" type="text"  onChange={handleInputChange}/>
            </div>
          </div>
          <button type="submit">Enter</button>
        </StyledForm>
        <div>
          <footer>Don't have an account? Create one here.</footer>
        </div>
      </StyledCard>
    </>
  );
}

export default Login;

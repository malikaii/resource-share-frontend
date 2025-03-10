import { useState } from "react";
import { StyledCard } from "./Styles/Card.style";
import { AppContainer, GlobalStyles } from "./Styles/GlobalStyles.style";
import Login from "./Pages/Login";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);


  return (
    <AppContainer>
      <GlobalStyles />
      {
        !userLoggedIn? <Login/> : <div><h2>You are logged in!</h2></div>
      }
    </AppContainer>
  );
}

export default App;

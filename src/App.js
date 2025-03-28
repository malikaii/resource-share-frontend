import { useState } from "react";
import { StyledCard } from "./Styles/Card.style";
import { AppContainer, GlobalStyles } from "./Styles/GlobalStyles.style";
import Login from "./Pages/Login";
import { BrowserRouter, Route, Routes, useHist, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import { AuthProvider } from "./Components/Auth";
import Profile from "./Pages/Profile";
import ProtectedRoute from "./Components/ProtectedRoute";
import { NavigationBar } from "./Styles/Navbar.style";
import Navbar from "./Components/Navbar";
import Register from "./Pages/Register";
import Feed from "./Pages/Feed";
import {OktaAuth, toRelativeUrl} from '@okta/okta-auth-js'
import { oktaConfig } from "./lib/oktaConfig";
import { LoginCallback, Security } from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";
import TabComponent from "./Components/TabComponent";
import PostListing from "./Pages/PostListing";
const oktaAuth = new OktaAuth(oktaConfig)
function App() {

  function customAuthHandler() {
    console.log("yay");
    
    navigate("/login")
  }

  const navigate = useNavigate();

  const restoreOriginalUri = async (_okAuth, originalUri) => {
    console.log("It's working");
    
    navigate(toRelativeUrl(originalUri || '/', window.location.origin))
  }

  return (
    <Security
      oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
      onAuthRequired={customAuthHandler}
    >
      {/* <AuthProvider> */}
      <Navbar />

      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/post"
            element={
              <ProtectedRoute>
                <PostListing />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginWidget config={oktaConfig} />} />
          <Route path="/login/callback" element={LoginCallback} />

          {/* <Route path="/signup" element={<Register />} /> */}

          <Route
            path="/feed"
            element={
              <ProtectedRoute>
                <Feed />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <GlobalStyles />
      </AppContainer>
      {/* </AuthProvider> */}
    </Security>
  );
}

export default App;

import { useState } from "react";
import { StyledCard } from "./Styles/Card.style";
import { AppContainer, GlobalStyles } from "./Styles/GlobalStyles.style";
import Login from "./Pages/Login";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import { AuthProvider } from "./Components/Auth";
import Profile from "./Pages/Profile";
import ProtectedRoute from "./Components/ProtectedRoute";
import { NavigationBar } from "./Styles/Navbar.style";
import Navbar from "./Components/Navbar";
import Register from "./Pages/Register";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);


  return (
    <AuthProvider>
      <AppContainer>
        <HashRouter>
          <Navbar />

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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />

            <Route path="*" element={<Error />} />
          </Routes>
        </HashRouter>
        <GlobalStyles />
      </AppContainer>
    </AuthProvider>
  );
}

export default App;

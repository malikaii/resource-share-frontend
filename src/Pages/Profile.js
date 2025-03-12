import React from "react";
import { useAuth } from "../Components/Auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();
  function handleLogout() {
    auth.logout();
    navigate("/");
  }
  return (
    <div>
      <h3>Welcome {auth.user.username}!</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;

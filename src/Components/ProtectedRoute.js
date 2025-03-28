import React from 'react'
import { useAuth } from './Auth';
import { Navigate } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

function ProtectedRoute({children}) {
  const {oktaAuth, authState} = useOktaAuth();
    console.log(authState);

  // if(!authState?.isAuthenticated) {
  //   console.log(authState.isAuthenticated);
    
  //   // return <Navigate to={"/login"}/>
  // }

  return children
}

export default ProtectedRoute;
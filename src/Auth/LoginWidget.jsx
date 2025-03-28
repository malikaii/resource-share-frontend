import { Navigate, redirect } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";

import React from 'react'
import SignInWidget from "./SignInWidget";

function LoginWidget({config}) {

    const {oktaAuth, authState} = useOktaAuth();
    const onSuccess = (tokens) => {
        oktaAuth.handleLoginRedirect(tokens)
        console.log(tokens)
    }

    const onError = (err) => {
      console.log("Sign in error: ", err);
      
    };
    // console.log(authState);
    
    if(!authState) {
        return (
            <p>Loading.....</p>
        )
    }

    
    return authState.isAuthenticated ? 
    <Navigate to={{pathname: '/'}}/>
    :
    <SignInWidget config={config} onSuccess={onSuccess} onError={onError}/>

}

export default LoginWidget;
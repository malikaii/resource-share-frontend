import OktaSignIn from '@okta/okta-signin-widget';
import React, {useEffect, useRef} from 'react'
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import { oktaConfig } from '../lib/oktaConfig';
import { Container } from 'react-bootstrap';

function SignInWidget({onSuccess, onError}) {

    const widgetRef = useRef();

    useEffect(() => {
      if(!widgetRef.current) {
        return false
      }

      const widget = new OktaSignIn(oktaConfig);

      widget.showSignInToGetTokens({
        el: widgetRef.current,

      }).then(onSuccess).catch(onError)

      return () => widget.remove();
    }, [onSuccess, onError])
    
    
    
  return (
    <Container style={{'margin': '25px'}}>
        <div ref={widgetRef}></div>
    </Container>
  )
}

export default SignInWidget;
import OktaSignIn from '@okta/okta-signin-widget';
import React, {useEffect, useRef} from 'react'
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css'
import { oktaConfig } from '../lib/oktaConfig';

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
    <div style={{'margin': '25px'}}>
        <div ref={widgetRef}></div>
    </div>
  )
}

export default SignInWidget;
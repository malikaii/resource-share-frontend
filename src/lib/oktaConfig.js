export const oktaConfig = {
  clientId: "0oanubpcx27JiT2Ux5d7",
  issuer: "https://dev-13475399.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ['openid', 'profile', 'email'],
  pkce: true,
  disableHttpsChecks: true
};
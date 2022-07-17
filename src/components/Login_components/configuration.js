import Amplify , {Auth} from 'aws-amplify';


console.log('aws amplify config');
console.log('hostname: ',window.location.hostname)

const awsConfig = {
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'ap-southeast-1:26d09956-7796-4bf0-a58d-d48ffa65499f',
        
        // REQUIRED - Amazon Cognito Region
        region: 'ap-southeast-1',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'ap-southeast-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'ap-southeast-1_X4PlAY3RN',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: '1nr9emdl7aqvl74n9airikfpac',

        oauth: {
            domain: 'authregisterrider.auth.ap-southeast-1.amazoncognito.com',
            scope: ['register-rider-web/auth.write','openid','profile','email'],
            redirectSignIn: 'http://localhost:3000/callback/',
            redirectSignOut: 'http://localhost:3000/',
            responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }
};

const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === "[::1]" ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );
  
  // Assuming you have two redirect URIs, and the first is for localhost and second is for production
  const [
    localRedirectSignIn,
    productionRedirectSignIn,
  ] = awsConfig.oauth.redirectSignIn.split(",");
  
  const [
    localRedirectSignOut,
    productionRedirectSignOut,
  ] = awsConfig.oauth.redirectSignOut.split(",");

  const updatedAwsConfig = {
    ...awsConfig,
    oauth: {
      ...awsConfig.oauth,
      redirectSignIn: isLocalhost ? localRedirectSignIn : productionRedirectSignIn,
      redirectSignOut: isLocalhost ? localRedirectSignOut : productionRedirectSignOut,
    }
  }
console.log('isLocalhost: ',isLocalhost)
console.log('localRedirectSignIn: ',localRedirectSignIn)
console.log('productionRedirectSignIn: ',productionRedirectSignIn)
console.log('awsConfig.oauth.redirectSignIn.split(","): ',awsConfig.oauth.redirectSignIn.split(","))
  
  
Amplify.configure(updatedAwsConfig);

export default Auth;

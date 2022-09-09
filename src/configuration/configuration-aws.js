import Amplify , {Auth} from 'aws-amplify';

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
            scope: ['register-rider-web/auth.write','register-rider-web/auth.read','openid','profile','email'],
            redirectSignIn: 'https://d2jw790xar9n64.cloudfront.net/',
            redirectSignOut: 'https://d2jw790xar9n64.cloudfront.net/',
            responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        },
};
  
Amplify.configure(awsConfig);

export default Auth;

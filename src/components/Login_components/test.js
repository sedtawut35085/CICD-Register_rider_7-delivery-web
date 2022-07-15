import React from 'react'
// import { Auth } from 'aws-amplify';
import Amplify , {Auth} from 'aws-amplify';

console.log('aws amplify config');

Amplify.configure({
    Auth: {
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: '26d09956-7796-4bf0-a58d-d48ffa65499f',
        
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
            scope: ['register-rider-web/auth.read','register-rider-web/auth.write','openid','profile','email'],
            redirectSignIn: 'http://localhost:3000/callbackpage/',
            redirectSignOut: 'http://localhost:3000/',
            responseType: 'token' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }

    }
});



const Test = () => {

    // window.location.href='https://authverifyrider.auth.ap-southeast-1.amazoncognito.com/login?client_id=168olh2qrkdfgvbofqb8mvib1m&response_type=code&scope=email+openid+profile+verify-rider-web/auth&redirect_uri=http://localhost:3000/callbackpage/';

    const signinwithfacebook = async () => {
        // window.location.href= 'https://authverifyrider.auth.ap-southeast-1.amazoncognito.com/oauth2/authorize?identity_provider=Facebook&redirect_uri=http://localhost:3000/callbackpage/&response_type=CODE&client_id=168olh2qrkdfgvbofqb8mvib1m&scope=email+openid+profile+verify-rider-web/auth';
        await Auth.federatedSignIn({provider: 'Facebook'});


    }

    // const Signinwithemail = async ({email, password}) => {
    //     try{
    //        Auth.signIn(email,password)
    //        .then(user => console.log('success: ' ,user))
    //        .catch(err => console.log(err));
    //         // setUser(result);
            
    //         } catch (error) {
    //         console.log('error signing up:', error);
    //     }
    
    // }

    return(
       <div>
           <button onClick={signinwithfacebook}>sign with facebook</button>
       </div>
    )
}

export default Test;
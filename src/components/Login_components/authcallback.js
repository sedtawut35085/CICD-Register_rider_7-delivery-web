import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Auth from '../Login_components/configuration'
import { Redirect } from 'react-router-dom'



// Note: cannot be used on the server-side (e.g. Next.js)
// import { useStateWithCallbackInstant } from 'use-state-with-callback';

const Callback = () => {

   const [user, setUser] = useState(null);
   const [Currenttoken, setCurrenttoken] = useState(null);

   useEffect( () => {
    async function check() {
       try{
          console.log('current user');
          console.log('url page login facebook: ', window.location.href )
          await Auth.currentAuthenticatedUser({
              bypassCache: false
          }).then(user => {
            setUser(user);
            console.log(user);

            })
          .catch(err => console.log(err));
       }catch(error){
          // console.log('error: ',error);
       }
    }
    check();
}, [])

   if(user){
    window.location.href= 'https://authregisterrider.auth.ap-southeast-1.amazoncognito.com/oauth2/authorize?identity_provider=Facebook&redirect_uri=http://localhost:3000/callbackpage/&response_type=CODE&client_id=1nr9emdl7aqvl74n9airikfpac&scope=email+openid+profile+register-rider-web/auth.write+register-rider-web/auth.read';
   }

    const url = window.location.href;
    console.log('url page authcallback : ', window.location.href );
    console.log('code: ', url.split('/')[4].split('=')[1]);
    const params = new URLSearchParams()
    params.append('grant_type', 'authorization_code')
    params.append('client_id', '1nr9emdl7aqvl74n9airikfpac')
    params.append('redirect_uri', 'http://localhost:3000/callbackpage/')
    params.append('code', url.split('/')[4].split('=')[1])
  
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  
    axios.post('https://authregisterrider.auth.ap-southeast-1.amazoncognito.com/oauth2/token', params, config)
      .then((result) => {
        console.log('data : ', result.data.access_token);
        setCurrenttoken(result);
        // Do somthing
      })
      .catch((err) => {
        // console.log('err : ', err);
        // Do somthing
      });
    const gettoken = () => {
      window.location.href= 'https://authregisterrider.auth.ap-southeast-1.amazoncognito.com/oauth2/authorize?identity_provider=Facebook&redirect_uri=http://localhost:3000/callbackpage/&response_type=CODE&client_id=1nr9emdl7aqvl74n9airikfpac&scope=email+openid+profile+register-rider-web/auth.write+register-rider-web/auth.read';
    }

    if (Currenttoken) {
      return <Redirect to="/" />;
      // <Redirect to="/confirmpage" />
  }
   
 
  return (

    <div>
      <button onClick={gettoken}>gettoken</button>
      
    </div>
  );
};

export default Callback;
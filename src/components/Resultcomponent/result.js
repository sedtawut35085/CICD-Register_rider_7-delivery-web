import React, { useEffect } from 'react'
import Auth from '../configuration/configuration-aws'
// import { Redirect } from 'react-router-dom'



const Resultpage = (props) => {

    const parseJwt = (token) => {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };

    useEffect( () => {
        async function check() {
           try{
              console.log('current user');
              console.log('url page result: ', window.location.href )
            //   let queries = queryString.parse(props.location.search)
            //   console.log(queries);
              await Auth.currentAuthenticatedUser({
                  bypassCache: false
              }).then(user => {
                  console.log(user);
                  console.log('Email: ', user.username)
                })
              .catch(err => console.log(err));

              Auth.currentSession()
              .then(data => {
                  console.log(data);
                  const token = data.getAccessToken();
                  console.log(token);
                  console.log(token.getJwtToken());
                  console.log(parseJwt(token.getJwtToken()));  
                //   console.log(parseJwt(token.getJwtToken()).username);      
                })
              .catch(err => console.log(err));
             
           }catch(error){
              console.log('error: ',error);
           }
        }
        check();
    }, [])

    return (
    <div>
        <h1>result page</h1>
        <button onClick={() => {
            Auth.signOut();
        }}>Sign out</button>
    </div>)

}

export default Resultpage
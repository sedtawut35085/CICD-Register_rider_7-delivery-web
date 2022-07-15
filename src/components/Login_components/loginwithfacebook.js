import React, { useState,useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Auth from './configuration'




const Loginwithfacebookpage = () =>   {
    const [user, setUser] = useState(null);
    // const { currentUser } = useContext(AuthContext);
      

    useEffect( () => {
        async function check() {
           try{
              console.log('current user');
              console.log('url page login facebook: ', window.location.href )
              await Auth.currentAuthenticatedUser({
                  bypassCache: false
              }).then(user => {setUser(user);
                })
              .catch(err => console.log(err));
             
           }catch(error){
              console.log('error: ',error);
           }
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
        }
        check();
    }, [])

    const signinwithfacebook = async () => {
        const response = await Auth.federatedSignIn({provider: 'Facebook'});
        console.log(response);
    }

    if (user) {
        return <Redirect to="/resultpage" />;
        // <Redirect to="/confirmpage" />
    }

    return (
        <div className='App'>
           <button onClick={signinwithfacebook}>click to sighin with facebook </button>
        </div>
    )
    
    // console.log('eiei');
    // return (
    //     <Authenticator>
    //     {({ signOut, user }) => (
    //         <main>
    //             <h1>Hello {user.username}</h1>
    //             <button onClick={signOut}>signout</button>
    //         </main>

    //     )}
    // </Authenticator>
    // )
   
  }

  export default Loginwithfacebookpage;



  
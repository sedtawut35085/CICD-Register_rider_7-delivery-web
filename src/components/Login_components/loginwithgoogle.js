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
              await Auth.currentAuthenticatedUser({
                  bypassCache: false
              }).then(user => {
                  setUser(user);
                  console.log(user);})
              .catch(err => console.log(err));

              

              Auth.currentSession()
              .then(data => console.log(data))
              .catch(err => console.log(err));
           }catch(error){
              console.log('error: ',error);
           }
        }
        check();
    }, [])

    if (user) {
        console.log('testuser: ',user);
        return <Redirect to="/resultpage" />;
        // <Redirect to="/confirmpage" />
    }

    return (
        <div className='App'>
           <button onClick={()=>{
               Auth.federatedSignIn({provider: 'Google'})


           }}>Google sighin</button>
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



  
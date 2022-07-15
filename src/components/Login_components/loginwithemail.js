import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Auth from './configuration'
import { Formik, Field , Form } from 'formik'


const Test = () =>   {
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

              

            //   Auth.currentSession()
            //   .then(data => console.log(data))
            //   .catch(err => console.log(err));
           }catch(error){
              console.log('error: ',error);
           }
        }
        check();
    }, [])

    const Signupwithemail = async ({name, email, password}) => {
        try{
            const result = Auth.signUp({
                username: email,
                password,
                attributes: {
                    name,          // optional
                    email,   // optional - E.164 number convention
                    // other custom attributes 
                }
            });
            console.log('success:', result);
            setUser(result);
            
            } catch (error) {
            console.log('error signing up:', error);
        }
    
    }

    if (user) {
        console.log('testuser: ',user);
        return <Redirect to="/confirmpage" />;
        // <Redirect to="/confirmpage" />
    }

    return (
        <div className='App'>
            <h3>Sign Up Form</h3>
            <Formik 
                initialValues={{name: '', email: '', password: ''}}
                onSubmit={(values) => {
                console.log("values", values)
                Signupwithemail(values)
            }}
            >
                <Form>
                    <Field name="name" placeholder="Enter name"/>
                    <Field name="email" type="email" placeholder="Enter email"/>
                    <Field name="password" type="password" placeholder="Enter password"/>
                    <button type='submit'>signup</button>
                </Form>

            </Formik>
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

  export default Test;



  
import React, { useState } from 'react';
import Auth from './configuration'
import { Formik, Field , Form } from 'formik';

import { Redirect } from 'react-router-dom'

const ConfirmCodePage = () => {
    // const { currentUser } = useContext(AuthContext);

    const [correct, setCorrect] = useState(null);
    
    

    const cinfirmCode = async (code) =>  {
        const email = 'aoy35085@hotmail.com';
        const password ='Aoy@290643';
        console.log("code:", code);
        await Auth.confirmSignUp("aoy35085@hotmail.com",code, {
            forceAliasCreation: true
        }).then(data => 
            {console.log(data);
            })
        .catch(err => console.log(err));
        await Auth.signIn(email, password)
           .then(user => {
               console.log('success: ' ,user);
               setCorrect(true);})
           .catch(err => console.log(err));   
    }

    if(correct){
        console.log('correct: ',correct);
        return <Redirect to="/signup" />;
    }


    
    return (
        <div className='App'>
            <h3>Sign Up Form</h3>
            <Formik 
                initialValues={{code: ''}}
                onSubmit={(values) => {
                console.log("values", values)
                cinfirmCode(values.code)
            }}
            >
                <Form>
                    <Field name="code" placeholder="Enter code"/>
                    <button type='submit'>confirm code</button>
                </Form>

            </Formik>
        </div>
    )

}

export default ConfirmCodePage;
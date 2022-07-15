import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import {auth , createUserDocument} from '../config'
import { AuthContext } from './Auth'
import firebaseConfig from '../config'
import axios from 'axios'

const SignUp = () => {
    const { currentUser } = useContext(AuthContext);

    const handleSubmit = async  (e) => {
        e.preventDefault();
        const displayName = "ass";
        const { email, password} = e.target.elements;

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email.value, password.value
              );
            await createUserDocument(user, { displayName });

        } catch(error) {
            alert(error);
        }
    }

    if (!currentUser) {
        return <Redirect to="/" />;
    }


    const fetchData = async () => {
        const token = await currentUser.getIdToken();
        console.log(token);
        const res = await axios('http://localhost:8080/api/todos', {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        
        })
        console.log(res.data)
    }

    // if (!currentUser) {
    //     return <Redirect to="/login" />;
    // }


    return (
        <>
            <div className="container mt-5">
            <h1>Sign Up ,{currentUser.email}</h1>
            <form onSubmit={fetchData()}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">เข้าสู่ระบบ</button>
            
            </form>
            <button onClick={() => firebaseConfig.auth().signOut()} class="btn btn-danger">Sign Out</button>
            </div>
        </>
    )
}

export default SignUp;
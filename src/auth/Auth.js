import React, { useState, useEffect } from 'react'
import Auth from '../configuration/configuration-aws'
import { useNavigate } from 'react-router-dom'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const navigate = useNavigate()

    useEffect( () => {
        async function check() {
            await Auth.currentAuthenticatedUser()
            .then((response) => {
                setCurrentUser(response);
            })
            .catch(() => {
                navigate('/');
            })
        }
        check();
    })

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}
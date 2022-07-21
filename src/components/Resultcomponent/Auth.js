import React, { useState, useEffect } from 'react'
import Auth from '../configuration/configuration-aws'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect( () => {
        async function check() {
            console.log('check current user');
            const response = await Auth.currentAuthenticatedUser();
            console.log(response);
            if(response){
                setCurrentUser(response);
                setLoading(false);
            }}
        check();
    }, [])

    // console.log(currentUser)

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}
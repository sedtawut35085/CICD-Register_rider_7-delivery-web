import React from 'react'
import Auth from '../../configuration/configuration-aws'
import { useNavigate } from 'react-router-dom'

const Resultpage = () => {

    const navigate = useNavigate()

    const logout = async () => {
        await Auth.signOut();
        navigate('/')
    }

    return (
    <div>
        <h1>Logout page</h1>
        <button className='transition border w-28 my-4 py-2 bg-red-600 hover:bg-red-800 text-white rounded-2xl delay-150' onClick={() => {
            logout() 
        }}>Sign out</button>
    </div>)

}

export default Resultpage
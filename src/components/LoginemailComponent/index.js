import React, { useState } from 'react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import RingLoader from "react-spinners/RingLoader";
import { useNavigate } from 'react-router-dom'

import { getUser } from '../../service/index'
import { checkinformationstate, checkstate } from '../CheckinformationComponent/index'
import Auth from '../../configuration/configuration-aws'

import * as constant from '../../constant/content'
import * as routeconstant from '../../constant/routeconstant'

import logo from '../../assets/logo.png'
import wallpaperlogincomponent from '../../assets/wallpaper-login.webp'

const LoginemailComponent = () => {

    const [ loading , setLoading] = useState(false);
    const [ isErrorRegister, setIsErrorRegister] = useState(false);
    const navigate = useNavigate()

    const Signin = async (e) => {
        e.preventDefault();
        setLoading(true)
       
        const { email, password } = e.target.elements;
        await Auth.signIn(email.value, password.value)
        .then(async () =>  {
            let response = await getUser()
            let result = await checkstate(response.data)
            if(result === routeconstant.RouteContent.information){
                let resultcurrentstep = await checkinformationstate(response.data)
                navigate(result, { state: { currentstep: resultcurrentstep} })  
            }else{
                navigate(result)  
            }
            setIsErrorRegister(null)
            setLoading(false)
            
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
            setIsErrorRegister(true)
        });   
    }

    const registeremail = async () => {
        navigate(routeconstant.RouteContent.login)
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>    
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src={wallpaperlogincomponent} alt="" />
            </div>
            <div className='bg-white flex flex-col'>
                <div className='flex justify-end pr-10 pt-3 mb-10'>
                    <img className='w-14 h-14 object-cover' src={logo} alt="" />
                </div>
                <form className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-4 pt-10 justify-center ' onSubmit={Signin}>
                    <h2 className='text-2xl font-bold text-left py-6 pt-14 mt-14'>{constant.LoginemailContent.title}</h2>
                    <div className='flex flex-col py-2'>
                        <FaUserAlt  className='absolute pt-2.5 pl-3 w-7 h-7 text-gray-500'></FaUserAlt>
                        <input type='email' className='border-b-2 border-gray pl-12 pb-2 pt-2' name='email' id="exampleInputEmail1" required placeholder={constant.LoginemailContent.placeholder.email} aria-describedby="emailHelp"  />
                        
                    </div>
                    <div className='flex flex-col py-2'>
                        <FaLock className='absolute pt-2.5 pl-3 w-7 h-7 text-gray-500'></FaLock>
                        <input className='border-b-2 border-gray pl-12 pb-2 pt-2' type="password" name="password" required placeholder={constant.LoginemailContent.placeholder.password} />
                    </div>
                  
                    <div className='pl-4 pr-4 ml-1 pt-4'>
                    {isErrorRegister === true?
                        <>
                            <div className='text-sm text-red-500 text-center'>{constant.LoginemailContent.errorlogin}</div>
                        </>
                        :                        
                        <>
                        </>
                    }   
                   
                    {loading === false?
                        <>
                            <button className='transition border w-full my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl delay-150'>{constant.LoginemailContent.button.email}</button>
                        </>
                        :                        
                        <>
                            <div className="my-4 pl-16 pt-2 flex">
                                <RingLoader
                                    size={25}
                                    color={"#599c3d"}
                                    loading={loading}
                                />
                                <div className="pl-4 text-center">
                                    {constant.LoginemailContent.loading}
                                </div>
                            </div>
                        </>
                    }   
                </div>
                <div className='pt-2'>
                    <h2 className='text-blue-800 text-sm underline text-center' onClick={registeremail}>{constant.LoginemailContent.registermessage}</h2>
                </div>
            </form>
                   
        </div>
    </div>
    )

}

export default LoginemailComponent
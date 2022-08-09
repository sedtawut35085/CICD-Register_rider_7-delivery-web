import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaUserAlt, FaLock, FaFacebookF, FaGoogle } from 'react-icons/fa'

import ConfirmemailComponent from '../ConfirmemailComponent'
import Auth from '../../configuration/configuration-aws'
import * as constant from '../../constant/content'
import './style.css'

import logo from '../../assets/logo.png'
import wallpaperlogincomponent from '../../assets/wallpaper-login.webp'

const LoginComponent = () => {
    
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isErrorPassword, setIsErrorPassword] = useState(false);
    const [isErrorConfirmPassword, setIsErrorConfirmPassword] = useState(false);
    const [isErrorRegister, setIsErrorRegister] = useState(null);
    const [errorPasswordMessage, setErrorPasswordMessage] = useState(null);
    const [errorConfirmPasswordMessage, setErrorConfirmErrorMessage] = useState(null);
    const [isUserEmail, setIsUserEmail] = useState(false);
    const [userEmail, setUserEmail] = useState(null);
    const navigate = useNavigate()
    
    useEffect( () => {
        async function check() {
            await Auth.currentAuthenticatedUser({
                bypassCache: false
            }).then(() => {
                navigate('/preliminary')
              })
            .catch(err => console.log('err: ',err));
        }
        check();
    }, )

    const checkPassword = (e) => {
        const Pass = e.target.value;
        setPassword(Pass);
        const uppercaseRegExp   = /([A-Z])/;
        const lowercaseRegExp   = /([a-z])/;
        const digitsRegExp      = /([0-9])/;
        const specialCharRegExp = /([#?!@$%^&*-])/;
        const minLengthRegExp   = /.{8,}/;
        const uppercasePassword =   uppercaseRegExp.test(Pass);
        const lowercasePassword =   lowercaseRegExp.test(Pass);
        const digitsPassword    =   digitsRegExp.test(Pass);
        const specialCharPassword = specialCharRegExp.test(Pass);
        const minLengthPassword =   minLengthRegExp.test(Pass);
        setIsErrorPassword(false)
        if(Pass.length === 0){
            setErrorPasswordMessage(constant.LoginContent.errorpasswordmessage.emthycase)
        }else if(!uppercasePassword){
            setErrorPasswordMessage(constant.LoginContent.errorpasswordmessage.uppercase)
        }else if(!lowercasePassword){
            setErrorPasswordMessage(constant.LoginContent.errorpasswordmessage.lowercase)
        }else if(!digitsPassword){
            setErrorPasswordMessage(constant.LoginContent.errorpasswordmessage.digitcase)
        }else if(!specialCharPassword){
            setErrorPasswordMessage(constant.LoginContent.errorpasswordmessage.specialcharcase)
        }else if(!minLengthPassword){
            setErrorPasswordMessage(constant.LoginContent.errorpasswordmessage.minlengthcase)
        }else{
            setIsErrorPassword(true)
            setErrorPasswordMessage(null)
        }
    }
    
    const checkValidation = (e) =>{
        const confPass = e.target.value    
        if(isErrorPassword){      
            setConfirmPassword(confPass)
            if(password !== confPass){
                setErrorConfirmErrorMessage(constant.LoginContent.errorconfirmpasswordmessage.notmatch)
                setIsErrorConfirmPassword(false)
            }else{
                setErrorConfirmErrorMessage(null)
                setIsErrorConfirmPassword(true)
            }
        }else{
            setErrorConfirmErrorMessage(constant.LoginContent.errorconfirmpasswordmessage.passwordnotcorrect)
        }
        
    }

    const Signupwithemail = async (e) => {
        e.preventDefault();
        if(isErrorConfirmPassword === true && isErrorPassword === true){
            const { email, password } = e.target.elements;
            await Auth.signUp({
                username: email.value,
                password: password.value,
                attributes: {
                    name : null,       
                    email: email.value, 
                }
            })
            .then(() => {
                setIsUserEmail(true);
                setUserEmail(email.value)
                setIsErrorRegister(null);
            })
            .catch(err =>{
                if(err.toString().includes('An account with the given email already exists.')){
                    setIsErrorRegister(constant.LoginContent.errorregistermailmessage.emailalreadyuse);
                }
            });
        }else{
            console.log('error signup')
        }
    }

    const signinwithfacebook = async () => {
        await Auth.federatedSignIn({provider: 'Facebook'});
    }

    const signinwithgoogle = async () => {
        await Auth.federatedSignIn({provider: 'Google'});
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
            {isUserEmail === false?
                    <>
                    <form className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8 pt-3 justify-center ' onSubmit={Signupwithemail}>
                        <h2 className='text-2xl font-bold text-left py-6'>{constant.LoginContent.title}</h2>
                        <div className='flex flex-col py-2'>
                            <FaUserAlt  className='absolute pt-2.5 pl-3 w-7 h-7 text-gray-500'></FaUserAlt>
                            <input type='email' className='border-bottom pl-12 pb-2 pt-2' name='email' id="exampleInputEmail1" required placeholder={constant.LoginContent.placeholder.email} aria-describedby="emailHelp"  />
                            <div className='ml-2 text-sm text-red-500'>{isErrorRegister}</div>
                        </div>
                        <div className='flex flex-col py-2'>
                            <FaLock className='absolute pt-2.5 pl-3 w-7 h-7 text-gray-500'></FaLock>
                            <input value={password} className='border-bottom pl-12 pb-2 pt-2' type="password" name="password" required placeholder={constant.LoginContent.placeholder.password} onChange={(e) => checkPassword(e)} />
                            <div className='ml-2 text-sm text-red-500'>{errorPasswordMessage}</div>
                        </div>
                        <div className='flex flex-col py-2'>
                            <FaLock className='absolute pt-2.5 pl-3 w-7 h-7 text-gray-500'></FaLock>
                            <input value={confirmPassword} className='border-bottom pl-12 pb-2 pt-2' type="password" name="confirmpassword" required placeholder={constant.LoginContent.placeholder.passwordconfirm} onChange={(e) => checkValidation(e)} />
                            <div className='ml-2 text-sm text-red-500'>{errorConfirmPasswordMessage}</div>
                        </div>
                        <div className='pl-4 pr-4 ml-1'>
                            <button className='transition border w-full my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl delay-150'>{constant.LoginContent.button.email}</button>
                        </div>
                    </form>
                    <div className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8'>
                        <div className='or'></div>
                        <div className='pl-4 pr-4 ml-1'>
                            <FaFacebookF className='absolute pt-8 mt-1 pl-9 w-14 h-12 text-white'></FaFacebookF>
                            <button onClick={signinwithfacebook} className='transition border w-full mt-4 mb-2 h-13 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-2xl delay-150'>
                                <div className='pl-10'>
                                {constant.LoginContent.button.facebook}
                                </div>
                            </button>
                        </div>
                        <div className='pl-4 pr-4 ml-1'>
                        <FaGoogle className='absolute pt-8 mt-1 pl-9 w-14 h-12 text-white'></FaGoogle>
                            <button onClick={signinwithgoogle} className='transition border w-full my-4 h-13 py-2 bg-red-600 hover:bg-red-800 text-white rounded-2xl delay-150'>
                                <div className='pl-6'>
                                {constant.LoginContent.button.google}
                                </div>
                            </button>
                        </div>
                    </div> 
                </>
                :
                <>
                    <ConfirmemailComponent userEmail={userEmail} userPassword={confirmPassword}></ConfirmemailComponent>
                </>
            }
                   
        </div>
    </div>
    )
}

export default LoginComponent;

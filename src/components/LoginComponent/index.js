import React, { useState, useEffect} from 'react'
import logo from '../../assets/logo.png'
import testImg from './assets/wallpaper-test-5.webp'
import { Redirect } from 'react-router-dom'
import { FaUserAlt, FaLock, FaFacebookF, FaGoogle } from 'react-icons/fa'
import ConfirmcodeComponent from '../ConfirmemailComponent'

import Auth from '../configuration/configuration-aws'
import './style.css'

const Home = () => {
    const [userEmail, setUserEmail] = useState(null);
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isErrorPassword, setIsErrorPassword] = useState(false);
    const [isErrorPasswordMessage, setIsErrorPasswordMessage] = useState(null);
    const [isErrorMessage, setIsErrorMessage] = useState(null);
    const [isError, setIsError] = useState(false);
    const [isErrorRegister, setIsErrorRegister] = useState(null);

    const [user, setUser] = useState(null);

    useEffect( () => {
        async function check() {
           try{
              await Auth.currentAuthenticatedUser({
                  bypassCache: false
              }).then(user => {
                  console.log('current user: ',user);
                  setUser(user);
                })
              .catch(err => console.log('err: ',err));
           }catch(error){
              console.log('error: ',error);
           }
        }
        check();
    }, [])

    const checkPassword = (e) => {
        const Pass = e.target.value;
        setPassword(Pass);
        const uppercaseRegExp   = /(?=.*?[A-Z])/;
        const lowercaseRegExp   = /(?=.*?[a-z])/;
        const digitsRegExp      = /(?=.*?[0-9])/;
        const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
        const minLengthRegExp   = /.{8,}/;
        const specialCharPassword = specialCharRegExp.test(Pass);
        const minLengthPassword =   minLengthRegExp.test(Pass);
        const digitsPassword    =   digitsRegExp.test(Pass);
        const lowercasePassword =   lowercaseRegExp.test(Pass);
        const uppercasePassword =   uppercaseRegExp.test(Pass);
        setIsErrorPassword(false)
        if(Pass.length === 0){
            setIsErrorPasswordMessage('โปรดใส่รหัสผ่าน')
        }else if(!uppercasePassword){
            setIsErrorPasswordMessage('ต้องมีตัวอักษรใหญ่อย่างน้อย 1 ตัว')
        }else if(!lowercasePassword){
            setIsErrorPasswordMessage('ต้องมีตัวอักษรเล็กอย่างน้อย 1 ตัว')
        }else if(!digitsPassword){
            setIsErrorPasswordMessage('ต้องมีตัวเลขอย่างน้อย 1 ตัว')
        }else if(!specialCharPassword){
            setIsErrorPasswordMessage('ต้องมีตัวอักษรพิเศษอย่างน้อย 1 ตัว')
        }else if(!minLengthPassword){
            setIsErrorPasswordMessage('ความยาวของรหัสผ่านต้องอย่างน้อย 8 ตัว')
        }else{
            setIsErrorPassword(true)
            setIsErrorPasswordMessage(null)
        }
    }
    
    const checkValidation = (e) =>{
        const confPass = e.target.value
        setConfirmPassword(confPass)
        if(password !== confPass){
            setIsErrorMessage("รหัสผ่านไม่ตรงกัน")
            setIsError(false)
        }else{
            setIsErrorMessage(null)
            setIsError(true)
        }
    }

    const Signupwithemail = async (e) => {
        e.preventDefault();
        if(isError === true && isErrorPassword === true){
            const { email, password} = e.target.elements;
            const name ='sss';
            await Auth.signUp({
                username: email.value,
                password: password.value,
                attributes: {
                    name,          // optional
                    email: email.value,   // optional - E.164 number convention
                    // other custom attributes 
                }
            })
            .then(data => {
                setUserEmail(email.value);
                // setUserPassword(password.value);
            })
            .catch(err =>{
                if(err.toString().includes('An account with the given email already exists.')){
                    setIsErrorRegister('อีเมลนี้ได้ถูกใช้งานไปแล้ว');
                }
                // User exists !!
            });
        }else{
            console.log('error signup')
        }
    
    }

    const signinwithfacebook = async () => {
        // window.location.href= 'https://authregisterrider.auth.ap-southeast-1.amazoncognito.com/oauth2/authorize?identity_provider=Facebook&redirect_uri=http://localhost:3000/callback/&response_type=CODE&client_id=1nr9emdl7aqvl74n9airikfpac&scope=email+openid+profile+register-rider-web/auth.write+register-rider-web/auth.read';
        await Auth.federatedSignIn({provider: 'Facebook'});
        // window.location.href= 'http://localhost:3000/callback/'

    }

    const signinwithgoogle = async () => {
        await Auth.federatedSignIn({provider: 'Google'});

    }

    if (user) {
        return <Redirect to="/signup" />
    }

    if(userEmail){
        return <ConfirmcodeComponent userEmail={userEmail} userPassword={confirmPassword}></ConfirmcodeComponent>
        // return <Redirect to="/confirmcode" />
    }


    return (  
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>    
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover photo' src={testImg} alt="" />
        </div>
        <div className='bg-white flex flex-col mb-14 pb-5'>
            <div className='flex justify-end pr-10 pb-14 pt-3 mb-14 content-start'>
                <img className='absolute w-14 h-14 object-cover photo mb-14' src={logo} alt="" />
            </div>
            <form className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8 pt-3 justify-center ' onSubmit={Signupwithemail}>
                <h2 className='text-2xl font-bold text-left py-6'>ลงทะเบียนผู้ใช้งาน</h2>
                <div className='flex flex-col py-2'>
                    <FaUserAlt  className='absolute pt-2.5 pl-3 w-7 h-7 text-gray-500'></FaUserAlt>
                    <input type='email' className='border-bottom pl-12 pb-2 pt-2' name='email' id="exampleInputEmail1" required placeholder='อีเมลผู้ใช้งาน' aria-describedby="emailHelp"  />
                    <div className='ml-2 text-sm text-red-500'>{isErrorRegister}</div>
                </div>
                <div className='flex flex-col py-2'>
                    <FaLock className='absolute pt-2.5 pl-3 w-7 h-7 text-gray-500'></FaLock>
                    <input value={password} className='border-bottom pl-12 pb-2 pt-2' type="password" name="password" required placeholder='รหัสผ่าน' onChange={(e) => checkPassword(e)} />
                    <div className='ml-2 text-sm text-red-500'>{isErrorPasswordMessage}</div>
                </div>
                <div className='flex flex-col py-2'>
                    <FaLock className='absolute pt-2.5 pl-3 w-7 h-7 text-gray-500'></FaLock>
                    <input value={confirmPassword} className='border-bottom pl-12 pb-2 pt-2' type="password" name="confirmpassword" required placeholder='กรอกรหัสผ่านอีกครั้ง' onChange={(e) => checkValidation(e)} />
                    <div className='ml-2 text-sm text-red-500'>{isErrorMessage}</div>
                </div>
                <div className='pl-4 pr-4 ml-1'>
                    <button className='transition border w-full my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl delay-150'>เข้าสู่ระบบ</button>
                </div>
            </form>
            <div className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8'>
                <div className='or'></div>
                <div className='pl-4 pr-4 ml-1'>
                    <FaFacebookF className='absolute pt-8 mt-1 pl-9 w-14 h-12 text-white'></FaFacebookF>
                    {/* <FontAwesomeIcon className='absolute pt-8 pl-11 mt-1 w-4 h-4 text-white' icon={faFacebookF}></FontAwesomeIcon> */}
                    <button onClick={signinwithfacebook} className='transition border w-full mt-4 mb-2 h-13 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded-2xl delay-150'>
                        <div className='pl-10'>
                            เข้าสู่ระบบด้วย Facebook
                        </div>
                    </button>
                </div>
                <div className='pl-4 pr-4 ml-1'>
                   <FaGoogle className='absolute pt-8 mt-1 pl-9 w-14 h-12 text-white'></FaGoogle>
                    {/* <FontAwesomeIcon className='absolute pt-8 pl-11 mt-1 w-4 h-4 text-white' icon={faGoogle}></FontAwesomeIcon> */}
                    <button onClick={signinwithgoogle} className='transition border w-full my-4 h-13 py-2 bg-red-600 hover:bg-red-800 text-white rounded-2xl delay-150'>
                        <div className='pl-6'>
                            เข้าสู่ระบบด้วย Google
                        </div>
                    </button>
                </div>
        
            
            </div>        
        </div>
    </div>
    )
}

export default Home;

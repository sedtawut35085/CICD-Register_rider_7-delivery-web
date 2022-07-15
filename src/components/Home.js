import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import signupImg from '../assets/wallpaper-page-1.webp'
import testImg from '../assets/wallpaper-test.jpeg'
import { Redirect } from 'react-router-dom'
import {auth , signInWithGoogle, signInwithFacebook } from '../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons' 
// import GoogleButton from 'react-google-button' 
// import FacebookLogin from 'react-facebook-login'
import { AuthContext } from './Auth'
 
const Home = () => {
    // const [currentUser, setCurrentUser] = useState(null);
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isError, setIsError] = useState(null);
    const { currentUser } = useContext(AuthContext);

    // const signUserIn = async response => {
    //     console.log('Res -->', response)
    //     const { name, email, accessToken, userID } = response
    //     const user = { name, email, accessToken, userId: userID }
    
    //     await axios({
    //       method: 'post',
    //       url: 'http://localhost:8080/signin/facebook',
    //       data: {
    //         user
    //       }
    //     })
    //   }

    const checkValidation = (e) =>{
        const confPass = e.target.value
        setConfirmPassword(confPass)
        if(password !== confPass){
            setIsError("รหัสผ่านไม่ตรงกัน")
        }else{
            setIsError(null)
        }
    }

    const handleSubmit = async  (e) => {
        e.preventDefault();
        // const displayName = "ass";
        const { email, password} = e.target.elements;
        if(isError == null){
            console.log('true')
            try {
                await auth.createUserWithEmailAndPassword(
                    email.value, password.value
                  );
                // const { user } = await auth.createUserWithEmailAndPassword(
                //     email.value, password.value
                //   );
                // setCurrentUser(true);
                // await createUserDocument(user, { displayName });
            } catch(error) {
                alert(error);
            }
        }else{
            alert('error');

        }
    }

    if (currentUser) {
        return <Redirect to="/signup" />
    }

    return (  
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>    
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover photo' src={testImg} alt="" />
        </div>
        <div className='bg-white flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8' onSubmit={handleSubmit}>
                <h2 className='text-2xl font-bold text-left py-6'>ลงทะเบียนผู้ใช้งาน</h2>
                <div className='flex flex-col py-2'>
                    <FontAwesomeIcon className='absolute pt-2.5 pl-3 mt-1 w-3.5 h-3.5 text-gray-500' icon={faUser}></FontAwesomeIcon>
                    <input type='email' className='border-bottom pl-12 pb-2 pt-2' name='email' id="exampleInputEmail1" placeholder='อีเมลผู้ใช้งาน' aria-describedby="emailHelp"  />
                </div>
                <div className='flex flex-col py-2'>
                    <FontAwesomeIcon className='absolute pt-2.5 pl-3 mt-1 w-3.5 h-3.5 text-gray-500' icon={faLock}></FontAwesomeIcon>
                    <input value={password} className='border-bottom pl-12 pb-2 pt-2' type="password" name="password" placeholder='รหัสผ่าน' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='flex flex-col py-2'>
                    <FontAwesomeIcon className='absolute pt-2.5 pl-3 mt-1 w-3.5 h-3.5 text-gray-500' icon={faLock}></FontAwesomeIcon>
                    <input value={confirmPassword} className='border-bottom pl-12 pb-2 pt-2' type="password" name="confirmpassword" placeholder='กรอกรหัสผ่านอีกครั้ง' onChange={(e) => checkValidation(e)} />
                    <div className='ml-2 text-sm text-red-500'>{isError}</div>
                </div>
                <button className='border w-full my-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl'>เข้าสู่ระบบ</button>
            </form>
            <div className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8'>
                <div class="or"></div>
                <div className='pl-4 pr-4 ml-1'>
                    <FontAwesomeIcon className='absolute pt-8 pl-11 mt-1 w-4 h-4 text-white' icon={faFacebookF}></FontAwesomeIcon>
                    <button onClick={signInwithFacebook} className='border w-full mt-4 mb-2 h-13 py-2 bg-blue-600 hover:bg-blue-800 text-white'>
                        <div className='pl-10'>
                            เข้าสู่ระบบด้วย Facebook
                        </div>
                    </button>
                </div>
                <div className='pl-4 pr-4 ml-1'>
                    <FontAwesomeIcon className='absolute pt-8 pl-11 mt-1 w-4 h-4 text-white' icon={faGoogle}></FontAwesomeIcon>
                    <button onClick={signInWithGoogle} className='border w-full my-4 h-13 py-2 bg-red-600 hover:bg-red-800 text-white'>
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

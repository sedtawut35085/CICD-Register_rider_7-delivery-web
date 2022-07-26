import React, { useState } from 'react';
import { authentication } from './configuration-firebase';
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
import testImg from './assets/wallpaper-7-eleven-delivery-02.jpeg'
import logo from '../../assets/logo.png'
import { Redirect } from 'react-router-dom'

const Verifyotp = ({userPhone}) => {
    const [correct, setCorrect] = useState(false);
    const [OTP,setOTP] = useState("");
    const [messageResendOTP,setMessageResendOTP] = useState("คลิกเพื่อส่งรหัส OTP อีกครั้ง")

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                
            }
        }, authentication);
    }

    const ResendOTP = (e) => {
        setMessageResendOTP('ส่งรหัส OTP อีกครั้งเรียบร้อย')
        generateRecaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication,userPhone,appVerifier)
        .then(confirmationResult => {
            window.confirmationResult = confirmationResult;
            
        }).catch((error) => {
            console.log(error);
        })
    }


    const verifyOTP = (e) => {
        console.log('otp');
        const otp = e.target.value;
        setOTP(otp);
        if(otp.length === 6){
            console.log(otp);
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                // const user = result.user;
                console.log('success');
                setCorrect(true)
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    if(correct){

        console.log('correct confimcode')
        return <Redirect to="/personalinformation" />;
    }

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>    
            <div className='hidden sm:block bg-gray-100'>
                <img className='w-full h-full object-cover photo' src={testImg} alt="" />
            </div>
            <div className='bg-white flex flex-col mb-14 pb-5'>
                <div className='flex justify-end pr-10 pb-14 pt-3 mb-14 content-start'>
                    <img className='absolute w-14 h-14 object-cover photo mb-14' src={logo} alt="" />
                </div>
                <div className='max-w-[400px] w-full mx-auto bg-white pl-8 pr-8 pt-14 justify-center' >
                    <div className='text-left py-6 pt-14'>
                        <h2 className='text-2xl font-bold' >กรอกเลข OTP ที่ส่งไปยังเลข</h2>
                        <h5>{userPhone}</h5>
                    </div>
                    <div className='flex flex-col py-2'>
                        <label htmlFor="exampleFormControlInput2" className="form-label inline-blocktext-gray-700 pl-2 text-sm">เลข OTP 6 หลัก</label>
                            <input
                              type="number" required
                              className="block w-full pl-4 pb-1 font-normal text-gray-700 bg-white bg-clip-padding border-bottom border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              placeholder="000000" id="otpinput" name="phonenumber" value={OTP} onChange={(e) =>verifyOTP(e)}
                            />
                    </div>
                
                    <div className='pl-4 pr-4 ml-1 mb-2'>
                        <button className='border w-full mt-4 mb-2 py-2 bg-green-600 hover:bg-green-800 text-white rounded-2xl'>ยืนยัน</button>
                        
                    </div>
                    <div className='pl-14 ml-8'>
                        <h2 className='text-red-500 text-sm pt-3 underline' onClick={ResendOTP}>{messageResendOTP}</h2>
                    </div>
                   
                    </div>       
                    <div id="recaptcha-container"></div>   
            </div>
            
        </div>
        // <div>
        //     <h1>{userPhone}</h1>
        //     <label>OTP</label>
        //     <input type="number" className='border pl-4 pb-2 pt-2' id="otpinput" value={OTP} onChange={(e) => verifyOTP(e)} />
        // </div>

    )

}

export default Verifyotp